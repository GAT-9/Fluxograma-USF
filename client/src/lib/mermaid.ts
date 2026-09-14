import {
  faqFlowConfigs,
  type FaqFlowTarget,
  type FaqItem,
} from "@/lib/faqData";

function escapeLabel(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\r?\n/g, " ")
    .trim();
}

function targetId(target: FaqFlowTarget) {
  if (typeof target === "number") return `step${target}`;
  if (target.startsWith("decision:")) return `decision_${target.slice(9)}`;
  if (target.startsWith("action:")) return `action_${target.slice(7)}`;
  return target;
}

export function stepsToMermaid(item: FaqItem) {
  const config = faqFlowConfigs[item.id];
  const steps = (item.steps ?? []).filter(
    (step) => !config?.omittedSteps?.includes(step.step)
  );
  const decisionAfter = new Map(
    config?.decisions
      .filter((decision) => decision.after !== undefined)
      .map((decision) => [decision.after, decision.id]) ?? []
  );
  const lines = ["flowchart TD", `  start(["${escapeLabel(item.question)}"])`];

  for (const step of steps) {
    lines.push(`  step${step.step}["<b>${step.step}</b> · ${escapeLabel(step.instruction)}"]`);
  }

  for (const decision of config?.decisions ?? []) {
    lines.push(`  decision_${decision.id}{"${escapeLabel(decision.question)}"}`);
  }
  for (const action of config?.actions ?? []) {
    lines.push(`  action_${action.id}["${escapeLabel(action.label)}"]`);
  }

  lines.push('  finish(["Fluxo concluído"])');
  if (config?.decisions.some((decision) =>
    decision.choices.some((choice) => choice.to === "undocumented")
  )) {
    lines.push('  undocumented["Conduta não descrita neste fluxo"]');
  }
  if (item.note) {
    lines.push(`  warning["<b>Atenção</b><br/>${escapeLabel(item.note)}"]`);
  }

  const firstTarget = decisionAfter.get("start")
    ? `decision_${decisionAfter.get("start")}`
    : steps.length > 0
      ? `step${steps[0].step}`
      : "finish";
  lines.push(`  start --> ${firstTarget}`);

  for (let index = 0; index < steps.length; index += 1) {
    const step = steps[index];
    const attachedDecision = decisionAfter.get(step.step);
    const defaultNext = steps[index + 1] ? steps[index + 1].step : "end";
    const configuredNext = config?.transitions?.[step.step];
    const next = attachedDecision
      ? `decision_${attachedDecision}`
      : targetId(configuredNext ?? defaultNext);
    lines.push(`  step${step.step} --> ${next === "end" ? "finish" : next}`);
  }

  for (const decision of config?.decisions ?? []) {
    for (const choice of decision.choices) {
      const target = targetId(choice.to);
      lines.push(
        `  decision_${decision.id} -->|"${escapeLabel(choice.label)}"| ${target === "end" ? "finish" : target}`
      );
    }
  }

  for (const action of config?.actions ?? []) {
    const target = targetId(action.to);
    lines.push(`  action_${action.id} --> ${target === "end" ? "finish" : target}`);
  }

  if (item.note) {
    lines.push("  finish -.-> warning");
  }

  lines.push("  classDef startEnd fill:#0f766e,color:#ffffff,stroke:#115e59,stroke-width:2px");
  lines.push("  classDef decision fill:#fef3c7,color:#92400e,stroke:#f59e0b,stroke-width:2px");
  lines.push("  classDef warning fill:#fffbeb,color:#92400e,stroke:#f59e0b,stroke-width:2px");
  lines.push("  classDef incomplete fill:#fff1f2,color:#9f1239,stroke:#e11d48,stroke-width:2px");
  lines.push("  class start,finish startEnd");
  if (config?.decisions.length) {
    lines.push(`  class ${config.decisions.map((decision) => `decision_${decision.id}`).join(",")} decision`);
  }
  if (item.note) lines.push("  class warning warning");
  if (lines.some((line) => line.startsWith("  undocumented["))) {
    lines.push("  class undocumented incomplete");
  }

  return lines.join("\n");
}

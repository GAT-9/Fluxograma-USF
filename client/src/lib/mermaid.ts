import type { FaqItem } from "@/lib/faqData";

let mermaidPromise: Promise<(typeof import("mermaid"))["default"]> | undefined;

export function getMermaid() {
  if (!mermaidPromise) {
    mermaidPromise = import("mermaid").then(({ default: mermaid }) => {
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        theme: "base",
        themeVariables: {
          fontFamily: "Lato, sans-serif",
          primaryColor: "#f0fdfa",
          primaryTextColor: "#134e4a",
          primaryBorderColor: "#0f766e",
          lineColor: "#64748b",
          secondaryColor: "#f8fafc",
          tertiaryColor: "#fffbeb",
        },
        flowchart: {
          curve: "basis",
          htmlLabels: true,
          nodeSpacing: 28,
          rankSpacing: 38,
          useMaxWidth: true,
          wrappingWidth: 260,
        },
      });

      return mermaid;
    });
  }

  return mermaidPromise;
}

function escapeLabel(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\r?\n/g, " ")
    .trim();
}

export function createFaqFlowchart(item: FaqItem) {
  const steps = item.steps ?? [];
  const lines = [
    "flowchart TD",
    `  start(["${escapeLabel(item.question)}"])`,
    ...steps.map(
      (step, index) =>
        `  step${index + 1}["<b>${step.step}</b> · ${escapeLabel(step.instruction)}"]`
    ),
    item.note ? `  warning["<b>Atenção</b><br/>${escapeLabel(item.note)}"]` : "",
    '  finish(["Fluxo concluído"])',
  ].filter(Boolean);

  const nodeIds = ["start", ...steps.map((_, index) => `step${index + 1}`), "finish"];

  for (let index = 0; index < nodeIds.length - 1; index += 1) {
    lines.push(`  ${nodeIds[index]} --> ${nodeIds[index + 1]}`);
  }

  if (item.note) {
    lines.push(`  ${nodeIds.at(-2)} -.-> warning`);
  }

  lines.push("  classDef startEnd fill:#0f766e,color:#ffffff,stroke:#115e59,stroke-width:2px");
  lines.push("  classDef warning fill:#fffbeb,color:#92400e,stroke:#f59e0b,stroke-width:2px");
  lines.push("  class start,finish startEnd");
  if (item.note) lines.push("  class warning warning");

  return lines.join("\n");
}

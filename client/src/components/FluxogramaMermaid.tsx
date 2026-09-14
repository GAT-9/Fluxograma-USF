import { useEffect, useId, useState } from "react";

let mermaidPromise: Promise<(typeof import("mermaid"))["default"]> | undefined;

function getMermaid() {
  if (!mermaidPromise) {
    mermaidPromise = import("mermaid").then(({ default: mermaid }) => {
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        theme: "base",
        flowchart: { curve: "basis", htmlLabels: true, useMaxWidth: true },
      });
      return mermaid;
    });
  }

  return mermaidPromise;
}

interface FluxogramaMermaidProps {
  chart: string;
  ariaLabel: string;
}

export function FluxogramaMermaid({ chart, ariaLabel }: FluxogramaMermaidProps) {
  const id = useId().replace(/:/g, "");
  const [svg, setSvg] = useState("");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let active = true;
    setSvg("");
    setHasError(false);

    getMermaid()
      .then((mermaid) => mermaid.render(`mermaid-${id}`, chart))
      .then(({ svg }) => {
        if (active) setSvg(svg);
      })
      .catch(() => {
        if (active) setHasError(true);
      });

    return () => {
      active = false;
    };
  }, [chart, id]);

  if (hasError) {
    return (
      <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
        Não foi possível gerar este fluxograma visual.
      </div>
    );
  }

  if (!svg) {
    return (
      <div className="flex min-h-40 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-500" role="status">
        Gerando fluxograma...
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className="overflow-x-auto rounded-xl border border-teal-100 bg-gradient-to-br from-white to-teal-50/60 p-3 [&_svg]:mx-auto [&_svg]:h-auto [&_svg]:min-w-[640px] [&_svg]:max-w-none sm:p-5 sm:[&_svg]:min-w-0 sm:[&_svg]:max-w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

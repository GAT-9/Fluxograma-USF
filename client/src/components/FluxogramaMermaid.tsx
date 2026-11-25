import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";

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

/**
 * Largura mínima (px) para fluxogramas largos em telas pequenas.
 * Abaixo disso o texto fica ilegível, então o diagrama passa a rolar
 * horizontalmente dentro do próprio quadro (sem quebrar a página).
 */
const MIN_READABLE_WIDTH = 520;

interface FluxogramaMermaidProps {
  chart: string;
  ariaLabel: string;
}

export function FluxogramaMermaid({ chart, ariaLabel }: FluxogramaMermaidProps) {
  const id = useId().replace(/:/g, "");
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);

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

  // Ajusta o tamanho do SVG: nunca amplia além do tamanho natural e só
  // impõe largura mínima quando o diagrama é realmente largo.
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container || !svg) return;
    // Inserido manualmente (e não via dangerouslySetInnerHTML) para que
    // re-renderizações do React não descartem os estilos aplicados abaixo.
    container.innerHTML = svg;
    const svgEl = container.querySelector("svg");
    if (!svgEl) return;

    const naturalWidth = svgEl.viewBox.baseVal?.width || svgEl.getBBox().width;
    svgEl.removeAttribute("height");
    svgEl.style.width = "100%";
    svgEl.style.height = "auto";
    svgEl.style.maxWidth = `${naturalWidth}px`;
    svgEl.style.minWidth = `${Math.min(naturalWidth, MIN_READABLE_WIDTH)}px`;
    svgEl.style.display = "block";
    svgEl.style.margin = "0 auto";

    const update = () =>
      setIsScrollable(container.scrollWidth > container.clientWidth + 1);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(container);
    return () => observer.disconnect();
  }, [svg]);

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
    <div className="w-full min-w-0">
      <div
        ref={containerRef}
        role="img"
        aria-label={ariaLabel}
        className="w-full max-w-full overflow-x-auto overscroll-x-contain rounded-xl border border-teal-100 bg-gradient-to-br from-white to-teal-50/60 p-2 sm:p-5"
      />
      {isScrollable && (
        <p className="mt-1.5 text-center text-[11px] text-slate-400">
          Arraste para os lados para ver o fluxograma completo
        </p>
      )}
    </div>
  );
}

/*
 * DESIGN PHILOSOPHY: Soft Clinical
 * Warm, approachable professionalism. DM Sans headings, Lato body.
 * Layout: Hero banner → Category tabs → Card grid with accordion FAQ items.
 * Color-coded left borders per category. Department badges on each card.
 * Progressive disclosure: question visible, steps revealed on expand.
 */

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Search,
  ClipboardList,
  UserCheck,
  Stethoscope,
  FileText,
  ShieldAlert,
  Building2,
  X,
  Activity,
  AlertTriangle,
  Bug,
  Hand,
  Cat,
  Shield,
} from "lucide-react";
import { faqCategories, type FaqCategory, type FaqItem } from "@/lib/faqData";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663479961843/M8AAzhPqVA4ZBQfdHmU4KC/hero-banner-jnKdddSVkMojRqX4jaK5Rc.webp";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ClipboardList,
  UserCheck,
  Stethoscope,
  FileText,
  ShieldAlert,
  Activity,
  AlertTriangle,
  Bug,
  Hand,
  Cat,
  Shield,
};

// ── Category Tab ──────────────────────────────────────────────────────────────
function CategoryTab({
  category,
  isActive,
  onClick,
}: {
  category: FaqCategory;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = iconMap[category.icon] ?? ClipboardList;
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border
        ${
          isActive
            ? "bg-teal-700 text-white border-teal-700 shadow-md"
            : "bg-white text-slate-600 border-slate-200 hover:border-teal-400 hover:text-teal-700"
        }`}
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      title={category.label}
    >
      <Icon className="w-4 h-4 shrink-0" />
      <span className="hidden sm:inline">{category.label}</span>
      <span className="sm:hidden text-xs font-bold">{category.label.substring(0, 3)}</span>
    </button>
  );
}

// ── Step List ─────────────────────────────────────────────────────────────────
function StepList({ steps }: { steps: { step: number; instruction: string }[] }) {
  return (
    <ol className="mt-3 space-y-2">
      {steps.map((s) => (
        <li key={s.step} className="flex gap-3 items-start">
          <span
            className="shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-800 text-xs font-bold flex items-center justify-center mt-0.5"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {s.step}
          </span>
          <span className="text-slate-600 text-sm leading-relaxed">{s.instruction}</span>
        </li>
      ))}
    </ol>
  );
}

// ── FAQ Card ──────────────────────────────────────────────────────────────────
function FaqCard({
  item,
  borderColor,
  badgeClass,
}: {
  item: FaqItem;
  borderColor: string;
  badgeClass: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25 }}
      className={`bg-white rounded-xl border border-slate-200 border-l-4 ${borderColor} shadow-sm hover:shadow-md transition-shadow duration-200`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-5 py-4 flex items-start justify-between gap-4 group"
        aria-expanded={open}
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span
              className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${badgeClass}`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {item.department}
            </span>
          </div>
          <p
            className="text-slate-800 font-semibold text-base leading-snug group-hover:text-teal-700 transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {item.question}
          </p>
        </div>
        <ChevronDown
          className={`shrink-0 w-5 h-5 text-slate-400 mt-1 transition-transform duration-300 ${
            open ? "rotate-180 text-teal-600" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t border-slate-100 pt-4">
              <p className="text-slate-600 text-sm leading-relaxed">{item.answer}</p>
              {item.steps && <StepList steps={item.steps} />}
              {item.note && (
                <div className="mt-4 flex gap-2.5 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
                  <span className="text-amber-600 text-xs font-bold uppercase tracking-wide shrink-0 mt-0.5">
                    Atenção
                  </span>
                  <p className="text-amber-800 text-xs leading-relaxed">{item.note}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>(faqCategories[0].id);
  const [searchQuery, setSearchQuery] = useState("");

  const currentCategory = faqCategories.find((c) => c.id === activeCategory)!;

  const filteredItems = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return currentCategory.items;
    return currentCategory.items.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.department.toLowerCase().includes(q) ||
        item.steps?.some((s) => s.instruction.toLowerCase().includes(q))
    );
  }, [currentCategory, searchQuery]);

  // Global search across all categories
  const globalResults = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return null;
    const results: { category: FaqCategory; item: FaqItem }[] = [];
    for (const cat of faqCategories) {
      for (const item of cat.items) {
        if (
          item.question.toLowerCase().includes(q) ||
          item.answer.toLowerCase().includes(q) ||
          item.department.toLowerCase().includes(q)
        ) {
          results.push({ category: cat, item });
        }
      }
    }
    return results;
  }, [searchQuery]);

  const totalItems = faqCategories.reduce((acc, c) => acc + c.items.length, 0);

  return (
    <div className="min-h-screen" style={{ background: "#FAFAF8" }}>
      {/* ── Top Navigation ── */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-700 flex items-center justify-center">
              <Building2 className="w-4 h-4 text-white" />
            </div>
            <div>
              <span
                className="text-slate-800 font-bold text-sm leading-none block"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Portal USF Vereador Durval Samuel de Souza
              </span>
              <span className="text-slate-400 text-xs">
                Fluxogramas Assistenciais — PET
              </span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-xs text-slate-400">
            <span className="font-medium text-teal-700">{totalItems}</span>
            <span>fluxogramas</span>
          </div>
        </div>
      </header>

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden" style={{ height: "280px" }}>
        <img
          src={HERO_IMAGE}
          alt="Corredor da unidade de saúde"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(15,60,70,0.82) 0%, rgba(15,60,70,0.55) 60%, rgba(15,60,70,0.15) 100%)",
          }}
        />
        <div className="relative container h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-teal-300 text-xs font-semibold uppercase tracking-widest mb-2">
              Guia de Referência Interna
            </p>
            <h1
              className="text-white text-3xl md:text-4xl font-bold leading-tight mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Fluxogramas de
              <br />
              <span className="text-teal-300">Vigilância em Saúde</span>
            </h1>
            <p className="text-slate-200 text-sm max-w-md leading-relaxed">
              Protocolos passo a passo para a equipe da unidade — desde a recepção até a
              notificação e acompanhamento dos casos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Search + Category Tabs ── */}
      <div className="bg-white border-b border-slate-200 sticky top-14 z-20 shadow-sm">
        <div className="container py-3">
          {/* Search bar */}
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Busque por procedimentos, departamentos ou palavras-chave…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-9 py-2.5 text-sm border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition"
              style={{ fontFamily: "'Lato', sans-serif" }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {/* Category tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {faqCategories.map((cat) => (
              <CategoryTab
                key={cat.id}
                category={cat}
                isActive={activeCategory === cat.id && !searchQuery}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSearchQuery("");
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <main className="container py-8">
        {/* Global search results */}
        {searchQuery && globalResults !== null ? (
          <div>
            <div className="mb-5">
              <h2
                className="text-slate-800 text-xl font-bold"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Resultados da Busca:
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                {globalResults.length === 0
                  ? "Nenhum resultado encontrado. Tente palavras-chave diferentes."
                  : `${globalResults.length} resultado${globalResults.length !== 1 ? "s" : ""} para "${searchQuery}"`}
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <AnimatePresence>
                {globalResults.map(({ category, item }) => (
                  <div key={item.id}>
                    <p className="text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">
                      {category.label}
                    </p>
                    <FaqCard
                      item={item}
                      borderColor={category.color}
                      badgeClass={category.bgColor}
                    />
                  </div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          /* Category view */
          <div>
            {/* Category header */}
            <motion.div
              key={currentCategory.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-1">
                {(() => {
                  const Icon = iconMap[currentCategory.icon] ?? ClipboardList;
                  return (
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center ${currentCategory.bgColor}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  );
                })()}
                <h2
                  className="text-slate-800 text-2xl font-bold"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {currentCategory.label}
                </h2>
              </div>
              <p className="text-slate-500 text-sm ml-12">
                {currentCategory.description}
              </p>
            </motion.div>

            {/* FAQ cards grid */}
            <div className="grid gap-4 md:grid-cols-2">
              <AnimatePresence mode="wait">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <FaqCard
                      key={item.id}
                      item={item}
                      borderColor={currentCategory.color}
                      badgeClass={currentCategory.bgColor}
                    />
                  ))
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-2 text-center py-16 text-slate-400"
                  >
                    <Search className="w-10 h-10 mx-auto mb-3 opacity-40" />
                    <p className="text-sm">
                      Nenhum resultado encontrado nesta categoria.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-200 bg-white mt-12">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-teal-700 flex items-center justify-center">
              <Building2 className="w-3 h-3 text-white" />
            </div>
            <span
              className="text-slate-600 text-sm font-semibold"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Portal USF Vereador Durval Samuel de Souza
            </span>
          </div>
          <p className="text-slate-400 text-xs text-center">
            © 2025 Copyright{" "}
            <span className="font-bold">Desenvolvido pela equipe do GAT-9 PET-Saude Digital</span>. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";

import { Project } from "../Project";
import { SectionHeading } from "../SectionHeading";
import { projects } from "../../data/projects";
import { useApp } from "../../context/AppContext";

const INITIAL_COUNT = 6;
const FILTERS = ["all", "web", "mobile"];

export function ProjectSection() {
  const { t } = useApp();
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filtered = filter === "all" ? projects : projects.filter((project) => project.platform === filter);
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="flex flex-col gap-10 py-24">
      <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} description={t.projects.description} />

      <div role="group" aria-label={t.projects.eyebrow} className="mx-auto flex rounded-full border border-line bg-surface p-1">
        {FILTERS.map((key) => {
          const count = key === "all" ? projects.length : projects.filter((project) => project.platform === key).length;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              aria-pressed={filter === key}
              className={clsx(
                "flex h-10 cursor-pointer items-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors duration-200",
                filter === key ? "bg-fg text-bg" : "text-muted hover:text-fg",
              )}
            >
              {t.projects.filters[key]}
              <span className={clsx("text-xs tabular-nums", filter === key ? "opacity-70" : "opacity-60")}>{count}</span>
            </button>
          );
        })}
      </div>

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project) => (
            <Project key={project.id} data={project} />
          ))}
        </AnimatePresence>
      </ul>

      {filtered.length > INITIAL_COUNT && (
        <button
          type="button"
          onClick={() => setShowAll((value) => !value)}
          aria-expanded={showAll}
          className="mx-auto inline-flex h-12 cursor-pointer items-center gap-2 rounded-full border border-line bg-surface px-6 font-semibold transition-colors duration-200 hover:bg-surface-2"
        >
          {showAll ? t.projects.showLess : `${t.projects.showAll} (${filtered.length})`}
          <ChevronDown
            size={18}
            className={clsx("transition-transform duration-300", showAll && "rotate-180")}
            aria-hidden="true"
          />
        </button>
      )}
    </section>
  );
}

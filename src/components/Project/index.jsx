import { m } from "framer-motion";
import { ArrowUpRight, Github, Smartphone } from "lucide-react";
import { clsx } from "clsx";

import { useApp } from "../../context/AppContext";
import { technologies } from "../../data/technologies";

// `ref` lets AnimatePresence (mode="popLayout") measure the card on exit.
export function Project({ data, ref }) {
  const { t, lang } = useApp();

  return (
    <m.li
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.15 } }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-24px_var(--color-glow)]"
    >
      <div className="relative aspect-16/10 overflow-hidden bg-surface-2">
        <img
          src={data.image}
          alt=""
          width="960"
          height="600"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {data.platform === "mobile" && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
            <Smartphone size={12} aria-hidden="true" />
            Mobile
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="text-xl font-bold">{data.name}</h3>
        <p className="flex-1 text-sm leading-relaxed text-muted">{data.description[lang]}</p>

        <ul className="flex flex-wrap gap-1.5" aria-label="Tech">
          {data.tech.map((id) => {
            const tech = technologies[id];
            return (
              <li
                key={id}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted"
              >
                <img
                  src={tech.icon}
                  alt=""
                  width="14"
                  height="14"
                  loading="lazy"
                  className={clsx("h-3.5 w-3.5 object-contain", tech.darkFix)}
                />
                {tech.name}
              </li>
            );
          })}
        </ul>

        <div className="mt-2 flex gap-2 border-t border-line pt-4">
          {data.previewLink && (
            <a
              href={data.previewLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`${t.projects.livePreview}: ${data.name}`}
              className="inline-flex h-10 flex-1 items-center justify-center gap-1.5 rounded-full bg-fg px-4 text-sm font-semibold text-bg transition-opacity duration-200 hover:opacity-85"
            >
              {t.projects.livePreview}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
          {data.repositoryLink && (
            <a
              href={data.repositoryLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`${t.projects.viewCode}: ${data.name}`}
              className="inline-flex h-10 flex-1 items-center justify-center gap-1.5 rounded-full border border-line px-4 text-sm font-semibold transition-colors duration-200 hover:bg-surface-2"
            >
              <Github size={16} aria-hidden="true" />
              {t.projects.viewCode}
            </a>
          )}
        </div>
      </div>
    </m.li>
  );
}

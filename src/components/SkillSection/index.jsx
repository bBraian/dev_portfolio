import { clsx } from "clsx";
import { useApp } from "../../context/AppContext";
import { skillGroups, technologies } from "../../data/technologies";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";

export function SkillSection() {
  const { t } = useApp();

  return (
    <section id="stack" className="flex flex-col gap-12 py-24">
      <SectionHeading eyebrow={t.stack.eyebrow} title={t.stack.title} description={t.stack.description} />

      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.key}
            delay={index * 0.08}
            className="rounded-3xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent/40 sm:p-8"
          >
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.14em] text-muted">{t.stack.groups[group.key]}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((id) => {
                const tech = technologies[id];
                return (
                  <li
                    key={id}
                    className="group flex w-22 flex-col items-center gap-2 rounded-2xl p-3 transition-colors duration-200 hover:bg-surface-2"
                  >
                    <img
                      src={tech.icon}
                      alt=""
                      width="44"
                      height="44"
                      loading="lazy"
                      decoding="async"
                      className={clsx(
                        "h-11 w-11 object-contain transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110",
                        tech.darkFix,
                      )}
                    />
                    <span className="text-center text-xs font-medium text-muted group-hover:text-fg">{tech.name}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { Building2, MapPin, Calendar } from "lucide-react";
import { clsx } from "clsx";
import { Reveal } from "../Reveal";

function formatMonth({ year, month }, locale) {
  return new Intl.DateTimeFormat(locale, { month: "short", year: "numeric" }).format(new Date(year, month - 1));
}

// One entry of the About page timeline. `item` holds dates/tech, `text` the translated copy.
export function TimelineItem({ item, text, locale, presentLabel, expectedLabel, isLast }) {
  const isCurrent = !item.end;
  const period = `${formatMonth(item.start, locale)} — ${isCurrent ? presentLabel : formatMonth(item.end, locale)}`;

  return (
    <li className="relative grid grid-cols-[1.5rem_1fr] gap-4 sm:gap-6">
      <div className="relative flex justify-center" aria-hidden="true">
        {!isLast && <span className="absolute top-7 -bottom-2 w-px bg-line" />}
        <span
          className={clsx(
            "relative mt-2 flex h-4 w-4 items-center justify-center rounded-full border-2",
            isCurrent ? "border-transparent bg-brand-gradient" : "border-line bg-bg",
          )}
        >
          {isCurrent && <span className="absolute inset-0 animate-ping rounded-full bg-brand-blue/50" />}
        </span>
      </div>

      <Reveal className="mb-8 rounded-3xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent/40 md:p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <h3 className="text-xl font-bold md:text-2xl">{text.title}</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5 font-medium text-fg">
                <Building2 size={15} aria-hidden="true" />
                {item.company}
              </span>
              {item.location && (
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={15} aria-hidden="true" />
                  {item.location}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {text.type && (
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{text.type}</span>
            )}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs font-semibold text-muted">
              <Calendar size={13} aria-hidden="true" />
              {period}
            </span>
          </div>
        </div>

        {text.description && <p className="mt-4 leading-relaxed text-muted">{text.description}</p>}

        {isCurrent && item.expectedEnd && (
          <p className="mt-3 text-sm text-muted">
            <span className="font-semibold text-fg">{expectedLabel}:</span> {formatMonth(item.expectedEnd, locale)}
          </p>
        )}

        {text.highlights?.length > 0 && (
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {text.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gradient" aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>
        )}

        {item.tech?.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech">
            {item.tech.map((tech) => (
              <li key={tech} className="rounded-full border border-line bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted">
                {tech}
              </li>
            ))}
          </ul>
        )}
      </Reveal>
    </li>
  );
}

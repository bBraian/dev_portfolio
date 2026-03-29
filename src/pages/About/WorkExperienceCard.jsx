import { Building2, MapPin, Calendar, Link as LinkIcon } from "lucide-react";

export function WorkExperienceCard({
  title,
  company,
  locale,
  startDate,
  endDate,
  type = "Full Time",
  description,
  highlights,
  tech,
  links,
  endLabel = "Present",
  expectedCompletion,
}) {
  const safeHighlights = Array.isArray(highlights) ? highlights.filter(Boolean) : [];
  const safeTech = Array.isArray(tech) ? tech.filter(Boolean) : [];
  const safeLinks = Array.isArray(links) ? links.filter((l) => l?.url) : [];

  return (
    <div className="bg-boxes-light dark:bg-boxes-dark rounded-2xl p-6 md:p-8 transition-colors border border-separator-light dark:border-separator-dark hover:border-blue-400/60 dark:hover:border-blue-500/50 hover:shadow-md hover:shadow-black/5 dark:hover:shadow-black/20">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row justify-between md:items-start gap-3">
          <div className="space-y-1.5">
            <h3 className="text-xl md:text-2xl font-semibold text-titles-light dark:text-titles-dark">
              {title}
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-contents-light dark:text-contents-dark">
              <div className="flex items-center gap-2">
                <Building2 size={16} />
                <span className="font-medium">{company}</span>
              </div>
              {locale && (
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{locale}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              {type}
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-background-light dark:bg-background-dark border border-separator-light dark:border-separator-dark text-contents-light dark:text-contents-dark">
              <Calendar size={14} />
              <span>
                {startDate} — {endDate || endLabel}
              </span>
            </span>
          </div>
        </div>

        {description && (
          <p className="text-sm md:text-base leading-relaxed text-contents-light dark:text-contents-dark">
            {description}
          </p>
        )}

        {(safeHighlights.length > 0 || (expectedCompletion && !endDate)) && (
          <div className="space-y-3">
            {expectedCompletion && !endDate && (
              <div className="text-sm text-contents-light dark:text-contents-dark">
                <span className="font-semibold">{expectedCompletion.label}</span>{" "}
                <span>{expectedCompletion.value}</span>
              </div>
            )}

            {safeHighlights.length > 0 && (
              <ul className="list-disc pl-5 space-y-1 text-sm text-contents-light dark:text-contents-dark">
                {safeHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {(safeTech.length > 0 || safeLinks.length > 0) && (
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-1">
            {safeTech.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {safeTech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-background-light dark:bg-background-dark border border-separator-light dark:border-separator-dark text-contents-light dark:text-contents-dark"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {safeLinks.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {safeLinks.map((l) => (
                  <a
                    key={`${l.label || "link"}-${l.url}`}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 dark:text-blue-300 hover:underline"
                  >
                    <LinkIcon size={16} />
                    <span>{l.label || l.url}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

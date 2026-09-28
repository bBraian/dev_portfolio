import { clsx } from "clsx";
import { Reveal } from "../Reveal";

export function SectionHeading({ eyebrow, title, description, align = "center", as: Heading = "h2" }) {
  return (
    <Reveal className={clsx("flex max-w-2xl flex-col gap-4", align === "center" ? "mx-auto items-center text-center" : "items-start")}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <Heading className="text-4xl font-bold leading-[1.05] md:text-5xl">{title}</Heading>
      {description && <p className="text-lg text-muted text-pretty">{description}</p>}
    </Reveal>
  );
}

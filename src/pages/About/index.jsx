import { m } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import profile from "../../assets/images/profile_pic.webp";
import { useApp } from "../../context/AppContext";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { experience, education } from "../../data/experience";
import { TimelineItem } from "../../components/TimelineItem";
import { SectionHeading } from "../../components/SectionHeading";

export default function About() {
  const { t } = useApp();
  useDocumentTitle(t.meta.about);

  return (
    <div className="flex flex-col gap-24 pt-12 md:pt-20">
      <m.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="grid items-center gap-10 lg:grid-cols-[1fr_20rem]"
      >
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient" aria-hidden="true" />
            {t.about.eyebrow}
          </span>
          <h1 className="text-4xl leading-[1.05] font-bold md:text-6xl">{t.about.title}</h1>
          <div className="space-y-4 text-lg leading-relaxed text-muted text-pretty">
            {t.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            to="/contact"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-brand-gradient px-6 font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            {t.cta.button}
            <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <div className="relative mx-auto hidden w-full max-w-xs lg:block">
          <div className="absolute -inset-4 rotate-6 rounded-4xl bg-brand-gradient opacity-50 blur-2xl" aria-hidden="true" />
          <img
            src={profile}
            alt={t.hero.photoAlt}
            width="640"
            height="640"
            className="relative aspect-square w-full rotate-3 rounded-4xl border border-line object-cover transition-transform duration-500 hover:rotate-0"
          />
        </div>
      </m.section>

      <Timeline
        title={t.about.work}
        description={t.about.workDescription}
        items={experience}
        texts={t.experience}
      />

      <Timeline
        title={t.about.education}
        description={t.about.educationDescription}
        items={education}
        texts={t.education}
      />
    </div>
  );
}

function Timeline({ title, description, items, texts }) {
  const { t } = useApp();
  return (
    <section className="flex flex-col gap-10">
      <SectionHeading title={title} description={description} align="start" />
      <ol>
        {items.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            text={texts[item.id]}
            locale={t.locale}
            presentLabel={t.about.present}
            expectedLabel={t.about.expectedCompletion}
            isLast={index === items.length - 1}
          />
        ))}
      </ol>
    </section>
  );
}

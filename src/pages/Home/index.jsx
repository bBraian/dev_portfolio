import { Link } from "react-router-dom";
import { m } from "framer-motion";
import { ArrowRight, ArrowDown, Mail } from "lucide-react";

import profile from "../../assets/images/profile_pic.webp";
import { useApp } from "../../context/AppContext";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { site, yearsOfExperience } from "../../data/site";
import { projects } from "../../data/projects";
import { technologies } from "../../data/technologies";
import { SkillSection } from "../../components/SkillSection";
import { ProjectSection } from "../../components/ProjectSection";
import { Reveal } from "../../components/Reveal";
import { SocialLinks } from "../../components/SocialLinks";

const ease = [0.16, 1, 0.3, 1];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function Home() {
  const { t } = useApp();
  useDocumentTitle(t.meta.home);

  const stats = [
    { value: `${yearsOfExperience()}+`, label: t.hero.statYears },
    { value: projects.length, label: t.hero.statProjects },
    { value: `${Object.keys(technologies).length}+`, label: t.hero.statTech },
  ];

  return (
    <>
      <section className="relative isolate grid min-h-[calc(100dvh-4.5rem)] items-center gap-12 py-12 lg:grid-cols-[1.25fr_1fr] lg:gap-8 lg:py-20">
        <HeroBackdrop />

        <m.div variants={stagger} initial="hidden" animate="show" className="order-2 flex flex-col gap-7 lg:order-1">
          <m.span
            variants={rise}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 text-sm font-medium text-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t.hero.badge}
          </m.span>

          <m.h1 variants={rise} className="text-5xl leading-[0.95] font-bold sm:text-6xl xl:text-7xl">
            <span className="mb-3 block text-2xl font-medium text-muted sm:text-3xl">{t.hero.greeting}</span>
            <span className="text-gradient">{site.name}</span>
          </m.h1>

          <m.p variants={rise} className="max-w-xl text-lg text-muted text-pretty sm:text-xl">
            <strong className="font-semibold text-fg">{t.hero.role}.</strong> {t.hero.tagline}
          </m.p>

          <m.div variants={rise} className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/#projects"
              className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-brand-gradient px-6 font-semibold text-white shadow-[0_10px_40px_-10px_var(--color-glow)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              {t.hero.ctaProjects}
              <ArrowDown size={18} className="transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-surface px-6 font-semibold transition-colors duration-200 hover:bg-surface-2"
            >
              <Mail size={18} aria-hidden="true" />
              {t.hero.ctaContact}
            </Link>
            <SocialLinks className="justify-center sm:ml-2" />
          </m.div>

          <m.dl variants={rise} className="mt-2 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-1">
                <dt className="text-sm text-muted">{stat.label}</dt>
                <dd className="font-display text-3xl font-bold sm:text-4xl">{stat.value}</dd>
              </div>
            ))}
          </m.dl>
        </m.div>

        <m.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease }}
          className="relative order-1 mx-auto w-48 sm:w-72 lg:order-2 lg:w-full lg:max-w-sm"
        >
          <div className="absolute -inset-6 rounded-full bg-brand-gradient opacity-40 blur-3xl" aria-hidden="true" />
          <div
            className="absolute inset-0 animate-spin-slow rounded-full"
            style={{ background: "conic-gradient(from 0deg, #0a4bff, #7a5cff, #ff9100, #0a4bff)" }}
            aria-hidden="true"
          />
          <img
            src={profile}
            alt={t.hero.photoAlt}
            width="640"
            height="640"
            fetchPriority="high"
            className="relative aspect-square w-full rounded-full border-[6px] border-bg object-cover"
          />
        </m.div>
      </section>

      <SkillSection />
      <ProjectSection />
      <ContactCta />
    </>
  );
}

// Static ambient glow + grid behind the hero. Pure CSS, no JS per frame.
function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div className="bg-grid absolute inset-x-[-50vw] inset-y-0 opacity-60" />
      <div className="absolute -top-24 -left-24 h-96 w-96 animate-float rounded-full bg-brand-blue/25 blur-3xl" />
      <div
        className="absolute right-0 bottom-0 h-80 w-80 animate-float rounded-full bg-brand-orange/20 blur-3xl"
        style={{ animationDelay: "-7s" }}
      />
    </div>
  );
}

function ContactCta() {
  const { t } = useApp();
  return (
    <Reveal as="section" className="mt-24">
      <div className="relative isolate overflow-hidden rounded-3xl border border-line bg-surface px-6 py-14 text-center sm:px-12 sm:py-20">
        <div
          className="absolute inset-0 -z-10 opacity-20 dark:opacity-30"
          style={{ background: "radial-gradient(60% 80% at 50% 0%, #0a4bff 0%, transparent 70%), radial-gradient(50% 70% at 100% 100%, #ff9100 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <h2 className="mx-auto max-w-2xl text-4xl font-bold md:text-5xl">{t.cta.title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">{t.cta.description}</p>
        <Link
          to="/contact"
          className="group mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-fg px-7 font-semibold text-bg transition-transform duration-200 hover:-translate-y-0.5"
        >
          {t.cta.button}
          <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </Reveal>
  );
}

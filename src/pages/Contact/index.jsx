import { useEffect, useRef, useState } from "react";
import { m } from "framer-motion";
import { Mail, Copy, Check, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";

import { useApp } from "../../context/AppContext";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { site, socials } from "../../data/site";
import { Reveal } from "../../components/Reveal";

export default function Contact() {
  const { t } = useApp();
  useDocumentTitle(t.meta.contact);
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef();

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  const github = socials.find((social) => social.key === "github");
  const linkedin = socials.find((social) => social.key === "linkedin");

  const channels = [
    { icon: Linkedin, label: linkedin.label, value: "Braian Viacava", href: linkedin.url },
    { icon: Github, label: github.label, value: `@${site.handle}`, href: github.url },
  ];

  return (
    <div className="relative isolate flex flex-col items-center pt-16 text-center md:pt-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-96 max-w-3xl opacity-30 blur-3xl"
        style={{ background: "radial-gradient(50% 50% at 30% 50%, #0a4bff, transparent), radial-gradient(50% 50% at 70% 50%, #ff9100, transparent)" }}
        aria-hidden="true"
      />

      <m.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center gap-6"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient" aria-hidden="true" />
          {t.contact.eyebrow}
        </span>
        <h1 className="max-w-3xl text-4xl leading-[1.05] font-bold sm:text-5xl md:text-7xl">{t.contact.title}</h1>
        <p className="max-w-xl text-lg text-muted text-pretty">{t.contact.description}</p>

        <a
          href={`mailto:${site.email}`}
          className="text-gradient mt-4 font-display text-2xl font-bold break-all transition-opacity duration-200 hover:opacity-80 sm:text-4xl md:text-5xl"
        >
          {site.email}
        </a>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            <Mail size={18} aria-hidden="true" />
            {t.contact.sendEmail}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full border border-line bg-surface px-6 font-semibold transition-colors duration-200 hover:bg-surface-2"
          >
            {copied ? <Check size={18} className="text-emerald-500" aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
            <span aria-live="polite">{copied ? t.contact.copied : t.contact.copy}</span>
          </button>
        </div>
      </m.div>

      <ul className="mt-16 grid w-full max-w-2xl gap-4 text-left sm:grid-cols-2">
        {channels.map(({ icon: Icon, label, value, href }, index) => (
          <Reveal as="li" key={label} delay={index * 0.08}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full items-center gap-4 rounded-3xl border border-line bg-surface p-5 transition-[border-color,translate] duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-surface-2 text-fg">
                <Icon size={22} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm text-muted">{label}</span>
                <span className="block truncate font-semibold">{value}</span>
              </span>
              <ArrowUpRight
                size={18}
                className="text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        ))}
      </ul>

      <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted">
        <MapPin size={16} aria-hidden="true" />
        {site.location}
      </p>
    </div>
  );
}

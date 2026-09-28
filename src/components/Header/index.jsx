import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { AnimatePresence, m } from "framer-motion";
import { clsx } from "clsx";

import profile from "../../assets/images/profile_pic.webp";
import { useApp } from "../../context/AppContext";
import { site } from "../../data/site";
import { SocialLinks } from "../SocialLinks";

export function Header() {
  const { t, lang, setLang, isDarkMode, toggleTheme } = useApp();
  const { pathname, hash, key } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: t.nav.home, to: "/" },
    { label: t.nav.about, to: "/about" },
    { label: t.nav.stack, to: "/#stack" },
    { label: t.nav.projects, to: "/#projects" },
    { label: t.nav.contact, to: "/contact" },
  ];

  function isActive(to) {
    const [path, section] = to.split("#");
    if (section) return pathname === "/" && hash === `#${section}`;
    return pathname === path && (path !== "/" || !hash);
  }

  // Close the mobile menu after any navigation.
  useEffect(() => setIsMenuOpen(false), [key]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event) => event.key === "Escape" && setIsMenuOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={clsx(
          "sticky top-0 z-50 w-full border-b transition-[background-color,border-color] duration-300",
          isScrolled || isMenuOpen ? "border-line bg-bg/80 backdrop-blur-xl" : "border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" className="group flex items-center gap-3 rounded-full" aria-label={site.name}>
            <span className="block h-10 w-10 rounded-full bg-brand-gradient p-0.5 transition-transform duration-300 group-hover:rotate-12">
              <img
                src={profile}
                alt=""
                width="40"
                height="40"
                className="h-full w-full rounded-full border-2 border-bg object-cover"
              />
            </span>
            <span className="font-display text-lg font-bold">{site.shortName}</span>
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1 rounded-full border border-line bg-surface/60 p-1 backdrop-blur">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    aria-current={isActive(item.to) ? "page" : undefined}
                    className={clsx(
                      "block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                      isActive(item.to) ? "bg-fg text-bg" : "text-muted hover:bg-surface-2 hover:text-fg",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <LanguageToggle lang={lang} setLang={setLang} label={t.nav.language} />
            </div>
            <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} label={t.nav.toggleTheme} />
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line bg-surface lg:hidden"
            >
              {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Outside <header>: its backdrop-filter would become the containing block of this fixed overlay. */}
      <AnimatePresence>
        {isMenuOpen && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12, transition: { duration: 0.15 } }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto border-t border-line bg-bg px-4 pt-6 pb-10 sm:px-6 lg:hidden"
          >
            <nav aria-label="Mobile">
              <ul className="flex flex-col">
                {navItems.map((item, index) => (
                  <m.li
                    key={item.to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * index + 0.05 }}
                  >
                    <Link
                      to={item.to}
                      aria-current={isActive(item.to) ? "page" : undefined}
                      className={clsx(
                        "flex items-center justify-between border-b border-line py-4 font-display text-3xl font-semibold",
                        isActive(item.to) ? "text-gradient" : "text-fg",
                      )}
                    >
                      {item.label}
                    </Link>
                  </m.li>
                ))}
              </ul>
            </nav>

            <div className="mt-8 flex items-center justify-between">
              <span className="text-sm font-medium text-muted">{t.nav.language}</span>
              <LanguageToggle lang={lang} setLang={setLang} label={t.nav.language} />
            </div>

            <SocialLinks className="mt-8 justify-center" size={22} />
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ThemeToggle({ isDarkMode, onToggle, label }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      aria-pressed={isDarkMode}
      title={label}
      className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line bg-surface text-fg transition-colors duration-200 hover:bg-surface-2"
    >
      <AnimatePresence mode="wait" initial={false}>
        <m.span
          key={isDarkMode ? "sun" : "moon"}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.2 }}
          className="inline-flex"
        >
          {isDarkMode ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
        </m.span>
      </AnimatePresence>
    </button>
  );
}

// Text codes instead of flags: flags represent countries, not languages.
function LanguageToggle({ lang, setLang, label }) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex h-11 items-center rounded-full border border-line bg-surface p-1"
    >
      {[
        { code: "en", label: "EN", name: "English" },
        { code: "pt", label: "PT", name: "Português" },
      ].map((option) => (
        <button
          key={option.code}
          type="button"
          lang={option.code}
          onClick={() => setLang(option.code)}
          aria-pressed={lang === option.code}
          title={option.name}
          className={clsx(
            "h-full min-w-11 cursor-pointer rounded-full px-3 text-xs font-bold tracking-wide transition-colors duration-200",
            lang === option.code ? "bg-fg text-bg" : "text-muted hover:text-fg",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

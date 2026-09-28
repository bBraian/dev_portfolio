import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import { site } from "../../data/site";
import { SocialLinks } from "../SocialLinks";

export function Footer() {
  const { t } = useApp();

  const navItems = [
    { label: t.nav.home, to: "/" },
    { label: t.nav.about, to: "/about" },
    { label: t.nav.stack, to: "/#stack" },
    { label: t.nav.projects, to: "/#projects" },
    { label: t.nav.contact, to: "/contact" },
  ];

  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="space-y-2">
            <Link to="/" className="font-display text-2xl font-bold">
              {site.handle}
            </Link>
            <a href={`mailto:${site.email}`} className="block text-sm text-muted transition-colors hover:text-fg">
              {site.email}
            </a>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-muted transition-colors hover:text-fg">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} · {t.footer.builtBy}{" "}
            <span className="text-gradient font-semibold">{site.handle}</span>
          </p>
          <SocialLinks className="-ml-3 sm:ml-0" />
        </div>
      </div>
    </footer>
  );
}

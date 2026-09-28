import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useApp } from "../../context/AppContext";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

export default function NotFound() {
  const { t } = useApp();
  useDocumentTitle(t.meta.notFound);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <p className="text-gradient font-display text-8xl font-bold">404</p>
      <h1 className="text-3xl font-bold">{t.notFound.title}</h1>
      <p className="max-w-md text-muted">{t.notFound.description}</p>
      <Link
        to="/"
        className="inline-flex h-12 items-center gap-2 rounded-full bg-fg px-6 font-semibold text-bg transition-transform duration-200 hover:-translate-y-0.5"
      >
        <ArrowLeft size={18} aria-hidden="true" />
        {t.notFound.back}
      </Link>
    </div>
  );
}

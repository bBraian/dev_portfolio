import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ScrollManager } from "../../components/ScrollManager";
import { useApp } from "../../context/AppContext";

export function DefaultLayout() {
  const { t } = useApp();

  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-clip">
      <a
        href="#main"
        onClick={(event) => {
          // Move focus without touching the URL hash (the router uses hashes for section links).
          event.preventDefault();
          document.getElementById("main")?.focus();
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        {t.nav.skipToContent}
      </a>
      <ScrollManager />
      <Header />
      <main id="main" tabIndex={-1} className="mx-auto outline-none w-full max-w-6xl flex-1 px-4 sm:px-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

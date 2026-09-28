import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { DefaultLayout } from "./layouts/DefaultLayout";
// Home is the landing page, so it ships in the main bundle instead of waiting on a second request.
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route
          path="about"
          element={
            <Suspense fallback={<PageFallback />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<PageFallback />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<PageFallback />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

// Keeps header/footer in place and reserves height, so a slow chunk doesn't flash a blank screen.
function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-live="polite">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
    </div>
  );
}

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to `#section` links (also when coming from another page) and back to top on page change.
// `key` changes on every navigation, so clicking the same section link twice still scrolls.
export function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const frame = requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
}

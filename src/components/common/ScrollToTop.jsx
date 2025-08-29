import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
export default function ScrollToTop({ behavior = "smooth", offset = 0 }) {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const top = Math.max(0, offset);
    window.scrollTo({ top, left: 0, behavior });
  }, [pathname, behavior, offset]);

  return null;
}

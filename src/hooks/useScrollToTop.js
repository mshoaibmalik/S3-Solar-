import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to top of page on every route change.
 * Uses smooth scroll behavior defined in CSS.
 */
export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
}
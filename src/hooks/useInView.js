import { useRef, useEffect, useState } from 'react';

/**
 * Observes when an element enters the viewport.
 * Returns a ref to attach and a boolean `isVisible`.
 * Once visible, the element stays visible (no re-hide).
 */
export function useInView({ threshold = 0.1, rootMargin = '0px 0px -40px 0px' } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // one shot — no re-hide
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}
import React from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Wraps route content with a fade+slide animation on every route change.
 * Uses the route pathname as the key to re-trigger the CSS animation.
 */
export function PageTransition({ children }) {
  const location = useLocation();

  return (
    <div key={location.pathname} className="animate-page-enter">
      {children}
    </div>
  );
}
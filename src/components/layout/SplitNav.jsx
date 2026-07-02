import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../ui/Logo';

const systemsDropdown = {
  residential: [
    { label: 'Systems', path: '/residential/overview' },
    { label: 'Hybrid + Battery', path: '/residential/hybrid-systems' },
    { label: 'Net Billing', path: '/residential/net-billing' },
    { label: 'Savings Calculator', path: '/residential/calculator' },
  ],
  commercial: [
    { label: 'C&I Solutions', path: '/commercial/overview' },
    { label: 'Grid-Tied & Microgrids', path: '/commercial/solutions' },
    { label: 'Case Studies', path: '/commercial/case-studies' },
    { label: 'Net Billing Guide', path: '/learning-center/net-billing-explained' },
  ],
};

export function SplitNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [systemsOpen, setSystemsOpen] = useState(false);
  const [mobileSystemsOpen, setMobileSystemsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const mobileSystemsRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSystemsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileSystemsOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;
  const isSystemsActive = () => {
    return location.pathname.startsWith('/residential') || 
           location.pathname.startsWith('/commercial') ||
           location.pathname.startsWith('/learning-center');
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-container mx-auto flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <Logo variant="lockup" size={50} tone="brand" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 ml-8">
          {/* Home */}
          <Link
            to="/"
            className={`px-5 py-2.5 text-base font-medium rounded-lg transition-all duration-200 ${
              isActive('/')
                ? 'text-maroon-700 bg-maroon-50'
                : 'text-slate-600 hover:text-maroon-700 hover:bg-slate-50'
            }`}
          >
            Home
          </Link>

          {/* About */}
          <Link
            to="/about"
            className={`px-5 py-2.5 text-base font-medium rounded-lg transition-all duration-200 ${
              isActive('/about')
                ? 'text-maroon-700 bg-maroon-50'
                : 'text-slate-600 hover:text-maroon-700 hover:bg-slate-50'
            }`}
          >
            About
          </Link>

          {/* Systems Dropdown */}
          <div 
            className="relative" 
            ref={dropdownRef}
            onMouseEnter={() => setSystemsOpen(true)}
            onMouseLeave={() => setSystemsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setSystemsOpen(!systemsOpen)}
              className={`px-5 py-2.5 text-base font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                isSystemsActive()
                  ? 'text-maroon-700 bg-maroon-50'
                  : 'text-slate-600 hover:text-maroon-700 hover:bg-slate-50'
              }`}
              aria-expanded={systemsOpen}
              aria-haspopup="true"
            >
              Systems
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${systemsOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-1 w-64 bg-white border border-slate-200 rounded-lg shadow-lg transition-all duration-200 ${
                systemsOpen
                  ? 'opacity-100 visible transform translate-y-0'
                  : 'opacity-0 invisible transform -translate-y-2'
              }`}
              style={{ transitionDuration: '250ms' }}
            >
              {/* Residential Category */}
              <div 
                className="px-3 py-2"
                onMouseEnter={() => setSystemsOpen(true)}
              >
                <div className="text-xs font-semibold text-maroon-700 uppercase tracking-wider mb-2">
                  Residential
                </div>
                <div className="space-y-0.5">
                  {systemsDropdown.residential.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-3 py-2 text-sm rounded-md transition-all duration-150 ${
                        isActive(item.path)
                          ? 'text-maroon-700 bg-maroon-50'
                          : 'text-slate-600 hover:text-maroon-700 hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-slate-200 my-1" />

              {/* Commercial Category */}
              <div 
                className="px-3 py-2"
                onMouseEnter={() => setSystemsOpen(true)}
              >
                <div className="text-xs font-semibold text-maroon-700 uppercase tracking-wider mb-2">
                  Commercial
                </div>
                <div className="space-y-0.5">
                  {systemsDropdown.commercial.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-3 py-2 text-sm rounded-md transition-all duration-150 ${
                        isActive(item.path)
                          ? 'text-maroon-700 bg-maroon-50'
                          : 'text-slate-600 hover:text-maroon-700 hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <Link
            to="/contact"
            className={`px-5 py-2.5 text-base font-medium rounded-lg transition-all duration-200 ${
              isActive('/contact')
                ? 'text-maroon-700 bg-maroon-50'
                : 'text-slate-600 hover:text-maroon-700 hover:bg-slate-50'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-11 h-11 text-slate-600 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden border-t border-slate-200 bg-white transition-all duration-200 overflow-hidden ${
          mobileOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0'
        }`}
        style={{ transitionDuration: '250ms' }}
      >
        <div className="px-6 py-4">
          {/* Mobile Nav Links */}
          <nav className="flex flex-col gap-1 mb-4">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className={`py-3 px-4 rounded-md text-base font-medium transition-colors duration-150 ${
                isActive('/')
                  ? 'bg-maroon-50 text-maroon-700'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileOpen(false)}
              className={`py-3 px-4 rounded-md text-base font-medium transition-colors duration-150 ${
                isActive('/about')
                  ? 'bg-maroon-50 text-maroon-700'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              About
            </Link>

            {/* Systems Accordion */}
            <div ref={mobileSystemsRef}>
              <button
                type="button"
                onClick={() => setMobileSystemsOpen(!mobileSystemsOpen)}
                className={`w-full py-3 px-4 rounded-md text-base font-medium transition-colors duration-150 flex items-center justify-between ${
                  isSystemsActive()
                    ? 'bg-maroon-50 text-maroon-700'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
                aria-expanded={mobileSystemsOpen}
              >
                <span>Systems</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${mobileSystemsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mobile Systems Dropdown */}
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  mobileSystemsOpen
                    ? 'max-h-screen opacity-100 mt-1'
                    : 'max-h-0 opacity-0'
                }`}
                style={{ transitionDuration: '250ms' }}
              >
                {/* Residential Category */}
                <div className="pl-4 pr-2 py-2">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-2">
                    Residential
                  </div>
                  <div className="space-y-1">
                    {systemsDropdown.residential.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className={`block py-2.5 px-3 rounded-md text-sm transition-colors duration-150 ${
                          isActive(item.path)
                            ? 'bg-maroon-50 text-maroon-700'
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Commercial Category */}
                <div className="pl-4 pr-2 py-2 border-t border-slate-100">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-2">
                    Commercial
                  </div>
                  <div className="space-y-1">
                    {systemsDropdown.commercial.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className={`block py-2.5 px-3 rounded-md text-sm transition-colors duration-150 ${
                          isActive(item.path)
                            ? 'bg-maroon-50 text-maroon-700'
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className={`py-3 px-4 rounded-md text-base font-medium transition-colors duration-150 ${
                isActive('/contact')
                  ? 'bg-maroon-50 text-maroon-700'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </nav>

        </div>
      </div>
    </header>
  );
}
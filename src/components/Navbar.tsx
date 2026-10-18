import React, { useState } from 'react';
import { Menu, X, Calendar, ExternalLink } from 'lucide-react';
import { RoutePath } from '../types';

interface NavbarProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; path: RoutePath }[] = [
    { label: 'Home', path: '/home' },
    { label: 'Schedule', path: '/schedule' },
    { label: 'Panel Members', path: '/panel-members' },
    { label: 'Organizing Committee', path: '/organizing-committee' },
    { label: 'Venue & Contact', path: '/venue-contact' },
  ];

  const handleLinkClick = (path: RoutePath) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const AUTH_URL = 'https://account.indiahci.org/auth';

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] shadow-[0_2px_12px_rgba(106,71,102,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Symposium Title */}
          <button
            onClick={() => handleLinkClick('/home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6a4766] rounded-md p-1 -ml-1 transition-transform"
          >
            <div className="w-10 h-10 shrink-0 rounded-md overflow-hidden bg-white p-0.5 border border-[#e2e8f0]/80 shadow-xs group-hover:border-[#6a4766]/40 transition-colors">
              <img
                src="/HCIPAI png logo(1) (1).png"
                alt="HCIPAI Official Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/HCIPAI_logo.svg';
                }}
              />
            </div>

            <div className="flex flex-col">
              <span className="font-display text-base sm:text-lg md:text-xl font-bold text-[#4e324c] tracking-tight leading-tight group-hover:text-[#6a4766] transition-colors">
                HCIPAI Symposium 2027
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold text-[#64748b] tracking-wider uppercase leading-none mt-0.5">
                MARCH 18–19, 2027 • HCI FOR INTERACTIVE &amp; IMMERSIVE EXPERIENCE
              </span>
            </div>
          </button>

          {/* Desktop Navigation (visible on large screens only: >= lg / 1024px) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#51304e] font-semibold'
                      : 'text-[#475569] hover:text-[#51304e]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#6a4766] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Register Now (Direct link to indiahci auth) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={AUTH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#6a4766] hover:bg-[#51304e] active:scale-[0.98] text-white px-5 py-2.5 rounded-md text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Register Now</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Tablet & Mobile Controls (< lg): Register CTA & Hamburger Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={AUTH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#6a4766] text-white px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1 shadow-2xs"
            >
              <span>Register</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#4e324c] hover:bg-[#f3e8ff]/50 border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#6a4766]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Responsive Drawer for Tablet & Mobile (< lg) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#e2e8f0] px-4 pt-3 pb-6 shadow-xl animate-fade-in">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`w-full text-left px-4 py-3 rounded-md text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#f4edf3] text-[#51304e] font-semibold border-l-4 border-[#6a4766]'
                      : 'text-[#334155] hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#6a4766]" />}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-[#e2e8f0] space-y-3">
            <div className="flex items-center gap-2 text-xs text-[#64748b] px-2">
              <Calendar className="w-4 h-4 text-[#6a4766]" />
              <span>March 18–19, 2027 • Hyderabad, India</span>
            </div>
            <a
              href={AUTH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#6a4766] hover:bg-[#51304e] text-white py-3 rounded-md text-sm font-semibold tracking-wide shadow-sm flex items-center justify-center gap-2"
            >
              <span>Register Now (IndiaHCI Auth)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};


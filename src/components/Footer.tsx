import React from 'react';
import { Calendar, MapPin, ShieldCheck, ExternalLink } from 'lucide-react';
import { RoutePath } from '../types';

interface FooterProps {
  onNavigate: (path: RoutePath) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const AUTH_URL = 'https://account.indiahci.org/auth';

  const handleNav = (path: RoutePath) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#e2e8f0] pt-14 pb-10 text-[#334155] relative overflow-hidden">
      {/* Delicate background architectural grid watermark */}
      <div className="absolute inset-0 bg-arch-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#e2e8f0]">
          
          {/* Column 1: Brand & Synopsis (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded overflow-hidden bg-white p-0.5 border border-[#e2e8f0]">
                <img
                  src="/HCIPAI png logo(1) (1).png"
                  alt="HCIPAI"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/HCIPAI_logo.svg';
                  }}
                />
              </div>
              <h3 className="font-display text-xl font-bold text-[#4e324c] tracking-tight">
                HCIPAI 2027
              </h3>
            </div>

            <p className="text-sm text-[#64748b] leading-relaxed max-w-md">
              International Symposium on Human–Computer Interaction for Interactive &amp; Immersive Experience.
              Bringing together researchers, practitioners, and scholars across pioneering HCI paradigms.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-[#475569] pt-2">
              <div className="flex items-center gap-1.5 bg-[#f8fafc] px-2.5 py-1 rounded border border-[#e2e8f0]">
                <Calendar className="w-3.5 h-3.5 text-[#6a4766]" />
                <span className="font-medium">March 18–19, 2027</span>
              </div>
              <button 
                onClick={() => handleNav('/venue-contact')}
                className="flex items-center gap-1.5 bg-[#f8fafc] hover:bg-[#f1f5f9] px-2.5 py-1 rounded border border-[#e2e8f0] transition-colors cursor-pointer text-left"
              >
                <MapPin className="w-3.5 h-3.5 text-[#3b82f6]" />
                <span className="font-medium text-[#1e293b]">GCET Campus, Cheeryal, Keesara</span>
              </button>
            </div>
          </div>

          {/* Column 2: Symposium Routes (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-[#1e293b] tracking-wider uppercase flex items-center gap-1.5">
              <span>Symposium Routes</span>
              <span className="text-[#3b82f6] text-xs">❖</span>
            </h4>
            <ul className="space-y-2 text-sm text-[#64748b]">
              <li>
                <button
                  onClick={() => handleNav('/home')}
                  className="hover:text-[#51304e] hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  About &amp; Overview
                </button>
              </li>
              <li>
                <a
                  href={AUTH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#51304e] hover:translate-x-0.5 transition-all cursor-pointer inline-flex items-center gap-1"
                >
                  <span>Registration &amp; Auth</span>
                  <ExternalLink className="w-3 h-3 text-[#3b82f6]" />
                </a>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/schedule')}
                  className="hover:text-[#51304e] hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  Symposium Schedule
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/panel-members')}
                  className="hover:text-[#51304e] hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  Panel &amp; Keynotes
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/organizing-committee')}
                  className="hover:text-[#51304e] hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  Organizing Committee
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/venue-contact')}
                  className="hover:text-[#51304e] hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  Venue &amp; Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Accreditation & Institutional Affiliations (4 cols) */}
          <div className="lg:col-span-4">
            <div className="bg-[#f0f9ff]/70 border border-[#bae6fd]/80 rounded-xl p-5 shadow-xs">
              <div className="flex items-center gap-2 mb-2 text-[#0369a1]">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <h4 className="text-sm font-bold tracking-tight text-[#0c4a6e]">
                  Accreditation &amp; Affiliations
                </h4>
              </div>
              <p className="text-xs text-[#334155] leading-relaxed mb-4">
                Organized in academic association with HCIPAI. Hosted by institutions recognized with NAAC A+
                Accreditation and NBA-accredited computing &amp; design programs.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider bg-white border border-[#38bdf8]/50 text-[#0284c7] shadow-2xs">
                  NAAC A+ RATED
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider bg-white border border-[#94a3b8]/40 text-[#334155] shadow-2xs">
                  NBA ACCREDITED
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider bg-[#f3e8ff] border border-[#d8b4fe]/60 text-[#7e22ce] shadow-2xs">
                  HCIPAI CHAPTER
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal / Secretariat Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748b] gap-4">
          <p>
            © 2027 HCIPAI. All rights reserved. Human–Computer Interaction Professionals Association of India.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button 
              onClick={() => handleNav('/venue-contact')}
              className="hover:text-[#51304e] transition-colors cursor-pointer"
            >
              Contact Secretariat
            </button>
            <span>•</span>
            <span className="hover:text-[#51304e] transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span>•</span>
            <span className="hover:text-[#51304e] transition-colors cursor-pointer">
              Terms &amp; Code of Conduct
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

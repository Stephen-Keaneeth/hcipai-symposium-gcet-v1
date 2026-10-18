import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  Copy, 
  Check, 
  Clock, 
  Building2, 
  Compass, 
  Info,
  ImageIcon
} from 'lucide-react';
import { RoutePath } from '../types';

interface VenueContactPageProps {
  onNavigate: (path: RoutePath) => void;
}

export const VenueContactPage: React.FC<VenueContactPageProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const fullAddress = 'Geethanjali College of Engineering and Technology (GCET), Sy. No. 33 & 34, Cheeryal (V), Keesara (M), Medchal-Malkajgiri District, Telangana, India – Pin Code: 501301';

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Geethanjali+College+of+Engineering+and+Technology+Cheeryal+Keesara';
  // Interactive Google Maps Embed URL showing real streets, roads, and campus location
  const embedMapUrl = 'https://maps.google.com/maps?q=Geethanjali+College+of+Engineering+and+Technology,+Cheeryal,+Keesara,+Telangana+501301&t=&z=15&ie=UTF8&iwloc=&output=embed';

  return (
    <div className="min-h-screen bg-[#f9f9ff] py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#e2e8f0]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#6a4766] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#6a4766]" />
              <span>HCIPAI 2027</span>
              <span className="text-[#3b82f6]">•</span>
              <span className="text-[#64748b]">LOCATION &amp; CONTACT SECRETARIAT</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4e324c] tracking-tight">
              Venue &amp; Contact Information
            </h1>
            <p className="text-sm sm:text-base text-[#64748b] mt-2 max-w-2xl">
              Join us in person for HCIPAI 2027 • Getting here, campus logistics, and directly connecting with the Organizing Secretariat.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#dbeafe] text-[#1e293b] font-medium shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
              <span>Campus Gate 1 (Main Entrance) • Registration Desk: Ground Floor Atrium</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0fdf4] border border-emerald-200 text-emerald-800 font-semibold">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Desk Open: 08:00 – 19:00 IST</span>
            </span>
          </div>
        </div>

        {/* Main 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-6">
          
          {/* Left Column: GCET Campus Details & Interactive Geographic Locator (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-[#e2e8f0] p-6 shadow-xs space-y-6">
            
            {/* Institution Brand & Gate Photo Placeholders row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#f1f5f9]">
              
              {/* College Logo Placeholder */}
              <div className="w-full sm:w-[280px] h-20 rounded-lg border-2 border-dashed border-[#94a3b8]/60 bg-[#f8fafc] flex flex-col items-center justify-center p-2 text-center">
                <div className="flex items-center gap-1.5 text-[#0369a1] mb-0.5">
                  <ImageIcon className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    [College Logo Placeholder]
                  </span>
                </div>
                <span className="text-[10px] text-[#64748b]">
                  Insert <code className="font-mono text-[#0f172a]">image.png</code> here
                </span>
              </div>

              {/* Campus Gate Photo Placeholder */}
              <div className="w-full sm:w-48 h-20 rounded-lg border-2 border-dashed border-[#94a3b8]/60 bg-[#f8fafc] flex flex-col items-center justify-center p-2 text-center shrink-0">
                <div className="flex items-center gap-1.5 text-[#6a4766] mb-0.5">
                  <ImageIcon className="w-4 h-4" />
                  <span className="text-[11px] font-bold uppercase tracking-wider">
                    [Campus Photo Placeholder]
                  </span>
                </div>
                <span className="text-[10px] text-[#64748b]">
                  Insert Campus Gate 1 Photo
                </span>
              </div>
            </div>

            {/* Address & Building Specs */}
            <div className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-[#1e293b]">
                Geethanjali College of Engineering and Technology (GCET)
              </h2>
              
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Sy. No. 33 &amp; 34, Cheeryal (V), Keesara (M), Medchal-Malkajgiri District, Telangana, India – Pin Code: 501301.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="inline-flex items-center gap-1.5 text-xs text-[#334155] bg-slate-100 px-3 py-1 rounded-md border border-[#cbd5e1]">
                  <Building2 className="w-3.5 h-3.5 text-[#6a4766]" />
                  <span>Campus Gate 1 &amp; Central Block</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-amber-800 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
                  <Info className="w-3.5 h-3.5 text-amber-600" />
                  <span>[Auditorium Hall Allotments TBA]</span>
                </span>
              </div>
            </div>

            {/* Interactive Geographic Locator (Real Interactive Google Maps View) */}
            <div className="border border-[#cbd5e1] rounded-xl overflow-hidden bg-slate-50 shadow-xs">
              
              {/* Map Bar Header */}
              <div className="bg-white px-4 py-2.5 border-b border-[#e2e8f0] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#3b82f6]" />
                  <span className="font-bold text-[#1e293b]">Interactive Geographic Locator</span>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2563eb] hover:text-[#1d4ed8] font-semibold inline-flex items-center gap-1"
                >
                  <span>Open in Maps App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map Viewport Area with real interactive map tiles */}
              <div className="relative h-80 w-full bg-slate-100 overflow-hidden">
                <iframe
                  title="GCET Campus Map Location"
                  src={embedMapUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />

                {/* Overlaid GPS badge */}
                <div className="absolute top-3 left-3 pointer-events-none z-10">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md shadow-xs text-[#0f172a] border border-[#e2e8f0]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>GPS: 17.5142° N, 78.6366° E</span>
                  </span>
                </div>
              </div>

              {/* Map Footer Action Bar */}
              <div className="bg-white p-4 border-t border-[#e2e8f0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-bold text-[#1e293b] block">Campus Navigation &amp; Coordinates</span>
                  <span className="text-[#64748b]">Keesara – Cheeryal Rd, Medchal-Malkajgiri Dist</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="px-3.5 py-2 rounded-md bg-slate-100 hover:bg-slate-200 text-[#334155] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy Address'}</span>
                  </button>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-md bg-[#4e324c] hover:bg-[#6a4766] text-white font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Direct Contact & Assistance Desk Card (5 Cols) */}
          <div className="lg:col-span-5 bg-[#4e324c] rounded-xl text-white p-7 shadow-lg relative overflow-hidden space-y-6">
            
            {/* Background delicate kolam motif */}
            <div className="absolute right-0 bottom-0 w-48 h-48 pointer-events-none opacity-10">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <circle cx="50" cy="50" r="40" strokeWidth="2" />
                <rect x="25" y="25" width="50" height="50" strokeWidth="1.5" />
                <path d="M 10,50 Q 50,10 90,50 Q 50,90 10,50" strokeWidth="1.5" />
              </svg>
            </div>

            <div className="relative z-10 space-y-1">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#e6b9de] block">
                ORGANIZING SECRETARIAT
              </span>
              <h2 className="font-display text-2xl font-bold">
                Direct Contact &amp; Assistance Desk
              </h2>
            </div>

            <div className="relative z-10 space-y-6 divide-y divide-white/10 text-xs">
              
              {/* Email Section */}
              <div className="pt-2 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#e6b9de]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mb-0.5">
                    OFFICIAL SECRETARIAT &amp; COLLEGE EMAIL
                  </span>
                  <a
                    href="mailto:info@gcet.edu.in"
                    className="text-sm font-bold text-white hover:text-[#e6b9de] transition-colors underline decoration-dotted"
                  >
                    info@gcet.edu.in
                  </a>
                </div>
              </div>

              {/* Phone Lines Section */}
              <div className="pt-5 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#e6b9de]">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mb-0.5">
                    CENTRAL HELPDESK &amp; CAMPUS LINES
                  </span>
                  <p className="text-sm font-bold text-white tracking-wide">
                    +91 91820 58188 / +91 91820 58198
                  </p>
                  <p className="text-xs text-slate-300">
                    +91 40 2422 0031 <span className="text-slate-400">(Administrative Office)</span>
                  </p>
                  <p className="text-[11px] text-slate-300 pt-1">
                    Mon–Sat: 09:00 – 17:30 IST
                  </p>
                  <div className="pt-1">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-white/10 text-[#e6b9de] border border-white/20">
                      [Direct Desk Helpline Extension TBA]
                    </span>
                  </div>
                </div>
              </div>

              {/* Postal & Society Section */}
              <div className="pt-5 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#e6b9de]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block mb-0.5">
                    POSTAL &amp; SOCIETY CORRESPONDENCE
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    <strong>GCET Campus Office:</strong> Cheeryal (V), Keesara (M), Medchal-Malkajgiri Dist, PIN 501301.
                  </p>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    <strong>Teja Educational Society:</strong> 2-1-88/1, Anand Nagar X Road, Bandlaguda, Nagole, Hyderabad 500068.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

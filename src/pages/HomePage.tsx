import React from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Layers, 
  Cpu, 
  Compass, 
  ShieldCheck, 
  Award, 
  Presentation, 
  Wrench, 
  Flame, 
  Info, 
  Ticket, 
  Sun, 
  Star,
  ExternalLink,
  ImageIcon
} from 'lucide-react';
import { RoutePath } from '../types';
import { pricingTiers } from '../data/pricing';

interface HomePageProps {
  onNavigate: (path: RoutePath) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const AUTH_URL = 'https://account.indiahci.org/auth';

  return (
    <div className="min-h-screen bg-[#f9f9ff]">
      
      {/* 1. Official Symposium Banner Placeholder Area */}
      <section className="w-full bg-white border-b border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          
          {/* Banner Placeholder Box maintaining aspect ratio (1600 x 480 ~ 3.3:1) */}
          <div className="w-full aspect-[3.3/1] min-h-[160px] sm:min-h-[220px] md:min-h-[300px] rounded-xl border-2 border-dashed border-[#cbd5e1] bg-[#f8fafc] flex flex-col items-center justify-center p-6 text-center transition-all hover:border-[#6a4766]/50 shadow-2xs relative">
            <div className="w-14 h-14 rounded-full bg-[#f4edf3] text-[#6a4766] flex items-center justify-center mb-3 border border-[#e6b9de]/60">
              <ImageIcon className="w-7 h-7" />
            </div>
            <h2 className="font-display text-lg sm:text-2xl font-bold text-[#4e324c] mb-1">
              [Official Symposium Banner Placeholder — BannerFinal.jpg]
            </h2>
            <p className="text-xs sm:text-sm text-[#64748b] max-w-lg">
              Banner Area (Recommended 1600 × 480 • Aspect Ratio ~3.3:1). Ready for manual insertion of original <code className="bg-slate-200/80 px-1.5 py-0.5 rounded text-xs font-mono text-[#1e293b]">BannerFinal.jpg</code>.
            </p>
          </div>

          {/* Sub-banner Badges Bar */}
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-[#475569] bg-[#f8fafc] px-4 py-2.5 rounded-md border border-[#e2e8f0]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
              <span className="font-bold text-[#1e293b] tracking-wide uppercase text-[11px]">
                National Human–Computer Interaction Symposium
              </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5 text-[#0369a1]">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-semibold text-xs">NAAC A+ Accredited</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#475569]">
                <Award className="w-4 h-4 text-[#6a4766]" />
                <span className="font-semibold text-xs">NBA Recognised</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Hero Convocation Section */}
      <section className="py-12 lg:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 8 Cols: Main Announcement */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#6a4766] bg-[#f4edf3] px-3.5 py-1.5 rounded-full border border-[#e6b9de]/60">
                <Sparkles className="w-3.5 h-3.5 text-[#7c3aed]" />
                <span>Symposium Convocation 2027 • In-Person</span>
              </div>

              <div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl font-bold text-[#4e324c] tracking-tight leading-[1.15]">
                  HCI for Interactive &amp; Immersive Experience
                </h1>
                <p className="font-display italic text-2xl sm:text-3xl text-[#51304e] mt-2 font-normal">
                  “One Experience. Many perspectives.”
                </p>
              </div>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl font-normal">
                Welcome to the annual convergence of researchers, product architects, and behavioral
                scientists unraveling pioneering breakthroughs across multimodal environments, spatial
                computing, and culturally resonant interaction paradigms.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={AUTH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#6a4766] hover:bg-[#51304e] active:scale-[0.98] text-white px-6 py-3 rounded-md text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Register for Symposium</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <button
                  onClick={() => onNavigate('/schedule')}
                  className="bg-white hover:bg-slate-50 text-[#4e324c] border border-[#6a4766]/30 px-6 py-3 rounded-md text-sm font-semibold tracking-wide transition-all flex items-center gap-2 cursor-pointer shadow-2xs"
                >
                  <Calendar className="w-4 h-4 text-[#3b82f6]" />
                  <span>View Detailed Schedule</span>
                </button>
              </div>

              {/* Meta Tags Row */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-medium text-[#64748b] border-t border-[#e2e8f0]/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#6a4766]" />
                  <span>March 18–19, 2027</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#3b82f6]" />
                  <span>VR Lab &amp; Multimodal Studios</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#7c3aed]" />
                  <span>Peer-Reviewed Academic Track</span>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Symposium In Numbers Card */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-xl border border-[#dbeafe] shadow-[0_4px_20px_-2px_rgba(106,71,102,0.06)] overflow-hidden">
                <div className="p-5 border-b border-[#f1f5f9] flex items-center justify-between bg-slate-50/50">
                  <span className="text-xs font-bold tracking-wider text-[#475569] uppercase">
                    Symposium in Numbers
                  </span>
                  <Compass className="w-4 h-4 text-[#3b82f6]" />
                </div>

                <div className="p-5 grid grid-cols-2 gap-4">
                  <div className="p-3 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]/60">
                    <span className="font-display text-3xl font-bold text-[#4e324c] block">
                      02
                    </span>
                    <span className="text-xs text-[#64748b] mt-0.5 block font-medium">
                      Symposium Days
                    </span>
                  </div>

                  <div className="p-3 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]/60">
                    <span className="font-display text-2xl font-bold text-[#4e324c] block">
                      [TBA]
                    </span>
                    <span className="text-xs text-[#64748b] mt-0.5 block font-medium">
                      Keynotes &amp; Panels
                    </span>
                  </div>

                  <div className="p-3 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]/60">
                    <span className="font-display text-3xl font-bold text-[#4e324c] block">
                      04
                    </span>
                    <span className="text-xs text-[#64748b] mt-0.5 block font-medium">
                      Targeted Labs
                    </span>
                  </div>

                  <div className="p-3 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]/60">
                    <span className="font-display text-3xl font-bold text-[#4e324c] block">
                      200+
                    </span>
                    <span className="text-xs text-[#64748b] mt-0.5 block font-medium">
                      <span className="text-red-600 font-semibold">[PROPOSED]</span> Expected Delegates
                    </span>
                  </div>
                </div>

                <div className="bg-[#f0f9ff] px-5 py-3 border-t border-[#bae6fd] flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#0369a1] block">Early Bird Registration</span>
                    <span className="text-[#0c4a6e] font-medium">Ends February 28, 2027</span>
                  </div>
                  <Clock className="w-4 h-4 text-[#0284c7]" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Scholarly Charter: Bridging Human Intuition & Spatial Horizons */}
      <section className="py-14 bg-white border-y border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#e2e8f0]">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#6a4766] uppercase block mb-1">
                Scholarly Charter ✦ HCIPAI Fellowship
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#4e324c]">
                Bridging Human Intuition &amp; Spatial Horizons
              </h2>
            </div>
            <p className="text-sm text-[#64748b] max-w-md">
              A dual inquiry uniting traditional cultural iconography with pioneering digital
              ergonomics, tactile surfaces, and ambient spatial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Interactive Labs Exhibition */}
            <div className="lg:col-span-5 bg-[#faf9fb] rounded-xl border border-[#e2e8f0] overflow-hidden flex flex-col">
              <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=800&auto=format&fit=crop"
                  alt="Interactive Labs Exhibition"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                  Interactive Labs Exhibition
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-[#4e324c] mb-2">
                    The HCIPAI Inception
                  </h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">
                    The Human-Computer Interaction Professionals Association of India convenes its
                    flagship 2027 symposium to challenge deterministic computing. Through experiential
                    prototypes, multi-sensory feedback loops, and cognitive architecture, our
                    symposium fosters dialogues that place collective human wellbeing at the nexus of technology.
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => onNavigate('/panel-members')}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6a4766] hover:text-[#51304e] group cursor-pointer"
                  >
                    <span>Explore Association Mission</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: 3 Research Tracks */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              
              {/* Track 1 */}
              <div className="p-5 bg-white rounded-xl border border-[#e2e8f0] hover:border-[#6a4766]/40 transition-all shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#f4edf3] text-[#6a4766] flex items-center justify-center shrink-0 border border-[#e6b9de]/40">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-display text-lg font-bold text-[#1e293b]">
                      Interactive Systems &amp; Generative AI
                    </h4>
                    <span className="text-[10px] font-bold text-[#2563eb] bg-[#eff6ff] px-2 py-0.5 rounded border border-[#bfdbfe]">
                      TRACK 01
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                    Investigating adaptive conversational agents, predictive gesture systems, dynamic ergonomics,
                    and human-in-the-loop interfaces designed for enterprise and accessibility applications.
                  </p>
                </div>
              </div>

              {/* Track 2 */}
              <div className="p-5 bg-white rounded-xl border border-[#e2e8f0] hover:border-[#3b82f6]/40 transition-all shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#eff6ff] text-[#2563eb] flex items-center justify-center shrink-0 border border-[#bfdbfe]/50">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-display text-lg font-bold text-[#1e293b]">
                      Immersive AR/VR &amp; Multimodal Interfaces
                    </h4>
                    <span className="text-[10px] font-bold text-[#2563eb] bg-[#eff6ff] px-2 py-0.5 rounded border border-[#bfdbfe]">
                      TRACK 02
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                    From spatial telepresence and haptic arrays to cross-reality simulations, dissecting how immersive
                    sensory cues influence memory retention, collaboration, and spatial awareness.
                  </p>
                </div>
              </div>

              {/* Track 3 */}
              <div className="p-5 bg-white rounded-xl border border-[#e2e8f0] hover:border-[#7c3aed]/40 transition-all shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#f5f3ff] text-[#7c3aed] flex items-center justify-center shrink-0 border border-[#ddd6fe]/50">
                  <Users className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-display text-lg font-bold text-[#1e293b]">
                      Inclusive &amp; Cultural Design in Tech
                    </h4>
                    <span className="text-[10px] font-bold text-[#2563eb] bg-[#eff6ff] px-2 py-0.5 rounded border border-[#bfdbfe]">
                      TRACK 03
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                    Rooting technological interactions in contextual semantics, indigenous design languages,
                    vernacular typography, and ethical paradigms celebrating South Asian socio-technical diversity.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Three Ways to Experience HCIPAI 2027 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#6a4766] uppercase block mb-1">
              Experiential Curation
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#4e324c]">
              Three Ways to Experience HCIPAI 2027
            </h2>
            <div className="flex items-center justify-center gap-2 my-2 text-[#3b82f6]">
              <span className="h-px w-8 bg-[#dbeafe]" />
              <span className="text-xs">❖</span>
              <span className="h-px w-8 bg-[#dbeafe]" />
            </div>
            <p className="text-sm text-[#64748b]">
              Engage directly through provocative intellectual debates, hands-on masterclasses, and walkthrough installation environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Panel Discussions */}
            <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#f4edf3] text-[#6a4766] flex items-center justify-center">
                  <Presentation className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider block">
                  KEYNOTE AUDITORIUM
                </span>
                <h3 className="font-display text-2xl font-bold text-[#1e293b]">
                  Panel Discussions
                </h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                  Plenary debates featuring global academicians, design executives, and policy leaders examining
                  algorithmic accountability, spatial UX standards, and cognitive ergonomics.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-[#334155]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3b82f6]" />
                    <span>6 Thematic Debate Podiums</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3b82f6]" />
                    <span>Live Audience Q&amp;A Telemetry</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3b82f6]" />
                    <span>Published Panel Whitepapers</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onNavigate('/panel-members')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6a4766] hover:text-[#51304e] group cursor-pointer"
                >
                  <span>Meet the Panellists</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card 2: Hands-on Workshops */}
            <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#eff6ff] text-[#2563eb] flex items-center justify-center">
                  <Wrench className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider block">
                  STUDIO LABS A &amp; B
                </span>
                <h3 className="font-display text-2xl font-bold text-[#1e293b]">
                  Hands-on Workshops
                </h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                  Four targeted technical workshops covering Spatial Prototyping in Unity &amp; VisionOS,
                  Ethnographic Fieldwork for AI, and Multimodal Biosensor Integration.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-[#334155]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3b82f6]" />
                    <span>Dedicated Hardware Toolkits Provided</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3b82f6]" />
                    <span>Certificate of Masterclass Mastery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3b82f6]" />
                    <span>Mentorship from Industry Leads</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onNavigate('/schedule')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6a4766] hover:text-[#51304e] group cursor-pointer"
                >
                  <span>Review Lab Schedules</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card 3: Interactive Zones */}
            <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#f5f3ff] text-[#7c3aed] flex items-center justify-center">
                  <Flame className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider block">
                  EXPERIENCE PAVILION
                </span>
                <h3 className="font-display text-2xl font-bold text-[#1e293b]">
                  Interactive Zones
                </h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                  Live interactive demonstrations featuring 24 curated student and faculty installations,
                  real-time spatial projection mappings, and experimental wearable hardware.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-[#334155]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3b82f6]" />
                    <span>Open Demos &amp; Walkthrough Critiques</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3b82f6]" />
                    <span>Best Installation Peoples' Choice Award</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3b82f6]" />
                    <span>Direct Recruiter &amp; Grant Connects</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onNavigate('/venue-contact')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6a4766] hover:text-[#51304e] group cursor-pointer"
                >
                  <span>Explore Pavilion Map</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Registration Fee Section */}
      <section id="registration-fees" className="py-16 bg-white border-y border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-red-50 text-red-700 border border-red-200 mb-2">
              <Info className="w-3.5 h-3.5" />
              <span>[PROPOSED — NOT CONFIRMED]</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#4e324c]">
              Registration Fee
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-xl border bg-white overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between ${
                  tier.highlight ? 'border-[#6a4766] ring-1 ring-[#6a4766]/30' : 'border-[#e2e8f0]'
                }`}
              >
                {/* Top strip */}
                <div className={`h-1.5 w-full ${tier.highlight ? 'bg-[#6a4766]' : 'bg-[#3b82f6]'}`} />

                <div className="p-6 space-y-4 flex-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold tracking-wider uppercase text-[#6a4766]">
                      {tier.badge}
                    </span>
                    {tier.subBadge && (
                      <span className="text-[#64748b] font-medium">{tier.subBadge}</span>
                    )}
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#1e293b]">
                    {tier.title}
                  </h3>

                  <p className="text-xs text-[#64748b] leading-relaxed">
                    {tier.description}
                  </p>

                  {/* Price breakdown */}
                  <div className="space-y-3 pt-2 pb-3 border-y border-[#f1f5f9]">
                    {tier.prices.map((p, idx) => (
                      <div key={idx} className="flex items-baseline justify-between">
                        <span className="text-xs text-[#475569] font-medium">{p.label}</span>
                        <div className="text-right">
                          <span className="font-display text-2xl font-bold text-[#1e293b]">
                            {p.amount}
                          </span>
                          <span className="text-[11px] text-[#64748b] ml-1">{p.period}</span>
                        </div>
                      </div>
                    ))}
                    {tier.memberNotice && (
                      <div className="flex items-center gap-1.5 text-[11px] text-[#7c3aed] bg-[#f5f3ff] p-2 rounded border border-[#ddd6fe]">
                        <Info className="w-3.5 h-3.5 shrink-0" />
                        <span>{tier.memberNotice}</span>
                      </div>
                    )}
                  </div>

                  {/* Features checklist */}
                  <ul className="space-y-2 text-xs text-[#334155] pt-1">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3b82f6] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Two Days of Cutting-Edge Discovery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#e2e8f0]">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#6a4766] uppercase block mb-1">
                Program Overview
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#4e324c]">
                Two Days of Cutting-Edge Discovery
              </h2>
              <p className="text-sm text-[#64748b] mt-1">
                March 18 &amp; 19, 2027 feature parallel academic paper streams, demonstration booths, and evening fellowship banquets.
              </p>
            </div>

            <div>
              <button
                onClick={() => onNavigate('/schedule')}
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-5 py-2.5 rounded-md text-xs font-bold tracking-wide uppercase shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Explore Complete Timeline</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Day 1 Column */}
            <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#e2e8f0]">
                <div>
                  <span className="text-[11px] font-bold text-[#6a4766] tracking-wider uppercase block">
                    DAY 01
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#1e293b]">
                    Thursday, March 18, 2027
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200">
                  <Sun className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-4 divide-y divide-[#f1f5f9]">
                <div className="pt-2 flex items-start gap-4">
                  <span className="text-xs font-semibold text-[#64748b] w-18 shrink-0">09:00 AM</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#1e293b]">Inauguration &amp; Keynote Address</h4>
                    <p className="text-xs text-[#64748b]">Welcome address by HCIPAI Chairs &amp; Invited Global Luminaries [TBA]</p>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-4">
                  <span className="text-xs font-semibold text-[#64748b] w-18 shrink-0">11:30 AM</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#1e293b]">Track 1: Spatial &amp; Immersive UX</h4>
                    <p className="text-xs text-[#64748b]">Peer-reviewed papers on virtual presence and multi-user spatial audio</p>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-4">
                  <span className="text-xs font-semibold text-[#64748b] w-18 shrink-0">02:30 PM</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#1e293b]">Interactive Zone Live Showcases</h4>
                    <p className="text-xs text-[#64748b]">Installation demonstrations by nominated student and faculty labs</p>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-4">
                  <span className="text-xs font-semibold text-[#64748b] w-18 shrink-0">04:30 PM</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#1e293b]">Panel Debate: Ethics in Spatial AI</h4>
                    <p className="text-xs text-[#64748b]">Auditorium hall open discussion on neural interfaces and biometric data</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 Column */}
            <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#e2e8f0]">
                <div>
                  <span className="text-[11px] font-bold text-[#6a4766] tracking-wider uppercase block">
                    DAY 02
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#1e293b]">
                    Friday, March 19, 2027
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-200">
                  <Star className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-4 divide-y divide-[#f1f5f9]">
                <div className="pt-2 flex items-start gap-4">
                  <span className="text-xs font-semibold text-[#64748b] w-18 shrink-0">09:30 AM</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#1e293b]">Morning Plenary: South Asian HCI Paradigms</h4>
                    <p className="text-xs text-[#64748b]">Vernacular interfaces and multi-lingual multimodal synthesis [TBA]</p>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-4">
                  <span className="text-xs font-semibold text-[#64748b] w-18 shrink-0">11:00 AM</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#1e293b]">Parallel Hands-on Masterclasses</h4>
                    <p className="text-xs text-[#64748b]">Studios A &amp; B: Rapid prototyping for tactile displays and spatial kits</p>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-4">
                  <span className="text-xs font-semibold text-[#64748b] w-18 shrink-0">02:30 PM</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#1e293b]">Doctoral Colloquium &amp; Poster Session</h4>
                    <p className="text-xs text-[#64748b]">Review of ongoing doctoral dissertations and research-in-progress</p>
                  </div>
                </div>

                <div className="pt-3 flex items-start gap-4">
                  <span className="text-xs font-semibold text-[#64748b] w-18 shrink-0">05:00 PM</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#1e293b]">Valedictory &amp; HCIPAI Awards Banquet</h4>
                    <p className="text-xs text-[#64748b]">Honoring exceptional papers, best demos, and community stewards</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Portal Navigation Quick Directory (4 Cards) */}
      <section className="py-12 bg-white border-t border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="text-xs font-bold tracking-widest text-[#6a4766] uppercase block">
              Portal Navigation
            </span>
            <h3 className="font-display text-2xl font-bold text-[#1e293b]">
              Explore the Full Symposium Directory
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <button
              onClick={() => onNavigate('/schedule')}
              className="p-5 bg-[#faf9fb] hover:bg-white rounded-xl border border-[#e2e8f0] hover:border-[#6a4766]/50 transition-all text-left group cursor-pointer shadow-2xs"
            >
              <div className="w-8 h-8 rounded-lg bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center mb-3">
                <Clock className="w-4 h-4" />
              </div>
              <h4 className="font-display text-base font-bold text-[#1e293b] mb-1 group-hover:text-[#6a4766]">
                Program Schedule
              </h4>
              <p className="text-xs text-[#64748b] mb-3">
                Browse minute-by-minute session timings, keynotes, and lunch hours.
              </p>
              <span className="text-xs font-semibold text-[#6a4766] inline-flex items-center gap-1">
                View Timeline →
              </span>
            </button>

            <button
              onClick={() => onNavigate('/panel-members')}
              className="p-5 bg-[#faf9fb] hover:bg-white rounded-xl border border-[#e2e8f0] hover:border-[#6a4766]/50 transition-all text-left group cursor-pointer shadow-2xs"
            >
              <div className="w-8 h-8 rounded-lg bg-[#f3e8ff] text-[#7e22ce] flex items-center justify-center mb-3">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="font-display text-base font-bold text-[#1e293b] mb-1 group-hover:text-[#6a4766]">
                Panel Members
              </h4>
              <p className="text-xs text-[#64748b] mb-3">
                Explore profiles and publications of invited keynote speakers.
              </p>
              <span className="text-xs font-semibold text-[#6a4766] inline-flex items-center gap-1">
                Meet Speakers →
              </span>
            </button>

            <button
              onClick={() => onNavigate('/organizing-committee')}
              className="p-5 bg-[#faf9fb] hover:bg-white rounded-xl border border-[#e2e8f0] hover:border-[#6a4766]/50 transition-all text-left group cursor-pointer shadow-2xs"
            >
              <div className="w-8 h-8 rounded-lg bg-[#f4edf3] text-[#6a4766] flex items-center justify-center mb-3">
                <Presentation className="w-4 h-4" />
              </div>
              <h4 className="font-display text-base font-bold text-[#1e293b] mb-1 group-hover:text-[#6a4766]">
                Organizing Committee
              </h4>
              <p className="text-xs text-[#64748b] mb-3">
                Honoring patron leadership, academic review chairs, and mentors.
              </p>
              <span className="text-xs font-semibold text-[#6a4766] inline-flex items-center gap-1">
                Committee Roster →
              </span>
            </button>

            <button
              onClick={() => onNavigate('/venue-contact')}
              className="p-5 bg-[#faf9fb] hover:bg-white rounded-xl border border-[#e2e8f0] hover:border-[#6a4766]/50 transition-all text-left group cursor-pointer shadow-2xs"
            >
              <div className="w-8 h-8 rounded-lg bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center mb-3">
                <MapPin className="w-4 h-4" />
              </div>
              <h4 className="font-display text-base font-bold text-[#1e293b] mb-1 group-hover:text-[#6a4766]">
                Venue &amp; Inquiries
              </h4>
              <p className="text-xs text-[#64748b] mb-3">
                Interactive map, transport logistics, and symposium secretariat info.
              </p>
              <span className="text-xs font-semibold text-[#6a4766] inline-flex items-center gap-1">
                Location &amp; Help →
              </span>
            </button>

          </div>

        </div>
      </section>

    </div>
  );
};

import React, { useState } from 'react';
import { 
  Users, 
  Sparkles, 
  Globe, 
  User, 
  Calendar, 
  ExternalLink,
  ImageIcon
} from 'lucide-react';
import { RoutePath } from '../types';
import { speakersData } from '../data/speakers';

interface PanelMembersPageProps {
  onNavigate: (path: RoutePath) => void;
}

export const PanelMembersPage: React.FC<PanelMembersPageProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<'All' | 'Keynote Speaker' | 'Panelist' | 'Workshop Lead'>('All');
  const AUTH_URL = 'https://account.indiahci.org/auth';

  const filteredSpeakers = speakersData.filter((speaker) => {
    if (filter === 'All') return true;
    return speaker.roleCategory === filter;
  });

  return (
    <div className="min-h-screen bg-[#f9f9ff] py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title & Kicker */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#e2e8f0]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#6a4766] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#6a4766]" />
              <span>HCIPAI 2027 Scientific Programme</span>
              <span className="text-[#3b82f6]">•</span>
              <span className="text-[#64748b]">Hyderabad &amp; Global Interactive Track</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4e324c] tracking-tight">
              Distinguished Panel Members &amp; Keynote Speakers
            </h1>
            <p className="text-sm sm:text-base text-[#64748b] mt-2 max-w-2xl">
              Meet the pioneers leading discussions at HCIPAI 2027 on interactive systems, immersive spatial computing, and human-centered AI.
            </p>
          </div>

          <div className="bg-white border border-[#dbeafe] rounded-lg p-3.5 shadow-2xs flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748b] block">
                INTERNATIONAL HCI ROSTER
              </span>
              <span className="text-xs font-bold text-[#1e293b]">
                Keynotes, Panelists &amp; Workshops
              </span>
            </div>
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setFilter('All')}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-colors cursor-pointer ${
                filter === 'All'
                  ? 'bg-[#4e324c] text-white shadow-xs'
                  : 'bg-white hover:bg-slate-50 text-[#475569] border border-[#e2e8f0]'
              }`}
            >
              All Speakers
            </button>

            <button
              onClick={() => setFilter('Keynote Speaker')}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-colors cursor-pointer ${
                filter === 'Keynote Speaker'
                  ? 'bg-[#4e324c] text-white shadow-xs'
                  : 'bg-white hover:bg-slate-50 text-[#475569] border border-[#e2e8f0]'
              }`}
            >
              Keynote Speakers
            </button>

            <button
              onClick={() => setFilter('Panelist')}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-colors cursor-pointer ${
                filter === 'Panelist'
                  ? 'bg-[#4e324c] text-white shadow-xs'
                  : 'bg-white hover:bg-slate-50 text-[#475569] border border-[#e2e8f0]'
              }`}
            >
              Panelists
            </button>

            <button
              onClick={() => setFilter('Workshop Lead')}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-colors cursor-pointer ${
                filter === 'Workshop Lead'
                  ? 'bg-[#4e324c] text-white shadow-xs'
                  : 'bg-white hover:bg-slate-50 text-[#475569] border border-[#e2e8f0]'
              }`}
            >
              Workshop Leads
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-[#64748b]">
            <Sparkles className="w-3.5 h-3.5 text-[#3b82f6]" />
            <span>Showing {filteredSpeakers.length} Speakers &amp; Leads</span>
          </div>

        </div>

        {/* 3x3 Grid of Speakers - Large Placeholders covering most of the card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredSpeakers.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-white rounded-xl border border-[#cbd5e1] p-5 text-center flex flex-col justify-between shadow-xs hover:border-[#6a4766]/50 hover:shadow-md transition-all group"
            >
              {/* Big Photo Placeholder Area Covering Most of the Card */}
              <div className="w-full aspect-[4/4.5] rounded-t-2xl rounded-b-lg border-2 border-dashed border-[#94a3b8]/60 bg-[#f8fafc] flex flex-col items-center justify-center p-4 mb-4 group-hover:bg-[#fbf9fc] transition-colors relative">
                <div className="w-16 h-16 rounded-full bg-[#f4edf3] text-[#6a4766] flex items-center justify-center mb-2 shadow-2xs border border-[#e6b9de]/60">
                  <ImageIcon className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold text-[#4e324c] uppercase tracking-wider block">
                  [Portrait Photo Placeholder]
                </span>
                <span className="text-[11px] text-[#64748b] mt-0.5 block">
                  Insert Speaker Portrait Here
                </span>
              </div>

              {/* Speaker Details Below */}
              <div className="w-full flex flex-col items-center">
                {/* Category Badge */}
                <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-0.5 rounded-full bg-[#f4edf3] text-[#51304e] border border-[#e6b9de]/60 mb-2">
                  {speaker.roleCategory}
                </span>

                {/* Name */}
                <h3 className="font-display text-lg font-bold text-[#1e293b] mb-1">
                  {speaker.name}
                </h3>

                {/* Designation & Affiliation */}
                <p className="text-xs font-semibold text-[#2563eb] mb-0.5">
                  {speaker.designation}
                </p>

                <p className="text-xs text-[#64748b]">
                  {speaker.affiliation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Comprehensive Scientific Schedule Plum Banner */}
        <div className="bg-[#4e324c] rounded-2xl p-8 text-white relative overflow-hidden shadow-lg">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold text-[#e6b9de] uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                <span>COMPREHENSIVE SCIENTIFIC SCHEDULE</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold">
                Explore the Full Interactive Technical Track
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Review paper presentations, interactive live demos, student design competitions, and cultural networking symposium dinners across March 18–19.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onNavigate('/schedule')}
                className="bg-white hover:bg-slate-100 text-[#4e324c] px-6 py-3 rounded-md text-xs font-bold tracking-wide uppercase transition-all shadow-sm cursor-pointer"
              >
                View Master Timetable
              </button>

              <a
                href={AUTH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent hover:bg-white/10 text-white border border-white/40 px-6 py-3 rounded-md text-xs font-bold tracking-wide uppercase transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Reserve Pass (IndiaHCI Auth)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

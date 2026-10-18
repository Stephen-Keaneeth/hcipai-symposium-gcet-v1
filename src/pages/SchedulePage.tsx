import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Mic, 
  MessageSquare, 
  GitFork, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  BookOpen, 
  Coffee, 
  Laptop, 
  User, 
  Info,
  ChevronRight,
  Download
} from 'lucide-react';
import { RoutePath } from '../types';
import { scheduleDay1, scheduleDay2 } from '../data/schedule';

interface SchedulePageProps {
  onNavigate: (path: RoutePath) => void;
}

export const SchedulePage: React.FC<SchedulePageProps> = ({ onNavigate }) => {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);
  const [filterType, setFilterType] = useState<string>('all');

  const currentSessions = activeDay === 1 ? scheduleDay1 : scheduleDay2;

  const filteredSessions = currentSessions.filter((session) => {
    if (filterType === 'all') return true;
    if (filterType === 'keynote') return session.tagType === 'keynote';
    if (filterType === 'panel') return session.tagType === 'panel';
    if (filterType === 'workshop') return session.tagType === 'workshop';
    if (filterType === 'showcase') return session.tagType === 'showcase';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#f9f9ff] py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#6a4766] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#6a4766]" />
            <span>HCIPAI 2027 Scientific Agenda</span>
            <span className="text-[#3b82f6]">❖</span>
            <span className="text-[#64748b]">Hyderabad Cultural &amp; Tech Corridor</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4e324c] tracking-tight">
            Symposium Schedule &amp; Program Timeline
          </h1>
          <p className="text-sm sm:text-base text-[#64748b] mt-2 max-w-3xl">
            March 18–19, 2027 • Two days of high-impact keynotes, research panels, hands-on spatial computing labs, and immersive demo walkthroughs.
          </p>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          
          <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 flex items-center gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-[#f4edf3] text-[#6a4766] flex items-center justify-center shrink-0">
              <Mic className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-2xl font-bold text-[#4e324c]">02</span>
                <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-1 rounded uppercase">[PROPOSED]</span>
              </div>
              <span className="text-xs text-[#64748b] font-medium block">Visionary Keynotes</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 flex items-center gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-[#eff6ff] text-[#2563eb] flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-2xl font-bold text-[#4e324c]">02</span>
                <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-1 rounded uppercase">[PROPOSED]</span>
              </div>
              <span className="text-xs text-[#64748b] font-medium block">Thematic Panels</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 flex items-center gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-[#f8fafc] text-[#475569] flex items-center justify-center shrink-0 border border-[#e2e8f0]">
              <GitFork className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-2xl font-bold text-[#4e324c]">02</span>
                <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-1 rounded uppercase">[PROPOSED]</span>
              </div>
              <span className="text-xs text-[#64748b] font-medium block">Parallel Tracks</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 flex items-center gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-[#f5f3ff] text-[#7c3aed] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-2xl font-bold text-[#4e324c]">16+</span>
                <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-1 rounded uppercase">[PROPOSED]</span>
              </div>
              <span className="text-xs text-[#64748b] font-medium block">Interactive Demos</span>
            </div>
          </div>

        </div>

        {/* Day Controls & Filter Chips */}
        <div className="bg-white rounded-xl border border-[#e2e8f0] p-4 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xs">
          
          {/* Day Tabs */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveDay(1)}
              className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-all flex items-center gap-2 cursor-pointer ${
                activeDay === 1
                  ? 'bg-[#6a4766] text-white shadow-xs'
                  : 'bg-[#f8fafc] hover:bg-slate-100 text-[#475569] border border-[#e2e8f0]'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Day 1 — Thu, Mar 18</span>
            </button>

            <button
              onClick={() => setActiveDay(2)}
              className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-all flex items-center gap-2 cursor-pointer ${
                activeDay === 2
                  ? 'bg-[#6a4766] text-white shadow-xs'
                  : 'bg-[#f8fafc] hover:bg-slate-100 text-[#475569] border border-[#e2e8f0]'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Day 2 — Fri, Mar 19</span>
            </button>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-full font-semibold transition-colors cursor-pointer ${
                filterType === 'all'
                  ? 'bg-[#4e324c] text-white'
                  : 'bg-slate-100 text-[#475569] hover:bg-slate-200'
              }`}
            >
              All Sessions ({currentSessions.length})
            </button>
            <button
              onClick={() => setFilterType('keynote')}
              className={`px-3 py-1.5 rounded-full font-semibold transition-colors cursor-pointer ${
                filterType === 'keynote'
                  ? 'bg-[#4e324c] text-white'
                  : 'bg-slate-100 text-[#475569] hover:bg-slate-200'
              }`}
            >
              Keynotes
            </button>
            <button
              onClick={() => setFilterType('panel')}
              className={`px-3 py-1.5 rounded-full font-semibold transition-colors cursor-pointer ${
                filterType === 'panel'
                  ? 'bg-[#4e324c] text-white'
                  : 'bg-slate-100 text-[#475569] hover:bg-slate-200'
              }`}
            >
              Panels
            </button>
            <button
              onClick={() => setFilterType('workshop')}
              className={`px-3 py-1.5 rounded-full font-semibold transition-colors cursor-pointer ${
                filterType === 'workshop'
                  ? 'bg-[#4e324c] text-white'
                  : 'bg-slate-100 text-[#475569] hover:bg-slate-200'
              }`}
            >
              Workshops
            </button>
            <button
              onClick={() => setFilterType('showcase')}
              className={`px-3 py-1.5 rounded-full font-semibold transition-colors cursor-pointer ${
                filterType === 'showcase'
                  ? 'bg-[#4e324c] text-white'
                  : 'bg-slate-100 text-[#475569] hover:bg-slate-200'
              }`}
            >
              Showcases
            </button>
          </div>

        </div>

        {/* Day Header Banner */}
        <div className="bg-[#fbf8fa] border border-[#e6b9de]/60 rounded-xl p-5 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#4e324c] text-white text-xs font-bold flex items-center justify-center shrink-0">
              {activeDay}
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-[#4e324c]">
                {activeDay === 1
                  ? 'Day 1: Theoretical Foundations & Immersion Paradigms'
                  : 'Day 2: Cultural Ergonomics, Vernacular UI & Future Horizons'}
              </h3>
              <p className="text-xs text-[#64748b]">
                {activeDay === 1
                  ? 'Convention Center Main Auditorium & Research Labs • Thursday, March 18, 2027'
                  : 'Convention Center Main Auditorium & Research Labs • Friday, March 19, 2027'}
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0369a1] bg-[#e0f2fe] px-3 py-1 rounded-full border border-[#bae6fd]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" />
            <span>{currentSessions.length} Curated Sessions</span>
          </span>
        </div>

        {/* Timeline Stream */}
        <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#dbeafe]">
          
          {filteredSessions.map((session, sIdx) => (
            <div key={session.id} className="relative">
              {/* Timeline Node Dot */}
              <div className="absolute -left-6 sm:-left-8 top-5 w-4 h-4 rounded-full border-2 border-white bg-[#3b82f6] shadow-xs ring-2 ring-[#dbeafe]" />

              {/* Card Container */}
              <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 shadow-xs hover:border-[#6a4766]/30 transition-all">
                
                {/* Time & Badges Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#4e324c] bg-[#f4edf3] px-2.5 py-0.5 rounded border border-[#e6b9de]/60">
                      <Clock className="w-3.5 h-3.5 text-[#6a4766]" />
                      <span>{session.timeSlot}</span>
                    </span>

                    <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#e0f2fe] text-[#0369a1] border border-[#bae6fd]">
                      {session.tag}
                    </span>

                    {session.subTag && (
                      <span className="text-[11px] font-semibold text-[#64748b] bg-slate-100 px-2 py-0.5 rounded border border-[#e2e8f0]">
                        {session.subTag}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#64748b]">
                    <MapPin className="w-3.5 h-3.5 text-[#3b82f6]" />
                    <span className="font-medium text-[#1e293b]">{session.location}</span>
                  </div>
                </div>

                {/* Session Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1e293b] mb-2">
                  {session.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                  {session.description}
                </p>

                {/* Optional: Check-in Kit Inclusions Box */}
                {session.kitInclusions && (
                  <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-3 text-xs text-[#334155] flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#7c3aed]" />
                      <span className="font-medium">{session.kitInclusions}</span>
                    </div>
                  </div>
                )}

                {/* Optional: Keynote Speaker Profile & Takeaways */}
                {session.speakerName && (
                  <div className="mt-4 pt-4 border-t border-[#f1f5f9] grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-6 flex items-center gap-3">
                      {session.speakerImage ? (
                        <img
                          src={session.speakerImage}
                          alt={session.speakerName}
                          className="w-12 h-12 rounded-full object-cover border-2 border-[#6a4766]/30 shadow-xs"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-[#f4edf3] text-[#6a4766] flex items-center justify-center font-bold">
                          AS
                        </div>
                      )}
                      <div>
                        <h4 className="text-sm font-bold text-[#1e293b]">{session.speakerName}</h4>
                        <p className="text-xs text-[#64748b]">{session.speakerTitle}</p>
                      </div>
                    </div>

                    {session.keyTakeaways && (
                      <div className="md:col-span-6 bg-[#faf9fb] border border-[#e2e8f0] rounded-lg p-3 text-xs">
                        <span className="font-bold text-[#6a4766] block uppercase tracking-wider text-[10px] mb-1">
                          Key Takeaways
                        </span>
                        <ul className="space-y-1 text-[#475569]">
                          {session.keyTakeaways.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-center gap-1.5">
                              <span className="text-[#3b82f6]">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Optional: Panellists Row */}
                {session.panellists && (
                  <div className="mt-4 pt-4 border-t border-[#f1f5f9]">
                    <span className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider block mb-2">
                      Featured Panellists
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {session.panellists.map((panelist, pIdx) => (
                        <div key={pIdx} className="p-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-[#4e324c] text-white text-xs font-bold flex items-center justify-center shrink-0">
                            {panelist.avatarInitials}
                          </div>
                          <div>
                            <span className="text-xs font-bold text-[#1e293b] block leading-tight">
                              {panelist.name}
                            </span>
                            <span className="text-[11px] text-[#64748b] block leading-tight">
                              {panelist.role}, {panelist.org}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Optional: Parallel Workshops Cards */}
                {session.workshops && (
                  <div className="mt-4 pt-4 border-t border-[#f1f5f9] grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {session.workshops.map((ws, wIdx) => (
                      <div key={wIdx} className="p-4 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-[#2563eb] bg-[#eff6ff] px-2 py-0.5 rounded border border-[#bfdbfe]">
                            {ws.track}
                          </span>
                          <span className="text-[11px] text-[#64748b]">{ws.location}</span>
                        </div>
                        <h4 className="text-sm font-bold text-[#1e293b]">{ws.title}</h4>
                        <p className="text-xs text-[#64748b]">{ws.description}</p>
                        <div className="pt-2 flex items-center justify-between text-[11px] text-[#475569] border-t border-[#e2e8f0]">
                          <span>Facilitator: <strong>{ws.facilitator}</strong></span>
                          <span className="text-blue-700 font-semibold">{ws.seats}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Optional: Mentors */}
                {session.mentors && (
                  <div className="mt-4 pt-4 border-t border-[#f1f5f9] grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {session.mentors.map((m, mIdx) => (
                      <div key={mIdx} className="p-3 bg-white border border-dashed border-[#cbd5e1] rounded-lg flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center">
                          TBA
                        </div>
                        <div>
                          <span className="text-xs font-bold text-[#1e293b] block">{m.role}</span>
                          <span className="text-[11px] text-[#64748b]">{m.affiliation}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

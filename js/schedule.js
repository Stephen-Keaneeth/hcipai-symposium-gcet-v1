// Schedule data and interactivity
const scheduleData = {
  day1: [
    {
      id: 's1-1',
      day: 1,
      timeSlot: '08:30 AM – 09:30 AM',
      tag: 'CHECK-IN',
      tagType: 'checkin',
      location: 'Grand Atrium & Foyer',
      title: 'Registration, Morning Tea & Welcome Kit Distribution',
      description: 'Arrive, receive your symposium badge, exclusive HCIPAI 2027 technical proceedings dossier, and traditional South Indian welcome refreshment. Meet fellow delegates in the informal lounge.',
      kitInclusions: 'Kit Inclusions: Digital badge, NFC research ledger & hardbound abstracts.'
    },
    {
      id: 's1-2',
      day: 1,
      timeSlot: '09:30 AM – 10:30 AM',
      tag: 'KEYNOTE ADDRESS',
      tagType: 'keynote',
      subTag: 'PLENARY TRACK',
      location: 'Dr. APJ Abdul Kalam Auditorium',
      title: 'Inaugural Ceremony & Keynote: Next-Gen Human-AI Collaboration',
      description: 'Ceremonial lighting of the lamp followed by an opening keynote deconstructing multimodal interaction models, cognitive load offloading, and co-adaptive intelligence across mixed reality spaces.',
      speakerName: 'Prof. Ananya Sen, PhD',
      speakerTitle: 'Chair of Cognitive Systems, IIT Bombay',
      speakerImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
      keyTakeaways: [
        'Predictive neuro-symbolic UI design',
        'Human agency preservation metrics',
        'Cross-cultural multimodal datasets'
      ]
    },
    {
      id: 's1-3',
      day: 1,
      timeSlot: '10:45 AM – 12:30 PM',
      tag: 'PANEL DISCUSSION',
      tagType: 'panel',
      location: 'Hall Alpha (Live Streamed)',
      title: 'Immersive Frontiers: AR/VR and Spatial Experiences',
      description: 'Industry pioneers and HCI academicians discuss spatial audio fiducials, gaze-contingent rendering, and tactile haptic illusions in everyday mixed reality environments.',
      panellists: [
        { name: 'Dr. Vikram R.', role: 'Director of XR', org: 'Meta Reality Labs', avatarInitials: 'VR' },
        { name: 'Shreya Nambiar', role: 'Principal Spatial Designer', org: 'Apple', avatarInitials: 'SN' },
        { name: 'Prof. Matthew Klein', role: 'HCI Lab', org: 'ETH Zürich', avatarInitials: 'MK' }
      ]
    },
    {
      id: 's1-4',
      day: 1,
      timeSlot: '12:30 PM – 01:30 PM',
      tag: 'MIDDAY PAUSE',
      tagType: 'lunch',
      location: 'Pavilion B & Gallery',
      title: 'Networking Lunch & Interactive Zone Walkthrough',
      description: 'Catered regional lunch buffet in Dining Pavilion B. Concurrent informal demos available at the HCIPAI Showcase Pavilion with student prototype booths open for exploration.'
    },
    {
      id: 's1-5',
      day: 1,
      timeSlot: '01:30 PM – 03:30 PM',
      tag: 'PARALLEL WORKSHOPS',
      tagType: 'workshop',
      subTag: 'BYOD (Laptop + Unity/WebXR Ready)',
      location: 'Studio Labs A & B',
      title: 'Parallel Hands-on Technical Workshops',
      description: 'Intensive instructor-led laboratory modules with live development kits and real-time mentor critique.',
      workshops: [
        {
          track: 'TRACK A',
          location: 'Studio Lab 102 [TBA]',
          title: 'Spatial UI Design & Micro-Gestures',
          description: 'Learn practical spatial hierarchy, physics-based depth cues, and fine finger tracking gesture sets using OpenXR and web-based spatial SDKs.',
          facilitator: 'Siddharth Rao [TBA]',
          seats: 'Cap: 45 seats [PROPOSED]'
        },
        {
          track: 'TRACK B',
          location: 'Computing Lab 204 [TBA]',
          title: 'Conversational AI Evaluation Frameworks',
          description: 'Rigorous methodologies for human-in-the-loop qualitative testing, prompt drift quantification, and multimodal dialogue ergonomics.',
          facilitator: 'Dr. Priya Sundaram [TBA]',
          seats: 'Cap: 45 seats [PROPOSED]'
        }
      ]
    },
    {
      id: 's1-6',
      day: 1,
      timeSlot: '03:45 PM – 05:00 PM',
      tag: 'RESEARCH SHOWCASE',
      tagType: 'showcase',
      location: 'Seminar Halls 1 & 2',
      title: 'Paper Presentation & Peer-Reviewed Research Showcase',
      description: 'Oral presentations of 8 top-rated accepted papers covering affective computing, tactile feedforward systems, and indigenous language voice interfaces. Session concludes with Day 1 Q&A synthesis.'
    },
    {
      id: 's1-7',
      day: 1,
      timeSlot: '05:15 PM – 06:15 PM',
      tag: 'EVENING DOCTORAL COLLOQUIUM',
      tagType: 'colloquium',
      subTag: '[Session Roster Pending Confirmation]',
      location: 'Studio Lab 104',
      title: 'Doctoral Consortia & Emerging HCI Methodologies',
      description: 'Mentorship critique for doctoral research proposals with focus on somatic evaluation, multimodal telepresence, and algorithmic ethics in interactive computing.',
      mentors: [
        { role: '[Lead Mentor - TBA]', affiliation: 'Invited Senior Academician • HCIPAI Consortium' },
        { role: '[Panelist - To Be Confirmed]', affiliation: 'Faculty Reviewer • ACM SIGCHI Chapter' }
      ]
    }
  ],
  day2: [
    {
      id: 's2-1',
      day: 2,
      timeSlot: '09:30 AM – 10:45 AM',
      tag: 'KEYNOTE ADDRESS',
      tagType: 'keynote',
      subTag: 'MORNING PLENARY',
      location: 'Dr. APJ Abdul Kalam Auditorium',
      title: 'Morning Plenary: South Asian HCI Paradigms & Vernacular Multimodal Synthesis',
      description: 'Keynote and panel address on indigenous design systems, contextual voice ergonomics for regional dialects, and inclusive digital accessibility frameworks.',
      speakerName: 'Dr. Marcus Vance',
      speakerTitle: 'Principal Research Scientist, Spatial Computing & Sensory Lab',
      keyTakeaways: [
        'Linguistic nuances in speech UX across Indic scripts',
        'Culturally grounded tactile interface standards',
        'Equitable tech deployment in low-connectivity zones'
      ]
    },
    {
      id: 's2-2',
      day: 2,
      timeSlot: '11:00 AM – 01:00 PM',
      tag: 'PARALLEL WORKSHOPS',
      tagType: 'workshop',
      subTag: 'BYOD Hands-On Masterclasses',
      location: 'Studio Labs A & B',
      title: 'Parallel Hands-on Masterclasses: Rapid Prototyping & Sensory Cues',
      description: 'Hands-on hardware labs on wearable haptic rings, eye-tracking telemetry, and cross-platform VisionOS prototyping toolkits.',
      workshops: [
        {
          track: 'STUDIO A',
          location: 'Hardware Prototyping Lab [TBA]',
          title: 'Tactile Display Fabrication & Micro-Haptics',
          description: 'Building custom actuator controllers and calibrating vibrotactile feedback envelopes for mixed-reality objects.',
          facilitator: 'Elena Rostova [Workshop Lead]',
          seats: 'Cap: 35 seats [PROPOSED]'
        },
        {
          track: 'STUDIO B',
          location: 'Design Studio 301 [TBA]',
          title: 'Vernacular Multimodal Design Systems',
          description: 'Creating typography tokens, gesture palettes, and audio cues optimized for non-Latin multilingual user bases.',
          facilitator: 'Prof. Rajesh K. Varma [NID]',
          seats: 'Cap: 40 seats [PROPOSED]'
        }
      ]
    },
    {
      id: 's2-3',
      day: 2,
      timeSlot: '01:00 PM – 02:15 PM',
      tag: 'MIDDAY PAUSE',
      tagType: 'lunch',
      location: 'Dining Pavilion B & Courtyard',
      title: 'Networking Fellowship Lunch & Live Interactive Demonstrations',
      description: 'Enjoy regional Hyderabad culinary selections while interacting with nominated delegate booths and student demo presentations.'
    },
    {
      id: 's2-4',
      day: 2,
      timeSlot: '02:30 PM – 04:30 PM',
      tag: 'RESEARCH SHOWCASE',
      tagType: 'showcase',
      location: 'Exhibition Hall & Gallery',
      title: 'Doctoral Colloquium, Poster Session & Research-in-Progress',
      description: 'Interactive walk-around poster session showcasing 32 accepted doctoral research works and work-in-progress demos with peer voting for the People’s Choice Award.'
    },
    {
      id: 's2-5',
      day: 2,
      timeSlot: '05:00 PM – 06:30 PM',
      tag: 'KEYNOTE ADDRESS',
      tagType: 'keynote',
      subTag: 'VALEDICTORY & BANQUET',
      location: 'Dr. APJ Abdul Kalam Auditorium',
      title: 'Valedictory Ceremony & HCIPAI Awards Banquet',
      description: 'Concluding synthesis, best paper presentations, student innovation awards, felicitations to organizing committees, and formal handover to HCIPAI 2028.'
    }
  ]
};

let currentDay = 1;
let currentFilter = 'all';

function renderSchedule() {
  const container = document.getElementById('timeline-container');
  const countBadge = document.getElementById('session-count-badge');
  const dayTitle = document.getElementById('day-banner-title');
  const daySubtitle = document.getElementById('day-banner-subtitle');
  const dayNum = document.getElementById('day-banner-number');
  const allSessionsTab = document.getElementById('filter-all-text');

  const sessions = currentDay === 1 ? scheduleData.day1 : scheduleData.day2;

  // Filter
  const filtered = sessions.filter(session => {
    if (currentFilter === 'all') return true;
    if (currentFilter === 'keynote') return session.tagType === 'keynote';
    if (currentFilter === 'panel') return session.tagType === 'panel';
    if (currentFilter === 'workshop') return session.tagType === 'workshop';
    if (currentFilter === 'showcase') return session.tagType === 'showcase';
    return true;
  });

  // Update counts
  if (countBadge) countBadge.textContent = `${filtered.length} Curated Sessions`;
  if (allSessionsTab) allSessionsTab.textContent = `All Sessions (${sessions.length})`;

  // Update day header
  if (dayNum) dayNum.textContent = currentDay;
  if (dayTitle) {
    dayTitle.textContent = currentDay === 1
      ? 'Day 1: Theoretical Foundations & Immersion Paradigms'
      : 'Day 2: Cultural Ergonomics, Vernacular UI & Future Horizons';
  }
  if (daySubtitle) {
    daySubtitle.textContent = currentDay === 1
      ? 'Convention Center Main Auditorium & Research Labs • Thursday, March 18, 2027'
      : 'Convention Center Main Auditorium & Research Labs • Friday, March 19, 2027';
  }

  // Render HTML
  if (!container) return;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="bg-white rounded-xl border border-[#e2e8f0] p-8 text-center text-[#64748b]">
        <p class="text-sm">No sessions found matching this filter for Day ${currentDay}.</p>
      </div>
    `;
    return;
  }

  let html = '';

  filtered.forEach(session => {
    let extrasHtml = '';

    // Checkin kit inclusions
    if (session.kitInclusions) {
      extrasHtml += `
        <div class="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-3 text-xs text-[#334155] flex items-center justify-between gap-4 mt-3">
          <div class="flex items-center gap-2">
            <i data-lucide="sparkles" class="w-4 h-4 text-[#7c3aed]"></i>
            <span class="font-medium">${session.kitInclusions}</span>
          </div>
        </div>
      `;
    }

    // Keynote Speaker Profile & Takeaways
    if (session.speakerName) {
      let takeawaysHtml = '';
      if (session.keyTakeaways && session.keyTakeaways.length > 0) {
        takeawaysHtml = `
          <div class="md:col-span-6 bg-[#faf9fb] border border-[#e2e8f0] rounded-lg p-3 text-xs">
            <span class="font-bold text-[#6a4766] block uppercase tracking-wider text-[10px] mb-1">
              Key Takeaways
            </span>
            <ul class="space-y-1 text-[#475569]">
              ${session.keyTakeaways.map(t => `<li class="flex items-center gap-1.5"><span class="text-[#3b82f6]">•</span><span>${t}</span></li>`).join('')}
            </ul>
          </div>
        `;
      }

      extrasHtml += `
        <div class="mt-4 pt-4 border-t border-[#f1f5f9] grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div class="md:col-span-6 flex items-center gap-3">
            ${session.speakerImage 
              ? `<img src="${session.speakerImage}" alt="${session.speakerName}" class="w-12 h-12 rounded-full object-cover border-2 border-[#6a4766]/30 shadow-xs" />`
              : `<div class="w-12 h-12 rounded-full bg-[#f4edf3] text-[#6a4766] flex items-center justify-center font-bold">AS</div>`
            }
            <div>
              <h4 class="text-sm font-bold text-[#1e293b]">${session.speakerName}</h4>
              <p class="text-xs text-[#64748b]">${session.speakerTitle}</p>
            </div>
          </div>
          ${takeawaysHtml}
        </div>
      `;
    }

    // Panellists Row
    if (session.panellists && session.panellists.length > 0) {
      extrasHtml += `
        <div class="mt-4 pt-4 border-t border-[#f1f5f9]">
          <span class="text-[11px] font-bold text-[#64748b] uppercase tracking-wider block mb-2">Featured Panellists</span>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            ${session.panellists.map(p => `
              <div class="p-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-full bg-[#4e324c] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  ${p.avatarInitials}
                </div>
                <div>
                  <span class="text-xs font-bold text-[#1e293b] block leading-tight">${p.name}</span>
                  <span class="text-[11px] text-[#64748b] block leading-tight">${p.role}, ${p.org}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Parallel Workshops
    if (session.workshops && session.workshops.length > 0) {
      extrasHtml += `
        <div class="mt-4 pt-4 border-t border-[#f1f5f9] grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${session.workshops.map(ws => `
            <div class="p-4 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg space-y-2">
              <div class="flex items-center justify-between text-xs">
                <span class="font-bold text-[#2563eb] bg-[#eff6ff] px-2 py-0.5 rounded border border-[#bfdbfe]">${ws.track}</span>
                <span class="text-[11px] text-[#64748b]">${ws.location}</span>
              </div>
              <h4 class="text-sm font-bold text-[#1e293b]">${ws.title}</h4>
              <p class="text-xs text-[#64748b]">${ws.description}</p>
              <div class="pt-2 flex items-center justify-between text-[11px] text-[#475569] border-t border-[#e2e8f0]">
                <span>Facilitator: <strong>${ws.facilitator}</strong></span>
                <span class="text-blue-700 font-semibold">${ws.seats}</span>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Mentors
    if (session.mentors && session.mentors.length > 0) {
      extrasHtml += `
        <div class="mt-4 pt-4 border-t border-[#f1f5f9] grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${session.mentors.map(m => `
            <div class="p-3 bg-white border border-dashed border-[#cbd5e1] rounded-lg flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-full bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center">
                TBA
              </div>
              <div>
                <span class="text-xs font-bold text-[#1e293b] block">${m.role}</span>
                <span class="text-[11px] text-[#64748b]">${m.affiliation}</span>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    html += `
      <div class="relative">
        <div class="absolute -left-6 sm:-left-8 top-5 w-4 h-4 rounded-full border-2 border-white bg-[#3b82f6] shadow-xs ring-2 ring-[#dbeafe]"></div>
        <div class="bg-white rounded-xl border border-[#e2e8f0] p-6 shadow-xs hover:border-[#6a4766]/30 transition-all">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div class="flex flex-wrap items-center gap-2">
              <span class="inline-flex items-center gap-1 text-xs font-bold text-[#4e324c] bg-[#f4edf3] px-2.5 py-0.5 rounded border border-[#e6b9de]/60">
                <i data-lucide="clock" class="w-3.5 h-3.5 text-[#6a4766]"></i>
                <span>${session.timeSlot}</span>
              </span>
              <span class="text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#e0f2fe] text-[#0369a1] border border-[#bae6fd]">
                ${session.tag}
              </span>
              ${session.subTag ? `<span class="text-[11px] font-semibold text-[#64748b] bg-slate-100 px-2 py-0.5 rounded border border-[#e2e8f0]">${session.subTag}</span>` : ''}
            </div>
            <div class="flex items-center gap-1.5 text-xs text-[#64748b]">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-[#3b82f6]"></i>
              <span class="font-medium text-[#1e293b]">${session.location}</span>
            </div>
          </div>
          <h3 class="font-display text-xl sm:text-2xl font-bold text-[#1e293b] mb-2">${session.title}</h3>
          <p class="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">${session.description}</p>
          ${extrasHtml}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderSchedule();

  // Day buttons
  const btnDay1 = document.getElementById('btn-day-1');
  const btnDay2 = document.getElementById('btn-day-2');

  function updateDayButtons() {
    if (!btnDay1 || !btnDay2) return;
    if (currentDay === 1) {
      btnDay1.className = 'px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-all flex items-center gap-2 cursor-pointer bg-[#6a4766] text-white shadow-xs';
      btnDay2.className = 'px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-all flex items-center gap-2 cursor-pointer bg-[#f8fafc] hover:bg-slate-100 text-[#475569] border border-[#e2e8f0]';
    } else {
      btnDay2.className = 'px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-all flex items-center gap-2 cursor-pointer bg-[#6a4766] text-white shadow-xs';
      btnDay1.className = 'px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-all flex items-center gap-2 cursor-pointer bg-[#f8fafc] hover:bg-slate-100 text-[#475569] border border-[#e2e8f0]';
    }
  }

  if (btnDay1) {
    btnDay1.addEventListener('click', () => {
      currentDay = 1;
      updateDayButtons();
      renderSchedule();
    });
  }

  if (btnDay2) {
    btnDay2.addEventListener('click', () => {
      currentDay = 2;
      updateDayButtons();
      renderSchedule();
    });
  }

  // Filter chips
  const filterButtons = document.querySelectorAll('[data-filter]');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentFilter = btn.getAttribute('data-filter') || 'all';
      filterButtons.forEach(b => {
        b.className = 'px-3 py-1.5 rounded-full font-semibold transition-colors cursor-pointer bg-slate-100 text-[#475569] hover:bg-slate-200';
      });
      btn.className = 'px-3 py-1.5 rounded-full font-semibold transition-colors cursor-pointer bg-[#4e324c] text-white';
      renderSchedule();
    });
  });
});

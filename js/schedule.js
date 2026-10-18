// Schedule data and interactivity
import scheduleData from '../data/schedule.json';

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

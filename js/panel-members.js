// Panel members data & filter interactivity
import speakersList from '../data/speakers.json';

let activeFilter = 'All';

function renderSpeakers() {
  const container = document.getElementById('speakers-grid');
  const countSpan = document.getElementById('speaker-count');

  const filtered = speakersList.filter(s => {
    if (activeFilter === 'All') return true;
    return s.roleCategory === activeFilter;
  });

  if (countSpan) {
    countSpan.textContent = `Showing ${filtered.length} Speakers & Leads`;
  }

  if (!container) return;

  container.innerHTML = filtered.map(speaker => `
    <div class="bg-white rounded-xl border border-[#cbd5e1] p-5 text-center flex flex-col justify-between shadow-xs hover:border-[#6a4766]/50 hover:shadow-md transition-all group">
      <!-- Photo Area -->
      ${speaker.photo ? `
        <div class="w-full aspect-[4/4.5] rounded-t-2xl rounded-b-lg overflow-hidden bg-[#f8fafc] mb-4 border border-[#e2e8f0]">
          <img src="${speaker.photo}" alt="${speaker.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
      ` : `
        <div class="w-full aspect-[4/4.5] rounded-t-2xl rounded-b-lg border-2 border-dashed border-[#94a3b8]/60 bg-[#f8fafc] flex flex-col items-center justify-center p-4 mb-4 group-hover:bg-[#fbf9fc] transition-colors relative">
          <div class="w-16 h-16 rounded-full bg-[#f4edf3] text-[#6a4766] flex items-center justify-center mb-2 shadow-2xs border border-[#e6b9de]/60">
            <i data-lucide="image" class="w-8 h-8"></i>
          </div>
          <span class="text-xs font-bold text-[#4e324c] uppercase tracking-wider block">
            [Portrait Photo Placeholder]
          </span>
          <span class="text-[11px] text-[#64748b] mt-0.5 block">
            Insert Speaker Portrait Here
          </span>
        </div>
      `}

      <!-- Speaker Details -->
      <div class="w-full flex flex-col items-center">
        <span class="text-[10px] font-bold tracking-widest uppercase px-3 py-0.5 rounded-full bg-[#f4edf3] text-[#51304e] border border-[#e6b9de]/60 mb-2">
          ${speaker.roleCategory}
        </span>
        <h3 class="font-display text-lg font-bold text-[#1e293b] mb-1">
          ${speaker.name}
        </h3>
        <p class="text-xs font-semibold text-[#2563eb] mb-0.5">
          ${speaker.designation}
        </p>
        <p class="text-xs text-[#64748b]">
          ${speaker.affiliation}
        </p>
      </div>
    </div>
  `).join('');

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderSpeakers();

  const filterButtons = document.querySelectorAll('[data-speaker-filter]');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.getAttribute('data-speaker-filter') || 'All';
      filterButtons.forEach(b => {
        b.className = 'px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-colors cursor-pointer bg-white hover:bg-slate-50 text-[#475569] border border-[#e2e8f0]';
      });
      btn.className = 'px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-colors cursor-pointer bg-[#4e324c] text-white shadow-xs';
      renderSpeakers();
    });
  });
});

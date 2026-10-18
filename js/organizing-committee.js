import committeeData from '../data/committee.json';

function renderCommittee() {
  const leadershipContainer = document.getElementById('leadership-grid');
  const portfolioContainer = document.getElementById('portfolios-grid');
  const studentContainer = document.getElementById('students-grid');

  // 1. Leadership Chairs
  if (leadershipContainer && committeeData.leadershipChairs) {
    leadershipContainer.innerHTML = committeeData.leadershipChairs.map(member => `
      <div class="bg-white rounded-xl border border-[#cbd5e1] p-5 flex flex-col justify-between shadow-xs hover:border-[#6a4766]/50 hover:shadow-md transition-all group">
        ${member.photo ? `
          <div class="w-full aspect-[4/3] rounded-t-xl rounded-b-md overflow-hidden bg-[#f8fafc] mb-4 border border-[#e2e8f0]">
            <img src="${member.photo}" alt="${member.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
        ` : `
          <div class="w-full aspect-[4/3] rounded-t-xl rounded-b-md border-2 border-dashed border-[#94a3b8]/60 bg-[#f8fafc] flex flex-col items-center justify-center p-4 mb-4 group-hover:bg-[#fbf9fc] transition-colors">
            <div class="w-14 h-14 rounded-full bg-[#f4edf3] text-[#6a4766] flex items-center justify-center mb-2 border border-[#e6b9de]/60 shadow-2xs">
              <i data-lucide="image" class="w-7 h-7"></i>
            </div>
            <span class="text-xs font-bold text-[#4e324c] uppercase tracking-wider block">[Photo Placeholder]</span>
            <span class="text-[11px] text-[#64748b] mt-0.5 block">Insert Faculty Headshot</span>
          </div>
        `}
        <div class="text-center pt-1">
          <h3 class="font-display text-base sm:text-lg font-bold text-[#1e293b]">${member.name}</h3>
          <p class="text-xs text-[#2563eb] font-semibold mt-1">${member.role}</p>
        </div>
      </div>
    `).join('');
  }

  // 2. Organizing Committee Members (Portfolios)
  if (portfolioContainer && committeeData.committeeMembers) {
    portfolioContainer.innerHTML = committeeData.committeeMembers.map(member => `
      <div class="bg-white rounded-xl border border-[#cbd5e1] p-5 flex flex-col justify-between shadow-xs hover:border-[#2563eb]/50 hover:shadow-md transition-all group">
        ${member.photo ? `
          <div class="w-full aspect-[4/3] rounded-t-xl rounded-b-md overflow-hidden bg-[#f8fafc] mb-4 border border-[#e2e8f0]">
            <img src="${member.photo}" alt="${member.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
        ` : `
          <div class="w-full aspect-[4/3] rounded-t-xl rounded-b-md border-2 border-dashed border-[#94a3b8]/60 bg-[#f8fafc] flex flex-col items-center justify-center p-4 mb-4 group-hover:bg-[#f0f9ff] transition-colors">
            <div class="w-14 h-14 rounded-full bg-[#eff6ff] text-[#2563eb] flex items-center justify-center mb-2 border border-[#bae6fd] shadow-2xs">
              <i data-lucide="image" class="w-7 h-7"></i>
            </div>
            <span class="text-xs font-bold text-[#1e40af] uppercase tracking-wider block">[Photo Placeholder]</span>
            <span class="text-[11px] text-[#64748b] mt-0.5 block">Insert Member Picture</span>
          </div>
        `}
        <div class="text-center pt-1">
          <h3 class="font-display text-base sm:text-lg font-bold text-[#1e293b]">${member.name}</h3>
          <p class="text-xs text-[#475569] font-medium mt-1">${member.role}</p>
        </div>
      </div>
    `).join('');
  }

  // 3. Student Volunteers & Coordinators
  if (studentContainer && committeeData.studentVolunteers) {
    studentContainer.innerHTML = committeeData.studentVolunteers.map(member => `
      <div class="bg-white rounded-xl border border-[#cbd5e1] p-4 flex flex-col justify-between shadow-2xs hover:border-[#7c3aed]/50 hover:shadow-md transition-all group">
        ${member.photo ? `
          <div class="w-full aspect-[4/3] rounded-t-xl rounded-b-md overflow-hidden bg-[#f8fafc] mb-3 border border-[#e2e8f0]">
            <img src="${member.photo}" alt="${member.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
        ` : `
          <div class="w-full aspect-[4/3] rounded-t-xl rounded-b-md border-2 border-dashed border-[#94a3b8]/60 bg-[#f8fafc] flex flex-col items-center justify-center p-3 mb-3 group-hover:bg-[#faf5ff] transition-colors">
            <div class="w-12 h-12 rounded-full bg-[#f5f3ff] text-[#7c3aed] flex items-center justify-center mb-1.5 border border-[#ddd6fe] shadow-2xs">
              <i data-lucide="image" class="w-6 h-6"></i>
            </div>
            <span class="text-[11px] font-bold text-[#6b21a8] uppercase tracking-wider block">[Photo Placeholder]</span>
            <span class="text-[10px] text-[#64748b] block">Insert Student Photo</span>
          </div>
        `}
        <div class="text-center pt-1">
          <h3 class="font-display text-sm font-bold text-[#1e293b]">${member.name}</h3>
          <p class="text-[11px] text-[#64748b] mt-0.5">${member.role}</p>
        </div>
      </div>
    `).join('');
  }

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

document.addEventListener('DOMContentLoaded', renderCommittee);

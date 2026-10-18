import pricingTiers from '../data/pricing.json';

function renderPricing() {
  const container = document.getElementById('pricing-grid');
  if (!container || !pricingTiers) return;

  container.innerHTML = pricingTiers.map(tier => {
    const isHighlight = !!tier.highlight;
    return `
      <div class="rounded-xl border ${isHighlight ? 'border-[#6a4766] ring-1 ring-[#6a4766]/30' : 'border-[#e2e8f0]'} bg-white overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
        <div class="h-1.5 w-full ${isHighlight ? 'bg-[#6a4766]' : 'bg-[#3b82f6]'}"></div>
        <div class="p-6 space-y-4 flex-1">
          <div class="flex items-center justify-between text-xs">
            <span class="font-bold tracking-wider uppercase text-[#6a4766]">${tier.badge || ''}</span>
            ${tier.subBadge ? `<span class="text-[#64748b] font-medium">${tier.subBadge}</span>` : ''}
          </div>
          <h3 class="font-display text-2xl font-bold text-[#1e293b]">${tier.title}</h3>
          <p class="text-xs text-[#64748b] leading-relaxed">
            ${tier.description}
          </p>

          <div class="space-y-3 pt-2 pb-3 border-y border-[#f1f5f9]">
            ${(tier.prices || []).map(p => `
              <div class="flex items-baseline justify-between">
                <span class="text-xs text-[#475569] font-medium">${p.label}</span>
                <div class="text-right">
                  <span class="font-display text-2xl font-bold text-[#1e293b]">${p.amount}</span>
                  <span class="text-[11px] text-[#64748b] ml-1">${p.period}</span>
                </div>
              </div>
            `).join('')}
            ${tier.memberNotice ? `
              <div class="flex items-center gap-1.5 text-[11px] text-[#7c3aed] bg-[#f5f3ff] p-2 rounded border border-[#ddd6fe]">
                <i data-lucide="info" class="w-3.5 h-3.5 shrink-0"></i>
                <span>${tier.memberNotice}</span>
              </div>
            ` : ''}
          </div>

          <ul class="space-y-2 text-xs text-[#334155] pt-1">
            ${(tier.features || []).map(f => `
              <li class="flex items-center gap-2">
                <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-[#3b82f6] shrink-0"></i>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

document.addEventListener('DOMContentLoaded', renderPricing);

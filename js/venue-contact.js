// Venue & Contact copy button interactivity
document.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.getElementById('copy-address-btn');
  const copyBtnText = document.getElementById('copy-btn-text');
  const copyIcon = document.getElementById('copy-icon');
  const checkIcon = document.getElementById('check-icon');

  const fullAddress = 'Geethanjali College of Engineering and Technology (GCET), Sy. No. 33 & 34, Cheeryal (V), Keesara (M), Medchal-Malkajgiri District, Telangana, India – Pin Code: 501301';

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(fullAddress).then(() => {
        if (copyBtnText) copyBtnText.textContent = 'Copied!';
        if (copyIcon) copyIcon.classList.add('hidden');
        if (checkIcon) checkIcon.classList.remove('hidden');

        setTimeout(() => {
          if (copyBtnText) copyBtnText.textContent = 'Copy Address';
          if (copyIcon) copyIcon.classList.remove('hidden');
          if (checkIcon) checkIcon.classList.add('hidden');
        }, 2500);
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    });
  }
});

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const publicDir = path.resolve('public');
const assetsDir = path.resolve('public/assets');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

// 1. HCIPAI Logo SVG
const hcipaiLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500" fill="none">
  <rect width="500" height="500" fill="transparent" />
  <g transform="translate(50, 40)">
    <!-- Left purple capsule -->
    <rect x="65" y="40" width="60" height="230" rx="30" fill="#9333EA" />
    <circle cx="108" cy="72" r="9" fill="#FFFFFF" />

    <!-- Right blue block shapes -->
    <rect x="145" y="75" width="135" height="140" rx="4" fill="#2563EB" />
    <rect x="180" y="240" width="55" height="55" rx="4" fill="#2563EB" />

    <!-- Center white spiral motif -->
    <path d="M 125,235 C 190,235 220,195 220,150 C 220,105 180,85 145,85 C 105,85 85,120 85,165 C 85,215 125,245 160,245 C 195,245 205,220 205,190 C 205,160 185,145 165,145 C 145,145 140,160 140,175 C 140,195 150,205 165,205" 
          stroke="#FFFFFF" stroke-width="15" stroke-linecap="round" fill="none" />
  </g>
  <!-- Text HCIPAI -->
  <text x="250" y="410" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="58" font-weight="800" fill="#374151" text-anchor="middle" letter-spacing="12">HCIPAI</text>
</svg>`;

// 2. Geethanjali College Logo SVG
const gcetLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 320" width="1100" height="320" fill="none">
  <rect width="1100" height="320" fill="#FFFFFF" />
  <!-- Circular Emblem -->
  <g transform="translate(50, 45)">
    <!-- Left semicircle filled -->
    <path d="M 115,5 A 110,110 0 0,0 115,225 Z" fill="#0B478B" />
    <!-- Right semicircle outline -->
    <path d="M 115,5 A 110,110 0 0,1 115,225" stroke="#0B478B" stroke-width="12" fill="none" />
    <!-- Stylized G Human Figure -->
    <!-- Head -->
    <circle cx="115" cy="72" r="17" fill="#FFFFFF" />
    <!-- Body & Arms -->
    <path d="M 68,180 Q 115,110 115,95 Q 115,110 162,180" stroke="#FFFFFF" stroke-width="14" stroke-linecap="round" fill="none" />
    <!-- G horizontal crossbar -->
    <line x1="115" y1="165" x2="205" y2="165" stroke="#0B478B" stroke-width="12" stroke-linecap="round" />
  </g>

  <!-- Typography -->
  <g transform="translate(320, 115)">
    <text x="0" y="0" font-family="'Plus Jakarta Sans', -apple-system, sans-serif" font-size="78" font-weight="900" fill="#0B478B" letter-spacing="2">GEETHANJALI</text>
    <text x="0" y="44" font-family="'Plus Jakarta Sans', -apple-system, sans-serif" font-size="34" font-weight="600" fill="#2563EB" letter-spacing="0.5">College of Engineering and Technology</text>
    <line x1="0" y1="62" x2="620" y2="62" stroke="#0B478B" stroke-width="2.5" />
    <text x="590" y="98" font-family="'Plus Jakarta Sans', -apple-system, sans-serif" font-size="32" font-style="italic" font-weight="700" fill="#0B478B" text-anchor="end">Epicenter For Transformation</text>
  </g>
</svg>`;

// 3. BannerFinal SVG
const bannerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 480" width="1600" height="480">
  <defs>
    <linearGradient id="bannerBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="50%" stop-color="#FAF9FD" />
      <stop offset="100%" stop-color="#F4F8FF" />
    </linearGradient>
    <pattern id="paisley" width="80" height="80" patternUnits="userSpaceOnUse">
      <path d="M 20,40 C 20,20 40,20 40,30 C 40,40 25,45 20,40 Z" stroke="#E2E8F0" stroke-width="0.75" fill="none" opacity="0.35"/>
      <circle cx="60" cy="20" r="1" fill="#CBD5E1" opacity="0.4" />
      <circle cx="30" cy="65" r="1" fill="#CBD5E1" opacity="0.4" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1600" height="480" fill="url(#bannerBg)" />
  <rect width="1600" height="480" fill="url(#paisley)" />

  <!-- Corner Kolam Motifs -->
  <!-- Bottom-Left Kolam -->
  <g transform="translate(15, 305)" stroke="#60A5FA" stroke-width="2" fill="none">
    <circle cx="20" cy="20" r="4" fill="#60A5FA" />
    <circle cx="45" cy="20" r="4" fill="#60A5FA" />
    <circle cx="70" cy="20" r="4" fill="#60A5FA" />
    <circle cx="20" cy="45" r="4" fill="#60A5FA" />
    <circle cx="45" cy="45" r="4" fill="#60A5FA" />
    <circle cx="70" cy="45" r="4" fill="#60A5FA" />
    <circle cx="20" cy="70" r="4" fill="#60A5FA" />
    <circle cx="45" cy="70" r="4" fill="#60A5FA" />
    <circle cx="70" cy="70" r="4" fill="#60A5FA" />
    <path d="M 0,45 Q 45,0 90,45 Q 45,90 0,45" stroke="#93C5FD" stroke-width="2.5" />
    <path d="M 20,20 L 70,70 M 20,70 L 70,20" stroke="#60A5FA" stroke-width="1.5" />
    <path d="M 45,10 L 80,45 L 45,80 L 10,45 Z" stroke="#3B82F6" stroke-width="2" />
  </g>

  <!-- Bottom-Right Kolam -->
  <g transform="translate(1475, 305)" stroke="#60A5FA" stroke-width="2" fill="none">
    <circle cx="20" cy="20" r="4" fill="#60A5FA" />
    <circle cx="45" cy="20" r="4" fill="#60A5FA" />
    <circle cx="70" cy="20" r="4" fill="#60A5FA" />
    <circle cx="20" cy="45" r="4" fill="#60A5FA" />
    <circle cx="45" cy="45" r="4" fill="#60A5FA" />
    <circle cx="70" cy="45" r="4" fill="#60A5FA" />
    <circle cx="20" cy="70" r="4" fill="#60A5FA" />
    <circle cx="45" cy="70" r="4" fill="#60A5FA" />
    <circle cx="70" cy="70" r="4" fill="#60A5FA" />
    <path d="M 0,45 Q 45,0 90,45 Q 45,90 0,45" stroke="#93C5FD" stroke-width="2.5" />
    <path d="M 20,20 L 70,70 M 20,70 L 70,20" stroke="#60A5FA" stroke-width="1.5" />
    <path d="M 45,10 L 80,45 L 45,80 L 10,45 Z" stroke="#3B82F6" stroke-width="2" />
  </g>

  <!-- Top Left: HCIPAI mini logo -->
  <g transform="translate(35, 20) scale(0.24)">
    <rect x="65" y="40" width="60" height="230" rx="30" fill="#9333EA" />
    <circle cx="108" cy="72" r="9" fill="#FFFFFF" />
    <rect x="145" y="75" width="135" height="140" rx="4" fill="#2563EB" />
    <rect x="180" y="240" width="55" height="55" rx="4" fill="#2563EB" />
    <path d="M 125,235 C 190,235 220,195 220,150 C 220,105 180,85 145,85 C 105,85 85,120 85,165 C 85,215 125,245 160,245 C 195,245 205,220 205,190 C 205,160 185,145 165,145 C 145,145 140,160 140,175 C 140,195 150,205 165,205" stroke="#FFFFFF" stroke-width="15" stroke-linecap="round" fill="none" />
    <text x="250" y="400" font-family="'Plus Jakarta Sans', sans-serif" font-size="52" font-weight="800" fill="#374151" text-anchor="middle" letter-spacing="10">HCIPAI</text>
  </g>

  <!-- Top Right Institutional Accreditation Logos -->
  <g transform="translate(1200, 25)">
    <!-- Geethanjali icon -->
    <g transform="translate(0, 0) scale(0.3)">
      <circle cx="65" cy="65" r="55" fill="#0B478B" />
      <circle cx="65" cy="40" r="10" fill="#FFFFFF" />
      <path d="M 40,95 Q 65,60 65,50 Q 65,60 90,95" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" fill="none" />
      <line x1="65" y1="85" x2="110" y2="85" stroke="#0B478B" stroke-width="7" />
    </g>
    <!-- NBA Logo -->
    <g transform="translate(85, 2)">
      <rect x="0" y="0" width="90" height="40" rx="4" fill="#0284C7" />
      <text x="45" y="26" font-family="sans-serif" font-size="22" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">NBA</text>
      <text x="45" y="36" font-family="sans-serif" font-size="6.5" font-weight="700" fill="#E0F2FE" text-anchor="middle">NATIONAL BOARD</text>
      <text x="45" y="44" font-family="sans-serif" font-size="5.5" font-weight="600" fill="#64748B" text-anchor="middle">OF ACCREDITATION</text>
    </g>
    <!-- NAAC A+ Logo -->
    <g transform="translate(200, 2)">
      <text x="0" y="24" font-family="sans-serif" font-size="24" font-weight="900" fill="#0F172A" letter-spacing="1">NAAC</text>
      <rect x="75" y="2" width="46" height="26" rx="4" fill="#DC2626" />
      <text x="98" y="22" font-family="sans-serif" font-size="20" font-weight="900" fill="#FFFFFF" text-anchor="middle">A+</text>
      <text x="0" y="34" font-family="sans-serif" font-size="9" font-weight="700" fill="#1E293B">GRADE</text>
      <text x="0" y="45" font-family="sans-serif" font-size="10.5" font-weight="600" fill="#334155">Accredited University</text>
    </g>
  </g>

  <!-- Left Main Stack: 2027 and HCIPAI SYMPOSIUM -->
  <!-- Vertical 2 0 2 7 -->
  <g transform="translate(68, 140)">
    <text x="0" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="900" fill="#111827" stroke="#111827" stroke-width="1.5">2</text>
    <text x="0" y="45" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="900" fill="#111827" stroke="#111827" stroke-width="1.5">0</text>
    <text x="0" y="90" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="900" fill="#111827" stroke="#111827" stroke-width="1.5">2</text>
    <text x="0" y="135" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="900" fill="#111827" stroke="#111827" stroke-width="1.5">7</text>
  </g>

  <!-- Main Title Area -->
  <g transform="translate(125, 140)">
    <!-- HCIPAI hollow font -->
    <text x="0" y="70" font-family="'Plus Jakarta Sans', sans-serif" font-size="82" font-weight="900" fill="#FFFFFF" stroke="#4E324C" stroke-width="4.5" letter-spacing="4">HCIPAI</text>
    <text x="4" y="74" font-family="'Plus Jakarta Sans', sans-serif" font-size="82" font-weight="900" fill="none" stroke="#6A4766" stroke-width="1.5" letter-spacing="4" opacity="0.7">HCIPAI</text>

    <!-- MARCH 18th-19th -->
    <text x="0" y="112" font-family="'Plus Jakarta Sans', sans-serif" font-size="21" font-weight="800" fill="#4E324C" letter-spacing="1.5">MARCH</text>
    <text x="96" y="112" font-family="'Plus Jakarta Sans', sans-serif" font-size="19" font-weight="700" fill="#4E324C">18<tspan dy="-6" font-size="13">th</tspan><tspan dy="6"> – 19</tspan><tspan dy="-6" font-size="13">th</tspan></text>

    <!-- SYMPOSIUM with star in O -->
    <text x="105" y="172" font-family="'Playfair Display', serif" font-size="62" font-weight="700" fill="#111827" letter-spacing="7">SYMP<tspan fill="#6A4766">❖</tspan>SIUM</text>
  </g>

  <!-- Center-Right Editorial Tagline -->
  <g transform="translate(860, 205)">
    <text x="0" y="0" font-family="'Playfair Display', serif" font-size="40" font-weight="500" fill="#4E324C" letter-spacing="0.5">Hci For Interactive &amp; Immersive Experience</text>
    <text x="110" y="38" font-family="'Playfair Display', serif" font-style="italic" font-size="24" font-weight="400" fill="#334155" letter-spacing="0.5">One Experience. Many perspectives.</text>
    <text x="45" y="72" font-family="'Playfair Display', serif" font-size="20" font-weight="500" fill="#4E324C" letter-spacing="1">Panel discussions  ✦  Workshops  ✦  Interactive Zones</text>
  </g>

  <!-- Bottom Architectural Line Art (Hyderabad Heritage Skyline) -->
  <g transform="translate(360, 310)" stroke="#60A5FA" stroke-width="1.2" fill="none" opacity="0.65">
    <!-- Chowmahalla Palace arches on left -->
    <g transform="translate(0, 10)">
      <rect x="0" y="45" width="220" height="75" stroke="#93C5FD" stroke-width="1" />
      <!-- Archways -->
      <path d="M 15,120 V 85 A 12,12 0 0,1 39,85 V 120" />
      <path d="M 49,120 V 85 A 12,12 0 0,1 73,85 V 120" />
      <path d="M 83,120 V 85 A 12,12 0 0,1 107,85 V 120" />
      <path d="M 117,120 V 85 A 12,12 0 0,1 141,85 V 120" />
      <path d="M 151,120 V 85 A 12,12 0 0,1 175,85 V 120" />
      <path d="M 185,120 V 85 A 12,12 0 0,1 209,85 V 120" />
      <!-- Upper parapet and domes -->
      <line x1="-5" y1="45" x2="225" y2="45" stroke-width="1.5" />
      <path d="M 30,45 Q 55,20 80,45" />
      <path d="M 140,45 Q 165,20 190,45" />
      <circle cx="55" cy="18" r="3" fill="#60A5FA" />
      <circle cx="165" cy="18" r="3" fill="#60A5FA" />
    </g>

    <!-- Charminar in Center -->
    <g transform="translate(240, -45)">
      <!-- Central Gateway / Arch -->
      <rect x="35" y="110" width="130" height="90" />
      <!-- Grand central arch -->
      <path d="M 60,200 V 140 A 40,40 0 0,1 140,140 V 200" stroke-width="2" />
      <!-- Upper arcade galleries -->
      <rect x="45" y="80" width="110" height="30" />
      <line x1="45" y1="95" x2="155" y2="95" />
      <!-- Minaret 1 (Far Left) -->
      <rect x="18" y="25" width="22" height="175" />
      <path d="M 15,25 Q 29,2 43,25 Z" fill="#93C5FD" fill-opacity="0.3" stroke-width="1.5" />
      <circle cx="29" cy="0" r="3" fill="#60A5FA" />
      <!-- Minaret 2 (Inner Left) -->
      <rect x="42" y="45" width="18" height="155" />
      <!-- Minaret 3 (Inner Right) -->
      <rect x="140" y="45" width="18" height="155" />
      <!-- Minaret 4 (Far Right) -->
      <rect x="160" y="25" width="22" height="175" />
      <path d="M 157,25 Q 171,2 185,25 Z" fill="#93C5FD" fill-opacity="0.3" stroke-width="1.5" />
      <circle cx="171" cy="0" r="3" fill="#60A5FA" />
    </g>

    <!-- Monument with Central Grand Dome (High Court / Assembly) -->
    <g transform="translate(450, 0)">
      <rect x="20" y="65" width="230" height="85" />
      <!-- Dome in center -->
      <path d="M 90,65 Q 135,-5 180,65 Z" fill="#DBEAFE" fill-opacity="0.4" stroke-width="1.8" />
      <circle cx="135" cy="-8" r="4" fill="#60A5FA" />
      <!-- Decorative columns -->
      <line x1="35" y1="65" x2="35" y2="150" />
      <line x1="55" y1="65" x2="55" y2="150" />
      <line x1="75" y1="65" x2="75" y2="150" />
      <line x1="195" y1="65" x2="195" y2="150" />
      <line x1="215" y1="65" x2="215" y2="150" />
      <line x1="235" y1="65" x2="235" y2="150" />
      <!-- Arches -->
      <path d="M 95,150 V 105 A 15,15 0 0,1 125,105 V 150" />
      <path d="M 145,150 V 105 A 15,15 0 0,1 175,105 V 150" />
    </g>

    <!-- South Indian Temple Gopuram / Vimana (Birla Mandir / Yadadri style) -->
    <g transform="translate(700, 30)">
      <!-- Tier 1 -->
      <polygon points="30,120 15,120 25,90 95,90 105,120 90,120" />
      <!-- Tier 2 -->
      <polygon points="32,90 38,65 82,65 88,90" />
      <!-- Tier 3 -->
      <polygon points="43,65 48,45 72,45 77,65" />
      <!-- Kalash (Top Finial) -->
      <path d="M 50,45 Q 60,30 70,45 Z" fill="#93C5FD" fill-opacity="0.5" />
      <circle cx="60" cy="27" r="3" fill="#60A5FA" />
      <!-- Niches -->
      <rect x="52" y="98" width="16" height="22" rx="4" />
      <rect x="55" y="72" width="10" height="15" rx="3" />
    </g>
  </g>
</svg>`;

// Write SVGs
fs.writeFileSync(path.join(publicDir, 'BannerFinal.svg'), bannerSvg);
fs.writeFileSync(path.join(assetsDir, 'BannerFinal.svg'), bannerSvg);

fs.writeFileSync(path.join(publicDir, 'HCIPAI_logo.svg'), hcipaiLogoSvg);
fs.writeFileSync(path.join(assetsDir, 'HCIPAI_logo.svg'), hcipaiLogoSvg);

fs.writeFileSync(path.join(publicDir, 'geethanjali_logo.svg'), gcetLogoSvg);
fs.writeFileSync(path.join(assetsDir, 'geethanjali_logo.svg'), gcetLogoSvg);

console.log('SVGs generated successfully.');

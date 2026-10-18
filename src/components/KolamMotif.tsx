import React from 'react';

export const KolamCorner: React.FC<{ className?: string; flipX?: boolean }> = ({ className = '', flipX = false }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`w-20 h-20 pointer-events-none opacity-40 select-none ${flipX ? '-scale-x-100' : ''} ${className}`}
      fill="none" 
      stroke="currentColor"
    >
      <circle cx="20" cy="20" r="3.5" fill="currentColor" />
      <circle cx="45" cy="20" r="3.5" fill="currentColor" />
      <circle cx="70" cy="20" r="3.5" fill="currentColor" />
      <circle cx="20" cy="45" r="3.5" fill="currentColor" />
      <circle cx="45" cy="45" r="3.5" fill="currentColor" />
      <circle cx="70" cy="45" r="3.5" fill="currentColor" />
      <circle cx="20" cy="70" r="3.5" fill="currentColor" />
      <circle cx="45" cy="70" r="3.5" fill="currentColor" />
      <circle cx="70" cy="70" r="3.5" fill="currentColor" />
      <path d="M 0,45 Q 45,0 90,45 Q 45,90 0,45" strokeWidth="2" strokeDasharray="3 3" />
      <path d="M 45,10 L 80,45 L 45,80 L 10,45 Z" strokeWidth="1.5" />
      <path d="M 20,20 L 70,70 M 20,70 L 70,20" strokeWidth="1" strokeOpacity="0.6" />
    </svg>
  );
};

export const HyderabadSkyline: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg 
      viewBox="0 0 1200 180" 
      className={`w-full pointer-events-none select-none opacity-20 ${className}`}
      fill="none" 
      stroke="currentColor"
    >
      {/* Chowmahalla palace arcades */}
      <g transform="translate(60, 40)" strokeWidth="1.2">
        <rect x="0" y="30" width="220" height="90" strokeWidth="0.8" />
        <path d="M 15,120 V 80 A 12,12 0 0,1 39,80 V 120" />
        <path d="M 49,120 V 80 A 12,12 0 0,1 73,80 V 120" />
        <path d="M 83,120 V 80 A 12,12 0 0,1 107,80 V 120" />
        <path d="M 117,120 V 80 A 12,12 0 0,1 141,80 V 120" />
        <path d="M 151,120 V 80 A 12,12 0 0,1 175,80 V 120" />
        <path d="M 185,120 V 80 A 12,12 0 0,1 209,80 V 120" />
        <circle cx="55" cy="18" r="4" fill="currentColor" />
        <circle cx="165" cy="18" r="4" fill="currentColor" />
      </g>

      {/* Charminar Hyderabad Center */}
      <g transform="translate(380, 0)" strokeWidth="1.4">
        {/* Main Base Structure */}
        <rect x="50" y="70" width="140" height="90" />
        <path d="M 75,160 V 105 A 45,45 0 0,1 165,105 V 160" strokeWidth="2" />
        {/* Upper Balconies */}
        <rect x="58" y="45" width="124" height="25" />
        {/* Left Minarets */}
        <rect x="32" y="10" width="20" height="150" />
        <path d="M 30,10 Q 42,-12 54,10 Z" fill="currentColor" fillOpacity="0.2" />
        <circle cx="42" cy="-14" r="3" fill="currentColor" />
        {/* Right Minarets */}
        <rect x="188" y="10" width="20" height="150" />
        <path d="M 186,10 Q 198,-12 210,10 Z" fill="currentColor" fillOpacity="0.2" />
        <circle cx="198" cy="-14" r="3" fill="currentColor" />
      </g>

      {/* Grand Dome building */}
      <g transform="translate(680, 30)" strokeWidth="1.2">
        <rect x="20" y="45" width="240" height="85" />
        <path d="M 90,45 Q 140,-25 190,45 Z" fill="currentColor" fillOpacity="0.15" strokeWidth="1.8" />
        <circle cx="140" cy="-28" r="4" fill="currentColor" />
        <line x1="40" y1="45" x2="40" y2="130" />
        <line x1="65" y1="45" x2="65" y2="130" />
        <line x1="215" y1="45" x2="215" y2="130" />
        <line x1="240" y1="45" x2="240" y2="130" />
        <path d="M 95,130 V 90 A 15,15 0 0,1 125,90 V 130" />
        <path d="M 155,130 V 90 A 15,15 0 0,1 185,90 V 130" />
      </g>

      {/* South Indian Temple Gopuram */}
      <g transform="translate(980, 20)" strokeWidth="1.2">
        <polygon points="30,140 15,140 25,100 95,100 105,140 90,140" />
        <polygon points="32,100 38,70 82,70 88,100" />
        <polygon points="42,70 48,45 72,45 78,70" />
        <circle cx="60" cy="38" r="4" fill="currentColor" />
      </g>
    </svg>
  );
};

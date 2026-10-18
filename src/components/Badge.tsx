import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'plum' | 'blue' | 'purple' | 'slate' | 'warning' | 'proposed';
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'plum',
  className = '',
  size = 'md',
}) => {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-3 py-1 text-xs';
  
  const variantClasses = {
    plum: 'bg-[#f4edf3] text-[#51304e] border border-[#e6b9de]/60 font-semibold tracking-wider uppercase',
    blue: 'bg-[#e0f2fe] text-[#0369a1] border border-[#bae6fd] font-semibold tracking-wide',
    purple: 'bg-[#f3e8ff] text-[#6b21a8] border border-[#e9d5ff] font-semibold tracking-wide',
    slate: 'bg-[#f1f5f9] text-[#475569] border border-[#cbd5e1] font-medium',
    warning: 'bg-[#fffbeb] text-[#b45309] border border-[#fde68a] font-semibold',
    proposed: 'bg-[#fef2f2] text-[#b91c1c] border border-[#fecaca] font-bold tracking-wide uppercase',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full transition-colors ${sizeClasses} ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
};

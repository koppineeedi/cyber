import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hoverGlow = true
}) => {
  return (
    <div
      className={`relative rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.08] p-6 transition-all duration-300 ${
        hoverGlow
          ? 'hover:bg-white/[0.05] hover:border-cyan-500/30 hover:shadow-[0_0_25px_rgba(6,182,212,0.12)] hover:-translate-y-1'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

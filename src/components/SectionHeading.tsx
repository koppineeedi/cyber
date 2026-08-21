import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  centered = true
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}
    >
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium tracking-wider uppercase mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        {label}
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-100 tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-slate-400 max-w-2xl text-base md:text-lg mx-auto font-normal">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

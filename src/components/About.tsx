import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Lock, Cpu, BookOpen } from 'lucide-react';
import { ABOUT_DATA } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';

export const About: React.FC = () => {
  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-cyan-400" />;
      case 'Lock':
        return <Lock className="w-6 h-6 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-emerald-400" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-sky-400" />;
      default:
        return <ShieldAlert className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={ABOUT_DATA.sectionLabel}
          title={ABOUT_DATA.heading}
          subtitle="Combining analytical thinking, security concepts, and defensive tools to safeguard digital assets."
        />

        {/* Story Narrative Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0b1329]/80 to-slate-900/90 border border-white/[0.08] shadow-xl relative overflow-hidden text-left"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-600" />
          <div className="space-y-4 text-slate-300 text-base md:text-lg leading-relaxed font-normal">
            {ABOUT_DATA.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        {/* 4 Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {ABOUT_DATA.cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col justify-between p-6">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-4">
                    {getCardIcon(card.iconName)}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-slate-100 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

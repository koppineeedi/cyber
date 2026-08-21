import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles } from 'lucide-react';
import { CURRENTLY_LEARNING_DATA } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';

export const CurrentlyLearning: React.FC = () => {
  return (
    <section id="currently-learning" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="CONTINUOUS GROWTH"
          title="Currently Learning"
          subtitle="Actively exploring and deepening knowledge across key SOC operations and Blue Team domains."
        />

        <GlassCard className="p-6 md:p-8 max-w-4xl mx-auto text-left relative overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
              Currently Learning Topics
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
            {CURRENTLY_LEARNING_DATA.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-cyan-500/30 flex items-center gap-3 transition-colors group"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                <div>
                  <span className="text-xs font-mono text-slate-400 block uppercase text-[10px]">
                    IN PROGRESS
                  </span>
                  <span className="text-sm font-semibold font-heading text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {item}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center gap-2 text-slate-400 text-xs font-mono">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Clearly designated as self-directed learning & skill acquisition.</span>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

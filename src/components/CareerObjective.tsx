import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { CAREER_OBJECTIVE } from '../data/portfolio';
import { GlassCard } from './GlassCard';

export const CareerObjective: React.FC = () => {
  return (
    <section id="career-objective" className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className="p-6 md:p-8 max-w-4xl mx-auto text-left relative overflow-hidden bg-gradient-to-r from-[#0b1329] via-slate-900 to-[#0b1329] border-cyan-500/30">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                CAREER DIRECTION
              </span>
            </div>

            <h3 className="text-2xl font-bold font-heading text-slate-100 mb-3">
              {CAREER_OBJECTIVE.heading}
            </h3>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-normal">
              {CAREER_OBJECTIVE.text}
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

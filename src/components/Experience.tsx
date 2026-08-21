import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="PROFESSIONAL & SIMULATIONS"
          title="Experience & Training"
          subtitle="Cybersecurity internships and enterprise simulation programs in security operations and defensive response."
        />

        <div className="max-w-4xl mx-auto space-y-6 text-left">
          {EXPERIENCE_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase ${
                          item.badge === 'INTERNSHIP'
                            ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400'
                            : 'bg-cyan-500/15 border border-cyan-500/30 text-cyan-400'
                        }`}
                      >
                        {item.badge}
                      </span>

                      {item.duration && (
                        <div className="flex items-center gap-1 text-slate-400 text-xs font-mono">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          <span>{item.duration}</span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold font-heading text-slate-100">
                      {item.role}
                    </h3>
                    <div className="text-cyan-400 font-semibold text-sm flex items-center gap-1.5 mt-0.5">
                      <Briefcase className="w-4 h-4 text-cyan-400" />
                      <span>{item.organization}</span>
                    </div>
                  </div>
                </div>

                {/* Paragraph descriptions */}
                <div className="space-y-2 text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                  {item.description.map((desc, idx) => (
                    <p key={idx}>{desc}</p>
                  ))}
                </div>

                {/* Simulation focus areas (if present) */}
                {item.areas && (
                  <div className="pt-4 border-t border-white/[0.08]">
                    <span className="text-xs font-mono text-slate-400 uppercase block mb-2 font-semibold">
                      Key Training Areas:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.areas.map((area) => (
                        <span
                          key={area}
                          className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-300 font-mono text-xs flex items-center gap-1.5"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{area}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

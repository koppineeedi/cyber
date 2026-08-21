import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="ACADEMIC BACKGROUND"
          title="Education"
          subtitle="Formal academic foundations in Computer Science and specialized Cybersecurity discipline."
        />

        {/* Vertical Timeline Wrapper */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-slate-800 -translate-x-1/2 hidden md:block" />

          <div className="space-y-8">
            {EDUCATION_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline central node dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#060913] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)] z-10 hidden md:flex">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  </div>

                  {/* Content Glass Card Container */}
                  <div className="w-full md:w-[calc(50%-2.5rem)] text-left">
                    <GlassCard
                      className={`relative overflow-hidden ${
                        item.isCurrent
                          ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/[0.07] via-slate-900/90 to-blue-600/[0.05] shadow-[0_0_30px_rgba(6,182,212,0.15)] ring-1 ring-cyan-400/30'
                          : ''
                      }`}
                    >
                      {item.isCurrent && (
                        <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-l from-cyan-500 to-blue-600 text-slate-950 text-[11px] font-mono font-bold uppercase tracking-wider rounded-bl-xl shadow-md flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>CURRENT DEGREE</span>
                        </div>
                      )}

                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.1] text-cyan-400 font-mono text-xs font-semibold">
                          {item.shortName}
                        </span>
                        <div className="flex items-center gap-1 text-slate-400 text-xs font-mono">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.duration}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold font-heading text-slate-100 mb-1">
                        {item.degree}
                      </h3>

                      <p className="text-slate-300 text-sm font-medium mb-3 flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4 text-cyan-400" />
                        <span>{item.college}</span>
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/[0.08] mt-3">
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {item.location}
                        </span>

                        {/* Highlighted Score Badge */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold shadow-sm">
                          <Award className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{item.scoreDisplay}</span>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, FileText, Search, Terminal, Wrench } from 'lucide-react';
import { SECURITY_PRACTICE_DATA } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';

export const SecurityPractice: React.FC = () => {
  const getPracticeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-6 h-6 text-cyan-400" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-emerald-400" />;
      case 'Search':
        return <Search className="w-6 h-6 text-blue-400" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-purple-400" />;
      default:
        return <Wrench className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="security-practice" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="PRACTICAL EXPOSURE"
          title="Hands-on Security Practice"
          subtitle="Applied defensive security exercises, network protocol investigation, and SOC lab simulations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {SECURITY_PRACTICE_DATA.map((practice, index) => (
            <motion.div
              key={practice.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                      {getPracticeIcon(practice.iconName)}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                        LEARNING ACTIVITY
                      </span>
                      <h3 className="text-xl font-bold font-heading text-slate-100">
                        {practice.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {practice.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08]">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-500 uppercase mr-1">
                      Tools & Protocols:
                    </span>
                    {practice.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

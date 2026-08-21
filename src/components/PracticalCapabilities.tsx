import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Search, FileText, Lock, ShieldCheck } from 'lucide-react';
import { PRACTICAL_CAPABILITIES } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';

export const PracticalCapabilities: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-6 h-6 text-cyan-400" />;
      case 'Search':
        return <Search className="w-6 h-6 text-blue-400" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-emerald-400" />;
      case 'Lock':
        return <Lock className="w-6 h-6 text-purple-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-sky-400" />;
      default:
        return <Activity className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="capabilities" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="PRACTICAL CAPABILITIES"
          title="What I Can Do"
          subtitle="Hands-on learning, practical exposure, and security practice across defensive operational tasks."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {PRACTICAL_CAPABILITIES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <GlassCard className="h-full flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                      {getIcon(item.iconName)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                        PRACTICAL EXPOSURE
                      </span>
                      <h3 className="text-xl font-bold font-heading text-slate-100">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08]">
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs font-medium"
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

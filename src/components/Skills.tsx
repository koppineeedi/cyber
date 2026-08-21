import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Wrench,
  Network,
  ShieldCheck,
  Layout,
  Server,
  Terminal
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-blue-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-emerald-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-sky-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-teal-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-indigo-400" />;
      default:
        return <Terminal className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="TECHNICAL CAPABILITIES"
          title="Skills & Tooling"
          subtitle="Hands-on proficiency across defensive security tools, network protocols, programming languages, and software frameworks."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {SKILL_CATEGORIES.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col justify-between p-6">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/[0.08]">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <h3 className="text-sm font-mono font-bold tracking-wider text-slate-200 uppercase">
                      {category.title}
                    </h3>
                  </div>

                  {/* Technology Tags Badges (No fake bars) */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-cyan-500/15 border border-white/[0.08] hover:border-cyan-500/30 text-slate-300 hover:text-cyan-300 font-sans text-xs font-medium transition-all duration-200 hover:scale-105"
                      >
                        {skill}
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

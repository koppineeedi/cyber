import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Wrench,
  Network,
  ShieldCheck,
  Layout,
  Server,
  Search
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-blue-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-indigo-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-purple-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-sky-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="TECHNICAL SKILLS MATRIX"
          title="Skills & Technical Knowledge"
          subtitle="A categorized matrix of programming languages, security tools, networking concepts, cybersecurity domains, and development technologies."
        />

        {/* Quick Search Filter Bar */}
        <div className="max-w-md mx-auto mb-10 relative">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Wireshark, Python, Nmap, SIEM)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-cyan-500/50 text-slate-200 placeholder-slate-500 text-xs font-mono focus:outline-none transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {SKILL_CATEGORIES.map((category, index) => {
            const matchesQuery = category.skills.some((sk) =>
              sk.toLowerCase().includes(searchQuery.toLowerCase())
            );

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <GlassCard
                  className={`h-full flex flex-col justify-between p-6 transition-all ${
                    searchQuery && matchesQuery
                      ? 'border-cyan-400/50 shadow-lg shadow-cyan-500/10'
                      : ''
                  }`}
                >
                  <div>
                    {/* Category Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                        {getIcon(category.iconName)}
                      </div>
                      <h3 className="text-sm font-bold font-mono text-slate-200 tracking-wider">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skill Chips */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => {
                        const isMatch =
                          searchQuery &&
                          skill.toLowerCase().includes(searchQuery.toLowerCase());

                        return (
                          <span
                            key={skill}
                            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                              isMatch
                                ? 'bg-cyan-500 text-slate-950 font-bold scale-105 shadow-md shadow-cyan-500/30'
                                : 'bg-white/[0.03] hover:bg-cyan-500/15 border border-white/[0.08] hover:border-cyan-500/30 text-slate-300 hover:text-cyan-300'
                            }`}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

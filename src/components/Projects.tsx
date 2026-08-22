import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, ExternalLink, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolio';
import type { UpgradedProjectItem } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './SocialIcons';

const FILTER_TABS = [
  'All',
  'Cybersecurity',
  'SOC / Blue Team',
  'Networking',
  'AI Security',
  'Full Stack'
] as const;

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<UpgradedProjectItem | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Cybersecurity') return proj.categoryFilter === 'Cybersecurity';
    if (activeTab === 'SOC / Blue Team') return proj.category.includes('SOC') || proj.tags.includes('SIEM');
    if (activeTab === 'Networking') return proj.categoryFilter === 'Networking';
    if (activeTab === 'AI Security') return proj.categoryFilter === 'AI Security';
    if (activeTab === 'Full Stack') return proj.categoryFilter === 'Full Stack';
    return true;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="SELECTED WORK"
          title="Cybersecurity & Software Projects"
          subtitle="Practical projects exploring cybersecurity, security tooling, AI-assisted security, networking, and full-stack development."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 overflow-x-auto pb-2">
          {FILTER_TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 border border-white/[0.08]'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <GlassCard
                  className={`h-full flex flex-col justify-between p-0 overflow-hidden group transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] ${
                    project.isFeatured
                      ? 'border-cyan-400/40 bg-gradient-to-br from-cyan-500/[0.08] via-slate-900/95 to-blue-600/[0.05]'
                      : 'border-white/[0.08] hover:border-cyan-500/40'
                  }`}
                >
                  {/* Interactive Terminal Window Top Bar */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#040711] border-b border-white/[0.08] font-mono text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="text-slate-500 ml-2 truncate max-w-[180px]">
                        ~/projects/{project.id}.git
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-cyan-400">
                      <Terminal className="w-3 h-3" />
                      <span className="text-[10px] uppercase">{project.maturity}</span>
                    </div>
                  </div>

                  {/* Card Content Container */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      {/* Featured Badge */}
                      {project.isFeatured && (
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-mono text-[10px] font-bold uppercase tracking-wider mb-3.5 w-fit">
                          <Sparkles className="w-3 h-3 text-cyan-400" />
                          <span>FEATURED SECURITY PROJECT</span>
                        </div>
                      )}

                      {/* Category & Maturity Badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-medium">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold font-heading text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Security Relevance Callout */}
                      {project.securityRelevance && (
                        <div className="mb-4 p-2.5 rounded-xl bg-cyan-500/[0.04] border border-cyan-500/20 text-slate-300 text-xs font-mono flex items-start gap-2">
                          <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{project.securityRelevance}</span>
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-slate-400 font-mono text-[11px]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons Footer */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08] mt-auto">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-slate-300 hover:text-white transition-all text-xs font-semibold flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 hover:text-cyan-300 transition-all text-xs font-semibold flex items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
                      >
                        <Info className="w-4 h-4" />
                        <span>View Details</span>
                      </button>

                      {/* Live Demo button conditionally rendered */}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 transition-all text-xs font-semibold flex items-center gap-1"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal render */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

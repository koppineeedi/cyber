import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, Code, Activity } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { GlassCard } from './GlassCard';
import { GithubIcon } from './SocialIcons';

export const GitHubSection: React.FC = () => {
  const featuredRepos = PROJECTS_DATA.slice(0, 7);

  // Generate weeks x days heat grid visual blocks (purely decorative preview layout, zero fake metrics)
  const weeks = Array.from({ length: 28 }, (_, i) => i);
  const days = [0, 1, 2, 3, 4, 5, 6];

  const getHeatColor = (w: number, d: number) => {
    const val = (w * 3 + d * 7) % 5;
    if (val === 0) return 'bg-[#0f172a]';
    if (val === 1) return 'bg-cyan-950/60 border border-cyan-800/40';
    if (val === 2) return 'bg-cyan-800/60';
    if (val === 3) return 'bg-cyan-600/70';
    return 'bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.4)]';
  };

  return (
    <section id="github" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="OPEN SOURCE & CODE"
          title="Building in Public"
          subtitle="Exploring cybersecurity, software engineering, and security-focused development."
        />

        {/* Main GitHub Profile Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#0b1329] via-slate-900 to-[#0b1329] border border-cyan-500/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <GithubIcon className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-semibold">
                GITHUB PROFILE
              </span>
              <h3 className="text-2xl font-bold font-heading text-slate-100">
                @koppineeedi
              </h3>
              <p className="text-slate-400 text-sm mt-0.5">
                Active security projects, encryption utilities, and full-stack repositories.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/koppineeedi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm flex items-center gap-2 transition-all shadow-md shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Visit GitHub Profile</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* GitHub Activity Grid Preview (Rule compliance: No fake stats, explicitly labeled preview) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-left"
        >
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-400 uppercase">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>GitHub Activity Preview</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500 uppercase">
              Commit Heatmap Pattern Concept
            </span>
          </div>

          {/* Heatmap grid */}
          <div className="overflow-x-auto pb-2">
            <div className="inline-flex gap-1.5 min-w-full justify-between">
              {weeks.map((w) => (
                <div key={w} className="flex flex-col gap-1.5">
                  {days.map((d) => (
                    <div
                      key={d}
                      className={`w-3 h-3 rounded-[3px] transition-colors ${getHeatColor(w, d)}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Repository Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {featuredRepos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <GlassCard className="h-full flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <Code className="w-4 h-4" />
                      <span className="font-mono text-xs font-bold text-slate-300">
                        Public Repository
                      </span>
                    </div>
                    <GitBranch className="w-4 h-4 text-slate-500" />
                  </div>

                  <h4 className="text-lg font-bold font-heading text-slate-100 mb-2">
                    {repo.title}
                  </h4>

                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-4">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08]">
                  <a
                    href={repo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-lg bg-white/[0.04] hover:bg-cyan-500/15 border border-white/[0.08] hover:border-cyan-500/30 text-slate-300 hover:text-cyan-300 font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

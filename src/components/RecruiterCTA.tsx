import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send, ExternalLink, Briefcase } from 'lucide-react';
import { RECRUITER_CTA_DATA } from '../data/portfolio';
import { GlassCard } from './GlassCard';
import { LinkedinIcon } from './SocialIcons';

export const RecruiterCTA: React.FC = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="recruiter-cta" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className="p-8 md:p-12 text-center bg-gradient-to-r from-slate-900/90 via-[#0b1329]/95 to-slate-900/90 border-cyan-500/30 shadow-2xl relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
                <Briefcase className="w-4 h-4 text-cyan-400" />
                <span>OPEN TO OPPORTUNITIES</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100 tracking-tight">
                {RECRUITER_CTA_DATA.heading}
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                {RECRUITER_CTA_DATA.text}
              </p>

              {/* Target Focus Line */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                <span className="text-xs font-mono text-slate-500 uppercase mr-1">Target Focus:</span>
                {RECRUITER_CTA_DATA.focusTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => handleScroll('#projects')}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => handleScroll('#contact')}
                  className="px-6 py-3.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 font-semibold text-sm flex items-center gap-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Connect With Me</span>
                </button>

                <a
                  href={RECRUITER_CTA_DATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-slate-200 font-semibold text-sm flex items-center gap-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                  <span>View LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

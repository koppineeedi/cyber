import React, { useEffect } from 'react';
import { X, ExternalLink, ShieldCheck, Check, Code } from 'lucide-react';
import type { ProjectItem } from '../types';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0b1329] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white border border-white/[0.1] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold">
            {project.category}
          </span>
        </div>

        <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold font-heading text-slate-100 mb-3">
          {project.title}
        </h3>

        <p className="text-slate-300 text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Screenshot Placeholder Frame */}
        <div className="mb-6 rounded-xl bg-black/60 border border-white/[0.1] p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-3">
            <Code className="w-8 h-8 text-cyan-400" />
          </div>
          <span className="text-sm font-mono font-bold text-slate-200 uppercase tracking-wider">
            {project.title} — PROJECT PREVIEW
          </span>
          <span className="text-xs font-mono text-slate-500 mt-1">
            Replace with project screenshot
          </span>
        </div>

        {/* Security Relevance Panel (if present) */}
        {project.securityRelevance && (
          <div className="mb-6 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-slate-300 text-sm">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-400 uppercase mb-1">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>SECURITY & OPERATIONAL RELEVANCE</span>
            </div>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              {project.securityRelevance}
            </p>
          </div>
        )}

        {/* Key Features */}
        {project.keyFeatures && (
          <div className="mb-6">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
              Key Features
            </h4>
            <ul className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-slate-300 text-sm">
                  <span className="p-0.5 rounded bg-cyan-500/20 text-cyan-400 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Tags */}
        <div className="mb-8">
          <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/[0.1] text-slate-300 font-mono text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer Links */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.08]">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm flex items-center gap-2 transition-all shadow-md"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Source on GitHub</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-slate-200 font-semibold text-sm flex items-center gap-2 transition-all"
            >
              <ExternalLink className="w-4 h-4 text-cyan-400" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

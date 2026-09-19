import React, { useEffect } from 'react';
import { X, ExternalLink, ShieldCheck, Check, Code, Lock, Cpu, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
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
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0b1329] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl text-left"
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

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold">
            {project.category}
          </span>
          {project.testMetrics && (
            <span className="px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {project.testMetrics}
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold font-heading text-slate-100 mb-2">
          {project.title}
        </h3>

        {project.tagline && (
          <p className="text-cyan-400 font-mono text-sm font-semibold mb-4 italic">
            "{project.tagline}"
          </p>
        )}

        {/* Primary Description */}
        <p className="text-slate-300 text-base leading-relaxed mb-6">
          {project.fullDescription || project.description}
        </p>

        {/* Security & Operational Relevance */}
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

        {/* Extended Capabilities Section (for Crypta) */}
        {project.capabilities && (
          <div className="mb-6 space-y-4">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Lock className="w-4 h-4 text-cyan-400" />
              <span>Security Capabilities</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.capabilities.fileSecurity && (
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                  <span className="text-xs font-mono font-bold text-cyan-300 uppercase block mb-2.5">
                    FILE SECURITY & ENCRYPTION
                  </span>
                  <ul className="space-y-2">
                    {project.capabilities.fileSecurity.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.capabilities.passwordSecurity && (
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                  <span className="text-xs font-mono font-bold text-cyan-300 uppercase block mb-2.5">
                    PASSWORD SECURITY & ANALYZER
                  </span>
                  <ul className="space-y-2">
                    {project.capabilities.passwordSecurity.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Privacy Architecture Grid */}
        {project.privacyArchitecture && (
          <div className="mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Privacy & Architecture Guarantees</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.05]">
                <span className="text-slate-400 block text-[10px] uppercase">Password Analysis</span>
                <span className="text-emerald-400 font-bold">{project.privacyArchitecture.passwordAnalysis}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.05]">
                <span className="text-slate-400 block text-[10px] uppercase">File Encryption</span>
                <span className="text-emerald-400 font-bold">{project.privacyArchitecture.fileEncryption}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.05]">
                <span className="text-slate-400 block text-[10px] uppercase">Plaintext Storage</span>
                <span className="text-emerald-400 font-bold">{project.privacyArchitecture.plaintextStorage}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.05]">
                <span className="text-slate-400 block text-[10px] uppercase">Plaintext Upload</span>
                <span className="text-emerald-400 font-bold">{project.privacyArchitecture.plaintextUpload}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.05]">
                <span className="text-slate-400 block text-[10px] uppercase">Breach Lookup</span>
                <span className="text-emerald-400 font-bold">{project.privacyArchitecture.breachLookup}</span>
              </div>
            </div>
          </div>
        )}

        {/* Attack Resistance Modeling Section */}
        {project.attackResistance && (
          <div className="mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>{project.attackResistance.title}</span>
            </h4>
            <div className="space-y-1.5 mb-3 text-xs text-slate-300 font-mono">
              {project.attackResistance.models.map((m, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>{m}</span>
                </div>
              ))}
            </div>
            <div className="p-2.5 rounded-lg bg-cyan-500/[0.04] border border-cyan-500/20 text-[11px] text-slate-400 font-mono flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>{project.attackResistance.disclaimer}</span>
            </div>
          </div>
        )}

        {/* Security Engineering Highlights */}
        {project.securityEngineering && (
          <div className="mb-6">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
              Security Engineering Implementation
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
              {project.securityEngineering.map((eng, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-cyan-400 shrink-0">✔</span>
                  <span>{eng}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Features (Standard) */}
        {project.keyFeatures && (
          <div className="mb-6">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
              Key Capabilities & Features
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

        {/* Screenshots Placeholder Gallery */}
        {project.screenshots && (
          <div className="mb-6">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
              Interface & Screenshots Gallery
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {project.screenshots.map((screen, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-black/60 border border-white/[0.08] p-4 flex flex-col items-center justify-center text-center hover:border-cyan-500/40 transition-colors"
                >
                  <Code className="w-6 h-6 text-cyan-400 mb-2" />
                  <span className="text-xs font-mono font-bold text-slate-200 uppercase">
                    {screen.label}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 mt-1">
                    {screen.placeholderText}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Standard Placeholder Frame if no screenshots array */}
        {!project.screenshots && (
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
        )}

        {/* Tech Stack Tags */}
        <div className="mb-6">
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

        {/* Security Documentation Links */}
        {project.documentationLinks && (
          <div className="mb-8">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
              Security Documentation & Specifications
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.documentationLinks.map((doc, idx) => (
                <a
                  key={idx}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-cyan-500/15 border border-white/[0.08] hover:border-cyan-500/30 text-cyan-400 font-mono text-xs font-medium flex items-center gap-1.5 transition-all"
                >
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{doc.title}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              ))}
            </div>
          </div>
        )}

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

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Mail, Phone, MapPin, ShieldCheck, GraduationCap, Briefcase, ExternalLink, Code } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, EXPERIENCE_DATA, PROJECTS_DATA, SKILL_CATEGORIES } from '../data/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-title"
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0b1220] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto text-left"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#060913]/90">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <h2 id="resume-title" className="text-lg font-bold font-heading text-slate-100">
                Interactive Resume Preview
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.resumePath}
                download="Satya_Koppineedi_Resume.pdf"
                className="px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold flex items-center gap-1.5 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close resume preview"
                className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-slate-300 font-sans text-sm leading-relaxed">
            {/* Header info */}
            <div className="border-b border-white/[0.08] pb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-100 tracking-tight">
                {PERSONAL_INFO.fullName}
              </h1>
              <p className="text-cyan-400 font-mono text-sm font-semibold mt-1">
                {PERSONAL_INFO.professionalIdentity}
              </p>

              <div className="flex flex-wrap gap-4 mt-3 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  {PERSONAL_INFO.location}
                </span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  {PERSONAL_INFO.email}
                </a>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  {PERSONAL_INFO.phone}
                </span>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>PROFILE SUMMARY</span>
              </h3>
              <p className="text-slate-300 text-sm">
                Passionate Computer Science student specializing in Cybersecurity with a strong CGPA (8.96). Hands-on experience in defensive security, network packet analysis with Wireshark, security reconnaissance with Nmap, SOC log monitoring, web security, and building security tooling projects.
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>TECHNICAL SKILLS MATRIX</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.id} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-[11px] font-mono text-slate-400 block font-bold mb-1.5">
                      {cat.title}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {cat.skills.map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 text-[11px] font-mono">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>KEY CYBERSECURITY PROJECTS</span>
              </h3>
              <div className="space-y-3">
                {PROJECTS_DATA.slice(0, 3).map((proj) => (
                  <div key={proj.id} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-100 font-heading">{proj.title}</h4>
                      <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline text-xs font-mono flex items-center gap-1">
                        <span>GitHub</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">{proj.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {proj.tags.map((t) => (
                        <span key={t} className="px-1.5 py-0.5 rounded bg-white/[0.04] text-slate-400 text-[10px] font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>PRACTICAL EXPERIENCE & SIMULATIONS</span>
              </h3>
              <div className="space-y-3">
                {EXPERIENCE_DATA.map((exp) => (
                  <div key={exp.id} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-100">{exp.role} — {exp.organization}</span>
                      {exp.duration && <span className="text-xs font-mono text-cyan-400">{exp.duration}</span>}
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-300 mt-1 space-y-1">
                      {exp.description.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>ACADEMIC FOUNDATION</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.id} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-xs font-mono text-cyan-400 block font-bold">{edu.scoreDisplay}</span>
                    <span className="font-bold text-slate-100 text-xs block mt-0.5">{edu.degree}</span>
                    <span className="text-[11px] text-slate-400 block">{edu.college}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="p-4 border-t border-white/[0.08] bg-[#060913] flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 font-mono text-xs font-semibold transition-all"
            >
              Close Preview
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

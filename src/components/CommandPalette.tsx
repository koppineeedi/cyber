import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Shield, Code } from 'lucide-react';
import { PROJECTS_DATA, SKILL_CATEGORIES } from '../data/portfolio';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectProject
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredSections = [
    { title: 'Home', href: '#home' },
    { title: 'About Satya', href: '#about' },
    { title: 'What I Can Do (Capabilities)', href: '#capabilities' },
    { title: 'Technical Skills Matrix', href: '#skills' },
    { title: 'Selected Work & Projects', href: '#projects' },
    { title: 'Hands-on Security Practice', href: '#security-practice' },
    { title: 'Experience & Internships', href: '#experience' },
    { title: 'Education Background', href: '#education' },
    { title: 'Verified Credentials', href: '#certifications' },
    { title: 'Contact Satya', href: '#contact' }
  ].filter((s) => s.title.toLowerCase().includes(query.toLowerCase()));

  const filteredProjects = PROJECTS_DATA.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const allSkills = SKILL_CATEGORIES.flatMap((c) => c.skills);
  const filteredSkills = Array.from(new Set(allSkills)).filter((s) =>
    s.toLowerCase().includes(query.toLowerCase())
  );

  const handleNavigate = (href: string) => {
    onClose();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Command Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-[#0b1220] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 text-left"
        >
          {/* Search Input */}
          <div className="flex items-center px-4 py-3.5 border-b border-white/[0.08] bg-[#060913]">
            <Search className="w-5 h-5 text-cyan-400 mr-3 shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search skills, projects, tools, or sections... (Press ESC to close)"
              className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm focus:outline-none font-sans"
            />
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-md text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4 text-xs font-mono">
            {/* Sections */}
            {filteredSections.length > 0 && (
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block mb-2 px-2">
                  SECTIONS & NAVIGATION
                </span>
                <div className="space-y-1">
                  {filteredSections.map((sec) => (
                    <button
                      key={sec.href}
                      type="button"
                      onClick={() => handleNavigate(sec.href)}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-cyan-500/15 border border-white/[0.05] text-slate-300 hover:text-cyan-300 transition-all text-left"
                    >
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-cyan-400" />
                        <span className="font-semibold text-sm font-sans">{sec.title}</span>
                      </div>
                      <span className="text-[10px] text-cyan-400">Jump ➔</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Projects */}
            {filteredProjects.length > 0 && (
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block mb-2 px-2">
                  CYBERSECURITY PROJECTS ({filteredProjects.length})
                </span>
                <div className="space-y-1">
                  {filteredProjects.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => {
                        handleNavigate('#projects');
                        if (onSelectProject) onSelectProject(p.id);
                      }}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-cyan-500/15 border border-white/[0.05] text-slate-300 hover:text-cyan-300 transition-all text-left"
                    >
                      <div className="flex items-center gap-2">
                        <Code className="w-4 h-4 text-cyan-400" />
                        <span className="font-semibold text-sm font-sans">{p.title}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400">
                          {p.category}
                        </span>
                      </div>
                      <span className="text-[10px] text-cyan-400">View ➔</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Skills */}
            {filteredSkills.length > 0 && (
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block mb-2 px-2">
                  SKILLS & TOOLS MATCHES
                </span>
                <div className="flex flex-wrap gap-1.5 p-2">
                  {filteredSkills.map((sk) => (
                    <button
                      key={sk}
                      type="button"
                      onClick={() => handleNavigate('#skills')}
                      className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/20 transition-colors"
                    >
                      {sk}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

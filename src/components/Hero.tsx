import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Briefcase,
  ArrowRight,
  Send,
  Mail,
  Terminal,
  FileText
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolio';
import { HeroVisual } from './HeroVisual';
import { HeroSnapshot } from './HeroSnapshot';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  const [hasResume, setHasResume] = useState(false);

  useEffect(() => {
    // Check if resume.pdf exists in public/
    fetch(PERSONAL_INFO.resumePath, { method: 'HEAD' })
      .then((res) => {
        if (res.ok) {
          setHasResume(true);
        } else {
          setHasResume(false);
        }
      })
      .catch(() => setHasResume(false));
  }, []);

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <GithubIcon className="w-5 h-5" />;
      case 'Linkedin':
        return <LinkedinIcon className="w-5 h-5" />;
      case 'Mail':
        return <Mail className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      {/* Background radial glow & grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase">
              <Terminal className="w-3.5 h-3.5" />
              {PERSONAL_INFO.heroEyebrow}
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-100 tracking-tight leading-tight">
                {PERSONAL_INFO.heroHeading}
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400">
                {PERSONAL_INFO.heroTitle}
              </h2>
            </div>

            {/* Paragraph Descriptions */}
            <div className="space-y-3 text-slate-300 text-base md:text-lg font-normal leading-relaxed max-w-2xl">
              <p>{PERSONAL_INFO.heroDescriptions[0]}</p>
              <p className="text-slate-400 text-sm md:text-base">{PERSONAL_INFO.heroDescriptions[1]}</p>
            </div>

            {/* Metadata Pills: Location & Availability */}
            <div className="flex flex-wrap gap-3 pt-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-300 text-xs font-medium">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
                <Briefcase className="w-4 h-4 text-emerald-400" />
                <span>{PERSONAL_INFO.availability}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => handleScroll('#projects')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
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
                <span>Let's Connect</span>
              </button>

              {/* Conditional Download Resume Button */}
              {hasResume && (
                <a
                  href={PERSONAL_INFO.resumePath}
                  download="Satya_Koppineedi_Resume.pdf"
                  className="px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-slate-200 font-semibold text-sm flex items-center gap-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>Download Resume</span>
                </a>
              )}
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mr-2">
                Connect:
              </span>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-cyan-500/15 border border-white/[0.08] hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  {getSocialIcon(link.iconName)}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* Integrated Profile Snapshot Card */}
        <HeroSnapshot />
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowUp, Mail, Shield } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolio';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <GithubIcon className="w-4 h-4" />;
      case 'Linkedin':
        return <LinkedinIcon className="w-4 h-4" />;
      case 'Mail':
        return <Mail className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#060913] py-12 relative z-10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span className="font-heading font-extrabold text-lg tracking-wider text-slate-100">
                SATYA KOPPINEEDI
              </span>
            </div>
            <p className="text-cyan-400 font-mono text-xs font-medium tracking-wide">
              "{PERSONAL_INFO.tagline}"
            </p>
            <p className="text-slate-500 text-xs font-sans">
              © 2026 Satya Koppineedi • Cyber Security Portfolio
            </p>
          </div>

          {/* Social Links & Back-to-Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-cyan-500/15 border border-white/[0.08] hover:border-cyan-500/30 text-slate-400 hover:text-cyan-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  {getSocialIcon(link.iconName)}
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 hover:text-cyan-300 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

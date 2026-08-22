import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, ChevronRight, Search, FileText } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Credentials', href: '#certifications' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  onOpenResumeModal?: () => void;
  onOpenCommandPalette?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal, onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060913]/90 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-xl shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 text-slate-100 font-heading font-bold text-xl tracking-wider group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg px-2 py-1"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#060913] rounded-[6px] flex items-center justify-center">
                <Shield className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <span className="text-white tracking-widest text-lg font-extrabold group-hover:text-cyan-400 transition-colors">
              SATYA
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    isActive
                      ? 'text-cyan-400 font-semibold bg-cyan-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Quick Search Ctrl+K Button */}
            <button
              type="button"
              onClick={onOpenCommandPalette}
              aria-label="Quick Search"
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-cyan-500/15 border border-white/[0.08] hover:border-cyan-500/30 text-slate-300 hover:text-cyan-300 text-xs font-mono transition-all flex items-center gap-1.5"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden md:inline font-mono">Ctrl+K</span>
            </button>

            {/* Resume Preview Trigger */}
            <button
              type="button"
              onClick={onOpenResumeModal}
              className="px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-semibold flex items-center gap-1.5 transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenCommandPalette}
              className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.1] text-slate-300 hover:text-white"
              aria-label="Open search palette"
            >
              <Search className="w-5 h-5 text-cyan-400" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.1] text-slate-300 hover:text-white hover:bg-white/[0.1] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#060913]/95 backdrop-blur-xl border-b border-white/[0.1] p-5 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-400 font-semibold border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-600'}`} />
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-white/[0.08] flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenResumeModal) onOpenResumeModal();
                }}
                className="flex-1 py-2 px-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume Preview</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

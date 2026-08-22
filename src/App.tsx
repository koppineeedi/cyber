import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SecurityFocus } from './components/SecurityFocus';
import { About } from './components/About';
import { PracticalCapabilities } from './components/PracticalCapabilities';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { SecurityPractice } from './components/SecurityPractice';
import { CurrentlyLearning } from './components/CurrentlyLearning';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { CareerObjective } from './components/CareerObjective';
import { Certifications } from './components/Certifications';
import { GitHubSection } from './components/GitHubSection';
import { RecruiterCTA } from './components/RecruiterCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CommandPalette } from './components/CommandPalette';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060913] text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans relative overflow-x-hidden">
      {/* Sticky Navigation */}
      <Navbar
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        />
        <SecurityFocus />
        <About />
        <PracticalCapabilities />
        <Skills />
        <Projects />
        <SecurityPractice />
        <CurrentlyLearning />
        <Experience />
        <Education />
        <CareerObjective />
        <Certifications />
        <GitHubSection />
        <RecruiterCTA />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Global Interactive Modals */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />
    </div>
  );
}

export default App;

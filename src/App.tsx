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

export function App() {
  return (
    <div className="min-h-screen bg-[#060913] text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans relative overflow-x-hidden">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
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
    </div>
  );
}

export default App;

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Trust from '@/components/Trust';
import ProjectSummary from '@/components/ProjectSummary';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LeadModal from '@/components/LeadModal';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Trust />
      <About />
      <Services />
      <Stats />
      <ProjectSummary />
      <Contact />
      <Footer />
      
      {/* Automatic Lead Capture */}
      <LeadModal />
    </main>
  );
}

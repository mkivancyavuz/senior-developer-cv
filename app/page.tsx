import HeroSection from '@/components/HeroSection';
import MarqueeSection from '@/components/MarqueeSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ToolsSection from '@/components/ToolsSection';
import TransitionSection from '@/components/TransitionSection';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ background: 'var(--bg-main)', overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ToolsSection />
      <TransitionSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}

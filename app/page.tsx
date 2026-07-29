import HeroSection from '@/components/HeroSection';
import MarqueeSection from '@/components/MarqueeSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ToolsSection from '@/components/ToolsSection';
import TransitionSection from '@/components/TransitionSection';
import ProjectsSection from '@/components/ProjectsSection';

export default function Home() {
  return (
    <main style={{ background: '#0C0C0C', overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ToolsSection />
      <TransitionSection />
      <ProjectsSection />
    </main>
  );
}

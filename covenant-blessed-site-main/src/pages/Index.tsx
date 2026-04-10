import HeroSection from '@/components/wedding/HeroSection';
import OurStorySection from '@/components/wedding/OurStorySection';
import ScriptureSection from '@/components/wedding/ScriptureSection';
import EventDetailsSection from '@/components/wedding/EventDetailsSection';
import GallerySection from '@/components/wedding/GallerySection';
import RSVPSection from '@/components/wedding/RSVPSection';
import CountdownSection from '@/components/wedding/CountdownSection';
import FooterSection from '@/components/wedding/FooterSection';

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <OurStorySection />
      <ScriptureSection />
      <EventDetailsSection />
      <GallerySection />
      <CountdownSection />
      <RSVPSection />
      <FooterSection />
    </main>
  );
};

export default Index;

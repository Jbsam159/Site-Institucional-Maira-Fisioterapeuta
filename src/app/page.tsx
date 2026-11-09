import { WhatsAppButton } from '@/components/layout/whatsapp-button';
import { HeroSection } from '@/components/sections/hero-section';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-brand-background p-8">
        
        <HeroSection/>

      </main>

      <WhatsAppButton />
    </>
  );
}
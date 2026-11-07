
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { WhatsAppButton } from '@/components/layout/whatsapp-button';

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-brand-background p-8">
        <h1 className="font-heading text-5xl font-semibold text-brand-rose">
          Maira Oliveira
        </h1>

        <p className="font-sans text-lg text-brand-rose">
          Fisioterapia • Movimento • Bem-estar
        </p>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

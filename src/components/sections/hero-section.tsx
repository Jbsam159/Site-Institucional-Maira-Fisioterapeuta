import Image from 'next/image';

import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button-link';

import { WHATSAPP_URL } from '@/constants/contact';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="bg-brand-background py-16 md:py-24"
    >
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Apresentação */}
          <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">

            <span className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-brand-rose">
              Fisioterapia • Movimento • Bem-estar
            </span>

            <h1 className="max-w-xl font-heading text-4xl font-semibold leading-tight text-brand-rose sm:text-5xl lg:text-6xl">
              Movimento, saúde e qualidade de vida.
            </h1>

            <p className="max-w-lg font-sans text-base leading-relaxed text-brand-rose/80 md:text-lg">
              Um cuidado individualizado, com atenção às suas
              necessidades e objetivos, para promover mais saúde
              e bem-estar.
            </p>

            <ButtonLink
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              Agende sua consulta
            </ButtonLink>

          </div>

          {/* Fotografia */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem]">
            <Image
              src="/images/maira_1.jpeg"
              alt="Maira Oliveira, fisioterapeuta"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
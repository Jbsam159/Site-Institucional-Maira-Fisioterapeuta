
import Image from 'next/image';

import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button-link';

import { WHATSAPP_URL } from '@/constants/contact';

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="bg-brand-light/30 py-16 md:py-24"
    >
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">

          {/* Fotografia */}
          <div className="relative mx-auto aspect-[3/4] w-full max-w-lg overflow-hidden rounded-[2rem]">
            <Image
              src="/images/maira-trabalhando-1.jpeg"
              alt="Maíra Oliveira, fisioterapeuta"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Apresentação */}
          <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">

            <span className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-brand-rose">
              Sobre mim
            </span>

            <h2 className="font-heading text-4xl font-semibold leading-tight text-brand-rose sm:text-5xl">
              Um cuidado pensado para você.
            </h2>

            <div className="flex flex-col gap-4 font-sans text-base leading-relaxed text-brand-rose/80 md:text-lg">
              <p>
                Sou Maíra Oliveira, fisioterapeuta em Brasília, e acredito que
                cada pessoa merece um cuidado individualizado,
                respeitando suas necessidades, limitações e objetivos.
              </p>

              <p>
                Meu trabalho é voltado à promoção da saúde,
                recuperação funcional e qualidade de vida,
                utilizando diferentes recursos terapêuticos para
                proporcionar um atendimento cuidadoso e humanizado.
              </p>

              <p>
                Atuo com técnicas como Terapia Manual, Ventosaterapia,
                Liberação Miofascial e Eletroterapia, além de atender
                diferentes necessidades nas áreas de Ortopedia,
                Pré e Pós-operatório, Geriatria, ATM e DTM e Hidroterapia.
              </p>

              <p>
                Meu objetivo é ajudar você a recuperar movimentos,
                aliviar desconfortos e conquistar mais qualidade
                de vida por meio da fisioterapia.
              </p>
            </div>

            {/* Registro profissional */}
            <p className="w-fit rounded-full bg-brand-nude/60 px-5 py-2 font-sans text-sm font-medium text-brand-rose">
              CREFITO-11: 421293-F
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
        </div>
      </Container>
    </section>
  );
}

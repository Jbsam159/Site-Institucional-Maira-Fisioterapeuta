
import {
  HeartHandshake,
  UserRound,
  Activity,
  HeartPulse,
} from 'lucide-react';

import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';

const DIFFERENTIALS = [
  {
    title: 'Cuidado humanizado',
    description:
      'Um atendimento acolhedor, com atenção às necessidades de cada pessoa.',
    icon: HeartHandshake,
  },
  {
    title: 'Atenção individualizada',
    description:
      'Respeito às particularidades, limitações e objetivos de cada paciente.',
    icon: UserRound,
  },
  {
    title: 'Cuidado com o movimento',
    description:
      'Foco na funcionalidade, mobilidade e qualidade de vida.',
    icon: Activity,
  },
  {
    title: 'Bem-estar e saúde',
    description:
      'Um olhar atento para o cuidado e a promoção da saúde.',
    icon: HeartPulse,
  },
];

export function DifferentialsSection() {
  return (
    <section
      id="diferenciais"
      className="bg-brand-light/30 py-16 md:py-24"
    >
      <Container>
        <div className="flex flex-col gap-12">

          {/* Título da seção */}
          <SectionTitle
            eyebrow="Nossos diferenciais"
            title="Mais que cuidar, é acolher você."
            description="Cada pessoa é única. Por isso, valorizamos um cuidado atento, respeitoso e individualizado."
          />

          {/* Cards de diferenciais */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DIFFERENTIALS.map((differential) => {
              const Icon = differential.icon;

              return (
                <article
                  key={differential.title}
                  className="
                    group flex flex-col items-center gap-5
                    rounded-2xl border border-brand-light
                    bg-brand-background p-7 text-center
                    shadow-sm transition-all duration-300
                    hover:-translate-y-1 hover:shadow-lg
                  "
                >
                  {/* Ícone */}
                  <div className="
                    flex size-16 items-center justify-center
                    rounded-full bg-brand-pink/40
                    transition-colors duration-300
                    group-hover:bg-brand-pink
                  ">
                    <Icon
                      size={30}
                      strokeWidth={1.7}
                      className="text-brand-rose"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Conteúdo */}
                  <div className="flex flex-col gap-3">
                    <h3 className="font-heading text-2xl font-semibold text-brand-rose">
                      {differential.title}
                    </h3>

                    <p className="font-sans text-sm leading-relaxed text-brand-rose/80">
                      {differential.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}

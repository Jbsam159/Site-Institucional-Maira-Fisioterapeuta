
import {
  HandHeart,
  Droplets,
  Activity,
  Zap,
} from 'lucide-react';


import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button-link';
import { SectionTitle } from '@/components/ui/section-title';

import { WHATSAPP_URL } from '@/constants/contact';

const SERVICES = [
  {
    title: 'Terapia Manual',
    description:
      'Técnicas manuais utilizadas no cuidado, alívio de desconfortos e recuperação funcional.',
    icon: HandHeart,
  },
  {
    title: 'Ventosaterapia',
    description:
      'Recurso terapêutico que utiliza ventosas como parte do tratamento fisioterapêutico.',
    icon: Droplets,
  },
  {
    title: 'Liberação Miofascial',
    description:
      'Técnica voltada ao cuidado da fáscia e à melhora da mobilidade dos tecidos.',
    icon: Activity,
  },
  {
    title: 'Eletroterapia',
    description:
      'Utilização de recursos elétricos como auxílio nos tratamentos fisioterapêuticos.',
    icon: Zap,
  },
];

const TREATMENT_AREAS = [
  'Ortopedia',
  'Pré e Pós-operatório',
  'Geriatria',
  'ATM e DTM',
  'Hidroterapia',
];

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="bg-brand-background py-16 md:py-24"
    >
      <Container>
        <div className="flex flex-col gap-12">

          {/* Título da seção */}
          <SectionTitle
            eyebrow="Nossos serviços"
            title="Cuidado e atenção em cada movimento."
            description="Conheça os recursos terapêuticos utilizados nos atendimentos e as diferentes áreas de atuação."
          />

          {/* Cards de serviços */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group flex flex-col gap-5 rounded-2xl border border-brand-light bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Ícone */}
                  <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-brand-light/40 transition-colors duration-300 group-hover:bg-brand-light/70">
                    <div className="flex size-24 items-center justify-center rounded-full border border-brand-rose/15 bg-brand-background text-brand-rose transition-all duration-300 group-hover:scale-110 group-hover:border-brand-rose/30">
                      <Icon
                        size={44}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="flex flex-1 flex-col gap-3">
                    <h3 className="font-heading text-2xl font-semibold text-brand-rose">
                      {service.title}
                    </h3>

                    <p className="font-sans text-sm leading-relaxed text-brand-rose/80">
                      {service.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Áreas de atuação */}
          <div className="rounded-3xl bg-brand-light/40 px-6 py-10 md:px-10">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="flex flex-col gap-3">
                <span className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-brand-rose">
                  Áreas de atuação
                </span>

                <h3 className="font-heading text-3xl font-semibold text-brand-rose md:text-4xl">
                  Cuidado em diferentes fases da vida.
                </h3>

                <p className="max-w-2xl font-sans text-base leading-relaxed text-brand-rose/80">
                  Atendimento voltado a diferentes necessidades,
                  respeitando as particularidades de cada pessoa.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {TREATMENT_AREAS.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-brand-rose/20 bg-brand-background px-5 py-3 font-sans text-sm font-medium text-brand-rose"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Chamada para agendamento */}
          <div className="flex justify-center">
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


import Image from 'next/image';

import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button-link';
import { SectionTitle } from '@/components/ui/section-title';

import { WHATSAPP_URL } from '@/constants/contact';

const SERVICES = [
  {
    title: 'Terapia Manual',
    description:
      'Técnicas manuais utilizadas no cuidado, alívio de desconfortos e recuperação funcional.',
    image: '/images/servicos/maira-trabalhando-1.webp',
  },
  {
    title: 'Ventosaterapia',
    description:
      'Recurso terapêutico que utiliza ventosas como parte do tratamento fisioterapêutico.',
    image: '/images/servicos/maira-trabalhando-1.webp',
  },
  {
    title: 'Liberação Miofascial',
    description:
      'Técnica voltada ao cuidado da fáscia e à melhora da mobilidade dos tecidos.',
    image: '/images/servicos/maira-trabalhando-1.webp',
  },
  {
    title: 'Eletroterapia',
    description:
      'Utilização de recursos elétricos como auxílio nos tratamentos fisioterapêuticos.',
    image: '/images/servicos/maira-trabalhando-1.webp',
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
            {SERVICES.map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-2xl border border-brand-light bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Fotografia */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`Atendimento de ${service.title}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Conteúdo */}
                <div className="flex flex-col gap-3 p-5">
                  <h3 className="font-heading text-2xl font-semibold text-brand-rose">
                    {service.title}
                  </h3>

                  <p className="font-sans text-sm leading-relaxed text-brand-rose/80">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
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

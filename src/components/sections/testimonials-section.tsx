
import { Quote } from 'lucide-react';

import { Container } from '@/components/ui/container';
import { SectionTitle } from '@/components/ui/section-title';

// Depoimentos provisórios.
// Os textos serão substituídos pelos relatos reais posteriormente.
const TESTIMONIALS = [
  {
    name: 'João Victor',
    relationship: 'Relato pessoal',
    text: 'A Maíra é uma fisioterapeuta muito dedicada e atenciosa, sempre prezando pela qualidade do atendimento e seu bem estar, se você está vendo esse depoimento, recomendo totalmente o serviço.',
  },
  {
    name: 'Maristela Batista',
    relationship: 'Relato familiar',
    text: 'O trabalho da Maíra demonstra muita dedicação e responsabilidade. Ela realiza seus atendimentos com atenção e carinho, sempre buscando oferecer o melhor para cada pessoa. Tenho muito orgulho de acompanhar sua trajetória profissional.',
  },
  {
    name: 'Depoimento 3',
    relationship: 'Osmar David',
    text: 'A Maíra tem um jeito muito especial de cuidar das pessoas. É atenciosa, carinhosa e transmite confiança durante o atendimento. Seu cuidado e dedicação fazem toda a diferença.',
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="bg-brand-background py-16 md:py-24"
    >
      <Container>
        <div className="flex flex-col gap-12">

          {/* Título da seção */}
          <SectionTitle
            eyebrow="Depoimentos"
            title="Histórias de cuidado e confiança."
            description="Conheça um pouco das experiências de quem já teve contato com o nosso trabalho."
          />

          {/* Cards de depoimentos */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <article
                key={testimonial.name}
                className="
                  flex flex-col gap-6
                  rounded-2xl border border-brand-light
                  bg-white p-7 shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg
                "
              >
                {/* Ícone de citação */}
                <div className="
                  flex size-12 items-center justify-center
                  rounded-full bg-brand-pink/40
                ">
                  <Quote
                    size={24}
                    strokeWidth={1.8}
                    className="text-brand-rose"
                    aria-hidden="true"
                  />
                </div>

                {/* Texto do depoimento */}
                <p className="
                  flex-1 font-sans text-base
                  leading-relaxed text-brand-rose/80
                ">
                  {testimonial.text}
                </p>

                {/* Identificação */}
                <div className="
                  flex flex-col gap-1
                  border-t border-brand-light pt-5
                ">
                  <h3 className="
                    font-heading text-xl
                    font-semibold text-brand-rose
                  ">
                    {testimonial.name}
                  </h3>

                  <span className="
                    font-sans text-sm text-brand-rose/60
                  ">
                    {testimonial.relationship}
                  </span>
                </div>
              </article>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}

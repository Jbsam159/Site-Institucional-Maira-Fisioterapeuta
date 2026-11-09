
import {
  MessageCircle,
  House,
} from 'lucide-react';

import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button-link';

import {
  WHATSAPP_URL,
  INSTAGRAM_URL,
} from '@/constants/contact';

export function ContactSection() {
  return (
    <section
      id="contato"
      className="bg-brand-light/30 py-16 md:py-24"
    >
      <Container>
        <div className="flex flex-col gap-12">

          {/* Chamada principal */}
          <div className="
            flex flex-col items-center gap-6
            rounded-3xl bg-brand-rose
            px-6 py-12 text-center
            md:px-12 md:py-16
          ">
            <span className="
              font-sans text-sm font-semibold
              uppercase tracking-[0.2em]
              text-brand-pink
            ">
              Entre em contato
            </span>

            <h2 className="
              max-w-2xl font-heading text-4xl
              font-semibold leading-tight
              text-brand-background md:text-5xl
            ">
              Seu cuidado começa com um primeiro contato.
            </h2>

            <p className="
              max-w-xl font-sans text-base
              leading-relaxed text-brand-background/80
              md:text-lg
            ">
              Leve o cuidado e a atenção da fisioterapia até você.
              A Maíra realiza atendimentos domiciliares,
              proporcionando um acompanhamento individualizado
              e adequado às suas necessidades.
            </p>

            <ButtonLink
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Agende seu atendimento
            </ButtonLink>
          </div>

          {/* Informações de contato */}
          <div className="
            grid grid-cols-1 gap-6
            md:grid-cols-2
          ">

            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex items-center gap-5
                rounded-2xl border border-brand-light
                bg-brand-background p-6 shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg
              "
            >
              <div className="
                flex size-14 shrink-0 items-center
                justify-center rounded-full
                bg-brand-pink/40
              ">
                <MessageCircle
                  size={27}
                  className="text-brand-rose"
                  aria-hidden="true"
                />
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="
                  font-heading text-2xl
                  font-semibold text-brand-rose
                ">
                  WhatsApp
                </h3>

                <p className="
                  font-sans text-sm
                  text-brand-rose/70
                ">
                  Tire suas dúvidas e agende seu atendimento.
                </p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex items-center gap-5
                rounded-2xl border border-brand-light
                bg-brand-background p-6 shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg
              "
            >
              <div className="
                flex size-14 shrink-0 items-center
                justify-center rounded-full
                bg-brand-pink/40
              ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-brand-rose"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="18" cy="6" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="
                  font-heading text-2xl
                  font-semibold text-brand-rose
                ">
                  Instagram
                </h3>

                <p className="
                  font-sans text-sm
                  text-brand-rose/70
                ">
                  Acompanhe o trabalho da Maíra.
                </p>
              </div>
            </a>

          </div>

          {/* Modalidade de atendimento */}
          <div className="
            flex flex-col items-center gap-3
            text-center
          ">
            <House
              size={30}
              strokeWidth={1.7}
              className="text-brand-rose"
              aria-hidden="true"
            />

            <h3 className="
              font-heading text-2xl
              font-semibold text-brand-rose
            ">
              Atendimento domiciliar
            </h3>

            <p className="
              max-w-xl font-sans text-sm
              leading-relaxed text-brand-rose/70
              md:text-base
            ">
              Mais comodidade e cuidado, com atendimento
              realizado no conforto da sua casa.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}

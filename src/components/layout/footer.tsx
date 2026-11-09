
import Link from 'next/link';

import { CurrentYear } from '@/components/ui/current-year';
import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button-link';

import {
  WHATSAPP_URL,
  INSTAGRAM_URL,
} from '@/constants/contact';

import { NAVIGATION } from '@/constants/navigation';

export function Footer() {
  return (
    <footer className="bg-brand-rose text-brand-background">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-3">

          {/* Identidade */}
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-3xl font-semibold">
              Maira Oliveira
            </h2>

            <p className="font-sans text-sm leading-relaxed text-brand-background/80">
              Fisioterapia, movimento e bem-estar.
              Cuidado e dedicação para ajudar você a viver melhor.
            </p>
          </div>

          {/* Navegação */}
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider">
              Navegação
            </h3>

            <nav aria-label="Navegação do rodapé">
              <ul className="flex flex-col gap-3 font-sans text-sm text-brand-background/80">

                <li>
                  <Link
                    href={NAVIGATION.home}
                    className="transition-colors hover:text-white"
                  >
                    Início
                  </Link>
                </li>

                <li>
                  <Link
                    href={NAVIGATION.about}
                    className="transition-colors hover:text-white"
                  >
                    Sobre
                  </Link>
                </li>

                <li>
                  <Link
                    href={NAVIGATION.services}
                    className="transition-colors hover:text-white"
                  >
                    Serviços
                  </Link>
                </li>

                <li>
                  <Link
                    href={NAVIGATION.differentials}
                    className="transition-colors hover:text-white"
                  >
                    Diferenciais
                  </Link>
                </li>

                <li>
                  <Link
                    href={NAVIGATION.testimonials}
                    className="transition-colors hover:text-white"
                  >
                    Depoimentos
                  </Link>
                </li>

                <li>
                  <Link
                    href={NAVIGATION.contact}
                    className="transition-colors hover:text-white"
                  >
                    Contato
                  </Link>
                </li>

              </ul>
            </nav>
          </div>

          {/* Contato */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider">
              Vamos conversar?
            </h3>

            <p className="font-sans text-sm leading-relaxed text-brand-background/80">
              Entre em contato e agende seu atendimento.
            </p>

            <ButtonLink
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="sm"
            >
              Agendar consulta
            </ButtonLink>

            {/* Instagram */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-brand-background/80 transition-colors hover:text-white"
              aria-label="Visitar Instagram profissional da Maíra"
            >
              Instagram: @fisiomaira
            </a>
          </div>

        </div>

        {/* Direitos autorais */}
        <div className="border-t border-brand-background/20 py-6">
          <p className="text-center font-sans text-xs text-brand-background/70">
            © <CurrentYear /> Maira Oliveira. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}


import Link from 'next/link';

import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button-link';

import { WHATSAPP_URL } from '@/constants/contact';
import { NAVIGATION } from '@/constants/navigation';

export function Header() {
  return (
    <header className="w-full border-b border-brand-light bg-brand-background">
      <Container>
        <div className="flex flex-col items-center justify-between gap-5 py-5 md:flex-row">

          {/* Identidade visual */}
          <Link
            href={NAVIGATION.home}
            className="flex flex-col items-center md:items-start"
            aria-label="Maira Oliveira - Página inicial"
          >
            <span className="font-heading text-3xl font-semibold text-brand-rose">
              Maira Oliveira
            </span>

            <span className="font-sans text-xs tracking-[0.2em] text-brand-rose">
              FISIOTERAPEUTA
            </span>
          </Link>

          {/* Navegação principal */}
          <nav aria-label="Navegação principal">
            <ul className="flex flex-wrap items-center justify-center gap-5 font-sans text-sm text-brand-rose md:gap-6">
              <li>
                <Link
                  href={NAVIGATION.home}
                  className="transition-colors hover:text-brand-rose/70"
                >
                  Início
                </Link>
              </li>

              <li>
                <Link
                  href={NAVIGATION.about}
                  className="transition-colors hover:text-brand-rose/70"
                >
                  Sobre
                </Link>
              </li>

              <li>
                <Link
                  href={NAVIGATION.services}
                  className="transition-colors hover:text-brand-rose/70"
                >
                  Serviços
                </Link>
              </li>

              <li>
                <Link
                  href={NAVIGATION.contact}
                  className="transition-colors hover:text-brand-rose/70"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>

          {/* Botão de agendamento */}
          <ButtonLink
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
          >
            Agendar consulta
          </ButtonLink>

        </div>
      </Container>
    </header>
  );
}

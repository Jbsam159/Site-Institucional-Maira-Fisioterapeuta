
import Link from 'next/link';

import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button-link';

import { WHATSAPP_URL } from '@/constants/contact';
import { NAVIGATION } from '@/constants/navigation';

import Image from 'next/image';

export function Header() {
  return (
    <header className="w-full border-b border-brand-light bg-brand-background">
      <Container>
        <div className="flex flex-col items-center justify-between gap-5 py-5 lg:flex-row">

          {/* Identidade visual */}
          <Link
            href={NAVIGATION.home}
            className="flex flex-col items-center md:items-start"
            aria-label="Maira Oliveira - Página inicial"
          >
            <Image
              src="/logo/logo-header.png"
              alt="Maira Oliveira — Fisioterapeuta. Movimento, Saúde e Bem-estar."
              width={1317}
              height={714}
              sizes="(min-width: 1280px) 240px, (min-width: 1024px) 208px, 288px"
              className="h-auto w-72 lg:w-52 xl:w-60"
            />
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

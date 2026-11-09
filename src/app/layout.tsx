
import type { Metadata } from "next";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

import {
  Cormorant_Garamond,
  DM_Sans,
} from "next/font/google";

import "./globals.css";

// Fonte utilizada nos títulos e destaques.
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Fonte utilizada nos textos e elementos da interface.
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  // Título exibido nos resultados de busca e na aba do navegador.
  title: "Maira Oliveira | Fisioterapeuta",

  // Resumo sobre o conteúdo do site.
  description:
    "Conheça Maira Oliveira, fisioterapeuta. Atendimento domiciliar com cuidado individualizado, terapia manual, ventosaterapia e outros recursos para promover saúde e bem-estar.",

  // Identificação da profissional responsável pelo conteúdo.
  authors: [
    {
      name: "Maira Oliveira",
    },
  ],

  // Orientações para mecanismos de busca.
  robots: {
    index: true,
    follow: true,
  },

  // Metadados utilizados no compartilhamento em redes sociais.
  openGraph: {
    title: "Maira Oliveira | Fisioterapeuta",
    description:
      "Fisioterapia domiciliar com cuidado individualizado, atenção e dedicação à sua saúde e bem-estar.",
    siteName: "Maira Oliveira",
    locale: "pt_BR",
    type: "website",
  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorantGaramond.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">

        <Header />

        {children}

        <Footer />

      </body>

    </html>

  );
}

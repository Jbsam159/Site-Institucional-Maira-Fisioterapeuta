
import type { Metadata } from "next";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

import { StructuredData } from '@/components/seo/structured-data';

import {
  Cormorant_Garamond,
  DM_Sans,
} from "next/font/google";

import "./globals.css";

// Fonte utilizada nos títulos e destaques.
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["600"],
});

// Fonte utilizada nos textos e elementos da interface.
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});


export const metadata: Metadata = {
  // Título exibido nos resultados de busca e na aba do navegador.
  title: "Fisioterapia Domiciliar em Brasília | Maíra Oliveira",

  // Resumo sobre o conteúdo do site.
  description:
    "Maíra Oliveira, fisioterapeuta em Brasília. Atendimento domiciliar com cuidado individualizado, terapia manual, ventosaterapia, liberação miofascial e eletroterapia.",

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
    title: "Fisioterapia Domiciliar em Brasília | Maíra Oliveira",
    description:
    "Maíra Oliveira, fisioterapeuta em Brasília. Atendimento domiciliar com cuidado individualizado, terapia manual, ventosaterapia, liberação miofascial e eletroterapia.",
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

        <StructuredData />

        <Header />  

        {children}

        <Footer />

      </body>

    </html>

  );
}

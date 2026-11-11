
import type { Metadata } from "next";

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

import {SITE_CONFIG} from '@/constants/site'

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

  metadataBase: new URL(SITE_CONFIG.url),
  title: "Fisioterapia Domiciliar em Brasília | Maíra Oliveira",

  description:
    "Maíra Oliveira, fisioterapeuta em Brasília. Atendimento domiciliar com cuidado individualizado, terapia manual, ventosaterapia, liberação miofascial e eletroterapia.",

  authors: [
    {
      name: "Maíra Oliveira",
    },
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Fisioterapia Domiciliar em Brasília | Maíra Oliveira",
    description:
      "Maíra Oliveira, fisioterapeuta em Brasília. Atendimento domiciliar com cuidado individualizado, terapia manual, ventosaterapia, liberação miofascial e eletroterapia.",
    siteName: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
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

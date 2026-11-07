
import type { Metadata } from "next";

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
  title: "Maira Oliveira | Fisioterapeuta",
  description: "Movimento, saúde e bem-estar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorantGaramond.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}

import type { MetadataRoute } from "next";

import { SITE_CONFIG } from "@/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      // Endereço principal do site.
      url: SITE_CONFIG.url,

      // Atualizar quando houver uma alteração significativa no conteúdo.
      lastModified: new Date("2026-11-11"),

      // Frequência estimada de atualização.
      changeFrequency: "monthly",

      // Importância relativa da página.
      priority: 1,
    },
  ];
}

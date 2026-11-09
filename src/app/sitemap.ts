import type { MetadataRoute } from "next";

import { SITE_CONFIG } from "@/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      // Endereço principal do site quando hospedado
      url: SITE_CONFIG.url,

      // Data da última modificação do conteúdo.
      lastModified: new Date(),

      // Frequência estimada de atualização.
      changeFrequency: "monthly",

      // Importância relativa da página.
      priority: 1,
    },
  ];
}

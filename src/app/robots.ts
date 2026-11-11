import type { MetadataRoute } from "next";

import { SITE_CONFIG } from "@/constants/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: new URL("/sitemap.xml", SITE_CONFIG.url).toString(),
  };
}

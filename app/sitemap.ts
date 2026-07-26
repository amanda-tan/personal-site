import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://amanda-tan.io",
    },
    {
      url: "https://amanda-tan.io/writing/the-most-dangerous-person-in-ai-isnt-the-beginner",
      lastModified: "2026-07-26",
    },
  ];
}

import type { MetadataRoute } from "next";

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfoliotworekrobert.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site}/pl`, changeFrequency: "monthly", priority: 1 },
    { url: `${site}/en`, changeFrequency: "monthly", priority: 1 }
  ];
}

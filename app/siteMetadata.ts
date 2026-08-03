import type { Metadata } from "next";

export const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
);
const socialPreviewImageUrl = new URL("/api/og", metadataBase).toString();

export const socialPreviewImage = {
  url: socialPreviewImageUrl,
  width: 1200,
  height: 630,
  alt: "Robert Tworek - Junior C#/.NET Developer Portfolio"
};

export const siteMetadata: Metadata = {
  metadataBase,
  title: {
    default: "Robert Tworek - Junior C#/.NET Developer",
    template: "%s | Robert Tworek"
  },
  description:
    "Portfolio Roberta Tworka: C#/.NET, ASP.NET Core, React, PostgreSQL, aplikacje desktopowe, testy i dokumentacja techniczna.",
  keywords: [
    "Robert Tworek",
    "Junior C# Developer",
    "Junior .NET Developer",
    "ASP.NET Core",
    "C#",
    "EF Core",
    "portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Wroclaw University of Science and Technology"
  ],
  authors: [{ name: "Robert Tworek" }],
  creator: "Robert Tworek",
  openGraph: {
    title: "Robert Tworek - Junior C#/.NET Developer",
    description:
      "Portfolio z projektami ASP.NET Core, React, PostgreSQL, C# desktop, testami i dokumentacją techniczną.",
    type: "website",
    images: [socialPreviewImage]
  },
  twitter: {
    card: "summary_large_image",
    title: "Robert Tworek - Junior C#/.NET Developer",
    description:
      "Portfolio z projektami ASP.NET Core, React, PostgreSQL, C# desktop, testami i dokumentacją techniczną.",
    images: [socialPreviewImage.url]
  }
};

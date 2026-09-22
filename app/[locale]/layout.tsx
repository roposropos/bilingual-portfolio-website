import type { ReactNode } from "react";
import { Fraunces } from "next/font/google";
import "../globals.css";
import { siteMetadata } from "../siteMetadata";
import { isLocale } from "@/data/content";

export const metadata = siteMetadata;

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  variable: "--font-fraunces",
  display: "swap"
});

type LocaleLayoutProps = Readonly<{
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
}>;

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  const htmlLang = isLocale(locale) ? locale : "pl";

  return (
    <html lang={htmlLang} className={fraunces.variable}>
      <body>{children}</body>
    </html>
  );
}

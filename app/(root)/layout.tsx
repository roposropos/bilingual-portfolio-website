import type { ReactNode } from "react";
import { Fraunces } from "next/font/google";
import "../globals.css";
import { siteMetadata } from "../siteMetadata";

export const metadata = siteMetadata;

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  variable: "--font-fraunces",
  display: "swap"
});

export default function RootRedirectLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pl" className={fraunces.variable}>
      <body>{children}</body>
    </html>
  );
}

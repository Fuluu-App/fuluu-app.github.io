import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { site } from "@/content/site";

import "./globals.css";

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700", "800", "900"],
  variable: "--font-sans",
});

const description =
  "Fuluu ile İngilizceyi kullanarak öğren: kısa dersler, sesli konuşma pratiği ve sana göre hazırlanan günlük plan.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Fuluu – İngilizceyi kullanarak öğren", template: "%s – Fuluu" },
  description,
  openGraph: { type: "website", siteName: site.name, locale: "tr_TR", description },
};

export const viewport: Viewport = { themeColor: "#11141c" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={nunito.variable}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

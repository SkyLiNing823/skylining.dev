import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SkyBackdrop } from "@/components/sky-experience";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://skylining.dev"),
  title: {
    default: "skylining | Sky Lee",
    template: "%s | skylining",
  },
  description: "Sky Lee's personal space for applied ML, physical AI, engineering, and writing.",
  openGraph: {
    title: "skylining | Sky Lee",
    description: "The sky is the limit — Sky Lee's personal space.",
    type: "website",
    images: [{ url: "/og-sky-v2.png", width: 1200, height: 630, alt: "A clear summer sky above the coastal hills of skylining" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "skylining | Sky Lee",
    description: "The sky is the limit — Sky Lee's personal space.",
    images: ["/og-sky-v2.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#173f72",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preload" as="image" href="/summer-hills-dawn-v10.webp" type="image/webp" />
      </head>
      <body>
        <SkyBackdrop />
        <SiteHeader />
        <main className="relative z-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

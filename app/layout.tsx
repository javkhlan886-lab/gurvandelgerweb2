import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/lib/i18n";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, SITE_NAME, SITE_URL, toJsonLd } from "@/lib/site";



const inter = Inter({subsets:['latin', 'cyrillic'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Гурван Дэлгэр ХХК — Барилга, IT, SD-WAN сүлжээ, Сэргээгдэх эрчим хүч",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Гурван Дэлгэр ХХК нь барилга байгууламж, мэдээлэл технологи, SD-WAN сүлжээний шийдэл, сэргээгдэх эрчим хүчний салбарт үйл ажиллагаа явуулдаг олон салбартай компани. 15 жилийн туршид итгэл, чанартай үйлчилгээ үзүүлж байна.",
  keywords: [
    "Гурван Дэлгэр ХХК",
    "Gurvandelger",
    "барилга",
    "мэдээлэл технологи",
    "SD-WAN",
    "SD-WAN Монгол",
    "сүлжээний тоног төхөөрөмж",
    "харилцаа холбоо",
    "шилэн кабель",
    "камерын хяналтын систем",
    "сэргээгдэх эрчим хүч",
    "нарны эрчим хүч",
  ],
  openGraph: {
    type: "website",
    locale: "mn_MN",
    siteName: SITE_NAME,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: ["Gurvandelger LLC", "Gurvan Delger LLC", "Гурвандэлгэр ХХК"],
      url: SITE_URL,
      logo: `${SITE_URL}/logo.jpg`,
      description:
        "Барилга байгууламж, мэдээлэл технологи, SD-WAN болон сүлжээний цогц шийдэл, сэргээгдэх эрчим хүчний салбарт үйл ажиллагаа явуулдаг Монголын компани.",
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE_DISPLAY,
      areaServed: { "@type": "Country", name: "Mongolia" },
      address: { "@type": "PostalAddress", addressCountry: "MN" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      alternateName: "Gurvandelger LLC",
      url: SITE_URL,
      inLanguage: "mn",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="mn"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(organizationJsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

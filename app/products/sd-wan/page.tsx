import React from "react";
import type { Metadata } from "next";
import SdWan from "@/components/SdWan";
import Footer from "@/components/footer";
import { SDWAN_FAQ } from "@/lib/sdwanFaq";
import { SITE_NAME, SITE_URL, toJsonLd } from "@/lib/site";

const TITLE = "SD-WAN шийдэл Монголд | Олон салбарын сүлжээ — Гурван Дэлгэр ХХК";
const DESCRIPTION =
  "SD-WAN технологиор MPLS, broadband, LTE/5G сүлжээг нэг overlay-д нэгтгэж, олон салбартай байгууллагын сүлжээг ISP-ээс үл хамааран цогцоор удирдана. Гурван Дэлгэр ХХК — тоног сонголтоос нэвтрүүлэлт, дэмжлэг хүртэл.";
const PATH = "/products/sd-wan";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "SD-WAN",
    "SD-WAN Монгол",
    "олон салбартай байгууллагын сүлжээ",
    "Гурван Дэлгэр ХХК",
    "MPLS",
    "broadband",
    "LTE/5G сүлжээ",
    "overlay сүлжээ",
    "сүлжээний тоног төхөөрөмж нийлүүлэгч",
    "сүлжээ нэвтрүүлэлт дэмжлэг",
    "ISP-ээс үл хамаарах сүлжээ",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    type: "website",
    locale: "mn_MN",
    siteName: SITE_NAME,
    url: PATH,
    title: TITLE,
    description: DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}${PATH}#service`,
      name: "SD-WAN — олон салбартай байгууллагын нэгдсэн сүлжээний шийдэл",
      serviceType: "SD-WAN",
      description: DESCRIPTION,
      url: `${SITE_URL}${PATH}`,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Mongolia" },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}${PATH}#faq`,
      mainEntity: SDWAN_FAQ.map((item) => ({
        "@type": "Question",
        name: item.q.mn,
        acceptedAnswer: { "@type": "Answer", text: item.a.mn },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Нүүр", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "SD-WAN", item: `${SITE_URL}${PATH}` },
      ],
    },
  ],
};

export default function Page() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(jsonLd) }} />
      <SdWan />
      <Footer />
    </div>
  );
}

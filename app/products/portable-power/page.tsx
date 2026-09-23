import React from "react";
import type { Metadata } from "next";
import PortablePower from "@/components/PortablePower";
import Footer from "@/components/footer";
import { SITE_NAME, SITE_URL, toJsonLd } from "@/lib/site";

const TITLE =
  "2.2 кВт·ц зөөврийн нарны цахилгаан станц BSBK-2200W | Гурван Дэлгэр ХХК";
const DESCRIPTION =
  "400 Вт эвхэгддэг нарны хавтан, 2201.6 Вт·ц LiFePO₄ батерей, 2200 Вт гаралттай зөөврийн эрчим хүчний иж бүрдэл. Гэр, отор, зуслан, барилгын талбайг цахилгааны шугамгүйгээр хангана. Гурван Дэлгэр ХХК захиалга авч байна.";
const PATH = "/products/portable-power";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "зөөврийн цахилгаан станц",
    "зөөврийн эрчим хүчний систем",
    "нарны хавтан Монгол",
    "400 Вт нарны хавтан",
    "эвхэгддэг нарны хавтан",
    "LiFePO4 батерей",
    "2200 Вт инвертор",
    "BSBK-2200W",
    "гэрийн нарны цахилгаан",
    "отрын цахилгаан",
    "малчны нарны эрчим хүч",
    "Гурван Дэлгэр ХХК",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    type: "website",
    locale: "mn_MN",
    siteName: SITE_NAME,
    url: PATH,
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/products/bsbk2200w-panel.png`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": `${SITE_URL}${PATH}#product`,
      name: "BSBK-2200W — 2.2 кВт·ц зөөврийн сэргээгдэх эрчим хүчний систем",
      sku: "BSBK-2200W",
      description: DESCRIPTION,
      url: `${SITE_URL}${PATH}`,
      image: [`${SITE_URL}/products/bsbk2200w-panel.png`],
      category: "Зөөврийн нарны цахилгаан станц",
      brand: { "@id": `${SITE_URL}/#organization` },
      weight: { "@type": "QuantitativeValue", value: 26, unitCode: "KGM" },
      additionalProperty: [
        { "@type": "PropertyValue", name: "Гаралтын чадал", value: "2200 Вт" },
        { "@type": "PropertyValue", name: "Батерейн багтаамж", value: "2201.6 Вт·ц" },
        { "@type": "PropertyValue", name: "Батерейн төрөл", value: "LiFePO4" },
        { "@type": "PropertyValue", name: "Нарны хавтан", value: "400 Вт, эвхэгддэг" },
        { "@type": "PropertyValue", name: "Ажиллах температур", value: "−30°C ~ 60°C" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Нүүр", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "2.2 кВт·ц зөөврийн эрчим хүчний систем",
          item: `${SITE_URL}${PATH}`,
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(jsonLd) }} />
      <PortablePower />
      <Footer />
    </div>
  );
}

import React from "react";
import type { Metadata } from "next";
import Awards from "@/components/Awards";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Шагнал, Гавьяа — Best Safety Contractor 2026",
  description:
    "Altgana Resources ХХК-иас 2025, 2026 онд Гурван Дэлгэр ХХК-д олгосон «Шилдэг аюулгүй ажиллагаатай гүйцэтгэгч» шагнал, 1,000,000 хүн-цаг LTI FREE амжилт.",
  alternates: { canonical: "/awards" },
};

export default function Page() {
  return (
    <div>
      <Awards />
      <Footer />
    </div>
  );
}

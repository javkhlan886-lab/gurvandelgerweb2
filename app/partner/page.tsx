import React from "react";
import type { Metadata } from "next";
import OurPartners from "@/components/OurPartners";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Хамтрагч байгууллагууд",
  description:
    "Оюу толгой, ZTE, Mobinet, GMobile, Sky Networks, МТҮЗ, Altgana Resources зэрэг Гурван Дэлгэр ХХК-ийн хамтран ажилладаг түнш байгууллагууд.",
  alternates: { canonical: "/partner" },
};

export default function Page() {
  return (
    <div>
      <OurPartners />
      <Footer />
    </div>
  );
}

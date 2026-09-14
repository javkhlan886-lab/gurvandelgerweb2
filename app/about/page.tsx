import React from "react";
import type { Metadata } from "next";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Бидний тухай — удирдлагын баг",
  description:
    "Гурван Дэлгэр ХХК-ийн ТУЗ-ийн дарга, гүйцэтгэх захирал, үйл ажиллагаа эрхэлсэн захирлын мэндчилгээ, компанийн үнэт зүйлс ба 15 жилийн хөгжлийн замнал.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <div>
      <AboutUs />
      <Footer />
    </div>
  );
}

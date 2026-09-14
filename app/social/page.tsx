import React from "react";
import type { Metadata } from "next";
import SocialDuties from "@/components/SocialDuties";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Нийгмийн хариуцлага",
  description:
    "Гурван Дэлгэр ХХК-ийн байгаль орчны хамгаалал, ажилтны хөгжил, ил тод засаглал, нийгмийн түншлэлийн талаарх нийгмийн хариуцлагын бодлого.",
  alternates: { canonical: "/social" },
};

export default function Page() {
  return (
    <div>
      <SocialDuties />
      <Footer />
    </div>
  );
}

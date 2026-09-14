import React from "react";
import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Холбоо барих",
  description:
    "Гурван Дэлгэр ХХК-тай холбогдох: утас +976 77230606, имэйл info@gurvandelger.com. Барилга, IT, SD-WAN сүлжээ, сэргээгдэх эрчим хүчний үнийн санал аваарай.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <div>
      <Contact />
      <Footer />
    </div>
  );
}

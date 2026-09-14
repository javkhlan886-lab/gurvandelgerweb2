import React from "react";
import type { Metadata } from "next";
import SdWan from "@/components/SdWan";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "SD-WAN — байгууллагын сүлжээг нэгтгэн холбох | Гурван Дэлгэр ХХК",
  description:
    "Байгууллагын төв, салбар, уурхай зэрэг алслагдсан цэгүүдийг MPLS, broadband, LTE/5G холболтоор нэг аюулгүй SD-WAN сүлжээнд нэгтгэх шийдэл. Тоног төхөөрөмж сонголт, нэвтрүүлэлт, дэмжлэг.",
};

export default function Page() {
  return (
    <div>
      <SdWan />
      <Footer />
    </div>
  );
}

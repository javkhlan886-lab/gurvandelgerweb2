import React from "react";
import type { Metadata } from "next";
import ProjectsList from "@/components/PorjectsList";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Хийсэн төслүүд",
  description:
    "Хан-Алтай Ресурс, ZTE, Алтгана Ресурсес зэрэг байгууллагад Гурван Дэлгэр ХХК-ийн гүйцэтгэсэн барилга угсралт, 60 км шилэн кабель, камерын хяналтын системийн төслүүд.",
  alternates: { canonical: "/projects" },
};

export default function Page() {
  return (
    <div>
      <ProjectsList />
      <Footer />
    </div>
  );
}

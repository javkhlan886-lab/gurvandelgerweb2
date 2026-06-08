import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";

export default function Construction() {
  // Барилга байгууламжийн төслүүдийн дата
  const projects = [
    {
      name: "Хан-Алтай Ресурс ХХК - Хайлуулах үйлдвэр",
      location: "Төв аймаг",
      year: "2022-2023",
      desc: "Дээвэр, хана дүүргэлт, шал талбай цутгалтын ажил",
    },
    {
      name: "Хан-Алтай Ресурс ХХК - Урвалжийн агуулах",
      location: "Төв аймаг",
      year: "2023",
      desc: "Ерөнхий гүйцэтгэгчээр ажиллан бүтэн дуусгасан",
    },
    {
      name: "Ажилчидын орон сууцны байрлал",
      location: "Төв аймаг, Лүн сум",
      year: "2024",
      desc: "124м*14м барилгын суурь, ханын угсралт",
    },
    {
      name: "Оффис ба гал тогоо барилга",
      location: "Төв аймаг, Лүн сум",
      year: "2024",
      desc: "62м*14м барилгын бетон хийц",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-cover bg-[url(/Gurvandelgercity.png)] text-[#111111] font-sans antialiased">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 md:px-6 py-5 flex items-center justify-between border-b border-gray-200/60">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-normal tracking-tight cursor-pointer text-white/90 ">
          <a href="/"> Гурвандэлгэр ХХК</a>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/90 drop-shadow-sm">
          <Link
            href="/about"
            className="hover:text-[#C1E994] transition-colors"
          >
            Бидний тухай
          </Link>
          <Link href="/partner" className="hover:text-[#C1E994] transition-colors">
            Партнер байгууллагууд
          </Link>
          <Link
            href="/projects"
            className="hover:text-[#C1E994] transition-colors"
          >
            Хийсэн төсөлүүд
          </Link>
          <Link href="/social" className="hover:text-[#C1E994] transition-colors">
            Нийгмийн хариуцлага
          </Link>

          {/* Холбоо барих Button */}
          <Button className="bg-[#C1E994] hover:bg-[#b2df82] text-gray-900 px-4 py-2 rounded-full text-xs font-medium transition-all shadow-sm flex items-center">
            <Link href="/contact">Холбоо барих</Link>
          </Button>
        </nav>
        <button className="md:hidden text-white text-3xl">☰</button>
      </header>

      {/* Үндсэн агуулга */}
      <div className="bg-white/95 mt-6 mb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
            Барилга байгууламж
          </h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Гурван Дэлгэр ХХК нь барилга байгууламжийн салбарт 15 жилийн туршлагатай. Бүтэн дуусгасан төслүүд болон хамтран ажиллаж буй түнш байгууллагуудынхаа итгэлцэл нь манайх болжээ.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all bg-white p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {project.name}
                    </h3>
                    <p className="text-sm text-[#C1E994] font-medium">
                      {project.year}
                    </p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-3">📍 {project.location}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{project.desc}</p>
              </div>
            ))}
          </div>

          {/* Нэмэлт мэдээлэл */}
          <div className="mt-12 bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Бидний чадамжууд
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <li className="flex gap-2">
                <span className="text-[#C1E994]">✓</span>
                <span>Инженерингийн дизайн ба төлөвлөлт</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#C1E994]">✓</span>
                <span>Суурь ба ханын угсралт</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#C1E994]">✓</span>
                <span>Бетон хийцийн ажил</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#C1E994]">✓</span>
                <span>Дүүргэлтийн ажил ба эцсийн завсруулалт</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

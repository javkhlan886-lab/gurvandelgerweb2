"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);

  const projects = [
    {
      name: "Хан-Алтай Ресурс ХХК",
      logo: "/projects/khanaltai.png",
      desc: "Барилга угсралт, инженерингийн ажил",
      items: [
        "2022 онд Хайлуулах үйлдвэрийн барилгын дээвэр, хана дүүргэлт, шал талбай цутгалтын ажил",
        "2023 онд Урвалжийн агуулах барилгыг ерөнхий гүйцэтгэгчээр ажиллан Улсын комиссд хүлээлгэн өгч ашиглалтад оруулсан",
        "2024 онд Төв аймаг Лүн суманд байрлах уурхайн Ажилчидын орон сууцны барилгын 124м*14м барилгын суурь, ханын угсралтын ажил",
        "2024 онд Төв аймаг Лүн суманд байрлах уурхайн Оффис, гал тогоо барилгын 62м*14м барилгын бетон хийц",
      ],
    },
    {
      name: "Хасу-Мегаватт ХХК",
      logo: "/projects/khasu.jpg",
      desc: "Барилга угсралт, инженерингийн ажил",
      items: [
        "2023 онд Хэнтий аймаг Дэлгэрхаан сумд байрлах Монголын нууц товчооны интерьерийг бүтэн дуусгасан",
      ],
    },
    {
      name: "Трипл Маржин ХХК",
      logo: "/projects/triple.jpg",
      desc: "Камерын хяналтын систем",
      items: ["2024 онд камерын хяналтын систем нийлүүлэх суурилуулах ажил"],
    },
    {
      name: "ZTE ХХК",
      logo: "/projects/zte.png",
      desc: "Шилэн кабель татах ажил",
      items: [
        "2025 онд Төв аймгийн Мөнгөн морьт суманд 60км газрын шилэн кабель татах ажил",
      ],
    },
    {
      name: "Алтгана Ресурсес ХХК",
      logo: "/projects/altgana.jpg",
      desc: "Насос станцын барилга угсралт",
      items: [
        '2026 онд Төв аймгийн Лүн сумын нутаг дэвсгэрт байрлах "Баян уусмал, агаар өгөх насос станц"-ын суурийн барилга угсралтын ажил',
        '2026 онд Төв аймгийн Лүн сумын нутаг дэвсгэрт байрлах "Ядуу уусмалын насос станц"-ын суурийн барилга угсралтын ажил',
      ],
    },

    {
      name: "Эм Ди Эс Коммуникэшн ХХК",
      logo: "/projects/mds.avif",
      desc: "Камерын хяналтын систем",
      items: ["2025 онд камерын хяналтын систем нийлүүлэх суурилуулах ажил"],
    },
    {
      name: "Блүүм мибел АКА сервис технологи ХХК",
      logo: "/projects/bloom.jpeg",
      desc: "Камерын хяналтын систем",
      items: ["2025 онд камерын хяналтын систем нийлүүлэх суурилуулах ажил"],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-cover bg-[url(/Gurvandelgercity.png)] text-[#111111] font-sans antialiased">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between border-b border-gray-200/60">
        <div className="text-xl md:text-3xl font-normal tracking-tight cursor-pointer text-white/90">
          <a href="/">Гурвандэлгэр ХХК</a>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/90">
          <Link
            href="/about"
            className="hover:text-[#C1E994] transition-colors"
          >
            Бидний тухай
          </Link>
          <Link
            href="/partner"
            className="hover:text-[#C1E994] transition-colors"
          >
            Партнер байгууллагууд
          </Link>
          <Link
            href="/projects"
            className="hover:text-[#C1E994] transition-colors"
          >
            Хийсэн төсөлүүд
          </Link>
          <Link
            href="/social"
            className="hover:text-[#C1E994] transition-colors"
          >
            Нийгмийн хариуцлага
          </Link>
          <Button className="bg-[#C1E994] hover:bg-[#b2df82] text-gray-900 px-4 py-2 rounded-full text-xs font-medium">
            <Link href="/contact">Холбоо барих</Link>
          </Button>
        </nav>
        <button className="md:hidden text-white text-3xl">☰</button>
      </header>

      {/* Үндсэн агуулга */}
      <div className="bg-white mt-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Хийсэн төсөлүүд
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                onClick={() => setSelected(i)}
                className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer hover:-translate-y-1 bg-white"
              >
                {/* Логоны хэсэг */}
                <div className="h-48 bg-gray-50 flex items-center justify-center p-6">
                  <img
                    src={project.logo}
                    alt={project.name}
                    className="max-h-24 max-w-[180px] object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                {/* Текстийн хэсэг */}
                <div className="p-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900 text-sm mb-1">
                    {project.name}
                  </p>
                  <p className="text-xs text-gray-500">{project.desc}</p>
                  <p className="text-xs text-[#C1E994] font-medium mt-2"></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal — дэлгэрэнгүй */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Хаах товч */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
            >
              <X size={20} />
            </button>

            {/* Лого */}
            <div className="flex justify-center mb-4">
              <img
                src={projects[selected].logo}
                alt={projects[selected].name}
                className="max-h-20 max-w-[160px] object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-1">
              {projects[selected].name}
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              {projects[selected].desc}
            </p>

            <ul className="space-y-3">
              {projects[selected].items.map((item, j) => (
                <li key={j} className="flex gap-2 text-sm text-gray-700">
                  <span className="text-[#C1E994] font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

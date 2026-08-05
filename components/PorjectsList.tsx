"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import Header from "./Header";

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
    <div className="relative w-full min-h-screen overflow-hidden bg-white text-slate-900 font-sans antialiased">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-indigo-400/15 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-cyan-300/15 blur-3xl" />
      </div>

      <Header />

      {/* Үндсэн агуулга */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 shadow-sm">
            Портфолио
          </span>
          <h2 className="mt-5 text-2xl md:text-4xl font-bold tracking-tight text-slate-900">
            Хийсэн төсөлүүд
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              className="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-200 transition-all cursor-pointer hover:-translate-y-1 bg-white"
            >
              {/* Логоны хэсэг */}
              <div className="h-48 bg-slate-50 flex items-center justify-center p-6">
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
              <div className="p-4 border-t border-slate-100">
                <p className="font-semibold text-slate-900 text-sm mb-1">
                  {project.name}
                </p>
                <p className="text-xs text-slate-500">{project.desc}</p>
                <p className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-indigo-600">
                  Дэлгэрэнгүй үзэх
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal — дэлгэрэнгүй */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Хаах товч */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
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

            <h3 className="text-lg font-bold text-slate-900 mb-1">
              {projects[selected].name}
            </h3>
            <p className="text-sm text-slate-500 mb-4">
              {projects[selected].desc}
            </p>

            <ul className="space-y-3">
              {projects[selected].items.map((item, j) => (
                <li key={j} className="flex gap-2 text-sm text-slate-700">
                  <span className="text-indigo-600 font-bold mt-0.5">✓</span>
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

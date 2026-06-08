import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RenewableEnergy() {
  const solarProjects = [
    {
      name: "Наран хүчний цахилгаан станц",
      capacity: "Ханын цахилгаа бүрэн хангалт",
      location: "Төв аймаг, Сухэ баатарын аймаг",
      desc: "Орон сууц, байгууллагын наран хүчний системийг суулгахаа явуулж байна",
    },
    {
      name: "Салхины хүчний төсөл",
      capacity: "Байнгын эрчим хүч",
      location: "Баянзүрх, Сүүхбаатар дүүрэг",
      desc: "Салхины хүч ашиглан байнгын цахилгаа олгож байна",
    },
    {
      name: "Эрчим хүчний сүлжээ",
      capacity: "Хэд хэдэн сайт",
      location: "Улаанбаатар ба цэцэрлэг",
      desc: "Сэргээгдэх эрчим хүчний сүлжээг бүтээн байгуулж байна",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-cover bg-[url(/Gurvandelgercity.png)] text-[#111111] font-sans antialiased">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 md:px-6 py-5 flex items-center justify-between border-b border-gray-200/60">
        <div className="text-2xl md:text-3xl font-normal tracking-tight cursor-pointer text-white/90">
          <Link href="/">Гурвандэлгэр ХХК</Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/90 drop-shadow-sm">
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

          <Button className="bg-[#C1E994] hover:bg-[#b2df82] text-gray-900 px-4 py-2 rounded-full text-xs font-medium transition-all shadow-sm">
            <Link href="/contact">Холбоо барих</Link>
          </Button>
        </nav>
        <button className="md:hidden text-white text-3xl">☰</button>
      </header>

      {/* Үндсэн агуулга */}
      <div className="bg-white/95 mt-6 mb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
            ♻️ Сэргээгдэх эрчим хүч
          </h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Гурван Дэлгэр ХХК нь сэргээгдэх эрчим хүчний төслүүдэд идэвхтэй оролцож байна. Наран хүч, салхины хүчний технологийг ашиглан Монгол Улсын эрчим хүчний системд хувь нэмэр оруулж байна.
          </p>

          {/* Төслүүдийн сүлжээ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {solarProjects.map((project, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all bg-gradient-to-br from-green-50 to-blue-50 p-6"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-xs text-[#C1E994] font-bold tracking-wide">
                    {project.capacity}
                  </p>
                </div>

                <p className="text-sm text-gray-600 mb-3">📍 {project.location}</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Нарны хүч сүлжээ */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              ☀️ Наран хүчний нэгдсэн сүлжээ
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Үзүүлэлт:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-[#C1E994]">●</span>
                    <span>Нийт байрлалын тоо: 10+</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C1E994]">●</span>
                    <span>Нийт багтаамж: 1-5 МВт</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C1E994]">●</span>
                    <span>Ашиглалтанд орох хугацаа: 2024-2025</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Давуу талууд:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-[#C1E994]">✓</span>
                    <span>Байгаль сүлжээтэй үл нийцэх</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C1E994]">✓</span>
                    <span>Бага нэмэлт зардал</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C1E994]">✓</span>
                    <span>Урт хугацааны үйлчилгээ</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Салхины хүч */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              💨 Салхины хүчний төслүүд
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Төслийн дэлгэрэнгүй:</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex gap-2">
                    <span className="text-[#C1E994]">●</span>
                    <span>Төв, Баян-Өлгий, Архангай аймгуудын салхи ихтэй хэсгүүдэд байршуулсан</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C1E994]">●</span>
                    <span>Өндөр аз жаргалтай өндөрлөгүүд дээр суурилсан</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C1E994]">●</span>
                    <span>Сүлжээний сүлжээтэй холбогдож ажиллаж байна</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Зорилгууд:</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex gap-2">
                    <span className="text-[#C1E994]">★</span>
                    <span>Монголын эрчим хүчний 30% сэргээгдэх эрчим хүчээр хангах</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C1E994]">★</span>
                    <span>Гадаад валютын хэмнэлт</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C1E994]">★</span>
                    <span>Ажлын байр бүтээх</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

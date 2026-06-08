import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Telecom() {
  const itProjects = [
    {
      category: "Мэдээлэл системийн дэд бүтэц",
      items: [
        "Шилэн кабелийн сүлжээ (60км +)",
        "Шилэн кабелийн татаж суулгах ажил",
        "Сүлжээний тоног төхөөрөмжийн суулгалт",
      ],
    },
    {
      category: "Хаалттай хамгаалалтын камер",
      items: [
        "CCTV системийн төлөвлөлт ба дизайн",
        "HD болон 4K камерын суулгалт",
        "Үйл ажиллагааны мониторинг",
      ],
    },
    {
      category: "Өгөгдлийн төв",
      items: [
        "Сервер болон storage систем",
        "Резервуулалт ба нөхөрлөлт",
        "Өгөгдлийн бүрьеэ, бүрүүлэлт",
      ],
    },
    {
      category: "Сүлжээний тоног төхөөрөмж",
      items: [
        "Маршрутчик, свичүүдийн суулгалт",
        "Вайфай сүлжээний байгуулалт",
        "Сүлжээний сэргээлгээ",
      ],
    },
  ];

  const partners = [
    { name: "ZTE Corporation", services: "Шилэн кабель, сүлжээний тоног төхөөрөмж" },
    { name: "Sky Networks", services: "Сул нэвтрүүлэх сүлжээ" },
    { name: "Tripl Margin LLC", services: "Хаалттай хамгаалалтын системүүд" },
    { name: "MDS Communication", services: "IT дэд бүтэц" },
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
            💻 Мэдээлэл Технологи
          </h1>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Гурван Дэлгэр ХХК нь мэдээлэл технологийн салбарт шинэлэг шийдлүүд санал болгоход идэвхтэй ажиллаж байна. Шилэн кабель, хаалттай хамгаалалтын системүүд болон мэдээлэл дэд бүтцийн төсөлүүд бүрэн дуусгасан болно.
          </p>

          {/* IT үйлчилгээ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {itProjects.map((project, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all bg-gradient-to-br from-blue-50 to-purple-50 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-[#C1E994] text-2xl">⚙️</span>
                  {project.category}
                </h3>

                <ul className="space-y-3">
                  {project.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-gray-700">
                      <span className="text-[#C1E994] font-bold">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Хүчирхэг үр дүнгүүд */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 text-center border border-green-200">
              <div className="text-4xl font-bold text-[#C1E994] mb-2">60+</div>
              <p className="text-gray-700">км шилэн кабель суулгасан</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 text-center border border-blue-200">
              <div className="text-4xl font-bold text-[#C1E994] mb-2">100+</div>
              <p className="text-gray-700">хаалттай хамгаалалтын камер</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 text-center border border-purple-200">
              <div className="text-4xl font-bold text-[#C1E994] mb-2">24/7</div>
              <p className="text-gray-700">мониторинг болон дэмжлэг</p>
            </div>
          </div>

          {/* Үйлчилгээний түнш */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              🤝 Түнш байгууллагууд
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partners.map((partner, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-600">{partner.services}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Чадамжууд */}
          <div className="bg-gradient-to-r from-[#C1E994] to-[#a8d96e] rounded-xl p-8 text-gray-900">
            <h2 className="text-2xl font-semibold mb-6">📊 Бидний чадамжууд</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold">Төлөвлөлт ба дизайн</h3>
                  <p className="text-sm text-gray-800">
                    Шинэлэг IT шийдлүүдийн төлөвлөлт
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold">Суулгалт ба сургалт</h3>
                  <p className="text-sm text-gray-800">
                    Сүлжээний инженерүүдийн бүрэн сургалт
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold">Үйлчилгээ болон засвал</h3>
                  <p className="text-sm text-gray-800">
                    Хугацаатай аюулгүй байдлын үйлчилгээ
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold">Сүлжээний нөхцөл</h3>
                  <p className="text-sm text-gray-800">
                    Сүлжээний үйлчилгээний найдвартай байдал
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";

export default function SocialDuties() {
  // Зургуудын дата (Та өөрийн зургаар солиорой)
  const galleryImages = [];

  return (
    <div className="w-full min-h-screen bg-cover bg-[url(/Gurvandelgercity.png)] text-[#111111] font-sans antialiased selection:bg-lime-400">
      {/* 1. Header / Navigation */}
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

          {/* Холбоо барих Button */}
          <Button
            className="bg-[#C1E994] hover:bg-[#b2df82] text-gray-900 px-4 py-2 rounded-full text-xs font-medium transition-all shadow-sm flex items-center"
          >
            <Link href="/contact">Холбоо барих</Link>
          </Button>
        </nav>
        <button className="md:hidden text-white text-3xl">☰</button>
      </header>

      {/* Үндсэн агуулга */}
      <div className="bg-white/95 mt-6 mb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Нийгмийн хариуцлага
          </h1>
          
          <div className="space-y-8">
            {/* Ерөнхий мэдээлэл */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                Байгууллагын нийгмийн хариуцлага
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Гурван Дэлгэр ХХК-ийн байгууллага бүтээн байгуулагдсан үеэс эхлэн бизнесийн амжилтыг дөнгөдтэй нийгэмдээ бүтээж буй үнэ цэнээр хэмжиж ирлээ. Бид үйл ажиллагаанхаа үндсэн зарчим болгон нийгмийн хариуцлагыг эрхэмлэн ажилладаг.
              </p>
            </div>

            {/* Байгалийн орчны хамгаалал */}
            <div className="space-y-3 border-l-4 border-[#C1E994] pl-6">
              <h3 className="text-xl font-semibold text-gray-900">
                🌍 Байгалийн орчны хамгаалал
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Бүх үйл ажиллагаа байгалийн орчин сүлжээтэй үл нийцэх байдлаар явуулдаг</li>
                <li>✓ Хог хаягдал цэвэрлэгээ, дахин ашиглалтын политик баримталдаг</li>
                <li>✓ Сэргээгдэх эрчим хүчний төсөлд идэвхтэй оролцож байна</li>
              </ul>
            </div>

            {/* Өндөрлөгсөн ажилтан */}
            <div className="space-y-3 border-l-4 border-[#C1E994] pl-6">
              <h3 className="text-xl font-semibold text-gray-900">
                👨‍💼 Ажилтнуудын хөгжил, сучуулалт
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Үйлчлүүлэгч, түнш, ажилтнууд болон нийгмийн үнэ цэнэ үйл ажиллагаандаа төвлөрүүлэн ажилладаг</li>
                <li>✓ Чадварлаг мэргэжилтнүүдийн сургалт, хөгжүүлэлтэд санхүүгийн хэмжээгээр дараалан оруулалт хийдэг</li>
                <li>✓ Ажилтнуудын эрүүл мэнд, аюулгүй байдалд онцгой анхаарал хандуулдаг</li>
              </ul>
            </div>

            {/* Нийгмийн түншлэл */}
            <div className="space-y-3 border-l-4 border-[#C1E994] pl-6">
              <h3 className="text-xl font-semibold text-gray-900">
                🤝 Нийгмийн түншлэл
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Сургуулиуд, эмнэлгүүдтэй хамтран ажиллах замаар нийгмийн сайн сайхныг дэмжиж байна</li>
                <li>✓ Аймаг, сумын хөгжилтэй холбоотой төслүүдэд идэвхтэй оролцдог</li>
                <li>✓ Дэлхийн хөгжлийн зорилгуудтай (SDGs) нийцүүлэн ажиллах үйл ажиллагаа явуулдаг</li>
              </ul>
            </div>

            {/* Ил тод засаглал */}
            <div className="space-y-3 border-l-4 border-[#C1E994] pl-6">
              <h3 className="text-xl font-semibold text-gray-900">
                📊 Ил тод засаглал
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Үйл ажиллагаандаа ёс зүйтэй засаглал, итгэл, шударга байдлыг үндэс болгож ажилладаг</li>
                <li>✓ Хүний эрхийн зарчмыг сайтар баримталдаг</li>
                <li>✓ Ажилын үйл ажиллагааны ил байдлыг хүүхэлчүүлдэг</li>
              </ul>
            </div>

            {/* Уул уурхайн хариуцлага */}
            <div className="space-y-3 border-l-4 border-[#C1E994] pl-6">
              <h3 className="text-xl font-semibold text-gray-900">
                ⛏️ Уул уурхайн ажилтнуудын эрхийн хамгаалал
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Уул уурхайн салбарт ажиллаж байгаа уулын төлөвлөгөөнөс сэргээн босгон төлөвлөгөө бий болгож байна</li>
                <li>✓ Уул уурхайн ажилтнуудын нийгмийн даатгал, аюулгүй байдлын ажлыг сайтар явуулдаг</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-cover bg-[url(/Gurvandelgercity.png)] text-[#111111] font-sans antialiased">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between border-b border-gray-200/60">
        <div className="text-xl md:text-3xl font-normal tracking-tight cursor-pointer text-white/90">
          <a href="/">Гурвандэлгэр ХХК</a>
        </div>

        {/* Mobile: нуугдсан nav, Desktop: харагдана */}
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

        {/* Mobile: Hamburger товч */}
        <button className="md:hidden text-white text-3xl">☰</button>
      </header>

      {/* Үндсэн агуулга */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 bg-white/90 mt-6 md:mt-10 rounded-xl">
        {/* Mobile: дээр доор / Desktop: хажуу хажуу */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          {/* Зураг */}
          <div className="flex-shrink-0 flex flex-col items-center gap-3 w-full md:w-auto">
            <div className="w-48 h-64 md:w-64 md:h-80 rounded-xl overflow-hidden shadow-lg bg-gray-200">
              <img
                src="/ceo photo.jpg"
                alt="Захирал"
                className="w-full h-80% object-cover"
              />
            </div>
            <p className="text-sm text-gray-600 text-center max-w-[200px]">
              Гурвандэлгэр ХХК-ийн
              <br />
              Гүйцэтгэх Захирал
            </p>
            <p className="font-bold text-sm text-center">Ш. Сэргэлэн</p>
          </div>

          {/* Текст */}
          <div className="flex-1 relative">
            <div className="hidden md:block absolute -top-4 right-0 text-[#C1E994] text-8xl font-serif leading-none">
              "
            </div>

            <h1 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 md:mb-6 tracking-tight">
              БИЗНЕС БОЛ ИТГЭЛЦЭЛ
            </h1>

            <div className="border-l-4 border-gray-800 pl-4 mb-6">
              <p className="text-xs md:text-sm font-bold italic text-gray-800 leading-relaxed">
                ЮУНЫ ТҮРҮҮНД МАНАЙ КОМПАНИЙН ВЕБ ХУУДСАНД ЗОЧИЛСОН ТА БҮХЭНД
                ТАЛАРХАЛ ИЛЭРХИЙЛЬЕ.
              </p>
              <p className="text-xs md:text-sm font-bold italic text-gray-800 leading-relaxed mt-2">
                ӨНГӨРСӨН ХУГАЦААНД БИД ЭРХЭМ ҮЙЛЧЛҮҮЛЭГЧ, ХАРИЛЦАГЧИДДАА ЧАНАР,
                ХАМГИЙН НАЙДВАРТАЙ, ЧАНАРТАЙ ҮЙЛЧИЛГЭЭ ҮЗҮҮЛЭХИЙГ ЗОРЬЖ ИРЛЭЭ.
              </p>
            </div>

            <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
              Анх 2001 онд ГУРВАН ДЭЛГЭР ХХК бизнесийн салбарт гараагаа
              эхэлснээс хойш бид хамт олныхоо хамтын хүчээр бизнесийн үйл
              ажиллагаагаа улам өргөжүүлж, уул уурхайн тоног төхөөрөмж, барилга,
              үл хөдлөх хөрөнгийн менежмент, дэд бүтэц, инженерингийн салбарт
              өргөжсөн билээ.
            </p>

            <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
              Хүн байгалиасаа өөрийн хийсэн зүйлээсээ эрч хүч авч амьдардаг.
              Түүн шиг бид хийсэн бүтээснээсээ эрч хүч, дараагийн илүү том
              зүйлийг бүтээхийн төлөө ажилладаг. Аажим аажмаар Монголдоо бүтээн
              байгуулж, Монголдоо үнэ цэнэ бий болгохын төлөө зүтгэж байна.
              Чадварлаг Монгол залуус бид хамтдаа ирээдүйн сайхан Монгол орныг
              бий болгохын төлөө хичээн ажиллаж байна.
            </p>

            <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
              Амжилттай, алдаа оноотой хөрөнгө оруулалтуудын хэлхээн дунд
              өнөөдрийн Гурван Дэлгэр бий болжээ. 15 жилийн турш бидэнтэй хамт
              байсан нийт ажилтан албан хаагч, харилцагч, бизнесийн итгэлт түнш
              нартаа чин сэтгэлээсээ баярлалаа. Та бүхэнд эрүүл энх, сайн
              сайхныг хүсье!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

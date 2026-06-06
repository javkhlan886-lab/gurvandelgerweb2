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
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 bg-white/90 mt-6 md:mt-10 rounded-xl space-y-12">
        {/* ТУЗ-ИЙН ДАРГЫН МЭНДЧИЛГЭЭ */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          {/* Зураг */}
          <div className="flex-shrink-0 flex flex-col items-center gap-3 w-full md:w-auto">
            <div className="w-48 h-64 md:w-64 md:h-80 rounded-xl overflow-hidden shadow-lg bg-gray-200">
              <img
                src="/chairman photo.jpg"
                alt="ТУЗ-ийн Дарга"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-gray-600 text-center max-w-[200px]">
              Гурвандэлгэр ХХК-ийн
              <br />
              ТУЗ-ийн Дарга
            </p>
            <p className="font-bold text-sm text-center">Ш. Жавхлан</p>
          </div>

          {/* Текст */}
          <div className="flex-1 relative">
            <div className="hidden md:block absolute -top-4 right-0 text-[#C1E994] text-8xl font-serif leading-none">
              "
            </div>

            <h1 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 md:mb-6 tracking-tight">
              Тогтвортой хөгжлийн төлөө
            </h1>

            <div className="border-l-4 border-gray-800 pl-4 mb-6">
              <p className="text-xs md:text-sm font-bold italic text-gray-800 leading-relaxed">
                ЭРХЭМ ХҮНДЭТ ХАРИЛЦАГЧИД, ХАМТРАН АЖИЛЛАГЧИД, ХӨРӨНГӨ ОРУУЛАГЧ
                ТА БҮХЭНДЭЭ ЭНЭ ӨДРИЙН МЭНДИЙГ ӨРГӨН ДЭВШҮҮЛЬЕ.
              </p>
            </div>

            <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
              Гурван Дэлгэр ХХК байгуулагдсан цагаасаа эхлэн бизнесийн амжилтыг
              зөвхөн санхүүгийн үр дүнгээр бус, харилцан итгэлцэл, ёс зүйтэй
              засаглал, нийгэмдээ бүтээж буй үнэ цэнээр хэмжиж ирсэн билээ.
            </p>

            <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
              Өнөөдрийн хурдацтай өөрчлөгдөж буй дэлхий ертөнцөд байгууллагын
              жинхэнэ хүч чадал нь хөрөнгө, технологид бус харин алсын хараа,
              зөв үнэт зүйлс, чадварлаг хамт олонд оршдог гэж бид үздэг. Иймээс
              бид урт хугацааны тогтвортой өсөлт, ил тод засаглал, нийгмийн
              хариуцлагыг үйл ажиллагааныхаа үндсэн зарчим болгон ажиллаж байна.
            </p>

            <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
              Сүүлийн 15 жилийн хугацаанд бид олон салбарт үйл ажиллагаагаа
              амжилттай өргөжүүлж, харилцагчид, түнш байгууллагууд болон хамтран
              ажиллагчдынхаа итгэлийг хүлээсэн компани болон хөгжсөн нь хамтын
              хүч, хамтын үнэт зүйлийн үр дүн юм.
            </p>

            <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
              Бид зөвхөн өнөөдрийн амжилтаар хязгаарлагдахгүй. Монгол Улсын
              хөгжил дэвшилд хувь нэмэр оруулах, шинэ боломжуудыг бий болгох,
              ирээдүй хойч үедээ үнэ цэнтэй өв үлдээх эрхэм зорилгын төлөө
              тууштай ажиллах болно.
            </p>

            <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
              Гурван Дэлгэр ХХК-ийн хөгжил дэвшлийн замналд хамтран алхаж буй
              нийт харилцагчид, хөрөнгө оруулагчид, түншүүд болон ажилтнуудаа
              чин сэтгэлийн талархал илэрхийлье.
            </p>

            <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-semibold">
              Итгэлцэл биднийг нэгтгэдэг. Үнэт зүйлс биднийг чиглүүлдэг. Ирээдүй
              биднийг урагш хөтөлдэг.
            </p>
          </div>
        </div>

        {/* Хуваагч */}
        <div className="border-t-4 border-black" />

        {/* ГҮЙЦЭТГЭХ ЗАХИРЛЫН ҮГ */}
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
          <div className="flex-1 relative mt-10">
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
              өргөжсөн билээ. Манай компани нь мэргэжлийн өндөр ур чадвартай
              гэрээт болон үндсэн нийлсэн 50-60 гаруй боловсон хүчнийг бүрдүүлж,
              соёлтой үйлчилгээ, шинэлэг үйлдвэрлэл, техник технологийн дэвшлийг
              үйл ажиллагаандаа нэвтэрүүлэн ажиллахыг эрхэмлэн ажилладаг.
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

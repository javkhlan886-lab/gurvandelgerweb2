import React from "react";
import { ArrowRight } from "lucide-react";
// Хэрэв Shadcn UI-ийн Button-ийг суулгасан бол ингэж дуудна:
import { Button } from "@/components/ui/button";
import OurPartners from "./OurPartners";
import Link from "next/link";

export default function HeroSection() {
  // Зургуудын дата (Та өөрийн зургаар солиорой)
  const galleryImages = [];

  return (
    <div className="w-full min-h-screen bg-cover bg-center bg-[url(/Gurvandelgercity.png)] text-[#111111] font-sans antialiased selection:bg-lime-400">
      {/* 1. Header / Navigation */}
      <header className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-gray-200/60">
        {/* ХЭЛБЭРИЙГ НЬ ЗАССАН ШИНЭ СҮҮДЭРТЭЙ, АЛТЛАГ SVG ЛОГО */}
        <Link
          href="/"
          className="flex items-center gap-3.5 group select-none cursor-pointer"
        >
          <svg
            viewBox="0 0 200 200"
            className="w-12 h-12 md:w-14 md:h-14 filter drop-shadow-[0_3px_5px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-105 duration-300"
          >
            <defs>
              {/* Алтлаг металл градиент */}
              <linearGradient id="realGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF293" />
                <stop offset="25%" stopColor="#F4BF24" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="75%" stopColor="#DF9F00" />
                <stop offset="100%" stopColor="#8A5A00" />
              </linearGradient>
            </defs>

            {/* Төгс дугуй гадна хүрээ */}
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="url(#realGold)"
              strokeWidth="11"
            />

            {/* Дотор талын нарийн алтан шугам */}
            <circle
              cx="100"
              cy="100"
              r="77"
              fill="none"
              stroke="url(#realGold)"
              strokeWidth="2"
            />

            {/* Дээд талын таслалтай хагас цагираг нум */}
            <path
              d="M 44 75 A 64 64 0 0 1 156 75"
              fill="none"
              stroke="url(#realGold)"
              strokeWidth="15"
              strokeLinecap="butt"
            />

            {/* Доод талын таслалтай хагас цагираг нум */}
            <path
              d="M 44 125 A 64 64 0 0 0 156 125"
              fill="none"
              stroke="url(#realGold)"
              strokeWidth="15"
              strokeLinecap="butt"
            />

            {/* Хамгийн төв хэсгийн дээд болон доод жижиг хагас нумууд */}
            <path
              d="M 64 100 A 36 36 0 0 1 136 100"
              fill="none"
              stroke="url(#realGold)"
              strokeWidth="15"
              strokeLinecap="butt"
            />
            <path
              d="M 64 100 A 36 36 0 0 0 136 100"
              fill="none"
              stroke="url(#realGold)"
              strokeWidth="15"
              strokeLinecap="butt"
            />
          </svg>

          {/* Зурган дээрх шиг Алтлаг, Сүүдэртэй, Босоодуу Текст */}
          <span
            className="text-xl md:text-2xl font-black tracking-wide uppercase font-sans italic"
            style={{
              background:
                "linear-gradient(135deg, #FFF59E 0%, #F5B800 30%, #FFFCE6 55%, #D49200 85%, #7A4F00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter:
                "drop-shadow(1px 2px 1px rgba(0,0,0,0.9)) drop-shadow(0px 0px 3px rgba(245,184,0,0.3))",
            }}
          >
            Гурван Дэлгэр ХХК
          </span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-white/90 drop-shadow-sm">
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
          <Button className="w-full md:w-auto bg-[#C1E994] hover:bg-[#b2df82] text-gray-900 px-4 py-2 rounded-full text-xs font-medium transition-all shadow-sm flex items-center justify-center">
            <Link href="/contact" className="w-full text-center">
              Холбоо барих
            </Link>
          </Button>

          {/* Аватар */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 via-pink-400 to-blue-500 shadow-inner cursor-pointer hover:scale-105 transition-transform" />
        </nav>
      </header>

      {/* 2. Hero Content Section */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-16 flex flex-col items-center text-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-[68px] font-normal tracking-tight max-w-3xl leading-snug mb-6 text-white drop-shadow-lg">
          
        </h1>
    
        {/* 4. Projects Section - 3 Cards Horizontally */}
        <section className="w-full mt-16 md:mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Project 1: hand-fruit-game */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-orange-300 to-pink-400 flex items-center justify-center">
                <img src="/construction.png" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Барилга Байгууламж
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Бүтээн байгуулсан барилга байгууламжийн зураг төсөл, барилгын
                  ажил гүйцэтгэлийн мэдээлэл.
                </p>
                <Link href="/building">
                <Button className="w-full bg-[#C1E994] hover:bg-[#b2df82] text-gray-900 font-medium">
                  Үзэх →
                </Button>
                </Link>
              </div>
            </div>

            {/* Project 2: movieapp */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br bg-cover flex items-center justify-center">
                <img src="/datacc.png" className="w-100 h-60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Мэдээлэл Технологи
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Мэдээлэл технологийн салбарт хийсэн төсөл, програм хангамжийн
                  хөгжүүлэлт, IT дэд бүтцийн шийдлүүд.
                </p>
                <Link href="/telecom">
                <Button className="w-full bg-[#C1E994] hover:bg-[#b2df82] text-gray-900 font-medium">
                   Үзэх →
                </Button>
                </Link>
              </div>
            </div>

            {/* Project 3: test */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-green-300 to-teal-400 flex items-center justify-center">
                <img src="/gdsolar.png" className="w-100 h-60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Сэргээгдэх эрчим хүч
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Сэргээгдэх эрчим хүчний салбарт хийсэн төсөл, нарны болон
                  салхины эрчим хүчний шийдлүүд.
                </p><Link href="/solar">
                <Button className="w-full bg-[#C1E994] hover:bg-[#b2df82] text-gray-900 font-medium">
                   Үзэх→
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

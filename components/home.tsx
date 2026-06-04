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
      <header className="max-w-7xl mx-auto px-4 py-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-gray-200/60">
        {/* Logo */}
        <div className="text-3xl font-normal tracking-tight cursor-pointer text-white/90">
          <a href="/"> Гурвандэлгэр ХХК</a>
        </div>

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
            <Link href="/ContactUs" className="w-full text-center">
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
        <h1 className="text-4xl sm:text-5xl md:text-[68px] font-normal tracking-tight max-w-3xl leading-snug mb-6 text-[#1C1C1A]"></h1>
        <p className="max-w-2xl text-base sm:text-lg text-gray-700 mb-10 px-2 sm:px-0"></p>

        {/* 4. Projects Section - 3 Cards Horizontally */}
        <section className="w-full mt-16 md:mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Project 1: hand-fruit-game */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-orange-300 to-pink-400 flex items-center justify-center">
                <span className="text-4xl">🏗️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Барилга Байгууламж
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Бүтээн байгуулсан барилга байгууламжийн зураг төсөл, барилгын
                  ажил гүйцэтгэлийн мэдээлэл.
                </p>
                <Button className="w-full bg-[#C1E994] hover:bg-[#b2df82] text-gray-900 font-medium">
                  Үзэх →
                </Button>
              </div>
            </div>

            {/* Project 2: movieapp */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-blue-300 to-purple-400 flex items-center justify-center">
                <span className="text-4xl">💻</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Мэдээлэл Технологи
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Мэдээлэл технологийн салбарт хийсэн төсөл, програм хангамжийн
                  хөгжүүлэлт, IT дэд бүтцийн шийдлүүд.
                </p>
                <Button className="w-full bg-[#C1E994] hover:bg-[#b2df82] text-gray-900 font-medium">
                  Үзэх →
                </Button>
              </div>
            </div>

            {/* Project 3: test */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-green-300 to-teal-400 flex items-center justify-center">
                <span className="text-4xl">⚡</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Сэргээгдэх эрчим хүч
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Сэргээгдэх эрчим хүчний салбарт хийсэн төсөл, нарны болон
                  салхины эрчим хүчний шийдлүүд.
                </p>
                <Button className="w-full bg-[#C1E994] hover:bg-[#b2df82] text-gray-900 font-medium">
                  Үзэх →
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

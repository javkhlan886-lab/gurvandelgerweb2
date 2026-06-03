import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";

export default function Construction() {
  // Зургуудын дата (Та өөрийн зургаар солиорой)
  const galleryImages = [];

  return (
    <div className="w-full min-h-screen bg-cover bg-[url(/Gurvandelgercity.png)] text-[#111111] font-sans antialiased selection:bg-lime-400">
      {/* 1. Header / Navigation */}
      <header className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between border-b border-gray-200/60">
        {/* Logo */}
        <div className="text-3xl font-normal tracking-tight cursor-pointer text-white/90 ">
          <a href="/"> Гурвандэлгэр ХХК</a>
        </div>

        <nav className="flex items-center gap-8 text-sm font-medium text-white/90 drop-shadow-sm">
          <Link
            href="/about"
            className="hover:text-[#C1E994] transition-colors"
          >
            Бидний тухай
          </Link>
          <a
            href="/OurPartnesrs"
            className="hover:text-[#C1E994] transition-colors"
          >
            Партнер байгууллагууд
          </a>
          <a
            href="/ProjectsList"
            className="hover:text-[#C1E994] transition-colors"
          >
            Хийсэн төсөлүүд
          </a>
          <a
            href="/SocialDuties"
            className="hover:text-[#C1E994] transition-colors"
          >
            Нийгмийн хариуцлага
          </a>

          {/* Холбоо барих Button */}
          <Button
            className="bg-[#C1E994]
            hover:bg-[#b2df82] text-gray-900 px-4 py-2 rounded-full text-xs font-medium transition-all shadow-sm flex items-center"
          >
            <Link href="/ContactUs">Холбоо барих</Link>
          </Button>

          {/* Аватар */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 via-pink-400 to-blue-500 shadow-inner cursor-pointer hover:scale-105 transition-transform" />
        </nav>
      </header>
      <h1 className="text-3xl font-bold text-black/90 mt-10 justify-center flex">
        Za end tailbar hesguudee oruulaarai guys
      </h1>
    </div>
  );
}

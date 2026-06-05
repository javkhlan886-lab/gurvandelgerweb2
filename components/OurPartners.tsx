"use client"; // ← энэ мөрийг нэмэх

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Partner() {
  // ... үлдсэн код өөрчлөлтгүй
  const allPartners = [
    {
      name: "Khan Altai Resource",
      logo: "/partners/khanaltai.png",
      desc: "Албан ёсны түнш",
    },
    { name: "ZTE", logo: "/partners/zte.png", desc: "Албан ёсны түнш" },
    { name: "Mobinet", logo: "/partners/mobinet.png", desc: "Албан ёсны түнш" },
    {
      name: "Oyu Tolgoi",
      logo: "/partners/oyutolgoi.png",
      desc: "Албан ёсны түнш",
    },
    { name: "GMobile", logo: "/partners/gmobile.png", desc: "Албан ёсны түнш" },
    {
      name: "Sky Networks",
      logo: "/partners/skynetworks.jpg",
      desc: "Mongolian First Broadband Network Company",
    },
    { name: "МТҮЗ", logo: "/partners/ubtz.jpg", desc: "Албан ёсны түнш" },
    { name: "ТХГ", logo: "/partners/thg.jpg", desc: "Албан ёсны түнш" },
    { name: "NetCom", logo: "/partners/netcom.png", desc: "Албан ёсны түнш" },
    {
      name: "Altgana Resources",
      logo: "/partners/altgana.jpg",
      desc: "Албан ёсны түнш",
    },
    {
      name: "Барилгын хөгжлийн төв",
      logo: "/partners/barilgiinhugjul.jpg",
      desc: "Албан ёсны түнш",
    },
    {
      name: "Дундговь хулд",
      logo: "/partners/dundgovi.png",
      desc: "Албан ёсны түнш",
    },
    {
      name: "Дундговь Өндөршил",
      logo: "/partners/undurshil.png",
      desc: "Албан ёсны түнш",
    },
    {
      name: "Дэлгэрхаан",
      logo: "/partners/delgerhaan.png",
      desc: "Албан ёсны түнш",
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
            Хамтрагч байгууллагууд
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {allPartners.map((partner, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <div className="h-48 bg-gray-50 flex items-center justify-center p-6">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-24 max-w-[180px] object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <div className="p-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900 text-sm mb-1">
                    {partner.name}
                  </p>
                  <p className="text-xs text-gray-500">{partner.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

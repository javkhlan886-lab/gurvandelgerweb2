"use client"; // ← энэ мөрийг нэмэх

import React from "react";
import Header from "./Header";

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
            Түншлэл
          </span>
          <h2 className="mt-5 text-2xl md:text-4xl font-bold tracking-tight text-slate-900">
            Хамтрагч байгууллагууд
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {allPartners.map((partner, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-200 hover:-translate-y-1 transition-all duration-300 bg-white"
            >
              <div className="h-48 bg-slate-50 flex items-center justify-center p-6">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-24 max-w-[180px] object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="p-4 border-t border-slate-100">
                <p className="font-semibold text-slate-900 text-sm mb-1">
                  {partner.name}
                </p>
                <p className="text-xs text-slate-500">{partner.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

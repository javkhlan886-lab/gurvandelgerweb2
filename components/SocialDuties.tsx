import React from "react";
import Header from "./Header";

const SECTIONS = [
  {
    icon: "🌍",
    title: "Байгалийн орчны хамгаалал",
    items: [
      "Хог хаягдал цэвэрлэгээ, дахин ашиглалтын политик баримталдаг",
      "Сэргээгдэх эрчим хүчний төсөлд идэвхтэй оролцож байна",
    ],
  },
  {
    icon: "👨‍💼",
    title: "Ажилтнуудын хөгжил, сучуулалт",
    items: [
      "Үйлчлүүлэгч, түнш, ажилтнууд болон нийгмийн үнэ цэнэ үйл ажиллагаандаа төвлөрүүлэн ажилладаг",
      "Чадварлаг мэргэжилтнүүдийн сургалт, хөгжүүлэлтэд санхүүгийн хэмжээгээр дараалан хөрөнгө оруулалт хийдэг",
      "Ажилтнуудын эрүүл мэнд, аюулгүй байдалд онцгой анхаарал хандуулдаг",
    ],
  },
  {
    icon: "🤝",
    title: "Нийгмийн түншлэл",
    items: [
      "Сургуулиуд, эмнэлгүүдтэй хамтран ажиллах замаар нийгмийн сайн сайхныг дэмжиж байна",
      "Аймаг, сумын хөгжилтэй холбоотой төслүүдэд идэвхтэй оролцдог",
    ],
  },
  {
    icon: "📊",
    title: "Ил тод засаглал",
    items: [
      "Үйл ажиллагаандаа ёс зүйтэй засаглал, итгэл, шударга байдлыг үндэс болгож ажилладаг",
      "Хүний эрхийн зарчмыг сайтар баримталдаг",
      "Ажилын үйл ажиллагааны ил байдлыг дэмждэг",
    ],
  },
  {
    icon: "⛏️",
    title: "Уул уурхайн ажилтнуудын эрхийн хамгаалал",
    items: [
      "Уул уурхайн салбарт ажиллаж байгаа уулын төлөвлөгөөнөс сэргээн босгон төлөвлөгөө бий болгож байна",
      "Уул уурхайн ажилтнуудын нийгмийн даатгал, аюулгүй байдлын ажлыг сайтар явуулдаг",
    ],
  },
];

export default function SocialDuties() {
  return (
    <div className="relative w-full min-h-screen bg-white text-slate-900 font-sans antialiased">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-indigo-400/15 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-cyan-300/15 blur-3xl" />
      </div>

      <Header />

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 shadow-sm">
            Нийгмийн хариуцлага
          </span>
          <h1 className="mt-5 text-2xl md:text-4xl font-bold tracking-tight text-slate-900">
            Байгууллагын нийгмийн хариуцлага
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Гурван Дэлгэр ХХК-ийн байгууллага байгуулагдсан үеэс эхлэн
            бизнесийн амжилтыг нийгэмдээ бүтээж буй үнэ цэнээр хэмжиж ирлээ.
          </p>
        </div>

        <div className="space-y-6">
          {SECTIONS.map((section, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 md:p-8 hover:border-indigo-200 hover:shadow-md transition-all"
            >
              <h2 className="text-lg md:text-xl font-semibold text-slate-900 flex items-center gap-3 mb-4">
                <span className="text-2xl">{section.icon}</span>
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.items.map((item, j) => (
                  <li key={j} className="flex gap-2 text-sm text-slate-600">
                    <span className="text-indigo-600 font-bold mt-0.5">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

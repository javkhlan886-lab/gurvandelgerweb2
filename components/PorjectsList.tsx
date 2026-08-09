"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import Header from "./Header";
import { useLanguage } from "@/lib/i18n";

const CONSTRUCTION_ENG: Record<string, string> = {
  mn: "Барилга угсралт, инженерингийн ажил",
  en: "Construction and engineering works",
  ko: "건설 및 엔지니어링 사업",
  zh: "建筑安装与工程业务",
};
const CCTV: Record<string, string> = {
  mn: "Камерын хяналтын систем",
  en: "CCTV surveillance systems",
  ko: "CCTV 보안 시스템",
  zh: "监控摄像系统",
};

const PROJECTS = [
  {
    name: "Хан-Алтай Ресурс ХХК",
    logo: "/projects/khanaltai.png",
    desc: CONSTRUCTION_ENG,
    items: {
      mn: [
        "2022 онд Хайлуулах үйлдвэрийн барилгын дээвэр, хана дүүргэлт, шал талбай цутгалтын ажил",
        "2023 онд Урвалжийн агуулах барилгыг ерөнхий гүйцэтгэгчээр ажиллан Улсын комиссд хүлээлгэн өгч ашиглалтад оруулсан",
        "2024 онд Төв аймаг Лүн суманд байрлах уурхайн Ажилчидын орон сууцны барилгын 124м*14м барилгын суурь, ханын угсралтын ажил",
        "2024 онд Төв аймаг Лүн суманд байрлах уурхайн Оффис, гал тогоо барилгын 62м*14м барилгын бетон хийц",
      ],
      en: [
        "2022 — Roofing, wall cladding, and floor concrete works for a smelting plant building",
        "2023 — Acted as general contractor for a reagent warehouse building, completed and handed over to the State Commission for operation",
        "2024 — Foundation and wall installation for a 124m×14m mine workers' housing building in Luun soum, Töv province",
        "2024 — Concrete structural works for a 62m×14m mine office and kitchen building in Luun soum, Töv province",
      ],
      ko: [
        "2022년 제련 공장 건물의 지붕, 외벽 마감, 바닥 콘크리트 타설 공사",
        "2023년 시약 창고 건물의 종합시공사로서 시공을 완료하여 국가위원회에 인계하고 준공",
        "2024년 톱 아이막 룬 솜 소재 광산 근로자 숙소(124m×14m) 기초 및 벽체 시공",
        "2024년 톱 아이막 룬 솜 소재 광산 사무실 및 주방 건물(62m×14m) 콘크리트 구조 공사",
      ],
      zh: [
        "2022年 — 熔炼厂厂房屋顶、墙体填充及地面浇筑工程",
        "2023年 — 作为总承包商完成试剂仓库建筑，并移交国家验收委员会投入使用",
        "2024年 — 图布省伦苏木矿山职工宿舍楼（124米×14米）基础及墙体施工",
        "2024年 — 图布省伦苏木矿山办公及厨房楼（62米×14米）混凝土结构工程",
      ],
    },
  },
  {
    name: "Хасу-Мегаватт ХХК",
    logo: "/projects/khasu.jpg",
    desc: CONSTRUCTION_ENG,
    items: {
      mn: [
        "2023 онд Хэнтий аймаг Дэлгэрхаан сумд байрлах Монголын нууц товчооны интерьерийг бүтэн дуусгасан",
      ],
      en: [
        "2023 — Fully completed the interior works of the Secret History of the Mongols complex in Delgerkhaan soum, Khentii province",
      ],
      ko: [
        "2023년 헨티 아이막 델게르한 솜 소재 몽골비사 단지 인테리어 공사 완료",
      ],
      zh: [
        "2023年 — 完成肯特省德勒格尔汗苏木蒙古秘史建筑群室内装修工程",
      ],
    },
  },
  {
    name: "Трипл Маржин ХХК",
    logo: "/projects/triple.jpg",
    desc: CCTV,
    items: {
      mn: ["2024 онд камерын хяналтын систем нийлүүлэх суурилуулах ажил"],
      en: ["2024 — Supply and installation of CCTV surveillance system"],
      ko: ["2024년 CCTV 보안 시스템 공급 및 설치"],
      zh: ["2024年 — 监控摄像系统供货与安装工程"],
    },
  },
  {
    name: "ZTE ХХК",
    logo: "/projects/zte.png",
    desc: {
      mn: "Шилэн кабель татах ажил",
      en: "Fiber optic cable installation",
      ko: "광케이블 포설 작업",
      zh: "光纤电缆铺设工程",
    },
    items: {
      mn: [
        "2025 онд Төв аймгийн Мөнгөн морьт суманд 60км газрын шилэн кабель татах ажил",
      ],
      en: [
        "2025 — Installation of 60km of underground fiber optic cable in Möngönmorit soum, Töv province",
      ],
      ko: [
        "2025년 톱 아이막 뭉근모리트 솜 지역 60km 지하 광케이블 포설 작업",
      ],
      zh: [
        "2025年 — 图布省蒙根莫日特苏木60公里地下光纤电缆铺设工程",
      ],
    },
  },
  {
    name: "Алтгана Ресурсес ХХК",
    logo: "/projects/altgana.jpg",
    desc: {
      mn: "Насос станцын барилга угсралт",
      en: "Pump station construction",
      ko: "펌프장 건설",
      zh: "泵站建筑安装",
    },
    items: {
      mn: [
        '2026 онд Төв аймгийн Лүн сумын нутаг дэвсгэрт байрлах "Баян уусмал, агаар өгөх насос станц"-ын суурийн барилга угсралтын ажил',
        '2026 онд Төв аймгийн Лүн сумын нутаг дэвсгэрт байрлах "Ядуу уусмалын насос станц"-ын суурийн барилга угсралтын ажил',
      ],
      en: [
        '2026 — Foundation construction for the "Bayan Uusmal Air Supply Pump Station" in Luun soum, Töv province',
        '2026 — Foundation construction for the "Yaduu Uusmal Pump Station" in Luun soum, Töv province',
      ],
      ko: [
        '2026년 톱 아이막 룬 솜 소재 "바얀 우스말 송기 펌프장" 기초 시공',
        '2026년 톱 아이막 룬 솜 소재 "야도 우스말 펌프장" 기초 시공',
      ],
      zh: [
        '2026年 — 图布省伦苏木"巴彦乌斯玛尔送风泵站"基础建筑安装工程',
        '2026年 — 图布省伦苏木"亚都乌斯玛尔泵站"基础建筑安装工程',
      ],
    },
  },
  {
    name: "Эм Ди Эс Коммуникэшн ХХК",
    logo: "/projects/mds.avif",
    desc: CCTV,
    items: {
      mn: ["2025 онд камерын хяналтын систем нийлүүлэх суурилуулах ажил"],
      en: ["2025 — Supply and installation of CCTV surveillance system"],
      ko: ["2025년 CCTV 보안 시스템 공급 및 설치"],
      zh: ["2025年 — 监控摄像系统供货与安装工程"],
    },
  },
  {
    name: "Блүүм мибел АКА сервис технологи ХХК",
    logo: "/projects/bloom.jpeg",
    desc: CCTV,
    items: {
      mn: ["2025 онд камерын хяналтын систем нийлүүлэх суурилуулах ажил"],
      en: ["2025 — Supply and installation of CCTV surveillance system"],
      ko: ["2025년 CCTV 보안 시스템 공급 및 설치"],
      zh: ["2025年 — 监控摄像系统供货与安装工程"],
    },
  },
] as const;

export default function Projects() {
  const { t, lang } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="relative w-full min-h-screen bg-white text-slate-900 font-sans antialiased">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-indigo-400/15 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-cyan-300/15 blur-3xl" />
      </div>

      <Header />

      {/* Үндсэн агуулга */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 shadow-sm">
            {t("projects.badge")}
          </span>
          <h2 className="mt-5 text-2xl md:text-4xl font-bold tracking-tight text-slate-900">
            {t("projects.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              className="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-200 transition-all cursor-pointer hover:-translate-y-1 bg-white"
            >
              {/* Логоны хэсэг */}
              <div className="relative h-48 bg-slate-50 p-6">
                <Image
                  src={project.logo}
                  alt={project.name}
                  fill
                  sizes="180px"
                  className="object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Текстийн хэсэг */}
              <div className="p-4 border-t border-slate-100">
                <p className="font-semibold text-slate-900 text-sm mb-1">
                  {project.name}
                </p>
                <p className="text-xs text-slate-500">{project.desc[lang]}</p>
                <p className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-indigo-600">
                  {t("projects.viewMore")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal — дэлгэрэнгүй */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Хаах товч */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700"
            >
              <X size={20} />
            </button>

            {/* Лого */}
            <div className="relative h-20 mb-4">
              <Image
                src={PROJECTS[selected].logo}
                alt={PROJECTS[selected].name}
                fill
                sizes="160px"
                className="object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-1">
              {PROJECTS[selected].name}
            </h3>
            <p className="text-sm text-slate-500 mb-4">
              {PROJECTS[selected].desc[lang]}
            </p>

            <ul className="space-y-3">
              {PROJECTS[selected].items[lang].map((item, j) => (
                <li key={j} className="flex gap-2 text-sm text-slate-700">
                  <span className="text-indigo-600 font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

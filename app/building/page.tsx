"use client";

import React from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import { useLanguage } from "@/lib/i18n";

const INTRO = {
  mn: (
    <>
      "Гурван дэлгэр" ХХК нь худалдаа үйлчилгээ, барилга угсралт, сэргээгдэх
      эрчим хүч, харилцаа холбооны шугам сүлжээний угсралт суурилуулалтын үйл
      ажиллагаа эрхлэх зорилготойгоор{" "}
      <span className="font-bold text-slate-900">2011 онд</span> үүсгэн
      байгуулагдсан. Манай компани нь мэргэжлийн өндөр ур чадвартай гэрээт
      болон үндсэн нийлсэн{" "}
      <span className="font-bold text-slate-900">50-60 гаруй</span> боловсон
      хүчнийг бүрдүүлж, соёлтой үйлчилгээ, шинэлэг үйлдвэрлэл, техник
      технологийн дэвшлийг үйл ажиллагаандаа нэвтэрүүлэн ажиллахыг эрхэмлэн
      ажилладаг.
    </>
  ),
  en: (
    <>
      Gurvan Delger LLC was founded in{" "}
      <span className="font-bold text-slate-900">2011</span> to operate in
      trade and services, construction, renewable energy, and
      telecommunications network installation. Our company brings together{" "}
      <span className="font-bold text-slate-900">more than 50-60</span>{" "}
      highly skilled contracted and full-time professionals, and we take
      pride in delivering professional service while embracing innovation and
      technological advancement in everything we do.
    </>
  ),
  ko: (
    <>
      Gurvan Delger LLC는{" "}
      <span className="font-bold text-slate-900">2011년</span> 무역 및
      서비스업, 건설업, 신재생 에너지, 통신망 설치 사업을 목적으로
      설립되었습니다. 저희 회사는 계약직과 정규직을 포함해{" "}
      <span className="font-bold text-slate-900">50~60여 명</span>의
      고숙련 전문 인력을 갖추고 있으며, 전문적인 서비스와 함께 혁신 및 기술
      발전을 사업 전반에 도입하는 것을 자랑으로 여기고 있습니다.
    </>
  ),
  zh: (
    <>
      Gurvan Delger LLC 成立于{" "}
      <span className="font-bold text-slate-900">2011年</span>
      ，致力于贸易服务、建筑安装、可再生能源及通信网络安装等业务。公司现拥有
      <span className="font-bold text-slate-900">50至60余名</span>
      高素质的合同工及正式员工，我们始终以提供专业服务、并在各项业务中引入创新与技术进步为荣。
    </>
  ),
} as const;

const projects = [
  {
    year: "2022",
    client: "Хан-Алтай Ресурс ХХК",
    title: {
      mn: "Хайлуулах үйлдвэрийн барилга",
      en: "Smelting Plant Building",
      ko: "제련 공장 건물",
      zh: "熔炼厂厂房",
    },
    description: {
      mn: "Хайлуулах үйлдвэрийн барилгын дээвэр, хана дүүргэлт, шал талбай цутгалтын ажлыг гүйцэтгэсэн.",
      en: "Completed roofing, wall cladding, and floor concrete works for a smelting plant building.",
      ko: "제련 공장 건물의 지붕, 외벽 마감, 바닥 콘크리트 타설 공사를 수행했습니다.",
      zh: "完成熔炼厂厂房的屋顶、墙体填充及地面浇筑工程。",
    },
    images: ["/projects/uusmal.png", "/projects/uusmal2.png"],
    tags: {
      mn: ["Барилга угсралт", "Дээвэр", "Хана дүүргэлт"],
      en: ["Construction", "Roofing", "Wall Cladding"],
      ko: ["건설", "지붕", "외벽 마감"],
      zh: ["建筑安装", "屋顶工程", "墙体填充"],
    },
  },
  {
    year: "2023",
    client: "Хан-Алтай Ресурс ХХК",
    title: {
      mn: "Урвалжийн агуулах барилга",
      en: "Reagent Warehouse Building",
      ko: "시약 창고 건물",
      zh: "试剂仓库",
    },
    description: {
      mn: "Урвалжийн агуулах барилгыг ерөнхий гүйцэтгэгчээр ажиллан бүрэн дуусгаж, Улсын комисст хүлээлгэн өгч ашиглалтад оруулсан.",
      en: "Acted as general contractor to fully complete a reagent warehouse building, handed over to the State Commission for operation.",
      ko: "시약 창고 건물의 종합시공사로서 시공을 완료하여 국가위원회에 인계 및 준공했습니다.",
      zh: "作为总承包商完成试剂仓库建筑，并移交国家验收委员会投入使用。",
    },
    images: ["/projects/object1.png", "/projects/object2.png", "/projects/object3.png"],
    tags: {
      mn: ["Ерөнхий гүйцэтгэгч", "Агуулах барилга", "Улсын комисс"],
      en: ["General Contractor", "Warehouse", "State Commission"],
      ko: ["종합시공사", "창고 건물", "국가위원회"],
      zh: ["总承包", "仓库建筑", "国家验收"],
    },
  },
  {
    year: "2023",
    client: "Хасу-Мегаватт ХХК",
    title: {
      mn: "Монголын нууц товчоо цогцолборын интерьер",
      en: "Secret History of the Mongols Complex Interior",
      ko: "몽골비사 단지 인테리어",
      zh: "蒙古秘史建筑群室内装修",
    },
    description: {
      mn: "Хэнтий аймаг, Дэлгэрхаан сумд байрлах Монголын нуур товчоо цогцолборын интерьерийн ажлыг бүтэн дуусгасан.",
      en: "Fully completed the interior works of the Secret History of the Mongols complex in Delgerkhaan soum, Khentii province.",
      ko: "헨티 아이막 델게르한 솜 소재 몽골비사 단지 인테리어 공사를 완료했습니다.",
      zh: "完成肯特省德勒格尔汗苏木蒙古秘史建筑群室内装修工程。",
    },
    images: ["/projects/tour1.png", "/projects/tour2.png", "/projects/tour3.png"],
    tags: {
      mn: ["Интерьер", "Цогцолбор", "Хэнтий аймаг"],
      en: ["Interior", "Complex", "Khentii Province"],
      ko: ["인테리어", "단지", "헨티 아이막"],
      zh: ["室内装修", "建筑群", "肯特省"],
    },
  },
  {
    year: "2024",
    client: "Хан-Алтай Ресурс ХХК",
    title: {
      mn: "Уурхайн ажилчдын орон сууц — суурь, хана угсралт",
      en: "Mine Workers' Housing — Foundation & Wall Installation",
      ko: "광산 근로자 숙소 — 기초 및 벽체 시공",
      zh: "矿山职工宿舍 — 基础及墙体施工",
    },
    description: {
      mn: "Төв аймаг, Лүн суманд байрлах уурхайн ажилчдын орон сууцны барилгын 124м×14м барилгын суурь болон ханын угсралтын ажлыг гүйцэтгэсэн.",
      en: "Completed foundation and wall installation for a 124m×14m mine workers' housing building in Luun soum, Töv province.",
      ko: "톱 아이막 룬 솜 소재 광산 근로자 숙소(124m×14m) 기초 및 벽체 시공을 수행했습니다.",
      zh: "完成图布省伦苏木矿山职工宿舍楼（124米×14米）基础及墙体施工。",
    },
    images: ["/projects/object4.png", "/projects/object5.png"],
    tags: {
      mn: ["Орон сууц", "Суурь угсралт", "Төв аймаг — Лүн сум"],
      en: ["Housing", "Foundation", "Töv Province — Luun Soum"],
      ko: ["주거시설", "기초시공", "톱 아이막 — 룬 솜"],
      zh: ["住宅楼", "基础工程", "图布省 — 伦苏木"],
    },
  },
  {
    year: "2024",
    client: "Хан-Алтай Ресурс ХХК",
    title: {
      mn: "Уурхайн оффис, гал тогооны барилга",
      en: "Mine Office & Kitchen Building",
      ko: "광산 사무실 및 주방 건물",
      zh: "矿山办公及厨房楼",
    },
    description: {
      mn: "Төв аймаг, Лүн суманд байрлах уурхайн Оффис болон гал тогооны барилгын 62м×14м барилгын бетон хийц зэрэг томоохон ажлуудыг гүйцэтгэсэн.",
      en: "Completed major works including concrete structures for a 62m×14m mine office and kitchen building in Luun soum, Töv province.",
      ko: "톱 아이막 룬 솜 소재 광산 사무실 및 주방 건물(62m×14m)의 콘크리트 구조 공사 등 주요 시공을 수행했습니다.",
      zh: "完成图布省伦苏木矿山办公及厨房楼（62米×14米）混凝土结构等主要工程。",
    },
    images: ["/projects/object6.png"],
    tags: {
      mn: ["Оффис барилга", "Бетон хийц", "Төв аймаг — Лүн сум"],
      en: ["Office Building", "Concrete Structure", "Töv Province — Luun Soum"],
      ko: ["사무실 건물", "콘크리트 구조", "톱 아이막 — 룬 솜"],
      zh: ["办公楼", "混凝土结构", "图布省 — 伦苏木"],
    },
  },
  {
    year: "2026",
    client: "Алтгана Ресурсес ХХК",
    title: {
      mn: '"Баян уусмал, агаар өгөх насос станц" суурийн барилга',
      en: '"Bayan Uusmal Air Supply Pump Station" Foundation',
      ko: '"바얀 우스말 송기 펌프장" 기초 공사',
      zh: '"巴彦乌斯玛尔送风泵站"基础工程',
    },
    description: {
      mn: 'Төв аймгийн Лүн сумын нутаг дэвсгэрт байрлах Хөгжил төсөл буюу "Баян уусмал, агаар өгөх насос станц"-ын суурийн барилга угсралтын ажлыг гүйцэтгэж байна.',
      en: 'Currently carrying out foundation construction for the "Bayan Uusmal Air Supply Pump Station" development project in Luun soum, Töv province.',
      ko: '톱 아이막 룬 솜 지역의 개발 프로젝트인 "바얀 우스말 송기 펌프장" 기초 시공을 진행 중입니다.',
      zh: '正在为图布省伦苏木开发项目"巴彦乌斯玛尔送风泵站"进行基础建筑施工。',
    },
    images: [] as string[],
    tags: {
      mn: ["Насос станц", "Суурийн барилга", "Төв аймаг — Лүн сум"],
      en: ["Pump Station", "Foundation", "Töv Province — Luun Soum"],
      ko: ["펌프장", "기초공사", "톱 아이막 — 룬 솜"],
      zh: ["泵站", "基础工程", "图布省 — 伦苏木"],
    },
  },
  {
    year: "2026",
    client: "Алтгана Ресурсес ХХК",
    title: {
      mn: '"Ядуу уусмалын насос станц" суурийн барилга',
      en: '"Yaduu Uusmal Pump Station" Foundation',
      ko: '"야도 우스말 펌프장" 기초 공사',
      zh: '"亚都乌斯玛尔泵站"基础工程',
    },
    description: {
      mn: 'Төв аймгийн Лүн сумын нутаг дэвсгэрт байрлах Хөгжил төсөл буюу "Ядуу уусмалын насос станц"-ын суурийн барилга угсралтын ажлыг гүйцэтгэж байна.',
      en: 'Currently carrying out foundation construction for the "Yaduu Uusmal Pump Station" development project in Luun soum, Töv province.',
      ko: '톱 아이막 룬 솜 지역의 개발 프로젝트인 "야도 우스말 펌프장" 기초 시공을 진행 중입니다.',
      zh: '正在为图布省伦苏木开发项目"亚都乌斯玛尔泵站"进行基础建筑施工。',
    },
    images: [] as string[],
    tags: {
      mn: ["Насос станц", "Суурийн барилга", "Төв аймаг — Лүн сум"],
      en: ["Pump Station", "Foundation", "Töv Province — Luun Soum"],
      ko: ["펌프장", "기초공사", "톱 아이막 — 룬 솜"],
      zh: ["泵站", "基础工程", "图布省 — 伦苏木"],
    },
  },
] as const;

const galleryImages = [
  {
    src: "/projects/uusmal.png",
    caption: {
      mn: "Хан-Алтай Ресурс ХХК — агуулах барилгын бүтэц",
      en: "Khan-Altai Resource LLC — Warehouse Structure",
      ko: "칸알타이 리소스 — 창고 건물 구조",
      zh: "汗阿勒泰资源公司 — 仓库结构",
    },
  },
  {
    src: "/projects/uusmal2.png",
    caption: {
      mn: "Хан-Алтай Ресурс ХХК — ханын угсралтын ажил",
      en: "Khan-Altai Resource LLC — Wall Installation",
      ko: "칸알타이 리소스 — 벽체 시공",
      zh: "汗阿勒泰资源公司 — 墙体施工",
    },
  },
  {
    src: "/projects/tour1.png",
    caption: {
      mn: "Хасу-Мегаватт ХХК — цогцолборын барилга",
      en: "Khasu-Megawatt LLC — Complex Building",
      ko: "하수메가와트 — 복합 건물",
      zh: "哈苏兆瓦公司 — 建筑群",
    },
  },
  {
    src: "/projects/object1.png",
    caption: {
      mn: "Барилгын суурийн бетон цутгалт",
      en: "Building Foundation Concrete Pour",
      ko: "건물 기초 콘크리트 타설",
      zh: "建筑基础混凝土浇筑",
    },
  },
  {
    src: "/projects/object3.png",
    caption: {
      mn: "Ажилчдын орон сууц — дотор засал",
      en: "Workers' Housing — Interior Finishing",
      ko: "근로자 숙소 — 내부 마감",
      zh: "职工宿舍 — 室内装修",
    },
  },
  {
    src: "/projects/object6.png",
    caption: {
      mn: "Лүн сум — уурхайн барилгын ажил",
      en: "Luun Soum — Mine Construction Works",
      ko: "룬 솜 — 광산 건설 공사",
      zh: "伦苏木 — 矿山建筑工程",
    },
  },
] as const;

export default function BuildingPage() {
  const { t, lang } = useLanguage();

  return (
    <div className="relative w-full min-h-screen bg-white text-slate-900 font-sans antialiased">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-indigo-400/15 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-cyan-300/15 blur-3xl" />
      </div>

      <Header />

      {/* Товч танилцуулга */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-10 md:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 shadow-sm">
          {t("building.badge")}
        </span>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h1 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              {t("building.introTitle")}
            </h1>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              {INTRO[lang]}
            </p>
          </div>
          <div className="relative flex-shrink-0 w-full md:w-80 h-52 rounded-xl overflow-hidden shadow-lg bg-slate-100">
            <Image
              src="/projects/team.png"
              alt={t("building.teamAlt")}
              fill
              sizes="(min-width: 768px) 320px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Үндсэн агуулга */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
        {/* Гарчиг */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
            {t("building.projectsTitle")}
          </h2>
        </div>

        {/* Төслүүдийн timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-[88px] top-0 bottom-0 w-0.5 bg-indigo-200" />
          <div className="flex flex-col gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-4 md:gap-8"
              >
                {/* Он */}
                <div className="flex-shrink-0 flex md:flex-col items-center md:items-end gap-3 md:gap-1 w-full md:w-20">
                  <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-black text-sm px-3 py-1.5 rounded-lg shadow-sm">
                    {project.year}
                  </div>
                  <div className="hidden md:block w-3 h-3 rounded-full bg-indigo-500 mt-1 relative z-10" />
                </div>

                {/* Агуулга */}
                <div className="flex-1 rounded-xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all">
                  <p className="text-xs text-slate-500 font-medium mb-1">
                    {project.client}
                  </p>
                  <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">
                    {project.title[lang]}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {project.description[lang]}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags[lang].map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {project.images.map((img, i) => (
                        <div
                          key={i}
                          className="relative h-32 rounded-lg overflow-hidden bg-slate-100"
                        >
                          <Image
                            src={img}
                            alt={`${project.title[lang]} ${i + 1}`}
                            fill
                            sizes="(min-width: 768px) 200px, 45vw"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Зургийн галерей */}
        <div className="mt-14">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight mb-6">
            {t("building.galleryTitle")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="group relative rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100 h-48 md:h-60"
              >
                <Image
                  src={img.src}
                  alt={img.caption[lang]}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs">{img.caption[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

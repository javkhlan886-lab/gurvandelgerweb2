"use client";

import React from "react";
import Header from "./Header";
import { useLanguage } from "@/lib/i18n";

const SECTIONS = [
  {
    icon: "🌍",
    title: {
      mn: "Байгалийн орчны хамгаалал",
      en: "Environmental Protection",
      ko: "환경 보호",
      zh: "环境保护",
    },
    items: {
      mn: [
        "Хог хаягдал цэвэрлэгээ, дахин ашиглалтын политик баримталдаг",
        "Сэргээгдэх эрчим хүчний төсөлд идэвхтэй оролцож байна",
      ],
      en: [
        "We follow a waste management and recycling policy",
        "We actively participate in renewable energy projects",
      ],
      ko: [
        "폐기물 관리 및 재활용 정책을 준수하고 있습니다",
        "신재생 에너지 프로젝트에 적극적으로 참여하고 있습니다",
      ],
      zh: [
        "我们践行废弃物清理与循环利用政策",
        "积极参与可再生能源项目",
      ],
    },
  },
  {
    icon: "👨‍💼",
    title: {
      mn: "Ажилтнуудын хөгжил, сучуулалт",
      en: "Employee Development & Training",
      ko: "임직원 역량 개발 및 교육",
      zh: "员工发展与培训",
    },
    items: {
      mn: [
        "Үйлчлүүлэгч, түнш, ажилтнууд болон нийгмийн үнэ цэнэ үйл ажиллагаандаа төвлөрүүлэн ажилладаг",
        "Чадварлаг мэргэжилтнүүдийн сургалт, хөгжүүлэлтэд санхүүгийн хэмжээгээр дараалан хөрөнгө оруулалт хийдэг",
        "Ажилтнуудын эрүүл мэнд, аюулгүй байдалд онцгой анхаарал хандуулдаг",
      ],
      en: [
        "We center our operations on the value we create for customers, partners, employees, and society",
        "We consistently invest financial resources in training and developing skilled professionals",
        "We pay special attention to the health and safety of our employees",
      ],
      ko: [
        "고객, 파트너, 임직원 및 사회를 위한 가치 창출을 사업 운영의 중심에 두고 있습니다",
        "유능한 전문 인력의 교육 및 역량 개발에 지속적으로 재정을 투자하고 있습니다",
        "임직원의 건강과 안전에 특별한 관심을 기울이고 있습니다",
      ],
      zh: [
        "我们将为客户、合作伙伴、员工及社会创造价值作为经营活动的核心",
        "持续投入资金用于培养和发展高素质专业人才",
        "高度重视员工的健康与安全",
      ],
    },
  },
  {
    icon: "🤝",
    title: {
      mn: "Нийгмийн түншлэл",
      en: "Social Partnership",
      ko: "사회적 파트너십",
      zh: "社会合作",
    },
    items: {
      mn: [
        "Сургуулиуд, эмнэлгүүдтэй хамтран ажиллах замаар нийгмийн сайн сайхныг дэмжиж байна",
        "Аймаг, сумын хөгжилтэй холбоотой төслүүдэд идэвхтэй оролцдог",
      ],
      en: [
        "We support community wellbeing by collaborating with schools and hospitals",
        "We actively participate in projects related to provincial and local development",
      ],
      ko: [
        "학교 및 병원과의 협력을 통해 지역사회의 복지를 지원하고 있습니다",
        "지방 및 지역 발전과 관련된 프로젝트에 적극적으로 참여하고 있습니다",
      ],
      zh: [
        "通过与学校、医院合作，支持社会福祉建设",
        "积极参与省、县发展相关项目",
      ],
    },
  },
  {
    icon: "📊",
    title: {
      mn: "Ил тод засаглал",
      en: "Transparent Governance",
      ko: "투명 경영",
      zh: "透明治理",
    },
    items: {
      mn: [
        "Үйл ажиллагаандаа ёс зүйтэй засаглал, итгэл, шударга байдлыг үндэс болгож ажилладаг",
        "Хүний эрхийн зарчмыг сайтар баримталдаг",
        "Ажилын үйл ажиллагааны ил байдлыг дэмждэг",
      ],
      en: [
        "We base our operations on ethical governance, trust, and integrity",
        "We firmly uphold human rights principles",
        "We promote transparency across all our operations",
      ],
      ko: [
        "윤리적 경영, 신뢰, 그리고 정직을 사업 운영의 기반으로 삼고 있습니다",
        "인권 원칙을 철저히 준수하고 있습니다",
        "모든 업무 활동의 투명성을 추구하고 있습니다",
      ],
      zh: [
        "以合乎道德的治理、信任与诚信作为经营的基础",
        "切实遵守人权原则",
        "倡导各项业务活动的透明化",
      ],
    },
  },
  {
    icon: "⛏️",
    title: {
      mn: "Уул уурхайн ажилтнуудын эрхийн хамгаалал",
      en: "Protecting the Rights of Mining Workers",
      ko: "광산 근로자의 권리 보호",
      zh: "保障矿业从业人员权益",
    },
    items: {
      mn: [
        "Уул уурхайн салбарт ажиллаж байгаа уулын төлөвлөгөөнөс сэргээн босгон төлөвлөгөө бий болгож байна",
        "Уул уурхайн ажилтнуудын нийгмийн даатгал, аюулгүй байдлын ажлыг сайтар явуулдаг",
      ],
      en: [
        "We develop land reclamation and restoration plans for the mining sites we operate in",
        "We diligently manage social insurance and safety protections for mining workers",
      ],
      ko: [
        "당사가 운영하는 광산 부지에 대한 토지 복구 및 재생 계획을 수립하고 있습니다",
        "광산 근로자의 사회보험 및 안전 관리를 철저히 시행하고 있습니다",
      ],
      zh: [
        "针对所运营的矿区制定土地修复与恢复计划",
        "严格落实矿业从业人员的社会保险与安全保障工作",
      ],
    },
  },
] as const;

export default function SocialDuties() {
  const { t, lang } = useLanguage();

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
            {t("social.badge")}
          </span>
          <h1 className="mt-5 text-2xl md:text-4xl font-bold tracking-tight text-slate-900">
            {t("social.title")}
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed">
            {t("social.subtitle")}
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
                {section.title[lang]}
              </h2>
              <ul className="space-y-2">
                {section.items[lang].map((item, j) => (
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

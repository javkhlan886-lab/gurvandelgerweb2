"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "mn" | "en" | "ko" | "zh";

export const LANGUAGES: { code: Lang; label: string; flag: string }[] = [
  { code: "mn", label: "Монгол", flag: "/flags/mn.png" },
  { code: "en", label: "English", flag: "/flags/en.png" },
  { code: "ko", label: "한국어", flag: "/flags/ko.png" },
  { code: "zh", label: "中文", flag: "/flags/zh.png" },
];

const dict = {
  "nav.about": { mn: "Бидний тухай", en: "About Us", ko: "회사 소개", zh: "关于我们" },
  "nav.partner": { mn: "Партнер байгууллагууд", en: "Partners", ko: "파트너사", zh: "合作伙伴" },
  "nav.projects": { mn: "Хийсэн төсөлүүд", en: "Projects", ko: "프로젝트", zh: "项目案例" },
  "nav.social": { mn: "Нийгмийн хариуцлага", en: "Social Responsibility", ko: "사회적 책임", zh: "社会责任" },
  "nav.products": { mn: "Бүтээгдхүүн", en: "Products", ko: "제품", zh: "产品" },
  "nav.viewAllProducts": { mn: "Бүх бүтээгдэхүүн үзэх", en: "View all products", ko: "모든 제품 보기", zh: "查看全部产品" },
  "product.pnl.desc": {
    mn: "Компанийн орлого, зарлагыг нэг дороос удирдах, эрхийн түвшин тохируулах санхүүгийн систем.",
    en: "A financial system for managing company revenue and expenses in one place, with role-based access.",
    ko: "회사의 수익과 지출을 한곳에서 관리하고 권한을 설정하는 재무 시스템입니다.",
    zh: "一站式管理公司收入与支出并设置权限的财务系统。",
  },

  "footer.contact": { mn: "ХОЛБОО БАРИХ", en: "CONTACT US", ko: "문의하기", zh: "联系我们" },
  "footer.developedBy": {
    mn: "Вэбсайтыг Гурвандэлгэр ХХК хөгжүүлэв",
    en: "Website developed by Gurvandelger LLC",
    ko: "본 웹사이트는 Gurvandelger LLC에서 제작하였습니다",
    zh: "本网站由 Gurvandelger LLC 开发",
  },

  "home.badge": { mn: "Барилга · IT · Сэргээгдэх эрчим хүч", en: "Construction · IT · Renewable Energy", ko: "건설 · IT · 신재생 에너지", zh: "建筑 · IT · 可再生能源" },
  "home.title1": { mn: "Ирээдүйн шийдлийг", en: "Building the future,", ko: "미래의 솔루션을,", zh: "从今天开始，" },
  "home.titleHighlight": { mn: "өнөөдрөөс", en: "starting today", ko: "오늘부터", zh: "打造未来解决方案" },
  "home.title2": { mn: "бүтээж байна", en: "", ko: "만들어갑니다", zh: "" },
  "home.subtitle": {
    mn: "Гурван Дэлгэр ХХК нь барилга байгууламж, мэдээлэл технологи, сэргээгдэх эрчим хүчний салбарт 15 жилийн туршид итгэл, чанартай үйлчилгээ үзүүлж ирсэн.",
    en: "Gurvandelger LLC has delivered trusted, quality service in construction, information technology, and renewable energy for 15 years.",
    ko: "Gurvandelger LLC는 건설, 정보 기술, 신재생 에너지 분야에서 15년간 신뢰받는 양질의 서비스를 제공해 왔습니다.",
    zh: "Gurvandelger LLC 十五年来在建筑、信息技术和可再生能源领域提供值得信赖的优质服务。",
  },
  "home.cta1": { mn: "Төслүүдийг үзэх", en: "View Projects", ko: "프로젝트 보기", zh: "查看项目" },
  "home.cta2": { mn: "Бидэнтэй холбогдох", en: "Contact Us", ko: "문의하기", zh: "联系我们" },
  "home.divisionsEyebrow": { mn: "Чиглэлүүд", en: "Divisions", ko: "사업 분야", zh: "业务方向" },
  "home.divisionsTitle": { mn: "Манай үйл ажиллагааны гурван тулгуур", en: "Our Three Core Divisions", ko: "당사의 3대 핵심 사업", zh: "我们的三大核心业务" },
  "home.division1.title": { mn: "Барилга Байгууламж", en: "Construction", ko: "건설", zh: "建筑工程" },
  "home.division1.desc": {
    mn: "Бүтээн байгуулсан барилга байгууламжийн зураг төсөл, барилгын ажил гүйцэтгэлийн мэдээлэл.",
    en: "Design and execution of construction projects we have completed.",
    ko: "당사가 완료한 건설 프로젝트의 설계 및 시공 정보입니다.",
    zh: "我们已完成的建筑项目设计与施工信息。",
  },
  "home.division2.title": { mn: "Мэдээлэл Технологи", en: "Information Technology", ko: "정보 기술", zh: "信息技术" },
  "home.division2.desc": {
    mn: "Веб систем, бизнесийн удирдлагын програм хангамж, IoT дэд бүтцийн шийдэл — бүтээгдэхүүнүүдийг product.gurvandelger.com дээрээс үзнэ үү.",
    en: "Web systems, business management software, IoT infrastructure solutions — see our products at product.gurvandelger.com.",
    ko: "웹 시스템, 비즈니스 관리 소프트웨어, IoT 인프라 솔루션 — 제품은 product.gurvandelger.com에서 확인하세요.",
    zh: "网站系统、企业管理软件、物联网基础设施解决方案 — 请访问 product.gurvandelger.com 查看我们的产品。",
  },
  "home.division3.title": { mn: "Сэргээгдэх эрчим хүч", en: "Renewable Energy", ko: "신재생 에너지", zh: "可再生能源" },
  "home.division3.desc": {
    mn: "Сэргээгдэх эрчим хүчний салбарт хийсэн төсөл, нарны болон салхины эрчим хүчний шийдлүүд.",
    en: "Projects and solutions in solar and wind renewable energy.",
    ko: "태양광 및 풍력 신재생 에너지 분야의 프로젝트와 솔루션입니다.",
    zh: "太阳能与风能可再生能源领域的项目与解决方案。",
  },
  "home.readMore": { mn: "Дэлгэрэнгүй", en: "Learn more", ko: "자세히 보기", zh: "了解更多" },

  "about.badge": { mn: "Бидний тухай", en: "About Us", ko: "회사 소개", zh: "关于我们" },
  "about.title": { mn: "Манай манлайлал", en: "Our Leadership", ko: "경영진 소개", zh: "我们的领导团队" },

  "partner.badge": { mn: "Түншлэл", en: "Partnership", ko: "파트너십", zh: "合作伙伴关系" },
  "partner.title": { mn: "Хамтрагч байгууллагууд", en: "Partner Organizations", ko: "파트너 기관", zh: "合作机构" },
  "partner.official": { mn: "Албан ёсны түнш", en: "Official Partner", ko: "공식 파트너", zh: "官方合作伙伴" },
  "partner.skynetworks": {
    mn: "Монголын анхны өргөн зурвасын сүлжээний компани",
    en: "Mongolia's First Broadband Network Company",
    ko: "몽골 최초의 초고속 통신망 기업",
    zh: "蒙古国首家宽带网络公司",
  },

  "projects.badge": { mn: "Портфолио", en: "Portfolio", ko: "포트폴리오", zh: "项目组合" },
  "projects.title": { mn: "Хийсэн төсөлүүд", en: "Completed Projects", ko: "완료된 프로젝트", zh: "已完成项目" },
  "projects.viewMore": { mn: "Дэлгэрэнгүй үзэх", en: "View details", ko: "자세히 보기", zh: "查看详情" },

  "social.badge": { mn: "Нийгмийн хариуцлага", en: "Social Responsibility", ko: "사회적 책임", zh: "社会责任" },
  "social.title": { mn: "Байгууллагын нийгмийн хариуцлага", en: "Corporate Social Responsibility", ko: "기업의 사회적 책임", zh: "企业社会责任" },
  "social.subtitle": {
    mn: "Гурван Дэлгэр ХХК-ийн байгууллага байгуулагдсан үеэс эхлэн бизнесийн амжилтыг нийгэмдээ бүтээж буй үнэ цэнээр хэмжиж ирлээ.",
    en: "Since its founding, Gurvandelger LLC has measured business success by the value it creates for society.",
    ko: "Gurvandelger LLC는 설립 이래 사업의 성공을 사회에 창출하는 가치로 가늠해 왔습니다.",
    zh: "自成立以来，Gurvandelger LLC 始终以为社会创造的价值来衡量企业的成功。",
  },

  "building.badge": { mn: "Барилга Байгууламж", en: "Construction", ko: "건설", zh: "建筑工程" },
  "building.introTitle": { mn: "ТОВЧ ТАНИЛЦУУЛГА", en: "BRIEF INTRODUCTION", ko: "회사 소개", zh: "简介" },
  "building.teamAlt": { mn: "Хамт олон", en: "Our Team", ko: "임직원", zh: "团队" },
  "building.projectsTitle": { mn: "БИДНИЙ ГҮЙЦЭТГЭСЭН АЖЛУУДААС", en: "OUR COMPLETED PROJECTS", ko: "당사가 수행한 프로젝트", zh: "我们完成的项目" },
  "building.galleryTitle": { mn: "БАРИЛГЫН АЖЛЫН ЗУРГУУД", en: "CONSTRUCTION PROJECT PHOTOS", ko: "건설 현장 사진", zh: "施工现场照片" },
  "solar.badge": { mn: "Сэргээгдэх эрчим хүч", en: "Renewable Energy", ko: "신재생 에너지", zh: "可再生能源" },
  "telecom.badge": { mn: "Мэдээлэл Технологи", en: "Information Technology", ko: "정보 기술", zh: "信息技术" },
  "telecom.introTitle": { mn: "ТОВЧ ТАНИЛЦУУЛГА", en: "BRIEF INTRODUCTION", ko: "회사 소개", zh: "简介" },
  "telecom.trendsIntro": {
    mn: "Ирээдүйн чиг хандлагад тулгуурлан бид дараах салбарт үйл ажиллагаагаа өргөжүүлж байна:",
    en: "Building on future trends, we are expanding our operations into the following areas:",
    ko: "미래 트렌드를 기반으로 저희는 다음 분야로 사업을 확장하고 있습니다:",
    zh: "着眼未来发展趋势，我们正将业务拓展至以下领域：",
  },
  "telecom.softwareTitle": { mn: "Програм хангамжийн бүтээгдэхүүн", en: "Software Products", ko: "소프트웨어 제품", zh: "软件产品" },
  "telecom.softwareSubtitle": {
    mn: "Дэд бүтцийн угсралтаас гадна бид байгууллагуудад зориулсан програм хангамжийн бүтээгдэхүүн, дижитал шийдлүүдийг хөгжүүлж, нийлүүлдэг.",
    en: "Beyond infrastructure installation, we also develop and supply software products and digital solutions for organizations.",
    ko: "인프라 설치 외에도 저희는 기업을 위한 소프트웨어 제품과 디지털 솔루션을 개발 및 공급하고 있습니다.",
    zh: "除基础设施安装外，我们还为各类企业开发并提供软件产品与数字化解决方案。",
  },
  "telecom.productPageLink": { mn: "Бүтээгдэхүүний хуудас", en: "Product Page", ko: "제품 페이지", zh: "产品页面" },
  "telecom.infraTitle": { mn: "Харилцаа холбооны дэд бүтэц", en: "Telecommunications Infrastructure", ko: "통신 인프라", zh: "通信基础设施" },

  "contact.badge": { mn: "Холбоо барих", en: "Contact", ko: "문의", zh: "联系方式" },
  "contact.title": { mn: "Бидэнтэй холбогдоорой", en: "Get in Touch", ko: "문의하기", zh: "联系我们" },
  "contact.subtitle": {
    mn: "Асуулт, хүсэлт, үнийн санал авахыг хүсвэл доорх маягтыг бөглөөрэй.",
    en: "Fill out the form below for questions, requests, or a price quote.",
    ko: "문의, 요청 또는 견적을 원하시면 아래 양식을 작성해 주세요.",
    zh: "如有问题、需求或报价需求，请填写以下表格。",
  },
  "contact.formTitle": { mn: "Холбогдох мэдээлэл", en: "Contact Details", ko: "연락처 정보", zh: "联系信息" },
  "contact.namePh": { mn: "Таны нэр", en: "Your name", ko: "이름", zh: "您的姓名" },
  "contact.companyPh": { mn: "Байгууллага", en: "Company", ko: "회사명", zh: "公司名称" },
  "contact.emailPh": { mn: "Имэйл хаяг", en: "Email address", ko: "이메일 주소", zh: "电子邮箱" },
  "contact.phonePh": { mn: "Утасны дугаар", en: "Phone number", ko: "전화번호", zh: "电话号码" },
  "contact.messagePh": {
    mn: "Үнийн санал авах бүтээгдэхүүн, шийдэл ба нэмэлт шаардлага",
    en: "Product/solution you'd like a quote for, plus any additional requirements",
    ko: "견적을 원하시는 제품/솔루션 및 추가 요청사항",
    zh: "希望获取报价的产品/解决方案及其他要求",
  },
  "contact.submit": { mn: "Хүсэлт илгээх", en: "Send Request", ko: "요청 보내기", zh: "发送请求" },
  "contact.submitting": { mn: "Илгээж байна...", en: "Sending...", ko: "전송 중...", zh: "发送中..." },
  "contact.successTitle": { mn: "Амжилттай илгээлээ!", en: "Sent successfully!", ko: "성공적으로 전송되었습니다!", zh: "发送成功！" },
  "contact.successDesc": {
    mn: "Бид тантай удахгүй холбогдох болно.",
    en: "We'll get back to you shortly.",
    ko: "빠른 시일 내에 연락드리겠습니다.",
    zh: "我们将尽快与您联系。",
  },
  "contact.sendAgain": { mn: "Дахин илгээх", en: "Send again", ko: "다시 보내기", zh: "再次发送" },
  "contact.errorAlert": { mn: "Илгээхэд алдаа гарлаа. Дахин оролдоно уу.", en: "Something went wrong. Please try again.", ko: "전송 중 오류가 발생했습니다. 다시 시도해 주세요.", zh: "发送失败，请重试。" },
} as const;

export type TranslationKey = keyof typeof dict;

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "gd-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("mn");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (saved === "mn" || saved === "en" || saved === "ko" || saved === "zh") {
      setLangState(saved);
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  };

  const t = useMemo(() => {
    return (key: TranslationKey) => dict[key]?.[lang] ?? dict[key]?.mn ?? key;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

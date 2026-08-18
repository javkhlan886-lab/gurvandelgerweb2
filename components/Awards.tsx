"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, ShieldCheck, Sparkles, Trophy } from "lucide-react";
import Header from "./Header";
import { useLanguage, type Lang } from "@/lib/i18n";

type L10n = Record<Lang, string>;

const COPY: Record<string, L10n> = {
  badge: {
    mn: "Шагнал, Гавьяа",
    en: "Awards & Recognition",
    ko: "수상 및 인증",
    zh: "荣誉与表彰",
  },
  title: {
    mn: "Аюулгүй ажиллагааны манлайлагч байгууллагаар шалгарлаа",
    en: "Recognized as the leading contractor in safety performance",
    ko: "안전관리 부문 최우수 협력사로 선정되었습니다",
    zh: "荣膺安全生产标杆承包商",
  },
  subtitle: {
    mn: "Манай хамтрагч Altgana Resources ХХК-иас Гурван Дэлгэр ХХК-ийг төслийн бүх гүйцэтгэгчээс хамгийн шилдэг нь буюу Хөдөлмөрийн аюулгүй байдал, эрүүл ахуйн (ХАБЭА) шаардлагыг хамгийн өндөр түвшинд, тууштай сахин мөрдсөн байгууллагаар шалгаруулж, 2025, 2026 онд дараалан өндөр үнэлгээ, шагнал гардуулав.",
    en: "Our partner Altgana Resources LLC selected Gurvandelger LLC as the best of all contractors on the project — the company that upheld health, safety and environment (HSE) standards at the highest and most consistent level — awarding us top honors two years running, in 2025 and 2026.",
    ko: "파트너사인 Altgana Resources LLC는 프로젝트에 참여한 모든 협력사 중 Gurvandelger LLC를 보건·안전·환경(HSE) 기준을 가장 높은 수준으로 일관되게 준수한 최우수 기업으로 선정하고, 2025년과 2026년 2년 연속으로 최고 영예의 상을 수여하였습니다.",
    zh: "我们的合作伙伴 Altgana Resources LLC 从项目全体承包商中评选出 Gurvandelger LLC，认定其为最高标准、最持续地贯彻职业健康、安全与环境（HSE）要求的企业，并于 2025 年与 2026 年连续两年授予最高荣誉。",
  },
  issuer: {
    mn: "Altgana Resources ХХК-иас гардуулав",
    en: "Awarded by Altgana Resources LLC",
    ko: "Altgana Resources LLC 수여",
    zh: "由 Altgana Resources LLC 颁发",
  },
  quoteLabel: {
    mn: "Шагналын гэрчилгээнээс",
    en: "From the award citation",
    ko: "표창장 문구 중에서",
    zh: "摘自获奖证书",
  },
  quote: {
    mn: "«Байгууллагын аюулгүй ажиллагааны соёлыг үлгэрлэн манлайлж, өндөр эрсдэлийн ажлуудыг мэргэжлийн өндөр түвшинд, хариуцлагатай хэрэгжүүлсэнийг өндрөөр үнэлэн энэхүү өргөмжлөлийг олгов.»",
    en: "“In high recognition of exemplary leadership in safety culture and of carrying out high-risk works to the highest professional standard with full accountability, this honor is hereby conferred.”",
    ko: "“안전 문화를 모범적으로 선도하고 고위험 작업을 높은 전문성과 책임감으로 수행한 점을 높이 평가하여 본 표창을 수여합니다.”",
    zh: "「高度评价贵司在安全文化方面的表率与引领，以及以高度专业和责任心完成高风险作业的表现，特此授予本荣誉证书。」",
  },
  quoteBy: {
    mn: "Б.Гантулга — Altgana Resources ХХК-ийн Гүйцэтгэх захирал",
    en: "B.Gantulga — Chief Executive Officer, Altgana Resources LLC",
    ko: "B.간톨가 — Altgana Resources LLC 대표이사",
    zh: "B.甘图拉 — Altgana Resources LLC 首席执行官",
  },
  viewFull: {
    mn: "Томруулж үзэх",
    en: "View full size",
    ko: "원본 크기로 보기",
    zh: "查看大图",
  },
  motto: {
    mn: "НЭГ БАГ — НЭГ ЗОРИЛГО — НЭГ СТАНДАРТ",
    en: "ONE TEAM — ONE GOAL — ONE STANDARD",
    ko: "하나의 팀 — 하나의 목표 — 하나의 기준",
    zh: "一个团队 — 一个目标 — 一个标准",
  },
  ctaText: {
    mn: "Ийм стандарттай багтай хамтран ажиллахыг хүсвэл бидэнтэй холбогдоорой.",
    en: "Want to work with a team held to this standard? Get in touch with us.",
    ko: "이러한 기준을 지키는 팀과 함께하고 싶으시다면 언제든 문의해 주세요.",
    zh: "希望与坚守此标准的团队合作？欢迎与我们联系。",
  },
  cta: {
    mn: "Бидэнтэй холбогдох",
    en: "Contact Us",
    ko: "문의하기",
    zh: "联系我们",
  },
  seeAllText: {
    mn: "Шагнал, өргөмжлөл бүрийн дэлгэрэнгүйг тусдаа хуудаснаас үзнэ үү.",
    en: "See the full details of every award and citation on the dedicated page.",
    ko: "각 수상 및 표창의 상세 내용은 전용 페이지에서 확인하실 수 있습니다.",
    zh: "每一项荣誉与表彰的详细内容，请前往专页查看。",
  },
  seeAll: {
    mn: "Бүх шагналыг үзэх",
    en: "View all awards",
    ko: "모든 수상 실적 보기",
    zh: "查看全部荣誉",
  },
};

const STATS: { icon: React.ElementType; value: string; label: L10n }[] = [
  {
    icon: ShieldCheck,
    value: "1,000,000+",
    label: {
      mn: "Хүн-цаг осол, хөдөлмөрийн чадвар алдалтгүй (LTI FREE)",
      en: "Man-hours worked lost-time-injury free (LTI FREE)",
      ko: "무재해(LTI FREE) 달성 인시(man-hours)",
      zh: "无损工工时（LTI FREE）人工时",
    },
  },
  {
    icon: Trophy,
    value: "2026",
    label: {
      mn: "Best Safety Contractor — Шилдэг аюулгүй ажиллагаатай гүйцэтгэгч",
      en: "Best Safety Contractor of the year",
      ko: "올해의 최우수 안전 협력사",
      zh: "年度最佳安全承包商",
    },
  },
  {
    icon: Award,
    value: "2025 · 2026",
    label: {
      mn: "Хоёр жил дараалан шагнал, өргөмжлөл хүртсэн",
      en: "Two consecutive years of awards and honors",
      ko: "2년 연속 수상 및 표창",
      zh: "连续两年获奖表彰",
    },
  },
  {
    icon: Sparkles,
    value: "#1",
    label: {
      mn: "Төслийн бүх гүйцэтгэгчээс ХАБЭА-гаар нэгдүгээрт",
      en: "Ranked first in HSE among all project contractors",
      ko: "프로젝트 전 협력사 중 HSE 부문 1위",
      zh: "在项目全体承包商中 HSE 排名第一",
    },
  },
];

const AWARDS: {
  image: string;
  year: string;
  title: L10n;
  kicker: L10n;
  desc: L10n;
}[] = [
  {
    image: "/awards/altgana-best-safety-contractor-2026.jpg",
    year: "2026",
    kicker: {
      mn: "Хүндэт самбар",
      en: "Honorary plaque",
      ko: "공로 명패",
      zh: "荣誉奖牌",
    },
    title: {
      mn: "BEST SAFETY CONTRACTOR 2026",
      en: "BEST SAFETY CONTRACTOR 2026",
      ko: "BEST SAFETY CONTRACTOR 2026",
      zh: "BEST SAFETY CONTRACTOR 2026",
    },
    desc: {
      mn: "Төслийн үйл ажиллагаанд аюулгүй ажиллагааг эрхэмлэн, үлгэр жишээ манлайлал, хариуцлагатай хамтын ажиллагааг хэрэгжүүлж, аюулгүй ажлын орчныг бүрдүүлэхэд оруулсан үнэтэй хувь нэмрийг өндрөөр үнэлэн Гурван Дэлгэр ХХК-д «Шилдэг аюулгүй ажиллагаатай гүйцэтгэгч» өргөмжлөлийг гардуулав. 1,000,000 хүн-цаг LTI FREE.",
      en: "Awarded to Gurvandelger LLC in high recognition of its commitment to safety on the project, its exemplary leadership, accountable collaboration, and its valuable contribution to creating a safe working environment. 1,000,000 man-hours LTI FREE.",
      ko: "프로젝트 수행 과정에서 안전을 최우선으로 삼고 모범적인 리더십과 책임 있는 협업을 실천하여 안전한 작업 환경 조성에 기여한 공로를 높이 평가하여 Gurvandelger LLC에 수여되었습니다. 100만 인시 무재해(LTI FREE) 달성.",
      zh: "为表彰 Gurvandelger LLC 在项目实施中始终把安全放在首位，发挥表率引领作用，落实负责任的协作，并为营造安全作业环境作出宝贵贡献，特此授予该奖项。累计 100 万人工时无损工事故（LTI FREE）。",
    },
  },
  {
    image: "/awards/altgana-talarhal-2026.jpg",
    year: "2026",
    kicker: {
      mn: "Талархал",
      en: "Certificate of appreciation",
      ko: "감사장",
      zh: "感谢状",
    },
    title: {
      mn: "1,000,000 ХҮН-ЦАГИЙН АМЖИЛТ",
      en: "1,000,000 MAN-HOUR MILESTONE",
      ko: "100만 인시 달성",
      zh: "100 万人工时里程碑",
    },
    desc: {
      mn: "Төслийн эхний 1,000,000 хүн-цагийг хөдөлмөрийн чадвар алдалтгүй ажилласан түүхэн амжилтыг хамтдаа тэмдэглэх үйл ажиллагаанд үнэтэй дэмжлэг үзүүлж, идэвх санаачилгатай хамтран ажилласан манай хамт олонд чин сэтгэлийн талархал илэрхийлсэн байна.",
      en: "A heartfelt thank-you to our team for its valuable support and proactive collaboration in marking the historic milestone of the project's first 1,000,000 man-hours worked without a lost-time injury.",
      ko: "프로젝트 최초 100만 인시를 무재해로 달성한 역사적인 성과를 함께 기념하는 과정에서 값진 지원과 적극적인 협력을 보여준 당사 임직원에게 진심 어린 감사를 전하는 감사장입니다.",
      zh: "对我司团队在共同庆祝项目首个 100 万人工时无损工事故这一历史性成就中给予的宝贵支持与积极协作，致以诚挚感谢。",
    },
  },
  {
    image: "/awards/altgana-urgumjlul-2025.jpg",
    year: "2025",
    kicker: {
      mn: "Өргөмжлөл",
      en: "Certificate of honor",
      ko: "표창장",
      zh: "荣誉证书",
    },
    title: {
      mn: "АЮУЛГҮЙ АЖИЛЛАГААНЫ СОЁЛЫГ МАНЛАЙЛСАН ТӨЛӨӨ",
      en: "FOR LEADERSHIP IN SAFETY CULTURE",
      ko: "안전 문화 선도 공로",
      zh: "安全文化引领贡献",
    },
    desc: {
      mn: "Байгууллагын аюулгүй ажиллагааны соёлыг үлгэрлэн манлайлж, өндөр эрсдэлийн ажлуудыг мэргэжлийн өндөр түвшинд, хариуцлагатай хэрэгжүүлснийг өндрөөр үнэлэн Altgana Resources ХХК-ийн Гүйцэтгэх захирлын гарын үсэгтэй өргөмжлөл хүртлээ.",
      en: "A certificate of honor, signed by the CEO of Altgana Resources LLC, recognizing our exemplary leadership in safety culture and the highly professional, accountable execution of high-risk works.",
      ko: "안전 문화를 모범적으로 선도하고 고위험 작업을 높은 전문성과 책임감으로 수행한 점을 인정받아 Altgana Resources LLC 대표이사 명의의 표창장을 수여받았습니다.",
      zh: "获颁由 Altgana Resources LLC 首席执行官签署的荣誉证书，表彰我司在安全文化方面的表率引领，以及以高度专业与责任心完成高风险作业的表现。",
    },
  },
];

export function AwardsSection({ compact = false }: { compact?: boolean }) {
  const { lang } = useLanguage();

  return (
    <section className="w-full">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700 shadow-sm">
          <Trophy className="size-3.5" />
          {COPY.badge[lang]}
        </span>
        <h2 className="mt-5 text-2xl md:text-4xl font-bold tracking-tight text-slate-900">
          {COPY.title[lang]}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-slate-600">
          {COPY.subtitle[lang]}
        </p>
        <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-indigo-600">
          {COPY.issuer[lang]}
        </p>
      </div>

      {/* Stat strip */}
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.value}
              className="rounded-2xl border border-amber-200/70 bg-gradient-to-b from-amber-50/80 to-white p-5 text-left shadow-sm"
            >
              <Icon className="size-5 text-amber-600" />
              <div className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                {stat.value}
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                {stat.label[lang]}
              </p>
            </div>
          );
        })}
      </div>

      {/* Award cards */}
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        {AWARDS.map((award) => (
          <figure
            key={award.image}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-500/10"
          >
            <a
              href={award.image}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block h-56 overflow-hidden bg-slate-900"
              title={COPY.viewFull[lang]}
            >
              <Image
                src={award.image}
                alt={award.title[lang]}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute right-3 top-3 rounded-full bg-amber-500 px-2.5 py-1 text-[11px] font-bold text-white shadow-lg">
                {award.year}
              </span>
            </a>
            <figcaption className="flex flex-1 flex-col p-6">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-600">
                {award.kicker[lang]}
              </span>
              <h3 className="mt-2 text-base font-bold leading-snug text-slate-900">
                {award.title[lang]}
              </h3>
              {!compact && (
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {award.desc[lang]}
                </p>
              )}
              <a
                href={award.image}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 transition-all hover:gap-2.5"
              >
                {COPY.viewFull[lang]}
                <ArrowRight className="size-4" />
              </a>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Citation quote */}
      <div className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 md:p-12 text-center shadow-2xl shadow-indigo-900/20">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400">
          {COPY.quoteLabel[lang]}
        </span>
        <blockquote className="mx-auto mt-5 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-white">
          {COPY.quote[lang]}
        </blockquote>
        <p className="mt-5 text-sm text-slate-300">{COPY.quoteBy[lang]}</p>
        <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
          {COPY.motto[lang]}
        </p>
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-slate-600">
          {compact ? COPY.seeAllText[lang] : COPY.ctaText[lang]}
        </p>
        <Link
          href={compact ? "/awards" : "/contact"}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-amber-500/25 transition-all hover:-translate-y-0.5 hover:shadow-amber-500/40"
        >
          {compact ? COPY.seeAll[lang] : COPY.cta[lang]}
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

export default function Awards() {
  return (
    <div className="relative w-full min-h-screen bg-white text-slate-900 font-sans antialiased">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-indigo-400/15 blur-3xl" />
      </div>

      <Header />

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <AwardsSection />
      </div>
    </div>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Header from "./Header";
import { useLanguage } from "@/lib/i18n";

const LEADERS = [
  {
    photo: "/chairman photo.jpg",
    name: "Ш. Жавхлан",
    role: {
      mn: "Гурвандэлгэр ХХК-ийн ТУЗ-ийн Дарга",
      en: "Chairman of the Board, Gurvandelger LLC",
      ko: "Gurvandelger LLC 이사회 의장",
      zh: "Gurvandelger LLC 董事长",
    },
    title: {
      mn: "Тогтвортой хөгжлийн төлөө",
      en: "For Sustainable Growth",
      ko: "지속가능한 성장을 위하여",
      zh: "为可持续发展",
    },
    quote: {
      mn: "ЭРХЭМ ХҮНДЭТ ХАРИЛЦАГЧИД, ХАМТРАН АЖИЛЛАГЧИД, ХӨРӨНГӨ ОРУУЛАГЧ ТА БҮХЭНДЭЭ ЭНЭ ӨДРИЙН МЭНДИЙГ ӨРГӨН ДЭВШҮҮЛЬЕ.",
      en: "TO OUR VALUED CLIENTS, PARTNERS, AND INVESTORS, WE EXTEND OUR WARMEST GREETINGS.",
      ko: "존경하는 고객, 파트너, 투자자 여러분께 진심 어린 인사를 전합니다.",
      zh: "谨向尊敬的客户、合作伙伴及投资者致以诚挚的问候。",
    },
    paragraphs: {
      mn: [
        "Гурван Дэлгэр ХХК байгуулагдсан цагаасаа эхлэн бизнесийн амжилтыг зөвхөн санхүүгийн үр дүнгээр бус, харилцан итгэлцэл, ёс зүйтэй засаглал, нийгэмдээ бүтээж буй үнэ цэнээр хэмжиж ирсэн билээ.",
        "Өнөөдрийн хурдацтай өөрчлөгдөж буй дэлхий ертөнцөд байгууллагын жинхэнэ хүч чадал нь хөрөнгө, технологид бус харин алсын хараа, зөв үнэт зүйлс, чадварлаг хамт олонд оршдог гэж бид үздэг. Иймээс бид урт хугацааны тогтвортой өсөлт, ил тод засаглал, нийгмийн хариуцлагыг үйл ажиллагааныхаа үндсэн зарчим болгон ажиллаж байна.",
        "Сүүлийн 15 жилийн хугацаанд бид олон салбарт үйл ажиллагаагаа амжилттай өргөжүүлж, харилцагчид, түнш байгууллагууд болон хамтран ажиллагчдынхаа итгэлийг хүлээсэн компани болон хөгжсөн нь хамтын хүч, хамтын үнэт зүйлийн үр дүн юм.",
        "Бид зөвхөн өнөөдрийн амжилтаар хязгаарлагдахгүй. Монгол Улсын хөгжил дэвшилд хувь нэмэр оруулах, шинэ боломжуудыг бий болгох, ирээдүй хойч үедээ үнэ цэнтэй өв үлдээх эрхэм зорилгын төлөө тууштай ажиллах болно.",
        "Гурван Дэлгэр ХХК-ийн хөгжил дэвшлийн замналд хамтран алхаж буй нийт харилцагчид, хөрөнгө оруулагчид, түншүүд болон ажилтнуудаа чин сэтгэлийн талархал илэрхийлье.",
      ],
      en: [
        "Since its founding, Gurvandelger LLC has measured business success not only by financial results, but by mutual trust, ethical governance, and the value we create for society.",
        "In today's rapidly changing world, we believe an organization's true strength lies not in capital or technology, but in vision, sound values, and a capable team. That is why long-term sustainable growth, transparent governance, and social responsibility remain the core principles guiding everything we do.",
        "Over the past 15 years, we have successfully expanded into multiple industries and grown into a company trusted by our clients, partners, and colleagues alike — a result of our collective effort and shared values.",
        "We will not be limited by today's success. We remain committed to contributing to Mongolia's development, creating new opportunities, and leaving a valuable legacy for future generations.",
        "We extend our heartfelt gratitude to all our clients, investors, partners, and employees who have walked this journey of growth alongside Gurvandelger LLC.",
      ],
      ko: [
        "Gurvandelger LLC는 설립 이래 사업의 성공을 단순히 재무적 성과만이 아니라 상호 신뢰, 윤리적 경영, 그리고 사회에 창출하는 가치로 가늠해 왔습니다.",
        "빠르게 변화하는 오늘날의 세계에서 조직의 진정한 힘은 자본이나 기술이 아니라 비전, 올바른 가치관, 그리고 유능한 인재에 있다고 저희는 믿습니다. 이에 따라 장기적이고 지속가능한 성장, 투명한 경영, 사회적 책임을 모든 활동의 핵심 원칙으로 삼고 있습니다.",
        "지난 15년간 저희는 여러 분야로 사업을 성공적으로 확장하며 고객, 파트너, 동료 모두에게 신뢰받는 기업으로 성장했습니다. 이는 모두의 힘과 공유된 가치가 만들어낸 결과입니다.",
        "저희는 오늘의 성공에 안주하지 않습니다. 몽골의 발전에 기여하고 새로운 기회를 창출하며, 미래 세대에게 가치 있는 유산을 남기기 위해 변함없이 노력할 것입니다.",
        "Gurvandelger LLC의 성장 여정을 함께해 주신 모든 고객, 투자자, 파트너, 그리고 임직원 여러분께 진심으로 감사드립니다.",
      ],
      zh: [
        "自成立以来，Gurvandelger LLC 始终不仅以财务业绩衡量企业的成功，更以彼此的信任、合乎道德的治理以及为社会创造的价值来衡量。",
        "在当今快速变化的世界中，我们相信企业真正的实力并非来自资本或技术，而是源于远见、正确的价值观和一支能干的团队。因此，长期可持续增长、透明治理与社会责任始终是我们经营活动的核心原则。",
        "过去15年间，我们成功将业务拓展至多个领域，成长为深受客户、合作伙伴及同仁信赖的企业——这正是我们共同努力与共同价值观的成果。",
        "我们不会止步于今天的成就。我们将持续致力于为蒙古国的发展做出贡献、创造新的机遇，并为子孙后代留下宝贵的财富。",
        "衷心感谢一路陪伴 Gurvandelger LLC 共同成长的所有客户、投资者、合作伙伴及员工。",
      ],
    },
    closing: {
      mn: "Итгэлцэл биднийг нэгтгэдэг. Үнэт зүйлс биднийг чиглүүлдэг. Ирээдүй биднийг урагш хөтөлдэг.",
      en: "Trust unites us. Values guide us. The future moves us forward.",
      ko: "신뢰가 우리를 하나로 만들고, 가치가 우리를 이끌며, 미래가 우리를 앞으로 나아가게 합니다.",
      zh: "信任凝聚我们，价值观引领我们，未来推动我们不断前行。",
    },
  },
  {
    photo: "/ceo photo.jpg",
    name: "Ш. Сэргэлэн",
    role: {
      mn: "Гурвандэлгэр ХХК-ийн Гүйцэтгэх Захирал",
      en: "Chief Executive Officer, Gurvandelger LLC",
      ko: "Gurvandelger LLC 대표이사",
      zh: "Gurvandelger LLC 首席执行官",
    },
    title: {
      mn: "БИЗНЕС БОЛ ИТГЭЛЦЭЛ",
      en: "Business Is Built on Trust",
      ko: "비즈니스는 신뢰입니다",
      zh: "商业即信任",
    },
    quote: {
      mn: "ЮУНЫ ТҮРҮҮНД МАНАЙ КОМПАНИЙН ВЕБ ХУУДСАНД ЗОЧИЛСОН ТА БҮХЭНД ТАЛАРХАЛ ИЛЭРХИЙЛЬЕ. ӨНГӨРСӨН ХУГАЦААНД БИД ЭРХЭМ ҮЙЛЧЛҮҮЛЭГЧ, ХАРИЛЦАГЧИДДАА ЧАНАР, ХАМГИЙН НАЙДВАРТАЙ, ЧАНАРТАЙ ҮЙЛЧИЛГЭЭ ҮЗҮҮЛЭХИЙГ ЗОРЬЖ ИРЛЭЭ.",
      en: "FIRST OF ALL, THANK YOU FOR VISITING OUR WEBSITE. OVER THE YEARS, WE HAVE STRIVEN TO PROVIDE OUR VALUED CUSTOMERS AND PARTNERS WITH THE MOST RELIABLE, HIGH-QUALITY SERVICE.",
      ko: "먼저 저희 웹사이트를 방문해 주신 여러분께 감사드립니다. 저희는 그동안 소중한 고객과 파트너 여러분께 가장 신뢰할 수 있는 양질의 서비스를 제공하기 위해 노력해 왔습니다.",
      zh: "首先感谢您访问我们的网站。多年来，我们始终致力于为尊贵的客户与合作伙伴提供最值得信赖的优质服务。",
    },
    paragraphs: {
      mn: [
        "Анх 2001 онд ГУРВАН ДЭЛГЭР ХХК бизнесийн салбарт гараагаа эхэлснээс хойш бид хамт олныхоо хамтын хүчээр бизнесийн үйл ажиллагаагаа улам өргөжүүлж, уул уурхайн тоног төхөөрөмж, барилга, үл хөдлөх хөрөнгийн менежмент, дэд бүтэц, инженерингийн салбарт өргөжсөн билээ. Манай компани нь мэргэжлийн өндөр ур чадвартай гэрээт болон үндсэн нийлсэн 50-60 гаруй боловсон хүчнийг бүрдүүлж, соёлтой үйлчилгээ, шинэлэг үйлдвэрлэл, техник технологийн дэвшлийг үйл ажиллагаандаа нэвтэрүүлэн ажиллахыг эрхэмлэн ажилладаг.",
        "Хүн байгалиасаа өөрийн хийсэн зүйлээсээ эрч хүч авч амьдардаг. Түүн шиг бид хийсэн бүтээснээсээ эрч хүч, дараагийн илүү том зүйлийг бүтээхийн төлөө ажилладаг. Аажим аажмаар Монголдоо бүтээн байгуулж, Монголдоо үнэ цэнэ бий болгохын төлөө зүтгэж байна. Чадварлаг Монгол залуус бид хамтдаа ирээдүйн сайхан Монгол орныг бий болгохын төлөө хичээн ажиллаж байна.",
        "Амжилттай, алдаа оноотой хөрөнгө оруулалтуудын хэлхээн дунд өнөөдрийн Гурван Дэлгэр бий болжээ. 15 жилийн турш бидэнтэй хамт байсан нийт ажилтан албан хаагч, харилцагч, бизнесийн итгэлт түнш нартаа чин сэтгэлээсээ баярлалаа. Та бүхэнд эрүүл энх, сайн сайхныг хүсье!",
      ],
      en: [
        "Since GURVAN DELGER LLC first entered the business world in 2001, we have steadily expanded our operations through the collective effort of our team, growing into mining equipment, construction, real estate management, infrastructure, and engineering. Our company now brings together more than 50-60 highly skilled contracted and full-time professionals, and we take pride in delivering professional service while embracing innovation and technological advancement in everything we do.",
        "By nature, people draw energy from what they create. In the same way, we draw strength from what we have built to pursue even greater achievements. Step by step, we strive to build up Mongolia and create lasting value here. Together, as capable young Mongolians, we work hard to build a better future for our country.",
        "Today's Gurvan Delger was shaped through a series of both successful and imperfect investments along the way. We sincerely thank all our employees, clients, and trusted business partners who have stood by us for 15 years. We wish you all good health and continued success!",
      ],
      ko: [
        "2001년 GURVAN DELGER LLC가 사업을 시작한 이래, 저희는 팀의 공동 노력을 통해 사업 영역을 꾸준히 확장하며 광산 장비, 건설, 부동산 관리, 인프라, 엔지니어링 분야로 성장해 왔습니다. 현재 저희 회사는 계약직과 정규직을 포함해 50~60여 명의 고숙련 전문 인력을 갖추고 있으며, 전문적인 서비스와 함께 혁신 및 기술 발전을 사업 전반에 도입하는 것을 자랑으로 여기고 있습니다.",
        "사람은 본래 자신이 이룬 것에서 힘을 얻어 살아갑니다. 저희도 마찬가지로, 지금까지 이룬 성과에서 힘을 얻어 다음의 더 큰 목표를 향해 나아갑니다. 한 걸음씩 몽골 안에서 무언가를 이루고, 몽골에 가치를 더하기 위해 노력하고 있습니다. 유능한 몽골의 젊은이들로서 저희는 함께 더 나은 몽골의 미래를 만들기 위해 힘쓰고 있습니다.",
        "오늘의 Gurvan Delger는 성공과 시행착오가 이어진 투자의 과정을 거쳐 만들어졌습니다. 15년간 저희와 함께해 주신 모든 임직원, 고객, 그리고 신뢰할 수 있는 비즈니스 파트너 여러분께 진심으로 감사드립니다. 여러분 모두의 건강과 행복을 기원합니다!",
      ],
      zh: [
        "自 2001 年 GURVAN DELGER LLC 正式涉足商界以来，我们凭借团队的共同努力不断拓展业务，逐步发展至矿山设备、建筑、房地产管理、基础设施及工程等领域。目前公司拥有50至60余名高素质的合同工及正式员工，我们始终以提供专业服务、并在各项业务中引入创新与技术进步为荣。",
        "人天生会从自己所创造的事物中获得力量。我们亦是如此，从已取得的成就中汲取力量，努力实现下一个更大的目标。我们脚踏实地地在蒙古国建设、创造价值。作为有能力的蒙古青年，我们齐心协力，为建设更美好的蒙古而努力奋斗。",
        "今天的 Gurvan Delger 正是在一系列成功与波折并存的投资历程中逐步成长而来。衷心感谢15年来始终与我们同行的全体员工、客户及值得信赖的商业伙伴。祝愿大家身体健康、诸事顺遂！",
      ],
    },
    closing: null,
  },
  {
    photo: "/coo.jpg",
    name: "Ш.Баясгалан",
    role: {
      mn: "Гурвандэлгэр ХХК-ийн Үйл ажиллагаа эрхэлсэн захирал",
      en: "Chief Operating Officer, Gurvandelger LLC",
      ko: "Gurvandelger LLC 최고운영책임자 (COO)",
      zh: "Gurvandelger LLC 首席运营官",
    },
    title: {
      mn: "ҮЙЛ АЖИЛЛАГААНЫ ТӨГС ТӨГӨЛДӨР БАЙДАЛ БОЛ АМЖИЛТЫН ҮНДЭС",
      en: "Operational Excellence Is the Foundation of Success",
      ko: "운영의 완성도가 곧 성공의 토대입니다",
      zh: "卓越运营是成功的基石",
    },
    quote: {
      mn: "БИД ӨДӨР ТУТМЫН ҮЙЛ АЖИЛЛАГААНДАА ЧАНАР, АЮУЛГҮЙ БАЙДАЛ, ҮР АШГИЙГ НЭН ТЭРГҮҮНД ТАВЬЖ, ХАРИЛЦАГЧ БҮРИЙН ИТГЭЛИЙГ ХАДГАЛАХЫН ТӨЛӨӨ ТУУШТАЙ АЖИЛЛАДАГ.",
      en: "IN OUR DAILY OPERATIONS, WE PRIORITIZE QUALITY, SAFETY, AND EFFICIENCY, AND WE WORK CONSISTENTLY TO EARN AND KEEP THE TRUST OF EVERY CLIENT.",
      ko: "저희는 일상적인 업무에서 품질, 안전, 효율성을 최우선으로 삼으며, 모든 고객의 신뢰를 얻고 지키기 위해 한결같이 노력하고 있습니다.",
      zh: "在日常运营中，我们始终将质量、安全与效率放在首位，并持续努力赢得并维护每一位客户的信任。",
    },
    paragraphs: {
      mn: [
        "Манай хамт олон байгууллагынхаа стратеги зорилгыг бодит ажил хэрэг болгохын төлөө өдөр бүр хариуцлагатай, үр бүтээлтэй ажиллаж байна. Бид үйл ажиллагааны бүхий л шатанд чанарын удирдлага, аюулгүй ажиллагаа, бүтээмжийг тасралтгүй сайжруулахыг зорьж, орчин үеийн технологи, инновацын шийдлүүдийг нэвтрүүлэн ажилладаг.",
        "Байгууллагын амжилт нь зөвхөн хөрөнгө оруулалт, техник технологиос бус чадварлаг боловсон хүчин, хамтын ажиллагаа, зөв зохион байгуулалтаас шалтгаалдаг. Иймээс бид ажилтан бүрийн ур чадварыг хөгжүүлэх, хөдөлмөрийн аюулгүй орчныг бүрдүүлэх, хамтын үнэ цэнийг бий болгоход онцгой анхаарал хандуулдаг.",
        "Өнөөдөр бидний хүрсэн үр дүн бүхэн хамтран ажиллагч байгууллагууд, харилцагчид болон үнэнч ажилтан албан хаагчдын хичээл зүтгэлийн үр шим юм. Цаашид ч бид үйл ажиллагааны чанар, үр ашгийг улам нэмэгдүүлж, харилцагчдынхаа итгэлийг даасан найдвартай түнш байх болно. Бидэнтэй хамтран ажиллаж буй нийт түншүүддээ талархал илэрхийлж, эрүүл энх, сайн сайхан бүхнийг хүсэн ерөөе.",
      ],
      en: [
        "Our team works responsibly and productively every day to turn our organization's strategic goals into reality. At every stage of our operations, we strive to continuously improve quality management, workplace safety, and productivity, while adopting modern technology and innovative solutions.",
        "An organization's success depends not only on capital and technology, but on skilled people, teamwork, and effective organization. That is why we place special emphasis on developing each employee's abilities, maintaining a safe working environment, and creating shared value together.",
        "Everything we have achieved today is the fruit of the dedication of our partner organizations, clients, and loyal employees. Going forward, we will continue to improve the quality and efficiency of our operations and remain a reliable partner worthy of our clients' trust. We thank all of our partners for working alongside us, and we wish you all good health and happiness.",
      ],
      ko: [
        "저희 팀은 조직의 전략적 목표를 현실로 실현하기 위해 매일 책임감을 가지고 생산적으로 일하고 있습니다. 저희는 모든 업무 단계에서 품질 관리, 작업장 안전, 생산성을 지속적으로 개선하고자 노력하며, 최신 기술과 혁신적인 솔루션을 도입하고 있습니다.",
        "조직의 성공은 자본과 기술뿐 아니라 유능한 인력, 협력, 그리고 올바른 조직 운영에 달려 있습니다. 이에 따라 저희는 모든 직원의 역량 개발, 안전한 근무 환경 조성, 그리고 공동의 가치 창출에 특별한 관심을 기울이고 있습니다.",
        "오늘날 저희가 이룬 모든 성과는 협력 기관, 고객, 그리고 충실한 임직원들의 헌신이 맺은 결실입니다. 앞으로도 저희는 운영의 품질과 효율성을 지속적으로 높이며, 고객의 신뢰에 부응하는 든든한 파트너가 되겠습니다. 함께해 주신 모든 파트너 여러분께 감사드리며, 건강과 행복을 기원합니다.",
      ],
      zh: [
        "我们的团队每天都以高度的责任心和高效的工作方式，努力将公司的战略目标付诸实践。在运营的各个环节，我们致力于持续提升质量管理、作业安全与生产效率，并不断引入现代技术与创新解决方案。",
        "企业的成功不仅取决于资金与技术，更取决于优秀的人才、团队协作以及科学的组织管理。因此，我们特别注重培养每一位员工的能力、营造安全的工作环境，并共同创造集体价值。",
        "我们今天所取得的一切成就，都凝聚着合作机构、客户以及忠诚员工的辛勤付出。展望未来，我们将持续提升运营质量与效率，成为值得客户信赖的可靠伙伴。在此，向所有与我们携手同行的合作伙伴表示衷心感谢，并祝愿大家身体健康、万事顺意。",
      ],
    },
    closing: null,
  },
] as const;

export default function AboutUs() {
  const { t, lang } = useLanguage();

  return (
    <div className="relative w-full min-h-screen bg-white text-slate-900 font-sans antialiased">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-indigo-400/15 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-cyan-300/15 blur-3xl" />
      </div>

      <Header />

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-14 md:pt-20 pb-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 shadow-sm">
          {t("about.badge")}
        </span>
        <h1 className="mt-5 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
          {t("about.title")}
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-16 md:pb-24 space-y-10">
        {LEADERS.map((leader, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 md:p-10"
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              <div className="flex-shrink-0 flex flex-col items-center gap-3 w-full md:w-auto">
                <div className="relative w-48 h-64 md:w-64 md:h-80 rounded-xl overflow-hidden shadow-lg bg-slate-100 ring-1 ring-slate-200">
                  <Image
                    src={leader.photo}
                    alt={leader.name}
                    fill
                    sizes="(min-width: 768px) 256px, 192px"
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-slate-500 text-center max-w-[200px]">
                  {leader.role[lang]}
                </p>
                <p className="font-bold text-sm text-center text-slate-900">
                  {leader.name}
                </p>
              </div>

              <div className="flex-1 relative">
                <div className="hidden md:block absolute -top-4 right-0 text-indigo-100 text-8xl font-serif leading-none select-none">
                  "
                </div>

                <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 md:mb-6 tracking-tight">
                  {leader.title[lang]}
                </h2>

                <div className="border-l-4 border-indigo-500 pl-4 mb-6">
                  <p className="text-xs md:text-sm font-bold italic text-slate-800 leading-relaxed">
                    {leader.quote[lang]}
                  </p>
                </div>

                {leader.paragraphs[lang].map((p, i) => (
                  <p
                    key={i}
                    className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4 last:mb-0"
                  >
                    {p}
                  </p>
                ))}

                {leader.closing && (
                  <p className="text-xs md:text-sm text-slate-800 leading-relaxed font-semibold mt-4">
                    {leader.closing[lang]}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

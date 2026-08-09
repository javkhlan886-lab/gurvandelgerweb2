"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import { useLanguage } from "@/lib/i18n";

const SOFTWARE_PRODUCTS = [
  {
    icon: "🌐",
    title: {
      mn: "Веб систем & порталууд",
      en: "Web Systems & Portals",
      ko: "웹 시스템 및 포털",
      zh: "网站系统与门户",
    },
    desc: {
      mn: "Байгууллагын веб сайт, дотоод удирдлагын систем, харилцагчийн порталын хөгжүүлэлт.",
      en: "Development of corporate websites, internal management systems, and customer portals.",
      ko: "기업 웹사이트, 내부 관리 시스템, 고객 포털 개발",
      zh: "企业网站、内部管理系统及客户门户的开发。",
    },
  },
  {
    icon: "📊",
    title: {
      mn: "Бизнесийн удирдлагын програм хангамж",
      en: "Business Management Software",
      ko: "비즈니스 관리 소프트웨어",
      zh: "企业管理软件",
    },
    desc: {
      mn: "Агуулах, санхүү, харилцагчийн удирдлага зэрэг үйл ажиллагааг автоматжуулах шийдлүүд.",
      en: "Solutions to automate operations such as inventory, finance, and customer relationship management.",
      ko: "재고, 재무, 고객 관리 등 업무를 자동화하는 솔루션",
      zh: "实现库存、财务、客户管理等业务自动化的解决方案。",
    },
  },
  {
    icon: "📡",
    title: {
      mn: "IoT мониторинг & хяналтын самбар",
      en: "IoT Monitoring & Dashboards",
      ko: "IoT 모니터링 및 대시보드",
      zh: "物联网监控与仪表盘",
    },
    desc: {
      mn: "Зүйлсийн интернет (IoT) төхөөрөмжийн өгөгдлийг цуглуулж, бодит цагийн хяналтын самбараар дүрслэх.",
      en: "Collects data from IoT devices and visualizes it through real-time monitoring dashboards.",
      ko: "IoT 기기의 데이터를 수집하여 실시간 모니터링 대시보드로 시각화",
      zh: "采集物联网(IoT)设备数据，并通过实时监控仪表盘进行可视化展示。",
    },
  },
  {
    icon: "📱",
    title: {
      mn: "Мобайл аппликейшн",
      en: "Mobile Applications",
      ko: "모바일 애플리케이션",
      zh: "移动应用",
    },
    desc: {
      mn: "iOS болон Android платформ дээр ажиллах хэрэглэгчийн болон дотоод хэрэгцээний аппликейшн.",
      en: "Customer-facing and internal-use applications for iOS and Android platforms.",
      ko: "iOS 및 Android 플랫폼에서 구동되는 고객용·내부용 애플리케이션",
      zh: "面向用户及内部使用的iOS与Android平台应用程序。",
    },
  },
] as const;

const CCTV_TAGS = {
  mn: ["Харилцаа холбоо", "Камерын хяналт", "Суурилуулалт"],
  en: ["Telecommunications", "CCTV Surveillance", "Installation"],
  ko: ["통신", "CCTV 보안", "설치"],
  zh: ["通信", "监控摄像", "安装"],
} as const;

const CCTV_TITLE = {
  mn: "Камерын хяналтын систем суурилуулалт",
  en: "CCTV Surveillance System Installation",
  ko: "CCTV 보안 시스템 설치",
  zh: "监控摄像系统安装",
} as const;

const telecomProjects = [
  {
    year: "2024",
    client: "Трипл Маржин ХХК",
    title: CCTV_TITLE,
    description: {
      mn: "Камерын хяналтын системийг нийлүүлж, суурилуулах ажлыг амжилттай гүйцэтгэсэн.",
      en: "Successfully supplied and installed a CCTV surveillance system.",
      ko: "CCTV 보안 시스템을 공급 및 설치하는 작업을 성공적으로 완료했습니다.",
      zh: "成功完成监控摄像系统的供货与安装工程。",
    },
    images: [] as string[],
    tags: CCTV_TAGS,
  },
  {
    year: "2025",
    client: "Эм Ди Эс Коммуникэшн ХХК",
    title: CCTV_TITLE,
    description: {
      mn: "Камерын хяналтын системийг нийлүүлж, суурилуулах бүрэн ажлыг гүйцэтгэсэн.",
      en: "Completed the full supply and installation of a CCTV surveillance system.",
      ko: "CCTV 보안 시스템의 공급 및 설치 전체 작업을 완료했습니다.",
      zh: "完成监控摄像系统的全套供货与安装工程。",
    },
    images: ["/projects/camera1.jpg", "/projects/camera4.jpg"],
    tags: CCTV_TAGS,
  },
  {
    year: "2025",
    client: "Блүүм мибел Эй Кэй Эй сервис технологи ХХК",
    title: CCTV_TITLE,
    description: {
      mn: "Камерын хяналтын системийг нийлүүлж, суурилуулах ажлыг амжилттай дуусгасан.",
      en: "Successfully completed the supply and installation of a CCTV surveillance system.",
      ko: "CCTV 보안 시스템의 공급 및 설치 작업을 성공적으로 완료했습니다.",
      zh: "成功完成监控摄像系统的供货与安装工程。",
    },
    images: ["/projects/camera2.jpg", "/projects/camera6.jpg"],
    tags: CCTV_TAGS,
  },
  {
    year: "2025",
    client: "Зэт Ти И ХХК",
    title: {
      mn: "60км газрын шилэн кабель татах ажил",
      en: "60km Underground Fiber Optic Cable Installation",
      ko: "60km 지하 광케이블 포설 작업",
      zh: "60公里地下光纤电缆铺设工程",
    },
    description: {
      mn: "Төв аймгийн Мөнгөн морьт суманд 60 км газрын шилэн кабель татах ажлыг гүйцэтгэсэн.",
      en: "Installed 60km of underground fiber optic cable in Möngönmorit soum, Töv province.",
      ko: "톱 아이막 뭉근모리트 솜에서 60km 지하 광케이블 포설 작업을 수행했습니다.",
      zh: "在图布省蒙根莫日特苏木完成60公里地下光纤电缆铺设工程。",
    },
    images: [
      "/projects/fo1.jpg",
      "/projects/fo2.jpg",
      "/projects/fo4.jpg",
      "/projects/fo5.jpg",
      "/projects/fo3.jpg",
      "/projects/fo6.jpg",
      "/projects/fo7.jpg",
      "/projects/fo8.jpg",
    ],
    tags: {
      mn: ["Шилэн кабель", "Дэд бүтэц", "Төв аймаг — Мөнгөн морьт"],
      en: ["Fiber Optic", "Infrastructure", "Töv Province — Möngönmorit"],
      ko: ["광케이블", "인프라", "톱 아이막 — 뭉근모리트"],
      zh: ["光纤电缆", "基础设施", "图布省 — 蒙根莫日特"],
    },
  },
  {
    year: "2026",
    client: "Өмнөговь Булган сум",
    title: {
      mn: "Телекамрын хяналтын камерын систем",
      en: "Street Surveillance Camera System",
      ko: "거리 감시 카메라 시스템",
      zh: "街道监控摄像系统",
    },
    description: {
      mn: "Өмнөговь Булган сумын нутаг гудамж талбайн хяналтын камерын систем оруулав.",
      en: "Installed a street and public area surveillance camera system in Bulgan soum, Ömnögovi province.",
      ko: "옴노고비 아이막 볼간 솜 지역 거리 및 공공장소 감시 카메라 시스템을 구축했습니다.",
      zh: "在南戈壁省布尔干苏木完成街道及公共区域监控摄像系统建设。",
    },
    images: [] as string[],
    tags: {
      mn: ["Шилэн кабель", "Дэд бүтэц", "Өмнөговь аймаг — Булган сум"],
      en: ["Fiber Optic", "Infrastructure", "Ömnögovi Province — Bulgan Soum"],
      ko: ["광케이블", "인프라", "옴노고비 아이막 — 볼간 솜"],
      zh: ["光纤电缆", "基础设施", "南戈壁省 — 布尔干苏木"],
    },
  },
  {
    year: "2026",
    client: "Улаанбаатар Баян зүрх дүүрэг",
    title: {
      mn: "Телекамрын хяналтын камерын систем хаягжуулалт",
      en: "Surveillance Camera System Addressing Project",
      ko: "감시 카메라 시스템 주소화 사업",
      zh: "监控摄像系统编址项目",
    },
    description: {
      mn: "Улаанбаатар Баян зүрх дүүрэг Телекамрын хяналтын камерын систем хаягжуулалт",
      en: "Surveillance camera system addressing project in Bayanzürkh district, Ulaanbaatar.",
      ko: "울란바토르 바양주르흐 구 감시 카메라 시스템 주소화 사업",
      zh: "乌兰巴托巴彦朱日赫区监控摄像系统编址项目",
    },
    images: [] as string[],
    tags: {
      mn: ["Шилэн кабель", "Дэд бүтэц", "Улаанбаатар хот — Баянзүрх дүүрэг"],
      en: ["Fiber Optic", "Infrastructure", "Ulaanbaatar — Bayanzürkh District"],
      ko: ["광케이블", "인프라", "울란바토르 — 바양주르흐 구"],
      zh: ["光纤电缆", "基础设施", "乌兰巴托 — 巴彦朱日赫区"],
    },
  },
] as const;

const INTRO_P1 = {
  mn: (
    <>
      Өсөн хөгжиж буй мэдээллийн технологийн саларт хөл нийлүүлэн ажиллах
      зорилгоор манай байгууллага 2014 оноос эхлэн Харилцаа холбооны
      зохицуулах хороогоос{" "}
      <span className="font-medium text-slate-900">"Б" ангиллын</span>{" "}
      Монгол Улсын нутаг дэвсгэрт харилцаа холбооны сүлжээ, дэд бүтцийн
      угсралт, суурилуулалтын ажил гүйцэтгэх тусгай зөвшөөрлийг авч үйл
      ажиллагаа явуулж ирсэн.
    </>
  ),
  en: (
    <>
      To keep pace with the rapidly growing information technology sector,
      our company has held a{" "}
      <span className="font-medium text-slate-900">Category "B"</span>{" "}
      license from the Communications Regulatory Commission since 2014,
      authorizing us to carry out telecommunications network and
      infrastructure installation nationwide across Mongolia.
    </>
  ),
  ko: (
    <>
      빠르게 성장하는 정보기술 분야에 발맞추기 위해 저희 회사는 2014년부터
      통신규제위원회로부터{" "}
      <span className="font-medium text-slate-900">"B"등급</span> 면허를
      취득하여 몽골 전역에서 통신망 및 인프라 설치 사업을 수행해 왔습니다.
    </>
  ),
  zh: (
    <>
      为紧跟快速发展的信息技术行业步伐，本公司自2014年起获得通信监管委员会颁发的
      <span className="font-medium text-slate-900">"B"级</span>
      许可证，在蒙古国全境开展通信网络及基础设施安装工程。
    </>
  ),
} as const;

const INTRO_P3 = {
  mn: "Шаардлагатай боловсон хүчнээр бүрэн хангагдсан манай баг шинэ технологи, чанартай үйлчилгээ үзүүлэхэд бэлэн байна. Соёлтой үйлчилгээ, шинэлэг үйлдвэрлэл, техник технологийн дэвшлийг үйл ажиллагаандаа нэвтэрүүлэн ажиллахыг эрхэмлэн ажилладаг.",
  en: "Fully staffed with the necessary skilled professionals, our team is ready to deliver new technology and quality service. We take pride in providing professional service while embracing innovation and technological advancement in everything we do.",
  ko: "필요한 전문 인력을 완비한 저희 팀은 새로운 기술과 양질의 서비스를 제공할 준비가 되어 있습니다. 전문적인 서비스와 함께 혁신 및 기술 발전을 사업 전반에 도입하는 것을 자랑으로 여기고 있습니다.",
  zh: "配备充足专业人才的团队，随时准备为客户提供新技术与优质服务。我们始终以提供专业服务、并在各项业务中引入创新与技术进步为荣。",
} as const;

const FOCUS_AREAS = {
  mn: [
    { icon: "🌐", text: "Зүйлсийн интернет (IoT)" },
    { icon: "💻", text: "Програм хангамжийн хөгжүүлэлт" },
    { icon: "🏗️", text: "Барилгын гадна дотор холбоо дохиололын угсралт суурилуулалт" },
    { icon: "📷", text: "Хяналтын камерийн шийдэл угсралт суурилуулалт" },
    { icon: "🚁", text: "Тусгай зориулалтын дрон" },
    { icon: "🤖", text: "Хиймэл оюун ухаанд суурилсан шийдлүүд" },
    { icon: "🔗", text: "Мэдээллийн сүлжээ" },
  ],
  en: [
    { icon: "🌐", text: "Internet of Things (IoT)" },
    { icon: "💻", text: "Software Development" },
    { icon: "🏗️", text: "Building interior/exterior communication & signaling installation" },
    { icon: "📷", text: "CCTV surveillance solution installation" },
    { icon: "🚁", text: "Specialized drones" },
    { icon: "🤖", text: "AI-based solutions" },
    { icon: "🔗", text: "Data networks" },
  ],
  ko: [
    { icon: "🌐", text: "사물인터넷 (IoT)" },
    { icon: "💻", text: "소프트웨어 개발" },
    { icon: "🏗️", text: "건물 내외부 통신 및 신호 설비 설치" },
    { icon: "📷", text: "CCTV 보안 솔루션 설치" },
    { icon: "🚁", text: "특수 목적 드론" },
    { icon: "🤖", text: "인공지능 기반 솔루션" },
    { icon: "🔗", text: "정보 네트워크" },
  ],
  zh: [
    { icon: "🌐", text: "物联网(IoT)" },
    { icon: "💻", text: "软件开发" },
    { icon: "🏗️", text: "建筑内外通信及信号设备安装" },
    { icon: "📷", text: "监控摄像解决方案安装" },
    { icon: "🚁", text: "专用无人机" },
    { icon: "🤖", text: "人工智能解决方案" },
    { icon: "🔗", text: "信息网络" },
  ],
} as const;

export default function TelecomPage() {
  const { t, lang } = useLanguage();

  return (
    <div className="relative w-full min-h-screen bg-white text-slate-900 font-sans antialiased">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-indigo-400/15 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-cyan-300/15 blur-3xl" />
      </div>

      <Header />

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-10 md:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 shadow-sm">
          {t("telecom.badge")}
        </span>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h1 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              {t("telecom.introTitle")}
            </h1>
            <div className="space-y-4 text-sm md:text-base text-slate-600 leading-relaxed">
              <p>{INTRO_P1[lang]}</p>

              <p>{t("telecom.trendsIntro")}</p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-0 list-none">
                {FOCUS_AREAS[lang].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 bg-slate-50 rounded-lg px-3 py-2">
                    <span className="mt-0.5">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              <p>{INTRO_P3[lang]}</p>
            </div>
          </div>
          {/* Зураг — баруун тал */}
          <div className="relative flex-shrink-0 w-full md:w-72 lg:w-80 rounded-2xl overflow-hidden shadow-lg bg-slate-100 aspect-[3/4] md:aspect-auto aspect-square">
            <Image
              src="/projects/wallpaper3.png"
              alt={t("building.teamAlt")}
              fill
              sizes="(min-width: 768px) 320px, 100vw"
              className="object-contain bg-slate-50"
            />
          </div>
        </div>
      </div>

      {/* Програм хангамжийн бүтээгдэхүүн */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-10 md:pt-14">
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                {t("telecom.softwareTitle")}
              </h2>
              <p className="mt-2 text-sm md:text-base text-slate-600 max-w-2xl">
                {t("telecom.softwareSubtitle")}
              </p>
            </div>
            <a
              href="https://product.gurvandelger.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40 hover:-translate-y-0.5 whitespace-nowrap"
            >
              {t("telecom.productPageLink")}
              <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SOFTWARE_PRODUCTS.map((product, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all"
              >
                <div className="text-2xl">{product.icon}</div>
                <h3 className="mt-3 text-sm font-semibold text-slate-900">
                  {product.title[lang]}
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                  {product.desc[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Үндсэн агуулга */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
        {/* Гарчиг */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
            {t("telecom.infraTitle")}
          </h2>
        </div>

        {/* Төслүүдийн timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-[88px] top-0 bottom-0 w-0.5 bg-indigo-200" />
          <div className="flex flex-col gap-8">
            {telecomProjects.map((project, index) => (
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

                  {/* Тагнууд */}
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

                  {/* Зургийн зай — зураг нэмэхэд uncomment хийнэ */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {project.images.map((img, i) => (
                      <div
                        key={i}
                        className="relative h-40 rounded-lg overflow-hidden bg-slate-100"
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

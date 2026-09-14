"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  Boxes,
  Building2,
  Cable,
  Check,
  ChevronDown,
  Cloud,
  CloudCog,
  Coins,
  Cpu,
  Gauge,
  HardDrive,
  Landmark,
  LayoutDashboard,
  Lock,
  Mail,
  Network,
  Phone,
  Pickaxe,
  Plug,
  Router,
  Server,
  ShieldCheck,
  Store,
  Thermometer,
  TrendingUp,
  TriangleAlert,
  Wifi,
  Workflow,
} from "lucide-react";
import Header from "./Header";
import { useLanguage, type Lang } from "@/lib/i18n";
import { SDWAN_FAQ } from "@/lib/sdwanFaq";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from "@/lib/site";

type L10n = Record<Lang, string>;

const all = (s: string): L10n => ({ mn: s, en: s, ko: s, zh: s });

const COPY = {
  badge: { mn: "Бүтээгдэхүүн · SD-WAN", en: "Product · SD-WAN", ko: "제품 · SD-WAN", zh: "产品 · SD-WAN" },
  h1: {
    mn: "SD-WAN (SDWAN) — олон салбартай байгууллагын нэгдсэн сүлжээний шийдэл",
    en: "SD-WAN — a unified network solution for multi-branch organizations",
    ko: "SD-WAN — 다지점 조직을 위한 통합 네트워크 솔루션",
    zh: "SD-WAN — 多分支企业统一网络解决方案",
  },
  lead: {
    mn: "MPLS, broadband, LTE/5G болон Wi-Fi холболтоо нэгтгэж, аль нэг ISP-ээс хамаарахгүй, найдвартай, аюулгүй нэг сүлжээтэй болоорой. Гурван Дэлгэр ХХК Монголд SD-WAN зарна, суурилуулж, дэмжлэг үзүүлнэ.",
    en: "Combine your MPLS, broadband, LTE/5G and Wi-Fi links into one reliable, secure network that doesn't depend on any single ISP. Gurvandelger LLC supplies and deploys SD-WAN solutions in Mongolia.",
    ko: "MPLS, 브로드밴드, LTE/5G, Wi-Fi 회선을 통합하여 특정 ISP에 의존하지 않는 안정적이고 안전한 하나의 네트워크를 구축하세요. Gurvandelger LLC가 몽골에서 SD-WAN 솔루션을 공급하고 구축합니다.",
    zh: "整合 MPLS、宽带、LTE/5G 与 Wi-Fi 链路，打造不依赖任何单一 ISP 的可靠、安全的统一网络。Gurvandelger LLC 在蒙古国提供并部署 SD-WAN 解决方案。",
  },
  ctaQuote: { mn: "Үнийн санал авах", en: "Request a quote", ko: "견적 요청", zh: "获取报价" },
  ctaArch: { mn: "Архитектур үзэх", en: "See the architecture", ko: "아키텍처 보기", zh: "查看架构" },

  whatTitle: { mn: "SD-WAN гэж юу вэ?", en: "What is SD-WAN?", ko: "SD-WAN이란 무엇인가요?", zh: "什么是 SD-WAN？" },
  whatBody: {
    mn: "SD-WAN (SDWAN буюу Software-Defined WAN) нь MPLS, broadband, LTE/5G болон Wi-Fi сүлжээг нэг overlay сүлжээнд нэгтгэж, аппликейшн бүрт хамгийн тохиромжтой замыг автоматаар сонгоно. Ингэснээр олон салбартай байгууллагын сүлжээг аль нэг интернэт үйлчилгээ үзүүлэгч (ISP)-ийн сүлжээнээс үл хамааран нэг цогц сүлжээ болгоно.",
    en: "SD-WAN (also written SDWAN, short for Software-Defined WAN) unifies MPLS, broadband, LTE/5G and Wi-Fi networks into a single overlay network and automatically picks the best path for every application. This turns a multi-branch organization's network into one unified network that is independent of any single internet service provider (ISP).",
    ko: "SD-WAN(SDWAN, Software-Defined WAN)은 MPLS, 브로드밴드, LTE/5G 및 Wi-Fi 네트워크를 하나의 오버레이 네트워크로 통합하고 애플리케이션별로 최적의 경로를 자동으로 선택합니다. 이를 통해 여러 지점을 가진 조직의 네트워크를 특정 인터넷 서비스 제공업체(ISP)에 종속되지 않는 하나의 통합 네트워크로 만듭니다.",
    zh: "SD-WAN（亦写作 SDWAN，即软件定义广域网）将 MPLS、宽带、LTE/5G 与 Wi-Fi 网络整合为统一的 overlay 网络，并为每个应用自动选择最佳路径，使多分支企业的网络成为不依赖任何单一互联网服务提供商（ISP）的统一网络。",
  },
  serviceTitle: {
    mn: "Гурван Дэлгэр ХХК-ийн үйлчилгээ",
    en: "Gurvandelger LLC services",
    ko: "Gurvandelger LLC 서비스",
    zh: "Gurvandelger LLC 的服务",
  },
  serviceBody: {
    mn: "Гурван Дэлгэр ХХК нь үйлдвэрлэгч, тоног төхөөрөмж сонгохоос эхлээд нэвтрүүлэлт, дэмжлэг хүртэл цогцоор нь хариуцна. Бид 2014 оноос Харилцаа холбооны зохицуулах хорооны “Б” ангиллын тусгай зөвшөөрөлтэйгөөр харилцаа холбооны сүлжээ, дэд бүтцийн угсралт хийж ирсэн сүлжээний тоног төхөөрөмж нийлүүлэгч, гүйцэтгэгч юм.",
    en: "Gurvandelger LLC handles the entire journey — from vendor and equipment selection to deployment and support. Since 2014 we have held a Category “B” license from the Communications Regulatory Commission, building telecommunications networks and infrastructure as a network equipment supplier and contractor.",
    ko: "Gurvandelger LLC는 제조사 및 장비 선정부터 구축, 기술 지원까지 전 과정을 책임집니다. 당사는 2014년부터 통신규제위원회의 “B”등급 면허를 보유하고 통신망 및 인프라를 구축해 온 네트워크 장비 공급 및 시공 기업입니다.",
    zh: "Gurvandelger LLC 提供从厂商与设备选型到部署实施、技术支持的全流程服务。自 2014 年起，我们持有通信监管委员会颁发的“B”级许可证，作为网络设备供应商与承包商从事通信网络及基础设施建设。",
  },

  whyEyebrow: { mn: "Давуу тал", en: "Benefits", ko: "장점", zh: "优势" },
  whyTitle: {
    mn: "Яагаад SD-WAN сонгох вэ?",
    en: "Why choose SD-WAN?",
    ko: "왜 SD-WAN을 선택해야 할까요?",
    zh: "为什么选择 SD-WAN？",
  },

  archEyebrow: { mn: "Архитектур", en: "Architecture", ko: "아키텍처", zh: "架构" },
  archTitle: {
    mn: "Байгууллагын ердийн SD-WAN топологи",
    en: "A typical enterprise SD-WAN topology",
    ko: "일반적인 기업 SD-WAN 토폴로지",
    zh: "典型企业 SD-WAN 拓扑",
  },
  transport: { mn: "Тээвэрлэлт", en: "Transport", ko: "전송 회선", zh: "传输链路" },
  archCaption: {
    mn: "Гурван тээвэрлэлтийг нэг overlay-д нэгтгэж, аппликейшн тус бүрээр зам сонгоно. Контроллер тасарсан ч салбарын урсгал үргэлжилнэ (controllerless загварт).",
    en: "Three transports are combined into one overlay, with paths chosen per application. Branch traffic keeps flowing even if the controller goes offline (in controllerless designs).",
    ko: "세 가지 전송 회선을 하나의 오버레이로 통합하고 애플리케이션별로 경로를 선택합니다. 컨트롤러 연결이 끊겨도 지점 트래픽은 계속 유지됩니다(컨트롤러리스 구성 시).",
    zh: "三种传输链路整合进同一 overlay，按应用选择路径。即使控制器离线，分支流量仍可持续（无控制器架构下）。",
  },

  devicesEyebrow: { mn: "Тоног төхөөрөмж", en: "Equipment", ko: "장비", zh: "设备" },
  devicesTitle: {
    mn: "Төхөөрөмжийн 4 үндсэн төрөл",
    en: "4 core device types",
    ko: "4가지 핵심 장비 유형",
    zh: "四种核心设备类型",
  },

  selectionEyebrow: { mn: "Сонголтын практик", en: "Selection in practice", ko: "선정 실무", zh: "选型实践" },
  selectionTitle: {
    mn: "Техникийн шалгуурууд ба хамгийн нийтлэг алдаанууд",
    en: "Technical criteria and the most common mistakes",
    ko: "기술 기준과 가장 흔한 실수",
    zh: "技术标准与最常见的错误",
  },
  criteriaTitle: {
    mn: "Төхөөрөмж сонгох 6 техникийн шалгуур",
    en: "6 technical criteria for choosing equipment",
    ko: "장비 선정을 위한 6가지 기술 기준",
    zh: "设备选型的六项技术标准",
  },
  mistakesTitle: {
    mn: "Практикт хамгийн түгээмэл 4 алдаа",
    en: "The 4 most common mistakes in practice",
    ko: "실무에서 가장 흔한 4가지 실수",
    zh: "实践中最常见的四个错误",
  },
  hiddenTitle: {
    mn: "SD-WAN analytics нэвтрүүлснээр ил болдог далд асуудлууд",
    en: "Hidden problems SD-WAN analytics brings to light",
    ko: "SD-WAN 분석 도입 시 드러나는 숨은 문제",
    zh: "部署 SD-WAN 分析后暴露的隐性问题",
  },

  convergedEyebrow: { mn: "Цогц шийдэл", en: "Complete solution", ko: "통합 솔루션", zh: "整体解决方案" },
  convergedTitle: {
    mn: "Converged архитектур ба бидний зөвлөмж",
    en: "Converged architecture and our recommendations",
    ko: "컨버지드 아키텍처와 당사의 추천",
    zh: "融合架构与我们的建议",
  },
  layersTitle: {
    mn: "Цогц converged платформын 6 давхарга",
    en: "The 6 layers of a converged platform",
    ko: "컨버지드 플랫폼의 6개 계층",
    zh: "融合平台的六个层级",
  },
  phasesTitle: { mn: "Шаталсан нэвтрүүлэлт", en: "Phased rollout", ko: "단계별 도입", zh: "分阶段实施" },
  vendorsTitle: {
    mn: "Хэрэглээний төрлөөр — вендорын зөвлөмж",
    en: "Vendor recommendations by use case",
    ko: "용도별 벤더 추천",
    zh: "按应用场景推荐厂商",
  },
  priceNote: {
    mn: "Үнэ нь ойролцоо бөгөөд төслийн хүрээнээс хамаарна.",
    en: "Prices are indicative and depend on project scope.",
    ko: "가격은 참고용이며 프로젝트 범위에 따라 달라집니다.",
    zh: "价格仅供参考，视项目范围而定。",
  },

  faqEyebrow: { mn: "Асуулт, хариулт", en: "FAQ", ko: "FAQ", zh: "常见问题" },
  faqTitle: {
    mn: "SD-WAN-ийн талаар түгээмэл асуултууд",
    en: "Frequently asked questions about SD-WAN",
    ko: "SD-WAN 자주 묻는 질문",
    zh: "关于 SD-WAN 的常见问题",
  },

  contactTitle: { mn: "Холбоо барих", en: "Contact us", ko: "문의하기", zh: "联系我们" },
  conclusion: {
    mn: "SD-WAN бол зөвхөн холболт биш — байгууллагын ирээдүйн платформ.",
    en: "SD-WAN is more than connectivity — it's your organization's future platform.",
    ko: "SD-WAN은 단순한 연결이 아니라 조직의 미래 플랫폼입니다.",
    zh: "SD-WAN 不只是连接——更是企业面向未来的平台。",
  },
  nextStep: {
    mn: "Дараагийн алхам: PoC (туршилтын нэвтрүүлэлт)-ийн хүрээг тодруулах уулзалт товлох.",
    en: "Next step: schedule a meeting to scope a proof of concept (PoC).",
    ko: "다음 단계: PoC(개념 검증) 범위를 정의하기 위한 미팅을 잡으세요.",
    zh: "下一步：预约会议，明确 PoC（概念验证）范围。",
  },
  phoneLabel: { mn: "Утас", en: "Phone", ko: "전화", zh: "电话" },
  emailLabel: { mn: "Имэйл", en: "Email", ko: "이메일", zh: "邮箱" },
  ctaMeeting: { mn: "Уулзалт товлох", en: "Book a meeting", ko: "미팅 예약", zh: "预约会议" },
} satisfies Record<string, L10n>;

const SERVICE_STEPS: L10n[] = [
  {
    mn: "Хэрэгцээний судалгаа, сүлжээний зураг төсөл",
    en: "Needs assessment & network design",
    ko: "요구사항 분석 및 네트워크 설계",
    zh: "需求调研与网络设计",
  },
  {
    mn: "Үйлдвэрлэгч, тоног төхөөрөмжийн сонголт",
    en: "Vendor and equipment selection",
    ko: "제조사 및 장비 선정",
    zh: "厂商与设备选型",
  },
  {
    mn: "Суурилуулалт, нэвтрүүлэлт (PoC-оос эхлэн)",
    en: "Installation & rollout (starting with a PoC)",
    ko: "설치 및 구축 (PoC부터 시작)",
    zh: "安装与部署（从 PoC 开始）",
  },
  {
    mn: "Хяналт, засвар үйлчилгээ, дэмжлэг",
    en: "Monitoring, maintenance & support",
    ko: "모니터링, 유지보수 및 기술 지원",
    zh: "监控、维护与技术支持",
  },
];

type Point = { icon: React.ElementType; title: L10n; desc: L10n };

const BENEFITS: Point[] = [
  {
    icon: Network,
    title: {
      mn: "ISP-ээс үл хамаарах сүлжээ",
      en: "ISP-independent network",
      ko: "ISP에 종속되지 않는 네트워크",
      zh: "不依赖单一 ISP 的网络",
    },
    desc: {
      mn: "Олон интернэт үйлчилгээ үзүүлэгчийн холболтыг зэрэг ашиглана. Нэг шугам тасарвал урсгал бусад шугам руу автоматаар шилжинэ.",
      en: "Use links from several internet providers at once. If one line fails, traffic automatically moves to the others.",
      ko: "여러 인터넷 서비스 제공업체의 회선을 동시에 사용합니다. 한 회선이 끊기면 트래픽이 자동으로 다른 회선으로 전환됩니다.",
      zh: "同时使用多家互联网服务提供商的链路，一条线路中断时流量自动切换至其他线路。",
    },
  },
  {
    icon: Coins,
    title: {
      mn: "WAN зардал 40–60% буурна",
      en: "40–60% lower WAN costs",
      ko: "WAN 비용 40–60% 절감",
      zh: "WAN 成本降低 40–60%",
    },
    desc: {
      mn: "Үнэтэй MPLS шугамын хамаарлыг бууруулж, broadband болон LTE/5G холболтыг үр ашигтай ашиглана.",
      en: "Reduce dependence on expensive MPLS lines and make efficient use of broadband and LTE/5G.",
      ko: "고가의 MPLS 회선 의존도를 낮추고 브로드밴드와 LTE/5G를 효율적으로 활용합니다.",
      zh: "降低对昂贵 MPLS 专线的依赖，高效利用宽带与 LTE/5G 链路。",
    },
  },
  {
    icon: Gauge,
    title: {
      mn: "Аппликейшн бүрт оновчтой зам",
      en: "The best path for every application",
      ko: "애플리케이션별 최적 경로",
      zh: "为每个应用选择最佳路径",
    },
    desc: {
      mn: "Видео хурал, ERP, POS зэрэг чухал системийн урсгалыг хамгийн найдвартай шугамаар дамжуулна.",
      en: "Critical traffic such as video meetings, ERP and POS is routed over the most reliable link.",
      ko: "화상회의, ERP, POS 등 중요한 트래픽을 가장 안정적인 회선으로 전송합니다.",
      zh: "视频会议、ERP、POS 等关键业务流量经由最可靠的线路传输。",
    },
  },
  {
    icon: LayoutDashboard,
    title: {
      mn: "Нэг цэгээс төвлөрсөн удирдлага",
      en: "Centralized management",
      ko: "중앙 집중식 관리",
      zh: "集中统一管理",
    },
    desc: {
      mn: "Бүх салбарын сүлжээ, бодлогыг нэг dashboard-аас удирдана. ZTP-ээр шинэ салбарыг инженер явуулахгүйгээр холбоно.",
      en: "Manage every branch's network and policies from one dashboard. With ZTP, new branches come online without sending an engineer.",
      ko: "모든 지점의 네트워크와 정책을 하나의 대시보드에서 관리합니다. ZTP로 엔지니어 파견 없이 새 지점을 연결합니다.",
      zh: "通过统一仪表盘管理所有分支的网络与策略，借助 ZTP 无需派遣工程师即可开通新分支。",
    },
  },
  {
    icon: ShieldCheck,
    title: {
      mn: "Суурилагдсан аюулгүй байдал",
      en: "Built-in security",
      ko: "내장된 보안",
      zh: "内置安全防护",
    },
    desc: {
      mn: "IPsec шифрлэлт, NGFW, IPS зэрэг хамгаалалтаар салбар хоорондын болон cloud руу гарах урсгалыг хамгаална.",
      en: "IPsec encryption, NGFW and IPS protect traffic between branches and to the cloud.",
      ko: "IPsec 암호화, NGFW, IPS로 지점 간 및 클라우드 트래픽을 보호합니다.",
      zh: "通过 IPsec 加密、NGFW、IPS 等防护，保障分支之间及访问云端的流量安全。",
    },
  },
  {
    icon: Thermometer,
    title: {
      mn: "Монголын нөхцөлд тохирсон",
      en: "Built for Mongolian conditions",
      ko: "몽골 환경에 적합",
      zh: "适应蒙古国环境",
    },
    desc: {
      mn: "–40°C, IP65 зэрэглэлтэй тоног төхөөрөмжөөр уурхай, алслагдсан цэгүүдийг ч найдвартай холбоно.",
      en: "Equipment rated for –40°C and IP65 reliably connects mines and remote sites.",
      ko: "–40°C, IP65 등급 장비로 광산과 원격 현장도 안정적으로 연결합니다.",
      zh: "采用耐 –40°C、IP65 防护等级的设备，可靠连接矿区及偏远站点。",
    },
  },
];

const MPLS_UTIL: L10n = {
  mn: "MPLS шугамын дан ашиглалт",
  en: "Typical MPLS-only link utilization",
  ko: "일반적인 MPLS 단독 회선 활용률",
  zh: "MPLS 专线单独使用率",
};

const HERO_STATS: { value: string; label: L10n }[] = [
  {
    value: "29%",
    label: {
      mn: "SD-WAN зах зээлийн жилийн дундаж өсөлт (CAGR)",
      en: "Average annual SD-WAN market growth (CAGR)",
      ko: "SD-WAN 시장 연평균 성장률 (CAGR)",
      zh: "SD-WAN 市场年均复合增长率 (CAGR)",
    },
  },
  {
    value: "40–60%",
    label: { mn: "WAN зардлын бууралт", en: "Reduction in WAN costs", ko: "WAN 비용 절감", zh: "WAN 成本降低" },
  },
  { value: "60–70%", label: MPLS_UTIL },
];

type Node = { icon: React.ElementType; title: L10n; sub: L10n };

const SITES: Node[] = [
  {
    icon: Building2,
    title: { mn: "Төв салбар", en: "Headquarters", ko: "본사", zh: "总部" },
    sub: { mn: "LAN · хэрэглэгчид", en: "LAN · users", ko: "LAN · 사용자", zh: "LAN · 用户" },
  },
  {
    icon: Store,
    title: { mn: "Дэд салбар", en: "Branch office", ko: "지점", zh: "分支机构" },
    sub: { mn: "Жижиг офис · POS", en: "Small office · POS", ko: "소규모 사무실 · POS", zh: "小型办公室 · POS" },
  },
  {
    icon: Pickaxe,
    title: { mn: "Уурхайн цэг", en: "Mine site", ko: "광산 현장", zh: "矿区站点" },
    sub: all("IP65 · –40°C · LTE"),
  },
];

const CONTROLLER: Node = {
  icon: CloudCog,
  title: { mn: "Централ контроллер", en: "Central controller", ko: "중앙 컨트롤러", zh: "中央控制器" },
  sub: { mn: "ZTP · бодлого · AIOps", en: "ZTP · policy · AIOps", ko: "ZTP · 정책 · AIOps", zh: "ZTP · 策略 · AIOps" },
};

const DATA_CENTER: Node = {
  icon: Server,
  title: { mn: "Дата төв / Төв байр", en: "Data center / HQ", ko: "데이터센터 / 본사", zh: "数据中心 / 总部机房" },
  sub: {
    mn: "NGFW · HCI · Storage · Апп сервер · архив",
    en: "NGFW · HCI · Storage · App servers · archive",
    ko: "NGFW · HCI · 스토리지 · 앱 서버 · 아카이브",
    zh: "NGFW · HCI · 存储 · 应用服务器 · 归档",
  },
};

const CLOUD: Node = {
  icon: Cloud,
  title: all("Cloud / SaaS"),
  sub: {
    mn: "M365 · Azure · AWS — шууд гарц (local breakout)",
    en: "M365 · Azure · AWS — direct local breakout",
    ko: "M365 · Azure · AWS — 로컬 브레이크아웃 직접 연결",
    zh: "M365 · Azure · AWS — 本地直连出口 (local breakout)",
  },
};

const DEVICE_TYPES: { icon: React.ElementType; name: string; tag: L10n; desc: L10n; examples: string }[] = [
  {
    icon: Router,
    name: "Hardware CPE",
    tag: { mn: "Физик тоног", en: "Physical appliance", ko: "물리 장비", zh: "物理设备" },
    desc: {
      mn: "IP65, –40°C · throughput хамгийн өндөр",
      en: "IP65, –40°C · highest throughput",
      ko: "IP65, –40°C · 최고 수준의 처리량",
      zh: "IP65、–40°C · 吞吐量最高",
    },
    examples: "FortiGate 40F–600F · Huawei AR",
  },
  {
    icon: Boxes,
    name: "uCPE / vCPE",
    tag: { mn: "x86 + VNF платформ", en: "x86 + VNF platform", ko: "x86 + VNF 플랫폼", zh: "x86 + VNF 平台" },
    desc: {
      mn: "SD-WAN + FW + Router нэг хайрцагт",
      en: "SD-WAN + firewall + router in one box",
      ko: "SD-WAN + 방화벽 + 라우터를 하나의 장비에",
      zh: "SD-WAN + 防火墙 + 路由器 一体化",
    },
    examples: "Juniper NFX · Dell EMC uCPE",
  },
  {
    icon: Cloud,
    name: "Virtual Appliance",
    tag: { mn: "Cloud-д ажиллах VM", en: "VM running in the cloud", ko: "클라우드 VM", zh: "云端虚拟机" },
    desc: {
      mn: "Hardware зардалгүй · scale out хялбар",
      en: "No hardware cost · easy to scale out",
      ko: "하드웨어 비용 없음 · 손쉬운 확장",
      zh: "无硬件成本 · 易于横向扩展",
    },
    examples: "FortiGate-VM · Cisco CSR 1000v",
  },
  {
    icon: Plug,
    name: "Cloud-managed ZTP",
    tag: all("Plug & Play"),
    desc: {
      mn: "Залгаад л ажиллана · инженер явуулахгүй",
      en: "Plug in and it works · no engineer on site",
      ko: "연결만 하면 작동 · 현장 엔지니어 불필요",
      zh: "即插即用 · 无需派驻工程师",
    },
    examples: "Meraki MX · Cato · Aryaka",
  },
];

const CRITERIA: Point[] = [
  {
    icon: Gauge,
    title: all("Throughput"),
    desc: {
      mn: "Firewall ≠ SD-WAN throughput. NGFW+IPS горимд 27 Gbps → 2–4 Gbps болж буурна.",
      en: "Firewall ≠ SD-WAN throughput. In NGFW+IPS mode, 27 Gbps drops to 2–4 Gbps.",
      ko: "방화벽 처리량 ≠ SD-WAN 처리량. NGFW+IPS 모드에서는 27 Gbps가 2–4 Gbps로 떨어집니다.",
      zh: "防火墙吞吐量 ≠ SD-WAN 吞吐量。在 NGFW+IPS 模式下，27 Gbps 会降至 2–4 Gbps。",
    },
  },
  {
    icon: Cable,
    title: { mn: "WAN портын тоо", en: "Number of WAN ports", ko: "WAN 포트 수", zh: "WAN 端口数量" },
    desc: {
      mn: "Хамгийн багадаа 2, ихэвчлэн 3 порт: MPLS + Broadband + LTE. SFP+ шаардлагыг шалгах.",
      en: "At least 2, typically 3 ports: MPLS + broadband + LTE. Check SFP+ requirements.",
      ko: "최소 2개, 일반적으로 3개 포트: MPLS + 브로드밴드 + LTE. SFP+ 요구사항을 확인하세요.",
      zh: "至少 2 个，通常 3 个端口：MPLS + 宽带 + LTE。需确认 SFP+ 需求。",
    },
  },
  {
    icon: Workflow,
    title: all("High Availability"),
    desc: {
      mn: "Чухал салбарт Active-Active. Failover sub-second, dedicated HA порттой эсэх.",
      en: "Active-Active for critical sites. Sub-second failover and a dedicated HA port.",
      ko: "핵심 사이트는 Active-Active 구성. 1초 미만 페일오버 및 전용 HA 포트 여부 확인.",
      zh: "关键站点采用 Active-Active。亚秒级故障切换，是否具备专用 HA 端口。",
    },
  },
  {
    icon: Cpu,
    title: all("CPU / RAM / ASIC"),
    desc: {
      mn: "VNF бүрт тусдаа core. RAM 4 GB (жижиг) – 16 GB (дунд). ASIC шифрлэлт offload.",
      en: "A dedicated core per VNF. 4 GB RAM (small) to 16 GB (medium). ASIC encryption offload.",
      ko: "VNF별 전용 코어. RAM 4 GB(소규모)–16 GB(중규모). ASIC 암호화 오프로드.",
      zh: "每个 VNF 独占核心。内存 4 GB（小型）– 16 GB（中型）。ASIC 加密卸载。",
    },
  },
  {
    icon: Thermometer,
    title: { mn: "Орчны тэсвэр", en: "Environmental durability", ko: "환경 내구성", zh: "环境耐受性" },
    desc: {
      mn: "Монголын нөхцөлд –40°C, IP65, fanless, DIN-rail — уурхай, ж/д-ийн цэгүүдэд.",
      en: "Built for Mongolian conditions: –40°C, IP65, fanless, DIN-rail — for mine and railway sites.",
      ko: "몽골 환경 기준: –40°C, IP65, 팬리스, DIN 레일 — 광산 및 철도 현장용.",
      zh: "适应蒙古国环境：–40°C、IP65、无风扇、DIN 导轨 — 适用于矿区及铁路站点。",
    },
  },
  {
    icon: Coins,
    title: { mn: "Лиценз ба TCO", en: "Licensing & TCO", ko: "라이선스 및 TCO", zh: "许可与 TCO" },
    desc: {
      mn: "Subscription vs perpetual, UTM bundle, TAC support — 3–5 жилийн нийт өртгөөр харьцуул.",
      en: "Subscription vs. perpetual, UTM bundles, TAC support — compare on 3–5 year total cost.",
      ko: "구독형 vs 영구 라이선스, UTM 번들, TAC 지원 — 3–5년 총소유비용으로 비교하세요.",
      zh: "订阅制与永久许可、UTM 套餐、TAC 支持 — 按 3–5 年总拥有成本比较。",
    },
  },
];

const MISTAKES: Point[] = [
  {
    icon: TriangleAlert,
    title: { mn: "Throughput-ийг буруу ойлгох", en: "Misreading throughput", ko: "처리량에 대한 오해", zh: "误解吞吐量" },
    desc: {
      mn: "Каталогийн 27 Gbps нь plain routing. UTM/NGFW горимд 2–4 Gbps. Тендерт заавал NGFW горимд хэмжүүл.",
      en: "The 27 Gbps on the datasheet is plain routing. In UTM/NGFW mode it's 2–4 Gbps. Always require NGFW-mode figures in tenders.",
      ko: "카탈로그의 27 Gbps는 단순 라우팅 기준입니다. UTM/NGFW 모드에서는 2–4 Gbps입니다. 입찰 시 반드시 NGFW 모드 기준으로 측정하게 하세요.",
      zh: "规格书上的 27 Gbps 是纯路由性能，UTM/NGFW 模式下仅 2–4 Gbps。招标时务必要求按 NGFW 模式测量。",
    },
  },
  {
    icon: Coins,
    title: { mn: "TCO тооцохгүй байх", en: "Ignoring TCO", ko: "TCO를 고려하지 않음", zh: "忽视总拥有成本" },
    desc: {
      mn: "Hardware $800 гэхэд 3 жилийн нийт ≈ $5,000+. Тоног нь нийт зардлын 15% л — үлдсэн нь лиценз, support.",
      en: "An $800 appliance can cost $5,000+ over 3 years. Hardware is only ~15% of the total — the rest is licensing and support.",
      ko: "$800짜리 장비도 3년 총비용은 약 $5,000 이상입니다. 하드웨어는 전체 비용의 15%에 불과하고 나머지는 라이선스와 지원 비용입니다.",
      zh: "一台 $800 的设备，三年总成本约 $5,000 以上。硬件仅占总成本约 15%，其余为许可与支持费用。",
    },
  },
  {
    icon: Lock,
    title: { mn: "Vendor lock-in", en: "Vendor lock-in", ko: "벤더 종속", zh: "厂商锁定" },
    desc: {
      mn: "Зарим cloud-managed тоног лиценз дуусахад ажиллахаа болино. Шилжихэд бүх hardware солино.",
      en: "Some cloud-managed devices stop working when the license expires. Switching vendors means replacing all hardware.",
      ko: "일부 클라우드 관리형 장비는 라이선스가 만료되면 작동을 멈춥니다. 제조사를 바꾸려면 모든 하드웨어를 교체해야 합니다.",
      zh: "部分云管理设备在许可到期后即停止工作，更换厂商需替换全部硬件。",
    },
  },
  {
    icon: TrendingUp,
    title: { mn: "Дэмжлэг ба scaling", en: "Support & scaling", ko: "지원 및 확장성", zh: "支持与扩展" },
    desc: {
      mn: "Монголд резидент инженер, сертификаттай partner байгаа эсэх. 10 салбар → 50 болоход лицензийн jump cost.",
      en: "Is there a resident engineer and certified partner in Mongolia? Watch for license jump costs when growing from 10 to 50 sites.",
      ko: "몽골 현지 상주 엔지니어와 공인 파트너가 있는지 확인하세요. 지점이 10개에서 50개로 늘어날 때 라이선스 비용 급증에 유의하세요.",
      zh: "在蒙古国是否有驻场工程师和认证合作伙伴？站点从 10 个增至 50 个时需注意许可费用跳涨。",
    },
  },
];

const HIDDEN_STATS: { value: L10n; label: L10n }[] = [
  { value: all("60–70%"), label: MPLS_UTIL },
  {
    value: all("340+"),
    label: {
      mn: "аудитад илэрсэн Shadow IT апп",
      en: "Shadow IT apps uncovered in audits",
      ko: "감사에서 발견된 섀도 IT 앱",
      zh: "审计中发现的影子 IT 应用",
    },
  },
  {
    value: { mn: "207 хоног", en: "207 days", ko: "207일", zh: "207 天" },
    label: {
      mn: "хакдагдсанаа мэдэх дундаж хугацаа",
      en: "average time to discover a breach",
      ko: "침해 사실을 인지하기까지 평균 기간",
      zh: "发现遭入侵的平均时间",
    },
  },
  {
    value: all("90%"),
    label: {
      mn: "compliance тайлангийн цаг хэмнэлт",
      en: "time saved on compliance reporting",
      ko: "컴플라이언스 보고 시간 절감",
      zh: "合规报告时间节省",
    },
  },
];

const LAYERS: { icon: React.ElementType; name: string; desc: L10n }[] = [
  { icon: Wifi, name: "WAN / Edge", desc: all("SD-WAN CPE · MPLS · Broadband · LTE/5G · dynamic path · ZTP") },
  { icon: ShieldCheck, name: "Security", desc: all("NGFW · IPS/IDS · Zero Trust · SIEM · DLP · CASB · AES-256") },
  { icon: Cpu, name: "Compute (HCI)", desc: all("FusionCube / SimpliVity · VMware/KVM · VNF · edge compute · HA") },
  {
    icon: HardDrive,
    name: "Storage",
    desc: {
      mn: "All-flash NVMe · Block/File/Object нэгдсэн · NAS backup",
      en: "All-flash NVMe · unified Block/File/Object · NAS backup",
      ko: "All-flash NVMe · Block/File/Object 통합 · NAS 백업",
      zh: "全闪存 NVMe · 块/文件/对象统一存储 · NAS 备份",
    },
  },
  { icon: BrainCircuit, name: "AI / Analytics", desc: all("AIOps · anomaly detection · predictive maintenance · ML") },
  {
    icon: LayoutDashboard,
    name: "Management",
    desc: {
      mn: "Нэг dashboard · cloud portal · REST API · RBAC · multi-tenant",
      en: "Single dashboard · cloud portal · REST API · RBAC · multi-tenant",
      ko: "단일 대시보드 · 클라우드 포털 · REST API · RBAC · 멀티테넌트",
      zh: "统一仪表盘 · 云门户 · REST API · RBAC · 多租户",
    },
  },
];

const PHASES: { name: string; cost: L10n }[] = [
  { name: "SD-WAN + NGFW", cost: all("$15K+") },
  { name: "HCI mini DC", cost: all("+$20K") },
  { name: "SIEM + AIOps", cost: { mn: "+$10K/жил", en: "+$10K/yr", ko: "+$10K/년", zh: "+$10K/年" } },
  { name: "SASE full stack", cost: all("—") },
];

const VENDORS: { icon: React.ElementType; useCase: L10n; vendor: string; note: L10n }[] = [
  {
    icon: Pickaxe,
    useCase: { mn: "Уул уурхай · алслагдсан цэг", en: "Mining · remote sites", ko: "광산 · 원격 현장", zh: "矿业 · 偏远站点" },
    vendor: "Huawei Rugged AR",
    note: {
      mn: "IP65 · –40°C · 5G built-in",
      en: "IP65 · –40°C · 5G built-in",
      ko: "IP65 · –40°C · 5G 내장",
      zh: "IP65 · –40°C · 内置 5G",
    },
  },
  {
    icon: Landmark,
    useCase: { mn: "Банк · санхүү", en: "Banking · finance", ko: "은행 · 금융", zh: "银行 · 金融" },
    vendor: "Fortinet FortiGate",
    note: {
      mn: "Аюулгүй байдал 4.9/5 · ASIC",
      en: "Security 4.9/5 · ASIC",
      ko: "보안 4.9/5 · ASIC",
      zh: "安全性 4.9/5 · ASIC",
    },
  },
  {
    icon: Store,
    useCase: { mn: "Олон жижиг салбар", en: "Many small branches", ko: "다수의 소규모 지점", zh: "众多小型分支" },
    vendor: "Cisco Meraki MX",
    note: { mn: "ZTP · хамгийн хялбар UI", en: "ZTP · simplest UI", ko: "ZTP · 가장 쉬운 UI", zh: "ZTP · 界面最简洁" },
  },
  {
    icon: Cloud,
    useCase: {
      mn: "Cloud-first байгууллага",
      en: "Cloud-first organizations",
      ko: "클라우드 우선 조직",
      zh: "云优先企业",
    },
    vendor: "Palo Alto Prisma · Cato",
    note: {
      mn: "SASE төрөлх · multi-cloud",
      en: "Native SASE · multi-cloud",
      ko: "네이티브 SASE · 멀티클라우드",
      zh: "原生 SASE · 多云",
    },
  },
];

const BUNDLES: { title: L10n; stack: string; price: string; tone: string }[] = [
  {
    title: { mn: "Нэг вендорын цогц", en: "Single-vendor stack", ko: "단일 벤더 통합", zh: "单一厂商整体方案" },
    stack: "SD-WAN + FusionCube HCI + OceanStor + iMaster AI",
    price: "$12K – $40K",
    tone: "border-amber-200 bg-amber-50/70 text-amber-800",
  },
  {
    title: { mn: "Аюулгүй байдал тэргүүн", en: "Security-first", ko: "보안 우선", zh: "安全优先" },
    stack: "FortiGate + SimpliVity + Alletra + FortiSIEM",
    price: "$20K – $60K",
    tone: "border-cyan-200 bg-cyan-50/70 text-cyan-900",
  },
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">{eyebrow}</span>
      <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-slate-900">{title}</h2>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex items-center justify-center text-indigo-300">
      <ArrowDown className="size-6 md:hidden" />
      <ArrowRight className="hidden size-6 md:block" />
    </div>
  );
}

function PointList({ title, points, lang, accent }: { title: string; points: Point[]; lang: Lang; accent: string }) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-slate-900">{title}</h3>
      <div className="space-y-3">
        {points.map((point) => {
          const Icon = point.icon;
          return (
            <div
              key={point.title.en}
              className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md"
            >
              <div className={`flex size-10 flex-shrink-0 items-center justify-center rounded-lg ${accent}`}>
                <Icon className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{point.title[lang]}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{point.desc[lang]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function SdWan() {
  const { lang } = useLanguage();

  const siteCard = (node: Node) => {
    const Icon = node.icon;
    return (
      <div
        key={node.title.en}
        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3"
      >
        <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-white text-indigo-600 ring-1 ring-slate-200">
          <Icon className="size-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-slate-900">{node.title[lang]}</p>
          <p className="text-xs text-slate-500">{node.sub[lang]}</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-md bg-indigo-50 px-2 py-1 text-[11px] font-semibold text-indigo-700">
          <Router className="size-3.5" />
          CPE
        </span>
      </div>
    );
  };

  return (
    <div className="relative w-full min-h-screen bg-white text-slate-900 font-sans antialiased">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="absolute top-24 -right-32 h-[26rem] w-[26rem] rounded-full bg-cyan-300/25 blur-3xl" />
      </div>

      <Header />

      <main className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
        {/* Hero */}
        <section className="flex flex-col items-center pt-14 text-center md:pt-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 shadow-sm">
            <Network className="size-3.5" />
            {COPY.badge[lang]}
          </span>
          <h1 className="mt-6 max-w-4xl text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            {COPY.h1[lang]}
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-600 md:text-lg">{COPY.lead[lang]}</p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:-translate-y-0.5 hover:shadow-indigo-500/40"
            >
              {COPY.ctaQuote[lang]} <ArrowRight className="size-4" />
            </Link>
            <a
              href="#architecture"
              className="inline-flex items-center rounded-full border border-slate-300 px-8 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
            >
              {COPY.ctaArch[lang]}
            </a>
          </div>

          <div className="mt-14 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.value}
                className="rounded-2xl border border-slate-200 bg-white/80 p-6 text-left shadow-sm backdrop-blur"
              >
                <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
                  {stat.value}
                </div>
                <p className="mt-1.5 text-sm text-slate-600">{stat.label[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What is SD-WAN & our services */}
        <section className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">{COPY.whatTitle[lang]}</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">{COPY.whatBody[lang]}</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-6 shadow-sm md:p-8">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">{COPY.serviceTitle[lang]}</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">{COPY.serviceBody[lang]}</p>
            <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {SERVICE_STEPS.map((step) => (
                <li key={step.en} className="flex gap-2 text-sm text-slate-700">
                  <Check className="mt-0.5 size-4 flex-shrink-0 text-indigo-600" />
                  <span>{step[lang]}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        {/* Why SD-WAN */}
        <section className="mt-24">
          <SectionHeading eyebrow={COPY.whyEyebrow[lang]} title={COPY.whyTitle[lang]} />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title.en}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">{benefit.title[lang]}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{benefit.desc[lang]}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Architecture */}
        <section id="architecture" className="mt-24 scroll-mt-28">
          <SectionHeading eyebrow={COPY.archEyebrow[lang]} title={COPY.archTitle[lang]} />

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
            <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
              <div className="space-y-3">{SITES.map(siteCard)}</div>

              <FlowArrow />

              <div className="flex flex-col items-center">
                <div className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 p-4 text-white shadow-lg shadow-indigo-500/20">
                  <div className="flex items-center gap-2">
                    <CloudCog className="size-5" />
                    <p className="text-sm font-semibold">{CONTROLLER.title[lang]}</p>
                  </div>
                  <p className="mt-1 text-xs text-indigo-100">{CONTROLLER.sub[lang]}</p>
                </div>
                <div className="h-8 border-l-2 border-dashed border-indigo-300" />
                <div className="flex w-full flex-col items-center rounded-[2rem] border-2 border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-indigo-50 px-6 py-10 text-center">
                  <Network className="size-9 text-cyan-600" />
                  <p className="mt-3 text-xl font-bold text-slate-900">SD-WAN overlay</p>
                  <p className="mt-1 text-xs text-slate-500">IPsec · dynamic path</p>
                </div>
              </div>

              <FlowArrow />

              <div className="space-y-3">
                <div className="rounded-xl bg-slate-900 p-5 text-white shadow-lg">
                  <div className="flex items-center gap-2">
                    <Server className="size-5 text-cyan-300" />
                    <p className="text-sm font-semibold">{DATA_CENTER.title[lang]}</p>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">{DATA_CENTER.sub[lang]}</p>
                </div>
                <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-5">
                  <div className="flex items-center gap-2">
                    <Cloud className="size-5 text-amber-600" />
                    <p className="text-sm font-semibold text-slate-900">{CLOUD.title[lang]}</p>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{CLOUD.sub[lang]}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {COPY.transport[lang]}:
              </span>
              <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600">
                MPLS
              </span>
              <span className="rounded-full border border-indigo-300 px-3 py-1 text-xs font-semibold text-indigo-700">
                Broadband
              </span>
              <span className="rounded-full border border-amber-300 px-3 py-1 text-xs font-semibold text-amber-700">
                LTE / 5G
              </span>
            </div>
            <p className="mt-3 text-sm italic text-slate-500">{COPY.archCaption[lang]}</p>
          </div>
        </section>

        {/* Device types */}
        <section className="mt-24">
          <SectionHeading eyebrow={COPY.devicesEyebrow[lang]} title={COPY.devicesTitle[lang]} />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DEVICE_TYPES.map((device) => {
              const Icon = device.icon;
              return (
                <div
                  key={device.name}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{device.name}</h3>
                  <span className="mt-2 inline-flex w-fit rounded-full bg-indigo-50 px-2.5 py-1 text-[11px] font-semibold text-indigo-700">
                    {device.tag[lang]}
                  </span>
                  <p className="mt-3 text-sm text-slate-600">{device.desc[lang]}</p>
                  <p className="mt-auto pt-4 text-xs font-medium text-slate-400">{device.examples}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Selection criteria & mistakes */}
        <section className="mt-24">
          <SectionHeading eyebrow={COPY.selectionEyebrow[lang]} title={COPY.selectionTitle[lang]} />
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <PointList
              title={COPY.criteriaTitle[lang]}
              points={CRITERIA}
              lang={lang}
              accent="bg-indigo-50 text-indigo-600"
            />
            <PointList
              title={COPY.mistakesTitle[lang]}
              points={MISTAKES}
              lang={lang}
              accent="bg-amber-50 text-amber-600"
            />
          </div>

          <div className="mt-10 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 text-center shadow-2xl shadow-indigo-900/20 md:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {COPY.hiddenTitle[lang]}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
              {HIDDEN_STATS.map((stat) => (
                <div key={stat.value.en}>
                  <div className="text-2xl font-bold text-amber-400 md:text-3xl">{stat.value[lang]}</div>
                  <p className="mt-2 text-xs text-slate-300 md:text-sm">{stat.label[lang]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Converged architecture & recommendations */}
        <section className="mt-24">
          <SectionHeading eyebrow={COPY.convergedEyebrow[lang]} title={COPY.convergedTitle[lang]} />
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-slate-900">{COPY.layersTitle[lang]}</h3>
              <div className="space-y-3">
                {LAYERS.map((layer, i) => {
                  const Icon = layer.icon;
                  return (
                    <div
                      key={layer.name}
                      className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                    >
                      <div
                        className={`flex size-10 flex-shrink-0 items-center justify-center rounded-lg ${
                          i % 2 === 0 ? "bg-cyan-50 text-cyan-700" : "bg-slate-900 text-white"
                        }`}
                      >
                        <Icon className="size-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-900">{layer.name}</p>
                        <p className="mt-0.5 text-xs text-slate-500">{layer.desc[lang]}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <h3 className="mb-4 mt-8 text-lg font-semibold text-slate-900">{COPY.phasesTitle[lang]}</h3>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {PHASES.map((phase, i) => (
                  <div key={phase.name} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <span className="flex size-8 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="mt-3 text-sm font-semibold text-slate-900">{phase.name}</p>
                    <p className="mt-1 text-xs font-medium text-indigo-600">{phase.cost[lang]}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-slate-900">{COPY.vendorsTitle[lang]}</h3>
              <div className="space-y-3">
                {VENDORS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.vendor}
                      className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md"
                    >
                      <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                        <Icon className="size-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-slate-500">{item.useCase[lang]}</p>
                        <p className="text-base font-semibold text-slate-900">{item.vendor}</p>
                      </div>
                      <p className="hidden text-right text-xs font-medium text-cyan-700 sm:block">
                        {item.note[lang]}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {BUNDLES.map((bundle) => (
                  <div key={bundle.stack} className={`rounded-xl border p-5 ${bundle.tone}`}>
                    <p className="text-sm font-semibold">{bundle.title[lang]}</p>
                    <p className="mt-3 text-sm">{bundle.stack}</p>
                    <p className="mt-2 text-lg font-bold">{bundle.price}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-slate-400">{COPY.priceNote[lang]}</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-24">
          <SectionHeading eyebrow={COPY.faqEyebrow[lang]} title={COPY.faqTitle[lang]} />
          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {SDWAN_FAQ.map((item) => (
              <details
                key={item.q.en}
                className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm open:border-indigo-200"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <h3 className="text-left text-sm font-semibold text-slate-900 md:text-base">{item.q[lang]}</h3>
                  <ChevronDown className="size-5 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a[lang]}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mt-24 flex flex-col items-start gap-8 rounded-3xl bg-gradient-to-r from-indigo-600 to-cyan-500 p-8 text-white shadow-2xl shadow-indigo-500/20 md:flex-row md:items-center md:justify-between md:p-12"
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{COPY.contactTitle[lang]}</h2>
            <p className="mt-3 text-base font-semibold md:text-lg">{COPY.conclusion[lang]}</p>
            <p className="mt-2 text-sm text-indigo-50 md:text-base">{COPY.nextStep[lang]}</p>
            <div className="mt-6 flex flex-col gap-3 text-sm sm:flex-row sm:gap-8">
              <a href={`tel:${CONTACT_PHONE_TEL}`} className="inline-flex items-center gap-2 font-semibold hover:underline">
                <Phone className="size-4" />
                {COPY.phoneLabel[lang]}: {CONTACT_PHONE_DISPLAY}
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 font-semibold hover:underline">
                <Mail className="size-4" />
                {COPY.emailLabel[lang]}: {CONTACT_EMAIL}
              </a>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-indigo-700 shadow-lg transition-all hover:-translate-y-0.5"
          >
            {COPY.ctaMeeting[lang]}
            <ArrowRight className="size-4" />
          </Link>
        </section>
      </main>
    </div>
  );
}

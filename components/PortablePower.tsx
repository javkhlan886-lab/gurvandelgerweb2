"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BatteryCharging,
  Cable,
  Check,
  Lightbulb,
  Laptop,
  Mail,
  MonitorSmartphone,
  Package,
  Phone,
  Plug,
  Power,
  Refrigerator,
  Ruler,
  Scissors,
  ShieldCheck,
  Snowflake,
  Sun,  Usb,
  Wrench,
  Zap,
} from "lucide-react";
import Header from "./Header";
import { useLanguage, type Lang } from "@/lib/i18n";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from "@/lib/site";

type L10n = Record<Lang, string>;

const all = (s: string): L10n => ({ mn: s, en: s, ko: s, zh: s });

export const MODEL = "BSBK-2200W";

// The sales line printed on the product brochure — separate from the office
// number in lib/site.ts, so orders reach the sales team directly.
const SALES_PHONE_DISPLAY = "9929-5665";
const SALES_PHONE_TEL = "+97699295665";

const COPY = {
  badge: {
    mn: "Нүүдлийн эрчим хүчний иж бүрдэл",
    en: "Portable power kit",
    ko: "이동형 전력 키트",
    zh: "移动能源套装",
  },
  h1: {
    mn: "2.2 кВт·ц зөөврийн сэргээгдэх эрчим хүчний систем",
    en: "2.2 kWh portable renewable power system",
    ko: "2.2kWh 이동형 신재생 발전 시스템",
    zh: "2.2 kWh 便携式可再生能源系统",
  },
  lead: {
    mn: "400 Вт нарны хавтан, LiFePO₄ батерей, 2200 Вт гаралт. Гэр, отор, зуслан, талбайн ажлын байрыг цахилгааны шугамгүйгээр тасралтгүй хангана.",
    en: "A 400 W solar panel, a LiFePO₄ battery and 2200 W of output. Keeps a ger, herding camp, cabin or work site powered with no grid connection.",
    ko: "400W 태양광 패널, LiFePO₄ 배터리, 2200W 출력. 전력망 없이도 게르, 목축 캠프, 별장, 작업 현장에 전기를 끊김 없이 공급합니다.",
    zh: "400 W 太阳能板、LiFePO₄ 电池、2200 W 输出。无需接入电网，即可为蒙古包、牧场、度假屋和作业现场持续供电。",
  },
  ctaOrder: { mn: "Захиалга өгөх", en: "Place an order", ko: "주문하기", zh: "立即订购" },
  ctaSpecs: { mn: "Техникийн үзүүлэлт", en: "Technical specs", ko: "기술 사양", zh: "技术参数" },

  highlights: [
    {
      mn: "220В розетка хоёр — айлын цахилгаан хэрэгсэл шууд залгана",
      en: "Two 220 V sockets — plug in household appliances directly",
      ko: "220V 콘센트 2구 — 가전제품을 바로 연결",
      zh: "两个 220V 插座 — 家用电器直接插上即用",
    },
    {
      mn: "Нарнаас өдөр бүр өөрөө цэнэглэгдэнэ, түлш шаардахгүй",
      en: "Recharges itself from the sun every day, no fuel needed",
      ko: "매일 태양광으로 자동 충전되어 연료가 필요 없습니다",
      zh: "每天依靠阳光自动充电，无需燃料",
    },
    {
      mn: "200 Вт-ын хоёр эгнээ хавтан — нийт 400 Вт",
      en: "Two rows of 200 W panels — 400 W in total",
      ko: "200W 패널 2열 — 총 400W",
      zh: "两组 200W 板片 — 合计 400W",
    },
  ],

  flowTitle: { mn: "Эрчим хүч хэрхэн урсдаг вэ", en: "How the energy flows", ko: "에너지 흐름", zh: "能量如何流动" },
  kitTitle: { mn: "Иж бүрдэлд багтах", en: "What's in the kit", ko: "구성품", zh: "套装包含" },
  specsTitle: {
    mn: "Техникийн үзүүлэлт ба хэмжээс",
    en: "Technical specifications and dimensions",
    ko: "기술 사양 및 치수",
    zh: "技术参数与尺寸",
  },
  loadsTitle: { mn: "Юуг залгаж болох вэ", en: "What you can plug in", ko: "연결 가능한 기기", zh: "可以连接什么" },
  loadsNote: {
    mn: "2200 Вт хүртэлх нийт ачаалалтай цахилгаан хэрэгслийг зэрэг залгах боломжтой.",
    en: "Appliances totalling up to 2200 W can run at the same time.",
    ko: "합계 2200W까지의 기기를 동시에 사용할 수 있습니다.",
    zh: "可同时连接总功率不超过 2200 W 的电器。",
  },
  panelTitle: {
    mn: "Удирдлагын самбар ба гаралтууд",
    en: "Control panel and outputs",
    ko: "제어 패널 및 출력",
    zh: "控制面板与输出接口",
  },
  outputsTitle: { mn: "Гаралтын төрөл", en: "Output types", ko: "출력 종류", zh: "输出类型" },
  whereTitle: { mn: "Хаана хэрэглэх", en: "Where to use it", ko: "사용 환경", zh: "使用场景" },
  tipsTitle: { mn: "Зөвлөмж", en: "Tips", ko: "사용 팁", zh: "使用建议" },
  dimensionsLabel: { mn: "Гадна хэмжээс", en: "External dimensions", ko: "외형 치수", zh: "外形尺寸" },

  contactTitle: { mn: "Захиалга авч байна", en: "Now taking orders", ko: "주문 접수 중", zh: "正在接受订购" },
  contactLead: {
    mn: "Сумын дэлгүүрүүдээр захиалга авч байна. Иж бүрдэл, үнэ, хүргэлтийн талаар бидэнтэй холбогдоно уу.",
    en: "Orders are being taken through soum shops. Contact us about the kit, pricing and delivery.",
    ko: "솜(군) 상점을 통해 주문을 받고 있습니다. 구성, 가격, 배송에 대해 문의해 주세요.",
    zh: "正通过各苏木商店接受订购。欢迎咨询套装配置、价格与配送。",
  },
  officeLabel: { mn: "Оффис", en: "Office", ko: "사무실", zh: "办公室" },
  salesLabel: { mn: "Борлуулалт", en: "Sales", ko: "영업", zh: "销售" },
  emailLabel: { mn: "И-мэйл", en: "Email", ko: "이메일", zh: "邮箱" },
  ctaContact: { mn: "Холбоо барих", en: "Contact us", ko: "문의하기", zh: "联系我们" },
} as const;

const HERO_STATS: { value: string; label: L10n }[] = [
  {
    value: "2200 Вт",
    label: { mn: "Гаралтын чадал", en: "Output power", ko: "출력", zh: "输出功率" },
  },
  {
    value: "2201.6 Вт·ц",
    label: { mn: "Батерейн багтаамж", en: "Battery capacity", ko: "배터리 용량", zh: "电池容量" },
  },
  {
    value: "LiFePO₄",
    label: { mn: "Батерейн төрөл", en: "Battery chemistry", ko: "배터리 종류", zh: "电池类型" },
  },
  {
    value: "−30…60°C",
    label: { mn: "Ажиллах темп.", en: "Operating temp.", ko: "작동 온도", zh: "工作温度" },
  },
  {
    value: "220В × 2",
    label: { mn: "Розетка", en: "AC sockets", ko: "콘센트", zh: "插座" },
  },
];

const FLOW: { icon: React.ElementType; step: L10n; title: L10n; note: L10n }[] = [
  {
    icon: Sun,
    step: { mn: "Эх үүсвэр", en: "Source", ko: "에너지원", zh: "能量来源" },
    title: { mn: "Нарны эрчим", en: "Solar energy", ko: "태양광", zh: "太阳能" },
    note: { mn: "Дуусашгүй эх үүсвэр", en: "An inexhaustible source", ko: "무한한 에너지원", zh: "取之不尽的能源" },
  },
  {
    icon: Cable,
    step: { mn: "Хураах", en: "Harvest", ko: "수집", zh: "收集" },
    title: { mn: "400Вт хавтан", en: "400 W panel", ko: "400W 패널", zh: "400W 光伏板" },
    note: all("32В"),
  },
  {
    icon: BatteryCharging,
    step: { mn: "Хадгалах", en: "Store", ko: "저장", zh: "存储" },
    title: { mn: "LiFePO₄ батерей", en: "LiFePO₄ battery", ko: "LiFePO₄ 배터리", zh: "LiFePO₄ 电池" },
    note: all("2201.6 Вт·ц"),
  },
  {
    icon: Plug,
    step: { mn: "Хэрэглэх", en: "Use", ko: "사용", zh: "使用" },
    title: { mn: "220В розетка", en: "220 V socket", ko: "220V 콘센트", zh: "220V 插座" },
    note: { mn: "2200 Вт хүртэл", en: "Up to 2200 W", ko: "최대 2200W", zh: "最高 2200 W" },
  },
];

const KIT: { no: string; image: string; width: number; height: number; title: L10n; desc: L10n }[] = [
  {
    no: "01",
    image: "/products/bsbk2200w-solar-panel.png",
    width: 962,
    height: 263,
    title: { mn: "400 Вт нарны хавтан", en: "400 W solar panel", ko: "400W 태양광 패널", zh: "400W 太阳能板" },
    desc: {
      mn: "200 Вт-ын хоёр эгнээ хавтантай, нийт 400 Вт. Эвхэгддэг, зөөвөрлөхөд хялбар.",
      en: "Two rows of 200 W panels, 400 W in total. Folds up and is easy to carry.",
      ko: "200W 패널 2열로 총 400W. 접이식이라 휴대가 간편합니다.",
      zh: "两组 200W 板片，合计 400W。可折叠，便于携带。",
    },
  },
  {
    no: "02",
    image: "/products/bsbk2200w-station.png",
    width: 381,
    height: 311,
    title: {
      mn: "2.2 кВт·ц зөөврийн батерей",
      en: "2.2 kWh portable power station",
      ko: "2.2kWh 이동형 배터리",
      zh: "2.2 kWh 便携电源",
    },
    desc: {
      mn: "LiFePO₄ эсүүд, 220В розетка ×2, USB, DC 24В гаралттай.",
      en: "LiFePO₄ cells with 2× 220 V sockets, USB and a 24 V DC output.",
      ko: "LiFePO₄ 셀, 220V 콘센트 2구, USB, DC 24V 출력.",
      zh: "LiFePO₄ 电芯，220V 插座 ×2、USB 及 DC 24V 输出。",
    },
  },
];

const FEATURES: { icon: React.ElementType; title: L10n; body: L10n }[] = [
  {
    icon: ShieldCheck,
    title: { mn: "LiFePO₄ технологи", en: "LiFePO₄ technology", ko: "LiFePO₄ 기술", zh: "LiFePO₄ 技术" },
    body: {
      mn: "Литий-төмөр-фосфатын эс нь халалтад тэсвэртэй, олон удаагийн цэнэглэлтийг даах урт насжилттай.",
      en: "Lithium iron phosphate cells resist overheating and withstand many charge cycles over a long service life.",
      ko: "리튬인산철 셀은 발열에 강하고 수많은 충전 사이클을 견디는 긴 수명을 갖습니다.",
      zh: "磷酸铁锂电芯耐高温，可承受多次充放电循环，使用寿命长。",
    },
  },
  {
    icon: Zap,
    title: { mn: "Цэвэр синусын гаралт", en: "Pure sine wave output", ko: "순수 정현파 출력", zh: "纯正弦波输出" },
    body: {
      mn: "220В розетка хоёртой тул хөргөгч, зурагт, компьютер, цахилгаан багаж зэргийг шууд залгана.",
      en: "With two 220 V sockets you can run a fridge, TV, computer or power tools directly.",
      ko: "220V 콘센트 2구로 냉장고, TV, 컴퓨터, 전동 공구를 바로 연결할 수 있습니다.",
      zh: "配备两个 220V 插座，冰箱、电视、电脑、电动工具均可直接使用。",
    },
  },
  {
    icon: BatteryCharging,
    title: { mn: "Хоёр талын цэнэглэлт", en: "Charges two ways", ko: "양방향 충전", zh: "双路充电" },
    body: {
      mn: "400 Вт нарны хавтангаас, эсхүл айлын 220В цахилгаан, машины приачаас цэнэглэх боломжтой.",
      en: "Charge from the 400 W solar panel, from a 220 V household outlet or from a car's 24 V socket.",
      ko: "400W 태양광 패널, 가정용 220V 전원, 차량 24V 시거잭으로 충전할 수 있습니다.",
      zh: "可通过 400W 太阳能板、家用 220V 电源或车载 24V 点烟器充电。",
    },
  },
];

// Spec sheet rows: [Mongolian label, value]. Values are unit strings that read
// the same in every language, so only the labels are translated.
const SPECS: { label: L10n; value: string }[] = [
  { label: { mn: "Загвар", en: "Model", ko: "모델", zh: "型号" }, value: MODEL },
  { label: { mn: "Гаралтын чадал", en: "Output power", ko: "출력", zh: "输出功率" }, value: "2200 Вт" },
  { label: { mn: "Батерейн багтаамж", en: "Battery capacity", ko: "배터리 용량", zh: "电池容量" }, value: "2201.6 Вт·ц" },
  { label: { mn: "Батерейн төрөл", en: "Battery type", ko: "배터리 종류", zh: "电池类型" }, value: "LiFePO4" },
  { label: { mn: "AC гаралт", en: "AC output", ko: "AC 출력", zh: "交流输出" }, value: "220В розетка × 2" },
  { label: { mn: "USB гаралт", en: "USB output", ko: "USB 출력", zh: "USB 输出" }, value: "QC3.0 · 5В / 3А" },
  { label: { mn: "Type-C гаралт", en: "Type-C output", ko: "Type-C 출력", zh: "Type-C 输出" }, value: "PD 100Вт" },
  { label: { mn: "DC гаралт", en: "DC output", ko: "DC 출력", zh: "直流输出" }, value: "24В / 10А" },
  { label: { mn: "DC оролт", en: "DC input", ko: "DC 입력", zh: "直流输入" }, value: "29.2В / 10А" },
  {
    label: { mn: "Нарны хавтангийн оролт", en: "Solar input", ko: "태양광 입력", zh: "太阳能输入" },
    value: "32В",
  },
  {
    label: { mn: "Приач (машины) гаралт", en: "Car socket output", ko: "차량 시거잭 출력", zh: "点烟器输出" },
    value: "24В",
  },
  {
    label: { mn: "Ажиллах температур", en: "Operating temperature", ko: "작동 온도", zh: "工作温度" },
    value: "−30°C ~ 60°C",
  },
  { label: { mn: "Хэмжээ (У×Ө×Ө)", en: "Dimensions (L×W×H)", ko: "치수 (길이×폭×높이)", zh: "尺寸 (长×宽×高)" }, value: "40 × 22 × 45.5 см" },
  { label: { mn: "Жин", en: "Weight", ko: "중량", zh: "重量" }, value: "26 кг" },
];

const LOADS: { icon: React.ElementType; title: L10n; note: L10n }[] = [
  {
    icon: Lightbulb,
    title: { mn: "Гэрэлтүүлэг", en: "Lighting", ko: "조명", zh: "照明" },
    note: { mn: "Гэр, хашаа, амбаар", en: "Ger, yard, barn", ko: "게르, 마당, 창고", zh: "蒙古包、院落、仓房" },
  },
  {
    icon: Refrigerator,
    title: { mn: "Хөргөгч", en: "Refrigerator", ko: "냉장고", zh: "冰箱" },
    note: { mn: "Хүнсний хадгалалт", en: "Food storage", ko: "식품 보관", zh: "食品存储" },
  },
  {
    icon: MonitorSmartphone,
    title: { mn: "Зурагт · Хиймэл дагуул", en: "TV · Satellite", ko: "TV · 위성 수신기", zh: "电视 · 卫星接收" },
    note: { mn: "Мэдээ, үзвэр", en: "News and entertainment", ko: "뉴스와 오락", zh: "新闻与娱乐" },
  },
  {
    icon: Laptop,
    title: { mn: "Компьютер · Утас", en: "Computer · Phone", ko: "컴퓨터 · 휴대폰", zh: "电脑 · 手机" },
    note: { mn: "Холбоо, ажил", en: "Communication and work", ko: "통신과 업무", zh: "通信与办公" },
  },
  {
    icon: Wrench,
    title: { mn: "Цахилгаан багаж", en: "Power tools", ko: "전동 공구", zh: "电动工具" },
    note: { mn: "Өрөмдлөг, зүсэлт", en: "Drilling and cutting", ko: "드릴링, 절단", zh: "钻孔、切割" },
  },
  {
    icon: Scissors,
    title: { mn: "Ноосны хайч", en: "Wool shears", ko: "양모 전정기", zh: "剪毛机" },
    note: { mn: "Мал аж ахуй", en: "Livestock work", ko: "축산 작업", zh: "畜牧作业" },
  },
];

const PANEL_ITEMS: L10n[] = [
  { mn: "LCD дэлгэц", en: "LCD display", ko: "LCD 디스플레이", zh: "LCD 显示屏" },
  { mn: "LED гэрлийн унтраалга", en: "LED light switch", ko: "LED 조명 스위치", zh: "LED 灯开关" },
  {
    mn: "AC (220В айлын цахилгаан) унтраалга",
    en: "AC (220 V mains) switch",
    ko: "AC(220V) 스위치",
    zh: "AC（220V 市电）开关",
  },
  { mn: "USB унтраалга", en: "USB switch", ko: "USB 스위치", zh: "USB 开关" },
  {
    mn: "Дэлгэц асаах / унтраах товч",
    en: "Display on/off button",
    ko: "디스플레이 전원 버튼",
    zh: "显示屏开关按钮",
  },
  { mn: "LED гэрэлтүүлэг", en: "LED light bar", ko: "LED 조명", zh: "LED 照明灯" },
  {
    mn: "DC 24В оруулах / гаргах порт",
    en: "DC 24 V in/out port",
    ko: "DC 24V 입출력 포트",
    zh: "DC 24V 输入/输出接口",
  },
  { mn: "AC 220В-ийн розетка (× 2)", en: "AC 220 V sockets (× 2)", ko: "AC 220V 콘센트 (×2)", zh: "AC 220V 插座（×2）" },
  { mn: "Type-C / USB порт", en: "Type-C / USB ports", ko: "Type-C / USB 포트", zh: "Type-C / USB 接口" },
  {
    mn: "Приач (машины асаагуур) порт",
    en: "Car cigarette-lighter port",
    ko: "차량 시거잭 포트",
    zh: "车载点烟器接口",
  },
  {
    mn: "Нарнаас цэнэглэх / хурдан цэнэглэгчийн порт",
    en: "Solar / fast-charger input port",
    ko: "태양광 / 급속 충전 포트",
    zh: "太阳能 / 快充输入接口",
  },
  { mn: "24В оруулах / гаргах порт", en: "24 V in/out port", ko: "24V 입출력 포트", zh: "24V 输入/输出接口" },
  { mn: "Үндсэн тэжээлийн унтраалга", en: "Main power switch", ko: "메인 전원 스위치", zh: "主电源开关" },
];

const OUTPUTS: { icon: React.ElementType; name: string; note: L10n }[] = [
  {
    icon: Plug,
    name: "AC 220В",
    note: { mn: "Розетка × 2", en: "2 sockets", ko: "콘센트 2구", zh: "插座 ×2" },
  },
  { icon: Usb, name: "USB QC3.0", note: all("5В / 3А × 3") },
  { icon: Cable, name: "Type-C", note: all("PD 100Вт") },
  { icon: Power, name: "DC 24В", note: all("10А × 2") },
  {
    icon: Zap,
    name: "Приач 24В",
    note: { mn: "Машины асаагуур", en: "Car lighter socket", ko: "차량 시거잭", zh: "车载点烟器" },
  },
  {
    icon: Lightbulb,
    name: "LED",
    note: { mn: "Гэрэлтүүлэг", en: "Work light", ko: "조명", zh: "照明" },
  },
];

const WHERE: L10n[] = [
  { mn: "Гэр · Отор", en: "Ger · Herding camp", ko: "게르 · 유목 캠프", zh: "蒙古包 · 牧场营地" },
  { mn: "Мал аж ахуй", en: "Livestock", ko: "축산", zh: "畜牧业" },
  { mn: "Зуслан · Аялал", en: "Cabin · Travel", ko: "별장 · 여행", zh: "度假屋 · 旅行" },
  { mn: "Барилгын талбай", en: "Construction site", ko: "건설 현장", zh: "建筑工地" },
  { mn: "Хээрийн ажил", en: "Field work", ko: "야외 작업", zh: "野外作业" },
  { mn: "Цахилгаан тасрахад", en: "Power outages", ko: "정전 시", zh: "停电时" },
];

const TIPS: { icon: React.ElementType; title: L10n; body: L10n }[] = [
  {
    icon: Sun,
    title: {
      mn: "Нарны хавтанг зөв байрлуул",
      en: "Position the panel well",
      ko: "패널을 올바르게 배치",
      zh: "正确摆放光伏板",
    },
    body: {
      mn: "Өдрийн турш нар тусах, сүүдэргүй талд налуулж тавихад цэнэглэлт хамгийн үр дүнтэй.",
      en: "Tilt it towards a shade-free spot that catches sun all day for the most effective charging.",
      ko: "하루 종일 햇빛이 들고 그늘이 없는 곳에 기울여 두면 충전 효율이 가장 좋습니다.",
      zh: "将其倾斜朝向全天受光且无遮挡的位置，充电效率最高。",
    },
  },
  {
    icon: Ruler,
    title: { mn: "Ачааллаа тооц", en: "Add up your load", ko: "사용 전력을 계산", zh: "计算用电负载" },
    body: {
      mn: "Зэрэг залгасан хэрэгслийн нийт чадал 2200 Вт-аас хэтрэхгүй байхыг анхаар.",
      en: "Make sure everything plugged in at once stays under 2200 W in total.",
      ko: "동시에 연결한 기기의 합계 출력이 2200W를 넘지 않도록 하세요.",
      zh: "确保同时接入的设备总功率不超过 2200 W。",
    },
  },
  {
    icon: Snowflake,
    title: {
      mn: "Урт хугацаанд хадгалахад",
      en: "For long-term storage",
      ko: "장기 보관 시",
      zh: "长期存放时",
    },
    body: {
      mn: "Хэрэглэхгүй удаан хадгалах бол хагас цэнэгтэй, хуурай, сэрүүн газар байлга.",
      en: "If it will sit unused for a long time, store it half-charged in a dry, cool place.",
      ko: "오래 사용하지 않을 경우 반 충전 상태로 건조하고 서늘한 곳에 보관하세요.",
      zh: "长期不用时，请保持半电量并存放于干燥阴凉处。",
    },
  },
];

const DIMENSIONS = "26.5 × 39 × 24.5 cm";

export default function PortablePower() {
  const { lang } = useLanguage();

  return (
    <div className="relative w-full min-h-screen bg-white text-slate-900 font-sans antialiased">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute top-24 -right-32 h-[26rem] w-[26rem] rounded-full bg-indigo-400/20 blur-3xl" />
      </div>

      <Header />

      <main className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
        {/* Hero */}
        <section className="grid grid-cols-1 items-center gap-10 pt-12 md:pt-16 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700 shadow-sm">
              <Sun className="size-3.5" />
              {COPY.badge[lang]}
            </span>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {{ mn: "Загвар", en: "Model", ko: "모델", zh: "型号" }[lang]} {MODEL}
            </p>
            <h1 className="mt-2 text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              {COPY.h1[lang]}
            </h1>
            <p className="mt-6 max-w-xl text-base text-slate-600 md:text-lg">{COPY.lead[lang]}</p>

            <ul className="mt-7 space-y-3">
              {COPY.highlights.map((item) => (
                <li key={item.mn} className="flex items-start gap-3 text-sm text-slate-700 md:text-base">
                  <Check className="mt-0.5 size-4 flex-shrink-0 text-amber-600" />
                  <span>{item[lang]}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:shadow-orange-500/40"
              >
                {COPY.ctaOrder[lang]} <ArrowRight className="size-4" />
              </Link>
              <a
                href="#specs"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
              >
                {COPY.ctaSpecs[lang]}
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center rounded-3xl bg-gradient-to-br from-slate-50 via-white to-amber-50 p-6 md:p-10">
            <Image
              src="/products/bsbk2200w-panel.png"
              alt={`${MODEL} ${COPY.h1[lang]}`}
              width={900}
              height={1263}
              priority
              sizes="(min-width: 1024px) 480px, 90vw"
              className="h-auto w-full max-w-md object-contain drop-shadow-2xl"
            />
            <span className="absolute bottom-4 right-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
              {{
                mn: "400Вт нарны хавтантай",
                en: "Includes a 400 W panel",
                ko: "400W 패널 포함",
                zh: "含 400W 光伏板",
              }[lang]}
            </span>
          </div>
        </section>

        {/* Hero stats */}
        <section className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {HERO_STATS.map((stat) => (
            <div
              key={stat.value}
              className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur"
            >
              <div className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-xl font-bold tracking-tight text-transparent md:text-2xl">
                {stat.value}
              </div>
              <p className="mt-1.5 text-xs text-slate-600 md:text-sm">{stat.label[lang]}</p>
            </div>
          ))}
        </section>

        {/* Energy flow */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">{COPY.flowTitle[lang]}</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FLOW.map((item) => (
              <div
                key={item.title.mn}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <item.icon className="size-6 text-amber-600" />
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                  {item.step[lang]}
                </p>
                <p className="mt-1 text-base font-bold text-slate-900">{item.title[lang]}</p>
                <p className="mt-1 text-sm text-slate-500">{item.note[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Kit contents */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">{COPY.kitTitle[lang]}</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {KIT.map((item) => (
              <article
                key={item.no}
                className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm md:p-8"
              >
                <span className="font-mono text-xs font-semibold text-amber-600">{item.no}</span>
                <h3 className="mt-2 text-lg font-bold text-slate-900">{item.title[lang]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc[lang]}</p>
                <div className="mt-6 flex flex-1 items-end justify-center">
                  <Image
                    src={item.image}
                    alt={item.title[lang]}
                    width={item.width}
                    height={item.height}
                    sizes="(min-width: 768px) 500px, 90vw"
                    className="h-auto w-full max-w-sm object-contain"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Specs + dimensions */}
        <section id="specs" className="mt-20 scroll-mt-24">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">{COPY.specsTitle[lang]}</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                  {COPY.dimensionsLabel[lang]}
                </p>
                <div className="mt-4 flex items-center justify-center gap-3">
                  <Ruler className="size-5 flex-shrink-0 text-amber-600" />
                  <span className="font-mono text-base font-semibold text-slate-800">{DIMENSIONS}</span>
                </div>
              </div>

              {FEATURES.map((feature) => (
                <div
                  key={feature.title.mn}
                  className="rounded-2xl border border-slate-200 border-l-4 border-l-amber-500 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <feature.icon className="size-4 text-amber-600" />
                    <h3 className="text-sm font-bold text-slate-900">{feature.title[lang]}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.body[lang]}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <tbody>
                  {SPECS.map((row, i) => (
                    <tr key={row.label.mn} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-3 text-slate-600">{row.label[lang]}</td>
                      <td className="px-5 py-3 text-right font-mono font-semibold text-slate-900">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Control panel */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">{COPY.panelTitle[lang]}</h2>
          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex items-center justify-center rounded-2xl bg-slate-50 p-6">
              <Image
                src="/products/bsbk2200w-ports.png"
                alt={COPY.panelTitle[lang]}
                width={660}
                height={963}
                sizes="(min-width: 1024px) 480px, 90vw"
                className="h-auto w-full max-w-sm object-contain"
              />
            </div>
            <ol className="divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white shadow-sm">
              {PANEL_ITEMS.map((item, i) => (
                <li key={item.mn} className="flex items-center gap-4 px-5 py-3">
                  <span className="font-mono text-xs font-bold text-amber-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-slate-700">{item[lang]}</span>
                </li>
              ))}
            </ol>
          </div>

          <h3 className="mt-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            {COPY.outputsTitle[lang]}
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {OUTPUTS.map((out) => (
              <div key={out.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <out.icon className="size-5 text-amber-600" />
                <p className="mt-3 font-mono text-sm font-bold text-slate-900">{out.name}</p>
                <p className="mt-1 text-xs text-slate-500">{out.note[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Loads */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">{COPY.loadsTitle[lang]}</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LOADS.map((load) => (
              <div key={load.title.mn} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <load.icon className="size-6 text-amber-600" />
                <h3 className="mt-4 text-base font-bold text-slate-900">{load.title[lang]}</h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">{load.note[lang]}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-600">{COPY.loadsNote[lang]}</p>
        </section>

        {/* Folded panel + where to use */}
        <section className="mt-20 grid grid-cols-1 items-center gap-8 rounded-3xl border border-slate-200 bg-slate-50/70 p-6 md:p-10 lg:grid-cols-2">
          <Image
            src="/products/bsbk2200w-solar-folded.png"
            alt={{
              mn: "Эвхэгдсэн нарны хавтан",
              en: "The solar panel folded up",
              ko: "접은 태양광 패널",
              zh: "折叠后的太阳能板",
            }[lang]}
            width={900}
            height={751}
            sizes="(min-width: 1024px) 480px, 90vw"
            className="h-auto w-full object-contain"
          />
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              {{ mn: "Эвхсэн байдал", en: "Folded up", ko: "접은 상태", zh: "折叠状态" }[lang]}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
              {
                {
                  mn: "Эвхэгдсэн үедээ гар цүнхний хэмжээтэй болж, залгуурын кабелийн хамт нэг дор багтана. Бариултай тул нэг хүн хялбар зөөнө.",
                  en: "Folded, it is the size of a briefcase and packs away together with its cables. It has a handle, so one person can carry it.",
                  ko: "접으면 서류가방 크기가 되어 케이블과 함께 한 번에 수납됩니다. 손잡이가 있어 한 사람이 쉽게 옮길 수 있습니다.",
                  zh: "折叠后仅有公文包大小，可连同连接线一并收纳。配有提手，一人即可轻松搬运。",
                }[lang]
              }
            </p>

            <h3 className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              {COPY.whereTitle[lang]}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {WHERE.map((item) => (
                <span
                  key={item.mn}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700"
                >
                  <Package className="size-3.5 text-amber-600" />
                  {item[lang]}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">{COPY.tipsTitle[lang]}</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {TIPS.map((tip, i) => (
              <div key={tip.title.mn} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <tip.icon className="size-4 text-amber-600" />
                  <span className="font-mono text-xs font-semibold text-amber-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-bold text-slate-900">{tip.title[lang]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{tip.body[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mt-24 flex flex-col items-start gap-8 rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 p-8 text-white shadow-2xl shadow-orange-500/20 md:flex-row md:items-center md:justify-between md:p-12"
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{COPY.contactTitle[lang]}</h2>
            <p className="mt-3 text-sm text-amber-50 md:text-base">{COPY.contactLead[lang]}</p>
            <div className="mt-6 flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-8">
              <a href={`tel:${CONTACT_PHONE_TEL}`} className="inline-flex items-center gap-2 font-semibold hover:underline">
                <Phone className="size-4" />
                {COPY.officeLabel[lang]}: {CONTACT_PHONE_DISPLAY}
              </a>
              <a href={`tel:${SALES_PHONE_TEL}`} className="inline-flex items-center gap-2 font-semibold hover:underline">
                <Phone className="size-4" />
                {COPY.salesLabel[lang]}: {SALES_PHONE_DISPLAY}
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 font-semibold hover:underline">
                <Mail className="size-4" />
                {COPY.emailLabel[lang]}: {CONTACT_EMAIL}
              </a>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-orange-600 shadow-lg transition-all hover:-translate-y-0.5"
          >
            {COPY.ctaContact[lang]}
            <ArrowRight className="size-4" />
          </Link>
        </section>
      </main>
    </div>
  );
}

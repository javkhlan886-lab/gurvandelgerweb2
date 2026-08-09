"use client";

import React from "react";
import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import { useLanguage, type Lang } from "@/lib/i18n";

// Spec-table row labels are translated via lookup so the large data
// tables below don't need to be duplicated per language.
const LABEL_MAP: Record<string, { en: string; ko: string; zh: string }> = {
  "Стандарт хүчдэл": { en: "Standard Voltage", ko: "표준 전압", zh: "标准电压" },
  "Стандарт багтаамж": { en: "Standard Capacity", ko: "표준 용량", zh: "标准容量" },
  "Стандарт эрчим хүч": { en: "Standard Energy", ko: "표준 에너지", zh: "标准能量" },
  "Ажлын хүчдэл": { en: "Operating Voltage", ko: "작동 전압", zh: "工作电压" },
  "Стандарт цэнэглэлтийн гүйдэл": { en: "Standard Charge Current", ko: "표준 충전 전류", zh: "标准充电电流" },
  "Стандарт цэнэг тайлалтын гүйдэл": { en: "Standard Discharge Current", ko: "표준 방전 전류", zh: "标准放电电流" },
  "Зөвлөмж болгох DOD": { en: "Recommended DOD", ko: "권장 DOD", zh: "建议放电深度(DOD)" },
  "Мөчлөгийн наслалт": { en: "Cycle Life", ko: "사이클 수명", zh: "循环寿命" },
  "IP зэрэглэл": { en: "IP Rating", ko: "IP 등급", zh: "防护等级(IP)" },
  "Цэнэг тайлалтын температур": { en: "Discharge Temperature", ko: "방전 온도", zh: "放电温度" },
  "Цэнэглэлтийн температур": { en: "Charge Temperature", ko: "충전 온도", zh: "充电温度" },
  "Холбооны протокол": { en: "Communication Protocol", ko: "통신 프로토콜", zh: "通信协议" },
  "Дэлгэц": { en: "Display", ko: "디스플레이", zh: "显示屏" },
  "Баталгаат хугацаа": { en: "Warranty Period", ko: "보증 기간", zh: "保修期" },
  "Гэрчилгээ": { en: "Certification", ko: "인증", zh: "认证" },
  "Цэвэр жин/нэгж (кг)": { en: "Net Weight/Unit (kg)", ko: "순중량/유닛 (kg)", zh: "净重/单元 (kg)" },
  "Нийт жин/нэгж (кг)": { en: "Gross Weight/Unit (kg)", ko: "총중량/유닛 (kg)", zh: "毛重/单元 (kg)" },
  "Бүтээгдэхүүний хэмжээ (мм)": { en: "Product Dimensions (mm)", ko: "제품 규격 (mm)", zh: "产品尺寸 (mm)" },
  "Савлагааны хэмжээ (мм)": { en: "Packaging Dimensions (mm)", ko: "포장 규격 (mm)", zh: "包装尺寸 (mm)" },
  "Оролтын холболт": { en: "Input Connection", ko: "입력 연결", zh: "输入接线" },
  "AC оролт": { en: "AC Input", ko: "AC 입력", zh: "交流输入" },
  "Оролтын хүчдэлийн хязгаар": { en: "Input Voltage Range", ko: "입력 전압 범위", zh: "输入电压范围" },
  "Давтамж": { en: "Frequency", ko: "주파수", zh: "频率" },
  "Нэрлэсэн хүч": { en: "Rated Power", ko: "정격 출력", zh: "额定功率" },
  "Гаралтын хүчдэл": { en: "Output Voltage", ko: "출력 전압", zh: "输出电压" },
  "Гаралтын давтамж": { en: "Output Frequency", ko: "출력 주파수", zh: "输出频率" },
  "Гаралтын долгион": { en: "Output Waveform", ko: "출력 파형", zh: "输出波形" },
  "Шилжилтийн хугацаа (тохируулах)": { en: "Transfer Time (adjustable)", ko: "전환 시간 (조정 가능)", zh: "切换时间（可调）" },
  "Оргил хүч": { en: "Peak Power", ko: "최대 출력", zh: "峰值功率" },
  "Хэт ачааллын чадамж": { en: "Overload Capacity", ko: "과부하 내량", zh: "过载能力" },
  "Нэрлэсэн хүчдэл": { en: "Rated Voltage", ko: "정격 전압", zh: "额定电压" },
  "Тогтмол цэнэглэлтийн хүчдэл (тохируулах)": { en: "Bulk Charge Voltage (adjustable)", ko: "정전압 충전 전압 (조정 가능)", zh: "恒压充电电压（可调）" },
  "Float цэнэглэлтийн хүчдэл (тохируулах)": { en: "Float Charge Voltage (adjustable)", ko: "부동 충전 전압 (조정 가능)", zh: "浮充电压（可调）" },
  "Нарны панелийн цэнэглэлтийн арга": { en: "Solar Charging Method", ko: "태양광 충전 방식", zh: "太阳能充电方式" },
  "Нарны панелийн дээд оролт": { en: "Max. Solar Input", ko: "태양광 최대 입력", zh: "太阳能最大输入" },
  "MPPT хяналтын хязгаар": { en: "MPPT Voltage Range", ko: "MPPT 전압 범위", zh: "MPPT电压范围" },
  "Нарны панелийн оптималь ажлын хязгаар": { en: "Optimal Solar Operating Range", ko: "태양광 최적 작동 범위", zh: "太阳能最佳工作范围" },
  "Нарны панелийн дээд оролтын хүчдэл": { en: "Max. Solar Input Voltage", ko: "태양광 최대 입력 전압", zh: "太阳能最大输入电压" },
  "Нарны панелийн дээд оролтын гүйдэл": { en: "Max. Solar Input Current", ko: "태양광 최대 입력 전류", zh: "太阳能最大输入电流" },
  "Нарны панелийн дээд цэнэглэлтийн гүйдэл": { en: "Max. Solar Charge Current", ko: "태양광 최대 충전 전류", zh: "太阳能最大充电电流" },
  "AC дээд цэнэглэлтийн гүйдэл": { en: "Max. AC Charge Current", ko: "AC 최대 충전 전류", zh: "交流最大充电电流" },
  "Дээд цэнэглэлтийн гүйдэл": { en: "Max. Charge Current", ko: "최대 충전 전류", zh: "最大充电电流" },
  "Өргөтгөлийн холбооны интерфейс": { en: "Expansion Communication Interface", ko: "확장 통신 인터페이스", zh: "扩展通信接口" },
  "Ажлын температур": { en: "Operating Temperature", ko: "작동 온도", zh: "工作温度" },
  "Хадгалалтын температур": { en: "Storage Temperature", ko: "보관 온도", zh: "存储温度" },
  "Өндөр": { en: "Altitude", ko: "고도", zh: "海拔" },
  "Ажлын орчны чийгшил": { en: "Operating Humidity", ko: "작동 습도", zh: "工作湿度" },
  "Чимээний түвшин": { en: "Noise Level", ko: "소음 수준", zh: "噪音水平" },
  "Цэвэр жин (кг)": { en: "Net Weight (kg)", ko: "순중량 (kg)", zh: "净重 (kg)" },
  "Нийт жин (кг)": { en: "Gross Weight (kg)", ko: "총중량 (kg)", zh: "毛重 (kg)" },
  "Стандарт ба гэрчилгээ": { en: "Standards & Certification", ko: "표준 및 인증", zh: "标准与认证" },
};

function trLabel(mn: string, lang: Lang): string {
  if (lang === "mn") return mn;
  return LABEL_MAP[mn]?.[lang] ?? mn;
}

const BATTERY_TABLE_5KW = [
  ["Стандарт хүчдэл", "51.2В", "51.2В", "51.2В", "51.2В", "51.2В", "51.2В"],
  ["Стандарт багтаамж", "100Аh", "100Ah×2", "100Ah×3", "100Ah×4", "100Ah×5", "100Ah×6"],
  ["Стандарт эрчим хүч", "5.12кВт·ц", "5.12кВт·ц×2", "5.12кВт·ц×3", "5.12кВт·ц×4", "5.12кВт·ц×5", "5.12кВт·ц×6"],
  ["Ажлын хүчдэл", "43.2–57.6В", "43.2–57.6В", "43.2–57.6В", "43.2–57.6В", "43.2–57.6В", "43.2–57.6В"],
  ["Стандарт цэнэглэлтийн гүйдэл", "50А", "50А×2", "50А×3", "50А×4", "50А×5", "50А×6"],
  ["Стандарт цэнэг тайлалтын гүйдэл", "100А", "100А×2", "100А×3", "100А×4", "100А×5", "100А×6"],
  ["Зөвлөмж болгох DOD", "80%", "80%", "80%", "80%", "80%", "80%"],
  ["Мөчлөгийн наслалт", ">6000 мөчлөг", ">6000 мөчлөг", ">6000 мөчлөг", ">6000 мөчлөг", ">6000 мөчлөг", ">6000 мөчлөг"],
  ["IP зэрэглэл", "Ip21", "Ip21", "Ip21", "Ip21", "Ip21", "Ip21"],
  ["Цэнэг тайлалтын температур", "-20°C~60°C", "-20°C~60°C", "-20°C~60°C", "-20°C~60°C", "-20°C~60°C", "-20°C~60°C"],
  ["Цэнэглэлтийн температур", "0°C~45°C", "0°C~45°C", "0°C~45°C", "0°C~45°C", "0°C~45°C", "0°C~45°C"],
  ["Холбооны протокол", "RS232/CAN/RS485(WIFI/BT нэмэлт)", "—", "—", "—", "—", "—"],
  ["Дэлгэц", "LCD (мэдрэгч нэмэлт)", "—", "—", "—", "—", "—"],
  ["Баталгаат хугацаа", "5 жил", "5 жил", "5 жил", "5 жил", "5 жил", "5 жил"],
  ["Гэрчилгээ", "UN38.3/MSDS/CE/ROHS/FCC", "—", "—", "—", "—", "—"],
  ["Цэвэр жин/нэгж (кг)", "45.8", "45.8×2", "45.8×3", "45.8×4", "45.8×5", "45.8×6"],
  ["Нийт жин/нэгж (кг)", "53.2", "53.2×2", "53.2×3", "53.2×4", "53.2×5", "53.2×6"],
  ["Бүтээгдэхүүний хэмжээ (мм)", "550×500×178", "550×500×178×2", "550×500×178×3", "550×500×178×4", "550×500×178×5", "550×500×178×6"],
  ["Савлагааны хэмжээ (мм)", "650×600×290", "650×600×290×2", "650×600×290×3", "650×600×290×4", "650×600×290×5", "650×600×290×6"],
];

const BATTERY_TABLE_10KW = [
  ["Стандарт хүчдэл", "51.2В", "51.2В", "51.2В", "51.2В", "51.2В"],
  ["Стандарт багтаамж", "100Ah×2", "100Ah×3", "100Ah×4", "100Ah×5", "100Ah×6"],
  ["Стандарт эрчим хүч", "5.12кВт·ц×2", "5.12кВт·ц×3", "5.12кВт·ц×4", "5.12кВт·ц×5", "5.12кВт·ц×6"],
  ["Ажлын хүчдэл", "43.2–57.6В", "43.2–57.6В", "43.2–57.6В", "43.2–57.6В", "43.2–57.6В"],
  ["Стандарт цэнэглэлтийн гүйдэл", "50А×2", "50А×3", "50А×4", "50А×5", "50А×6"],
  ["Стандарт цэнэг тайлалтын гүйдэл", "100А×2", "100А×3", "100А×4", "100А×5", "100А×6"],
  ["Зөвлөмж болгох DOD", "80%", "80%", "80%", "80%", "80%"],
  ["Мөчлөгийн наслалт", ">6000 мөчлөг", ">6000 мөчлөг", ">6000 мөчлөг", ">6000 мөчлөг", ">6000 мөчлөг"],
  ["IP зэрэглэл", "Ip21", "Ip21", "Ip21", "Ip21", "Ip21"],
  ["Цэнэг тайлалтын температур", "-20°C~60°C", "-20°C~60°C", "-20°C~60°C", "-20°C~60°C", "-20°C~60°C"],
  ["Цэнэглэлтийн температур", "0°C~45°C", "0°C~45°C", "0°C~45°C", "0°C~45°C", "0°C~45°C"],
  ["Холбооны протокол", "RS232/CAN/RS485(WIFI/BT нэмэлт)", "—", "—", "—", "—"],
  ["Дэлгэц", "LCD (мэдрэгч нэмэлт)", "—", "—", "—", "—"],
  ["Баталгаат хугацаа", "5 жил", "5 жил", "5 жил", "5 жил", "5 жил"],
  ["Гэрчилгээ", "UN38.3/MSDS/CE/ROHS/FCC", "—", "—", "—", "—"],
  ["Цэвэр жин/нэгж (кг)", "44.5×2", "44.5×3", "44.5×4", "44.5×5", "44.5×6"],
  ["Нийт жин/нэгж (кг)", "53.2×2", "53.2×3", "53.2×4", "53.2×5", "53.2×6"],
  ["Бүтээгдэхүүний хэмжээ (мм)", "550×500×178×2", "550×500×178×3", "550×500×178×4", "550×500×178×5", "550×500×178×6"],
  ["Савлагааны хэмжээ (мм)", "650×600×290×2", "650×600×290×3", "650×600×290×4", "650×600×290×5", "650×600×290×6"],
];

const INVERTER_5KW = [
  ["Оролтын холболт", "L+N+PE"],
  ["AC оролт", "220/230/240VAC"],
  ["Оролтын хүчдэлийн хязгаар", "90-280VAC±3V (Хэвийн горим) / 170-280VAC±3V (UPS горим)"],
  ["Давтамж", "50/60Гц (Автомат)"],
  ["Нэрлэсэн хүч", "5500Вт"],
  ["Гаралтын хүчдэл", "220/230/240VAC±5%"],
  ["Гаралтын давтамж", "50/60Гц±0.1%"],
  ["Гаралтын долгион", "Цэвэр синусоид"],
  ["Шилжилтийн хугацаа (тохируулах)", "Компьютерийн тоног төхөөрөмжид 10мс, Ахуйн хэрэгсэлд 20мс"],
  ["Оргил хүч", "10000ВА"],
  ["Хэт ачааллын чадамж", "Батерейний горим: 21с@105%~150% / 11с@150%~200% / 400мс@>200%"],
  ["Нэрлэсэн хүчдэл", "48VDC"],
  ["Тогтмол цэнэглэлтийн хүчдэл (тохируулах)", "56.4VDC"],
  ["Float цэнэглэлтийн хүчдэл (тохируулах)", "54VDC"],
  ["Нарны панелийн цэнэглэлтийн арга", "MPPT"],
  ["Нарны панелийн дээд оролт", "5500Вт"],
  ["MPPT хяналтын хязгаар", "120-500VDC"],
  ["Нарны панелийн оптималь ажлын хязгаар", "300-400WDC"],
  ["Нарны панелийн дээд оролтын хүчдэл", "500VDC"],
  ["Нарны панелийн дээд оролтын гүйдэл", "27А"],
  ["Нарны панелийн дээд цэнэглэлтийн гүйдэл", "100А"],
  ["AC дээд цэнэглэлтийн гүйдэл", "60А"],
  ["Дээд цэнэглэлтийн гүйдэл", "100А"],
  ["LCD", "Ажлын горим/ачаалал/оролт/гаралт харуулах боломжтой"],
  ["RS232", "5PIN/Pitch 2.54мм, Baud Rate 2400"],
  ["Өргөтгөлийн холбооны интерфейс", "Литийн батерейний BMS холбооны карт, WiFi 2x5PIN/Pitch 2.54мм"],
  ["Ажлын температур", "0°C~40°C"],
  ["Хадгалалтын температур", "-15°C~60°C"],
  ["Өндөр", "1000м-ээс ихгүй, 1000м-ээс дээш бол хүч буурна, дээд хэмжээ 4000м"],
  ["Ажлын орчны чийгшил", "20%-95% Конденсацгүй"],
  ["Чимээний түвшин", "<50дБ"],
  ["Бүтээгдэхүүний хэмжээ (мм)", "495×312×125"],
  ["Савлагааны хэмжээ (мм)", "565×885×195"],
  ["Цэвэр жин (кг)", "10.52"],
  ["Нийт жин (кг)", "11.84"],
];

const INVERTER_10KW = [
  ["Оролтын холболт", "L+N+PE"],
  ["AC оролт", "220/230/240VAC"],
  ["Оролтын хүчдэлийн хязгаар", "90-280VAC±3V (Хэвийн горим) / 170-280VAC±3V (UPS горим)"],
  ["Давтамж", "50/60Гц (Автомат)"],
  ["Нэрлэсэн хүч", "11000Вт"],
  ["Гаралтын хүчдэл", "220/230/240VAC±5%"],
  ["Гаралтын давтамж", "50/60Гц±0.1%"],
  ["Гаралтын долгион", "Цэвэр синусоид"],
  ["Шилжилтийн хугацаа (тохируулах)", "Компьютерийн тоног төхөөрөмжид 10мс, Ахуйн хэрэгсэлд 20мс"],
  ["Оргил хүч", "22000ВА"],
  ["Хэт ачааллын чадамж", "Батерейний горим: 21с@105%~150% / 11с@150%~200% / 400мс@>200%"],
  ["Нэрлэсэн хүчдэл", "48VDC"],
  ["Тогтмол цэнэглэлтийн хүчдэл (тохируулах)", "56.4VDC"],
  ["Float цэнэглэлтийн хүчдэл (тохируулах)", "54VDC"],
  ["Нарны панелийн цэнэглэлтийн арга", "MPPT×2"],
  ["Нарны панелийн дээд оролт", "2×7500Вт"],
  ["MPPT хяналтын хязгаар", "90-500VDC"],
  ["Нарны панелийн оптималь ажлын хязгаар", "300-400WDC"],
  ["Нарны панелийн дээд оролтын хүчдэл", "500VDC"],
  ["Нарны панелийн дээд оролтын гүйдэл", "2×27А"],
  ["Нарны панелийн дээд цэнэглэлтийн гүйдэл", "150А"],
  ["AC дээд цэнэглэлтийн гүйдэл", "150А"],
  ["Дээд цэнэглэлтийн гүйдэл", "150А"],
  ["LCD", "Ажлын горим/ачаалал/оролт/гаралт харуулах боломжтой"],
  ["RS232", "5PIN/Pitch 2.54мм, Baud Rate 2400"],
  ["Өргөтгөлийн холбооны интерфейс", "Литийн батерейний BMS холбооны карт, WiFi 2x5PIN/Pitch 2.54мм"],
  ["Ажлын температур", "0°C~40°C"],
  ["Хадгалалтын температур", "-15°C~60°C"],
  ["Өндөр", "1000м-ээс ихгүй, 1000м-ээс дээш бол хүч буурна, дээд хэмжээ 4000м (IEC62040)"],
  ["Ажлын орчны чийгшил", "20%-95% Конденсацгүй"],
  ["Чимээний түвшин", "<50дБ"],
  ["Бүтээгдэхүүний хэмжээ (мм)", "550×500×178"],
  ["Савлагааны хэмжээ (мм)", "650×600×290"],
  ["Цэвэр жин (кг)", "18.99"],
  ["Нийт жин (кг)", "22.25"],
  ["Стандарт ба гэрчилгээ", "EN-IEC 60335-1, EN-IEC 60335-2-29, IEC 62109-1"],
];

const FEATURES = {
  mn: [
    "LiFePo4 A ангиллын эс",
    "DOD80%-д 6000+ мөчлөгийн наслалт",
    "BT болон WIFI нэмэлт сонголт",
    "LCD дэлгэц (мэдрэгч дэлгэц нэмэлт)",
    "Цэнэглэлт/цэнэг тайлалтын 100A BMS",
    "Давхарласан загвар",
    "Олон брэндийн инвертортой нийцтэй",
  ],
  en: [
    "LiFePO4 Grade A Cells",
    "6000+ cycle life at 80% DOD",
    "Optional Bluetooth & WiFi",
    "LCD Display (touchscreen optional)",
    "100A BMS for Charge/Discharge",
    "Stackable Design",
    "Compatible with Multiple Inverter Brands",
  ],
  ko: [
    "LiFePO4 A등급 셀",
    "DOD 80%에서 6000회 이상 사이클 수명",
    "블루투스 및 WiFi 옵션",
    "LCD 디스플레이(터치스크린 옵션)",
    "충/방전용 100A BMS",
    "적층형 설계",
    "다양한 브랜드의 인버터와 호환",
  ],
  zh: [
    "LiFePO4 A级电芯",
    "80% DOD下循环寿命6000+次",
    "可选蓝牙与WiFi",
    "LCD显示屏（可选触摸屏）",
    "100A充放电BMS",
    "可堆叠设计",
    "兼容多品牌逆变器",
  ],
} as const;

const USAGE_ITEMS = [
  {
    icon: "💨",
    title: { mn: "Салхины эрчим хүч", en: "Wind Energy", ko: "풍력 에너지", zh: "风能" },
    desc: {
      mn: "Салхины турбинтай холбогдон ажиллах боломжтой",
      en: "Can be connected to wind turbines",
      ko: "풍력 터빈과 연결하여 사용 가능",
      zh: "可与风力发电机组连接使用",
    },
  },
  {
    icon: "☀️",
    title: { mn: "Нарны эрчим хүчний систем", en: "Solar Power Systems", ko: "태양광 발전 시스템", zh: "太阳能系统" },
    desc: {
      mn: "Нарны панельтэй нийлүүлэн ашиглах",
      en: "Used together with solar panels",
      ko: "태양광 패널과 함께 사용",
      zh: "与太阳能电池板配合使用",
    },
  },
  {
    icon: "📡",
    title: { mn: "Харилцаа холбоо", en: "Telecommunications", ko: "통신", zh: "通信" },
    desc: {
      mn: "Телекоммуникацийн суурин станцад",
      en: "For telecom base stations",
      ko: "통신 기지국용",
      zh: "用于电信基站",
    },
  },
  {
    icon: "🚐",
    title: { mn: "Аялалын машин (RV)", en: "RVs", ko: "캠핑카 (RV)", zh: "房车(RV)" },
    desc: {
      mn: "Хөдөлгөөнт хэрэглээнд тохиромжтой",
      en: "Suitable for mobile use",
      ko: "이동형 사용에 적합",
      zh: "适用于移动场景",
    },
  },
  {
    icon: "🚢",
    title: { mn: "Усан хөлөг", en: "Marine Vessels", ko: "선박", zh: "船舶" },
    desc: {
      mn: "Усан замын тээврийн хэрэгслийн эрчим хүч",
      en: "Power for watercraft",
      ko: "선박용 전원 공급",
      zh: "为水上交通工具供电",
    },
  },
  {
    icon: "🏠",
    title: { mn: "Гэрийн хэрэглээ", en: "Home Use", ko: "가정용", zh: "家用" },
    desc: {
      mn: "Орон сууц болон гэрийн нарны системд",
      en: "For residential and home solar systems",
      ko: "주택 및 가정용 태양광 시스템에 사용",
      zh: "适用于住宅及家庭太阳能系统",
    },
  },
] as const;

function BatteryTable({ rows, headers, lang }: { rows: string[][]; headers: string[]; lang: Lang }) {
  const modelLabel = { mn: "Загвар", en: "Model", ko: "모델", zh: "型号" }[lang];
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs md:text-sm border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
            <th className="px-3 py-2 text-left font-semibold border border-slate-200 min-w-[160px]">
              {modelLabel}
            </th>
            {headers.map((h) => (
              <th key={h} className="px-3 py-2 text-center font-semibold border border-slate-200">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
              <td className="px-3 py-2 font-medium text-slate-700 border border-slate-200">
                {trLabel(row[0], lang)}
              </td>
              {row.slice(1).map((cell, j) => (
                <td key={j} className="px-3 py-2 text-center text-slate-600 border border-slate-200">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function InverterTable({ rows, lang }: { rows: string[][]; lang: Lang }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs md:text-sm border-collapse">
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
              <td className="px-3 py-2 font-medium text-slate-700 border border-slate-200 w-1/3">
                {trLabel(row[0], lang)}
              </td>
              <td className="px-3 py-2 text-slate-600 border border-slate-200">{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SolarPage() {
  const { t, lang } = useLanguage();

  return (
    <div className="relative w-full min-h-screen bg-white text-slate-900 font-sans antialiased">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-indigo-400/15 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-cyan-300/15 blur-3xl" />
      </div>

      <Header />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14 space-y-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 shadow-sm">
          {t("solar.badge")}
        </span>

        {/* Hero */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
                {{
                  mn: "НЭГДСЭН ЭРЧИМ ХҮЧ ХАДГАЛАХ СИСТЕМ",
                  en: "INTEGRATED ENERGY STORAGE SYSTEM",
                  ko: "통합 에너지 저장 시스템",
                  zh: "一体化储能系统",
                }[lang]}
              </h1>
              <p className="text-xs text-slate-500 mt-1">ZETATECH</p>
            </div>
          </div>

          {/* Үндсэн зураг */}
          <div className="w-full rounded-xl overflow-hidden bg-slate-100 mb-8 flex items-center justify-center">
            <Image
              src="/projects/gdsolar.png"
              alt={{
                mn: "эрчим хүч хадгалах систем",
                en: "Energy storage system",
                ko: "에너지 저장 시스템",
                zh: "储能系统",
              }[lang]}
              width={1648}
              height={640}
              sizes="(min-width: 768px) 700px, 100vw"
              className="w-full h-auto max-h-96 object-contain"
            />
          </div>

          {/* BMS мэдээлэл */}
          <div className="bg-slate-50 rounded-xl p-5 mb-6">
            <p className="text-sm md:text-base text-slate-700 text-center font-medium mb-4">
              {{
                mn: "Батерейний BMS нь олон брэндийн инвертортой зэрэг холбогдох боломжтой",
                en: "The battery BMS can connect with inverters from multiple brands simultaneously",
                ko: "배터리 BMS는 여러 브랜드의 인버터와 동시에 연결할 수 있습니다",
                zh: "电池BMS可同时连接多个品牌的逆变器",
              }[lang]}
            </p>
            <div className="w-full rounded-xl overflow-hidden bg-white flex items-center justify-center p-4">
              <Image
                src="/projects/inverter.png"
                alt={{
                  mn: "Нийцтэй инвертор брэндүүд",
                  en: "Compatible Inverter Brands",
                  ko: "호환 가능한 인버터 브랜드",
                  zh: "兼容的逆变器品牌",
                }[lang]}
                width={902}
                height={418}
                sizes="(min-width: 768px) 700px, 100vw"
                className="w-full h-auto max-h-64 object-contain"
              />
            </div>
          </div>

          {/* Онцлог шинж чанарууд */}
          <div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 pb-2 border-b-2 border-indigo-500">
              {{ mn: "ОНЦЛОГ ШИНЖ ЧАНАРУУД", en: "KEY FEATURES", ko: "주요 특징", zh: "主要特点" }[lang]}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {FEATURES[lang].map((f, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold mt-0.5">※</span>
                  <span className="text-sm text-slate-700">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Батерейний үзүүлэлт — 5кВт инвертор */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-2 pb-2 border-b-2 border-indigo-500">
            {{ mn: "БАТЕРЕЙНИЙ ҮЗҮҮЛЭЛТҮҮД", en: "BATTERY SPECIFICATIONS", ko: "배터리 사양", zh: "电池规格" }[lang]}
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            {{
              mn: "/ 5кВт инвертортой загварууд /",
              en: "/ 5kW Inverter Models /",
              ko: "/ 5kW 인버터 모델 /",
              zh: "/ 5kW逆变器型号 /",
            }[lang]}
          </p>

          {/* Зураглал */}
          <div className="w-full rounded-xl overflow-hidden bg-slate-50 mb-6 p-4 flex items-center justify-center">
            <Image
              src="/projects/5kw.png"
              alt={{
                mn: "5кВт загварын зураглал",
                en: "5kW model diagram",
                ko: "5kW 모델 도면",
                zh: "5kW型号示意图",
              }[lang]}
              width={810}
              height={300}
              sizes="(min-width: 768px) 700px, 100vw"
              className="w-full h-auto max-h-48 object-contain"
            />
          </div>

          <BatteryTable
            rows={BATTERY_TABLE_5KW}
            headers={["5кВт·ц+5кВт", "10кВт·ц+5кВт", "15кВт·ц+5кВт", "20кВт·ц+5кВт", "25кВт·ц+5кВт", "30кВт·ц+5кВт"]}
            lang={lang}
          />
        </div>

        {/* Батерейний үзүүлэлт — 10кВт инвертор */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-2 pb-2 border-b-2 border-indigo-500">
            {{ mn: "БАТЕРЕЙНИЙ ҮЗҮҮЛЭЛТҮҮД", en: "BATTERY SPECIFICATIONS", ko: "배터리 사양", zh: "电池规格" }[lang]}
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            {{
              mn: "/ 10кВт инвертортой загварууд /",
              en: "/ 10kW Inverter Models /",
              ko: "/ 10kW 인버터 모델 /",
              zh: "/ 10kW逆变器型号 /",
            }[lang]}
          </p>

          <div className="w-full rounded-xl overflow-hidden bg-slate-50 mb-6 p-4 flex items-center justify-center">
            <Image
              src="/projects/5kw.png"
              alt={{
                mn: "10кВт загварын зураглал",
                en: "10kW model diagram",
                ko: "10kW 모델 도면",
                zh: "10kW型号示意图",
              }[lang]}
              width={810}
              height={300}
              sizes="(min-width: 768px) 700px, 100vw"
              className="w-full h-auto max-h-48 object-contain"
            />
          </div>

          <BatteryTable
            rows={BATTERY_TABLE_10KW}
            headers={["10кВт·ц+10кВт", "15кВт·ц+10кВт", "20кВт·ц+10кВт", "25кВт·ц+10кВт", "30кВт·ц+10кВт"]}
            lang={lang}
          />
        </div>

        {/* Инвертор үзүүлэлтүүд — 5кВт */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-2 pb-2 border-b-2 border-indigo-500">
            {{ mn: "ИНВЕРТОР ҮЗҮҮЛЭЛТҮҮД", en: "INVERTER SPECIFICATIONS", ko: "인버터 사양", zh: "逆变器规格" }[lang]}
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            {{ mn: "/ 5кВт инвертор /", en: "/ 5kW Inverter /", ko: "/ 5kW 인버터 /", zh: "/ 5kW逆变器 /" }[lang]}
          </p>
          <InverterTable rows={INVERTER_5KW} lang={lang} />
        </div>

        {/* Инвертор үзүүлэлтүүд — 10кВт */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-2 pb-2 border-b-2 border-indigo-500">
            {{ mn: "ИНВЕРТОР ҮЗҮҮЛЭЛТҮҮД", en: "INVERTER SPECIFICATIONS", ko: "인버터 사양", zh: "逆变器规格" }[lang]}
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            {{ mn: "/ 10кВт инвертор /", en: "/ 10kW Inverter /", ko: "/ 10kW 인버터 /", zh: "/ 10kW逆变器 /" }[lang]}
          </p>
          <InverterTable rows={INVERTER_10KW} lang={lang} />
        </div>

        {/* Холболтын схем */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-6 pb-2 border-b-2 border-indigo-500">
            {{
              mn: "БҮТЭЭГДЭХҮҮНИЙ ХОЛБОЛТЫН СХЕМ",
              en: "PRODUCT CONNECTION DIAGRAM",
              ko: "제품 연결도",
              zh: "产品连接示意图",
            }[lang]}
          </h2>
          <div className="space-y-4">
            <div className="text-xs text-indigo-600 font-semibold mb-2">
              ✓{" "}
              {{
                mn: "Өөрийн хэрэглээний хувь 96%-иас дээш",
                en: "Self-consumption rate above 96%",
                ko: "자가소비율 96% 이상",
                zh: "自用率96%以上",
              }[lang]}
            </div>
            <div className="w-full rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center">
              <Image
                src="/projects/connection.png"
                alt={{
                  mn: "Холболтын схем",
                  en: "Connection diagram",
                  ko: "연결도",
                  zh: "连接示意图",
                }[lang]}
                width={700}
                height={300}
                sizes="(min-width: 768px) 700px, 100vw"
                className="w-full h-auto max-h-72 object-contain"
              />
            </div>

            <div className="text-xs text-slate-500 flex gap-4 justify-center flex-wrap">
              <span>
                <span className="text-red-500 font-bold">——</span>{" "}
                {{ mn: "AC кабель", en: "AC Cable", ko: "AC 케이블", zh: "交流电缆" }[lang]}
              </span>
              <span>
                <span className="text-blue-500 font-bold">——</span>{" "}
                {{ mn: "DC кабель", en: "DC Cable", ko: "DC 케이블", zh: "直流电缆" }[lang]}
              </span>
              <span>
                <span className="text-green-500 font-bold">- - -</span>{" "}
                {{ mn: "RS485 кабель", en: "RS485 Cable", ko: "RS485 케이블", zh: "RS485电缆" }[lang]}
              </span>
            </div>
          </div>
        </div>

        {/* Хэрэглээний салбарууд */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-6 pb-2 border-b-2 border-indigo-500">
            {{
              mn: "БҮТЭЭГДЭХҮҮНИЙ ХЭРЭГЛЭЭНИЙ САЛБАРУУД",
              en: "APPLICATION AREAS",
              ko: "적용 분야",
              zh: "应用领域",
            }[lang]}
          </h2>
          <div className="w-full rounded-xl overflow-hidden bg-slate-100 mb-6 flex items-center justify-center">
            <Image
              src="/projects/usage solar.png"
              alt={{
                mn: "Хэрэглээний салбарууд",
                en: "Application areas",
                ko: "적용 분야",
                zh: "应用领域",
              }[lang]}
              width={700}
              height={346}
              sizes="(min-width: 768px) 700px, 100vw"
              className="w-full h-auto max-h-72 object-contain"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {USAGE_ITEMS.map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-4 flex flex-col gap-2">
                <div className="text-3xl">{item.icon}</div>
                <h3 className="text-sm font-black text-slate-900">{item.title[lang]}</h3>
                <p className="text-xs text-slate-600">{item.desc[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

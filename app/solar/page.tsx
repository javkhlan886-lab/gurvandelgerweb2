import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";

export default function SolarPage() {
  return (
    <div className="w-full min-h-screen bg-cover bg-[url(/Gurvandelgercity.png)] text-[#111111] font-sans antialiased">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between border-b border-gray-200/60">
        <div className="text-xl md:text-3xl font-normal tracking-tight cursor-pointer text-white/90">
          <a href="/">Гурвандэлгэр ХХК</a>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/90">
          <Link
            href="/about"
            className="hover:text-[#C1E994] transition-colors"
          >
            Бидний тухай
          </Link>
          <Link
            href="/partner"
            className="hover:text-[#C1E994] transition-colors"
          >
            Партнер байгууллагууд
          </Link>
          <Link
            href="/building"
            className="hover:text-[#C1E994] transition-colors"
          >
            Хийсэн төсөлүүд
          </Link>
          <Link
            href="/social"
            className="hover:text-[#C1E994] transition-colors"
          >
            Нийгмийн хариуцлага
          </Link>
          <Button className="bg-[#C1E994] hover:bg-[#b2df82] text-gray-900 px-4 py-2 rounded-full text-xs font-medium">
            <Link href="/contact">Холбоо барих</Link>
          </Button>
        </nav>
        <button className="md:hidden text-white text-3xl">☰</button>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14 space-y-10">
        {/* Hero */}
        <div className="bg-white/90 rounded-xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight">
                ДАВХАРЛАСАН НЭГДСЭН ЭРЧИМ ХҮЧ ХАДГАЛАХ СИСТЕМ
              </h1>
              <p className="text-base md:text-xl font-semibold text-[#00b5b5] mt-1">
                5кВт·ц – 30кВт·ц + 5кВт – 10кВт
              </p>
              <p className="text-xs text-gray-500 mt-1">ZETATECH</p>
            </div>
          </div>

          {/* Үндсэн зураг */}
          <div className="w-full rounded-xl overflow-hidden bg-gray-100 mb-8 flex items-center justify-center">
            <img
              src="/solar/product-main.jpg"
              alt="Давхарласан эрчим хүч хадгалах систем"
              className="w-full max-h-96 object-contain"
            />
          </div>

          {/* BMS мэдээлэл */}
          <div className="bg-gray-50 rounded-xl p-5 mb-6">
            <p className="text-sm md:text-base text-gray-700 text-center font-medium mb-4">
              Батерейний BMS нь олон брэндийн инвертортой зэрэг холбогдох
              боломжтой
            </p>
            <div className="w-full rounded-xl overflow-hidden bg-white flex items-center justify-center p-4">
              <img
                src="/solar/inverter-brands.jpg"
                alt="Нийцтэй инвертор брэндүүд"
                className="w-full max-h-64 object-contain"
              />
            </div>
          </div>

          {/* Онцлог шинж чанарууд */}
          <div>
            <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-[#00b5b5]">
              ОНЦЛОГ ШИНЖ ЧАНАРУУД
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "LiFePo4 A ангиллын эс",
                "DOD80%-д 6000+ мөчлөгийн наслалт",
                "BT болон WIFI нэмэлт сонголт",
                "LCD дэлгэц (мэдрэгч дэлгэц нэмэлт)",
                "Цэнэглэлт/цэнэг тайлалтын 100A BMS",
                "Давхарласан загвар",
                "Олон брэндийн инвертортой нийцтэй",
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[#00b5b5] font-bold mt-0.5">※</span>
                  <span className="text-sm text-gray-700">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Батерейний үзүүлэлт — 5кВт инвертор */}
        <div className="bg-white/90 rounded-xl p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-2 pb-2 border-b-2 border-[#00b5b5]">
            БАТЕРЕЙНИЙ ҮЗҮҮЛЭЛТҮҮД
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            / 5кВт инвертортой загварууд /
          </p>

          {/* Зураглал */}
          <div className="w-full rounded-xl overflow-hidden bg-gray-50 mb-6 p-4 flex items-center justify-center">
            <img
              src="/solar/drawing-5kw.jpg"
              alt="5кВт загварын зураглал"
              className="w-full max-h-48 object-contain"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-[#00b5b5] text-white">
                  <th className="px-3 py-2 text-left font-semibold border border-gray-200 min-w-[160px]">
                    Загвар
                  </th>
                  <th className="px-3 py-2 text-center font-semibold border border-gray-200">
                    5кВт·ц+5кВт
                  </th>
                  <th className="px-3 py-2 text-center font-semibold border border-gray-200">
                    10кВт·ц+5кВт
                  </th>
                  <th className="px-3 py-2 text-center font-semibold border border-gray-200">
                    15кВт·ц+5кВт
                  </th>
                  <th className="px-3 py-2 text-center font-semibold border border-gray-200">
                    20кВт·ц+5кВт
                  </th>
                  <th className="px-3 py-2 text-center font-semibold border border-gray-200">
                    25кВт·ц+5кВт
                  </th>
                  <th className="px-3 py-2 text-center font-semibold border border-gray-200">
                    30кВт·ц+5кВт
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Стандарт хүчдэл",
                    "51.2В",
                    "51.2В",
                    "51.2В",
                    "51.2В",
                    "51.2В",
                    "51.2В",
                  ],
                  [
                    "Стандарт багтаамж",
                    "100Аh",
                    "100Ah×2",
                    "100Ah×3",
                    "100Ah×4",
                    "100Ah×5",
                    "100Ah×6",
                  ],
                  [
                    "Стандарт эрчим хүч",
                    "5.12кВт·ц",
                    "5.12кВт·ц×2",
                    "5.12кВт·ц×3",
                    "5.12кВт·ц×4",
                    "5.12кВт·ц×5",
                    "5.12кВт·ц×6",
                  ],
                  [
                    "Ажлын хүчдэл",
                    "43.2–57.6В",
                    "43.2–57.6В",
                    "43.2–57.6В",
                    "43.2–57.6В",
                    "43.2–57.6В",
                    "43.2–57.6В",
                  ],
                  [
                    "Стандарт цэнэглэлтийн гүйдэл",
                    "50А",
                    "50А×2",
                    "50А×3",
                    "50А×4",
                    "50А×5",
                    "50А×6",
                  ],
                  [
                    "Стандарт цэнэг тайлалтын гүйдэл",
                    "100А",
                    "100А×2",
                    "100А×3",
                    "100А×4",
                    "100А×5",
                    "100А×6",
                  ],
                  [
                    "Зөвлөмж болгох DOD",
                    "80%",
                    "80%",
                    "80%",
                    "80%",
                    "80%",
                    "80%",
                  ],
                  [
                    "Мөчлөгийн наслалт",
                    ">6000 мөчлөг",
                    ">6000 мөчлөг",
                    ">6000 мөчлөг",
                    ">6000 мөчлөг",
                    ">6000 мөчлөг",
                    ">6000 мөчлөг",
                  ],
                  [
                    "IP зэрэглэл",
                    "Ip21",
                    "Ip21",
                    "Ip21",
                    "Ip21",
                    "Ip21",
                    "Ip21",
                  ],
                  [
                    "Цэнэг тайлалтын температур",
                    "-20°C~60°C",
                    "-20°C~60°C",
                    "-20°C~60°C",
                    "-20°C~60°C",
                    "-20°C~60°C",
                    "-20°C~60°C",
                  ],
                  [
                    "Цэнэглэлтийн температур",
                    "0°C~45°C",
                    "0°C~45°C",
                    "0°C~45°C",
                    "0°C~45°C",
                    "0°C~45°C",
                    "0°C~45°C",
                  ],
                  [
                    "Холбооны протокол",
                    "RS232/CAN/RS485(WIFI/BT нэмэлт)",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—",
                  ],
                  ["Дэлгэц", "LCD (мэдрэгч нэмэлт)", "—", "—", "—", "—", "—"],
                  [
                    "Баталгаат хугацаа",
                    "5 жил",
                    "5 жил",
                    "5 жил",
                    "5 жил",
                    "5 жил",
                    "5 жил",
                  ],
                  [
                    "Гэрчилгээ",
                    "UN38.3/MSDS/CE/ROHS/FCC",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—",
                  ],
                  [
                    "Цэвэр жин/нэгж (кг)",
                    "45.8",
                    "45.8×2",
                    "45.8×3",
                    "45.8×4",
                    "45.8×5",
                    "45.8×6",
                  ],
                  [
                    "Нийт жин/нэгж (кг)",
                    "53.2",
                    "53.2×2",
                    "53.2×3",
                    "53.2×4",
                    "53.2×5",
                    "53.2×6",
                  ],
                  [
                    "Бүтээгдэхүүний хэмжээ (мм)",
                    "550×500×178",
                    "550×500×178×2",
                    "550×500×178×3",
                    "550×500×178×4",
                    "550×500×178×5",
                    "550×500×178×6",
                  ],
                  [
                    "Савлагааны хэмжээ (мм)",
                    "650×600×290",
                    "650×600×290×2",
                    "650×600×290×3",
                    "650×600×290×4",
                    "650×600×290×5",
                    "650×600×290×6",
                  ],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-3 py-2 font-medium text-gray-700 border border-gray-200">
                      {row[0]}
                    </td>
                    {row.slice(1).map((cell, j) => (
                      <td
                        key={j}
                        className="px-3 py-2 text-center text-gray-600 border border-gray-200"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Батерейний үзүүлэлт — 10кВт инвертор */}
        <div className="bg-white/90 rounded-xl p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-2 pb-2 border-b-2 border-[#00b5b5]">
            БАТЕРЕЙНИЙ ҮЗҮҮЛЭЛТҮҮД
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            / 10кВт инвертортой загварууд /
          </p>

          <div className="w-full rounded-xl overflow-hidden bg-gray-50 mb-6 p-4 flex items-center justify-center">
            <img
              src="/solar/drawing-10kw.jpg"
              alt="10кВт загварын зураглал"
              className="w-full max-h-48 object-contain"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-[#00b5b5] text-white">
                  <th className="px-3 py-2 text-left font-semibold border border-gray-200 min-w-[160px]">
                    Загвар
                  </th>
                  <th className="px-3 py-2 text-center font-semibold border border-gray-200">
                    10кВт·ц+10кВт
                  </th>
                  <th className="px-3 py-2 text-center font-semibold border border-gray-200">
                    15кВт·ц+10кВт
                  </th>
                  <th className="px-3 py-2 text-center font-semibold border border-gray-200">
                    20кВт·ц+10кВт
                  </th>
                  <th className="px-3 py-2 text-center font-semibold border border-gray-200">
                    25кВт·ц+10кВт
                  </th>
                  <th className="px-3 py-2 text-center font-semibold border border-gray-200">
                    30кВт·ц+10кВт
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Стандарт хүчдэл",
                    "51.2В",
                    "51.2В",
                    "51.2В",
                    "51.2В",
                    "51.2В",
                  ],
                  [
                    "Стандарт багтаамж",
                    "100Ah×2",
                    "100Ah×3",
                    "100Ah×4",
                    "100Ah×5",
                    "100Ah×6",
                  ],
                  [
                    "Стандарт эрчим хүч",
                    "5.12кВт·ц×2",
                    "5.12кВт·ц×3",
                    "5.12кВт·ц×4",
                    "5.12кВт·ц×5",
                    "5.12кВт·ц×6",
                  ],
                  [
                    "Ажлын хүчдэл",
                    "43.2–57.6В",
                    "43.2–57.6В",
                    "43.2–57.6В",
                    "43.2–57.6В",
                    "43.2–57.6В",
                  ],
                  [
                    "Стандарт цэнэглэлтийн гүйдэл",
                    "50А×2",
                    "50А×3",
                    "50А×4",
                    "50А×5",
                    "50А×6",
                  ],
                  [
                    "Стандарт цэнэг тайлалтын гүйдэл",
                    "100А×2",
                    "100А×3",
                    "100А×4",
                    "100А×5",
                    "100А×6",
                  ],
                  ["Зөвлөмж болгох DOD", "80%", "80%", "80%", "80%", "80%"],
                  [
                    "Мөчлөгийн наслалт",
                    ">6000 мөчлөг",
                    ">6000 мөчлөг",
                    ">6000 мөчлөг",
                    ">6000 мөчлөг",
                    ">6000 мөчлөг",
                  ],
                  ["IP зэрэглэл", "Ip21", "Ip21", "Ip21", "Ip21", "Ip21"],
                  [
                    "Цэнэг тайлалтын температур",
                    "-20°C~60°C",
                    "-20°C~60°C",
                    "-20°C~60°C",
                    "-20°C~60°C",
                    "-20°C~60°C",
                  ],
                  [
                    "Цэнэглэлтийн температур",
                    "0°C~45°C",
                    "0°C~45°C",
                    "0°C~45°C",
                    "0°C~45°C",
                    "0°C~45°C",
                  ],
                  [
                    "Холбооны протокол",
                    "RS232/CAN/RS485(WIFI/BT нэмэлт)",
                    "—",
                    "—",
                    "—",
                    "—",
                  ],
                  ["Дэлгэц", "LCD (мэдрэгч нэмэлт)", "—", "—", "—", "—"],
                  [
                    "Баталгаат хугацаа",
                    "5 жил",
                    "5 жил",
                    "5 жил",
                    "5 жил",
                    "5 жил",
                  ],
                  ["Гэрчилгээ", "UN38.3/MSDS/CE/ROHS/FCC", "—", "—", "—", "—"],
                  [
                    "Цэвэр жин/нэгж (кг)",
                    "44.5×2",
                    "44.5×3",
                    "44.5×4",
                    "44.5×5",
                    "44.5×6",
                  ],
                  [
                    "Нийт жин/нэгж (кг)",
                    "53.2×2",
                    "53.2×3",
                    "53.2×4",
                    "53.2×5",
                    "53.2×6",
                  ],
                  [
                    "Бүтээгдэхүүний хэмжээ (мм)",
                    "550×500×178×2",
                    "550×500×178×3",
                    "550×500×178×4",
                    "550×500×178×5",
                    "550×500×178×6",
                  ],
                  [
                    "Савлагааны хэмжээ (мм)",
                    "650×600×290×2",
                    "650×600×290×3",
                    "650×600×290×4",
                    "650×600×290×5",
                    "650×600×290×6",
                  ],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-3 py-2 font-medium text-gray-700 border border-gray-200">
                      {row[0]}
                    </td>
                    {row.slice(1).map((cell, j) => (
                      <td
                        key={j}
                        className="px-3 py-2 text-center text-gray-600 border border-gray-200"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Инвертор үзүүлэлтүүд — 5кВт */}
        <div className="bg-white/90 rounded-xl p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-2 pb-2 border-b-2 border-[#00b5b5]">
            ИНВЕРТОР ҮЗҮҮЛЭЛТҮҮД
          </h2>
          <p className="text-sm text-gray-500 mb-6">/ 5кВт инвертор /</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs md:text-sm border-collapse">
              <tbody>
                {[
                  ["Оролтын холболт", "L+N+PE"],
                  ["AC оролт", "220/230/240VAC"],
                  [
                    "Оролтын хүчдэлийн хязгаар",
                    "90-280VAC±3V (Хэвийн горим) / 170-280VAC±3V (UPS горим)",
                  ],
                  ["Давтамж", "50/60Гц (Автомат)"],
                  ["Нэрлэсэн хүч", "5500Вт"],
                  ["Гаралтын хүчдэл", "220/230/240VAC±5%"],
                  ["Гаралтын давтамж", "50/60Гц±0.1%"],
                  ["Гаралтын долгион", "Цэвэр синусоид"],
                  [
                    "Шилжилтийн хугацаа (тохируулах)",
                    "Компьютерийн тоног төхөөрөмжид 10мс, Ахуйн хэрэгсэлд 20мс",
                  ],
                  ["Оргил хүч", "10000ВА"],
                  [
                    "Хэт ачааллын чадамж",
                    "Батерейний горим: 21с@105%~150% / 11с@150%~200% / 400мс@>200%",
                  ],
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
                  [
                    "LCD",
                    "Ажлын горим/ачаалал/оролт/гаралт харуулах боломжтой",
                  ],
                  ["RS232", "5PIN/Pitch 2.54мм, Baud Rate 2400"],
                  [
                    "Өргөтгөлийн холбооны интерфейс",
                    "Литийн батерейний BMS холбооны карт, WiFi 2x5PIN/Pitch 2.54мм",
                  ],
                  ["Ажлын температур", "0°C~40°C"],
                  ["Хадгалалтын температур", "-15°C~60°C"],
                  [
                    "Өндөр",
                    "1000м-ээс ихгүй, 1000м-ээс дээш бол хүч буурна, дээд хэмжээ 4000м",
                  ],
                  ["Ажлын орчны чийгшил", "20%-95% Конденсацгүй"],
                  ["Чимээний түвшин", "<50дБ"],
                  ["Бүтээгдэхүүний хэмжээ (мм)", "495×312×125"],
                  ["Савлагааны хэмжээ (мм)", "565×885×195"],
                  ["Цэвэр жин (кг)", "10.52"],
                  ["Нийт жин (кг)", "11.84"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-3 py-2 font-medium text-gray-700 border border-gray-200 w-1/3">
                      {row[0]}
                    </td>
                    <td className="px-3 py-2 text-gray-600 border border-gray-200">
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Инвертор үзүүлэлтүүд — 10кВт */}
        <div className="bg-white/90 rounded-xl p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-2 pb-2 border-b-2 border-[#00b5b5]">
            ИНВЕРТОР ҮЗҮҮЛЭЛТҮҮД
          </h2>
          <p className="text-sm text-gray-500 mb-6">/ 10кВт инвертор /</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs md:text-sm border-collapse">
              <tbody>
                {[
                  ["Оролтын холболт", "L+N+PE"],
                  ["AC оролт", "220/230/240VAC"],
                  [
                    "Оролтын хүчдэлийн хязгаар",
                    "90-280VAC±3V (Хэвийн горим) / 170-280VAC±3V (UPS горим)",
                  ],
                  ["Давтамж", "50/60Гц (Автомат)"],
                  ["Нэрлэсэн хүч", "11000Вт"],
                  ["Гаралтын хүчдэл", "220/230/240VAC±5%"],
                  ["Гаралтын давтамж", "50/60Гц±0.1%"],
                  ["Гаралтын долгион", "Цэвэр синусоид"],
                  [
                    "Шилжилтийн хугацаа (тохируулах)",
                    "Компьютерийн тоног төхөөрөмжид 10мс, Ахуйн хэрэгсэлд 20мс",
                  ],
                  ["Оргил хүч", "22000ВА"],
                  [
                    "Хэт ачааллын чадамж",
                    "Батерейний горим: 21с@105%~150% / 11с@150%~200% / 400мс@>200%",
                  ],
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
                  [
                    "LCD",
                    "Ажлын горим/ачаалал/оролт/гаралт харуулах боломжтой",
                  ],
                  ["RS232", "5PIN/Pitch 2.54мм, Baud Rate 2400"],
                  [
                    "Өргөтгөлийн холбооны интерфейс",
                    "Литийн батерейний BMS холбооны карт, WiFi 2x5PIN/Pitch 2.54мм",
                  ],
                  ["Ажлын температур", "0°C~40°C"],
                  ["Хадгалалтын температур", "-15°C~60°C"],
                  [
                    "Өндөр",
                    "1000м-ээс ихгүй, 1000м-ээс дээш бол хүч буурна, дээд хэмжээ 4000м (IEC62040)",
                  ],
                  ["Ажлын орчны чийгшил", "20%-95% Конденсацгүй"],
                  ["Чимээний түвшин", "<50дБ"],
                  ["Бүтээгдэхүүний хэмжээ (мм)", "550×500×178"],
                  ["Савлагааны хэмжээ (мм)", "650×600×290"],
                  ["Цэвэр жин (кг)", "18.99"],
                  ["Нийт жин (кг)", "22.25"],
                  [
                    "Стандарт ба гэрчилгээ",
                    "EN-IEC 60335-1, EN-IEC 60335-2-29, IEC 62109-1",
                  ],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-3 py-2 font-medium text-gray-700 border border-gray-200 w-1/3">
                      {row[0]}
                    </td>
                    <td className="px-3 py-2 text-gray-600 border border-gray-200">
                      {row[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Холболтын схем */}
        <div className="bg-white/90 rounded-xl p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 pb-2 border-b-2 border-[#00b5b5]">
            БҮТЭЭГДЭХҮҮНИЙ ХОЛБОЛТЫН СХЕМ
          </h2>
          <div className="space-y-4">
            <div className="text-xs text-[#00b5b5] font-semibold mb-2">
              ✓ Өөрийн хэрэглээний хувь 96%-иас дээш
            </div>
            <div className="w-full rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
              <img
                src="/solar/connection-diagram.jpg"
                alt="Холболтын схем"
                className="w-full max-h-72 object-contain"
              />
            </div>
            <div className="w-full rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
              <img
                src="/solar/home-system.jpg"
                alt="Гэрийн систем"
                className="w-full max-h-72 object-contain"
              />
            </div>
            <div className="text-xs text-gray-500 flex gap-4 justify-center flex-wrap">
              <span>
                <span className="text-red-500 font-bold">——</span> AC кабель
              </span>
              <span>
                <span className="text-blue-500 font-bold">——</span> DC кабель
              </span>
              <span>
                <span className="text-green-500 font-bold">- - -</span> RS485
                кабель
              </span>
            </div>
          </div>
        </div>

        {/* Хэрэглээний салбарууд */}
        <div className="bg-white/90 rounded-xl p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 pb-2 border-b-2 border-[#00b5b5]">
            БҮТЭЭГДЭХҮҮНИЙ ХЭРЭГЛЭЭНИЙ САЛБАРУУД
          </h2>
          <div className="w-full rounded-xl overflow-hidden bg-gray-100 mb-6 flex items-center justify-center">
            <img
              src="/solar/applications.jpg"
              alt="Хэрэглээний салбарууд"
              className="w-full max-h-72 object-contain"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                icon: "💨",
                title: "Салхины эрчим хүч",
                desc: "Салхины турбинтай холбогдон ажиллах боломжтой",
              },
              {
                icon: "☀️",
                title: "Нарны эрчим хүчний систем",
                desc: "Нарны панельтэй нийлүүлэн ашиглах",
              },
              {
                icon: "📡",
                title: "Харилцаа холбоо",
                desc: "Телекоммуникацийн суурин станцад",
              },
              {
                icon: "🚐",
                title: "Аялалын машин (RV)",
                desc: "Хөдөлгөөнт хэрэглээнд тохиромжтой",
              },
              {
                icon: "🚢",
                title: "Усан хөлөг",
                desc: "Усан замын тээврийн хэрэгслийн эрчим хүч",
              },
              {
                icon: "🏠",
                title: "Гэрийн хэрэглээ",
                desc: "Орон сууц болон гэрийн нарны системд",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-4 flex flex-col gap-2"
              >
                <div className="text-3xl">{item.icon}</div>
                <h3 className="text-sm font-black text-gray-900">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

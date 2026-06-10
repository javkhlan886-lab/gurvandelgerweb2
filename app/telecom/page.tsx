import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
const telecomProjects = [
  {
    year: "2024",
    client: "Трипл Маржин ХХК",
    title: "Камерын хяналтын систем суурилуулалт",
    description:
      "Камерын хяналтын системийг нийлүүлж, суурилуулах ажлыг амжилттай гүйцэтгэсэн.",
    images: [
      // "/telecom/triple-margin-1.jpg",
      // "/telecom/triple-margin-2.jpg",
    ],
    tags: ["Харилцаа холбоо", "Камерын хяналт", "Суурилуулалт"],
  },
  {
    year: "2025",
    client: "Эм Ди Эс Коммуникэшн ХХК",
    title: "Камерын хяналтын систем суурилуулалт",
    description:
      "Камерын хяналтын системийг нийлүүлж, суурилуулах бүрэн ажлыг гүйцэтгэсэн.",
    images: [
       "/projects/camera1.jpg",
       "/projects/camera4.jpg",
    ],
    tags: ["Харилцаа холбоо", "Камерын хяналт", "Суурилуулалт"],
  },
  {
    year: "2025",
    client: "Блүүм мибел Эй Кэй Эй сервис технологи ХХК",
    title: "Камерын хяналтын систем суурилуулалт",
    description:
      "Камерын хяналтын системийг нийлүүлж, суурилуулах ажлыг амжилттай дуусгасан.",
    images: [
     "/projects/camera2.jpg",
       "/projects/camera6.jpg",
    ],
    tags: ["Харилцаа холбоо", "Камерын хяналт", "Суурилуулалт"],
  },
  {
    year: "2025",
    client: "Зэт Ти И ХХК",
    title: "60км газрын шилэн кабель татах ажил",
    description:
      "Төв аймгийн Мөнгөн морьт суманд 60 км газрын шилэн кабель татах ажлыг гүйцэтгэсэн.",
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
    tags: ["Шилэн кабель", "Дэд бүтэц", "Төв аймаг — Мөнгөн морьт"],
  },
  {
    year: "2026",
    client: "Өмнөговь Булган сум",
    title: "Телекамрын хяналтын камерын систем",
    description:
      "Өмнөговь Булган сумын нутаг гудамж талбайн хяналтын камерын систем оруулав.",
    images: [
      // "/telecom/ztei-cable-1.jpg",
      // "/telecom/ztei-cable-2.jpg",
    ],
    tags: ["Шилэн кабель", "Дэд бүтэц", "Өмнөговь аймаг — Булган сум"],
  },
  {
    year: "2026",
    client: "Улаанбаатар Баян зүрх дүүрэг ",
    title: "Телекамрын хяналтын камерын систем хаягжуулалт",
    description:
      "Улаанбаатар Баян зүрх дүүрэг Телекамрын хяналтын камерын систем хаягжуулалт",
    images: [
      // "/telecom/ztei-cable-1.jpg",
      // "/telecom/ztei-cable-2.jpg",
    ],
    tags: ["Шилэн кабель", "Дэд бүтэц", "Улаанбаатар хот — Баянзүрх дүүрэг"],
  },
];

export default function TelecomPage() {
  return (
    <div className="w-full min-h-screen bg-cover bg-center bg-fixed bg-[url(/telecowall4.png)] text-[#111111] font-sans antialiased">
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

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-8 md:mt-12">
        <div className="bg-white/90 rounded-xl px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h1 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
              ТОВЧ ТАНИЛЦУУЛГА
            </h1>
      <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
  <p>
    Өсөн хөгжиж буй мэдээллийн технологийн саларт хөл нийлүүлэн ажиллах зорилгоор манай байгууллага
    2014 оноос эхлэн Харилцаа холбооны зохицуулах хороогоос <span className="font-medium text-gray-900">"Б" ангиллын</span> Монгол Улсын
    нутаг дэвсгэрт харилцаа холбооны сүлжээ, дэд бүтцийн угсралт, суурилуулалтын ажил гүйцэтгэх
    тусгай зөвшөөрлийг авч үйл ажиллагаа явуулж ирсэн.
  </p>

  <p>
    Ирээдүйн чиг хандлагад тулгуурлан бид дараах салбарт үйл ажиллагаагаа өргөжүүлж байна:
  </p>

  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-0 list-none">
    {[
      { icon: "🌐", text: "Зүйлсийн интернет (IoT)" },
      { icon: "💻", text: "Програм хангамжийн хөгжүүлэлт" },
      { icon: "🏗️", text: "Барилгын гадна дотор холбоо дохиололын угсралт суурилуулалт" },
      { icon: "📷", text: "Хяналтын камерийн шийдэл угсралт суурилуулалт" },
      { icon: "🚁", text: "Тусгай зориулалтын дрон" },
      { icon: "🤖", text: "Хиймэл оюун ухаанд суурилсан шийдлүүд" },
      { icon: "🔗", text: "Мэдээллийн сүлжээ" },
    ].map((item, i) => (
      <li key={i} className="flex items-start gap-2 bg-gray-50 rounded-lg px-3 py-2">
        <span className="mt-0.5">{item.icon}</span>
        <span>{item.text}</span>
      </li>
    ))}
  </ul>

  <p>
    Шаардлагатай боловсон хүчнээр бүрэн хангагдсан манай баг шинэ технологи, чанартай үйлчилгээ үзүүлэхэд
    бэлэн байна. Соёлтой үйлчилгээ, шинэлэг үйлдвэрлэл, техник технологийн дэвшлийг үйл ажиллагаандаа
    нэвтэрүүлэн ажиллахыг эрхэмлэн ажилладаг.
  </p>
</div>
          </div>
    {/* Зураг — баруун тал */}
<div className="flex-shrink-0 w-full md:w-72 lg:w-80 rounded-2xl overflow-hidden shadow-lg bg-gray-200 aspect-[3/4] md:aspect-auto aspect-square">
  <img
    src="/projects/wallpaper3.png"
    alt="Хамт олон"
    className="w-full h-full object-contain bg-gray-100"
  />
</div>
        </div>
      </div>

      {/* Үндсэн агуулга */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
        {/* Гарчиг */}
        <div className="mb-8 md:mb-12">
          <div className="inline-block bg-white/90 rounded-xl px-6 md:px-10 py-6">
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight">
              {" "}
              Харилцаа холбооны дэд бүтэц
            </h2>
            <p className="text-sm md:text-lg font-semibold text-gray-600 mt-1"></p>
          </div>
        </div>

        

        {/* Төслүүдийн timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-[88px] top-0 bottom-0 w-0.5 bg-[#C1E994]/60" />
          <div className="flex flex-col gap-8">
            {telecomProjects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-4 md:gap-8"
              >
                {/* Он */}
                <div className="flex-shrink-0 flex md:flex-col items-center md:items-end gap-3 md:gap-1 w-full md:w-20">
                  <div className="bg-[#C1E994] text-gray-900 font-black text-sm px-3 py-1.5 rounded-lg shadow-sm">
                    {project.year}
                  </div>
                  <div className="hidden md:block w-3 h-3 rounded-full bg-[#C1E994] mt-1 relative z-10" />
                </div>

                {/* Агуулга */}
                <div className="flex-1 bg-white/90 rounded-xl p-5 md:p-6 shadow-sm">
                  <p className="text-xs text-gray-500 font-medium mb-1">
                    {project.client}
                  </p>
                  <h3 className="text-base md:text-lg font-black text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Тагнууд */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
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
                        className="h-40 rounded-lg overflow-hidden bg-gray-200"
                      >
                        <img
                          src={img}
                          alt={`${project.title} ${i + 1}`}
                          className="w-full h-full object-cover"
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

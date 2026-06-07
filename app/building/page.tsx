import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";

const projects = [
  {
    year: "2022",
    client: "Хан-Алтай Ресурс ХХК",
    title: "Хайлуулах үйлдвэрийн барилга",
    description:
      "Хайлуулах үйлдвэрийн барилгын дээвэр, хана дүүргэлт, шал талбай цутгалтын ажлыг гүйцэтгэсэн.",
    images: [
      "/projects/han-altai-2022-1.jpg",
      "/projects/han-altai-2022-2.jpg",
    ],
    tags: ["Барилга угсралт", "Дээвэр", "Хана дүүргэлт"],
  },
  {
    year: "2023",
    client: "Хан-Алтай Ресурс ХХК",
    title: "Урвалжийн агуулах барилга",
    description:
      "Урвалжийн агуулах барилгыг ерөнхий гүйцэтгэгчээр ажиллан бүрэн дуусгаж, Улсын комисст хүлээлгэн өгч ашиглалтад оруулсан.",
    images: [
      "/projects/han-altai-2023-1.jpg",
      "/projects/han-altai-2023-2.jpg",
      "/projects/han-altai-2023-3.jpg",
    ],
    tags: ["Ерөнхий гүйцэтгэгч", "Агуулах барилга", "Улсын комисс"],
  },
  {
    year: "2023",
    client: "Хасу-Мегаватт ХХК",
    title: "Монголын нууц товчоо цогцолборын интерьер",
    description:
      "Хэнтий аймаг, Дэлгэрхаан сумд байрлах Монголын нуур товчоо цогцолборын интерьерийн ажлыг бүтэн дуусгасан.",
    images: ["/projects/khasu-2023-1.jpg"],
    tags: ["Интерьер", "Цогцолбор", "Хэнтий аймаг"],
  },
  {
    year: "2024",
    client: "Хан-Алтай Ресурс ХХК",
    title: "Уурхайн ажилчдын орон сууц — суурь, хана угсралт",
    description:
      "Төв аймаг, Лүн суманд байрлах уурхайн ажилчдын орон сууцны барилгын 124м×14м барилгын суурь болон ханын угсралтын ажлыг гүйцэтгэсэн.",
    images: [
      "/projects/han-altai-2024-house-1.jpg",
      "/projects/han-altai-2024-house-2.jpg",
    ],
    tags: ["Орон сууц", "Суурь угсралт", "Төв аймаг — Лүн сум"],
  },
  {
    year: "2024",
    client: "Хан-Алтай Ресурс ХХК",
    title: "Уурхайн оффис, гал тогооны барилга",
    description:
      "Төв аймаг, Лүн суманд байрлах уурхайн Оффис болон гал тогооны барилгын 62м×14м барилгын бетон хийц зэрэг томоохон ажлуудыг гүйцэтгэсэн.",
    images: [
      "/projects/han-altai-2024-office-1.jpg",
      "/projects/han-altai-2024-office-2.jpg",
      "/projects/han-altai-2024-office-3.jpg",
    ],
    tags: ["Оффис барилга", "Бетон хийц", "Төв аймаг — Лүн сум"],
  },
  {
    year: "2026",
    client: "Алтгана Ресурсес ХХК",
    title: '"Баян уусмал, агаар өгөх насос станц" суурийн барилга',
    description:
      'Төв аймгийн Лүн сумын нутаг дэвсгэрт байрлах Хөгжил төсөл буюу "Баян уусмал, агаар өгөх насос станц"-ын суурийн барилга угсралтын ажлыг гүйцэтгэж байна.',
    images: [],
    tags: ["Насос станц", "Суурийн барилга", "Төв аймаг — Лүн сум"],
  },
  {
    year: "2026",
    client: "Алтгана Ресурсес ХХК",
    title: '"Ядуу уусмалын насос станц" суурийн барилга',
    description:
      'Төв аймгийн Лүн сумын нутаг дэвсгэрт байрлах Хөгжил төсөл буюу "Ядуу уусмалын насос станц"-ын суурийн барилга угсралтын ажлыг гүйцэтгэж байна.',
    images: [],
    tags: ["Насос станц", "Суурийн барилга", "Төв аймаг — Лүн сум"],
  },
];

const galleryImages = [
  {
    src: "/projects/gallery-1.jpg",
    caption: "Хан-Алтай Ресурс ХХК — агуулах барилгын бүтэц",
  },
  {
    src: "/projects/gallery-2.jpg",
    caption: "Хан-Алтай Ресурс ХХК — ханын угсралтын ажил",
  },
  {
    src: "/projects/gallery-3.jpg",
    caption: "Хасу-Мегаватт ХХК — цогцолборын барилга",
  },
  { src: "/projects/gallery-4.jpg", caption: "Барилгын суурийн бетон цутгалт" },
  {
    src: "/projects/gallery-5.jpg",
    caption: "Ажилчдын орон сууц — дотор засал",
  },
  {
    src: "/projects/gallery-6.jpg",
    caption: "Лүн сум — уурхайн барилгын ажил",
  },
];

export default function BuildingPage() {
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

      {/* Товч танилцуулга */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-8 md:mt-12">
        <div className="bg-white/90 rounded-xl px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h1 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
              ТОВЧ ТАНИЛЦУУЛГА
            </h1>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              "Гурван дэлгэр" ХХК нь худалдаа үйлчилгээ, барилга угсралт,
              сэргээгдэх эрчим хүч, харилцаа холбооны шугам сүлжээний угсралт
              суурилуулалтын үйл ажиллагаа эрхлэх зорилготойгоор{" "}
              <span className="font-bold text-gray-900">2011 онд</span> үүсгэн
              байгуулагдсан. Манай компани нь мэргэжлийн өндөр ур чадвартай
              гэрээт болон үндсэн нийлсэн{" "}
              <span className="font-bold text-gray-900">50-60 гаруй</span>{" "}
              боловсон хүчнийг бүрдүүлж, соёлтой үйлчилгээ, шинэлэг үйлдвэрлэл,
              техник технологийн дэвшлийг үйл ажиллагаандаа нэвтэрүүлэн
              ажиллахыг эрхэмлэн ажилладаг.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-80 h-52 rounded-xl overflow-hidden shadow-lg bg-gray-200">
            <img
              src="/projects/team.png"
              alt="Хамт олон"
              className="w-full h-full object-cover"
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
              БИДНИЙ ГҮЙЦЭТГЭСЭН АЖЛУУДААС
            </h2>
          </div>
        </div>

        {/* Төслүүдийн timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-[88px] top-0 bottom-0 w-0.5 bg-[#C1E994]/60" />
          <div className="flex flex-col gap-8">
            {projects.map((project, index) => (
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
                  {project.images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {project.images.map((img, i) => (
                        <div
                          key={i}
                          className="h-32 rounded-lg overflow-hidden bg-gray-200"
                        >
                          <img
                            src={img}
                            alt={`${project.title} ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Зургийн галерей */}
        <div className="mt-14">
          <div className="inline-block bg-white/90 rounded-xl px-6 py-4 mb-6">
            <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
              БАРИЛГЫН АЖЛЫН ЗУРГУУД
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="group relative rounded-xl overflow-hidden shadow-md bg-gray-300 h-48 md:h-60"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs">{img.caption}</p>
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

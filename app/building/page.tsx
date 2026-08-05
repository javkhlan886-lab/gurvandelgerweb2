import React from "react";
import Footer from "@/components/footer";
import Header from "@/components/Header";

const projects = [
  {
    year: "2022",
    client: "Хан-Алтай Ресурс ХХК",
    title: "Хайлуулах үйлдвэрийн барилга",
    description:
      "Хайлуулах үйлдвэрийн барилгын дээвэр, хана дүүргэлт, шал талбай цутгалтын ажлыг гүйцэтгэсэн.",
    images: [
      "/projects/uusmal.png",
      "/projects/uusmal2.png",
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
      "/projects/object1.png",
      "/projects/object2.png",
      "/projects/object3.png",
    ],
    tags: ["Ерөнхий гүйцэтгэгч", "Агуулах барилга", "Улсын комисс"],
  },
  {
    year: "2023",
    client: "Хасу-Мегаватт ХХК",
    title: "Монголын нууц товчоо цогцолборын интерьер",
    description:
      "Хэнтий аймаг, Дэлгэрхаан сумд байрлах Монголын нуур товчоо цогцолборын интерьерийн ажлыг бүтэн дуусгасан.",
    images: ["/projects/tour1.png",
      "/projects/tour2.png",
      "/projects/tour3.png"
    ],
    
    tags: ["Интерьер", "Цогцолбор", "Хэнтий аймаг"],
  },
  {
    year: "2024",
    client: "Хан-Алтай Ресурс ХХК",
    title: "Уурхайн ажилчдын орон сууц — суурь, хана угсралт",
    description:
      "Төв аймаг, Лүн суманд байрлах уурхайн ажилчдын орон сууцны барилгын 124м×14м барилгын суурь болон ханын угсралтын ажлыг гүйцэтгэсэн.",
    images: [
      "/projects/object4.png",
      "/projects/object5.png",
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
      "/projects/object6.png",
    
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
    src: "/projects/uusmal.png",
    caption: "Хан-Алтай Ресурс ХХК — агуулах барилгын бүтэц",
  },
  {
    src: "/projects/uusmal2.png",
    caption: "Хан-Алтай Ресурс ХХК — ханын угсралтын ажил",
  },
  {
    src: "/projects/tour1.png",
    caption: "Хасу-Мегаватт ХХК — цогцолборын барилга",
  },
  { src: "/projects/object1.png", caption: "Барилгын суурийн бетон цутгалт" },
  {
    src: "/projects/object3.png",
    caption: "Ажилчдын орон сууц — дотор засал",
  },
  {
    src: "/projects/object6.png",
    caption: "Лүн сум — уурхайн барилгын ажил",
  },
];

export default function BuildingPage() {
  return (
    <div className="relative w-full min-h-screen bg-white text-slate-900 font-sans antialiased">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-indigo-400/15 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-cyan-300/15 blur-3xl" />
      </div>

      <Header />

      {/* Товч танилцуулга */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-10 md:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 shadow-sm">
          Барилга Байгууламж
        </span>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h1 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              ТОВЧ ТАНИЛЦУУЛГА
            </h1>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              "Гурван дэлгэр" ХХК нь худалдаа үйлчилгээ, барилга угсралт,
              сэргээгдэх эрчим хүч, харилцаа холбооны шугам сүлжээний угсралт
              суурилуулалтын үйл ажиллагаа эрхлэх зорилготойгоор{" "}
              <span className="font-bold text-slate-900">2011 онд</span> үүсгэн
              байгуулагдсан. Манай компани нь мэргэжлийн өндөр ур чадвартай
              гэрээт болон үндсэн нийлсэн{" "}
              <span className="font-bold text-slate-900">50-60 гаруй</span>{" "}
              боловсон хүчнийг бүрдүүлж, соёлтой үйлчилгээ, шинэлэг үйлдвэрлэл,
              техник технологийн дэвшлийг үйл ажиллагаандаа нэвтэрүүлэн
              ажиллахыг эрхэмлэн ажилладаг.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-80 h-52 rounded-xl overflow-hidden shadow-lg bg-slate-100">
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
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
            БИДНИЙ ГҮЙЦЭТГЭСЭН АЖЛУУДААС
          </h2>
        </div>

        {/* Төслүүдийн timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-[88px] top-0 bottom-0 w-0.5 bg-indigo-200" />
          <div className="flex flex-col gap-8">
            {projects.map((project, index) => (
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
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full"
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
                          className="h-32 rounded-lg overflow-hidden bg-slate-100"
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
          <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight mb-6">
            БАРИЛГЫН АЖЛЫН ЗУРГУУД
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="group relative rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100 h-48 md:h-60"
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

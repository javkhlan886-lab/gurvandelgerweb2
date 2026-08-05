import React from "react";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/footer";
import Header from "@/components/Header";

const SOFTWARE_PRODUCTS = [
  {
    icon: "🌐",
    title: "Веб систем & порталууд",
    desc: "Байгууллагын веб сайт, дотоод удирдлагын систем, харилцагчийн порталын хөгжүүлэлт.",
  },
  {
    icon: "📊",
    title: "Бизнесийн удирдлагын програм хангамж",
    desc: "Агуулах, санхүү, харилцагчийн удирдлага зэрэг үйл ажиллагааг автоматжуулах шийдлүүд.",
  },
  {
    icon: "📡",
    title: "IoT мониторинг & хяналтын самбар",
    desc: "Зүйлсийн интернет (IoT) төхөөрөмжийн өгөгдлийг цуглуулж, бодит цагийн хяналтын самбараар дүрслэх.",
  },
  {
    icon: "📱",
    title: "Мобайл аппликейшн",
    desc: "iOS болон Android платформ дээр ажиллах хэрэглэгчийн болон дотоод хэрэгцээний аппликейшн.",
  },
];

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
    <div className="relative w-full min-h-screen bg-white text-slate-900 font-sans antialiased">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-indigo-400/15 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-cyan-300/15 blur-3xl" />
      </div>

      <Header />

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-10 md:pt-14">
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 shadow-sm">
          Мэдээлэл Технологи
        </span>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h1 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              ТОВЧ ТАНИЛЦУУЛГА
            </h1>
            <div className="space-y-4 text-sm md:text-base text-slate-600 leading-relaxed">
              <p>
                Өсөн хөгжиж буй мэдээллийн технологийн саларт хөл нийлүүлэн ажиллах зорилгоор манай байгууллага
                2014 оноос эхлэн Харилцаа холбооны зохицуулах хороогоос <span className="font-medium text-slate-900">"Б" ангиллын</span> Монгол Улсын
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
                  <li key={i} className="flex items-start gap-2 bg-slate-50 rounded-lg px-3 py-2">
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
          <div className="flex-shrink-0 w-full md:w-72 lg:w-80 rounded-2xl overflow-hidden shadow-lg bg-slate-100 aspect-[3/4] md:aspect-auto aspect-square">
            <img
              src="/projects/wallpaper3.png"
              alt="Хамт олон"
              className="w-full h-full object-contain bg-slate-50"
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
                Програм хангамжийн бүтээгдэхүүн
              </h2>
              <p className="mt-2 text-sm md:text-base text-slate-600 max-w-2xl">
                Дэд бүтцийн угсралтаас гадна бид байгууллагуудад зориулсан
                програм хангамжийн бүтээгдэхүүн, дижитал шийдлүүдийг
                хөгжүүлж, нийлүүлдэг.
              </p>
            </div>
            <a
              href="https://product.gurvandelger.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Бүтээгдэхүүний хуудас
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
                  {product.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                  {product.desc}
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
            Харилцаа холбооны дэд бүтэц
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
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Тагнууд */}
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

                  {/* Зургийн зай — зураг нэмэхэд uncomment хийнэ */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {project.images.map((img, i) => (
                      <div
                        key={i}
                        className="h-40 rounded-lg overflow-hidden bg-slate-100"
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

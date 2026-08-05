import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Header from "./Header";

const DIVISIONS = [
  {
    image: "/construction.png",
    title: "Барилга Байгууламж",
    description:
      "Бүтээн байгуулсан барилга байгууламжийн зураг төсөл, барилгын ажил гүйцэтгэлийн мэдээлэл.",
    href: "/building",
  },
  {
    image: "/datacc.png",
    title: "Мэдээлэл Технологи",
    description:
      "Веб систем, бизнесийн удирдлагын програм хангамж, IoT дэд бүтцийн шийдэл — бүтээгдэхүүнүүдийг product.gurvandelger.com дээрээс үзнэ үү.",
    href: "/telecom",
  },
  {
    image: "/gdsolar.png",
    title: "Сэргээгдэх эрчим хүч",
    description:
      "Сэргээгдэх эрчим хүчний салбарт хийсэн төсөл, нарны болон салхины эрчим хүчний шийдлүүд.",
    href: "/solar",
  },
];

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-indigo-200">
      {/* Decorative background: gradient mesh + dot grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="absolute top-24 -right-32 h-[26rem] w-[26rem] rounded-full bg-cyan-300/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-violet-300/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(15,23,42,0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <Header />

      {/* 2. Hero Content Section */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-20 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 shadow-sm">
          Барилга · IT · Сэргээгдэх эрчим хүч
        </span>

        <h1 className="mt-6 max-w-3xl text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900">
          Ирээдүйн шийдлийг{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            өнөөдрөөс
          </span>{" "}
          бүтээж байна
        </h1>

        <p className="mt-6 max-w-2xl text-base md:text-lg text-slate-600">
          Гурван Дэлгэр ХХК нь барилга байгууламж, мэдээлэл технологи, сэргээгдэх
          эрчим хүчний салбарт 15 жилийн туршид итгэл, чанартай үйлчилгээ
          үзүүлж ирсэн.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-8 text-white shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40 hover:-translate-y-0.5"
          >
            <Link href="/projects" className="flex items-center gap-2">
              Төслүүдийг үзэх <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-slate-300 px-8 text-slate-700 hover:bg-slate-50 hover:text-slate-900"
          >
            <Link href="/contact">Бидэнтэй холбогдох</Link>
          </Button>
        </div>

        {/* Hero image with gradient glow border */}
        <div className="mt-16 w-full rounded-3xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 p-[3px] shadow-2xl shadow-indigo-500/20">
          <div className="relative h-64 md:h-[420px] overflow-hidden rounded-[calc(1.5rem-3px)]">
            <Image
              src="/Gurvandelgercity.png"
              alt="Гурван Дэлгэр ХХК"
              fill
              priority
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* 3. Divisions Section */}
        <section className="w-full mt-24">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Чиглэлүүд
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            Манай үйл ажиллагааны гурван тулгуур
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {DIVISIONS.map((division) => (
              <div
                key={division.href}
                className="group relative rounded-2xl border border-slate-200 bg-white text-left shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <Image
                    src={division.image}
                    alt={division.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {division.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {division.description}
                  </p>
                  <Link
                    href={division.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition-all group-hover:gap-2.5"
                  >
                    Дэлгэрэнгүй
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

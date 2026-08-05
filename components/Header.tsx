import React from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/about", label: "Бидний тухай" },
  { href: "/partner", label: "Партнер байгууллагууд" },
  { href: "/projects", label: "Хийсэн төсөлүүд" },
  { href: "/social", label: "Нийгмийн хариуцлага" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="group flex items-center select-none cursor-pointer"
        >
          <Image
            src="/logo.jpg"
            alt="Гурван Дэлгэр ХХК"
            width={1536}
            height={403}
            className="h-9 md:h-11 w-auto object-contain mix-blend-multiply transition-transform group-hover:scale-105 duration-300"
          />
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-600">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative transition-colors hover:text-indigo-600 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-indigo-500 after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://product.gurvandelger.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative transition-colors hover:text-indigo-600 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-indigo-500 after:transition-all hover:after:w-full"
          >
            Бүтээгдхүүн
          </a>
        </nav>
      </div>
    </header>
  );
}

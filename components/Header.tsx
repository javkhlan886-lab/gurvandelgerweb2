import React from "react";
import Link from "next/link";

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
          className="flex items-center gap-3.5 group select-none cursor-pointer"
        >
          <svg
            viewBox="0 0 200 200"
            className="w-11 h-11 md:w-12 md:h-12 filter drop-shadow-[0_3px_5px_rgba(0,0,0,0.25)] transition-transform group-hover:scale-105 duration-300"
          >
            <defs>
              <linearGradient id="realGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF293" />
                <stop offset="25%" stopColor="#F4BF24" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="75%" stopColor="#DF9F00" />
                <stop offset="100%" stopColor="#8A5A00" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="90" fill="none" stroke="url(#realGold)" strokeWidth="11" />
            <circle cx="100" cy="100" r="77" fill="none" stroke="url(#realGold)" strokeWidth="2" />
            <path d="M 44 75 A 64 64 0 0 1 156 75" fill="none" stroke="url(#realGold)" strokeWidth="15" strokeLinecap="butt" />
            <path d="M 44 125 A 64 64 0 0 0 156 125" fill="none" stroke="url(#realGold)" strokeWidth="15" strokeLinecap="butt" />
            <path d="M 64 100 A 36 36 0 0 1 136 100" fill="none" stroke="url(#realGold)" strokeWidth="15" strokeLinecap="butt" />
            <path d="M 64 100 A 36 36 0 0 0 136 100" fill="none" stroke="url(#realGold)" strokeWidth="15" strokeLinecap="butt" />
          </svg>

          <span
            className="text-xl md:text-2xl font-black tracking-wide uppercase font-sans italic"
            style={{
              background:
                "linear-gradient(135deg, #FFF59E 0%, #F5B800 30%, #FFFCE6 55%, #D49200 85%, #7A4F00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0px 0px 2px rgba(0,0,0,0.15))",
            }}
          >
            Гурван Дэлгэр ХХК
          </span>
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

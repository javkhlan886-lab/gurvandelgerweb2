"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

const PRODUCTS = [
  {
    name: "PnL Platform",
    descKey: "product.pnl.desc" as const,
    href: "https://product.gurvandelger.com/",
  },
];

export default function Header() {
  const { t } = useLanguage();

  const NAV_LINKS = [
    { href: "/about", label: t("nav.about") },
    { href: "/partner", label: t("nav.partner") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/social", label: t("nav.social") },
  ];

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
          <div className="relative group">
            <a
              href="https://product.gurvandelger.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-1 transition-colors hover:text-indigo-600 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-indigo-500 after:transition-all hover:after:w-full"
            >
              {t("nav.products")}
              <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </a>

            <div className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 invisible translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0">
              <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10">
                {PRODUCTS.map((product) => (
                  <a
                    key={product.href}
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-1 rounded-xl p-3 text-left transition-colors hover:bg-indigo-50"
                  >
                    <span className="text-sm font-semibold text-slate-900">
                      {product.name}
                    </span>
                    <span className="text-xs leading-relaxed text-slate-500">
                      {t(product.descKey)}
                    </span>
                  </a>
                ))}
                <div className="my-1 border-t border-slate-100" />
                <a
                  href="https://product.gurvandelger.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl p-3 text-sm font-semibold text-indigo-600 transition-colors hover:bg-indigo-50"
                >
                  {t("nav.viewAllProducts")}
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          </div>

          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}

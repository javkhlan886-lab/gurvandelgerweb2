"use client";

import React, { useEffect, useRef, useState } from "react";
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
    external: true,
  },
  {
    name: "SD-WAN",
    descKey: "product.sdwan.desc" as const,
    href: "/products/sd-wan",
    external: false,
  },
];

export default function Header() {
  const { t } = useLanguage();
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  // Touch screens have no hover, so the dropdown is also toggled by tapping;
  // close it on an outside tap or Escape.
  useEffect(() => {
    if (!productsOpen) return;
    const handlePointerDown = (e: PointerEvent) => {
      if (!productsRef.current?.contains(e.target as Node)) setProductsOpen(false);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setProductsOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [productsOpen]);

  const closeProducts = () => setProductsOpen(false);

  const NAV_LINKS = [
    { href: "/about", label: t("nav.about") },
    { href: "/partner", label: t("nav.partner") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/social", label: t("nav.social") },
    { href: "/awards", label: t("nav.awards") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-xl">
      <div className="relative max-w-7xl mx-auto px-4 py-3.5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
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
          <div ref={productsRef} className="group md:relative" onMouseLeave={closeProducts}>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={productsOpen}
              aria-controls="products-menu"
              onClick={() => setProductsOpen((open) => !open)}
              className={`relative inline-flex cursor-pointer items-center gap-1 transition-colors hover:text-indigo-600 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-indigo-500 after:transition-all hover:after:w-full ${
                productsOpen ? "text-indigo-600" : ""
              }`}
            >
              {t("nav.products")}
              <ChevronDown
                className={`size-3.5 transition-transform duration-200 group-hover:rotate-180 ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* On phones the menu spans the header width; on md+ it sits under the button. */}
            <div
              id="products-menu"
              className={`absolute inset-x-4 top-full z-50 pt-2 transition-all duration-200 md:inset-x-auto md:left-1/2 md:w-72 md:-translate-x-1/2 md:pt-3 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
                productsOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-1 opacity-0"
              }`}
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10">
                {PRODUCTS.map((product) => {
                  const itemClass =
                    "flex flex-col gap-1 rounded-xl p-3 text-left transition-colors hover:bg-indigo-50";
                  const content = (
                    <>
                      <span className="text-sm font-semibold text-slate-900">
                        {product.name}
                      </span>
                      <span className="text-xs leading-relaxed text-slate-500">
                        {t(product.descKey)}
                      </span>
                    </>
                  );
                  return product.external ? (
                    <a
                      key={product.href}
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeProducts}
                      className={itemClass}
                    >
                      {content}
                    </a>
                  ) : (
                    <Link
                      key={product.href}
                      href={product.href}
                      onClick={closeProducts}
                      className={itemClass}
                    >
                      {content}
                    </Link>
                  );
                })}
                <div className="my-1 border-t border-slate-100" />
                <a
                  href="https://product.gurvandelger.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeProducts}
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

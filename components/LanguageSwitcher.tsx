"use client";

import React from "react";
import { LANGUAGES, useLanguage } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  return (
    <div className="relative group">
      <button
        type="button"
        aria-label="Change language"
        className="flex items-center gap-1.5 rounded-full border border-slate-200 px-2.5 py-1.5 text-sm transition-colors hover:border-indigo-300 hover:bg-indigo-50"
      >
        <span className="text-base leading-none">{current.flag}</span>
      </button>

      <div className="absolute right-0 top-full z-50 w-40 pt-2 opacity-0 invisible translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0">
        <div className="rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-900/10">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => setLang(l.code)}
              className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm transition-colors hover:bg-indigo-50 ${
                l.code === lang ? "font-semibold text-indigo-600" : "text-slate-700"
              }`}
            >
              <span className="text-base leading-none">{l.flag}</span>
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

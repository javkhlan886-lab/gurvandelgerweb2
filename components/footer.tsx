import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-cover bg-[url(/Gurvandelgercity.png)] text-white">
      <div className="w-full bg-black/70">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10">
          <h2 className="text-xl md:text-2xl font-black tracking-tight mb-6">
            ХОЛБОО БАРИХ
          </h2>

          <div className="flex flex-col gap-3">
            {/* Хаяг */}
            <div className="flex items-start gap-2">
              <span className="text-base mt-0.5">📍</span>
              <p className="text-sm text-gray-300 leading-relaxed">
                Улаанбаатар хот, Чингэлтэй дүүрэг, 5-р хороо,
                <br />
                Амарсанаагийн гудамж Шуурхай зар.7-р давхарт 701 тоот
              </p>
            </div>

            {/* И-мэйл */}
            <div className="flex items-center gap-2">
              <span className="text-[#4ade80] text-sm">✉</span>
              <a
                href="mailto:info@gurvandelger.com"
                className="text-sm text-[#4ade80] underline underline-offset-2 hover:text-green-300 transition-colors"
              >
                info@gurvandelger.com
              </a>
            </div>

            {/* Утас */}
            <div className="flex items-center gap-2">
              <span className="text-[#4ade80] text-sm">📱</span>
              <a
                href="tel:+97677760606"
                className="text-2xl md:text-3xl font-black text-[#4ade80] hover:text-green-300 transition-colors tracking-tight"
              >
                (+976) 77760606
              </a>
            </div>
          </div>

          {/* Сошиал */}
          <div className="flex items-center gap-3 mt-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <svg
                className="w-4 h-4 text-white fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="X"
            >
              <svg
                className="w-4 h-4 text-white fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                className="w-4 h-4 text-white fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Доод мөр */}
        <div className="border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex justify-center">
            <p className="text-xs text-gray-400">
              Вэбсайтыг Гурвандэлгэр ХХК хөгжүүлэв
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

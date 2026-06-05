import React from "react";

const GoldLogo = () => {
  return (
    <div className="flex items-center gap-4 bg-white p-6 rounded-xl select-none font-sans">
      {/* 1. Логоны дугуй дүрс (SVG) */}
      <svg
        viewBox="0 0 200 200"
        className="w-16 h-16 md:w-20 md:h-20 filter drop-shadow-[0_4px_6px_rgba(180,130,30,0.4)]"
      >
        <defs>
          {/* Алтлаг өнгөний налуу урсгал (Gradient) */}
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE066" />
            <stop offset="30%" stopColor="#F5B800" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#E6A100" />
            <stop offset="100%" stopColor="#996600" />
          </linearGradient>

          {/* Дотоод сүүдэр үүсгэх эффект */}
          <filter id="innerShadow">
            <feComponentTransfer in="SourceAlpha">
              <feFuncA type="linear" slope="1" />
            </feComponentTransfer>
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feOffset dx="1" dy="2" />
            <feComposite operator="out" in2="SourceAlpha" result="inverse" />
            <feFlood floodColor="black" floodOpacity="0.6" result="color" />
            <feComposite operator="in" in2="inverse" result="shadow" />
            <feComposite operator="over" in2="SourceGraphic" />
          </filter>
        </defs>

        {/* Гадна талын зузаан алтан хүрээ */}
        <circle
          cx="100"
          cy="100"
          r="88"
          fill="none"
          stroke="url(#goldGrad)"
          strokeWidth="12"
        />
        <circle
          cx="100"
          cy="100"
          r="82"
          fill="none"
          stroke="#B37D00"
          strokeWidth="1"
        />

        {/* Дунд талын нарийн цагираг */}
        <circle
          cx="100"
          cy="100"
          r="70"
          fill="none"
          stroke="url(#goldGrad)"
          strokeWidth="4"
        />

        {/* Дээд талын таслалтай хагас нум */}
        <path
          d="M 50 75 A 60 60 0 0 1 150 75"
          fill="none"
          stroke="url(#goldGrad)"
          strokeWidth="14"
          strokeLinecap="square"
        />

        {/* Доод талын хагас нум */}
        <path
          d="M 46 115 A 60 60 0 0 0 154 115"
          fill="none"
          stroke="url(#goldGrad)"
          strokeWidth="14"
          strokeLinecap="square"
        />

        {/* Төв хэсгийн дээд болон доод хагас дугуйнууд */}
        <path
          d="M 68 100 A 32 32 0 0 1 132 100"
          fill="none"
          stroke="url(#goldGrad)"
          strokeWidth="14"
        />
        <path
          d="M 68 100 A 32 32 0 0 0 132 100"
          fill="none"
          stroke="url(#goldGrad)"
          strokeWidth="14"
        />
      </svg>

      {/* 2. Алтлаг бичвэр (CSS Gradient text) */}
      <h1
        className="text-2xl md:text-4xl font-extrabold tracking-wide uppercase italic"
        style={{
          background:
            "linear-gradient(135deg, #FFE875 0%, #F5B800 25%, #FFF9D6 50%, #CA8A04 75%, #854D0E 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter:
            "drop-shadow(1px 2px 1px rgba(0,0,0,0.7)) drop-shadow(0px 0px 4px rgba(218,165,32,0.3))",
        }}
      >
        Гурван Дэлгэр ХХК
      </h1>
    </div>
  );
};

export default GoldLogo;

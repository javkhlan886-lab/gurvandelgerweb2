"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { Phone } from "lucide-react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_h6t9avt",
        "template_7ckmjfz",
        {
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          message: form.message,
          to_email: "javkhlan886@gmail.com",
        },
        "JRjWny9rpe_4oYbVE",
      );
      setSent(true);
    } catch {
      alert("Илгээхэд алдаа гарлаа. Дахин оролдоно уу.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url(/contactbg.jpg)" }}
    >
      {/* Харанхуй overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Header */}
      <header className="relative z-10 max-w-7xl mx-auto w-full px-4 py-5 flex items-center justify-between border-b border-gray-200/20">
        <div className="text-xl md:text-3xl font-normal tracking-tight cursor-pointer text-white/90">
          <a href="/">Гурвандэлгэр ХХК</a>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/90">
          <Link
            href="/about"
            className="hover:text-[#C1E994] transition-colors"
          >
            Бидний тухай
          </Link>
          <Link
            href="/partner"
            className="hover:text-[#C1E994] transition-colors"
          >
            Партнер байгууллагууд
          </Link>
          <Link
            href="/projects"
            className="hover:text-[#C1E994] transition-colors"
          >
            Хийсэн төсөлүүд
          </Link>
          <Link
            href="/social"
            className="hover:text-[#C1E994] transition-colors"
          >
            Нийгмийн хариуцлага
          </Link>
          <Button className="bg-[#C1E994] hover:bg-[#b2df82] text-gray-900 px-4 py-2 rounded-full text-xs font-medium">
            <Link href="/contact">Холбоо барих</Link>
          </Button>
        </nav>
        <button className="md:hidden text-white text-3xl">☰</button>
      </header>

      {/* Form */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-16 gap-8">
        <div className="w-full max-w-lg bg-blue-500/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl">
          {sent ? (
            <div className="text-center py-10">
              <p className="text-4xl mb-4">✅</p>
              <h3 className="text-white text-xl font-bold mb-2">
                Амжилттай илгээлээ!
              </h3>
              <p className="text-white/80 text-sm">
                Бид тантай удахгүй холбогдох болно.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setForm({
                    name: "",
                    company: "",
                    email: "",
                    phone: "",
                    message: "",
                  });
                }}
                className="mt-6 text-white underline text-sm"
              >
                Дахин илгээх
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-white text-2xl font-bold mb-6">
                Холбогдох мэдээлэл
              </h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Таны нэр"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full rounded-xl bg-blue-400/50 text-white placeholder-white/70 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/40"
                />
                <input
                  type="text"
                  placeholder="Байгууллага"
                  value={form.company}
                  onChange={(e) =>
                    setForm({ ...form, company: e.target.value })
                  }
                  className="w-full rounded-xl bg-blue-400/50 text-white placeholder-white/70 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/40"
                />
                <input
                  type="email"
                  placeholder="Имэйл хаяг"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full rounded-xl bg-blue-400/50 text-white placeholder-white/70 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/40"
                />
                <input
                  type="tel"
                  placeholder="Утасны дугаар"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl bg-blue-400/50 text-white placeholder-white/70 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/40"
                />
                <textarea
                  placeholder="Үнийн санал авах бүтээгдэхүүн, шийдэл ба нэмэлт шаардлага"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  rows={4}
                  className="w-full rounded-xl bg-blue-400/50 text-white placeholder-white/70 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/40 resize-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-white text-blue-600 font-bold py-4 rounded-xl text-sm hover:bg-gray-100 transition-colors mt-2 disabled:opacity-60"
                >
                  {loading ? "Илгээж байна..." : "Хүсэлт илгээх"}
                </button>
              </form>
            </>
          )}
        </div>

        {/* Утасны дугаарууд */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="tel:+976860310586"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors text-white px-6 py-3 rounded-xl text-sm font-medium"
          >
            <Phone size={16} className="text-[#C1E994]" />
            +976-86031058
          </a>

          <a
            href="tel:+97680101872"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors text-white px-6 py-3 rounded-xl text-sm font-medium"
          >
            <Phone size={16} className="text-[#C1E994]" />
            +976-80101872
          </a>

          <a
            href="tel:+97677760606"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors text-white px-6 py-3 rounded-xl text-sm font-medium"
          >
            <Phone size={16} className="text-[#C1E994]" />
            +976-77760606
          </a>
        </div>
      </div>
    </div>
  );
}

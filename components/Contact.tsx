"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone } from "lucide-react";
import Header from "./Header";

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
        },
        "JRjWny9rpe_4oYbVE"
      );
      setSent(true);
    } catch {
      alert("Илгээхэд алдаа гарлаа. Дахин оролдоно уу.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white text-slate-900 font-sans antialiased">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="absolute top-24 -right-32 h-[26rem] w-[26rem] rounded-full bg-cyan-300/25 blur-3xl" />
      </div>

      <Header />

      <div className="max-w-3xl mx-auto px-4 py-16 md:py-20 flex flex-col items-center gap-10">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 shadow-sm">
            Холбоо барих
          </span>
          <h1 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Бидэнтэй холбогдоорой
          </h1>
          <p className="mt-3 text-slate-600">
            Асуулт, хүсэлт, үнийн санал авахыг хүсвэл доорх маягтыг бөглөөрэй.
          </p>
        </div>

        <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-xl shadow-slate-200/60">
          {sent ? (
            <div className="text-center py-10">
              <p className="text-4xl mb-4">✅</p>
              <h3 className="text-slate-900 text-xl font-bold mb-2">
                Амжилттай илгээлээ!
              </h3>
              <p className="text-slate-500 text-sm">
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
                className="mt-6 text-indigo-600 underline text-sm hover:text-indigo-500"
              >
                Дахин илгээх
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-slate-900 text-2xl font-bold mb-6">
                Холбогдох мэдээлэл
              </h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Таны нэр"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                />
                <input
                  type="text"
                  placeholder="Байгууллага"
                  value={form.company}
                  onChange={(e) =>
                    setForm({ ...form, company: e.target.value })
                  }
                  className="w-full rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                />
                <input
                  type="email"
                  placeholder="Имэйл хаяг"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                />
                <input
                  type="tel"
                  placeholder="Утасны дугаар"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                />
                <textarea
                  placeholder="Үнийн санал авах бүтээгдэхүүн, шийдэл ба нэмэлт шаардлага"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  rows={4}
                  className="w-full rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 resize-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold py-4 rounded-xl text-sm hover:shadow-lg hover:shadow-indigo-500/30 transition-all mt-2 disabled:opacity-60"
                >
                  {loading ? "Илгээж байна..." : "Хүсэлт илгээх"}
                </button>
              </form>
            </>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="tel:+976860310586"
            className="flex items-center gap-2 bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 transition-colors text-slate-700 px-6 py-3 rounded-xl text-sm font-medium"
          >
            <Phone size={16} className="text-indigo-600" />
            +976-86031058
          </a>

          <a
            href="tel:+97680101872"
            className="flex items-center gap-2 bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 transition-colors text-slate-700 px-6 py-3 rounded-xl text-sm font-medium"
          >
            <Phone size={16} className="text-indigo-600" />
            +976-80101872
          </a>

          <a
            href="tel:+97677760606"
            className="flex items-center gap-2 bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 transition-colors text-slate-700 px-6 py-3 rounded-xl text-sm font-medium"
          >
            <Phone size={16} className="text-indigo-600" />
            +976-77760606
          </a>
        </div>
      </div>
    </div>
  );
}

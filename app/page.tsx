import React from "react";
import type { Metadata } from "next";
import home from "@/components/home";

import Footer from "@/components/footer";
const Home = home;

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <div>
      <Home />
      <Footer />
    </div>
  );
}

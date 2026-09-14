import type { Metadata } from "next";

// page.tsx in this route is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: "Мэдээлэл технологи, харилцаа холбоо",
  description:
    "“Б” ангиллын тусгай зөвшөөрөлтэй харилцаа холбооны дэд бүтэц: шилэн кабель, камерын хяналтын систем, IoT, SD-WAN сүлжээ, програм хангамжийн шийдэл.",
  alternates: { canonical: "/telecom" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

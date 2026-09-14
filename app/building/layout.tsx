import type { Metadata } from "next";

// page.tsx in this route is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: "Барилга байгууламж",
  description:
    "2011 оноос барилга угсралтын ажил гүйцэтгэж буй Гурван Дэлгэр ХХК-ийн төслүүд: үйлдвэрийн барилга, агуулах, уурхайн ажилчдын орон сууц, насос станцын суурь.",
  alternates: { canonical: "/building" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

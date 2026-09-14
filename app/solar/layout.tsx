import type { Metadata } from "next";

// page.tsx in this route is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: "Сэргээгдэх эрчим хүч — эрчим хүч хадгалах систем",
  description:
    "LiFePO4 батерей, 5кВт ба 10кВт инвертортой нэгдсэн эрчим хүч хадгалах систем. Нарны болон салхины эрчим хүч, гэр, харилцаа холбооны станцад зориулсан шийдэл.",
  alternates: { canonical: "/solar" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

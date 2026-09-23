import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const ROUTES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/products/sd-wan", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products/portable-power", priority: 0.9, changeFrequency: "monthly" },
  { path: "/telecom", priority: 0.8, changeFrequency: "monthly" },
  { path: "/building", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solar", priority: 0.8, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/awards", priority: 0.6, changeFrequency: "monthly" },
  { path: "/partner", priority: 0.6, changeFrequency: "monthly" },
  { path: "/social", priority: 0.5, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

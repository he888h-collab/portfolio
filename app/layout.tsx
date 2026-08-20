import type { Metadata } from "next";
import "./globals.css";
import "./home-refresh.css";

export const metadata: Metadata = {
  title: "许馨月 — 视觉设计师",
  description: "许馨月的个人网站，聚焦 AI 视觉、品牌、三维与动态设计。",
  openGraph: {
    title: "许馨月 — 视觉设计师",
    description: "Visual design, AI workflows, brand, 3D and motion.",
    type: "website",
    images: [{ url: "/og-v2.png", width: 1912, height: 824, alt: "许馨月视觉设计个人网站" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "许馨月 — 视觉设计师",
    description: "AI visual workflows, brand, 3D and motion design.",
    images: ["/og-v2.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}

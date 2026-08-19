import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "许馨月 — 视觉设计师作品集",
  description: "许馨月的视觉设计作品集，聚焦 AI 视觉工作流、品牌、电商、三维与动态设计。",
  openGraph: {
    title: "许馨月 — 视觉设计师作品集",
    description: "AI visual workflows, brand, 3D and motion design.",
    type: "website",
    images: [{ url: "/og.png", width: 2184, height: 941, alt: "许馨月视觉设计作品集" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "许馨月 — 视觉设计师作品集",
    description: "AI visual workflows, brand, 3D and motion design.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}

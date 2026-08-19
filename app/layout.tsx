import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Y.Studio — Visual Designer Portfolio",
  description: "视觉设计师个人作品集，聚焦品牌视觉、数字体验与动态叙事。",
  openGraph: {
    title: "Y.Studio — Visual Designer Portfolio",
    description: "Designing visual impact through brand, digital and motion.",
    type: "website",
    images: [{ url: "/og.png", width: 2184, height: 941, alt: "Designing Visual Impact — Y.Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Y.Studio — Visual Designer Portfolio",
    description: "Designing visual impact through brand, digital and motion.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}

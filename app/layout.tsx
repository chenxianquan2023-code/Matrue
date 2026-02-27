import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundOrbit } from "@/components/background-orbit";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Matrue | From Vision to MVP, Powered by AI",
  description:
    "来自大厂的 AI 精英团队，为创新者提供生产级 MVP 构建。3 天逻辑对齐，4-8 周完整交付。",
  openGraph: {
    title: "Matrue | From Vision to MVP, Powered by AI",
    description:
      "来自大厂的 AI 精英团队，为创新者提供生产级 MVP 构建。3 天逻辑对齐，4-8 周完整交付。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className="font-sans antialiased">
        <div className="relative min-h-screen overflow-hidden">
          <BackgroundOrbit />
          {children}
        </div>
      </body>
    </html>
  );
}


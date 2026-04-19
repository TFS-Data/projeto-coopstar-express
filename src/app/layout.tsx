import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#dc2626",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Coopstar Express | Entregas Rápidas e Seguras em São Paulo",
  description:
    "Empresa especializada em entregas e coletas corporativas há mais de 9 anos. Moto Frete, Delivery B2B e logística urbana em São Paulo e Grande SP. Atendimento 24h.",
  keywords:
    "motoboy, moto frete, entrega rápida, são paulo, moema, logística corporativa, b2b, coleta, entregas sp, motoboy corporativo",
  authors: [{ name: "Coopstar Express" }],
  robots: "index, follow",
  openGraph: {
    title: "Coopstar Express | Entregas Rápidas e Seguras",
    description:
      "Entregas e coletas corporativas com agilidade e segurança. Mais de 9 anos em São Paulo e Grande SP.",
    type: "website",
    locale: "pt_BR",
    siteName: "Coopstar Express",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}

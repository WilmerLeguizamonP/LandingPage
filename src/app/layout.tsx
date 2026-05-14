import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "3G INGENIERÍA AVANZADA S.A.S. | Soluciones en Ingeniería y Construcción",
  description: "Líderes en innovación y sostenibilidad en el sector de la construcción en Colombia. NIT: 901116527-7.",
  keywords: ["ingeniería civil", "arquitectura", "construcción", "Bogotá", "3G Ingeniería", "sostenibilidad"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${inter.variable}`}>
      <body className="font-outfit antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}

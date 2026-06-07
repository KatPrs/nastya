import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const serif = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
});

const sans = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Настя и Илья | Свадьба",
  description: "Приглашение на нашу свадьбу",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      {/* Применяем шрифт sans по умолчанию ко всему сайту */}
      <body className="min-h-full flex flex-col font-sans bg-[#FDFBF7] text-stone-800">
        {children}
      </body>
    </html>
  );
}
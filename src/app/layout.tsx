import type { Metadata } from "next";
import "./globals.css";

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
    >
      <body className="min-h-full flex flex-col font-palatino bg-white text-black">
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const mainFont = localFont({ src: "../assets/fonts/Vazir.ttf"});


export const metadata: Metadata = {
  title: "Metronic App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={`${mainFont.style.fontFamily}`+ 'size-full'}>
        {children}
      </body>
    </html>
  );
}

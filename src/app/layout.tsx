import type { Metadata } from "next";
import "../assets/style/css/globals.css";
import localFont from "next/font/local";


const mainFont = localFont({ src: "../assets/fonts/Vazir.ttf" });


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
    <html lang="en">
      <body
        className={`${mainFont.style.fontFamily}`}
      >
        {children}
      </body>
    </html>
  );
}

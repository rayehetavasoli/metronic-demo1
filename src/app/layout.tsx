import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from '@/components/core/header'
import Sidebar from '@/components/core/sidebar'
import Footer from '@/components/core/footer'


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
      <body
        className={`${mainFont.style.fontFamily}`}
      >
         <div className="size-full justify-center items-start inline-flex min-h-lvh">
      <div className="grow shrink basis-0  bg-light-bg-primary dark:bg-dark-bg-primary flex-col justify-between items-center inline-flex">
        <Header/>
        <div className="px-20 py-15 justify-center items-center my-16 size-full mx-10" >{children}</div>
        <Footer/>
      </div>
      <Sidebar/>
    </div>
        
      </body>
    </html>
  );
}

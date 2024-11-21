import type { Metadata } from "next";
import "./globals.css";



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
      <body className='size-full'>
        {children}
      </body>
    </html>
  );
}

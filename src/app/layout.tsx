import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import "./globals.css";

const clashDisplay = localFont({
  src: [
    {
      path: './fonts/ClashDisplay-Variable.woff2',
      weight: '200 700',
      style: 'normal',
    },
    {
      path: './fonts/ClashDisplay-Variable.woff',
      weight: '200 700',
      style: 'normal',
    },
    {
      path: './fonts/ClashDisplay-Variable.ttf',
      weight: '200 700',
      style: 'normal',
    },
  ],
  variable: '--font-clash-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Fizjoterapia - Marek Bober",
  description: "Fizjoterapeuta Toruń, masaż sportowy, masaż leczniczy, masaż relaksacyjny, masaż klasyczny",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={clashDisplay.variable}>
        <Header />
          {children}
        <Footer />

        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
        <div className="line line-4"></div>
      </body>
    </html>
  );
}

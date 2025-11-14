import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";

const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "100 900",
  display: "swap",
  style: "normal",
})

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800",],
  style: "normal",
})

export const metadata: Metadata = {
  title: "Cobble Road Labs: Built to Last. Designed to Lead.",
  description: "The sophisticated design and development studio that combines the enduring trust of a craftsman with the agility of a modern innovator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

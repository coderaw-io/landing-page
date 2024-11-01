import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";

const pcapTerminal = localFont({
  src: "./assets/fonts/PCapTerminal.otf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Coderaw | Soluções Web",
  description: "Soluções que impulsionam negócios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${pcapTerminal.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

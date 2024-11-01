import type { Metadata } from "next";
import { Michroma } from "next/font/google";

import "./globals.css";

const michroma = Michroma({
  weight: ["400"],
  subsets: ["latin"]
})

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
        className={`${michroma.className} antialiased`}
      >
        <div className="min-h-screen w-full sm:max-w-7xl sm:w-full sm:mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}

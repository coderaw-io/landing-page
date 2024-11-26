import "./globals.css";

import { AOSInit } from "@/components/shared/aos-init";
import { ThemeProvider } from "@/components/shared/theme-provider";
import type { Metadata } from "next";
import { Michroma } from "next/font/google";
import { Toaster } from 'sonner';

const michroma = Michroma({
  weight: ["400"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "coderaw | tecnologia",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AOSInit />
          <div className="min-h-screen w-full sm:max-w-6xl sm:w-full sm:mx-auto">
            {children}
          </div>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}

import { Footer } from "@/components/shared/page/footer";
import { Header } from "@/components/shared/page/header";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="w-full grid grid-cols-1 items-center gap-x-6">
        <Header />
        <main className="py-12 md:py-16 lg:py-24">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
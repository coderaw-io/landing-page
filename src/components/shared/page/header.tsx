import Link from "next/link";

import { Logo } from "../icons/logo";
import { ThemeToggle } from "../theme-toggle";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  return (
    <>
      <header className="hidden sm:flex flex-wrap sticky top-0 inset-x-0 md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav className="bg-background relative max-w-6xl w-full flex items-center justify-between mx-auto pt-2">
          <div>
            <Link
              className="h-[56px] flex items-center rounded-[0.3rem]"
              href="/"
            >
              <Logo className="w-1/2 h-auto object-cover" />
            </Link>
          </div>

          <div
            id="hs-navbar-header-floating"
            className="block hs-collapse overflow-hidden transition-all duration-300 basis-full grow"
          >
            <div className="flex justify-end items-center gap-6 ps-7">
              {/* <Link
                href="/servicos"
                className="py-3 text-foreground hover:text-primary focus:outline-none"
              >
                Serviços
              </Link> */}

              <Link
                href="/contato"
                className="py-3 text-foreground hover:text-primary focus:outline-none"
              >
                Contato
              </Link>

              <Link
                href="/sobre"
                className="py-3 text-foreground hover:text-primary focus:outline-none"
              >
                Sobre-nós
              </Link>

              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      <div className="h-16 flex justify-between items-center p-4 gap-3 sm:hidden">
        <div>
          <Link
            className="h-12 flex items-center rounded-[0.3rem]"
            href="/"
          >
            <Logo className="w-3/4 h-auto object-cover" />
          </Link>
        </div>

        <ThemeToggle className="w-16 h-8" />
        <MobileMenu />
      </div>
    </>
  )
}

import { Logo } from "../icons/logo";
import { ThemeToggle } from "../theme-toggle";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  return (
    <>
      <header className="hidden sm:flex flex-wrap sticky top-0 inset-x-0 md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav className="bg-background mt-6 relative max-w-3xl w-full border border-border rounded-[0.3rem] flex items-center justify-between pl-1 pr-3 mx-auto">
          <div>
            <a
              className="h-[56px] flex items-center rounded-[0.3rem]"
              href="/"
            >
              <Logo className="w-[60%] h-auto object-cover" />
            </a>
          </div>

          <div
            id="hs-navbar-header-floating"
            className="block hs-collapse overflow-hidden transition-all duration-300 basis-full grow"
          >
            <div className="flex justify-end items-center gap-6 ps-7">
              <a
                href="#"
                className="py-3 text-foreground hover:text-primary focus:outline-none"
              >
                Blog
              </a>

              <a
                href="#"
                className="py-3 text-foreground hover:text-primary focus:outline-none"
              >
                Serviços
              </a>

              <a
                href="#"
                className="py-3 text-foreground hover:text-primary focus:outline-none"
              >
                Contato
              </a>

              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      <div className="h-16 flex justify-between items-center p-4 gap-3 sm:hidden">
        <div>
          <a
            className="h-12 flex items-center rounded-[0.3rem]"
            href="/"
          >
            <Logo className="w-1/2 h-auto object-cover" />
          </a>
        </div>

        <ThemeToggle className="w-16 h-8" />
        <MobileMenu />
      </div>
    </>
  )
}
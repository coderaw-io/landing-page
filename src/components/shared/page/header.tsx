import { Icon } from "../icons/icon";
import { ThemeToggle } from "../theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
      <nav className="bg-background mt-6 relative max-w-3xl w-full border border-border rounded-[0.3rem] mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:pl-1 md:pr-3 md:mx-auto">
        <div className="px-4 md:px-0 flex justify-between items-center">
          <div>
            <a
              className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              href="/"
            >
              <Icon className="w-[52px] h-auto" />
            </a>
          </div>

          {/* Mobile Menu */}
        </div>

        <div
          id="hs-navbar-header-floating"
          className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-6 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
            <a
              href="#"
              className="py-0.5 md:py-3 px-4 md:px-1 text-foreground hover:text-primary focus:outline-none"
            >
              Blog
            </a>

            <a
              href="#"
              className="py-0.5 md:py-3 px-4 md:px-1 text-foreground hover:text-primary focus:outline-none"
            >
              Orçamento
            </a>

            <a
              href="#"
              className="py-0.5 md:py-3 px-4 md:px-1 text-foreground hover:text-primary focus:outline-none"
            >
              Contato
            </a>

            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}
import { SunIcon } from "lucide-react";
import { Button } from "../ui/button";

import blackIcon from "@/app/assets/images/black-icon.png";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
      <nav className="mt-6 relative max-w-3xl w-full border border-border rounded-[0.3rem] mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-3 md:mx-auto">
        <div className="px-4 md:px-0 flex justify-between items-center">
          <div>
            <a
              className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              href="/"
            >
              <Image
                src={blackIcon}
                width={100}
                height={100}
                className="w-[52px] h-auto"
                alt="Coderaw icon"
              />
            </a>
          </div>

          {/* Mobile Menu */}
        </div>

        <div
          id="hs-navbar-header-floating"
          className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
            <a
              href="#"
              className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-foreground hover:text-primary focus:outline-none"
            >
              Blog
            </a>

            <a
              href="#"
              className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-foreground hover:text-primary focus:outline-none"
            >
              Orçamento
            </a>

            <a
              href="#"
              className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-foreground hover:text-primary focus:outline-none"
            >
              Tecnologias
            </a>

            <Button
              type="button"
              size="icon"
              variant="ghost"
              className="size-8"
            >
              <SunIcon />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
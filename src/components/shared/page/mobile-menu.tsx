import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { AlignJustifyIcon } from "lucide-react";
import { Icon } from "../icons/icon";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="w-16 h-8"
        >
          <AlignJustifyIcon className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent className="p-0">
        <SheetHeader className="py-6 pl-3">
          <SheetTitle className="flex items-center gap-2">
            <Icon className="w-1/6" />
            <span className="text-base">
              Links de navegação
            </span>
          </SheetTitle>
          <SheetDescription className="sr-only">
            Acesse páginas do seu interesse.
          </SheetDescription>
        </SheetHeader>

        <ul className="flex flex-col space-y-6 p-6">
          <Link
            href="/servicos"
            className="flex items-center gap-3 text-foreground hover:text-primary focus:outline-none"
          >
            <div className="h-5 w-1 bg-primary" />
            Serviços
          </Link>

          <Link
            href="/contato"
            className="flex items-center gap-3 text-foreground hover:text-primary focus:outline-none"
          >
            <div className="h-5 w-1 bg-primary" />
            Contato
          </Link>

          <Link
            href="/sobre"
            className="flex items-center gap-3 text-foreground hover:text-primary focus:outline-none"
          >
            <div className="h-5 w-1 bg-primary" />
            Sobre-nós
          </Link>
        </ul>
      </SheetContent>
    </Sheet>
  )
}
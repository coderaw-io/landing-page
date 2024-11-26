import Link from "next/link";

import { AnimatedBeamMultiple } from "@/components/magic-ui/animated-beam-multiple";
import { Button } from "@/components/ui/button";

export function AnimatedBeamSection() {
  return (
    <div data-aos="fade-right" className="grid grid-cols-1 items-center gap-4 py-6 md:grid-cols-2 md:py-16">
      <div className="hidden md:block">
        <AnimatedBeamMultiple />
      </div>

      <div className="flex flex-col space-y-8 px-6">
        <h4 className="block font-medium text-4xl sm:text-5xl md:text-6xl">
          Ainda utilizando diversas plataformas?
        </h4>

        <p className="text-base text-muted-foreground sm:text-lg">
          Centralize a sua operação em um só lugar com a identidade da sua empresa, permitindo
          flexibilidade, customização e domínio total sobre o sistema desenvolvido.
        </p>

        <div className="block md:hidden">
          <AnimatedBeamMultiple />
        </div>

        <div className="pt-6 md:pt-12">
          <Link href="/contato">
            <Button
              type="button"
              className="w-full sm:max-w-md disabled:opacity-75"
            >
              Entrar em contato
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

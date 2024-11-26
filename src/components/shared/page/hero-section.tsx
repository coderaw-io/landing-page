import AnimatedShinyText from "@/components/magic-ui/animated-shiny-text";
import GridPattern from "@/components/magic-ui/grid-pattern";

import { cn } from "@/lib/utils";
import { ZapIcon } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden pt-16">
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn(
          "absolute inset-0 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
        )}
      />

      <div className="relative z-10 max-w-[85rem] mx-auto px-4 py-12 sm:px-6 lg:px-8 space-y-8">
        <div className="flex min-h-10 items-center justify-center">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-foreground hover:duration-300">
              <span className="flex items-center gap-2 text-sm italic">
                <ZapIcon className="size-4" />
                Potencializando negócios
              </span>
            </AnimatedShinyText>
          </div>
        </div>

        <div className="max-w-3xl text-center mx-auto">
          <h1 className="block font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Soluções que impulsionam negócios
          </h1>
        </div>

        <div className="max-w-3xl text-center mx-auto">
          <p className="text-base text-muted-foreground sm:text-lg">
            Nosso compromisso é entregar soluções de alta qualidade <br />
            que impulsionam o sucesso de nossos clientes, sempre com <br />
            uma abordagem consultiva e focada em resultados.
          </p>
        </div>
      </div>
    </div>
  )
}

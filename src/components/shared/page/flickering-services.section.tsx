import FlickeringGrid from "@/components/magic-ui/flickering-grid";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function FlickeringServicesSection() {
  return (
    <div
      data-aos="fade-left"
      className="relative w-full flex flex-col items-center space-y-6 py-12 md:flex-row md:justify-between md:space-y-0 md:py-24"
    >
      <div className="relative z-10 w-full px-6 sm:px-0">
        <h4 className="font-medium text-4xl text-left sm:text-5xl md:text-6xl lg:text-7xl">
          Nossos serviços
        </h4>

        <div className="max-w-4xl mx-auto w-full text-left pt-8 lg:pr-4">
          <p className="text-base text-muted-foreground sm:text-lg">
            Cada organização possui características e demandas exclusivas, o que exige soluções 
            igualmente personalizadas. Nosso serviço de desenvolvimento sob medida é dedicado a 
            projetar e implementar sistemas específicos, cuidadosamente alinhados às particularidades 
            e objetivos estratégicos de cada cliente, garantindo resultados otimizados e plenamente 
            adequados às suas necessidades.
          </p>
        </div>

        <div className="flex items-center pt-6 md:pt-12">
          <Link href="/contato" className="w-full md:max-w-md">
            <Button type="button" className="w-full">
              Contratar nossos serviços
            </Button>
          </Link>
        </div>
      </div>

      <FlickeringGrid
        className="hidden sm:flex z-0 relative inset-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="#2DC7FF"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={600}
        width={600}
      />
    </div>
  )
}
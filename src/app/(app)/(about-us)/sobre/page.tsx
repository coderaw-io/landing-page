import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function AboutUsPage() {
  return (
    <div data-aos="fade-left" className="relative overflow-hidden sm:rounded-[0.3rem]">
      <div
        aria-hidden="true"
        className="flex absolute -top-80 start-1/2 transform -translate-x-1/2"
      >
        <div className="bg-gradient-to-r from-primary/50 to-sky-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-cyan-400 dark:to-sky-300" />
        <div className="bg-gradient-to-tl from-cyan-50 via-cyan-100 to-cyan-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-sky-300 dark:via-sky-200 dark:to-cyan-400" />
      </div>

      <div className="relative z-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="max-w-2xl text-center mx-auto">
            <div className="mt-5 max-w-2xl">
              <h1 className="block font-semibold text-foreground text-4xl md:text-5xl lg:text-6xl dark:text-background">
                Nossa missão é  impulsionar<br />
                negócios através da <strong className="text-primary">tecnologia</strong>
              </h1>
            </div>

            <div className="mt-8 max-w-3xl">
              <p className="text-lg text-muted-foreground dark:text-foreground">
                Combinando desenvolvimento de software e consultoria estratégica, a coderaw cria sistemas personalizados que
                atendem às necessidades específicas de cada cliente. Trabalhamos com as melhores práticas e tecnologias para
                entregar soluções robustas, escaláveis e eficientes para impulsionar negócios. <br /> <br />
                Além de desenvolver software sob medida, a coderaw também atua no mercado de SaaS (Software as a Service), oferecendo
                produtos que ajudam tanto empresas quanto pessoas a otimizar processos e melhorar sua eficiência. Ao unir consultoria,
                desenvolvimento de software e inovação no modelo SaaS, conseguimos fornecer soluções completas e integradas que fazem a
                diferença na vida de nossos clientes. <br /> <br />
                Nosso compromisso é oferecer soluções de alta qualidade que impulsionam o sucesso de nossos clientes, com uma abordagem 
                consultiva, estratégica e orientada a resultados.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center pt-12 lg:pt-16">
            <Link href="/contato">
              <Button type="button" className="px-12">
                <span className="md:hidden">
                  Entrar em contato
                </span>
                <span className="hidden md:flex">
                  Tenho interesse e quero saber mais
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
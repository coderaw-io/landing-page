import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";

import DotPattern from "@/components/magic-ui/dot-pattern";
import { MorphingText } from "@/components/ui/morphing-text";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "lucide-react";

const texts = [
  "Somos a Coderaw.io",
  "Inovação e tecnologia",
  "Transformando idéias",
  "Potencializando negócios",
];

export function CompanyTabsSection() {
  return (
    <div
      data-aos="fade-right"
      className="container mx-auto px-4 py-8"
    >
      <div className="relative">
        <MorphingText texts={texts} className="text-5xl mb-20 sm:mb-24 md:mb-12 lg:mb-36" />

        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
          )}
        />
      </div>

      <Tabs defaultValue="about" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="about">Nossa empresa</TabsTrigger>
          <TabsTrigger value="services" className="hidden md:flex">Nossos serviços</TabsTrigger>
          <TabsTrigger value="mission" className="hidden md:flex">Nossa missão</TabsTrigger>
          <TabsTrigger value="values">Nossos valores</TabsTrigger>
        </TabsList>

        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle>Sobre a Coderaw</CardTitle>
              <CardDescription>Nossa essência e nosso propósito</CardDescription>
            </CardHeader>

            <CardContent>
              <p className="mb-4">
                A base da Coderaw são pessoas apaixonadas pelo que fazem. Cada linha de código que desenvolvemos carrega
                nossa dedicação e o compromisso de entregar o melhor resultado possível, considerando as circunstâncias
                e os desafios de cada cenário.
              </p>

              <p className="mb-4">
                A Coderaw nasceu da união de pessoas com um amor genuíno por áreas distintas da programação. Esse
                encontro de ideias e especializações nos permite trabalhar com aquilo que realmente nos motiva:
                tecnologia.
              </p>

              <p className="mb-4">
                Não é apenas sobre desenvolver ou fornecer software; é sobre criar soluções que atendam às expectativas
                do mercado e superem as necessidades de nossos clientes, buscando sempre a excelência. Nosso propósito
                vai além de entregar soluções: queremos impulsionar o mercado de nossos clientes, oferecendo produtos e
                serviços que realmente façam a diferença.
              </p>

              <p className="mb-6">
                Como apaixonados por desenvolvimento, acreditamos que não faz sentido estar no mercado sem criar nossos
                próprios produtos. Afinal, quem ama, constrói. Por isso, nos dedicamos ao desenvolvimento de SaaS que
                atendem diversos segmentos.
              </p>

              <Link href="/contato" className="flex items-center gap-1 text-primary hover:underline">
                Entrar em contato
                <ArrowUpRightIcon />
              </Link>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services">
          <Card>
            <CardHeader>
              <CardTitle>Nossos Serviços</CardTitle>
              <CardDescription>Soluções que oferecemos</CardDescription>
            </CardHeader>

            <CardContent>
              <p className="mb-4">
                Na Coderaw, nos dedicamos ao desenvolvimento de SaaS (Software as a Service) que atendem diversos
                segmentos:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>SpendManagement:</strong> Soluções avançadas para finanças pessoais e empresariais, ajudando a
                  otimizar gastos e melhorar a gestão financeira.
                </li>

                <li>
                  <strong>Gestão Condominial:</strong> Ferramentas inovadoras para simplificar e aprimorar a
                  administração de condomínios, melhorando a comunicação e eficiência.
                </li>

                <li>
                  <strong>Otimização de Atendimentos:</strong> SaaS especializado para melhorar a eficiência e qualidade
                  de atendimentos em diversos setores, aumentando a satisfação do cliente.
                </li>
              </ul>

              <p className="mt-4 mb-6">
                Cada solução é desenvolvida com paixão e expertise, visando atender às necessidades específicas de
                nossos clientes e impulsionar seus negócios.
              </p>

              <Link href="/servicos" className="flex items-center gap-1 text-primary hover:underline">
                Dúvidas? Saiba mais
                <ArrowUpRightIcon />
              </Link>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mission">
          <Card>
            <CardHeader>
              <CardTitle>Nossa Missão</CardTitle>
              <CardDescription>O que nos move</CardDescription>
            </CardHeader>

            <CardContent>
              <p>
                Transformar ideias em soluções tecnológicas apaixonantes e eficientes, impulsionando o mercado de nossos
                clientes por meio de inovação e excelência, enquanto desenvolvemos produtos que realmente façam a
                diferença.
              </p>

              <p className="mt-4 mb-6">
                Nossa missão é criar soluções tecnológicas inovadoras e de alto impacto, focadas em atender às necessidades
                reais de nossos clientes. Buscamos sempre entregar excelência, promovendo o crescimento sustentável e contribuindo para um futuro mais eficiente e conectado.
              </p>

              <Link href="/contato" className="flex items-center gap-1 text-primary hover:underline">
                Fale conosco
                <ArrowUpRightIcon />
              </Link>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="values">
          <Card>
            <CardHeader>
              <CardTitle>Nossos Valores</CardTitle>
              <CardDescription>O que nos guia</CardDescription>
            </CardHeader>

            <CardContent>
              <ul className="space-y-4">
                <li>
                  <strong className="block text-lg">Paixão pela Tecnologia</strong>
                  <p>
                    Colocamos amor em cada linha de código, buscando sempre a excelência em tudo o que desenvolvemos.
                  </p>
                </li>

                <li>
                  <strong className="block text-lg">Inovação com Propósito</strong>
                  <p>
                    Desenvolvemos soluções que vão além do funcional, agregando valor e atendendo às necessidades reais
                    do mercado.
                  </p>
                </li>

                <li>
                  <strong className="block text-lg">Compromisso com o Cliente</strong>
                  <p>
                    Nosso foco é impulsionar o crescimento dos nossos clientes, entendendo suas demandas e superando
                    expectativas.
                  </p>
                </li>

                <li>
                  <strong className="block text-lg">Autenticidade e Propriedade</strong>
                  <p>
                    Criamos nossos próprios produtos, porque acreditamos que quem ama o que faz também constrói com
                    paixão.
                  </p>
                </li>

                <li>
                  <strong className="block text-lg">Colaboração e Expertise</strong>
                  <p>
                    Unimos conhecimentos distintos para entregar soluções completas, combinando talentos em frontend,
                    backend e além.
                  </p>
                </li>

                <li>
                  <strong className="block text-lg">Crescimento Contínuo</strong>
                  <p>
                    Estamos sempre em busca de aprender, evoluir e superar desafios, mantendo o foco em inovação e
                    resultados.
                  </p>
                </li>

                <li className="mb-6">
                  <strong className="block text-lg">Sustentabilidade e Responsabilidade</strong>
                  <p>
                    Construímos com propósito, visando impactos positivos para o mercado, os clientes e a sociedade.
                  </p>
                </li>

                <Link href="/contato" className="flex items-center gap-1 text-primary hover:underline">
                  Tenho interesse e quero saber mais
                  <ArrowUpRightIcon />
                </Link>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
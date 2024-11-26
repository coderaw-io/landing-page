import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <div
      data-aos="fade-right"
      className="py-12 px-6 md:py-16"
    >
      <h5 className="font-medium text-4xl sm:text-5xl">
        Perguntas Frequentes
      </h5>

      <Accordion type="single" collapsible className="w-full pt-6 md:pt-12">
        <AccordionItem value="item-1">
          <AccordionTrigger>Quais os tipos de serviços prestados?</AccordionTrigger>
          <AccordionContent>
            Na coderaw, oferecemos um portfólio abrangente de serviços projetados para atender às
            demandas de empresas que buscam soluções tecnológicas personalizadas, escaláveis e de
            alto desempenho. Nosso compromisso vai além do desenvolvimento de software: entregamos
            ferramentas estratégicas que impulsionam a transformação digital e o crescimento sustentável
            dos nossos clientes.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Quais as principais ferramentas utilizadas?</AccordionTrigger>
          <AccordionContent>
            Oferecemos soluções completas em desenvolvimento full-stack, abrangendo desde o
            front-end (interface do usuário) até o back-end e a infraestrutura. Nossa principal
            stack tecnológica inclui JavaScript/TypeScript e todo o seu ecossistema, além de C#
            com .NET. Também trabalhamos com bancos de dados relacionais e não-relacionais, infraestrutura
            como código (IaC), serviços em nuvem (cloud) e uma ampla gama de ferramentas para automação e
            pipelines CI/CD. Combinamos experiência e inovação para entregar soluções robustas e escaláveis
            que atendem às necessidades do seu negócio.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Atendem empresas com sistemas legados?</AccordionTrigger>
          <AccordionContent>
            Sim, atendemos empresas que possuem sistemas legados, desde que a modernização, integração
            ou manutenção desses sistemas esteja alinhada com as ferramentas e tecnologias da nossa especialidade.
            Trabalhamos com stacks como JavaScript/TypeScript e C# com .NET, além de soluções voltadas para bancos de
            dados relacionais e não-relacionais, infraestrutura como código (IaC) e automação de processos.
            Nossa abordagem consiste em analisar a arquitetura existente, identificar oportunidades de melhoria e propor
            soluções que otimizem o desempenho e a escalabilidade dos sistemas, garantindo que estejam preparados para os
            desafios tecnológicos atuais e futuros.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Como funcionam os prazos e entregas?</AccordionTrigger>
          <AccordionContent>
            Na coderaw, prezamos por uma gestão eficiente e transparente de prazos e entregas, alinhando nossas práticas às
            principais metodologias do mercado, como Scrum, Kanban e Metodologias Ágeis. Isso nos permite adaptar cada projeto
            às necessidades específicas do cliente e garantir uma entrega incremental, com ciclos curtos de desenvolvimento
            e revisões constantes.
            Desde o início, trabalhamos junto ao cliente para definir expectativas claras e prioridades. Estabelecemos um cronograma
            detalhado e flexível, com pontos de controle regulares (sprints ou marcos), onde compartilhamos avanços e coletamos feedback.
            Essa abordagem iterativa garante:
            Adaptação e melhoria contínua: Ajustamos o projeto conforme as necessidades evoluem ou novos insights surgem.
            Transparência total: Mantemos o cliente sempre informado sobre o progresso e qualquer eventual necessidade de ajustes nos prazos.
            Compromisso com a qualidade: As entregas são realizadas em etapas funcionais, priorizando funcionalidades críticas e assegurando
            testes rigorosos antes da implantação.
            Nosso objetivo é não apenas cumprir os prazos estabelecidos, mas também superar expectativas, entregando soluções que agreguem
            valor real ao negócio em cada etapa do projeto.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Por que escolher a coderaw.io?</AccordionTrigger>
          <AccordionContent>
            Na coderaw, não somos apenas desenvolvedores. Somos parceiros estratégicos
            que combinam inovação tecnológica com uma abordagem consultiva para entregar
            resultados concretos. Seja para criar um sistema do zero, evoluir soluções
            existentes ou integrar tecnologias prontas ao seu negócio, estamos aqui
            para ajudar você a alcançar o próximo nível.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
import DotPattern from "@/components/magic-ui/dot-pattern";

import { cn } from "@/lib/utils";
import { ContactForm } from "./_components/form";

export default function ContactPage() {
  return (
    <div className="w-full py-6">
      <div data-aos="fade-left" className="relative">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          )}
        />

        <div className="relative z-10 flex flex-col space-y-8 px-6 sm:px-0">
          <h1 className="text-3xl md:text-6xl font-bold">
            Fale conosco
          </h1>

          <p className="max-w-2xl w-full text-base text-muted-foreground sm:text-lg">
            Entre em contato com nossa equipe comercial para obter mais
            informações sobre os serviços prestados.
          </p>
        </div>
      </div>
      
      <ContactForm />
    </div>
  )
}
"use client"

import { AnimatedBeamMultiple } from "@/components/magic-ui/animated-beam-multiple";
import { Button } from "@/components/ui/button";
import { LoaderIcon } from "lucide-react";
import { useState } from "react";

export function AnimatedBeamSection() {
  const [loading, setLoading] = useState(false);

  const handleSendEmail = async () => {
    setLoading(true);
    try {
      await fetch("/api/send-email", { method: "POST" });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div data-aos="fade-right" className="grid grid-cols-1 items-center gap-4 py-6 md:grid-cols-2 md:py-16">
      <div className="hidden md:block">
        <AnimatedBeamMultiple />
      </div>

      <div className="flex flex-col space-y-3 px-6">
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
          <Button 
            type="button" 
            className="w-full sm:max-w-md disabled:opacity-75" 
            onClick={handleSendEmail}
            disabled={loading}
          >
            {loading ? <LoaderIcon className="size-4 animate-spin" /> : "Entrar em contato"}
          </Button>
        </div>
      </div>
    </div>
  )
}

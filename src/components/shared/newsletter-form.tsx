"use client"

import axios from "axios";
import Link from "next/link";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Icon } from "./icons/icon";

const formSchema = z.object({
  email: z.string().email("Informe um endereço de e-mail válido."),
})

type FormData = z.infer<typeof formSchema>;

export function NewsLetterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  })

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post("/api/send-newsletter-email", {
        email: data.email,
      });

      toast.success("INSCRIÇÃO REALIZADA COM SUCESSO!", {
        description: "Te enviamos um e-mail passando mais orientações."
      })

      form.reset();
    } catch {
      toast.error("ERRO AO PROCESSAR REQUISIÇÃO", {
        description: "Verifique os dados digitados e tente novamente."
      })
    }
  }

  return (
    <Form {...form}>
      <div>
        <form 
          className="w-full"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Link
            href="/"
            className="hidden sm:block"
            aria-label="Coderaw logo"
          >
            <Icon className="w-1/5 mb-2" />
          </Link>

          <div className="flex flex-col space-y-3">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Conteúdos de tecnologia
                  </FormLabel>
                  <FormControl>
                    <Input maxLength={60} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? (
                <div className="flex items-center gap-2">
                  Registrando
                  <LoaderIcon className="size-4 animate-spin" /> 
                </div>
              ): "Inscreva-se" }
            </Button>
          </div>
        </form>
      </div>
    </Form>
  )
}
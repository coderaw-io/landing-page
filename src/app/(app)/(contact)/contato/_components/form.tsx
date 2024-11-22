"use client"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  firstName: z.string().min(
    2,
    "O nome deve possuir no minímo 2 caracteres."
  ).max(
    50,
    "O nome deve possuir no máximo 50 caracteres."
  ),
  lastName: z.string().min(
    2,
    "O nome deve possuir no minímo 2 caracteres."
  ).max(
    50,
    "O nome deve possuir no máximo 50 caracteres."
  ),
  email: z.string().email("Informe um endereço de e-mail válido."),
  phoneNumber: z.string().min(
    11,
    "O telefone deve possuir 11 digítos."
  ),
  message: z.string().min(
    10,
    "O campo mensagem possui uma descrição muito curta."
  ).max(
    500,
    "O campo mensagem deve possuir no máximo 500 caracteres."
  ),
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  })

  const onSubmit = form.handleSubmit(async data => {
    console.log(data);
  });

  return (
    <Form {...form}>
      <form
        data-aos="fade-right"
        className="max-w-5xl w-full py-12 md:py-24"
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sobrenome</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="py-6">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensagem</FormLabel>
                <FormControl>
                  <Textarea rows={8} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end items-center py-3">
          <Button
            type="submit"
            className="disabled:cursor-not-allowed"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ?
              <LoaderIcon className="size-4 animate-spin" />
              : "Entrar em contato"}
          </Button>
        </div>
      </form>
    </Form>
  )
}
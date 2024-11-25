"use client"

import axios from "axios";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

import { maskPhoneNumber } from "@/app/utils/mask-phone-number";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon } from "lucide-react";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("Informe um endereço de e-mail válido."),
  firstName: z.string().min(
    2,
    "O nome deve possuir no minímo 2 caracteres."
  ).max(
    60,
    "O nome deve possuir no máximo 60 caracteres."
  ),
  lastName: z.string().min(
    2,
    "O nome deve possuir no minímo 2 caracteres."
  ).max(
    60,
    "O nome deve possuir no máximo 60 caracteres."
  ),
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
  )
})

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      message: "",
    },
  })

  const phoneNumber = form.watch('phoneNumber');

  useEffect(() => {
    form.setValue('phoneNumber', maskPhoneNumber(phoneNumber));
  }, [phoneNumber, form.setValue]);

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post("/api/create-contact", {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber,
        message: data.message,
      });

      toast.success("SUCESSO! RECEMOS O SEU CONTATO", {
        description: "Te enviamos um e-mail passando as orientações."
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
      <form
        data-aos="fade-right"
        className="max-w-5xl w-full px-6 py-12 sm:px-0 md:py-24"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <FormField
            name="firstName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input maxLength={60} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="lastName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sobrenome</FormLabel>
                <FormControl>
                  <Input maxLength={60} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input maxLength={60} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Controller
            name="phoneNumber"
            control={form.control}
            render={({ field: phoneField }) => (
              <FormField
                name="phoneNumber"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefone</FormLabel>
                    <FormControl>
                      <Input {...phoneField} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          />
        </div>

        <div className="py-6">
          <FormField
            name="message"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensagem</FormLabel>
                <FormControl>
                  <Textarea rows={8} maxLength={500} {...field} />
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
            {form.formState.isSubmitting ? (
              <div className="flex items-center gap-3">
                Enviando
                <LoaderIcon className="size-4 animate-spin" />
              </div>
            )
              : "Entrar em contato"}
          </Button>
        </div>
      </form>
    </Form>
  )
}
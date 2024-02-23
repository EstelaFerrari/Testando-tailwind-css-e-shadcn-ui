"use client"

import { Button } from "@/components/ui/button";
import MenuNovo from "@/components/fslab/MenuNovo/index";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const FormSchema = z.object({
  username: z.string()
    .min(2, {
      message: "O nome precisa ter no mínimo 2 caracteres.",
    })
    .max(60, {
      message: "Máximo de 60 caracteres.",
    }),

  cpf: z.string().min(11, {
    message: "O CPF é inválido.",
  }),

  email: z.string()
    .email({
      message: "Por favor, insira um endereço de e-mail válido."
    })
    .min(10, {
      message: "Mínimo de 10 caracteres.",
    })
    .max(50, {
      message: "Máximo de 50 caracteres.",
    }),

  telefone1: z.string()
    .min(10, {
      message: "MÍnimo de 10 caracteres.",
    })
    .max(11, {
      message: "Máximo de 11 caracteres.",
    }),

  telefone2: z.string()
    .min(10, {
      message: "MÍnimo de 10 caracteres.",
    })
    .max(11, {
      message: "Máximo de 11 caracteres.",
    }),

  dateOfBirth: z.date(),

});

export default function Usuario() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      cpf: "",
      email: "",
      dateOfBirth: new Date()//.toISOString().substring(0, 10), // Definindo a data de hoje como valor padrão
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Você enviou os seguintes valores:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <>
      <div className="flex">
        <div>
          <MenuNovo />
        </div>
        <div className="w-full m-4">
          <div className="text-2xl font-semibold">
            <h1>Cadastrar motorista</h1>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex space-x-16">
                <div className="w-5/6 space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome</FormLabel>
                          <FormControl>
                            <Input placeholder="Nome" className="rounded" {...field} />
                          </FormControl>
                          <FormMessage className="text-red-600" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="cpf"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CPF</FormLabel>
                          <FormControl>
                            <Input placeholder="CPF" className="rounded" {...field} />
                          </FormControl>
                          <FormMessage className="text-red-600" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Email" className="rounded" {...field} />
                          </FormControl>
                          <FormMessage className="text-red-600" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Data de Nascimento</FormLabel>
                          <FormControl>
                            <Input type="date" className="rounded" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <FormField
                      control={form.control}
                      name="telefone1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone 1</FormLabel>
                          <FormControl>
                            <Input placeholder="telefone" className="rounded" {...field} />
                          </FormControl>
                          <FormMessage className="text-red-600" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="telefone2"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone 2</FormLabel>
                          <FormControl>
                            <Input placeholder="telefone" className="rounded" {...field} />
                          </FormControl>
                          <FormMessage className="text-red-600" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Data de Nascimento</FormLabel>
                          <FormControl>
                            <Input type="date" className="rounded" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="space-y-2 grid justify-items-center ...">
                  <Avatar className="size-48 border border-black">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Button className="bg-black text-white rounded">Adicionar Imagem</Button>
                </div>
              </div>
              <Button className="bg-black text-white rounded" type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}

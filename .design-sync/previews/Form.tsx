import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "mainline-astro-template";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type Inscricao = { nome: string; email: string };

export const Default = () => {
  const form = useForm<Inscricao>({ defaultValues: { nome: "", email: "" } });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="flex flex-col gap-4" style={{ maxWidth: 380 }}>
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Como devemos chamar você" {...field} />
              </FormControl>
              <FormDescription>Aparece no início de cada newsletter.</FormDescription>
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
                <Input type="email" placeholder="voce@exemplo.com.br" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Assinar</Button>
      </form>
    </Form>
  );
};

export const WithErrors = () => {
  const form = useForm<Inscricao>({ defaultValues: { nome: "Ana Ribeiro", email: "ana.ribeiro@" } });
  useEffect(() => {
    form.setError("email", { type: "manual", message: "Informe um e-mail completo." });
  }, [form]);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="flex flex-col gap-4" style={{ maxWidth: 380 }}>
        <FormField
          control={form.control}
          name="nome"
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Assinar</Button>
      </form>
    </Form>
  );
};

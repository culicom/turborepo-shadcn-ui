"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button, Input, Textarea } from "ui";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form-builder";
import { H2 } from "ui/typography/h2";
import { H4 } from "ui/typography/h4";
import { P } from "ui/typography/p";

const profileFormSchema = z.object({
  username: z.string(),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  message: z.string(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const defaultValues: Partial<ProfileFormValues> = {};

export function ProfileForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onSubmit",
  });

  function onSubmit(data: ProfileFormValues) {
    console.log("test");
  }

  return (
    <div className="max-w-3xl my-16 md:my-32 md:mx-auto ">
      <article className="md:text-center">
        <H4>contact</H4>
        <H2 className="mt-0 border-none">Lets get in touch 👋</H2>
        <P className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </P>
      </article>

      <div className="mx-auto max-w-4xl gap-2 rounded-lg py-12 md:my-12 md:p-8 md:shadow-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="jouw@email.nl"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Jouw bericht" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button variant="action" type="submit">
              Verstuur
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

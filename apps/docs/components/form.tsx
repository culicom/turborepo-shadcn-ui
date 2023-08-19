"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  Input,
  Textarea,
} from "ui";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form-builder";
import { H2 } from "ui/typography/h2";
import { H4 } from "ui/typography/h4";
import { P } from "ui/typography/p";
import { useState } from "react";
import { AlertCircle, Terminal } from "lucide-react";
import { Renderer } from "./renderer";

const profileFormSchema = z
  .object({
    name: z.string(),
    company: z.string(),
    email: z
      .string({
        required_error: "Please select an email to display.", // translate
      })
      .email(),
    website: z.string().url(),
    message: z.string(),
  })
  .partial({ website: true, company: true, name: true });

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const defaultValues: Partial<ProfileFormValues> = {};

export function ProfileForm() {
  const [confirmationMessage, setConfirmationMessage] = useState(null);
  const [errors, setErrors] = useState(null);
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onSubmit",
  });

  async function onSubmit(data: ProfileFormValues) {
    const res = await fetch(
      `https://strapi.culicom.amsterdam/api/form-submissions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          form: "63e17ec42eed1dc5543e2c23",
          submissionData: [
            { field: "email", value: data?.email },
            { field: "message", value: data?.message },
          ],
        }),
      }
    );
    const submission = await res.json();

    if (res.ok) {
      setConfirmationMessage({
        confirmationTitle: submission?.message,
        confirmationMessage: submission?.doc?.form?.confirmationMessage,
      });

      return true;
    }

    setErrors(submission?.errors);
    return false;
  }

  return (
    <div className="max-w-3xl my-16 md:my-36 md:mx-auto ">
      <article className="md:text-center">
        <H4>contact</H4>
        <H2 className="text-blue-950 dark:text-white mt-0 border-none">
          Lets get in touch 👋
        </H2>
        <P className="text-lg text-muted-foreground">
          Waar kan Kobalt je mee van dienst zijn? Vul het contactformulier in en
          we komen zo snel mogelijk bij je terug. Tot snel!
        </P>
      </article>

      <div className="mx-auto max-w-4xl gap-2 rounded-lg py-12 md:my-12 md:p-8 md:shadow-lg">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mb-4"
          >
            <div className="flex flex-col md:flex-row w-full space-x-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="md:w-1/2">
                    <FormLabel className="text-black dark:text-white">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>

                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem className="md:w-1/2">
                    <FormLabel className="text-black dark:text-white">
                      Bedrijf
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Jouw bedrijf hier" {...field} />
                    </FormControl>

                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black dark:text-white">
                    Huidige website
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="huidigewebsite.nl" {...field} />
                  </FormControl>

                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black dark:text-white">
                    Email *
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="jouw@email.nl"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black dark:text-white">
                    Message *
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Jouw bericht" {...field} />
                  </FormControl>

                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <Button
              disabled={confirmationMessage}
              variant="action"
              type="submit"
            >
              Verstuur
            </Button>
          </form>
        </Form>

        {errors ? (
          <>
            {errors.map((error) => (
              <Alert key={error?.name} variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>{error?.name}</AlertTitle>
                <AlertDescription>{error?.message}</AlertDescription>
              </Alert>
            ))}
          </>
        ) : null}

        {confirmationMessage && !errors ? (
          <Alert className="text-green-700 border-green-500">
            <AlertTitle>{confirmationMessage?.confirmationTitle}</AlertTitle>
            <AlertDescription>
              <Renderer content={confirmationMessage?.confirmationMessage} />
            </AlertDescription>
          </Alert>
        ) : null}
      </div>
    </div>
  );
}

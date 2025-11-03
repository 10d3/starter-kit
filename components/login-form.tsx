"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"
import { FaGithub, FaGoogle } from "react-icons/fa6"
import { useState } from "react"
import { signIn } from "@/lib/auth-client"

const loginSchema = z.object({
  email: z.email().min(1)
})

type loginSchemaType = z.infer<typeof loginSchema>

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const [isGLoading, setIsGLoading] = useState<boolean>(false)
  const [isALoading, setIsALoading] = useState<boolean>(false)

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: ""
    }
  })

  async function handleSubmit(data: loginSchemaType) {
    console.log(data)
  }

  const signInG = async () => {
    setIsGLoading(true)
    await signIn.social({
      provider: "google",
      callbackURL: "/"
    });
    setIsGLoading(false)
  };

  const signInA = async () => {
    setIsALoading(true)
    await signIn.social({
      provider: "github",
      callbackURL: "/"
    });
    setIsALoading(false)
  };



  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            Login with your Github or Google account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <FieldGroup>
                <Field className="flex flex-row items-center gap-2 justify-center">
                  <Button disabled={isALoading} onClick={signInA} className="max-w-fit border-none p-2" variant="outline" type="button">
                    <FaGithub className={`${isALoading ? "animate-spin" : ""} size-8`} />
                  </Button>
                  <Button disabled={isGLoading} className="max-w-fit border-none p-2" onClick={signInG} variant="outline">
                    <FaGoogle className={`${isGLoading ? "animate-spin" : ""} size-8`} />
                  </Button>
                </Field>
                <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                  Or continue with
                </FieldSeparator>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="m@example.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </Field>
                <Field>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </Field>
                <Field>
                  <Button type="submit">Login</Button>
                  <FieldDescription className="text-center">
                    Don&apos;t have an account? <a href="#">Sign up</a>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </Form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}

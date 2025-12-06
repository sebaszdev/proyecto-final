"use client";

import Form from "next/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  return (
    <Card className="w-full max-w-md bg-background border-none">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Inicia sesión</CardTitle>
        <CardDescription>
          Escribe tu usuario y contraseña para iniciar sesión
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form action="/" id="login-form">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="username">Usuario</FieldLabel>
              <Input id="username" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Contraseña</FieldLabel>
              <Input id="password" minLength={8} type="password" required />
              <FieldDescription>
                La contraseña debe tener minimo 8 caracteres
              </FieldDescription>
            </Field>
            <FieldSeparator />
          </FieldGroup>
        </Form>
      </CardContent>
      <CardFooter>
        <Field>
          <Button
            type="submit"
            form="login-form"
            className="cursor-pointer active:scale-95"
          >
            Iniciar sesión
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}

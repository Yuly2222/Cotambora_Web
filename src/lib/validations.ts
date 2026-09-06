import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres.")
    .max(100, "El nombre es demasiado largo."),
  email: z
    .string()
    .trim()
    .email("Ingresa un correo electrónico válido.")
    .max(200),
  message: z
    .string()
    .trim()
    .min(10, "El mensaje debe tener al menos 10 caracteres.")
    .max(2000, "El mensaje es demasiado largo."),
  // Campo honeypot: invisible para personas, atractivo para bots. Si llega
  // con contenido, se descarta la solicitud silenciosamente.
  company: z.string().max(0, "Solicitud inválida.").optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

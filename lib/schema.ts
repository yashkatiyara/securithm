import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(200),
  reason: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(10, "Please add a little more detail").max(4000),
  // Honeypot: must be empty. Bots tend to fill every field.
  company: z.string().max(0).optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;

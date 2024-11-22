import { z } from "zod"

const envSchema = z.object({
  NEXT_PUBLIC_RESEND_API_KEY: z.string(),
})

export const env = envSchema.parse({
  NEXT_PUBLIC_RESEND_API_KEY: process.env.NEXT_PUBLIC_RESEND_API_KEY,
})
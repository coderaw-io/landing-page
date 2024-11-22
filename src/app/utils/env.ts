import { z } from "zod"

const envSchema = z.object({
  NEXT_PUBLIC_RESEND_API_KEY: z.string(),
  NEXT_PUBLIC_RESEND_AUDIENCE_ID: z.string(),
})

export const env = envSchema.parse({
  NEXT_PUBLIC_RESEND_API_KEY: process.env.NEXT_PUBLIC_RESEND_API_KEY,
  NEXT_PUBLIC_RESEND_AUDIENCE_ID: process.env.NEXT_PUBLIC_RESEND_AUDIENCE_ID,
})
import { env } from "@/app/utils/env";
import { Resend } from "resend";

export const resendApiKey = new Resend(env.NEXT_PUBLIC_RESEND_API_KEY);

export const resendAudienceId = env.NEXT_PUBLIC_RESEND_AUDIENCE_ID;
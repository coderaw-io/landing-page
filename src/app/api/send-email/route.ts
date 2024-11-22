import ContactTemplateEmail from '@/components/emails/contact-template';

import { env } from '@/app/utils/env';

import { Resend } from 'resend';

const resend = new Resend(env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Coderaw <comercial@coderaw.io>',
      to: ['mattheuscontato17@gmail.com'],
      subject: 'Contato',
      react: ContactTemplateEmail({ firstName: "Matheus Roberto" }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

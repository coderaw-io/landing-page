import ContactTemplateEmail from '@/components/emails/contact-template';

import { EmailRequest } from '@/@types/email';
import { resendApiKey } from '@/lib/resend';

export async function POST({
  firstName,
  lastName
}: EmailRequest) {
  try {
    const { data, error } = await resendApiKey.emails.send({
      from: 'Coderaw <comercial@coderaw.io>',
      to: ['mattheuscontato17@gmail.com'],
      subject: 'Contato',
      react: ContactTemplateEmail({ 
        firstName: `${firstName}`,
        lastName: `${lastName}`
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

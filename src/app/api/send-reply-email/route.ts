import ContactTemplateEmail from '@/components/emails/contact-template';

import { resendApiKey } from '@/lib/resend';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, lastName } = await request.json();

    const { data, error } = await resendApiKey.emails.send({
      from: 'Coderaw <comercial@coderaw.io>',
      to: [email],
      subject: 'Contato',
      react: ContactTemplateEmail({ 
        firstName,
        lastName
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

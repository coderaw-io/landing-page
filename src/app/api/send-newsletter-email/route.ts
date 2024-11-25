import NewsLetterTemplate from '@/components/emails/newsletter-template';

import { resendApiKey } from '@/lib/resend';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    const { data, error } = await resendApiKey.emails.send({
      from: 'Coderaw <contato@coderaw.io>',
      to: [email],
      subject: 'Conteúdos de tecnologia',
      react: NewsLetterTemplate(),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

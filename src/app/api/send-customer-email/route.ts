import { resendApiKey } from '@/lib/resend';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const {
      email,
      firstName,
      lastName,
      phoneNumber,
      message
    } = await request.json();

    const { data, error } = await resendApiKey.emails.send({
      from: email,
      to: ["mattheuscontato17@gmail.com"],
      subject: 'Interesse nos serviços prestados',
      html: `
        <strong>${firstName} ${lastName} - Contato ${phoneNumber}</strong> <br /> 
        <p>${message}</p>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

import CustomerTemplate from "@/components/emails/customer-template";

import { resendApiKey, resendAudienceId } from "@/lib/resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { 
      email, 
      firstName, 
      lastName,
      phoneNumber,
      message
    } = await request.json();

    const { 
      data: emailData, 
      error: errorEmailData 
    } = await resendApiKey.emails.send({
      from: "comercial@coderaw.io",
      to: ["felipe-mattioli98@hotmail.com"],
      subject: 'Interesse pelos serviços prestados',
      react: CustomerTemplate({
        firstName,
        lastName,
        email,
        phoneNumber,
        message
      })
    });

    if (errorEmailData) {
      return Response.json({ errorEmailData }, { status: 500 });
    }

    const { 
      data: contactData, 
      error: contactError 
    } = await resendApiKey.contacts.create({
      email,
      firstName,
      lastName,
      unsubscribed: false,
      audienceId: resendAudienceId,
    });

    if (contactError) {
      return NextResponse.json(
        { error: contactError.message }, 
        { status: 400 }
      );
    }

    return NextResponse.json({ 
      email: emailData,
      contact: contactData, 
    });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
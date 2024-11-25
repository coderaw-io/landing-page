import axios from "axios";

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

    const sendEmailRequest = await axios.post(
      new URL('/api/send-customer-email', request.url).toString(),
      { email, firstName, lastName, phoneNumber, message },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const emailData = sendEmailRequest.data;
    
    const sendReplyEmailRequest = await axios.post(
      new URL('/api/send-reply-email', request.url).toString(),
      { email, firstName, lastName },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const replyEmailData = sendReplyEmailRequest.data;

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
      replyEmail: replyEmailData,
      contact: contactData, 
    });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    
    const data = await resend.emails.send({
      from: 'Perode Contact Form <onboarding@resend.dev>', 
      to: ['mwaceberfrancis@gmail.com'], 
      subject: `New AI Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: `Failed to send email ` }, { status: 500 });
  }
}
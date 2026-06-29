import { Resend } from 'resend';

const resend = new Resend(ProcessingInstruction.env.RESEND_API_KEY);

export async function POST(req) {
    const body = await req.json();
    const { name, email, phone, message } = body;

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'mbabiker13@gmail.com',
        subject: `New Wuote Request from ${name}`,
        html: `<h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return Response.json({ success: true });
}
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ message: 'Missing required fields' }), {
        status: 400,
      });
    }

    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    // Send to site owner
    await resend.emails.send({
      from: 'Arshdeep  <onboarding@resend.dev>', // Must be domain-verified
      to: ['imarshdeep99@gmail.com'],
      subject: `New Contact: ${subject}`,
      html: htmlContent,
    });

    // // Send confirmation to user
    // await resend.emails.send({
    //   from: 'Your Name <onboarding@resend.dev>',
    //   to: [email],
    //   subject: 'We received your message!',
    //   html: `
    //     <p>Hi ${name},</p>
    //     <p>Thanks for reaching out. I’ll get back to you shortly.</p>
    //     <p><strong>Your Message:</strong></p>
    //     <blockquote>${message}</blockquote>
    //     <p>Regards,<br/>Arshdeep Singh</p>
    //   `,
    // });

    return new Response(JSON.stringify({ message: 'Emails sent successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Failed to send email' }), {
      status: 500,
    });
  }
}

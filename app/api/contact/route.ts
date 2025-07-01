import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Ensure dynamic execution
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: process.env.EMAIL || 'your@email.com',
      subject: `New Contact: ${subject}`,
    html: `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px; background-color: #f9f9f9; max-width: 600px; margin: auto;">
    <h2 style="color: #6c63ff; border-bottom: 1px solid #ddd; padding-bottom: 10px;">📩 New Contact Form Submission</h2>
    
    <p style="font-size: 16px; color: #333;"><strong>👤 Name:</strong> ${name}</p>
    <p style="font-size: 16px; color: #333;"><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #6c63ff;">${email}</a></p>
    <p style="font-size: 16px; color: #333;"><strong>📝 Subject:</strong> ${subject}</p>
    
    <div style="margin-top: 20px; padding: 15px; background-color: #fff; border: 1px solid #ddd; border-radius: 8px;">
      <p style="font-size: 15px; line-height: 1.6; color: #444;"><strong>💬 Message:</strong></p>
      <p style="white-space: pre-line; font-size: 15px; color: #555;">${message}</p>
    </div>

    <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />
    
    <footer style="font-size: 13px; color: #888; text-align: center;">
      Sent via <strong>Contact Form</strong> • Your Website<br />
      Please reply to <a href="mailto:${email}" style="color: #6c63ff;">${email}</a> to get in touch.
    </footer>
  </div>
`,

    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully!', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, feedback } = await request.json();

        const { data, error } = await resend.emails.send({
            from: 'Feedback Form <onboarding@resend.dev>',
            to: process.env.EMAIL || 'your@email.com',
            subject: `New Feedback from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Feedback Submission</h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 16px;">
            <p><strong style="color: #4b5563;">Name:</strong> ${name}</p>
            <p><strong style="color: #4b5563;">Email:</strong> ${email}</p>
            <p><strong style="color: #4b5563;">Feedback:</strong></p>
            <p style="background-color: white; padding: 12px; border-radius: 4px; margin-top: 8px;">
              ${feedback}
            </p>
          </div>
          <p style="margin-top: 24px; color: #6b7280; font-size: 14px;">
            This feedback was submitted through your website's contact form.
          </p>
        </div>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { message: 'Failed to send feedback' },
                { status: 500 }
            );
        }

        return NextResponse.json({ message: 'Feedback sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
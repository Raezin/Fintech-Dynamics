// app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter with company email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Professional HTML email template with company branding
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission - Fintech Dynamics</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f9;">
          <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);">
            
            <!-- Header with Company Branding -->
            <div style="background: linear-gradient(135deg, #50a7c3 0%, #2c6f8a 100%); padding: 32px 24px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">Fintech Dynamics</h1>
              <p style="margin: 8px 0 0; color: rgba(255, 255, 255, 0.9); font-size: 16px;">New Contact Form Submission</p>
            </div>
            
            <!-- Content Section -->
            <div style="padding: 32px 24px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eef2f6; width: 120px; font-weight: 600; color: #1e293b;">Full Name</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eef2f6; color: #475569;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eef2f6; font-weight: 600; color: #1e293b;">Email Address</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eef2f6; color: #475569;">
                    <a href="mailto:${email}" style="color: #50a7c3; text-decoration: none; font-weight: 500;">${email}</a>
                  </td>
                </tr>
                ${phone ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eef2f6; font-weight: 600; color: #1e293b;">Phone Number</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eef2f6; color: #475569;">
                    <a href="tel:${phone}" style="color: #475569; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eef2f6; font-weight: 600; color: #1e293b;">Service Interested</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eef2f6;">
                    <span style="display: inline-block; background: rgba(80, 167, 195, 0.1); color: #50a7c3; padding: 4px 12px; border-radius: 20px; font-size: 14px; font-weight: 500;">${service}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: 600; color: #1e293b; vertical-align: top;">Message</td>
                  <td style="padding: 12px 0; color: #475569;">
                    <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border-left: 3px solid #50a7c3; margin-top: 4px;">
                      ${message.replace(/\n/g, '<br>')}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            
            <!-- Footer -->
            <div style="background: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #eef2f6;">
              <p style="margin: 0 0 12px; color: #64748b; font-size: 14px;">
                This inquiry was sent from the Fintech Dynamics website contact form.
              </p>
              <div style="margin-top: 16px;">
                <a href="https://fintechdynamics.co" style="color: #50a7c3; text-decoration: none; font-size: 14px; font-weight: 500; margin: 0 8px;">Website</a>
                <span style="color: #cbd5e1;">•</span>
                <a href="mailto:info@fintechdynamics.co" style="color: #50a7c3; text-decoration: none; font-size: 14px; font-weight: 500; margin: 0 8px;">Email</a>
                <span style="color: #cbd5e1;">•</span>
                <a href="https://linkedin.com/company/fintech-dynamics" style="color: #50a7c3; text-decoration: none; font-size: 14px; font-weight: 500; margin: 0 8px;">LinkedIn</a>
              </div>
              <p style="margin: 20px 0 0; color: #94a3b8; font-size: 12px;">
                © ${new Date().getFullYear()} Fintech Dynamics. All rights reserved.<br>
                Office #409, Empire Plaza, Gulberg Greens, Islamabad
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Plain text version for email clients that don't support HTML
    const textTemplate = `
      New Contact Form Submission - Fintech Dynamics
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      Service: ${service}
      
      Message:
      ${message}
      
      ---
      This inquiry was sent from the Fintech Dynamics website contact form.
      © ${new Date().getFullYear()} Fintech Dynamics
    `;

    // Send email to company inbox
    await transporter.sendMail({
      from: `"Fintech Dynamics Website" <${process.env.SMTP_USER}>`,
      to: 'info@fintechdynamics.co', // Company email
      replyTo: email, // Set reply-to as the person who filled the form
      subject: `New Contact: ${service} - ${name}`,
      text: textTemplate,
      html: htmlTemplate,
    });

    // Optional: Send auto-reply to the person who filled the form
    await transporter.sendMail({
      from: `"Fintech Dynamics" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for contacting Fintech Dynamics',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #50a7c3;">Thank You for Reaching Out!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for contacting Fintech Dynamics. We have received your inquiry regarding <strong>${service}</strong> and will get back to you within 24 hours.</p>
          <p>Here's a copy of your message:</p>
          <div style="background: #f5f5f5; padding: 15px; border-left: 3px solid #50a7c3; margin: 20px 0;">
            ${message}
          </div>
          <p>If you have any immediate questions, feel free to call us at +92 348 7988543.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">Fintech Dynamics | Office #409, Empire Plaza, Gulberg Greens, Islamabad</p>
        </div>
      `,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for contacting us. We will respond within 24 hours.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Log error for monitoring (you can integrate with error tracking service)
    console.error({
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
    });

    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again or email us directly at info@fintechdynamics.co' 
      },
      { status: 500 }
    );
  }
}
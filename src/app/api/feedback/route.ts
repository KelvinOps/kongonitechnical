import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface FeedbackData {
  type: 'complaint' | 'compliment' | 'suggestion';
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    console.log('Receiving feedback submission...');
    
    const data: FeedbackData = await request.json();
    
    console.log('Parsed feedback data:', data);

    // Validate required fields
    if (!data.email || !data.name || !data.subject || !data.message) {
      console.error('Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields: Name, Email, Subject, and Message are required' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Email configuration missing');
      return NextResponse.json(
        { error: 'Email configuration is missing. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Create email transporter (same as applications)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify transporter
    console.log('Verifying email transporter...');
    await transporter.verify();
    console.log('Email transporter verified');

    // Get feedback type label
    const feedbackTypeLabels = {
      complaint: 'Complaint',
      compliment: 'Compliment',
      suggestion: 'Suggestion'
    };

    // Send email to info@kongonitechnical.ac.ke
    const feedbackMailOptions: nodemailer.SendMailOptions = {
      from: `"Kongoni TVC Feedback System" <${process.env.GMAIL_USER}>`,
      to: 'info@kongonitechnical.ac.ke',
      subject: `Feedback: ${feedbackTypeLabels[data.type]} - ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #2563eb; color: white; padding: 20px; text-align: center;">
            <h1>New Feedback Received</h1>
            <p style="margin: 0; font-size: 18px; background-color: ${data.type === 'complaint' ? '#ef4444' : data.type === 'compliment' ? '#10b981' : '#f59e0b'}; 
                       padding: 5px 10px; border-radius: 4px; display: inline-block;">
              ${feedbackTypeLabels[data.type].toUpperCase()}
            </p>
          </div>
          
          <div style="padding: 20px; background-color: #f9fafb;">
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #2563eb; margin-top: 0;">Feedback Details</h3>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 30%;">From:</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
                    <a href="mailto:${data.email}" style="color: #2563eb;">${data.email}</a>
                  </td>
                </tr>
                ${data.phone ? `
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Phone:</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
                    <a href="tel:${data.phone}" style="color: #2563eb;">${data.phone}</a>
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Subject:</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${data.subject}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message:</td>
                  <td style="padding: 8px 0;">
                    <div style="white-space: pre-wrap; background-color: #f8fafc; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">
                      ${data.message}
                    </div>
                  </td>
                </tr>
              </table>
            </div>

            <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
              <h4 style="margin-top: 0; color: #92400e;">Action Required</h4>
              <p style="margin: 0; color: #92400e;">
                Please respond to this feedback within 24-48 hours. 
                ${data.type === 'complaint' ? 'This complaint requires prompt attention.' : 
                  data.type === 'compliment' ? 'Consider acknowledging this positive feedback.' : 
                  'Evaluate this suggestion for potential implementation.'}
              </p>
            </div>
          </div>
        </div>
      `,
    };

    console.log('Sending feedback email to info@kongonitechnical.ac.ke...');
    await transporter.sendMail(feedbackMailOptions);
    console.log('Feedback email sent successfully');

    // Send confirmation email to the person who submitted feedback
    const confirmationMailOptions: nodemailer.SendMailOptions = {
      from: `"Kongoni Technical & Vocational College" <${process.env.GMAIL_USER}>`,
      to: data.email,
      subject: 'Feedback Received - Kongoni Technical & Vocational College',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #2563eb; color: white; padding: 20px; text-align: center;">
            <h1>Thank You for Your Feedback</h1>
          </div>
          <div style="padding: 20px; background-color: #f9fafb;">
            <p>Dear ${data.name},</p>
            <p>Thank you for taking the time to share your ${data.type} with us. We appreciate your input and value your perspective.</p>
            
            <div style="background-color: white; padding: 15px; border-left: 4px solid #2563eb; margin: 20px 0;">
              <h3 style="color: #2563eb; margin-top: 0;">Your Feedback Summary:</h3>
              <p><strong>Type:</strong> ${feedbackTypeLabels[data.type]}</p>
              <p><strong>Subject:</strong> ${data.subject}</p>
              <p><strong>Submitted:</strong> ${new Date().toLocaleDateString()}</p>
            </div>

            <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h4 style="color: #0369a1; margin-top: 0;">What Happens Next?</h4>
              <ul style="color: #0369a1;">
                <li>We have received your feedback and it has been forwarded to the relevant department</li>
                <li>Our team will review your ${data.type} carefully</li>
                <li>We strive to respond to all feedback within 24-48 hours during working days</li>
                <li>You may be contacted for additional information if needed</li>
              </ul>
            </div>

            <p><strong>Contact Information:</strong></p>
            <p>
              📧 Email: info@kongonitechnical.ac.ke<br>
              📞 Phone: +254 788 070 303<br>
              📍 Address: P.O. Box 45 - 30205, Matunda, Kenya
            </p>

            <p>Best regards,<br>
            <strong>Feedback & Communications Team</strong><br>
            Kongoni Technical & Vocational College</p>
          </div>
        </div>
      `,
    };

    console.log('Sending confirmation email to submitter...');
    await transporter.sendMail(confirmationMailOptions);
    console.log('Confirmation email sent successfully');

    return NextResponse.json(
      { 
        message: 'Feedback submitted successfully. Thank you for your input!',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing feedback:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json(
      { 
        error: 'Failed to submit feedback',
        details: errorMessage 
      },
      { status: 500 }
    );
  }
}
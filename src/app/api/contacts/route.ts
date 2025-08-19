import { NextRequest, NextResponse } from "next/server";
import { insertContactSchema } from "@shared/schema";
import type { InsertContact } from "@shared/schema";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // ✅ Validate the request body using Zod schema
    const validatedData: InsertContact = insertContactSchema.parse(body);
    const { name, email, subject, message } = validatedData;

    // ✅ Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "trimkodak@gmail.com",
        pass: process.env.GMAIL_APP_PASSWORD, // 🔐 Store securely in .env.local
      },
    });

    // ✅ Send email to admin
    await transporter.sendMail({
      from: `"KTVC Contact Form" <${email}>`,
      to: "trimkodak@gmail.com",
      subject: `New Contact Message: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted and email sent successfully",
        data: validatedData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        {
          success: false,
          message: "Validation error",
          errors: error,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    // ✅ Get API key at runtime
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY missing");
      return NextResponse.json(
        { success: false, error: "Server config error" },
        { status: 500 }
      );
    }

    // ✅ Create instance INSIDE function
    const resend = new Resend(apiKey);

    const { name, email, message } = await req.json();

    // ✅ Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    console.log("Incoming Data:", { name, email, message });

    // ✅ Send email
    const result = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "singhsaurabh12003@gmail.com",
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("Resend result:", result);

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("FULL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Email failed",
      },
      { status: 500 }
    );
  }
}
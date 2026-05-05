import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(180),
  automationGoal: z.string().trim().min(10).max(2500),
  consent: z.literal("yes"),
  websiteUrl: z.string().optional(),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form fields and try again." }, { status: 400 });
  }

  const submission = parsed.data;

  if (submission.websiteUrl) {
    return NextResponse.json({ ok: true });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (resendKey && toEmail && fromEmail) {
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: submission.email,
        subject: `New workflow enquiry from ${submission.name}`,
        text: [
          `Name: ${submission.name}`,
          `Email: ${submission.email}`,
          "",
          "Biggest operational bottleneck:",
          submission.automationGoal,
        ].join("\n"),
      }),
    });

    if (!emailResponse.ok) {
      return NextResponse.json(
        { error: "The enquiry could not be sent. Please email hello@rampalabs.com." },
        { status: 502 },
      );
    }
  } else {
    console.info("Contact form submission received without email delivery configured", {
      name: submission.name,
      email: submission.email,
    });
  }

  return NextResponse.json({ ok: true });
}

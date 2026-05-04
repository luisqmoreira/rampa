import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(180),
  company: z.string().trim().min(2).max(160),
  website: z.string().trim().url().max(240),
  industry: z.enum([
    "Amazon / marketplace seller",
    "Construction / property management",
    "E-commerce / D2C",
    "Hospitality",
    "Recruitment / staffing",
    "Other",
  ]),
  revenue: z.enum([
    "Under £500k",
    "£500k-£1m",
    "£1m-£5m",
    "£5m-£10m",
    "£10m+",
    "Prefer not to say",
  ]),
  automationGoal: z.string().trim().min(10).max(2500),
  tools: z.string().trim().min(2).max(1500),
  contactMethod: z.enum(["Email", "Phone", "WhatsApp"]),
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
        subject: `New workflow audit enquiry from ${submission.company}`,
        text: [
          `Name: ${submission.name}`,
          `Email: ${submission.email}`,
          `Company: ${submission.company}`,
          `Website: ${submission.website}`,
          `Industry: ${submission.industry}`,
          `Revenue: ${submission.revenue}`,
          `Preferred contact method: ${submission.contactMethod}`,
          "",
          "What they want to automate:",
          submission.automationGoal,
          "",
          "Current tools:",
          submission.tools,
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
      company: submission.company,
      email: submission.email,
      industry: submission.industry,
    });
  }

  return NextResponse.json({ ok: true });
}

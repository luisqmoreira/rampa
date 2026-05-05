# Rampa Labs Website

Clean, conversion-focused landing page for Rampa Labs, built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Contact Form

The form posts to `app/api/contact/route.ts`. It validates a low-friction enquiry flow, includes a honeypot spam field, shows a confirmation message, and sends email through Resend when configured.

Copy `.env.example` to `.env.local` and set:

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=hello@rampalabs.com
CONTACT_FROM_EMAIL=Rampa Labs <website@rampalabs.com>
NEXT_PUBLIC_BOOKING_URL=https://cal.eu/luis-moreira/30min
```

If the Resend variables are not set, valid submissions are accepted locally and logged by the server. For production storage, connect the API route to Supabase, Airtable, HubSpot, or another CRM before launch.

## Cal.com Booking

Set `NEXT_PUBLIC_BOOKING_URL` to your Cal.com event link. All booking buttons and the inline booking embed use this value.

Recommended Cal.com event setup:

- Event name: `Free Workflow Audit`
- URL slug: `workflow-audit`
- Duration: `30 minutes`
- Calendar: connect your Google Calendar account
- Location: Google Meet
- Buffer: `15 minutes before` and `15 minutes after`
- Availability: use 2-3 controlled windows per week
- Invitee questions: company website, industry, current tools, and what they want to automate

The on-page enquiry form intentionally asks only for name, work email, and the biggest operational bottleneck. Use the Cal.com invitee questions to qualify booked calls in more detail.

After changing `NEXT_PUBLIC_BOOKING_URL`, restart `npm run dev` so Next.js picks up the new public environment variable.

## Deployment

The site is ready for Vercel or any platform that supports Next.js.

```bash
npm run build
npm run start
```

Before launch:

- Replace placeholder email, booking URL, LinkedIn URL, and privacy policy copy.
- Verify the sending domain for Resend or connect the contact form to the chosen backend.
- Add Turnstile or reCAPTCHA if the site receives spam beyond the honeypot.
- Confirm analytics and cookie requirements for the final deployment region.

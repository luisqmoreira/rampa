# Rampa Labs Website

Clean, conversion-focused landing page for Rampa Labs, built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Contact Form

The form posts to `app/api/contact/route.ts`. It validates submissions, includes a honeypot spam field, shows a confirmation message, and sends email through Resend when configured.

Copy `.env.example` to `.env.local` and set:

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=hello@rampalabs.com
CONTACT_FROM_EMAIL=Rampa Labs <website@rampalabs.com>
NEXT_PUBLIC_BOOKING_URL=https://cal.com/rampalabs/workflow-audit
```

If the Resend variables are not set, valid submissions are accepted locally and logged by the server. For production storage, connect the API route to Supabase, Airtable, HubSpot, or another CRM before launch.

## Booking CTA

Set `NEXT_PUBLIC_BOOKING_URL` to a Calendly, Cal.com, HubSpot Meetings, or other booking link. All booking buttons use this value.

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

import Link from "next/link";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Privacy Policy | Rampa Labs",
  description: "Privacy policy placeholder for Rampa Labs website enquiries.",
};

export default function PrivacyPage() {
  return (
    <>
      <main className="bg-[var(--cream)] py-14 text-[var(--ink)] md:py-20">
        <article className="container max-w-3xl rounded-lg border border-[var(--line-dark)] bg-[rgba(255,255,255,0.28)] p-6 md:p-10">
          <Link className="text-sm font-semibold text-[var(--accent)]" href="/">
            Back to Rampa Labs
          </Link>
          <h1 className="mt-10 text-4xl font-semibold leading-tight md:text-6xl">Privacy Policy</h1>
          <p className="mt-6 text-base leading-8 text-[var(--muted-dark)]">
            This placeholder should be reviewed before launch. Rampa Labs collects the information submitted through the enquiry form so it can respond to workflow audit requests and related business enquiries.
          </p>
          <h2 className="mt-10 text-2xl font-semibold">Information collected</h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted-dark)]">
            The form may collect your name, work email, company, website, industry, approximate revenue band, operational workflow details, current tools, preferred contact method, and consent confirmation.
          </p>
          <h2 className="mt-10 text-2xl font-semibold">How information is used</h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted-dark)]">
            Information is used to review your enquiry, respond to your request, and assess whether Rampa Labs can help with the workflow, reporting, or automation problem described.
          </p>
          <h2 className="mt-10 text-2xl font-semibold">Contact</h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted-dark)]">
            For privacy requests, contact{" "}
            <a className="font-semibold text-[var(--ink)]" href="mailto:hello@rampalabs.com">
              hello@rampalabs.com
            </a>
            .
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}

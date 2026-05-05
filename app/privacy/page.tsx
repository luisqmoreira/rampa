import { Footer } from "@/components/footer";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "Privacy Policy | Rampa Labs",
  description: "Privacy policy for Rampa Labs website enquiries.",
};

export default function PrivacyPage() {
  return (
    <>
      <main className="bg-[var(--paper)] py-16 text-[var(--ink)] md:py-24">
        <article className="wrap max-w-4xl border border-[var(--rule)] bg-[var(--paper)] p-6 md:p-10">
          <Link className="brand focus-ring" href="/">
            <span className="brand-mark" aria-hidden="true" />
            <span>Rampa Labs</span>
          </Link>
          <div className="sec-eyebrow mt-12">
            <span className="num">Policy</span>
            <span className="bar" />
            <span>Privacy</span>
          </div>
          <h1 className="serif mt-5 text-5xl font-light leading-none tracking-[-0.025em] md:text-7xl">
            Privacy Policy
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--ink-2)]">
            This placeholder should be reviewed before launch. Rampa Labs collects the information submitted through the
            enquiry form so it can respond to workflow audit requests and related business enquiries.
          </p>

          <div className="mt-12 border-t border-[var(--rule)]">
            <PolicySection title="Information collected">
              The form may collect your name, work email, company, operational workflow details, team size, source, and
              consent confirmation.
            </PolicySection>
            <PolicySection title="How information is used">
              Information is used to review your enquiry, respond to your request, and assess whether Rampa Labs can help
              with the workflow, reporting, or automation problem described.
            </PolicySection>
            <PolicySection title="Contact">
              For privacy requests, contact{" "}
              <a className="font-semibold underline" href="mailto:hello@rampalabs.com">
                hello@rampalabs.com
              </a>
              .
            </PolicySection>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function PolicySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="grid gap-6 border-b border-[var(--hair)] py-8 md:grid-cols-[0.38fr_0.62fr]">
      <h2 className="text-xl font-medium">{title}</h2>
      <p className="text-base leading-8 text-[var(--ink-2)]">{children}</p>
    </section>
  );
}

import { CalBooking } from "@/components/cal-booking";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WorkflowMap } from "@/components/workflow-map";
import type { ReactNode } from "react";

const services = [
  {
    icon: "dashboard",
    title: "Automated Reporting Dashboards",
    copy: "Weekly P&L, SKU-level performance, sales, margin, cash flow, project cost, or occupancy reporting.",
  },
  {
    icon: "workflow",
    title: "Workflow Automation",
    copy: "Automated supplier emails, task routing, document handling, internal notifications, and admin processes.",
  },
  {
    icon: "inventory",
    title: "Inventory and Reorder Systems",
    copy: "Stock alerts, reorder triggers, sales velocity tracking, and supplier coordination.",
  },
  {
    icon: "document",
    title: "Invoice and Document Processing",
    copy: "Extraction, categorisation, reconciliation, and approval workflows.",
  },
  {
    icon: "alert",
    title: "Operational Alerts",
    copy: "Margin drops, ad spend issues, stock risks, pricing changes, project overruns, and cash flow warnings.",
  },
  {
    icon: "integration",
    title: "Systems Integration",
    copy: "Connect Google Sheets, Airtable, Notion, Slack, WhatsApp, Shopify, Amazon exports, Xero, QuickBooks, Make, Zapier, and other tools where practical.",
  },
];

const niches = [
  {
    icon: "marketplace",
    title: "Marketplace Sellers",
    flow: ["SKU data", "Margin view", "Stock action"],
    copy: "Automated SKU-level reporting, inventory alerts, ad spend monitoring, supplier workflows, and weekly performance packs.",
  },
  {
    icon: "property",
    title: "Construction & Property Management",
    flow: ["Project costs", "Invoices", "Cash flow"],
    copy: "Project cost tracking, supplier invoice processing, cash flow dashboards, tenant communication workflows, and document automation.",
  },
  {
    icon: "commerce",
    title: "E-commerce & D2C Brands",
    flow: ["Storefront", "Fulfilment", "Finance"],
    copy: "Unified dashboards across Shopify, ads, email, inventory, fulfilment, and finance.",
  },
];

const outcomes = [
  "Save 10-15 hours per week on manual reporting.",
  "Reduce spreadsheet errors and duplicated work.",
  "Get weekly visibility on revenue, margin, stock, and cash flow.",
  "Automate repetitive supplier, customer, or internal admin.",
  "Give founders cleaner information for faster decisions.",
];

const bookingUrl =
  process.env.NEXT_PUBLIC_BOOKING_URL || "https://cal.eu/luis-moreira/30min";

export default function Home() {
  return (
    <>
      <Header bookingUrl={bookingUrl} />
      <main className="overflow-hidden bg-[var(--background)]">
        <section className="relative border-b border-[var(--line)] pt-10 md:pt-0" aria-labelledby="hero-title">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_10%,rgba(47,109,246,0.2),transparent_30%),linear-gradient(180deg,#07131f_0%,#0d1f2f_100%)]" aria-hidden="true" />
          <div className="container relative grid gap-8 pb-12 md:min-h-[min(780px,calc(100vh-4rem-96px))] md:grid-cols-[0.98fr_1.02fr] md:items-center md:pb-8">
            <div>
              <h1
                id="hero-title"
                className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-normal text-[var(--cream-soft)] md:text-6xl xl:text-[4.25rem]"
              >
                Automation systems for growing businesses stuck in spreadsheets.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                Rampa Labs helps marketplace sellers, property firms, and operationally heavy SMEs replace manual reporting, repetitive admin, and disconnected workflows with practical automation systems.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--cream-soft)] px-5 text-sm font-semibold text-[var(--ink)] transition hover:bg-white"
                  href={bookingUrl}
                >
                  Book a free workflow audit
                </a>
                <a
                  className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-[var(--line)] px-5 text-sm font-semibold text-[var(--cream-soft)] transition hover:border-[rgba(246,241,234,0.42)]"
                  href="#contact"
                >
                  Tell us what you want to automate
                </a>
              </div>
            </div>
            <WorkflowMap />
          </div>
        </section>

        <section className="bg-[var(--cream)] py-16 text-[var(--ink)] md:py-24" aria-labelledby="problem-title">
          <div className="container grid gap-10 md:grid-cols-[0.82fr_1.18fr]">
            <h2 id="problem-title" className="text-3xl font-semibold leading-tight md:text-5xl">
              Your business should not depend on manual workarounds.
            </h2>
            <div className="max-w-3xl text-base leading-8 text-[var(--muted-dark)] md:text-lg">
              <p>
                Growing businesses often accumulate operational complexity before they have time to rebuild the systems underneath it. Spreadsheets, WhatsApp coordination, supplier emails, delayed reports, disconnected tools, and founder-dependent decision-making are common signs that the operating layer needs attention.
              </p>
              <p className="mt-5">
                Rampa Labs turns those recurring bottlenecks into practical workflows, dashboards, and alerts that are easier for the team to run.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="bg-[var(--navy)] py-16 md:py-24" aria-labelledby="services-title">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-[0.72fr_1.28fr] md:items-end">
              <div>
                <h2 id="services-title" className="text-3xl font-semibold leading-tight text-[var(--cream-soft)] md:text-5xl">
                  What we build
                </h2>
                <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
                  Systems that remove repetitive admin, improve reporting, and make the business easier to operate.
                </p>
              </div>
              <div className="h-px bg-[var(--line)]" aria-hidden="true" />
            </div>
            <div className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
              {services.map((service) => (
                <article className="grid grid-cols-[2.75rem_1fr] gap-5 border-t border-[var(--line)] pt-6" key={service.title}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-md border border-[var(--line)] bg-[rgba(246,241,234,0.045)] text-[var(--accent)]">
                    <Icon name={service.icon} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--cream-soft)]">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{service.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="use-cases" className="bg-[var(--cream)] py-16 text-[var(--ink)] md:py-24" aria-labelledby="niches-title">
          <div className="container">
            <div className="max-w-3xl">
              <h2 id="niches-title" className="text-3xl font-semibold leading-tight md:text-5xl">
                Built for operationally heavy businesses
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--muted-dark)]">
                If your team runs the business through spreadsheets, exports, and manual updates, there is likely something worth automating.
              </p>
            </div>
            <div className="mt-11 grid gap-4">
              {niches.map((niche) => (
                <article
                  className="grid gap-6 rounded-lg border border-[var(--line-dark)] bg-[rgba(255,255,255,0.34)] p-5 md:grid-cols-[0.34fr_0.3fr_0.36fr] md:items-center md:p-7"
                  key={niche.title}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--ink)] text-[var(--cream-soft)]">
                      <Icon name={niche.icon} />
                    </span>
                    <h3 className="text-xl font-semibold">{niche.title}</h3>
                  </div>
                  <MiniFlow items={niche.flow} />
                  <p className="text-sm leading-7 text-[var(--muted-dark)]">{niche.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-[var(--background)] py-16 md:py-24" aria-labelledby="process-title">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-[0.72fr_1.28fr]">
              <h2 id="process-title" className="text-3xl font-semibold leading-tight text-[var(--cream-soft)] md:text-5xl">
                How it works
              </h2>
              <div className="grid gap-5 md:grid-cols-3">
                {[
                  ["01", "Workflow Audit", "We review your current processes, spreadsheets, tools, and recurring bottlenecks."],
                  ["02", "Automation Blueprint", "You get a clear map of what should be automated, what should stay manual, and where the ROI is."],
                  ["03", "Build & Operate", "We build the dashboards, automations, alerts, and workflows, then refine them with your team."],
                ].map(([number, title, copy], index) => (
                  <article className="relative border-t border-[var(--line)] pt-6" key={title}>
                    {index < 2 ? (
                      <span className="absolute right-2 top-4 hidden h-px w-12 bg-[var(--accent)] md:block" aria-hidden="true" />
                    ) : null}
                    <p className="text-sm font-semibold text-[var(--accent)]">{number}</p>
                    <h3 className="mt-4 text-xl font-semibold text-[var(--cream-soft)]">{title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--navy)] py-16 md:py-24" aria-labelledby="outcomes-title">
          <div className="container rounded-lg border border-[var(--line)] bg-[rgba(246,241,234,0.045)] p-6 md:p-10">
            <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <h2 id="outcomes-title" className="text-3xl font-semibold leading-tight text-[var(--cream-soft)] md:text-5xl">
                  Typical outcomes
                </h2>
                <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                  These are examples from the kinds of operational problems we target, not guaranteed results.
                </p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {outcomes.map((outcome) => (
                  <li className="flex gap-3 text-base leading-7 text-[var(--cream-soft)]" key={outcome}>
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[var(--accent-soft)] text-[var(--accent)]" aria-hidden="true">
                      <Icon name="check" />
                    </span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[var(--cream)] py-16 text-[var(--ink)] md:py-24" aria-labelledby="cred-title">
          <div className="container grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
            <h2 id="cred-title" className="text-3xl font-semibold leading-tight md:text-5xl">
              Operator-led, not software-first.
            </h2>
            <p className="text-lg leading-8 text-[var(--muted-dark)]">
              Rampa Labs is built for business owners who need practical systems, not another platform to manage. We focus on the operational layer: reporting, workflows, automations, and the manual processes that quietly drain time and margin. Our work is informed by marketplace, e-commerce, analytics, and operations experience.
            </p>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,var(--cream)_0%,var(--cream)_12%,var(--background)_12%,var(--background)_100%)] pb-16 md:pb-24" aria-labelledby="cta-title">
          <div className="container">
            <div className="grid gap-10 rounded-lg border border-[var(--line)] bg-[var(--navy)] p-6 text-[var(--cream-soft)] shadow-[0_26px_90px_rgba(0,0,0,0.24)] md:grid-cols-[0.82fr_1.18fr] md:p-10">
              <div>
                <h2 id="cta-title" className="text-3xl font-semibold leading-tight md:text-5xl">
                  Find the manual work worth removing.
                </h2>
                <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
                  Send a short description of your current workflow, spreadsheet, or reporting problem. We’ll identify where automation could save time or improve visibility.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row md:flex-col">
                  <a className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--cream-soft)] px-5 text-sm font-semibold text-[var(--ink)]" href={bookingUrl}>
                    Book a free workflow audit
                  </a>
                  <a className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-[var(--line)] px-5 text-sm font-semibold text-[var(--cream-soft)]" href="#contact">
                    Send us your workflow
                  </a>
                </div>
              </div>
              <div id="contact" className="scroll-mt-24 space-y-7 rounded-lg border border-[var(--line)] bg-[rgba(7,19,31,0.42)] p-5 md:p-7">
                <div className="mb-8 border-b border-[var(--line)] pb-6">
                  <h3 className="text-xl font-semibold">Book or send an enquiry</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    Use your booking link for a direct audit slot, or send the workflow details below.
                  </p>
                  <a className="focus-ring mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--accent)] px-4 text-sm font-semibold text-white" href={bookingUrl}>
                    Open booking calendar
                  </a>
                </div>
                <CalBooking bookingUrl={bookingUrl} />
                <div className="border-t border-[var(--line)] pt-7">
                  <h4 className="text-base font-semibold">Send workflow details</h4>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    Prefer to explain the problem first? Send the details and we’ll respond shortly.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function MiniFlow({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {items.map((item, index) => (
        <span className="flex items-center gap-2 text-xs font-semibold text-[var(--muted-dark)]" key={item}>
          <span className="rounded-md border border-[var(--line-dark)] px-2.5 py-2">{item}</span>
          {index < items.length - 1 ? <span className="text-[var(--accent)]" aria-hidden="true">/</span> : null}
        </span>
      ))}
    </div>
  );
}

function Icon({ name }: { name: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
  };

  const paths: Record<string, ReactNode> = {
    dashboard: <path d="M4 19V5m0 14h16M8 16v-5m4 5V8m4 8v-3" {...common} />,
    workflow: <path d="M6 7h5v5H6zM13 14h5v5h-5zM11 9h3a4 4 0 0 1 4 4v1" {...common} />,
    inventory: <path d="M4 8 12 4l8 4-8 4-8-4Zm0 0v8l8 4 8-4V8M12 12v8" {...common} />,
    document: <path d="M7 4h7l3 3v13H7zM14 4v4h3M10 12h4m-4 4h6" {...common} />,
    alert: <path d="M12 5 4.5 18h15L12 5Zm0 5v3m0 3h.01" {...common} />,
    integration: <path d="M7 8a3 3 0 1 0 0 6h2m6-6h2a3 3 0 0 1 0 6h-2M9 11h6" {...common} />,
    marketplace: <path d="M5 9h14l-1 10H6L5 9Zm3 0a4 4 0 0 1 8 0" {...common} />,
    property: <path d="M4 20h16M6 20V8l6-4 6 4v12M10 20v-6h4v6" {...common} />,
    commerce: <path d="M5 6h14v10H5zM8 20h8M9 10h6" {...common} />,
    check: <path d="m5 12 4 4L19 6" {...common} />,
  };

  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
      {paths[name]}
    </svg>
  );
}

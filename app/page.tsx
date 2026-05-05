import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import type { ReactNode } from "react";

const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "https://cal.eu/luis-moreira/30min";

const tools = [
  "SHOPIFY",
  "AMAZON",
  "XERO",
  "QUICKBOOKS",
  "AIRTABLE",
  "NOTION",
  "SLACK",
  "MAKE",
  "ZAPIER",
  "G. SHEETS",
  "HUBSPOT",
  "+ 40 MORE",
];

const stats = [
  ["137", "+", "Workflows shipped"],
  ["22", "hrs", "Median weekly time saved per client"],
  ["£1.4", "m", "Stockouts & over-orders prevented in 2025"],
  ["11", "days", "Average from audit to first system live"],
];

const pains = [
  [
    "P/01",
    "The Monday-morning report ritual",
    "Someone exports CSVs from four tools, pastes them into the master sheet, and the founder reads numbers that are already three days old.",
    "~6h / WK",
  ],
  [
    "P/02",
    "Inventory by gut feel",
    "Reorder points live in someone's head. Stockouts are noticed when a customer complains. Cash sits in the wrong SKUs.",
    "£18k AVG TRAPPED",
  ],
  [
    "P/03",
    "Supplier chasing via WhatsApp",
    'PO status, ETAs, and "did you send the invoice?" all happen in a thread that nobody can audit, search, or hand off.',
    "2.3 PEOPLE",
  ],
  [
    "P/04",
    "Tools that don't talk",
    "Shopify says one number. Xero says another. Amazon says a third. A junior is paid to make them agree.",
    "3 SOURCES OF TRUTH",
  ],
  [
    "P/05",
    "Founder-dependent processes",
    "Critical workflows live inside one person's head. Holidays are stressful. Hiring a #2 means rebuilding everything from memory.",
    "KEY-PERSON RISK",
  ],
  [
    "P/06",
    "Late warnings on cash & margin",
    "Margin slipped two months ago. The accountant told you yesterday. The fix is now twice as expensive.",
    "~60 DAYS LAG",
  ],
];

const builds = [
  {
    no: "B/01 · FLAGSHIP",
    title: "Automated reporting dashboards",
    desc: "One pane of glass that pulls from every tool you use - refreshed continuously, broken into the views your team actually needs to make Monday's decisions on Friday.",
    tags: ["SHOPIFY", "XERO", "AMAZON", "SHEETS"],
    featured: true,
  },
  {
    no: "B/02",
    title: "Workflow automation",
    desc: "The repetitive admin between tools - quote to invoice to reminder, lead to CRM to handover, ticket to assignment - handled, logged, and observable.",
    tags: ["MAKE", "ZAPIER", "CUSTOM"],
  },
  {
    no: "B/03",
    title: "Inventory & reorder systems",
    desc: "Live sell-through, reorder points that adapt to lead time and seasonality, and POs that draft themselves before you've noticed the SKU is running low.",
    tags: ["SKU MATH", "FORECASTING"],
  },
  {
    no: "B/04",
    title: "Invoice & document workflows",
    desc: "Inbound bills parsed and coded. Outbound invoices auto-generated from delivery events. Approvals routed. Filing solved. The accountant gets quieter.",
    tags: ["OCR", "XERO", "QUICKBOOKS"],
  },
  {
    no: "B/05",
    title: "Operational alerts",
    desc: "Margin drift, refund spikes, slow suppliers, overdue invoices, project cost overruns - surfaced in the channel you actually read, while the fix is still cheap.",
    tags: ["SLACK", "EMAIL", "WHATSAPP"],
  },
  {
    no: "B/06",
    title: "Systems integration",
    desc: 'When the tools need to talk, we wire them properly - no brittle Zapier spaghetti, no "works on my machine." Owned, documented, and handed over.',
    tags: ["API", "WEBHOOKS", "QUEUES"],
  },
];

const industries = [
  {
    no: "USE / 01",
    title: "Marketplace sellers",
    tags: ["AMAZON", "EBAY", "TIKTOK", "FBA"],
    copy: "Reorder engines, FBA replenishment, refund/return reconciliation, real-time SKU margin after fees & ads.",
  },
  {
    no: "USE / 02",
    title: "E-commerce & D2C brands",
    tags: ["SHOPIFY", "KLAVIYO", "3PL", "META ADS"],
    copy: "Daily P&L by product, contribution margin after CAC, 3PL invoice auditing, ops-side of subscriptions.",
  },
  {
    no: "USE / 03",
    title: "Construction & property",
    tags: ["XERO", "PROCORE", "BUILDERTREND"],
    copy: "Job-cost dashboards, subcontractor compliance tracking, snagging workflows, quote-to-invoice timelines.",
  },
  {
    no: "USE / 04",
    title: "Field & service businesses",
    tags: ["JOBBER", "SERVICEM8", "SLACK"],
    copy: "Dispatch alerts, route adherence, recurring-service reminders, customer comms that don't slip.",
  },
  {
    no: "USE / 05",
    title: "Wholesale & distribution",
    tags: ["EDI", "NETSUITE", "BRIGHTPEARL"],
    copy: "Order-to-cash automation, customer-specific pricing, backorder visibility, supplier KPI dashboards.",
  },
];

const processSteps = [
  {
    time: "~ Week 0",
    no: "01",
    title: "Workflow audit",
    desc: "A working session, not a sales call. We map the actual flow of orders, money, and decisions through your business - and find the friction.",
    points: ["60 mins · free", "Audit doc · yours to keep", "Top 5 bottlenecks ranked"],
  },
  {
    time: "Wk 01-02",
    no: "02",
    title: "Automation blueprint",
    desc: "A short, practical plan: what we'd build, in what order, and what each piece is worth in hours, errors, or cash. Fixed price, no surprises.",
    points: ["Scope & sequencing", "Fixed quote", "Tool stack decisions"],
  },
  {
    time: "Wk 02 ->",
    no: "03",
    title: "Build & operate",
    desc: "We ship the first system in two weeks, then iterate. Optional ongoing operate & refine retainer for the businesses that want us as their ops backbone.",
    points: ["First system live · day 11", "Documented & handed over", "Optional refine retainer"],
  },
];

const outcomes = [
  ["-83", "%", "time spent assembling weekly reports"],
  ["+1", "day", "earlier warning on margin, stock, and cash drift"],
  ["-71", "%", "spreadsheet errors caught in production"],
  ["0", "", "supplier follow-ups the founder personally has to send"],
  ["3.4", "x", "faster month-end close, with reconciled numbers"],
  ["11", "days", "from first call to first system running in production"],
];

const checklist = [
  "Reorder formula that survives lead-time chaos",
  "Three-step refund & loss reconciliation",
  "The FBA fee audit most sellers never run",
  "Margin-after-ads dashboard recipe",
  "A pre-Q4 readiness checklist",
];

export default function Home() {
  return (
    <>
      <Marquee />
      <Nav />
      <main>
        <header className="hero" id="top">
          <div className="wrap">
            <div className="meta-row">
              <MetaTag num="01 / 08" label="Hero · Positioning" />
              <div className="meta-tag">
                <span>Operator-led automation</span>
                <span className="bar" />
                <span>Est. 2023 · UK</span>
              </div>
            </div>

            <div className="hero-grid">
              <div>
                <h1 className="hero-h">
                  Stop running your
                  <br />
                  business from <span className="acc">spreadsheets</span>.
                  <br />
                  <em>Start running it on systems.</em>
                </h1>
                <p className="hero-sub">
                  We&apos;re an operator-led studio that replaces the messy admin layer of operationally heavy SMEs - the supplier
                  chasing, the Monday-morning reporting, the WhatsApp threads that double as inventory - with practical
                  automation that actually holds up under real trading conditions.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-accent focus-ring" href={bookingUrl}>
                    Book a free workflow audit
                    <Arrow />
                  </a>
                  <a className="btn btn-ghost focus-ring" href="#contact">
                    Tell us what to automate
                    <Arrow />
                  </a>
                </div>
                <div className="hero-meta">
                  <div className="item">
                    <div className="k">Built by</div>
                    <div className="v">Operators who ran ops, not engineers who read about it.</div>
                  </div>
                  <div className="item">
                    <div className="k">Built for</div>
                    <div className="v">Marketplace, e-com, construction, property & service SMEs.</div>
                  </div>
                  <div className="item">
                    <div className="k">Status</div>
                    <div className="v flex items-center gap-2">
                      <span className="pulse" />
                      Q3 audits - 4 slots open
                    </div>
                  </div>
                </div>
              </div>
              <HeroSchematic />
            </div>
          </div>
        </header>

        <section className="pb-0">
          <div className="wrap pb-4 pt-8">
            <MetaTag num="02 / 08" label="Tools we already speak fluently" />
          </div>
          <div className="logos">
            {tools.map((tool) => (
              <div className="logo-cell" key={tool}>
                {tool}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[var(--paper)]">
          <div className="stats">
            {stats.map(([value, unit, label]) => (
              <div className="stat" key={label}>
                <div className="v tnum">
                  {value}
                  <sup>{unit}</sup>
                </div>
                <div className="l">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="sec" id="problem">
          <div className="wrap">
            <SectionHead
              num="03 / 08"
              eyebrow="The mess"
              title={
                <>
                  Most SMEs aren&apos;t <em>under-tooled</em>.
                  <br />
                  They&apos;re over-spreadsheeted.
                </>
              }
              lede="The same patterns show up in nearly every audit. Reports that take a day to assemble. Reorder decisions made from instinct. Three people manually reconciling the same numbers, slightly differently. We see it because we've lived it."
            />
            <div className="pain-list">
              {pains.map(([num, name, desc, meta]) => (
                <div className="pain-row" key={num}>
                  <div className="pain-num">{num}</div>
                  <div className="pain-name">{name}</div>
                  <div className="pain-desc">{desc}</div>
                  <div className="pain-meta">{meta}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="mono text-xs uppercase text-[var(--ink-3)]">Sound familiar? You&apos;re not the exception. You&apos;re the rule.</p>
              <a className="btn btn-primary focus-ring" href={bookingUrl}>
                Get a workflow audit
                <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="sec" id="what">
          <div className="wrap">
            <SectionHead
              num="04 / 08"
              eyebrow="What we build"
              title={
                <>
                  Six systems that quietly run
                  <br />
                  your business in the background.
                </>
              }
              lede="We don't sell software. We build the operational layer that sits across the tools you already use - the dashboards, alerts, and automations that turn fragmented admin into one calm, observable system."
            />
            <div className="build-grid">
              {builds.map((build, index) => (
                <article className={build.featured ? "build-card featured" : "build-card"} key={build.title}>
                  <div className="bc-no">{build.no}</div>
                  <h3 className="bc-title">{build.title}</h3>
                  <p className="bc-desc">{build.desc}</p>
                  <div className="bc-tags">
                    {build.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <BuildVisual index={index} featured={build.featured} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" id="industries">
          <div className="wrap">
            <SectionHead
              num="05 / 08"
              eyebrow="Where we're sharpest"
              title={
                <>
                  Operationally heavy SMEs.
                  <br />
                  Not a vertical, a <em>shape</em>.
                </>
              }
              lede="We do our best work where physical things, money, and people meet - businesses with real inventory, real suppliers, real margin. We're not picky about the industry; we're picky about the mess. If your ops live in spreadsheets and threads, we can help."
            />
            <div className="inds">
              {industries.map((industry) => (
                <article className="ind" key={industry.no}>
                  <div>
                    <div className="ind-no">{industry.no}</div>
                    <h3 className="ind-title">{industry.title}</h3>
                    <div className="ind-stack">
                      {industry.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <p className="ind-foot">{industry.copy}</p>
                </article>
              ))}
              <article className="ind dark">
                <div>
                  <div className="ind-no">USE / 06</div>
                  <h3 className="ind-title">Something else?</h3>
                </div>
                <p className="ind-foot">
                  If you have spreadsheets, suppliers, and a bottleneck - we&apos;ve probably seen a version of it. Tell us the
                  mess.
                  <a className="mt-4 block font-mono text-xs uppercase tracking-wider text-[var(--accent)]" href="#contact">
                    -&gt; Describe your workflow
                  </a>
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="sec py-16">
          <div className="wrap">
            <div className="quote-row">
              <div>
                <MetaTag num="Field note" label="D2C cosmetics · 14 staff" />
                <blockquote className="quote mt-6">
                  &quot;They didn&apos;t try to sell us a platform. They sat with our ops manager for two days, watched her actually
                  work, and shipped a reorder system that&apos;s saved us three stockouts already.&quot;
                </blockquote>
                <div className="qmeta">
                  <div className="qavatar">JK</div>
                  <div>
                    <div className="qname">Jess K.</div>
                    <div className="qrole">Founder · skincare brand · £2.4m ARR</div>
                  </div>
                </div>
              </div>
              <WorkflowVisual />
            </div>
          </div>
        </section>

        <section className="sec" id="process">
          <div className="wrap">
            <SectionHead
              num="06 / 08"
              eyebrow="Process"
              title={
                <>
                  Three steps. No deck-ware,
                  <br />
                  no six-month discovery.
                </>
              }
              lede="We start with a free 60-minute audit, write you a blueprint you can keep regardless of whether we work together, then build, hand over, and stay close enough to refine as the business changes."
            />
            <div className="process">
              {processSteps.map((step) => (
                <article className="ps" key={step.no}>
                  <div className="ps-time">{step.time}</div>
                  <div className="ps-no">{step.no}</div>
                  <h3 className="ps-title">{step.title}</h3>
                  <p className="ps-desc">{step.desc}</p>
                  <ul className="ps-list">
                    {step.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" id="outcomes">
          <div className="wrap">
            <SectionHead
              num="07 / 08"
              eyebrow="What changes"
              title={
                <>
                  Less manual labour.
                  <br />
                  Earlier, sharper visibility.
                </>
              }
              lede="These aren't claims - they're the median outcomes across our last twelve engagements, six months in. Some clients clear them comfortably; some need longer. Either way, you'll know which by the end of the audit."
            />
            <div className="outcomes">
              {outcomes.map(([value, unit, label]) => (
                <div className="outcome" key={label}>
                  <div className="out-num tnum">
                    {value}
                    {unit ? <span className="unit">{unit}</span> : null}
                  </div>
                  <div className="out-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" id="resources">
          <div className="wrap">
            <div className="lead">
              <div>
                <span className="badge acc">Free · PDF · 14pp</span>
                <h3>5 workflows every Amazon seller should review before Q4.</h3>
                <p className="lp">
                  A working operator&apos;s checklist - the exact reorder maths, refund-reconciliation pattern, and FBA fee-audit
                  query we run for our marketplace clients before peak. Built by someone who&apos;s actually shipped on FBA, not a
                  content team.
                </p>
                <ul className="lead-checks">
                  {checklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mono mt-6 text-xs uppercase text-[#73716a]">
                  No form here -{" "}
                  <a className="text-[var(--accent)] underline" href={bookingUrl}>
                    book a 60-min audit
                  </a>{" "}
                  or{" "}
                  <a className="text-[var(--accent)] underline" href="#contact">
                    send the bottleneck
                  </a>
                  .
                </p>
              </div>
              <div className="lead-toc">
                <h4>Inside the checklist</h4>
                <ol>
                  {[
                    ["01", "Reorder maths under chaos", "p. 02"],
                    ["02", "Refund & loss reconciliation", "p. 04"],
                    ["03", "FBA fee audit (the SQL)", "p. 06"],
                    ["04", "Margin after ads & returns", "p. 09"],
                    ["05", "Q4 readiness checklist", "p. 12"],
                  ].map(([n, t, p]) => (
                    <li key={n}>
                      <span className="n">{n}</span>
                      <span className="t">{t}</span>
                      <span className="p">{p}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="sec" id="contact">
          <div className="wrap">
            <div className="sec-eyebrow mb-6">
              <span className="num">09 / 09</span>
              <span className="bar" />
              <span>Get in touch</span>
            </div>
            <div className="contact">
              <div>
                <h2 className="contact-h">
                  Tell us where the
                  <br />
                  <em>spreadsheet ends</em>
                  <br />
                  and the mess begins.
                </h2>
                <p className="contact-sub">
                  Two equally good ways in: book a 60-minute audit, or send us a single bottleneck and we&apos;ll come back with
                  what a system would look like. Either is free.
                </p>
                <div className="contact-channels">
                  <a className="channel" href={bookingUrl}>
                    <span className="ch-mode">01 · Book</span>
                    <span className="ch-name">60-minute workflow audit</span>
                    <span className="ch-cta">-&gt; Pick a slot</span>
                  </a>
                  <a className="channel" href="mailto:hello@rampalabs.com">
                    <span className="ch-mode">02 · Email</span>
                    <span className="ch-name">hello@rampalabs.com</span>
                    <span className="ch-cta">-&gt; Compose</span>
                  </a>
                  <div className="channel">
                    <span className="ch-mode">Hours</span>
                    <span className="ch-name">Mon-Fri · 09:00-18:00 GMT · 24h reply</span>
                    <span className="ch-cta inline-flex items-center gap-2">
                      <span className="pulse" />
                      OPEN
                    </span>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((i) => (
          <span key={i}>
            <b>● LIVE</b>
            <span>NOW BOOKING - Q3 WORKFLOW AUDITS</span>
            <span>NEW: AMAZON REORDER ENGINE V2</span>
            <span>CASE STUDY · D2C COSMETICS - 31HRS / WEEK SAVED</span>
            <b>● LIVE</b>
            <span>NOW BOOKING - Q3 WORKFLOW AUDITS</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav className="top-nav">
      <div className="wrap top-nav-row">
        <a className="brand focus-ring" href="#top">
          <span className="brand-mark" aria-hidden="true" />
          <span>Rampa Labs</span>
        </a>
        <div className="nav-links" aria-label="Main navigation">
          <a href="#what">What we build</a>
          <a href="#industries">Industries</a>
          <a href="#process">Process</a>
          <a href="#resources">Resources</a>
          <a className="nav-cta focus-ring" href={bookingUrl}>
            <span className="dot" />
            Book audit
          </a>
        </div>
      </div>
    </nav>
  );
}

function MetaTag({ num, label }: { num: string; label: string }) {
  return (
    <div className="meta-tag">
      <span className="num">{num}</span>
      <span className="bar" />
      <span>{label}</span>
    </div>
  );
}

function SectionHead({
  num,
  eyebrow,
  title,
  lede,
}: {
  num: string;
  eyebrow: string;
  title: ReactNode;
  lede: string;
}) {
  return (
    <div className="sec-head">
      <div>
        <div className="sec-eyebrow">
          <span className="num">{num}</span>
          <span className="bar" />
          <span>{eyebrow}</span>
        </div>
        <h2 className="sec-title">{title}</h2>
      </div>
      <p className="sec-lede">{lede}</p>
    </div>
  );
}

function HeroSchematic() {
  return (
    <div className="schematic">
      <div className="schem-bar">
        <span>RAMPA / OPS LAYER · WK 18</span>
        <span className="live inline-flex items-center gap-2">
          <span className="dot" />
          LIVE · 13 FLOWS
        </span>
      </div>
      <div className="schem-grid">
        <div className="schem-cell flex flex-col gap-3.5">
          <div className="cell-title">
            <span>Margin · last 7d</span>
            <span className="tag">+ tracked</span>
          </div>
          <div>
            <span className="big-num tnum">
              31.4<span className="text-2xl text-[#9a9890]">%</span>
            </span>
            <span className="delta">▲ 2.1pt</span>
          </div>
          <svg className="spark" viewBox="0 0 320 60" preserveAspectRatio="none">
            <defs>
              <linearGradient id="spark-gradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#E8FF4D" stopOpacity=".4" />
                <stop offset="1" stopColor="#E8FF4D" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 44 L24 40 L48 42 L72 36 L96 38 L120 30 L144 32 L168 24 L192 26 L216 18 L240 22 L264 14 L288 18 L312 10 L320 12 L320 60 L0 60 Z"
              fill="url(#spark-gradient)"
            />
            <path
              d="M0 44 L24 40 L48 42 L72 36 L96 38 L120 30 L144 32 L168 24 L192 26 L216 18 L240 22 L264 14 L288 18 L312 10 L320 12"
              fill="none"
              stroke="#E8FF4D"
              strokeWidth="1.4"
            />
          </svg>
          <div className="axis-label flex justify-between">
            <span>WK 11</span>
            <span>WK 18</span>
          </div>
          <div className="cell-title mt-1.5">
            <span>Stockouts averted</span>
            <span className="tag">via reorder agent</span>
          </div>
          <div className="flex items-baseline gap-2.5">
            <span className="big-num tnum">14</span>
            <span className="mono text-[11px] uppercase text-[#9a9890]">SKUs · this month</span>
          </div>
        </div>
        <div className="schem-cell flex flex-col">
          <div className="cell-title">
            <span>Workflow graph</span>
            <span className="tag">● 13 active</span>
          </div>
          <div className="nodes">
            <svg viewBox="0 0 320 320" preserveAspectRatio="xMidYMid meet">
              <g stroke="#3a3833" strokeWidth="1" fill="none">
                <path d="M40 60 C 100 60, 120 140, 180 140" />
                <path d="M40 120 C 100 120, 120 140, 180 140" />
                <path d="M40 180 C 100 180, 120 140, 180 140" />
                <path d="M40 240 C 100 240, 120 140, 180 140" />
                <path d="M180 140 C 230 140, 240 80, 290 80" />
                <path d="M180 140 C 230 140, 240 200, 290 200" />
                <path d="M180 140 C 230 140, 240 260, 290 260" />
              </g>
              <path
                d="M40 120 C 100 120, 120 140, 180 140 C 230 140, 240 80, 290 80"
                stroke="#E8FF4D"
                strokeWidth="1.4"
                fill="none"
                strokeDasharray="4 6"
              />
              <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#cdcbc1">
                {["SHOPIFY", "AMAZON", "XERO", "SHEETS"].map((label, i) => (
                  <g key={label}>
                    <rect x="6" y={50 + i * 60} width="68" height="20" fill="#1a1916" stroke="#3a3833" />
                    <text x="14" y={64 + i * 60}>
                      {label}
                    </text>
                  </g>
                ))}
              </g>
              <rect x="146" y="124" width="68" height="32" fill="#E8FF4D" stroke="#E8FF4D" />
              <text x="180" y="144" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#0E0E0C" fontWeight="600">
                RAMPA
              </text>
              <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#cdcbc1">
                {[
                  ["DASHBOARD", 70],
                  ["REORDER PO", 190],
                  ["SLACK ALERT", 250],
                ].map(([label, y]) => (
                  <g key={label}>
                    <rect x="248" y={Number(y)} width="68" height="20" fill="#1a1916" stroke="#3a3833" />
                    <text x="256" y={Number(y) + 14}>
                      {label}
                    </text>
                  </g>
                ))}
              </g>
            </svg>
          </div>
          <div className="axis-label mt-1.5 flex justify-between">
            <span>SOURCES · 7</span>
            <span>OUTCOMES · 9</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BuildVisual({ index, featured }: { index: number; featured?: boolean }) {
  const stroke = featured ? "#3a3833" : "var(--ink)";
  return (
    <svg className="bc-vis" viewBox="0 0 280 60" preserveAspectRatio="none">
      {index === 0 ? (
        <>
          <line x1="0" y1="50" x2="280" y2="50" stroke="#3a3833" />
          {[6, 26, 46, 66, 86, 106, 126].map((x, i) => (
            <rect key={x} x={x} y={[22, 14, 20, 8, 18, 12, 6][i]} width="14" height={[28, 36, 30, 42, 32, 38, 44][i]} fill="#E8FF4D" />
          ))}
          {[156, 176, 196, 216, 236, 256].map((x, i) => (
            <rect key={x} x={x} y={[30, 26, 34, 22, 28, 24][i]} width="14" height={[20, 24, 16, 28, 22, 26][i]} fill="#5C5A52" />
          ))}
        </>
      ) : index === 1 ? (
        <g stroke={stroke} strokeWidth="1.2" fill="none">
          <circle cx="20" cy="30" r="6" />
          <line x1="26" y1="30" x2="74" y2="30" />
          <rect x="74" y="22" width="40" height="16" />
          <line x1="114" y1="30" x2="156" y2="30" />
          <circle cx="162" cy="30" r="6" />
          <line x1="168" y1="30" x2="216" y2="30" />
          <rect x="216" y="22" width="40" height="16" fill="var(--accent)" />
        </g>
      ) : index === 2 ? (
        <>
          <path d="M0 40 L40 35 L80 38 L120 25 L160 30 L200 18 L240 22 L280 12" fill="none" stroke={stroke} strokeWidth="1.4" />
          <line x1="0" y1="46" x2="280" y2="46" stroke="var(--warn)" strokeDasharray="3 4" />
          <text x="278" y="44" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--warn)" textAnchor="end">
            REORDER
          </text>
        </>
      ) : index === 3 ? (
        <g fill="none" stroke={stroke} strokeWidth="1">
          <rect x="10" y="10" width="36" height="44" />
          <line x1="16" y1="20" x2="40" y2="20" />
          <line x1="16" y1="28" x2="40" y2="28" />
          <path d="M52 32 L92 32 M84 28 L92 32 L84 36" />
          <rect x="100" y="20" width="60" height="24" fill="var(--accent)" />
          <path d="M160 32 L204 32 M196 28 L204 32 L196 36" />
          <rect x="212" y="10" width="58" height="44" />
        </g>
      ) : index === 4 ? (
        <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--ink)">
          {["▲ MARGIN · SKU 4421 · -3.4pt vs WK 17", "● STOCKOUT RISK · SKU 1180 · 6 DAYS", "▼ SUPPLIER ETA SLIP · PO #3041 · +5d"].map((text, i) => (
            <g key={text}>
              <rect x="6" y={8 + i * 18} width="268" height="14" fill={i === 1 ? "var(--accent)" : "var(--paper-2)"} stroke="var(--hair)" />
              <text x="14" y={18 + i * 18}>
                {text}
              </text>
            </g>
          ))}
        </g>
      ) : (
        <g stroke={stroke} strokeWidth="1.2" fill="none">
          <circle cx="30" cy="20" r="8" />
          <circle cx="30" cy="46" r="8" />
          <circle cx="140" cy="32" r="14" fill="var(--accent)" />
          <circle cx="250" cy="14" r="8" />
          <circle cx="250" cy="32" r="8" />
          <circle cx="250" cy="50" r="8" />
          <line x1="38" y1="22" x2="126" y2="30" />
          <line x1="38" y1="46" x2="126" y2="34" />
          <line x1="154" y1="30" x2="242" y2="16" />
          <line x1="154" y1="32" x2="242" y2="32" />
          <line x1="154" y1="34" x2="242" y2="48" />
        </g>
      )}
    </svg>
  );
}

function WorkflowVisual() {
  return (
    <div className="workflow-vis">
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="mono text-[11px] uppercase text-[var(--ink-3)]">BEFORE / AFTER · WK 04 -&gt; WK 12</span>
        <span className="badge acc">SHIPPED</span>
      </div>
      <div className="mb-6 grid grid-cols-2 gap-4">
        {[
          ["Hours / week on ops admin", "37", "6"],
          ["Stockouts / quarter", "11", "1"],
        ].map(([label, before, after]) => (
          <div key={label}>
            <div className="mono text-[10px] uppercase text-[var(--ink-3)]">{label}</div>
            <div className="mt-1.5 flex items-baseline gap-2">
              <span className="serif text-[42px] font-light line-through text-[var(--ink-3)]">{before}</span>
              <span className="text-[var(--ink-3)]">-&gt;</span>
              <span className="serif text-[42px] font-light">{after}</span>
            </div>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 360 140" className="h-auto w-full">
        <g stroke="var(--hair)" strokeWidth="1">
          <line x1="0" y1="35" x2="360" y2="35" strokeDasharray="2 4" />
          <line x1="0" y1="70" x2="360" y2="70" strokeDasharray="2 4" />
          <line x1="0" y1="105" x2="360" y2="105" strokeDasharray="2 4" />
        </g>
        <path d="M0 30 L40 38 L80 28 L120 50 L160 35 L200 60 L240 45 L280 70 L320 55 L360 75" fill="none" stroke="var(--warn)" strokeWidth="1.6" />
        <path d="M0 80 L40 78 L80 90 L120 95 L160 100 L200 108 L240 115 L280 118 L320 122 L360 125" fill="none" stroke="var(--ink)" strokeWidth="1.6" />
        <text x="2" y="20" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--ink-3)">
          SPREADSHEET HOURS
        </text>
        <text x="2" y="135" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--ink-3)">
          SYSTEM HOURS
        </text>
      </svg>
    </div>
  );
}

function Arrow() {
  return (
    <svg aria-hidden="true" className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

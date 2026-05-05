"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const messAreas = [
  "Reporting",
  "Inventory",
  "Suppliers",
  "Invoicing",
  "Tools not talking",
  "Founder bottleneck",
  "Not sure yet",
];

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [selectedMess, setSelectedMess] = useState<string[]>([]);

  function toggleMess(area: string) {
    setSelectedMess((current) =>
      current.includes(area) ? current.filter((item) => item !== area) : [...current, area],
    );
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const company = String(formData.get("company") || "");
    const bottleneck = String(formData.get("bottleneck") || "");
    const teamSize = String(formData.get("teamSize") || "");
    const source = String(formData.get("source") || "");
    const websiteUrl = String(formData.get("websiteUrl") || "");
    const consent = formData.get("consent") === "yes" ? "yes" : "";

    const automationGoal = [
      bottleneck,
      "",
      company ? `Company: ${company}` : "",
      selectedMess.length ? `Mess area: ${selectedMess.join(", ")}` : "",
      teamSize ? `Team size: ${teamSize}` : "",
      source ? `Heard about us via: ${source}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        automationGoal,
        consent,
        websiteUrl,
      }),
    });

    if (response.ok) {
      form.reset();
      setSelectedMess([]);
      setState("success");
      setMessage("Sent. We'll review the workflow and reply within 24h.");
      return;
    }

    const data = (await response.json().catch(() => null)) as { error?: string } | null;
    setState("error");
    setMessage(data?.error || "Something went wrong. Please email hello@rampalabs.com.");
  }

  return (
    <form className="enquiry" onSubmit={onSubmit}>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="websiteUrl">Website URL</label>
        <input id="websiteUrl" name="websiteUrl" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="meta-tag mb-2">
        <span className="num">FORM / B</span>
        <span className="bar" />
        <span>Tell us your bottleneck</span>
      </div>

      <div className="field-row">
        <Field label="Name" name="name" placeholder="Alex Patel" autoComplete="name" required />
        <Field
          label="Work email"
          name="email"
          type="email"
          placeholder="alex@yourbrand.com"
          autoComplete="email"
          required
        />
      </div>

      <Field
        label="Company and what you do"
        name="company"
        placeholder="e.g. Northpine - D2C outdoor gear, GBP3m"
      />

      <div className="field">
        <label>Where is most of the mess?</label>
        <div className="chips">
          {messAreas.map((area) => (
            <button
              aria-pressed={selectedMess.includes(area)}
              className={selectedMess.includes(area) ? "chip on" : "chip"}
              key={area}
              onClick={() => toggleMess(area)}
              type="button"
            >
              {area}
            </button>
          ))}
        </div>
      </div>

      <TextArea
        label="Your single biggest operational bottleneck"
        name="bottleneck"
        placeholder="The thing that, if it just ran itself, would give you back your week. Plain English is fine."
        required
      />

      <div className="field-row">
        <Select label="Team size" name="teamSize" options={["1-5", "6-15", "16-50", "50+"]} />
        <Select label="Heard about us via" name="source" options={["Referral", "LinkedIn", "Search", "Newsletter", "Other"]} />
      </div>

      <label className="mt-4 flex gap-3 text-sm leading-6 text-[var(--ink-3)]">
        <input className="mt-1 h-4 w-4 shrink-0 accent-[var(--ink)]" name="consent" type="checkbox" value="yes" required />
        <span>I agree to be contacted by Rampa Labs about my enquiry.</span>
      </label>

      <div className="form-foot">
        <span className="form-help">We reply within 24h - GMT</span>
        <button className="btn btn-primary focus-ring" disabled={state === "submitting"} type="submit">
          {state === "submitting" ? "Sending..." : "Send to Rampa"}
          <Arrow />
        </button>
      </div>

      {message ? (
        <p className={state === "success" ? "form-message success" : "form-message error"} role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
      />
    </div>
  );
}

function TextArea({
  label,
  name,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} name={name} placeholder={placeholder} required={required} />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
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

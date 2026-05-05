"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      form.reset();
      setState("success");
      setMessage("Thanks — your enquiry has been received. We’ll review your workflow and respond shortly.");
      return;
    }

    const data = (await response.json().catch(() => null)) as { error?: string } | null;
    setState("error");
    setMessage(data?.error || "Something went wrong. Please email hello@rampalabs.com.");
  }

  return (
    <form className="space-y-5 text-[var(--cream-soft)]" onSubmit={onSubmit}>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="websiteUrl">Website URL</label>
        <input id="websiteUrl" name="websiteUrl" tabIndex={-1} autoComplete="off" />
      </div>

      <Field label="Name" name="name" autoComplete="name" required />
      <Field label="Work email" name="email" type="email" autoComplete="email" required />
      <TextArea label="What's your biggest operational bottleneck?" name="automationGoal" required />

      <label className="flex gap-3 text-sm leading-6 text-[var(--muted)]">
        <input className="mt-1 h-4 w-4 shrink-0 accent-[var(--accent)]" name="consent" type="checkbox" value="yes" required />
        <span>I agree to be contacted by Rampa Labs about my enquiry.</span>
      </label>

      <button
        className="focus-ring inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[var(--accent)] px-5 text-sm font-semibold text-white transition hover:bg-[#0d2f52] disabled:cursor-not-allowed disabled:opacity-60"
        disabled={state === "submitting"}
        type="submit"
      >
        {state === "submitting" ? "Sending..." : "Send enquiry"}
      </button>

      {message ? (
        <p
          className={state === "success" ? "text-sm leading-6 text-[#8fd9aa]" : "text-sm leading-6 text-[#ffb089]"}
          role="status"
        >
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
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-semibold text-[var(--cream-soft)]" htmlFor={name}>
      {label}
      <input
        className="focus-ring mt-2 min-h-11 w-full rounded-md border border-[var(--line)] bg-[rgba(246,241,234,0.055)] px-3 text-sm font-normal text-[var(--cream-soft)] placeholder:text-[var(--muted)]"
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
      />
    </label>
  );
}

function TextArea({ label, name, required }: { label: string; name: string; required?: boolean }) {
  return (
    <label className="block text-sm font-semibold text-[var(--cream-soft)]" htmlFor={name}>
      {label}
      <textarea
        className="focus-ring mt-2 min-h-28 w-full resize-y rounded-md border border-[var(--line)] bg-[rgba(246,241,234,0.055)] px-3 py-3 text-sm font-normal leading-6 text-[var(--cream-soft)] placeholder:text-[var(--muted)]"
        id={name}
        name={name}
        required={required}
      />
    </label>
  );
}

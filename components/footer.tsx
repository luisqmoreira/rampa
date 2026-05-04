import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--background)] py-10 text-[var(--cream-soft)]">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">Rampa Labs</p>
          <p className="mt-2 text-sm text-[var(--muted)]">Automation systems for operationally heavy SMEs.</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-[var(--muted)]">
          <a className="transition hover:text-[var(--cream-soft)]" href="mailto:hello@rampalabs.com">
            hello@rampalabs.com
          </a>
          <Link className="transition hover:text-[var(--cream-soft)]" href="/privacy">
            Privacy Policy
          </Link>
          <a className="transition hover:text-[var(--cream-soft)]" href="https://www.linkedin.com/company/rampa-labs" rel="noreferrer" target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

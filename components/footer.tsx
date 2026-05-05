import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col">
            <Link className="brand mb-5" href="/">
              <span className="brand-mark" aria-hidden="true" />
              <span>Rampa Labs</span>
            </Link>
            <p className="max-w-[36ch] text-sm leading-6 text-[var(--ink-2)]">
              Operator-led automation and workflow systems for SMEs that have outgrown their spreadsheets.
            </p>
          </div>
          <div className="foot-col">
            <h5>Build</h5>
            <Link href="/#what">Reporting dashboards</Link>
            <Link href="/#what">Workflow automation</Link>
            <Link href="/#what">Inventory systems</Link>
            <Link href="/#what">Document workflows</Link>
            <Link href="/#what">Operational alerts</Link>
            <Link href="/#what">Integrations</Link>
          </div>
          <div className="foot-col">
            <h5>Company</h5>
            <Link href="/#process">Process</Link>
            <Link href="/#industries">Industries</Link>
            <Link href="/#resources">Resources</Link>
            <Link href="/#contact">Contact</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
          <div className="foot-col">
            <h5>Operating</h5>
            <a href="mailto:hello@rampalabs.com">hello@rampalabs.com</a>
            <a href="https://www.linkedin.com/company/rampa-labs" rel="noreferrer" target="_blank">
              LinkedIn
            </a>
            <span className="block py-1.5 text-sm text-[var(--ink-2)]">Mon-Fri · 09:00-18:00 GMT</span>
          </div>
        </div>
        <div className="foot-bot">
          <span>© 2026 Rampa Labs</span>
          <span>Operator-led automation systems</span>
        </div>
      </div>
    </footer>
  );
}

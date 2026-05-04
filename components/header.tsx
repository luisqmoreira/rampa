type HeaderProps = {
  bookingUrl: string;
};

export function Header({ bookingUrl }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[rgba(7,19,31,0.88)] text-[var(--cream-soft)] backdrop-blur-xl">
      <div className="container flex min-h-14 items-center justify-between gap-6 md:min-h-16">
        <a className="focus-ring rounded-sm text-base font-semibold tracking-normal md:text-lg" href="#">
          Rampa Labs
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-[var(--muted)] md:flex" aria-label="Main navigation">
          <a className="transition hover:text-[var(--cream-soft)]" href="#services">
            Services
          </a>
          <a className="transition hover:text-[var(--cream-soft)]" href="#use-cases">
            Use Cases
          </a>
          <a className="transition hover:text-[var(--cream-soft)]" href="#process">
            Process
          </a>
          <a className="transition hover:text-[var(--cream-soft)]" href="#contact">
            Contact
          </a>
        </nav>
        <a
          className="focus-ring inline-flex min-h-10 items-center justify-center rounded-md bg-[var(--cream-soft)] px-4 text-sm font-semibold text-[var(--ink)] transition hover:bg-white"
          href={bookingUrl}
        >
          Book Audit
        </a>
      </div>
    </header>
  );
}

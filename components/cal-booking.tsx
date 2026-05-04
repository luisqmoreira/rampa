type CalBookingProps = {
  bookingUrl: string;
};

export function CalBooking({ bookingUrl }: CalBookingProps) {
  const embedUrl = buildEmbedUrl(bookingUrl);
  const isConfigured = !bookingUrl.includes("YOUR-CAL-USERNAME");

  return (
    <div className="overflow-hidden rounded-lg border border-[var(--line)] bg-[rgba(246,241,234,0.045)]">
      <div className="border-b border-[var(--line)] p-4">
        <h4 className="text-base font-semibold text-[var(--cream-soft)]">Book a workflow audit</h4>
        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
          Choose a time directly. If none of the available slots work, send the workflow details below.
        </p>
      </div>
      {isConfigured ? (
        <iframe
          className="h-[520px] w-full bg-[var(--cream-soft)] md:h-[560px]"
          loading="lazy"
          src={embedUrl}
          title="Book a free workflow audit with Rampa Labs"
        />
      ) : (
        <div className="grid min-h-64 place-items-center p-6 text-center">
          <div className="max-w-sm">
            <p className="text-sm font-semibold text-[var(--cream-soft)]">Cal.com link not configured yet.</p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Set <code className="text-[var(--cream-soft)]">NEXT_PUBLIC_BOOKING_URL</code> to your Cal.com event URL to enable the embedded calendar.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function buildEmbedUrl(bookingUrl: string) {
  try {
    const url = new URL(bookingUrl);
    url.searchParams.set("embed", "true");
    url.searchParams.set("theme", "dark");
    return url.toString();
  } catch {
    return bookingUrl;
  }
}

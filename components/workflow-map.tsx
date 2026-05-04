const nodes = [
  ["Inputs", "Exports, sheets, inboxes"],
  ["Reporting", "Margin, stock, cash flow"],
  ["Workflows", "Tasks, documents, routing"],
  ["Alerts", "Risks before they drift"],
  ["Decisions", "Clear weekly operating view"],
];

export function WorkflowMap() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-[var(--line)] bg-[linear-gradient(145deg,rgba(13,31,47,0.96),rgba(7,19,31,0.98))] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.24)] md:p-7">
      <div className="absolute right-0 top-0 h-44 w-44 -translate-y-1/3 translate-x-1/3 rounded-full bg-[rgba(47,109,246,0.18)] blur-3xl" aria-hidden="true" />
      <div className="relative">
        <div className="mb-8 flex items-center justify-between border-b border-[var(--line)] pb-5">
          <p className="text-sm font-semibold text-[var(--cream-soft)]">Operations system</p>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">Live layer</p>
        </div>

        <div className="grid gap-3">
          {nodes.map(([title, copy], index) => (
            <div className="relative" key={title}>
              <div className="grid grid-cols-[2.25rem_1fr] items-center gap-4 rounded-md border border-[var(--line)] bg-[rgba(246,241,234,0.045)] p-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-[rgba(246,241,234,0.18)] bg-[rgba(47,109,246,0.14)] text-[var(--accent)]">
                  <NodeIcon index={index} />
                </span>
                <div>
                  <h2 className="text-base font-semibold text-[var(--cream-soft)]">{title}</h2>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{copy}</p>
                </div>
              </div>
              {index < nodes.length - 1 ? (
                <div className="ml-[2.1rem] h-4 w-px bg-[rgba(246,241,234,0.2)]" aria-hidden="true" />
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-md border border-[rgba(47,109,246,0.28)] bg-[rgba(47,109,246,0.12)] p-4">
          <p className="text-sm font-semibold text-[var(--cream-soft)]">Manual work becomes operating signal.</p>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            Fewer disconnected updates, clearer reporting, faster action.
          </p>
        </div>
      </div>
    </div>
  );
}

function NodeIcon({ index }: { index: number }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
  };

  const icons = [
    <path key="inputs" d="M5 7h14M5 12h9M5 17h11" {...common} />,
    <path key="reporting" d="M5 18V9m5 9V6m5 12v-5m5 5V4" {...common} />,
    <path key="workflows" d="M6 7h5v5H6zM13 15h5v5h-5zM11 9h4a3 3 0 0 1 3 3v3" {...common} />,
    <path key="alerts" d="M12 5 4.5 18h15L12 5Zm0 5v3m0 3h.01" {...common} />,
    <path key="decisions" d="M5 13l4 4L19 7" {...common} />,
  ];

  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
      {icons[index]}
    </svg>
  );
}

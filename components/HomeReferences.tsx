const LOGOS = [
  "KAWA",
  "Studio Nova",
  "Apex Group",
  "Lumina",
  "Vertigo",
  "Horizon",
];

export function HomeReferences() {
  return (
    <section className="border-b border-black/5 bg-marketing-surface-0 py-10">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-8">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.18em] text-marketing-foreground-2">
          Ils nous font confiance
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {LOGOS.map((name) => (
            <span
              key={name}
              className="text-sm font-semibold tracking-wide text-black"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

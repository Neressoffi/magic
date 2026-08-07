import { approachBenefits } from "@/lib/approche-data";

export function ApprocheBenefices() {
  return (
    <section className="bg-marketing-surface-0 px-4 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-screen-2xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-marketing-foreground-2">
            Ce que cette approche apporte
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-marketing-foreground-0 lg:text-5xl">
            Une réponse plus juste, pas une réponse plus compliquée
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {approachBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2lg border border-black/5 bg-marketing-surface-1 p-6"
            >
              <h3 className="font-display text-xl font-bold text-marketing-foreground-0">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-marketing-foreground-2">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

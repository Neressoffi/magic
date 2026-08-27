const LOGOS = [
  { name: "KAWA", src: "/references/kawa.png" },
  { name: "THE VISION", src: "/references/the-vision.png" },
  { name: "7G Services", src: "/references/7g-services.png" },
  { name: "BRIRENA HAIR", src: "/references/brirena-hair.png" },
  { name: "Perfecta", src: "/references/perfecta.png" },
];

export function HomeReferences() {
  return (
    <section className="border-b border-white/10 bg-black py-10">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-8">
        <p className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60 sm:text-xs">
          Ils nous font confiance
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12">
          {LOGOS.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="h-12 w-auto max-w-[110px] object-contain sm:h-14 sm:max-w-[130px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

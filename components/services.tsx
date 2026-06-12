import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";

// Order matches dict.services.items: mowing, edging, trimming
const photos = ["/images/yard1.jpg", "/images/yard2.jpg", "/images/yard3.jpg"];

export default function Services({ dict }: { dict: Dictionary }) {
  return (
    <section id="services" className="relative scroll-mt-24 bg-white">
      {/* light band behind the lower half of the cards */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[55%] bg-stone"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <h2 className="text-center font-display text-3xl font-extrabold uppercase tracking-tight text-fern sm:text-4xl">
          {dict.services.title}
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {dict.services.items.map((item, i) => (
            <article key={item.title} className="text-center">
              <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden shadow-md shadow-deep/10">
                <Image
                  src={photos[i]}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-fern">
                {item.title}
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-[15px] leading-relaxed text-ink/70">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

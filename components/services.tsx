import { PencilRuler, Scissors, Tractor } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";

// Order matches dict.services.items: mowing, edging, trimming
const icons = [Tractor, PencilRuler, Scissors];

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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {dict.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <article
                key={item.title}
                className="group border border-stone bg-white px-8 py-10 text-center shadow-md shadow-deep/5 transition-all duration-300 hover:-translate-y-1 hover:border-fern/30 hover:shadow-lg hover:shadow-fern/10"
              >
                <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-mint text-fern transition-colors duration-300 group-hover:bg-fern group-hover:text-white">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-fern">
                  {item.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-[15px] leading-relaxed text-ink/70">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

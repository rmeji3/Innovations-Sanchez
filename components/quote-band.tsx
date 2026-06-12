import { Quote } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";
import { business } from "@/lib/business";

export default function QuoteBand({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative bg-fern">
      <div className="mx-auto max-w-4xl px-4 pb-20 pt-16 text-center sm:px-6 lg:pb-24 lg:pt-20">
        <Quote
          aria-hidden="true"
          className="mx-auto h-8 w-8 rotate-180 text-mint"
        />
        <p className="mt-6 font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
          {dict.quote.text}
        </p>
        <p className="mt-4 text-sm font-semibold tracking-wide text-mint">
          {dict.quote.attribution}
        </p>
      </div>
      <div className="absolute bottom-0 right-0">
        <a
          href={business.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-pine px-6 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-white transition-colors duration-200 hover:bg-deep"
        >
          {dict.quote.button}
        </a>
      </div>
    </section>
  );
}

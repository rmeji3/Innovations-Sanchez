import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";
import { business } from "@/lib/business";

function IllinoisLocal({ word, stateAlt }: { word: string; stateAlt: string }) {
  return (
    <div className="relative mx-auto w-fit" role="img" aria-label={stateAlt}>
      <svg
        viewBox="0 0 100 150"
        aria-hidden="true"
        className="h-64 w-auto fill-moss sm:h-80"
      >
        {/* simplified Illinois silhouette */}
        <path d="M14,10 L62,8 L66,16 L60,22 L64,40 L68,62 L66,80 L62,96 L54,112 L48,124 L40,136 L34,130 L28,118 L20,106 L16,92 L20,78 L12,62 L16,44 L10,28 Z" />
        {/* star on Chicagoland */}
        <polygon
          points="56,12 57.8,16.2 62.4,16.5 58.9,19.4 60.2,23.8 56,21.2 51.8,23.8 53.1,19.4 49.6,16.5 54.2,16.2"
          className="fill-white"
        />
      </svg>
      <span
        aria-hidden="true"
        className="absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2 font-display text-6xl font-extrabold tracking-tight text-deep sm:text-7xl"
      >
        {word}
      </span>
    </div>
  );
}

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="scroll-mt-24 bg-white">
      {/* Business intro — owner-card style */}
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="relative mx-auto w-full max-w-md">
          {/* diagonal striped ribbon accent */}
          <div
            aria-hidden="true"
            className="absolute -left-5 -top-5 bottom-10 w-10 bg-[repeating-linear-gradient(45deg,var(--color-fern)_0_8px,transparent_8px_16px)]"
          />
          <Image
            src="/images/pic1.png"
            alt={dict.about.imageAlt}
            width={512}
            height={512}
            className="relative shadow-lg shadow-deep/10"
          />
        </div>

        <div>
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-fern sm:text-4xl">
            {dict.about.name}
          </h2>
          <p className="mt-2 font-display text-sm font-bold text-ink/55">
            {dict.about.role}
          </p>
          <p className="mt-6 leading-relaxed text-ink/75">{dict.about.p1}</p>
          <p className="mt-4 leading-relaxed text-ink/75">{dict.about.p2}</p>
          <a
            href={`mailto:${business.email}`}
            className="mt-8 inline-flex items-center justify-center border-2 border-fern px-6 py-3 font-display text-sm font-bold tracking-wide text-fern transition-colors duration-200 hover:bg-fern hover:text-white"
          >
            {dict.about.button}
          </a>
        </div>
      </div>

      {/* More than just lawns + LOCAL */}
      <div className="bg-stone">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <h2 className="font-display text-3xl font-bold text-deep sm:text-4xl">
              {dict.local.title}
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-ink/75">
              {dict.local.body}
            </p>
          </div>
          <IllinoisLocal word={dict.local.word} stateAlt={dict.local.stateAlt} />
        </div>
      </div>
    </section>
  );
}

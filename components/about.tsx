import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";
import { business } from "@/lib/business";

function IllinoisLocal({ word, stateAlt }: { word: string; stateAlt: string }) {
  return (
    <div className="relative mx-auto w-fit" role="img" aria-label={stateAlt}>
      <Image
        src="/images/illinois.svg"
        alt=""
        width={345}
        height={616}
        className="h-72 w-auto sm:h-96"
      />
      {/* star on Chicagoland */}
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="absolute right-[4%] top-[5%] h-7 w-7 fill-white sm:h-8 sm:w-8"
      >
        <polygon points="12,1 14.9,8.6 23,9 16.7,14.2 18.9,22 12,17.5 5.1,22 7.3,14.2 1,9 9.1,8.6" />
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

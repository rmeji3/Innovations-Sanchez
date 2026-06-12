import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";
import { business } from "@/lib/business";

export default function CtaBand({ dict }: { dict: Dictionary }) {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden">
      <Image
        src="/images/yard3.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-deep/80" />

      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:py-24">
        <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
          {dict.cta.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
          {dict.cta.subtitle}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${business.phone}`}
            className="inline-flex w-full items-center justify-center border-2 border-white bg-white px-6 py-3 font-display text-sm font-bold tracking-wide text-deep transition-colors duration-200 hover:bg-transparent hover:text-white sm:w-auto"
          >
            {business.phoneDisplay}
          </a>
          <a
            href={`mailto:${business.email}`}
            className="inline-flex w-full items-center justify-center border-2 border-white px-6 py-3 font-display text-sm font-bold tracking-wide text-white transition-colors duration-200 hover:bg-white hover:text-deep sm:w-auto"
          >
            {dict.cta.button}
          </a>
        </div>
      </div>
    </section>
  );
}

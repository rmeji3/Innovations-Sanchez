import { Phone } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";
import { business } from "@/lib/business";

const MAP_SRC =
  "https://maps.google.com/maps?q=Harvey%2C+IL&z=11&output=embed";

export default function ServiceArea({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-fern sm:text-4xl">
            {dict.area.title}
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-ink/75">
            {dict.area.body}
          </p>
          <a
            href={`tel:${business.phone}`}
            className="mt-8 inline-flex items-center justify-center gap-2 border-2 border-fern px-6 py-3 font-display text-sm font-bold tracking-wide text-fern transition-colors duration-200 hover:bg-fern hover:text-white"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {business.phoneDisplay}
          </a>
        </div>

        <div className="relative border border-stone shadow-lg shadow-deep/10">
          <iframe
            src={MAP_SRC}
            title={dict.area.mapTitle}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="block h-80 w-full sm:h-96"
          />
        </div>
      </div>
    </section>
  );
}

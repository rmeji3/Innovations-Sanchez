import type { Dictionary } from "@/lib/dictionaries";
import { business } from "@/lib/business";
import PhotoCarousel from "./photo-carousel";

const photos = ["/images/yard1.jpg", "/images/yard2.jpg", "/images/yard3.jpg"];

function StampBadge() {
  return (
    <svg
      viewBox="0 0 140 140"
      aria-hidden="true"
      className="h-32 w-32 text-white drop-shadow-md sm:h-40 sm:w-40"
    >
      <defs>
        <path
          id="stamp-arc"
          d="M70,70 m-49,0 a49,49 0 1,1 98,0 a49,49 0 1,1 -98,0"
        />
      </defs>
      <circle
        cx="70"
        cy="70"
        r="66"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle
        cx="70"
        cy="70"
        r="38"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <text
        fill="currentColor"
        fontSize="10"
        fontWeight="700"
        letterSpacing="2.5"
        fontFamily="var(--font-montserrat), sans-serif"
      >
        <textPath href="#stamp-arc" startOffset="0">
          SANCHEZ INNOVATIONS · LAWN CARE ·
        </textPath>
      </text>
      {/* grass tuft */}
      <g
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M70 88 C 70 76, 70 68, 70 58" />
        <path d="M62 88 C 62 78, 58 70, 52 64" />
        <path d="M78 88 C 78 78, 82 70, 88 64" />
        <path d="M55 88 C 55 82, 50 78, 44 76" />
        <path d="M85 88 C 85 82, 90 78, 96 76" />
      </g>
    </svg>
  );
}

export default function Hero({ dict }: { dict: Dictionary }) {
  const slides = photos.map((src, i) => ({
    src,
    alt: dict.hero.slides[i] ?? "",
  }));

  return (
    <section id="top" className="bg-white pt-20">
      <div className="relative lg:min-h-[620px]">
        {/* Photo side — diagonal clip on desktop */}
        <div className="relative h-80 sm:h-[420px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[60%] lg:[clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)]">
          <PhotoCarousel
            slides={slides}
            label={dict.hero.carouselLabel}
            goToLabel={dict.hero.carouselGoTo}
          />
          <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/4 lg:block">
            <StampBadge />
          </div>
        </div>

        {/* Text side */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:w-full">
          <div className="py-14 lg:flex lg:min-h-[620px] lg:max-w-[44%] lg:flex-col lg:justify-center lg:py-24">
            <h1 className="font-display text-5xl font-extrabold uppercase leading-[1.02] tracking-tight text-fern sm:text-6xl lg:text-[4.2rem]">
              {dict.hero.title1}
              <br />
              {dict.hero.title2}
            </h1>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-ink/75">
              {dict.hero.subtitle}
            </p>
            <div className="mt-9">
              <a
                href={`tel:${business.phone}`}
                className="inline-flex items-center justify-center border-2 border-fern px-6 py-3 font-display text-sm font-bold tracking-wide text-fern transition-colors duration-200 hover:bg-fern hover:text-white"
              >
                {dict.hero.cta}
              </a>
            </div>
            <p className="mt-5 text-sm font-semibold text-ink/50">
              {business.phoneDisplay} · {business.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

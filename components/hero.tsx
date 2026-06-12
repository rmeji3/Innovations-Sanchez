import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries";
import { business } from "@/lib/business";
import PhotoCarousel from "./photo-carousel";

const photos = ["/images/yard1.jpg", "/images/yard2.jpg", "/images/yard3.jpg"];

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
          <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/4 rounded-full bg-white/90 p-4 shadow-lg shadow-deep/20 lg:block">
            <Image
              src="/images/logo.png"
              alt=""
              width={112}
              height={112}
              className="h-28 w-28"
            />
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

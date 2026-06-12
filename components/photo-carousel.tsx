"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type Slide = { src: string; alt: string };

type Props = {
  slides: Slide[];
  label: string;
  goToLabel: string;
};

const AUTOPLAY_MS = 5000;

export default function PhotoCarousel({ slides, label, goToLabel }: Props) {
  const [index, setIndex] = useState(0);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  const goTo = useCallback(
    (next: number) => setIndex((next + slides.length) % slides.length),
    [slides.length]
  );

  useEffect(() => {
    if (reducedMotion.current || slides.length < 2) return;
    const id = setInterval(() => goTo(index + 1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [index, goTo, slides.length]);

  return (
    <section
      aria-label={label}
      aria-roledescription="carousel"
      className="absolute inset-0"
    >
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={i === index ? slide.alt : ""}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          priority={i === 0}
          aria-hidden={i !== index}
          className={`object-cover transition-opacity duration-700 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {slides.length > 1 && (
        <div className="absolute bottom-5 right-6 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`${goToLabel} ${i + 1}`}
              aria-current={i === index}
              className="flex h-6 w-6 cursor-pointer items-center justify-center"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === index ? "h-2.5 w-6 bg-white" : "h-2.5 w-2.5 bg-white/60"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

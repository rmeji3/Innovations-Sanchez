import { Facebook, Mail, Phone } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";
import { business } from "@/lib/business";

export default function Footer({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-deep text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <div className="flex items-center gap-5">
          <a
            href={`tel:${business.phone}`}
            aria-label={dict.footer.phoneLabel}
            className="text-white/75 transition-colors duration-200 hover:text-white"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${business.email}`}
            aria-label={dict.footer.emailLabel}
            className="text-white/75 transition-colors duration-200 hover:text-white"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={business.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={dict.footer.facebookLabel}
            className="text-white/75 transition-colors duration-200 hover:text-white"
          >
            <Facebook className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
        <p className="text-sm text-white/60">
          © {year} Leal Enterprises. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}

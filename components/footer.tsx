import { Facebook, Mail, Phone } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";
import { business } from "@/lib/business";

export default function Footer({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-deep text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-4 py-8 sm:px-6">
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
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <a
            href="https://rafaelmejia.me"
            className="transition-colors duration-200 hover:text-white"
          >
            © {year} Rafael Mejia. {dict.footer.rights}
          </a>
          <p>
            Want a website like this?{" "}
            <a href="https://rafaelmejia.me" className="text-white underline transition-colors hover:text-white/80">
              Contact me
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

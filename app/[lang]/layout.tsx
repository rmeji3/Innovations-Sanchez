import type { Metadata } from "next";
import { Montserrat, Nunito_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { locales, isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    icons: { icon: "/images/logo.png" },
    alternates: {
      languages: { en: "/en", es: "/es" },
    },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang as Locale}>
      <body
        className={`${montserrat.variable} ${nunitoSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

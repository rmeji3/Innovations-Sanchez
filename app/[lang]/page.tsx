import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import LocalBusinessJsonLd from "@/components/local-business-jsonld";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import About from "@/components/about";
import ServiceArea from "@/components/service-area";
import QuoteBand from "@/components/quote-band";
import CtaBand from "@/components/cta-band";
import Footer from "@/components/footer";

type Props = { params: Promise<{ lang: string }> };

export default async function Home({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <LocalBusinessJsonLd dict={dict} lang={lang} />
      <Navbar dict={dict} lang={lang} />
      <main id="main">
        <Hero dict={dict} />
        <Services dict={dict} />
        <About dict={dict} />
        <QuoteBand dict={dict} />
        <ServiceArea dict={dict} />
        <CtaBand dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}

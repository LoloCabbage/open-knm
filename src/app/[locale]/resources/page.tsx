import { UnderConstruction } from "@/components/UnderConstruction";
import { Locale, uiTexts, isLocale } from "@/lib/uiTexts";
import { notFound } from "next/navigation";

export default async function ResourcesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  
  if (!isLocale(locale)) {
    notFound();
  }
  
  const title = uiTexts[locale].nav.resources;

  return (
    <UnderConstruction locale={locale} title={title} />
  );
}

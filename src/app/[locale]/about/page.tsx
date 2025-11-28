import { UnderConstruction } from "@/components/UnderConstruction";
import { Locale, uiTexts } from "@/lib/uiTexts";

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const title = uiTexts[locale].nav.about;

  return (
    <UnderConstruction locale={locale} title={title} />
  );
}

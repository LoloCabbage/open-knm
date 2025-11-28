import { UnderConstruction } from "@/components/UnderConstruction";
import { Locale, uiTexts } from "@/lib/uiTexts";

export default async function ResourcesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const title = uiTexts[locale].nav.resources;

  return (
    <UnderConstruction locale={locale} title={title} />
  );
}

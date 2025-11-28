import { UnderConstruction } from "@/components/UnderConstruction";
import { Locale, uiTexts } from "@/lib/uiTexts";

export default async function LifePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const title = uiTexts[locale].nav.life;

  return (
    <div className="space-y-8">
        <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-amber-800 text-sm">
            {locale === 'zh' ? '注：生活指南内容正在重构中，目前专注于 KNM 考试核心内容。' : 'Note: Life Guide content is being restructured to focus on KNM exam core content.'}
        </div>
        <UnderConstruction locale={locale} title={title} />
    </div>
  );
}

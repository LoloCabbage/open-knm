import { Locale } from "@/lib/i18n";
import { getArticlesByCategory } from "@/lib/articles";
import { ArticleList } from "@/components/ArticleList";

export default async function KnmPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const isZh = locale === "zh";
  const articles = getArticlesByCategory("knm");

  return (
    <div className="space-y-8">
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          {isZh ? 'KNM 考试专区' : 'KNM Exam Zone'}
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          {isZh 
            ? '这里汇集了 Kennis van de Nederlandse Maatschappij (KNM) 考试的核心考点。从历史、地理到法律与医疗，我们用双语为你拆解每一个必考话题。'
            : 'The core topics for the Kennis van de Nederlandse Maatschappij (KNM) exam. From history and geography to law and healthcare, we explain every essential topic bilingually.'}
        </p>
      </div>

      <ArticleList articles={articles} locale={locale} />
    </div>
  );
}

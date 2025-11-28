import { Locale } from "@/lib/i18n";
import { getArticlesByCategory } from "@/lib/articles";
import { ArticleList } from "@/components/ArticleList";

export default async function SocietyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const isZh = locale === "zh";
  const articles = getArticlesByCategory("society");

  return (
    <div className="space-y-8">
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          {isZh ? '荷兰社会与文化' : 'Dutch Society & Culture'}
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          {isZh 
            ? '理解荷兰人的思维方式。超越考试大纲，探索这个国家的价值观、传统与社会潜规则。'
            : 'Understand the Dutch mindset. Going beyond the exam syllabus to explore values, traditions, and unwritten social rules.'}
        </p>
      </div>

      <ArticleList articles={articles} locale={locale} />
    </div>
  );
}

import Link from "next/link";
import { Article } from "@/lib/articles";
import { Locale } from "@/lib/uiTexts";

export function ArticleList({ articles, locale }: { articles: Article[]; locale: Locale }) {
  const isZh = locale === "zh";

  if (articles.length === 0) {
    return (
      <div className="text-center py-10 text-slate-500">
        {isZh ? "暂无内容" : "No content available yet"}
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <Link
          key={article.slug}
          href={`/${locale}/articles/${article.slug}`}
          className="group block h-full bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
        >
          <div className="flex flex-col h-full">
            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-wider group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[var(--primary)] transition-colors line-clamp-2">
              {article.titles[locale]}
            </h3>

            <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-4 flex-1">
              {article.descriptions[locale]}
            </p>

            <div className="flex items-center text-xs font-semibold text-[var(--primary)] mt-auto opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
              {isZh ? "阅读更多" : "Read More"} <span className="ml-1">→</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}


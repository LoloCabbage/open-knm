export type Category = "society" | "life" | "knm";

import { Locale } from "./uiTexts";

export type Article = {
  slug: string;
  category: Category;
  titles: Record<Locale, string>;
  descriptions: Record<Locale, string>;
  featured?: boolean;
  tags?: string[];
};

const titleFor = (zh: string, en: string) => ({ zh, en });
const descFor = (zh: string, en: string) => ({ zh, en });

export const articles: Article[] = [
  // --- KNM: History & Geography ---
  {
    slug: "knm-history-william-of-orange",
    category: "knm",
    titles: titleFor(
      "荷兰历史：威廉·奥兰治与八十年战争",
      "History: William of Orange & 80 Years' War"
    ),
    descriptions: descFor(
      "了解荷兰国父威廉·奥兰治（Willem van Oranje）以及荷兰独立的起源。",
      "Learn about the Father of the Nation and the origins of Dutch independence."
    ),
    tags: ["History", "Geography"],
  },
  {
    slug: "knm-geography-water-management",
    category: "knm",
    titles: titleFor(
      "荷兰地理：与水共存的历史",
      "Geography: Living with Water"
    ),
    descriptions: descFor(
      "低于海平面的国家如何生存？了解围海造田（Polder）与三角洲工程（Deltawerken）。",
      "How does a country below sea level survive? Polders and Delta Works."
    ),
    tags: ["Geography"],
  },

  // --- KNM: Politics & Law ---
  {
    slug: "knm-politics-democracy",
    category: "knm",
    titles: titleFor(
      "政治制度：议会民主与君主立宪",
      "Politics: Parliamentary Democracy"
    ),
    descriptions: descFor(
      "荷兰的国王管什么？首相怎么选出来的？第二议院（Tweede Kamer）是做什么的？",
      "Role of the King, Prime Minister, and the House of Representatives (Tweede Kamer)."
    ),
    tags: ["Politics", "Law"],
  },
  {
    slug: "knm-law-constitution",
    category: "knm",
    titles: titleFor(
      "基本法：荷兰宪法第一条",
      "Law: Article 1 of the Constitution"
    ),
    descriptions: descFor(
      "“在荷兰，所有人在同等情况下应受到同等对待。”了解反歧视法的核心。",
      "Treating everyone equally. Understanding the core of anti-discrimination laws."
    ),
    tags: ["Law"],
  },

  // --- KNM: Health & Education ---
  {
    slug: "knm-education-system",
    category: "knm",
    titles: titleFor(
      "教育体系：从小学到大学的分流",
      "Education: The School System"
    ),
    descriptions: descFor(
      "Basisschool 之后发生了什么？VMBO, HAVO, VWO 到底有什么区别？",
      "What happens after primary school? Differences between VMBO, HAVO, and VWO."
    ),
    tags: ["Education"],
  },
  {
    slug: "knm-health-huisarts",
    category: "knm",
    titles: titleFor(
      "医疗系统：家庭医生（Huisarts）的角色",
      "Healthcare: The General Practitioner (Huisarts)"
    ),
    descriptions: descFor(
      "为什么看专科医生必须先过家庭医生这一关？",
      "Why you must see a GP before a specialist in the Netherlands."
    ),
    tags: ["Health"],
  },

  // --- KNM: Work & Income ---
  {
    slug: "knm-work-contracts",
    category: "knm",
    titles: titleFor(
      "工作与收入：合同类型与试用期",
      "Work: Contracts & Probation"
    ),
    descriptions: descFor(
      "永久合同与临时合同的区别，以及解雇保护的基本知识。",
      "Permanent vs temporary contracts, and basic dismissal protection."
    ),
    tags: ["Work"],
  },

  // --- Society (Broader Context) ---
  {
    slug: "society-norms-values",
    category: "society",
    titles: titleFor(
      "社会价值观：直言不讳与协商文化",
      "Values: Directness & Poldermodel"
    ),
    descriptions: descFor(
      "为什么荷兰人说话这么直？什么是“协商模型”（Poldermodel）？",
      "Why are Dutch people so direct? What is the 'Poldermodel'?"
    ),
    tags: ["Culture"],
  },
];

export function getArticlesByCategory(category: Category): Article[] {
  return articles.filter((article) => article.category === category);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

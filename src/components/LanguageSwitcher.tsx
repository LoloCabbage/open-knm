"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/lib/i18n";

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();

  // Helper to generate the path for a specific locale
  const getLocalePath = (targetLocale: Locale) => {
    if (!pathname) return `/${targetLocale}`;
    
    const segments = pathname.split("/").filter(Boolean);
    // Check if the first segment is a locale
    if (segments.length > 0 && (segments[0] === "zh" || segments[0] === "en")) {
      segments[0] = targetLocale;
      return "/" + segments.join("/");
    }
    
    // If no locale prefix (e.g. root), prepend it
    return `/${targetLocale}${pathname === "/" ? "" : pathname}`;
  };

  const isZh = currentLocale === "zh";

  return (
    <div className="inline-flex items-center rounded-full bg-slate-100 p-1 ring-1 ring-slate-200/50">
      {/* Chinese Option */}
      <Link
        href={getLocalePath("zh")}
        className={`
          relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-all duration-200
          ${isZh 
            ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200" 
            : "text-slate-500 hover:text-slate-900 hover:bg-slate-200/50"}
        `}
        aria-current={isZh ? "page" : undefined}
      >
        <div className="h-4 w-4 overflow-hidden rounded-full shadow-sm ring-1 ring-slate-900/10">
            <svg viewBox="0 0 32 32" className="h-full w-full object-cover">
                <rect width="32" height="32" fill="#DE2910"/>
                <path fill="#FFDE00" d="M5.3 2.3l1.3 4.1h4.3l-3.5 2.5 1.3 4.1-3.5-2.5-3.5 2.5 1.3-4.1-3.5-2.5h4.3z"/>
                <path fill="#FFDE00" d="M10.6 6.7l.6 1.8h1.9l-1.5 1.1.6 1.8-1.5-1.1-1.5 1.1.6-1.8-1.5-1.1h1.9zM12.4 9.9l.6 1.8h1.9l-1.5 1.1.6 1.8-1.5-1.1-1.5 1.1.6-1.8-1.5-1.1h1.9zM12.4 14.2l.6 1.8h1.9l-1.5 1.1.6 1.8-1.5-1.1-1.5 1.1.6-1.8-1.5-1.1h1.9zM10.6 17.4l.6 1.8h1.9l-1.5 1.1.6 1.8-1.5-1.1-1.5 1.1.6-1.8-1.5-1.1h1.9z" transform="translate(0 -2) scale(0.6)"/>
            </svg>
        </div>
        <span>中文</span>
      </Link>

      {/* English Option */}
      <Link
        href={getLocalePath("en")}
        className={`
          relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-all duration-200
          ${!isZh 
            ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200" 
            : "text-slate-500 hover:text-slate-900 hover:bg-slate-200/50"}
        `}
        aria-current={!isZh ? "page" : undefined}
      >
        <div className="h-4 w-4 overflow-hidden rounded-full shadow-sm ring-1 ring-slate-900/10">
             <svg viewBox="0 0 60 30" className="h-full w-full object-cover">
                <clipPath id="t">
                <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
                </clipPath>
                <path d="M0,0 v30 h60 v-30 z" fill="#00247d"/>
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#cf142b" strokeWidth="4"/>
                <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                <path d="M30,0 v30 M0,15 h60" stroke="#cf142b" strokeWidth="6"/>
            </svg>
        </div>
        <span>EN</span>
      </Link>
    </div>
  );
}

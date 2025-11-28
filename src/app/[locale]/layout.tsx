import type { Metadata } from "next";
import "../globals.css";
import { locales, Locale } from "@/lib/i18n";
import { SiteLayout } from "@/components/SiteLayout";

export const metadata: Metadata = {
  title: "Open KNM - Dutch Society & Life Guide",
  description: "Bilingual guide for living in the Netherlands and passing the KNM exam.",
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  // Validate locale or default to 'zh' if somehow invalid (though generateStaticParams prevents this for static export)
  const validLocale = (locales.includes(locale as Locale) ? locale : 'zh') as Locale;

  return (
    <html lang={validLocale}>
      <body className="antialiased min-h-screen flex flex-col">
        <SiteLayout locale={validLocale}>
          {children}
        </SiteLayout>
      </body>
    </html>
  );
}

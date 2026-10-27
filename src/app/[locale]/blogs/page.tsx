import "./BlogPage.scss";
import { Metadata } from "next";
import BlogHero from "@/components/Blogs/BlogHero/BlogHero";
import ArticlesGrid from "@/components/Blogs/ArticlesGrid/ArticlesGrid";
import CategoriesWidget from "@/components/Blogs/CategoriesWidget/CategoriesWidget";
import NewsletterWidget from "@/components/Blogs/NewsletterWidget/NewsletterWidget";
import BlogCTA from "@/components/Blogs/BlogCTA/BlogCTA";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

async function getArticles(
  lang: string,
  page = 1,
  perPage = 10,
  catId?: number,
) {
  const params = new URLSearchParams({
    page: String(page),
    per_page: String(perPage),
    lang,
  });
  if (catId) params.set("cat_id", String(catId));

  const res = await fetch(`${API_BASE}/articles?${params.toString()}`);

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const json = await res.json();
  return json.data;
}

async function getCategories(lang: string, page = 1, perPage = 10) {
  const params = new URLSearchParams({
    page: String(page),
    per_page: String(perPage),
    lang,
  });

  const res = await fetch(
    `${API_BASE}/articles/categories?${params.toString()}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const json = await res.json();
  return json.data;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = ["ar", "en", "ru", "fr", "es"].includes(locale)
    ? locale
    : "ar";

  const content: Record<
    string,
    {
      siteName: string;
      title: string;
      description: string;
      keywords: string;
      ogLocale: string;
    }
  > = {
    ar: {
      siteName: "رضوان لخدمات نقل الموتى",
      title: "المدونة والأخبار | إرشادات ونصائح نقل وتجهيز الموتى دولياً",
      description:
        "اقرأ أحدث المقالات والإرشادات الشاملة حول إجراءات نقل الموتى بين الدول، تكاليف الشحن الجوي، وتخليص الأوراق الرسمية بوقار واحترافية.",
      keywords:
        "مدونة رضوان, أخبار نقل الموتى, إجراءات الشحن الجوي للجثامين, تصاريح السفارات, نقل الموتى دولياً",
      ogLocale: "ar_EG",
    },
    en: {
      siteName: "Radwan Funeral Services",
      title: "Blog & News | International Deceased Repatriation Guide",
      description:
        "Explore the latest articles and comprehensive guides on deceased repatriation procedures, embassy permits, and international transport logistics.",
      keywords:
        "Radwan blog, repatriation news, funeral transport guide, body shipping permits, international repatriation",
      ogLocale: "en_US",
    },
    ru: {
      siteName: "Ритуальные услуги Радван",
      title: "Блог и Новости | Руководство по международной репатриации",
      description:
        "Читайте последние статьи и руководства по процедурам репатриации усопших, оформлению документов и транспортировке.",
      keywords:
        "блог Радван, новости репатриации, руководство по ритуальным услугам, транспортировка усопших",
      ogLocale: "ru_RU",
    },
    fr: {
      siteName: "Services Funéraires Radwan",
      title: "Blog & Actualités | Guide de Rapatriement International",
      description:
        "Lisez nos derniers articles et guides complets sur les procédures de rapatriement de défunts, les démarches consulaires et la logistique.",
      keywords:
        "blog Radwan, actualités rapatriement, guide transport funéraire, démarches consulaires",
      ogLocale: "fr_FR",
    },
    es: {
      siteName: "Servicios Funerarios Radwan",
      title: "Blog y Noticias | Guía de Repatriación Internacional",
      description:
        "Lea los últimos artículos y guías detalladas sobre trámites de repatriación de fallecidos, permisos consulares y logística internacional.",
      keywords:
        "blog Radwan, noticias de repatriación, guía de traslado funerario, trámites consulares",
      ogLocale: "es_ES",
    },
  };

  const data = content[currentLocale];
  const baseUrl = "https://radwanfs.com";

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,

    openGraph: {
      title: data.title,
      description: data.description,
      url: `${baseUrl}/${currentLocale}/blog`,
      siteName: data.siteName,
      locale: data.ogLocale,
      type: "website",
    },

    alternates: {
      languages: {
        ar: "/ar/blogs",
        en: "/en/blogs",
        ru: "/ru/blogs",
        fr: "/fr/blogs",
        es: "/es/blogs",
      },
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string; cat_id?: string }>;
}) {
  const { locale } = await params;
  const { page, cat_id } = await searchParams;

  const currentLocale = ["ar", "en", "ru", "fr", "es"].includes(locale)
    ? locale
    : "ar";

  const currentPage = Number(page) || 1;
  const catId = cat_id ? Number(cat_id) : undefined;

  const [articlesData, categoriesData] = await Promise.all([
    getArticles(currentLocale, currentPage, 10, catId),
    getCategories(currentLocale, 1, 10),
  ]);

  return (
    <main className="blog-page-wrapper">
      <BlogHero />
      <section className="blog-content-section">
        <div className="container blog-layout-grid">
          <div className="main-articles-area" id="articles-section">
            <ArticlesGrid
              articles={articlesData.blogs}
              pagination={articlesData.pagination}
              locale={currentLocale}
            />
          </div>
          <aside className="blog-sidebar">
            <CategoriesWidget
              categories={categoriesData.blogs}
              locale={currentLocale}
              activeCatId={catId}
            />
            <NewsletterWidget />
          </aside>
        </div>
      </section>
      <BlogCTA />
    </main>
  );
}

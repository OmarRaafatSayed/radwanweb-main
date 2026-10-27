import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { Calendar, ChevronLeft, ChevronRight, PhoneCall } from "lucide-react";
import "./BlogDetail.scss";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

interface BlogDetailSection {
  id: number;
  title: string;
  content: string;
  sort_order: number;
}

interface BlogDetailData {
  ID: number;
  name: string;
  description: string;
  created_date: string;
  image: string | null;
  image_alt: string | null;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  code: string;
  Blogdetails: BlogDetailSection[];
}

interface RelatedBlog {
  ID: number;
  name: string;
  description: string;
  created_date: string;
  image: string | null;
  code: string;
}

interface BlogShowResponse {
  status: boolean;
  message: string;
  data: {
    blog: BlogDetailData[];
    related_blogs: RelatedBlog[];
  };
}

async function getBlog(id: string, lang: string) {
  const res = await fetch(`${API_BASE}/articles/show/${id}?lang=${lang}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog");
  }

  const json: BlogShowResponse = await res.json();
  return json.data;
}

interface Props {
  params: Promise<{ locale: string; id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;

  const currentLocale = ["ar", "en", "ru", "fr", "es"].includes(locale)
    ? locale
    : "ar";

  const { blog } = await getBlog(id, currentLocale);
  const post = blog[0];
  if (!post) return {};

  const baseUrl = "https://radwanfs.com";

  return {
    title: post.meta_title || `${post.name} | رضوان لنقل الجثامين`,
    description: post.meta_description || post.description,
    keywords: post.meta_keywords || undefined,
    openGraph: {
      title: post.meta_title || post.name,
      description: post.meta_description || post.description,
      url: `${baseUrl}/${currentLocale}/blog/${id}`,
      siteName: "Radwan Funeral Services",
      type: "article",
      images: [
        {
          url: post.image || "/images/image-default.png",
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      languages: {
        ar: `/ar/blog/${id}`,
        en: `/en/blog/${id}`,
        ru: `/ru/blog/${id}`,
        fr: `/fr/blog/${id}`,
        es: `/es/blog/${id}`,
      },
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { locale, id } = await params;

  const currentLocale = ["ar", "en", "ru", "fr", "es"].includes(locale)
    ? locale
    : "ar";

  const isRtl = currentLocale === "ar";
  const t = await getTranslations({
    locale: currentLocale,
    namespace: "BlogDetail",
  });

  const { blog, related_blogs } = await getBlog(id, currentLocale);
  const post = blog[0];

  if (!post) {
    notFound();
  }

  const sections = [...post.Blogdetails].sort(
    (a, b) => a.sort_order - b.sort_order,
  );

  const relatedBlogs = related_blogs.slice(0, 2);

  return (
    <main className="blog-detail-page">
      {/* Header Hero */}
      <section className="blog-hero">
        <div className="hero-inner">
          <nav className="breadcrumbs">
            <Link href="/blogs">{t("breadcrumbBlog")}</Link>
            {isRtl ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
            <span>{post.name}</span>
          </nav>

          <div className="category-badge">{post.code}</div>
          <h1 className="page-title">{post.name}</h1>

          <div className="meta-info">
            <div className="meta-item">
              <Calendar size={15} />
              <span>{post.created_date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="blog-body">
        <div className="body-grid">
          <div className="main-content">
            {/* Cover Image */}
            <div className="featured-image-wrapper">
              <Image
                src={post.image || "/images/image-default.png"}
                alt={post.image_alt || post.name}
                fill
                sizes="(max-width: 991px) 100vw, 800px"
                priority
              />
            </div>

            {/* Article Text Content */}
            <article className="article-container">
              {post.description && (
                <p className="paragraph intro-paragraph">{post.description}</p>
              )}

              {sections.map((sec) => (
                <div key={sec.id} className="content-section">
                  {sec.title && (
                    <h2 className="section-heading">{sec.title}</h2>
                  )}
                  {sec.content &&
                    sec.content
                      .split("\n")
                      .filter((p) => p.trim() !== "")
                      .map((p, pIdx) => (
                        <p key={pIdx} className="paragraph">
                          {p}
                        </p>
                      ))}
                </div>
              ))}
            </article>
          </div>

          {/* Sidebar Area */}
          <aside className="sidebar-content">
            <div className="sticky-sidebar">
              {/* CTA Box */}
              <div className="help-box">
                <h3 className="help-title">{t("helpTitle")}</h3>
                <p className="help-desc">{t("helpDesc")}</p>
                <Link href="/contact" className="btn-contact">
                  <PhoneCall size={16} />
                  <span>{t("contactBtn")}</span>
                </Link>
              </div>

              {/* Related Articles */}
              {/* {relatedBlogs.length > 0 && (
                <div className="related-box">
                  <h3 className="related-heading">{t("relatedTitle")}</h3>
                  <div className="related-list">
                    {relatedBlogs.map((rel) => (
                      <Link
                        key={rel.ID}
                        href={`/blogs/${rel.ID}`}
                        className="related-item"
                      >
                        <div className="rel-img">
                          <Image
                            src={rel.image || "/images/image-default.png"}
                            alt={rel.name}
                            fill
                            sizes="70px"
                          />
                        </div>
                        <div className="rel-info">
                          <h4>{rel.name}</h4>
                          <span>{rel.created_date}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )} */}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

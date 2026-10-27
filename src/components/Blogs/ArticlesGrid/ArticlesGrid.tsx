"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import "./ArticlesGrid.scss";

export interface Article {
  ID: number;
  name: string;
  description: string;
  created_date: string;
  image: string | null;
  code: string;
}

export interface Pagination {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

interface ArticlesGridProps {
  articles: Article[];
  pagination: Pagination;
  locale: string;
  activeCatId?: number;
}

export default function ArticlesGrid({
  articles,
  pagination,
  activeCatId,
}: ArticlesGridProps) {
  const t = useTranslations("ArticlesGrid");
  const currentLocale = useLocale() as "ar" | "en" | "ru" | "fr" | "es";
  const isRtl = currentLocale === "ar";

  const { current_page, last_page } = pagination;

  const buildPageHref = (pageNum: number) => ({
    pathname: "/blogs" as const,
    query: {
      page: String(pageNum),
      ...(activeCatId ? { cat_id: String(activeCatId) } : {}),
    },
  });

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="articles-grid-wrapper">
      <div className="articles-header">
        <h2 className="header-title">{t("latestArticlesTitle")}</h2>
        <p className="header-desc">{t("latestArticlesDesc")}</p>
      </div>

      <div className="articles-grid">
        <AnimatePresence>
          {articles.map((post) => (
            <motion.article
              key={post.ID}
              className="article-card"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              layout
            >
              <Link href={`/blogs/${post.ID}`} className="card-link">
                <div className="card-image-box">
                  <Image
                    src={post.image || "/images/image-default.png"}
                    alt={post.name}
                    fill
                    className="article-img"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="image-overlay"></div>
                </div>

                <div className="card-content">
                  <div className="card-meta">
                    <span className="meta-item">
                      <Calendar size={14} />
                      <span>{post.created_date}</span>
                    </span>
                  </div>

                  <h3 className="article-title">{post.name}</h3>
                  <p className="article-excerpt">{post.description}</p>

                  <div className="btn-read-more">
                    <span>{t("readMore")}</span>
                    {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {last_page > 1 && (
        <div className="pagination-wrapper">
          <Link
            href={buildPageHref(current_page - 1)}
            className={`pagination-btn nav-btn ${current_page === 1 ? "disabled" : ""}`}
            aria-disabled={current_page === 1}
          >
            {isRtl ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            <span>{t("previous")}</span>
          </Link>

          <div className="page-numbers">
            {Array.from({ length: last_page }, (_, i) => i + 1).map(
              (pageNum) => (
                <Link
                  key={pageNum}
                  href={buildPageHref(pageNum)}
                  className={`pagination-btn number-btn ${current_page === pageNum ? "active" : ""}`}
                >
                  {pageNum}
                </Link>
              ),
            )}
          </div>

          <Link
            href={buildPageHref(current_page + 1)}
            className={`pagination-btn nav-btn ${current_page === last_page ? "disabled" : ""}`}
            aria-disabled={current_page === last_page}
          >
            <span>{t("next")}</span>
            {isRtl ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
          </Link>
        </div>
      )}
    </div>
  );
}

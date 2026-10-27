"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { Folder, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import "./CategoriesWidget.scss";

export interface Category {
  id: number;
  title: string;
}

interface CategoriesWidgetProps {
  categories: Category[];
  locale: string;
  activeCatId?: number;
}

const PAGE_SIZE = 5;

export default function CategoriesWidget({
  categories,
  activeCatId,
}: CategoriesWidgetProps) {
  const t = useTranslations("CategoriesWidget");
  const currentLocale = useLocale() as "ar" | "en" | "ru" | "fr" | "es";
  const isRtl = currentLocale === "ar";
  const searchParams = useSearchParams();

  // بيتحكم في عدد الأقسام الظاهرة حاليًا
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visibleCategories = categories.slice(0, visibleCount);
  const hasMore = visibleCount < categories.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  // نحافظ على أي فلاتر تانية موجودة في الـ URL (زي page) بس نصفّر page لما نغيّر الكاتيجوري
  const buildCategoryHref = (categoryId?: number) => {
    const query: Record<string, string> = {};
    const existingPage = searchParams.get("page");
    if (existingPage) query.page = "1"; // نرجع لأول صفحة عند تغيير الفلتر

    if (categoryId) query.cat_id = String(categoryId);

    return {
      pathname: "/blogs" as const,
      query,
    };
  };

  return (
    <div className="categories-widget-card">
      <div className="widget-header">
        <Folder size={20} className="header-icon" />
        <h3 className="widget-title">{t("title")}</h3>
      </div>

      <ul className="categories-list">
        {/* خيار "الكل" لإلغاء الفلتر */}
        <li>
          <Link
            href={buildCategoryHref(undefined)}
            className={`category-item-btn ${!activeCatId ? "active" : ""}`}
          >
            <div className="category-info">
              {isRtl ? (
                <ChevronLeft size={16} className="arrow-icon" />
              ) : (
                <ChevronRight size={16} className="arrow-icon" />
              )}
              <span className="category-name">{t("all")}</span>
            </div>
          </Link>
        </li>

        {visibleCategories.map((category) => {
          const isActive = activeCatId === category.id;

          return (
            <li key={category.id}>
              <Link
                href={buildCategoryHref(category.id)}
                className={`category-item-btn ${isActive ? "active" : ""}`}
              >
                <div className="category-info">
                  {isRtl ? (
                    <ChevronLeft size={16} className="arrow-icon" />
                  ) : (
                    <ChevronRight size={16} className="arrow-icon" />
                  )}
                  <span className="category-name">{category.title}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      {hasMore && (
        <button
          type="button"
          className="show-more-btn"
          onClick={handleShowMore}
        >
          <span>{t("showMore")}</span>
          <ChevronDown size={16} className="show-more-icon" />
        </button>
      )}
    </div>
  );
}

"use client";

import { useState, useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { urnsData, UrnItem } from "@/data/urnsData";
import { Search, ChevronDown, ArrowLeft, ArrowRight } from "lucide-react";
import "./UrnsCatalog.scss";

export default function UrnsCatalog() {
    const t = useTranslations("UrnsPage");
    const currentLocale = useLocale() as "ar" | "en" | "ru" | "fr" | "es";
    const isRtl = currentLocale === "ar";

    const [searchQuery, setSearchQuery] = useState("");
    const [priceFilter, setPriceFilter] = useState<"all" | "priced" | "quote">("all");

    const filteredUrns = useMemo(() => {
        return urnsData.filter((item) => {
            const title = (item.title[currentLocale] || item.title.en).toLowerCase();
            const query = searchQuery.toLowerCase().trim();

            const matchesSearch = title.includes(query);

            if (!matchesSearch) return false;

            if (priceFilter === "priced") return item.hasPrice;
            if (priceFilter === "quote") return !item.hasPrice;

            return true;
        });
    }, [searchQuery, priceFilter, currentLocale]);

    return (
        <section className="urns-catalog-section">
            <div className="catalog-container">

                <div className="filter-bar">
                    <div className="search-input-wrapper">
                        <Search size={18} className="search-icon" />
                        <input
                            type="text"
                            placeholder={t("searchPlaceholder")}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="select-dropdown-wrapper">
                        <select
                            value={priceFilter}
                            onChange={(e) => setPriceFilter(e.target.value as "all" | "priced" | "quote")}
                        >
                            <option value="all">{t("filterAll")}</option>
                            <option value="priced">{t("filterWithPrice")}</option>
                            <option value="quote">{t("filterQuote")}</option>
                        </select>
                        <ChevronDown size={16} className="dropdown-icon" />
                    </div>
                </div>

                {filteredUrns.length > 0 ? (
                    <div className="urns-grid">
                        {filteredUrns.map((urn: UrnItem) => {
                            const title = urn.title[currentLocale] || urn.title.en;
                            const description = urn.description[currentLocale] || urn.description.en;

                            return (
                                <div key={urn.id} className="urn-card">
                                    <div className="card-image-wrapper">
                                        <Image
                                            src={urn.mainImage || "/images/image-default.png"}
                                            alt={title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>

                                    <div className="card-body">
                                        <h3 className="urn-title">{title}</h3>
                                        <p className="urn-desc">{description}</p>

                                        <div className="card-footer">
                                            <div className="price-box">
                                                {urn.hasPrice && urn.price ? (
                                                    <span className="price-value">${urn.price}</span>
                                                ) : (
                                                    <span className="quote-badge">{t("requestQuoteBtn")}</span>
                                                )}
                                            </div>

                                            <Link href={`/urns/${urn.slug}`} className="btn-details">
                                                <span>{t("viewDetailsBtn")}</span>
                                                {isRtl ? <ArrowLeft size={15} /> : <ArrowRight size={15} />}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="no-results">
                        <p>{t("noProductsFound")}</p>
                    </div>
                )}
            </div>
        </section>
    );
}
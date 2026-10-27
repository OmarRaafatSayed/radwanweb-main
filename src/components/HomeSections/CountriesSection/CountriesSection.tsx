"use client";

import "./CountriesSection.scss";
import { useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight, ShieldCheck, Building2, Globe2 } from "lucide-react";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
import { motion, Variants } from "framer-motion";
import { countriesData, CountryData } from "@/data/countries";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const countryCodes: Record<string, string> = {
    "south-sudan": "SSD",
    "cameroon": "CMR",
    "chad": "TCD",
    "syria": "SYR",
    "guinea": "GIN",
    "somalia": "SOM",
    "sri-lanka": "LKA",
    "ethiopia": "ETH",
    "malaysia": "MYS",
    "yemen": "YEM"
};

export default function CountriesSection() {
    const t = useTranslations("Countries");
    const currentLocale = useLocale() as "ar" | "en" | "ru" | "fr" | "es";
    const isRtl = currentLocale === "ar";

    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    const [activeIndex, setActiveIndex] = useState(0);

    const activeCountry: CountryData = countriesData[activeIndex] || countriesData[0];
    const activeCountryName = activeCountry.name[currentLocale] || activeCountry.name.en;
    const isoCode = countryCodes[activeCountry.id] || "GOV";

    const handleSlideChange = (swiper: SwiperType) => {
        setActiveIndex(swiper.realIndex);
    };

    const headerVariants: Variants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.45, ease: "easeOut" }
        }
    };

    const sliderPaneVariants: Variants = {
        hidden: { opacity: 0, x: isRtl ? 20 : -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut", delay: 0.1 }
        }
    };

    const previewPaneVariants: Variants = {
        hidden: { opacity: 0, scale: 0.98, x: isRtl ? -20 : 20 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 0.55, ease: "easeOut", delay: 0.15 }
        }
    };

    return (
        <section className="countries-section">
            <div className="container">

                <motion.div
                    className="countries-header"
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <h2>{t("title")}</h2>
                    <p>{t("desc")}</p>
                </motion.div>

                <div className="countries-split-wrapper">
                    <motion.div
                        className="split-slider-pane"
                        variants={sliderPaneVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                    >
                        <div className="slider-container-inner">
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={12}
                                slidesPerView={2}
                                loop={true}
                                speed={800}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                navigation={{
                                    prevEl: ".country-prev-btn",
                                    nextEl: ".country-next-btn",
                                }}
                                onSlideChange={handleSlideChange}
                                breakpoints={{
                                    480: { slidesPerView: 3, spaceBetween: 12 },
                                    992: { slidesPerView: 3, spaceBetween: 16 }
                                }}
                                className="countries-swiper-mini"
                            >
                                {countriesData.map((country, idx) => {
                                    const countryName = country.name[currentLocale] || country.name.en;
                                    const isSlideActive = idx === activeIndex;

                                    return (
                                        <SwiperSlide key={country.id}>
                                            <div className={`mini-country-card ${isSlideActive ? "active" : ""}`}>
                                                <div className="mini-flag-wrapper">
                                                    <Image
                                                        src={country.flag}
                                                        alt="Flag"
                                                        fill
                                                        sizes="38px"
                                                        className="flag-img"
                                                    />
                                                </div>
                                                <h3>{countryName}</h3>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>

                            <div className="slider-nav-controls">
                                <button
                                    ref={prevRef}
                                    className="country-nav-btn country-prev-btn"
                                    aria-label="Previous Slide"
                                >
                                    {isRtl ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
                                </button>
                                <button
                                    ref={nextRef}
                                    className="country-nav-btn country-next-btn"
                                    aria-label="Next Slide"
                                >
                                    {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* 🟢 كارت العرض المعتمد والمحدث (Embassy Certificate Style) */}
                    <motion.div
                        className="split-preview-pane"
                        variants={previewPaneVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                    >
                        <div className="embassy-certificate-card">
                            <div className="card-watermark">
                                <Globe2 size={180} />
                            </div>

                            <div className="certificate-inner">
                                <div className="cert-top-bar">
                                    <div className="cert-badge">
                                        <Building2 size={15} />
                                        <span>{t("diplomaticBadge")}</span>
                                    </div>
                                    <span className="iso-code">{isoCode}</span>
                                </div>

                                <div className="cert-main-content">
                                    {/* إطار العلم المستقل بحجمه ونسبته الكتملة بدون أي اقتصاص */}
                                    <div className="flag-frame">
                                        <Image
                                            src={activeCountry.flag}
                                            alt={activeCountryName}
                                            width={60}
                                            height={40}
                                            className="full-flag-img"
                                        />
                                    </div>

                                    <div className="text-info">
                                        <h3 className="country-title">{activeCountryName}</h3>
                                        <p className="sub-text">{t("passSubtext")}</p>
                                    </div>
                                </div>

                                <div className="cert-footer">
                                    <div className="status">
                                        <ShieldCheck size={16} className="status-icon" />
                                        <span>{t("authorizedStatus")}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
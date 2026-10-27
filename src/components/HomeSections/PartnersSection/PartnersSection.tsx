"use client";

import "./PartnersSection.scss";
import { useTranslations, useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Scale, Building2, Stethoscope, Landmark } from "lucide-react";
import { motion, Variants } from "framer-motion";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export default function PartnersSection() {
    const t = useTranslations("Partners");
    const currentLocale = useLocale();
    const isRtl = currentLocale === "ar";

    const partnersList = [
        {
            id: 1,
            icon: <Scale size={24} />,
            name: {
                ar: "مصلحة الطب الشرعي (دار التشريح المصري) مشرحة زينهم",
                en: "Forensic Medicine Authority (Egyptian Anatomy House) Zeinhom Morgue",
                ru: "Судебно-медицинская экспертиза (Египетский морг) Морг Зейнхом",
                fr: "Autorité de médecine légale (Maison d'anatomie égyptienne) Morgue de Zeinhom",
                es: "Autoridad de Medicina Forense (Morgue Egipcia) Morgue de Zeinhom"
            }
        },
        {
            id: 2,
            icon: <Building2 size={24} />,
            name: {
                ar: "مستشفى دكتور محمد الشبراويشي",
                en: "Dr. Mohamed El Shabrawishi Hospital",
                ru: "Больница доктора Мохамеда Эль-Шабравиши",
                fr: "Hôpital Dr Mohamed El Shabrawishi",
                es: "Hospital Dr. Mohamed El Shabrawishi"
            }
        },
        {
            id: 3,
            icon: <Stethoscope size={24} />,
            name: {
                ar: "مستشفى المميز التخصصي",
                en: "Al-Momayaz Specialized Hospital",
                ru: "Специализированная больница Аль-Момаяз",
                fr: "Hôpital Spécialisé Al-Momayaz",
                es: "Hospital Especializado Al-Momayaz"
            }
        },
        {
            id: 4,
            icon: <Building2 size={24} />,
            name: {
                ar: "مستشفى الصفوة التخصصي",
                en: "Al-Safwa Specialized Hospital",
                ru: "Специализированная больница Аль-Сафва",
                fr: "Hôpital Spécialisé Al-Safwa",
                es: "Hospital Especializado Al-Safwa"
            }
        },
        {
            id: 5,
            icon: <Landmark size={24} />,
            name: {
                ar: "سفارة جمهورية السودان",
                en: "Embassy of the Republic of Sudan",
                ru: "Посольство Республики Судан",
                fr: "Ambassade de la République du Soudan",
                es: "Embajada de la República del Sudán"
            }
        },
        {
            id: 6,
            icon: <Landmark size={24} />,
            name: {
                ar: "سفارة جمهورية الصومال الفدرالية",
                en: "Embassy of the Federal Republic of Somalia",
                ru: "Посольство Федеративной Республики Сомали",
                fr: "Ambassade de la République Fédérale de Somalie",
                es: "Embajada de la República Federal de Somalia"
            }
        },
        {
            id: 7,
            icon: <Landmark size={24} />,
            name: {
                ar: "سفارة الكاميرون",
                en: "Embassy of Cameroon",
                ru: "Посольство Камеруна",
                fr: "Ambassade du Cameroun",
                es: "Embajada de Camerún"
            }
        },
        {
            id: 8,
            icon: <Landmark size={24} />,
            name: {
                ar: "سفارة تشاد",
                en: "Embassy of Chad",
                ru: "Посольство Чада",
                fr: "Ambassade du Tchad",
                es: "Embajada de Chad"
            }
        },
        {
            id: 9,
            icon: <Landmark size={24} />,
            name: {
                ar: "سفارة جمهورية غينيا",
                en: "Embassy of the Republic of Guinea",
                ru: "Посольство Республики Гвинея",
                fr: "Ambassade de la République de Guinée",
                es: "Embajada de la República de Guinea"
            }
        }
    ];

    const totalItems = partnersList.length;
    const renderList = totalItems <= 8 ? [...partnersList, ...partnersList] : partnersList;

    const isSliderEnabled = totalItems > 4;
    const showPagination = totalItems > 4 && totalItems <= 20;

    const headerVariants: Variants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.45, ease: "easeOut" }
        }
    };

    const carouselVariants: Variants = {
        hidden: { opacity: 0, y: 12 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut", delay: 0.1 }
        }
    };

    return (
        <section className="partners-section">
            <div className={`container ${isRtl ? "direction-rtl" : "direction-ltr"}`}>

                <motion.div
                    className="section-header"
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <h2>{t("title")}</h2>
                    <div className="header-divider">
                        <span className="dot"></span>
                        <span className="line"></span>
                        <span className="dot"></span>
                    </div>
                </motion.div>

                <motion.div
                    className="partners-carousel-outer"
                    variants={carouselVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                >
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={16}
                        slidesPerView={2}
                        loop={isSliderEnabled}
                        speed={800}
                        autoplay={isSliderEnabled ? {
                            delay: 3000,
                            disableOnInteraction: false,
                        } : false}
                        allowTouchMove={isSliderEnabled}
                        pagination={showPagination ? {
                            clickable: true,
                            el: ".partners-pagination",
                            renderBullet: function (index, className) {
                                if (index >= totalItems) {
                                    return "";
                                }
                                return `<span class="${className}"></span>`;
                            }
                        } : false}
                        breakpoints={{
                            480: { slidesPerView: Math.min(3, totalItems), spaceBetween: 16 },
                            768: { slidesPerView: Math.min(4, totalItems), spaceBetween: 20 },
                            1024: { slidesPerView: Math.min(5, totalItems), spaceBetween: 20 },
                            1300: { slidesPerView: Math.min(6, totalItems), spaceBetween: 24 }
                        }}
                        className={`partners-swiper ${!isSliderEnabled ? "disabled-slider" : ""}`}
                    >
                        {renderList.map((partner, index) => {
                            const partnerName = partner.name[currentLocale as keyof typeof partner.name] || partner.name.en;

                            return (
                                <SwiperSlide key={`${partner.id}-${index}`}>
                                    <div className="partner-circle-card">
                                        <div className="brand-circle">
                                            <div className="icon-inner">
                                                {partner.icon}
                                            </div>
                                        </div>
                                        <h3>{partnerName}</h3>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    {showPagination && <div className="partners-pagination"></div>}
                </motion.div>

            </div>
        </section>
    );
}
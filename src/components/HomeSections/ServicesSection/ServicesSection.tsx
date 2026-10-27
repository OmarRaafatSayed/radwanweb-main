"use client";

import { useRef } from "react";
import "./ServicesSection.scss";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { motion, Variants } from "framer-motion";
import {
    Plane,
    Sparkles,
    Box,
    Flame,
    Users,
    Flower2,
    HeartPulse,
    ArrowLeft,
    ArrowRight
} from "lucide-react";
import { servicesList, ServiceItem } from "@/data/services";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export default function ServicesSection() {
    const t = useTranslations("Services");
    const currentLocale = useLocale() as "ar" | "en" | "ru" | "fr" | "es";
    const isRtl = currentLocale === "ar";

    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    const renderServiceIcon = (iconName: ServiceItem["iconName"]) => {
        switch (iconName) {
            case "Plane":
                return <Plane size={26} />;
            case "Sparkles":
                return <Sparkles size={26} />;
            case "Box":
                return <Box size={26} />;
            case "Flame":
                return <Flame size={26} />;
            case "Users":
                return <Users size={26} />;
            case "Flower2":
                return <Flower2 size={26} />;
            case "HeartPulse":
                return <HeartPulse size={26} />;
            default:
                return <Sparkles size={26} />;
        }
    };

    const headerVariants: Variants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.45, ease: "easeOut" }
        }
    };

    const sliderVariants: Variants = {
        hidden: { opacity: 0, y: 12 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut", delay: 0.1 }
        }
    };

    return (
        <section className="services-section">
            <div className={`container ${isRtl ? "direction-rtl" : "direction-ltr"}`}>

                <motion.div
                    className="services-header"
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <span className="services-badge">{t("badge")}</span>
                    <h2>{t("title")}</h2>
                </motion.div>

                <motion.div
                    className="services-slider-wrapper"
                    variants={sliderVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                >

                    <button
                        ref={prevRef}
                        className="slider-nav-btn prev-btn"
                        aria-label="Previous Slide"
                    >
                        <ArrowLeft size={18} />
                    </button>

                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        spaceBetween={16}
                        slidesPerView={1}
                        loop={true}
                        speed={1000}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: ".prev-btn",
                            nextEl: ".next-btn",
                        }}
                        pagination={{
                            clickable: true,
                            el: ".services-swiper-pagination",
                        }}
                        breakpoints={{
                            480: { slidesPerView: 2, spaceBetween: 12 },
                            768: { slidesPerView: 3, spaceBetween: 16 },
                            1024: { slidesPerView: 4, spaceBetween: 16 },
                            1400: { slidesPerView: 5, spaceBetween: 16 }
                        }}
                        className="services-swiper"
                    >
                        {servicesList.map((service) => {
                            const serviceTitle = service.title[currentLocale] || service.title.en;
                            const serviceDesc = service.desc[currentLocale] || service.desc.en;

                            return (
                                <SwiperSlide key={service.id}>
                                    <div className="service-card-v2">
                                        <div className="icon-container-v2">
                                            {renderServiceIcon(service.iconName)}
                                        </div>
                                        <h3>{serviceTitle}</h3>
                                        <p>{serviceDesc}</p>
                                        <Link href={`/services/${service.id}`} className="card-link-v2">
                                            <span>{t("learnMore")}</span>
                                            {isRtl ? <ArrowLeft size={12} /> : <ArrowRight size={12} />}
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    <button
                        ref={nextRef}
                        className="slider-nav-btn next-btn"
                        aria-label="Next Slide"
                    >
                        <ArrowRight size={18} />
                    </button>

                    <div className="services-swiper-pagination"></div>

                </motion.div>

            </div>
        </section>
    );
}
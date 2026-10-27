"use client";

import "./TestimonialsSection.scss";
import { useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight, User, Quote } from "lucide-react";
import { motion, Variants } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export default function TestimonialsSection() {
    const t = useTranslations("Testimonials");
    const currentLocale = useLocale();
    const isRtl = currentLocale === "ar";

    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    const testimonialsList = [
        {
            id: 1,
            clientName: "أحمد محمد",
            country: "Saudi Arabia",
            comment: "تعامل راقي وسرعة في إنهاء جميع الإجراءات، شكراً لفريق الرضوان على دعمهم الكبير في أصعب اللحظات."
        },
        {
            id: 2,
            clientName: "منى عبد الله",
            country: "France",
            comment: "خدمة ممتازة واحترافية عالية، تم نقل والدي إلى مصر بكل سهولة ويسر وبدون أي تعقيدات لوجستية."
        },
        {
            id: 3,
            clientName: "خالد العتيبي",
            country: "UAE",
            comment: "أنصح الجميع بالتعامل معهم، فهم فريق محترم ومتعاون جداً ويتابع كل التفاصيل خطوة بخطوة من البداية للنهاية."
        },
        {
            id: 4,
            clientName: "سارة حسن",
            country: "Germany",
            comment: "منتهى الأمانة والالتزام بالمواعيد والدقة في الأوراق والتراخيص الطبية المطلوبة، شكراً جزيلاً لكم."
        }
    ];

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
        <section className="testimonials-section">
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
                    className="testimonials-slider-wrapper"
                    variants={sliderVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                >

                    <button
                        ref={prevRef}
                        className="testimonial-nav-btn prev-btn"
                        aria-label="Previous Slide"
                    >
                        <ArrowLeft size={18} />
                    </button>

                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={true}
                        speed={1000}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: ".prev-btn",
                            nextEl: ".next-btn",
                        }}
                        pagination={{
                            clickable: true,
                            el: ".testimonials-pagination",
                        }}
                        breakpoints={{
                            768: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 24 }
                        }}
                        className="testimonials-swiper"
                    >
                        {testimonialsList.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="testimonial-card">
                                    <div className="comment-area">
                                        <Quote className="quote-icon" size={20} />
                                        <p>{item.comment}</p>
                                    </div>

                                    <div className="card-divider"></div>

                                    <div className="client-profile">
                                        <div className="client-avatar">
                                            <User size={24} />
                                        </div>
                                        <div className="client-meta">
                                            <h3>{item.clientName}</h3>
                                            <span>{item.country}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button
                        ref={nextRef}
                        className="testimonial-nav-btn next-btn"
                        aria-label="Next Slide"
                    >
                        <ArrowRight size={18} />
                    </button>

                    <div className="testimonials-pagination"></div>

                </motion.div>
            </div>
        </section>
    );
}
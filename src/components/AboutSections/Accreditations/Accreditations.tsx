"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { register } from "swiper/element/bundle";

// تهيئة وتسجيل موديولات Swiper بالكامل لضمان عملها في Next.js
register();

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Accreditations.scss";

interface AccreditationItem {
    title: string;
    desc: string;
}

export default function Accreditations() {
    const t = useTranslations("Accreditations");
    const params = useParams();
    const locale = (params?.locale as string) || "ar";

    const accreditationsData: Record<string, AccreditationItem[]> = {
        ar: [
            {
                title: "التراخيص الحكومية الرسمية",
                desc: "نعمل بموجب تراخيص رسمية معتمدة من وزارة الصحة والجهات الحكومية المختصة لتجهيز ونقل المتوفين محلياً ودولياً."
            },
            {
                title: "اعتمادات السفارات والقنصليات",
                desc: "حاصلون على اعتمادات رسمية من مختلف السفارات والقنصليات العربية والأجنبية لتسهيل وتخليص معاملات الشحن الدولي بأسرع وقت."
            },
            {
                title: "شهادات الجودة والسلامة",
                desc: "نلتزم بأعلى معايير السلامة المهنية والتعقيم الطبي المعتمد دولياً في كافة مراحل التجهيز والنقل لضمان الوقار الكامل."
            },
            {
                title: "عضوية منظمات الشحن الدولي",
                desc: "أعضاء مسجلون في كبرى منظمات شحن وتسهيل نقل الجثامين دولياً لتوفير مسارات نقل آمنة وسريعة عبر القارات."
            },
            {
                title: "شهادة مطابقة المعايير الطبية",
                desc: "مطابقة كاملة لكافة اشتراطات الحجر الصحي الدولي والمطارات لتجنب أي تأخير في المعاملات الجمركية."
            },
            {
                title: "توثيق التجهيز الشرعي والقانوني",
                desc: "توثيق رسمي لكافة مراحل التجهيز بما يتوافق مع القوانين والشرائع الدينية المختلفة لضمان راحة بال العائلات."
            }
        ],
        en: [
            {
                title: "Official Government Licenses",
                desc: "We operate under official licenses approved by the Ministry of Health and competent government authorities for local and international repatriation."
            },
            {
                title: "Consular & Embassy Approvals",
                desc: "Accredited by various Arab and foreign embassies and consulates to facilitate and clear international shipping documents swiftly."
            },
            {
                title: "Quality & Safety Certificates",
                desc: "We adhere to the highest international standards of occupational safety and medical sterilization throughout all preparation and transport stages."
            },
            {
                title: "Global Repatriation Membership",
                desc: "Registered members of major international repatriation organizations, establishing safe and fast transit pathways across continents."
            },
            {
                title: "Medical Quarantine Compliance",
                desc: "Fully compliant with international quarantine and airport regulations, avoiding any potential custom clearance delays."
            },
            {
                title: "Legal & Religious Certification",
                desc: "Official documentation of all preparation stages in accordance with legal requirements and diverse religious laws to ensure peace of mind."
            }
        ],
        ru: [
            {
                title: "Официальные государственные лицензии",
                desc: "Мы работаем на основании официальных лицензий, утвержденных Министерством здравоохранения и компетентными государственными органами."
            },
            {
                title: "Аккредитация в посольствах",
                desc: "Официально аккредитованы в различных арабских и иностранных посольствах и консульствах для быстрого оформления документов."
            },
            {
                title: "Сертификаты качества и безопасности",
                desc: "Мы соблюдаем самые строгие международные стандарты безопасности и медицинской стерилизации на всех этапах подготовки и транспортировки."
            },
            {
                title: "Членство в международных ассоциациях",
                desc: "Зарегистрированные члены ведущих мировых организаций по репатриации, что позволяет осуществлять быстрые транзитные перевозки."
            },
            {
                title: "Соответствие санитарным нормам",
                desc: "Полное соответствие международным требованиям карантинного контроля и аэропортов во избежание задержек на таможне."
            },
            {
                title: "Официальное оформление процедур",
                desc: "Официальное подтверждение всех этапов подготовки в соответствии с законодательством и религиозными канонами для спокойствия семей."
            }
        ],
        fr: [
            {
                title: "Licences Gouvernementales Officielles",
                desc: "Nous opérons sous des licences officielles agréées par le ministère de la Santé et les autorités compétentes pour le transport local et international."
            },
            {
                title: "Agréments Consulaires & Ambassades",
                desc: "Accrédités par de nombreuses ambassades et consulats arabes et étrangers pour faciliter et dédouaner rapidement les documents de transport."
            },
            {
                title: "Certificats de Qualité & de Sécurité",
                desc: "Nous respectons les normes internationales les plus strictes en matière de sécurité professionnelle et de stérilisation médicale à chaque étape."
            },
            {
                title: "Membre d'Organisations Internationales",
                desc: "Membres enregistrés auprès des principales organisations de rapatriement pour assurer des voies de transit rapides à travers les continents."
            },
            {
                title: "Conformité de Quarantaine Médicale",
                desc: "Conformité totale avec les réglementations de quarantaine internationales et aéroportuaires, évitant tout retard de dédouanement."
            },
            {
                title: "Certifications Légales & Religieuses",
                desc: "Documentation officielle de toutes les étapes de préparation conformément aux exigences légales et religieuses pour la sérénité des familles."
            }
        ],
        es: [
            {
                title: "Licencias Gubernamentales Oficiales",
                desc: "Operamos bajo licencias oficiales autorizadas por el Ministerio de Salud y las autoridades competentes para traslados nacionales e internacionales."
            },
            {
                title: "Acreditaciones Consulares",
                desc: "Acreditados ante diversas embajadas y consulados árabes y extranjeros para agilizar y tramitar la documentación de repatriación aérea."
            },
            {
                title: "Certificaciones de Calidad y Seguridad",
                desc: "Cumplimos con los más altos estándares internacionales de seguridad laboral y desinfección médica en todas las etapas del proceso."
            },
            {
                title: "Miembro de Repatriación Global",
                desc: "Miembros registrados en las principales redes de repatriación internacional para asegurar rutas de tránsito rápidas entre continentes."
            },
            {
                title: "Cumplimiento Sanitario de Aduanas",
                desc: "Total conformidad con las regulaciones de cuarentena internacional y aeroportuaria, previniendo demoras en los trámites de aduana."
            },
            {
                title: "Certificación Legal y Religiosa",
                desc: "Documentación certificada de cada etapa conforme a los requisitos legales y las costumbres religiosas para brindar tranquilidad familiar."
            }
        ]
    };

    const currentAccreditations = accreditationsData[locale] || accreditationsData["ar"];

    const headerVariants: Variants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
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
        <section className="accreditations-section">
            <div className="accreditations-dots-bg"></div>

            <div className="accreditations-container">
                <motion.div
                    className="accreditations-header"
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <span className="accreditations-badge">{t("badge")}</span>
                    <h2 className="accreditations-main-title">{t("mainTitle")}</h2>
                    <p className="accreditations-desc">{t("description")}</p>
                </motion.div>

                <motion.div
                    className="accreditations-slider-wrapper"
                    variants={sliderVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                >
                    <button className="slider-nav-btn prev-btn" id="acc-prev-btn" aria-label="Previous slide">
                        <ChevronRight size={20} className="nav-arrow-icon" />
                    </button>

                    <button className="slider-nav-btn next-btn" id="acc-next-btn" aria-label="Next slide">
                        <ChevronLeft size={20} className="nav-arrow-icon" />
                    </button>

                    <Swiper
                        modules={[Pagination, Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        speed={1000}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: "#acc-prev-btn",
                            nextEl: "#acc-next-btn",
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        className="accreditations-swiper"
                    >
                        {currentAccreditations.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="accreditation-card">
                                    <div className="accreditation-icon-wrapper">
                                        <ShieldCheck size={28} className="accreditation-icon" />
                                    </div>
                                    <h3 className="accreditation-card-title">{item.title}</h3>
                                    <p className="accreditation-card-desc">{item.desc}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
}
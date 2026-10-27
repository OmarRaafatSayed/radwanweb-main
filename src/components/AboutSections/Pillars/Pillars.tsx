"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import { Eye, Target, Heart } from "lucide-react";
import "./Pillars.scss";

interface PillarItem {
    title: string;
    desc: string;
    icon: React.ReactNode;
}

export default function Pillars() {
    const t = useTranslations("Pillars");
    const params = useParams();
    const locale = (params?.locale as string) || "ar";

    const pillarsData: Record<string, PillarItem[]> = {
        ar: [
            {
                title: "رؤيتنا",
                desc: "أن نكون الخيار الأول والأكثر موثوقية عالمياً لنقل المتوفين، مقدمين نموذجاً يحتذى به في الرعاية الإنسانية والالتزام المهني المطلق.",
                icon: <Eye size={28} className="pillar-icon" />
            },
            {
                title: "رسالتنا",
                desc: "تخفيف وطأة الفقد عن العائلات من خلال إدارة كافة الإجراءات اللوجستية والقانونية بسرعة متناهية وبأعلى درجات الاحترام والوقار الإنساني.",
                icon: <Target size={28} className="pillar-icon" />
            },
            {
                title: "قيمنا الأخلاقية",
                desc: "نلتزم بالأمانة والسرية المطلقة، ونتعامل مع كل حالة بكامل الاحترام والرحمة، معتبرين خدمة عائلات المتوفين واجباً إنسانياً نبيلاً.",
                icon: <Heart size={28} className="pillar-icon" />
            }
        ],
        en: [
            {
                title: "Our Vision",
                desc: "To be the premier and most trusted global choice for deceased repatriation, setting a benchmark for humanitarian care and absolute professional commitment.",
                icon: <Eye size={28} className="pillar-icon" />
            },
            {
                title: "Our Mission",
                desc: "To ease the burden of loss on families by managing all logistics and legal procedures with utmost speed, respect, and human dignity.",
                icon: <Target size={28} className="pillar-icon" />
            },
            {
                title: "Our Ethical Values",
                desc: "We pledge absolute honesty and confidentiality, treating every case with compassion and respect, viewing our service as a noble humanitarian duty.",
                icon: <Heart size={28} className="pillar-icon" />
            }
        ],
        ru: [
            {
                title: "Наше видение",
                desc: "Быть главным и самым надежным мировым выбором для репатриации усопших, устанавливая стандарты гуманной заботы и абсолютного профессионализма.",
                icon: <Eye size={28} className="pillar-icon" />
            },
            {
                title: "Наша миссия",
                desc: "Облегчить бремя утраты для семей, оперативно решая все логистические и юридические вопросы с величайшим уважением и достоинством.",
                icon: <Target size={28} className="pillar-icon" />
            },
            {
                title: "Наши ценности",
                desc: "Мы гарантируем абсолютную честность и конфиденциальность, относясь к каждому случаю с состраданием, считая нашу службу благородным долгом.",
                icon: <Heart size={28} className="pillar-icon" />
            }
        ],
        fr: [
            {
                title: "Notre Vision",
                desc: "Devenir le choix mondial privilégié et le plus fiable pour le rapatriement de défunts, en étant un modèle de compassion et d'engagement professionnel absolu.",
                icon: <Eye size={28} className="pillar-icon" />
            },
            {
                title: "Notre Mission",
                desc: "Soulager la douleur des familles en gérant l'ensemble des formalités administratives et logistiques avec réactivité, respect et dignité humaine.",
                icon: <Target size={28} className="pillar-icon" />
            },
            {
                title: "Nos Valeurs Éthiques",
                desc: "Nous garantissons une intégrité et une discrétion absolues, traitant chaque situation avec compassion, considérant notre mission comme un devoir hautement humanitaire.",
                icon: <Heart size={28} className="pillar-icon" />
            }
        ],
        es: [
            {
                title: "Nuestra Visión",
                desc: "Ser la opción global preferida y de mayor confianza para el traslado de fallecidos, liderando con empatía humana y un compromiso profesional absoluto.",
                icon: <Eye size={28} className="pillar-icon" />
            },
            {
                title: "Nuestra Misión",
                desc: "Aliviar la carga de la pérdida en las familias gestionando todos los trámites legales y logísticos con rapidez, máximo respeto y dignidad humana.",
                icon: <Target size={28} className="pillar-icon" />
            },
            {
                title: "Nuestros Valores Éticos",
                desc: "Asumimos un compromiso de honestidad y confidencialidad absolutas, tratando cada caso con compasión, entendiendo nuestra labor como un noble deber.",
                icon: <Heart size={28} className="pillar-icon" />
            }
        ]
    };

    const currentPillars = pillarsData[locale] || pillarsData["ar"];

    const headerVariants: Variants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    const cardContainerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.05
            }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 12 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.45, ease: "easeOut" }
        }
    };

    return (
        <section className="pillars-section">
            <div className="pillars-dots-bg"></div>

            <div className="pillars-container">
                <motion.div
                    className="pillars-header"
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <span className="pillars-badge">{t("badge")}</span>
                    <h2 className="pillars-main-title">{t("mainTitle")}</h2>
                    <p className="pillars-desc">{t("description")}</p>
                </motion.div>

                <motion.div
                    className="pillars-grid"
                    variants={cardContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                >
                    {currentPillars.map((pillar, index) => (
                        <motion.div className="pillar-card" variants={cardVariants} key={index}>
                            <div className="pillar-icon-wrapper">
                                {pillar.icon}
                            </div>
                            <h3 className="pillar-card-title">{pillar.title}</h3>
                            <p className="pillar-card-desc">{pillar.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
"use client";

import { useParams } from "next/navigation";
import { motion, Variants } from "framer-motion";
import "./AboutHero.scss";

interface StatItem {
    value: string;
    label: string;
}

interface HeroContent {
    title: string;
    subtitle: string;
    description: string;
    stats: StatItem[];
}

export default function AboutHero() {
    const params = useParams();
    const locale = (params?.locale as string) || "ar";

    const content: Record<string, HeroContent> = {
        ar: {
            title: "من نحن",
            subtitle: "رضوان لنقل المتوفين حول العالم",
            description: "نحن شركة متخصصة في تقديم خدمات نقل المتوفين من وإلى جميع دول العالم بكل احترام واحترافية عالية، ونسعى لتخفيف العبء عن ذوي الفقيد في أصعب اللحظات.",
            stats: [
                { value: "24/7", label: "دعم ومتابعة مستمرة" },
                { value: "+12", label: "سنوات من الخبرة" },
                { value: "+2500", label: "عملية نقل مكتملة" },
                { value: "+70", label: "دولة حول العالم" }
            ]
        },
        en: {
            title: "About Us",
            subtitle: "Radwan Deceased Transportation Worldwide",
            description: "We are a specialized company providing repatriation and deceased transportation services to and from all countries with utmost respect and professionalism, striving to ease the burden on families in their hardest moments.",
            stats: [
                { value: "24/7", label: "Continuous Support" },
                { value: "+12", label: "Years of Experience" },
                { value: "+2500", label: "Completed Operations" },
                { value: "+70", label: "Countries Worldwide" }
            ]
        },
        ru: {
            title: "О нас",
            subtitle: "Радван — Международная транспортировка усопших",
            description: "Мы — специализированная компания, предоставляющая услуги по репатриации и транспортировке усопших по всему миру с глубоким уважением и профессионализмом, стремясь облегчить бремя семей в самые трудные минуты.",
            stats: [
                { value: "24/7", label: "Постоянная поддержка" },
                { value: "+12", label: "Лет опыта" },
                { value: "+2500", label: "Успешных перевозок" },
                { value: "+70", label: "Стран мира" }
            ]
        },
        fr: {
            title: "À Propos",
            subtitle: "Radwan Transport de Défunts à l'Échelle Internationale",
            description: "Nous sommes une entreprise spécialisée dans le rapatriement et le transport de défunts depuis et vers tous les pays du monde avec le plus grand respect et professionnalisme, visant à soulager les familles dans les moments les plus difficiles.",
            stats: [
                { value: "24/7", label: "Soutien Continu" },
                { value: "+12", label: "Années d'Expérience" },
                { value: "+2500", label: "Rapatriements Réussis" },
                { value: "+70", label: "Pays du Monde" }
            ]
        },
        es: {
            title: "Sobre Nosotros",
            subtitle: "Radwan Traslado de Fallecidos a Nivel Mundial",
            description: "Somos una empresa especializada en brindar servicios de repatriación and traslado de fallecidos desde y hacia todos los países del mundo con el mayor respeto y profesionalismo, buscando aliviar la carga de las familias en sus momentos más difíciles.",
            stats: [
                { value: "24/7", label: "Soporte Continuo" },
                { value: "+12", label: "Años de Experiencia" },
                { value: "+2500", label: "Traslados Completados" },
                { value: "+70", label: "Países del Mundo" }
            ]
        }
    };

    const currentData = content[locale] || content["ar"];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.05
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    const statsGridVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut", delay: 0.3 }
        }
    };

    return (
        <section className="about-hero-section">
            <div className="hero-dots-pattern"></div>

            <motion.div
                className="about-hero-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="hero-text-content">
                    <motion.span className="hero-badge" variants={itemVariants}>
                        {currentData.title}
                    </motion.span>
                    <motion.h1 className="hero-main-title" variants={itemVariants}>
                        {currentData.subtitle}
                    </motion.h1>
                    <motion.p className="hero-desc" variants={itemVariants}>
                        {currentData.description}
                    </motion.p>
                </div>

                <motion.div className="hero-stats-glass-grid" variants={statsGridVariants}>
                    {currentData.stats.map((stat, index) => (
                        <div className="stat-card" key={index}>
                            <h3 className="stat-value">{stat.value}</h3>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
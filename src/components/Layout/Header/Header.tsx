"use client";

import "./Header.scss";
import { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Globe, Menu, X, ChevronDown, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Header() {
    const t = useTranslations("Header");
    const currentLocale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
    const [isStoreDropdownOpen, setIsStoreDropdownOpen] = useState(false);

    const langSelectorRef = useRef<HTMLDivElement>(null);
    const storeMenuRef = useRef<HTMLLIElement>(null);

    const languages = [
        { code: "ar", name: "العربية" },
        { code: "en", name: "English" },
        { code: "ru", name: "Русский" },
        { code: "fr", name: "Français" },
        { code: "es", name: "Español" }
    ];

    const storeCategories = [
        { id: "caskets", label: t("storeCategories.caskets"), url: "/caskets" },
        { id: "urns", label: t("storeCategories.urns"), url: "/urns" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (langSelectorRef.current && !langSelectorRef.current.contains(event.target as Node)) {
                setIsLangDropdownOpen(false);
            }
            if (storeMenuRef.current && !storeMenuRef.current.contains(event.target as Node)) {
                setIsStoreDropdownOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const changeLanguage = (locale: string) => {
        setIsLangDropdownOpen(false);
        router.push({ pathname }, { locale });
    };

    const isActive = (path: string) => {
        if (path === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(path);
    };

    const isStoreActive = () => {
        return storeCategories.some((cat) => pathname.startsWith(cat.url));
    };

    return (
        <header className={`site-header ${isScrolled ? "is-sticky" : ""}`}>
            <div className="container header-container">

                <Link href="/" className="header-logo">
                    <Image
                        src="/logo.png"
                        alt="Radwan Funeral Services"
                        width={100}
                        height={68}
                        priority
                    />
                </Link>

                <nav className="desktop-nav">
                    <ul>
                        <li><Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>{t("home")}</Link></li>
                        <li><Link href="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>{t("about")}</Link></li>
                        <li><Link href="/services" className={`nav-link ${isActive("/services") ? "active" : ""}`}>{t("services")}</Link></li>

                        <li className="nav-item-dropdown" ref={storeMenuRef}>
                            <button
                                className={`nav-link nav-dropdown-trigger ${isStoreActive() ? "active" : ""}`}
                                onClick={() => setIsStoreDropdownOpen(!isStoreDropdownOpen)}
                                aria-expanded={isStoreDropdownOpen}
                            >
                                <span>{t("store")}</span>
                                <ChevronDown size={14} className={`arrow ${isStoreDropdownOpen ? "rotate" : ""}`} />
                            </button>

                            <AnimatePresence>
                                {isStoreDropdownOpen && (
                                    <motion.ul
                                        className="nav-dropdown-menu"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.15, ease: "easeOut" }}
                                    >
                                        {storeCategories.map((cat) => (
                                            <li key={cat.id}>
                                                <Link
                                                    href={cat.url}
                                                    className={pathname.startsWith(cat.url) ? "active" : ""}
                                                    onClick={() => setIsStoreDropdownOpen(false)}
                                                >
                                                    {cat.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </li>

                        <li><Link href="/someone-dies" className={`nav-link ${isActive("/someone-dies") ? "active" : ""}`}>{t("someone-dies")}</Link></li>
                        <li><Link href="/blogs" className={`nav-link ${isActive("/blogs") ? "active" : ""}`}>{t("blog")}</Link></li>
                        <li><Link href="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`}>{t("contact")}</Link></li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <div className="lang-selector" ref={langSelectorRef}>
                        <button
                            className="lang-trigger"
                            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                            aria-haspopup="true"
                            aria-expanded={isLangDropdownOpen}
                        >
                            <ChevronDown size={14} className={`arrow ${isLangDropdownOpen ? "rotate" : ""}`} />
                            <span>{currentLocale.toUpperCase()}</span>
                            <Globe size={18} />
                        </button>

                        <AnimatePresence>
                            {isLangDropdownOpen && (
                                <motion.ul
                                    className="lang-dropdown"
                                    initial={{ opacity: 0, y: 4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 4 }}
                                    transition={{ duration: 0.15, ease: "easeOut" }}
                                >
                                    {languages.map((lang) => (
                                        <li key={lang.code}>
                                            <button
                                                onClick={() => changeLanguage(lang.code)}
                                                className={currentLocale === lang.code ? "active" : ""}
                                            >
                                                {lang.name}
                                            </button>
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href="" className="btn-request">
                        <PhoneCall size={18} />
                        <span>{t("requestService")}</span>
                    </Link>

                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            className="mobile-menu-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        <motion.div
                            className="mobile-menu-panel"
                            initial={{ x: currentLocale === "ar" ? "100%" : "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: currentLocale === "ar" ? "100%" : "-100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                        >
                            <div className="mobile-menu-header">
                                <Image
                                    src="/logo.png"
                                    alt="Radwan"
                                    width={70}
                                    height={60}
                                />
                                <button className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>
                                    <X size={24} />
                                </button>
                            </div>

                            <nav className="mobile-nav">
                                <ul>
                                    <li>
                                        <Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>
                                            {t("home")}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>
                                            {t("about")}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services" className={`nav-link ${isActive("/services") ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>
                                            {t("services")}
                                        </Link>
                                    </li>

                                    <li className="mobile-store-group">
                                        <span className={`store-label ${isStoreActive() ? "active" : ""}`}>
                                            {t("store")}
                                        </span>
                                        <ul className="store-sublinks-list">
                                            {storeCategories.map((cat) => (
                                                <li key={cat.id}>
                                                    <Link
                                                        href={cat.url}
                                                        className={`sublink-item ${pathname.startsWith(cat.url) ? "active" : ""}`}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {cat.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>

                                    <li>
                                        <Link href="/someone-dies" className={`nav-link ${isActive("/someone-dies") ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>
                                            {t("someone-dies")}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blogs" className={`nav-link ${isActive("/blogs") ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>
                                            {t("blog")}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`} onClick={() => setIsMobileMenuOpen(false)}>
                                            {t("contact")}
                                        </Link>
                                    </li>
                                </ul>
                            </nav>

                            <div className="mobile-menu-footer">
                                <Link href="/request-service" className="btn-request w-full" onClick={() => setIsMobileMenuOpen(false)}>
                                    <PhoneCall size={18} />
                                    <span>{t("requestService")}</span>
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
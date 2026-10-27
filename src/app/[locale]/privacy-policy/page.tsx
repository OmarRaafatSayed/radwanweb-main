import { Metadata } from "next";
import { notFound } from "next/navigation";
import "./PrivacyPolicy.scss";

interface Props {
    params: Promise<{ locale: string }>;
}

const privacyData = {
    ar: {
        title: "سياسة الخصوصية",
        subtitle: "نحن نلتزم بحماية بياناتك وشرح كيفية جمعها واستخدامها بكل شفافية وأمان.",
        lastUpdated: "آخر تحديث: أغسطس 2026",
        sections: [
            {
                id: "intro",
                title: "1. المقدمة ونطاق التطبيق",
                content: "توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية البيانات الشخصية للعملاء والزوار عند استخدام منصة وخدمات شركة رضوان لنقل وشحن المتوفين. نحن ندرك أهمية حساسية السرية في هذه الأوقات ونلتزم بجميع القوانين واللوائح التنظيمية ذات الصلة."
            },
            {
                id: "data-collection",
                title: "2. البيانات التي نجمعها",
                content: "لنمكن من تقديم وتنسيق خدمات النقل والتخليص الجمركي والقنصلي بنجاح، قد نجمع بياناتك الشخصية مثل الاسم الكامل ورقم الهاتف والبريد الإلكتروني وعنوان الإقامة، بالإضافة إلى المستندات الرسمية والتقارير الطبية الخاصة بالمتوفى للبدء في الإجراءات."
            },
            {
                id: "data-usage",
                title: "3. كيفية استخدام البيانات",
                content: "تُستخدم البيانات المجموعة فقط للأغراض المباشرة الخاصة بإنهاء إجراءات التنسيق مع السفارات والقنصليات ووزارات الصحة والشرطة، وحجز الشحن الجوي وتنسيق الاستقبال والنقل في المطارات والمحافظات، مع إبقاء العائلة على علم بكافة التحديثات."
            },
            {
                id: "data-sharing",
                title: "4. مشاركة البيانات مع الجهات الرسمية",
                content: "لا نبيع أو نؤجر أي بيانات شخصية لأي أطراف تجارية مطلقا. يتم مشاركة الوثائق الضرورية فقط مع السلطات الحكومية الرسمية وشركات الطيران بهدف استخراج التصاريح القانونية وتسهيل عملية النقل."
            },
            {
                id: "data-security",
                title: "5. أمان وحفظ البيانات",
                content: "نطبق أعلى معايير الأمان التقني والتنظيمي لمنع الوصول غير المصرح به للبيانات والمعاملات، حيث يتم تخزين كافة المستندات والوثائق الرسمية على خوادم مشفرة ومحمية بالكامل وفق أفضل المعايير التقنية."
            },
            {
                id: "user-rights",
                title: "6. حقوق المستخدم والتواصل",
                content: "يحق لك في أي وقت طلب استعراض أو تعديل أو تحديث بياناتك الشخصية المتاحة لدينا طالما لم تتعارض مع المتطلبات القانونية الحكومية الصادرة. يمكنك التواصل معنا دائماً عبر البريد الإلكتروني المخصص للخصوصية privacy@radwanfs.com."
            }
        ]
    },
    en: {
        title: "Privacy Policy",
        subtitle: "We are committed to protecting your data and explaining how it is collected and used with total transparency.",
        lastUpdated: "Last Updated: August 2026",
        sections: [
            {
                id: "intro",
                title: "1. Introduction & Scope",
                content: "This Privacy Policy outlines how we collect, use, and protect personal data of clients and visitors using Radwan Funeral & Repatriation Services. We understand the high sensitivity of our services and strictly comply with applicable privacy regulations."
            },
            {
                id: "data-collection",
                title: "2. Information We Collect",
                content: "To successfully fulfill repatriation, customs, and embassy clearance, we may collect personal details including your full name, phone number, email, address, and official medical certificates required for transit approvals."
            },
            {
                id: "data-usage",
                title: "3. How We Use Your Data",
                content: "Collected information is strictly used for executing legal clearance with embassies, health authorities, and police, arranging air freight cargo, organizing airport transport, and providing continuous status updates to family members."
            },
            {
                id: "data-sharing",
                title: "4. Official Data Sharing",
                content: "We never sell or lease data to commercial entities. Documents are strictly shared with official governmental bodies and airlines solely for issuing legal transit permits."
            },
            {
                id: "data-security",
                title: "5. Data Security & Retention",
                content: "We implement high-grade technical and organizational security measures to prevent unauthorized access, storing all sensitive documents on fully encrypted and protected servers."
            },
            {
                id: "user-rights",
                title: "6. Your Rights & Contact",
                content: "You have the right to request access to or correction of your stored data at any time, provided it complies with statutory legal retention laws. For privacy inquiries, email us at privacy@radwanfs.com."
            }
        ]
    },
    ru: {
        title: "Политика конфиденциальности",
        subtitle: "Мы стремимся защищать ваши данные и прозрачно объяснять порядок их сбора и использования.",
        lastUpdated: "Обновлено: Август 2026",
        sections: [
            {
                id: "intro",
                title: "1. Введение и область применения",
                content: "Эта Политика объясняет, как мы собираем, используем и защищаем персональные данные клиентов и посетителей службы репатриации Радван."
            },
            {
                id: "data-collection",
                title: "2. Собираемая информация",
                content: "Для оформления документов и репатриации мы собираем личные данные клиента и официальные медицинские справки усопшего."
            },
            {
                id: "data-usage",
                title: "3. Использование данных",
                content: "Данные используются исключительно для оформления разрешений в посольствах, бронирования авиаперевозок и связи с родственниками."
            },
            {
                id: "data-sharing",
                title: "4. Передача третьим лицам",
                content: "Мы не продаем данные коммерческим организациям. Документы передаются только в официальные государственные органы."
            },
            {
                id: "data-security",
                title: "5. Безопасность данных",
                content: "Все документы хранятся на защищенных и зашифрованных серверах в соответствии с высочайшими техническими стандартами."
            },
            {
                id: "user-rights",
                title: "6. Ваши права",
                content: "Вы можете запросить изменение данных, связавшись с нами по почте privacy@radwanfs.com."
            }
        ]
    },
    fr: {
        title: "Politique de Confidentialité",
        subtitle: "Nous nous engageons à protéger vos données et à expliquer leur utilisation en toute transparence.",
        lastUpdated: "Mise à jour: Août 2026",
        sections: [
            {
                id: "intro",
                title: "1. Introduction et Portée",
                content: "Cette politique explique comment nous collectons, utilisons et protégeons vos données personnelles lors de l'utilisation des services de rapatriement Radwan."
            },
            {
                id: "data-collection",
                title: "2. Informations Collectées",
                content: "Pour réaliser les démarches consulaires et de transport, nous collectons vos coordonnées personnelles et les documents officiels du défunt."
            },
            {
                id: "data-usage",
                title: "3. Utilisation des Données",
                content: "Les données servent uniquement aux démarches légales auprès des ambassades, au fret aérien et à l'information de la famille."
            },
            {
                id: "data-sharing",
                title: "4. Partage Officiel",
                content: "Aucune donnée n'est vendue à des tiers. Les documents sont transmis uniquement aux autorités officielles concernées."
            },
            {
                id: "data-security",
                title: "5. Sécurité",
                content: "Toutes vos informations sont stockées sur des serveurs hautement sécurisés et cryptés."
            },
            {
                id: "user-rights",
                title: "6. Vos Droits",
                content: "Pour toute demande de modification ou suppression de données: privacy@radwanfs.com."
            }
        ]
    },
    es: {
        title: "Política de Privacidad",
        subtitle: "Nos comprometemos a proteger sus datos y explicar su uso con total transparencia.",
        lastUpdated: "Actualizado: Agosto 2026",
        sections: [
            {
                id: "intro",
                title: "1. Introducción y Alcance",
                content: "Esta política describe cómo recopilamos, usamos y protegemos la información personal en los servicios de repatriación Radwan."
            },
            {
                id: "data-collection",
                title: "2. Información Recopilada",
                content: "Para llevar a cabo la repatriación y trámites legales, recopilamos sus datos de contacto e informes médicos oficiales del fallecido."
            },
            {
                id: "data-usage",
                title: "3. Uso de la Información",
                content: "Utilizada exclusivamente para trámites ante embajadas, reserva de carga aérea y coordinación familiar."
            },
            {
                id: "data-sharing",
                title: "4. Compartición Oficial",
                content: "No vendemos datos a empresas comerciales. Solo se comparten con organismos gubernamentales oficiales."
            },
            {
                id: "data-security",
                title: "5. Seguridad",
                content: "Sus documentos se almacenan en servidores totalmente cifrados y protegidos."
            },
            {
                id: "user-rights",
                title: "6. Sus Derechos",
                content: "Puede solicitar la modificación de sus datos escribiendo a privacy@radwanfs.com."
            }
        ]
    }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const currentLocale = ["ar", "en", "ru", "fr", "es"].includes(locale)
        ? (locale as "ar" | "en" | "ru" | "fr" | "es")
        : "ar";

    const data = privacyData[currentLocale];
    const baseUrl = "https://radwanfs.com";

    const ogLocales = {
        ar: "ar_EG",
        en: "en_US",
        ru: "ru_RU",
        fr: "fr_FR",
        es: "es_ES"
    };

    return {
        title: `${data.title} | رضوان لنقل الجثامين دولياً`,
        description: data.subtitle,

        openGraph: {
            title: `${data.title} | Radwan Funeral Services`,
            description: data.subtitle,
            url: `${baseUrl}/${currentLocale}/privacy-policy`,
            siteName: "Radwan Funeral Services",
            locale: ogLocales[currentLocale],
            type: "website",
            images: [
                {
                    url: `${baseUrl}/images/og-privacy.jpg`,
                    width: 1200,
                    height: 630,
                    alt: data.title
                }
            ]
        },

        alternates: {
            languages: {
                ar: `/ar/privacy-policy`,
                en: `/en/privacy-policy`,
                ru: `/ru/privacy-policy`,
                fr: `/fr/privacy-policy`,
                es: `/es/privacy-policy`
            }
        },

        robots: {
            index: true,
            follow: true
        }
    };
}

export default async function PrivacyPolicyPage({ params }: Props) {
    const { locale } = await params;
    const currentLocale = ["ar", "en", "ru", "fr", "es"].includes(locale)
        ? (locale as "ar" | "en" | "ru" | "fr" | "es")
        : "ar";

    const data = privacyData[currentLocale];

    if (!data) {
        notFound();
    }

    return (
        <main className="privacy-policy-page">
            <section className="privacy-hero">
                <h1 className="page-title">{data.title}</h1>
                <p className="page-subtitle">{data.subtitle}</p>
                <span className="last-updated">{data.lastUpdated}</span>
            </section>

            <section className="privacy-body-section">
                <aside className="privacy-sidebar">
                    <div className="sticky-nav">
                        <span className="nav-title">
                            {currentLocale === "ar" && "الفهرس السريع"}
                            {currentLocale === "en" && "Quick Index"}
                            {currentLocale === "ru" && "Быстрый указатель"}
                            {currentLocale === "fr" && "Index Rapide"}
                            {currentLocale === "es" && "Índice Rápido"}
                        </span>
                        <nav className="nav-links">
                            {data.sections.map((sec) => (
                                <a key={sec.id} href={`#${sec.id}`} className="nav-link">
                                    {sec.title}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>

                <div className="privacy-content-flow">
                    {data.sections.map((section) => (
                        <article key={section.id} id={section.id} className="privacy-card-block">
                            <h2 className="block-title">{section.title}</h2>
                            <p className="block-paragraph">{section.content}</p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
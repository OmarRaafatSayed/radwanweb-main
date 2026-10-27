export interface BlogContentSection {
    heading?: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
    paragraphs?: {
        ar: string[];
        en: string[];
        ru: string[];
        fr: string[];
        es: string[];
    };
    bullets?: {
        ar: string[];
        en: string[];
        ru: string[];
        fr: string[];
        es: string[];
    };
}

export interface BlogPost {
    id: string;
    slug: string;
    category: {
        id: string;
        name: {
            ar: string;
            en: string;
            ru: string;
            fr: string;
            es: string;
        };
    };
    title: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
    excerpt: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
    image: string;
    date: string;
    author: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
    content: BlogContentSection[];
}

export const blogsData: BlogPost[] = [
    {
        id: "1",
        slug: "how-to-repatriate-deceased-from-saudi-to-egypt",
        category: {
            id: "procedures",
            name: {
                ar: "إجراءات",
                en: "Procedures",
                ru: "Процедуры",
                fr: "Procédures",
                es: "Procedimientos"
            }
        },
        title: {
            ar: "كيفية نقل المتوفى من السعودية إلى مصر خطوة بخطوة",
            en: "Step-by-step Guide to Repatriating the Deceased from Saudi Arabia to Egypt",
            ru: "Пошаговое руководство по транспортировке усопшего из Саудовской Аравии в Египет",
            fr: "Guide étape par étape pour le rapatriement d'un défunt de l'Arabie Saoudite vers l'Égypte",
            es: "Guía paso a paso para la repatriación de fallecidos de Arabia Saudita a Egipto"
        },
        excerpt: {
            ar: "دليل شامل يوضح جميع الإجراءات والمستندات المطلوبة لنقل المتوفى من السعودية إلى مصر بكل سهولة ويسر.",
            en: "A comprehensive guide outlining all required procedures and documents for transporting the deceased easily.",
            ru: "Полное руководство с описанием всех необходимых процедур и документов для перевозки усопшего.",
            fr: "Un guide complet détaillant toutes les procédures et documents requis pour le transport du défunt.",
            es: "Una guía completa que detalla todos los procedimientos y documentos requeridos para el traslado."
        },
        image: "/images/image-default.png",
        date: "2026-05-12",
        author: {
            ar: "فريق رضوان للخدمات الجنائزية",
            en: "Radwan Funeral Services Team",
            ru: "Команда Radwan Funeral Services",
            fr: "Équipe Radwan Funeral Services",
            es: "Equipo de Servicios Funerarios Radwan"
        },
        content: [
            {
                heading: {
                    ar: "مقدمة عن إجراءات النقل بين المملكة ومصر",
                    en: "Introduction to Repatriation Procedures",
                    ru: "Введение в процедуру репатриации",
                    fr: "Introduction aux procédures de rapatriement",
                    es: "Introducción a los procedimientos de repatriación"
                },
                paragraphs: {
                    ar: [
                        "تعتبر عملية نقل جثمان المتوفى من المملكة العربية السعودية إلى جمهورية مصر العربية من العمليات التي تتطلب دقة متناهية وسرعة في تنفيذ الإجراءات القانونية والصحية.",
                        "في هذا الدليل، نلخص أهم الخطوات الأساسية التي تضمن تسهيل الشحن الجوي واستخراج كافة التصاريح اللازمة دون أي تأخير يؤثر على مشاعر ذوي المتوفى."
                    ],
                    en: [
                        "Repatriating a deceased body from Saudi Arabia to Egypt is a sensitive process requiring extreme accuracy and speed regarding health and legal permits.",
                        "In this guide, we summarize the primary essential steps to ensure smooth air transit and rapid permit clearance."
                    ],
                    ru: [
                        "Транспортировка тела усопшего из Саудовской Аравии в Египет требует высокой точности и соблюдения медицинских и юридических норм.",
                        "В данном руководстве описаны основные шаги для быстрого оформления авиаперевозки."
                    ],
                    fr: [
                        "Le rapatriement d'un corps de l'Arabie Saoudite vers l'Égypte exige une précision rigoureuse et le respect des normes sanitaires.",
                        "Ce guide résume les étapes clés pour assurer un transit aérien fluide et sans délai."
                    ],
                    es: [
                        "La repatriación de un fallecido de Arabia Saudita a Egipto requiere precisión absoluta y cumplimiento de las normas sanitarias y legales.",
                        "En esta guía resumimos los pasos fundamentales para un tránsito aéreo rápido y seguro."
                    ]
                }
            },
            {
                heading: {
                    ar: "الخطوات والمستندات المطلوبة",
                    en: "Required Steps & Documents",
                    ru: "Необходимые шаги и документы",
                    fr: "Étapes et documents requis",
                    es: "Pasos y documentos requeridos"
                },
                bullets: {
                    ar: [
                        "استخراج شهادة الوفاة الطبية الأولية من المستشفى المعتمد.",
                        "تصديق بلاغ الوفاة من الشرطة السعودية والجهات المختصة.",
                        "مراجعة القنصلية المصرية لاستخراج خطابات الموافقة والشحن الجوي.",
                        "تجهيز الصندوق وتجهيز البطانة المعدنية وفق الاشتراطات الصحية."
                    ],
                    en: [
                        "Obtaining the initial medical death certificate from an accredited hospital.",
                        "Attesting the death notification from Saudi police authorities.",
                        "Visiting the Egyptian Consulate for cargo clearance letters.",
                        "Preparing the casket with zinc lining according to health criteria."
                    ],
                    ru: [
                        "Получение первичного медицинского свидетельства о смерти в больнице.",
                        "Заверение уведомления о смерти в полиции Саудовской Аравии.",
                        "Обращение в консульство Египта для получения разрешения на транспортировку.",
                        "Подготовка гроба с цинковым вкладышем по санитарным нормам."
                    ],
                    fr: [
                        "Obtention du certificat de décès médical initial auprès de l'hôpital agréé.",
                        "Légalisation de la déclaration de décès auprès de la police saoudienne.",
                        "Consulat d'Égypte pour l'autorisation de rapatriement aérien.",
                        "Préparation du cercueil avec doublure en zinc conforme."
                    ],
                    es: [
                        "Obtención del certificado médico de defunción inicial en el hospital.",
                        "Legalización del informe de defunción ante las autoridades policiales.",
                        "Trámite ante el Consulado de Egipto para la autorización de carga aérea.",
                        "Preparación del ataúd con revestimiento de zinc según la norma sanitaria."
                    ]
                }
            }
        ]
    },
    {
        id: "2",
        slug: "required-documents-for-international-repatriation",
        category: {
            id: "documents",
            name: {
                ar: "مستندات",
                en: "Documents",
                ru: "Документы",
                fr: "Documents",
                es: "Documentos"
            }
        },
        title: {
            ar: "الأوراق والمستندات المطلوبة لنقل المتوفى دولياً",
            en: "Required Documents and Papers for International Deceased Repatriation",
            ru: "Необходимые документы для международной транспортировки усопшего",
            fr: "Documents et papiers requis pour le rapatriement international d'un défunt",
            es: "Documentos y papeles necesarios para la repatriación internacional de fallecidos"
        },
        excerpt: {
            ar: "تعرف على جميع المستندات الرسمية المطلوبة من الجهات المختلفة لإتمام عملية نقل المتوفى دون تأخير.",
            en: "Learn about all official documents required from various authorities to complete the process smoothly.",
            ru: "Узнайте обо всех официальных документах, необходимых для беспрепятственной транспортировки.",
            fr: "Découvrez tous les documents officiels requis par les différentes autorités pour finaliser le transport.",
            es: "Conozca todos los documentos oficiales requeridos para completar el proceso sin demoras."
        },
        image: "/images/image-default.png",
        date: "2026-05-05",
        author: {
            ar: "فريق رضوان للخدمات الجنائزية",
            en: "Radwan Funeral Services Team",
            ru: "Команда Radwan Funeral Services",
            fr: "Équipe Radwan Funeral Services",
            es: "Equipo de Servicios Funerarios Radwan"
        },
        content: [
            {
                heading: {
                    ar: "المستندات الأساسية للشحن الجوي الدولي",
                    en: "Essential Documents for International Air Transit",
                    ru: "Основные документы для международной авиаперевозки",
                    fr: "Documents essentiels pour le rapatriement aérien",
                    es: "Documentos esenciales para el tránsito aéreo internacional"
                },
                paragraphs: {
                    ar: [
                        "تتطلب شركات الطيران والحجر الصحي في مطارات العالم حزمة من الأوراق الرسمية المعتمدة لضمان عدم حدوث أي تأخير أثناء مرحلة المغادرة أو الوصول.",
                        "تختلف بعض التفاصيل البسيطة من دولة لأخرى، لكن الهيكل المستندي الرئيسي يظل ثابتاً ومطلوباً في جميع الدول."
                    ],
                    en: [
                        "Airlines and airport health authorities demand a strict set of certified documents to prevent any clearance delay at origin or destination.",
                        "Minor details vary between nations, but the core documentary framework remains universal globally."
                    ],
                    ru: [
                        "Авиакомпании и санитарные службы аэропортов требуют комплект заверенных документов для исключения задержек.",
                        "Некоторые требования различаются в зависимости от страны, но основной пакет документов одинаков."
                    ],
                    fr: [
                        "Les compagnies aériennes et autorités sanitaires exigent un ensemble de documents certifiés pour éviter tout retard.",
                        "Bien que certains détails varient selon les pays, le dossier documentaire de base reste le même."
                    ],
                    es: [
                        "Las aerolíneas y autoridades sanitarias requieren un conjunto de documentos certificados para evitar demoras.",
                        "Aunque existen pequeñas diferencias según el país, la estructura documental principal es universal."
                    ]
                }
            },
            {
                heading: {
                    ar: "قائمة الأوراق المطلوبة",
                    en: "Checklist of Required Papers",
                    ru: "Чек-лист необходимых документов",
                    fr: "Liste des pièces à fournir",
                    es: "Lista de verificación de documentos"
                },
                bullets: {
                    ar: [
                        "شهادة الوفاة الرسمية المعتمدة ومترجمة.",
                        "تقرير التحنيط والتعقيم الصادر من الطب الشرعي أو المستشفى.",
                        "شهادة غلق التابوت الحراري والمعاينة الصحية.",
                        "جواز سفر المتوفى وتصريح الشحن من السفارة."
                    ],
                    en: [
                        "Official certified & translated death certificate.",
                        "Embalming and sanitation report from hospital or coroner.",
                        "Hermetic sealing & health inspection certificate.",
                        "Deceased passport & embassy shipment clearance letter."
                    ],
                    ru: [
                        "Официальное свидетельство о смерти с переводом.",
                        "Справка бальзамирования и санитарной обработке.",
                        "Свидетельство об опечатывании цинкового гроба.",
                        "Паспорт усопшего и разрешение от посольства."
                    ],
                    fr: [
                        "Certificat de décès officiel traduit et légalisé.",
                        "Rapport d'embaumement et de soins sanitaires.",
                        "Certificat de scellement hermétique du cercueil.",
                        "Passeport du défunt et autorisation consulaire."
                    ],
                    es: [
                        "Certificado de defunción oficial traducido y legalizado.",
                        "Informe de embalsamamiento y preparación sanitaria.",
                        "Certificado de sellado hermético e inspección sanitaria.",
                        "Pasaporte del fallecido y autorización de la embajada."
                    ]
                }
            }
        ]
    },
    {
        id: "3",
        slug: "cost-of-repatriating-deceased-internationally",
        category: {
            id: "costs",
            name: {
                ar: "تكاليف",
                en: "Costs",
                ru: "Расходы",
                fr: "Coûts",
                es: "Costos"
            }
        },
        title: {
            ar: "ما هي تكلفة نقل المتوفى من دولة إلى أخرى؟",
            en: "What is the Cost of Repatriating a Deceased Person Internationally?",
            ru: "Какова стоимость транспортировки усопшего из одной страны в другую?",
            fr: "Quel est le coût du rapatriement d'un défunt d'un pays à un autre ?",
            es: "¿Cuál es el costo de trasladar a un fallecido de un país a otro?"
        },
        excerpt: {
            ar: "العوامل المؤثرة في تكلفة نقل المتوفى دولياً ومتوسط الأسعار لأشهر الوجهات حول العالم.",
            en: "Factors affecting the cost of international transport and average prices for popular destinations.",
            ru: "Факторы, влияющие на стоимость транспортировки, и средние цены по популярным направлениям.",
            fr: "Facteurs influençant le coût du rapatriement international et prix moyens pour les destinations courantes.",
            es: "Factores que influyen en el costo del traslado internacional y precios promedios por destino."
        },
        image: "/images/image-default.png",
        date: "2026-04-20",
        author: {
            ar: "فريق رضوان للخدمات الجنائزية",
            en: "Radwan Funeral Services Team",
            ru: "Команда Radwan Funeral Services",
            fr: "Équipe Radwan Funeral Services",
            es: "Equipo de Servicios Funerarios Radwan"
        },
        content: [
            {
                heading: {
                    ar: "عوامل تحديد تكاليف الترحيل الجوي",
                    en: "Factors Influencing Repatriation Expenses",
                    ru: "Факторы, влияющие на стоимость репатриации",
                    fr: "Facteurs déterminant le coût du rapatriement",
                    es: "Factores que determinan el costo de repatriación"
                },
                paragraphs: {
                    ar: [
                        "تختلف تكاليف نقل الجثمان بناءً على مسافة الطيران، وزن وحجم التابوت، ورسوم التخليص الجمركي في مطار المغادرة والوصول.",
                        "نحرص في شركة رضوان على توفير شفافية كاملة في الأسعار وتقديم باقات تناسب مختلف الاحتياجات."
                    ],
                    en: [
                        "Repatriation costs vary depending on flight distance, casket weight, and customs clearance fees at departure and arrival airports.",
                        "At Radwan, we strive to ensure total price transparency and offer packages suited for various needs."
                    ],
                    ru: [
                        "Стоимость репатриации зависит от дальности перелета, веса гроба и таможенных сборов в аэропортах.",
                        "В компании Radwan мы обеспечиваем полную прозрачность цен и предлагаем гибкие решения."
                    ],
                    fr: [
                        "Les coûts de rapatriement varient en fonction de la distance, du poids du cercueil et des frais de douane.",
                        "Chez Radwan, nous nous engageons à offrir une transparence totale des prix avec des formules adaptées."
                    ],
                    es: [
                        "Los costos varían según la distancia del vuelo, el peso del ataúd y las tarifas aduaneras.",
                        "En Radwan nos esforzamos por ofrecer transparencia total y paquetes adaptados a sus necesidades."
                    ]
                }
            }
        ]
    },
    {
        id: "4",
        slug: "embassy-and-consulate-role-in-repatriation",
        category: {
            id: "embassies",
            name: {
                ar: "سفارات",
                en: "Embassies",
                ru: "Посольства",
                fr: "Ambassades",
                es: "Embajadas"
            }
        },
        title: {
            ar: "دور السفارات والقنصليات في نقل المتوفى",
            en: "The Role of Embassies and Consulates in Deceased Repatriation",
            ru: "Роль посольств и консульств в транспортировке усопших",
            fr: "Le rôle des ambassades et consulats dans le rapatriement de défunts",
            es: "El papel de las embajadas y consulados en la repatriación de fallecidos"
        },
        excerpt: {
            ar: "كيف تساعدك السفارات والقنصليات في إنهاء الإجراءات الرسمية لنقل المتوفى إلى بلدك.",
            en: "How embassies and consulates assist you in completing official procedures for international transport.",
            ru: "Как посольства и консульства помогают в оформлении официальных документов для репатриации.",
            fr: "Comment les ambassades et consulats vous aident à finaliser les démarches officielles.",
            es: "Cómo las embajadas y consulados le ayudan a finalizar los trámites oficiales."
        },
        image: "/images/image-default.png",
        date: "2026-04-10",
        author: {
            ar: "فريق رضوان للخدمات الجنائزية",
            en: "Radwan Funeral Services Team",
            ru: "Команда Radwan Funeral Services",
            fr: "Équipe Radwan Funeral Services",
            es: "Equipo de Servicios Funerarios Radwan"
        },
        content: [
            {
                heading: {
                    ar: "التنسيق الدبلوماسي والقنصلي",
                    en: "Diplomatic & Consular Coordination",
                    ru: "Дипломатическое и консульское содействие",
                    fr: "Coordination diplomatique et consulaire",
                    es: "Coordinación diplomática y consular"
                },
                paragraphs: {
                    ar: [
                        "تلعب السفارات والقنصليات دوراً محوزرياً في اعتماد وثائق الوفاة وتسهيل إجراءات الشحن الجوي وتوفير الدعم القانوني لعوائل المتوفين بالخارج."
                    ],
                    en: [
                        "Embassies play a crucial role in attesting death certificates, expediting cargo clearance, and providing legal support for families abroad."
                    ],
                    ru: [
                        "Посольства играют ключевую роль в заверении документов, ускорении таможенного оформления и поддержке семей."
                    ],
                    fr: [
                        "Les ambassades jouent un rôle clé dans la légalisation des actes, la facilitation du fret et le soutien aux familles."
                    ],
                    es: [
                        "Las embajadas desempeñan un papel clave en la legalización de documentos, agilización de carga y apoyo a familias."
                    ]
                }
            }
        ]
    },
    {
        id: "5",
        slug: "important-tips-before-starting-repatriation",
        category: {
            id: "tips",
            name: {
                ar: "نصائح",
                en: "Tips",
                ru: "Советы",
                fr: "Conseils",
                es: "Consejos"
            }
        },
        title: {
            ar: "نصائح هامة قبل البدء في نقل المتوفى دولياً",
            en: "Important Tips Before Starting International Repatriation",
            ru: "Важные советы перед началом международной транспортировки усопшего",
            fr: "Conseils importants avant de commencer le rapatriement international",
            es: "Consejos importantes antes de iniciar la repatriación internacional"
        },
        excerpt: {
            ar: "نصائح هامة يجب أن تعرفها قبل البدء في إجراءات نقل المتوفى لتوفير الوقت والجهد والتكاليف.",
            en: "Essential tips to know before starting transport procedures to save time, effort, and costs.",
            ru: "Важные советы, которые помогут сэкономить время, усилия и расходы при оформлении.",
            fr: "Conseils essentiels à connaître avant d'entamer les démarches pour gagner du temps et réduire les coûts.",
            es: "Consejos esenciales que debe saber antes de iniciar trámites para ahorrar tiempo y costos."
        },
        image: "/images/image-default.png",
        date: "2026-04-01",
        author: {
            ar: "فريق رضوان للخدمات الجنائزية",
            en: "Radwan Funeral Services Team",
            ru: "Команда Radwan Funeral Services",
            fr: "Équipe Radwan Funeral Services",
            es: "Equipo de Servicios Funerarios Radwan"
        },
        content: [
            {
                heading: {
                    ar: "إرشادات سريعة لتجنب التأخير",
                    en: "Quick Tips to Avoid Delays",
                    ru: "Быстрые советы во избежание задержек",
                    fr: "Conseils rapides pour éviter les retards",
                    es: "Consejos rápidos para evitar retrasos"
                },
                paragraphs: {
                    ar: [
                        "التواصل المبكر مع شركة نقل معتمدة وتجهيز أوراق الهوية للفقيد يوفر الكثير من الوقت والمجهود في اللحظات الأولى."
                    ],
                    en: [
                        "Early communication with a certified repatriation company saves critical time during initial arrangements."
                    ],
                    ru: [
                        "Своевременное обращение в специализированную компанию экономит время на начальном этапе."
                    ],
                    fr: [
                        "Contacter rapidement une entreprise certifiée permet de gagner un temps précieux dès le début."
                    ],
                    es: [
                        "Contactar a tiempo con una empresa certificada ahorra tiempo valioso desde el primer momento."
                    ]
                }
            }
        ]
    },
    {
        id: "6",
        slug: "certified-shipping-caskets-standards",
        category: {
            id: "caskets",
            name: {
                ar: "صناديق الشحن",
                en: "Caskets",
                ru: "Гробы",
                fr: "Cercueils",
                es: "Ataúdes"
            }
        },
        title: {
            ar: "معايير المواصفات الدولية لصناديق شحن الجثامين",
            en: "International Specification Standards for Certified Shipping Caskets",
            ru: "Международные стандарты и спецификации для транспортировочных гробов",
            fr: "Normes et spécifications internationales pour les cercueils de rapatriement",
            es: "Normas de especificación internacional para ataúdes de transporte homologados"
        },
        excerpt: {
            ar: "دليل توضيحي حول اشتراطات الشحن الجوي والتبطين المعدني المعتمد لصناديق نقل الموتى.",
            en: "Explanatory guide on air freight requirements and approved zinc lining for caskets.",
            ru: "Информационное руководство по требованиям авиаперевозок и цинковым вкладышам.",
            fr: "Guide explicatif sur les exigences de fret aérien et le doublage en zinc agréé.",
            es: "Guía explicativa sobre requisitos de carga aérea y revestimiento de zinc homologado."
        },
        image: "/images/image-default.png",
        date: "2026-03-25",
        author: {
            ar: "فريق رضوان للخدمات الجنائزية",
            en: "Radwan Funeral Services Team",
            ru: "Команда Radwan Funeral Services",
            fr: "Équipe Radwan Funeral Services",
            es: "Equipo de Servicios Funerarios Radwan"
        },
        content: [
            {
                heading: {
                    ar: "شروط منظمة IATA للتابوت الجوي",
                    en: "IATA Air Casket Requirements",
                    ru: "Требования IATA к авиаперевозке гробов",
                    fr: "Exigences IATA pour les cercueils aériens",
                    es: "Requisitos de la IATA para ataúdes aéreos"
                },
                paragraphs: {
                    ar: [
                        "تشترط منظمة الطيران المدني وجود تبطين زنك داخلي معزول حرارياً لمنع التسريب والروائح وضمان الحفاظ الكامل على حرمة المتوفى."
                    ],
                    en: [
                        "IATA rules mandate a hermetically sealed zinc inner tray to prevent leakage and preserve deceased dignity during flight."
                    ],
                    ru: [
                        "Правила IATA требуют наличия герметичного цинкового вкладыша для исключения протечек во время полета."
                    ],
                    fr: [
                        "Les règles IATA imposent un bac intérieur en zinc hermétique pour éviter toute fuite pendant le vol."
                    ],
                    es: [
                        "Las normas de la IATA exigen un recipiente interior de zinc hermético para evitar fugas durante el vuelo."
                    ]
                }
            }
        ]
    }
];
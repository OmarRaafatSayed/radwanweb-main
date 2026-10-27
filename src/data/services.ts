export interface LocalizedText {
    ar: string;
    en: string;
    ru: string;
    fr: string;
    es: string;
}

export interface ServiceFeature {
    title: LocalizedText;
    desc: LocalizedText;
}

export interface ServiceDetailContent {
    introSubtitle: LocalizedText;
    fullDescription: LocalizedText;
    features: ServiceFeature[];
    requiredDocuments?: {
        ar: string[];
        en: string[];
        ru: string[];
        fr: string[];
        es: string[];
    };
}

export interface ServiceItem {
    id: string;
    iconName: "Plane" | "Sparkles" | "Box" | "Flame" | "Users" | "Flower2" | "HeartPulse";
    title: LocalizedText;
    desc: LocalizedText;
    detailContent: ServiceDetailContent;
}

export const servicesList: ServiceItem[] = [
    {
        id: "international-repatriation",
        iconName: "Plane",
        title: {
            ar: "إعادة الجثامين دولياً",
            en: "International Repatriation",
            ru: "Международная репатриация",
            fr: "Rapatriement international",
            es: "Repatriación internacional"
        },
        desc: {
            ar: "تسهيل إجراءات الشحن الجوي من وإلى مصر، بالتنسيق المباشر مع السفارات، مصلحة الطب الشرعي (مشرحة زينهم)، والتغليف المعتمد للمواصفات الدولية.",
            en: "Facilitating air cargo transport to and from Egypt, direct coordination with embassies, Forensic Medicine (Zeinhom Morgue), and zinc-sealed international packaging.",
            ru: "Организация авиаперевозки усопших в Египет и из него, прямая связь с посольствами, бюро судмедэкспертизы (морг Зейнхом) и упаковка по международным стандартам.",
            fr: "Facilitation du transport aérien depuis et vers l'Égypte, coordination directe avec les ambassades, la médecine légale (morgue Zeinhom) et emballage étanche aux normes internationales.",
            es: "Facilitación del transporte aéreo desde y hacia Egipto, coordinación directa con embajadas, Medicina Forense (morgue Zeinhom) y embalaje sellado internacional."
        },
        detailContent: {
            introSubtitle: {
                ar: "شحن ونقل الجثامين دولياً بشراكات دبلوماسية وتجهيز مطابق للمواصفات",
                en: "International repatriation with diplomatic partnerships and standard-compliant preparation",
                ru: "Международная репатриация с дипломатическим партнерством и соответствием стандартам",
                fr: "Rapatriement international avec partenariats diplomatiques et préparation conforme aux normes",
                es: "Repatriación internacional con alianzas diplomáticas y preparación conforme a las normas"
            },
            fullDescription: {
                ar: "نتخصص في شحن ونقل الجثامين من مصر إلى كافة دول العالم، وكذلك استقبال جثامين المواطنين المتوفين بالخارج وإنهاء إجراءات وصولهم. بفضل التعاقدات المباشرة لشركة رضوان مع العديد من السفارات الأجنبية، ومصلحة الطب الشرعي بالقاهرة (مشرحة زينهم)، ومكاتب الصحة والجهات الأمنية، نضمن سرعة استخراج تصاريح السفر وموافقات النيابة والشحن الجوي والتغليف الحراري المبطن بالزنك المحكم المطابق لاشتراطات الجمارك والطيران الدولي.",
                en: "We specialize in repatriating deceased individuals from Egypt to all countries worldwide, as well as receiving Egyptian citizens who pass away abroad. Thanks to Radwan Company's direct contracts with foreign embassies, Cairo Forensic Medicine (Zeinhom Morgue), health offices, and security authorities, we ensure rapid issuance of transit permits, prosecution approvals, air freight, and certified zinc-lined thermal packaging conforming to international customs and aviation requirements.",
                ru: "Мы специализируемся на перевозке усопших из Египта во все страны мира, а также на приеме тел граждан Египта, умерших за рубежом. Благодаря прямым контрактам компании Радван с иностранными посольствами, бюро судмедэкспертизы Каира (морг Зейнхом), органами здравоохранения и безопасности, мы гарантируем быстрое получение разрешений на вывоз, согласований прокуратуры и авиаперевозку в цинковых гробах.",
                fr: "Nous sommes spécialisés dans le rapatriement des défunts depuis l'Égypte vers tous les pays du monde, ainsi que la réception des citoyens décédés à l'étranger. Grâce aux contrats directs de la société Radwan avec les ambassades étrangères, la médecine légale du Caire (morgue Zeinhom), les bureaux de santé et les autorités de sécurité, nous garantissons l'obtention rapide des permis de transit, des autorisations du parquet et des coffrages étanches en zinc conformes aux normes internationales.",
                es: "Nos especializamos en la repatriación de fallecidos desde Egipto a cualquier país del mundo, así como en la recepción de ciudadanos que fallecen en el extranjero. Gracias a los contratos directos de Radwan con embajadas extranjeras, Medicina Forense de El Cairo (morgue Zeinhom), oficinas de salud y autoridades de seguridad, garantizamos la rápida obtención de permisos de tránsito, autorizaciones fiscales y embalaje de zinc certificado según normas internacionales."
            },
            features: [
                {
                    title: {
                        ar: "تسهيل إجراءات الشحن الجوي",
                        en: "Air Cargo & Transport Facilitation",
                        ru: "Организация авиаперевозки",
                        fr: "Facilitation du fret aérien",
                        es: "Facilitación de carga aérea"
                    },
                    desc: {
                        ar: "شحن ونقل الجثامين من مصر لجميع الدول واستقبال القادمين من الخارج وتخليص وصولهم.",
                        en: "Shipping and transporting bodies from Egypt to all countries and clearing incoming arrivals.",
                        ru: "Отправка и встреча тел усопших из Египта во все страны с таможенным оформлением.",
                        fr: "Expédition des corps depuis l'Égypte et gestion du dédouanement à l'arrivée.",
                        es: "Envío y recepción de fallecidos desde Egipto a todos los países con despacho aduanero."
                    }
                },
                {
                    title: {
                        ar: "شراكات واعتمادات دبلوماسية",
                        en: "Diplomatic Partnerships",
                        ru: "Дипломатическое партнерство",
                        fr: "Partenariats diplomatiques",
                        es: "Alianzas diplomáticas"
                    },
                    desc: {
                        ar: "تعاقدات مباشرة مع السفارات الأجنبية لسرعة استخراج تصاريح السفر والشهادات.",
                        en: "Direct contracts with foreign embassies to swiftly issue transit permits and official records.",
                        ru: "Прямые соглашения с посольствами для оперативного получения виз и разрешений.",
                        fr: "Contrats directs avec les ambassades pour l'obtention rapide des permis de transit.",
                        es: "Contratos directos con embajadas extranjeras para obtener permisos de tránsito rápidamente."
                    }
                },
                {
                    title: {
                        ar: "تعامل مباشر مع الجهات المصرية",
                        en: "Direct Egyptian Authority Liaison",
                        ru: "Взаимодействие с госорганами Египта",
                        fr: "Liaison directe avec les autorités égyptiennes",
                        es: "Enlace directo con autoridades egipcias"
                    },
                    desc: {
                        ar: "إنهاء موافشات النيابة وتصاريح الدفن والشحن مع مشرحة زينهم ومكاتب الصحة.",
                        en: "Clearing prosecution approvals, burial permits, and cargo with Zeinhom Morgue and health offices.",
                        ru: "Оформление разрешений прокуратуры, справка о смерти и морг Зейнхом.",
                        fr: "Gestion des autorisations du parquet, permis d'inhumation avec la morgue Zeinhom.",
                        es: "Gestión de autorizaciones fiscales y permisos de entierro con la morgue Zeinhom."
                    }
                },
                {
                    title: {
                        ar: "تجهيز مطابق للمواصفات الدولية",
                        en: "International Standard Packaging",
                        ru: "Подготовка по международным стандартам",
                        fr: "Préparation conforme aux normes internationales",
                        es: "Embalaje según normas internacionales"
                    },
                    desc: {
                        ar: "توفير التغليف الحراري والصناديق المبطنة بالزنك المحكم المطابقة لاشتراطات الطيران.",
                        en: "Providing certified thermal wrapping and hermetically sealed zinc-lined flight caskets.",
                        ru: "Предоставление герметичных цинковых гробов и термической упаковки для авиаперелета.",
                        fr: "Fourniture de cercueils doublés de zinc hermétique et emballage thermique homologué.",
                        es: "Suministro de ataúdes sellados de zinc y embalaje térmico homologado para vuelos."
                    }
                }
            ],
            requiredDocuments: {
                ar: [
                    "جواز السفر الأصلي للمتوفى",
                    "شهادة الوفاة الطبية الرسمية",
                    "تصريح الشحن الصادر من مكتب الصحة",
                    "موافقة السفارة أو القنصلية التابع لها المتوفى",
                    "تصريح النيابة العامة (في الحالات الجنائية أو الحوادث)"
                ],
                en: [
                    "Original Deceased Passport",
                    "Official Medical Death Certificate",
                    "Health Office Shipping Permit",
                    "Embassy / Consulate Clearance Certificate",
                    "Prosecutor Permit (For forensic or accident cases)"
                ],
                ru: [
                    "Оригинал паспорта усопшего",
                    "Официальное медицинское свидетельство о смерти",
                    "Разрешение на вывоз от санитарного бюро",
                    "Согласование посольства или консульства",
                    "Разрешение прокуратуры (при несчастных случаях)"
                ],
                fr: [
                    "Passeport original du défunt",
                    "Certificat médical de décès officiel",
                    "Permis de transport du bureau de santé",
                    "Accord de l'ambassade ou du consulat",
                    "Autorisation du parquet (en cas d'accident)"
                ],
                es: [
                    "Pasaporte original del fallecido",
                    "Certificado médico de defunción oficial",
                    "Permiso de transporte de la oficina de salud",
                    "Autorización de la embajada o consulado",
                    "Permiso de la Fiscalía (en caso de accidentes)"
                ]
            }
        }
    },
    {
        id: "embalming-services",
        iconName: "Sparkles",
        title: {
            ar: "خدمات التحنيط والرعاية الصحية",
            en: "Embalming & Preservation Services",
            ru: "Услуги бальзамирования и ухода",
            fr: "Services d'embaumement et de soins",
            es: "Servicios de embalsamamiento y cuidados"
        },
        desc: {
            ar: "تحنيط طبي شامل تحت إشراف أطباء متخصصين لضمان حفظ الجثمان، مع التجهيز والغسيل وفق الشريعة الإسلامية أو الطقوس المسيحية والعناية بالمظهر للتوديع بسلام.",
            en: "Comprehensive medical embalming under specialized doctors for body preservation, ritual washing according to Islamic or Christian traditions, and cosmetic care for peaceful viewing.",
            ru: "Медицинское бальзамирование квалифицированными врачами, ритуальное омовение по исламским или христианским обрядам и подготовка к прощанию.",
            fr: "Embaumement médical complet par des médecins spécialistes, toilette rituelle selon les traditions musulmanes ou chrétiennes et soins de présentation.",
            es: "Embalsamamiento médico completo por doctores especialistas, lavado ritual según tradiciones islámicas o cristianas y cuidado estético para la despedida."
        },
        detailContent: {
            introSubtitle: {
                ar: "تحنيط معتمد دولياً ورعاية جثمانية متكاملة وفق الشريعة والطقوس الدينية",
                en: "Internationally certified embalming and complete body care adhering to religious rites",
                ru: "Сертифицированное бальзамирование и полный уход в соответствии с религиозными обрядами",
                fr: "Embaumement certifié et soins funéraires complets selon les rites religieux",
                es: "Embalsamamiento certificado y cuidado integral conforme a los ritos religiosos"
            },
            fullDescription: {
                ar: "نقدم خدمات التحنيط الطبي الشامل تحت إشراف أطباء متخصصين ومصرح لهم لضمان حفظ الجثمان وفق أعلى معايير السلامة والجودة العالمية المطلوبة للشحن الدولي. كما نوفر فريقاً متكاملاً لغسيل وتكفين المتوفى وفقاً أحكام الشريعة الإسلامية أو الطقوس المسيحية بحسب رغبة العائلة، مع العناية التامة بمظهر المتوفى لمنح الأهل والأقارب فرصة التوديع بسلام داخل مرافقنا المجهزة.",
                en: "We offer comprehensive medical embalming performed by specialized certified doctors to ensure preservation according to international safety and health standards required for air travel. We also provide a dedicated team for ritual washing and preparation according to Islamic Sharia or Christian rites, with thorough cosmetic presentation to offer families a comforting farewell.",
                ru: "Мы предоставляем услуги профессионального медицинского бальзамирования под руководством лицензированных врачей для сохранения тела в соответствии с международными правилами авиаперевозок. Также наша команда проводит ритуальное омовение и подготовку по законам ислама или христианским традициям.",
                fr: "Nous proposons un embaumement médical complet réalisé par des médecins agréés pour garantir la conservation du corps selon les normes sanitaires internationales. Notre équipe assure également la toilette rituelle selon la Sharia islamique ou les rites chrétiens, avec soins de présentation pour un dernier adieu serein.",
                es: "Ofrecemos embalsamamiento médico completo realizado por doctores certificados para garantizar la conservación según normas internacionales de aviación. Contamos con un equipo dedicado al lavado y preparación según la Sharia islámica o ritos cristianos, con cuidado estético para una despedida pacífica."
            },
            features: [
                {
                    title: {
                        ar: "تحنيط طبي معتمد دولياً",
                        en: "Internationally Certified Embalming",
                        ru: "Сертифицированное бальзамирование",
                        fr: "Embaumement médical certifié",
                        es: "Embalsamamiento médico certificado"
                    },
                    desc: {
                        ar: "إشراف أطباء متخصصين لإصدار شهادة التحنيط المعتمدة للشحن الجوي.",
                        en: "Supervised by specialist doctors to issue official embalming certificates for flight travel.",
                        ru: "Проводится врачами-специалистами с выдачей официального свидетельства для авиаперелета.",
                        fr: "Sous la direction de médecins spécialistes délivrant le certificat officiel pour le vol.",
                        es: "Supervisado por doctores especialistas que emiten el certificado oficial para vuelos."
                    }
                },
                {
                    title: {
                        ar: "غسيل وتجهيز وفق الشريعة والطقوس",
                        en: "Religious Ritual Preparation",
                        ru: "Ритуальное омовение и подготовка",
                        fr: "Toilette rituelle et préparation",
                        es: "Preparación y lavado ritual"
                    },
                    desc: {
                        ar: "فريق متخصص للغسيل والتكفين وفق الشريعة الإسلامية أو الشعائر المسيحية.",
                        en: "Dedicated male/female staff for ritual washing and shrouding per Islamic or Christian traditions.",
                        ru: "Квалифицированный персонал для омовения и облачения по исламским или христианским обрядам.",
                        fr: "Personnel qualifié pour la toilette et le linceul selon les rituels musulmans ou chrétiens.",
                        es: "Personal especializado para lavado y amortajado según tradiciones islámicas o cristianas."
                    }
                },
                {
                    title: {
                        ar: "العناية بالمظهر والتوديع",
                        en: "Cosmetic Care & Viewing",
                        ru: "Косметический уход и прощание",
                        fr: "Soins de présentation et recueillement",
                        es: "Cuidado estético y despedida"
                    },
                    desc: {
                        ar: "تهيئة المتوفى بوقار ليتمكن الأهل من إلقاء نظرة الوداع الأخيرة في هدوء.",
                        en: "Preparing the deceased with dignity, allowing families peaceful moments for final viewing.",
                        ru: "Бережная подготовка внешнего вида усопшего для спокойного прощания близких.",
                        fr: "Présentation digne du défunt permettant aux proches un moment de recueillement apaisé.",
                        es: "Preparación digna del fallecido para permitir a la familia momentos de despedida en paz."
                    }
                }
            ],
            requiredDocuments: {
                ar: [
                    "تصريح الصحة الأولي للتحنيط",
                    "جواز سفر أو بطاقة الرقم القومي للمتوفى",
                    "موافقة أهل المتوفى على إجراءات التحنيط والتجهيز"
                ],
                en: [
                    "Preliminary Health Permit for Embalming",
                    "Deceased Passport or National ID",
                    "Family Consent Form for Embalming & Preparation"
                ],
                ru: [
                    "Первичное медицинское разрешение на бальзамирование",
                    "Паспорт или удостоверение личности усопшего",
                    "Согласие родственников на бальзамирование"
                ],
                fr: [
                    "Permis sanitaire préalable à l'embaumement",
                    "Passeport ou pièce d'identité du défunt",
                    "Consentement de la famille pour les soins"
                ],
                es: [
                    "Permiso sanitario previo para embalsamamiento",
                    "Pasaporte o documento de identidad del fallecido",
                    "Consentimiento familiar para la preparación"
                ]
            }
        }
    },
    {
        id: "caskets-and-urns",
        iconName: "Box",
        title: {
            ar: "اختيار التوابيت والجرار",
            en: "Selection of Caskets & Urns",
            ru: "Выбор гробов и урн",
            fr: "Sélection de cercueils et d'urnes",
            es: "Selección de ataúdes y urnas"
        },
        desc: {
            ar: "توفير تشكيلة واسعة من التوابيت المبطنة بالزنك للشحن الدولي، وتوابيت الدفن المحلي المتنوعة، بالإضافة إلى جرار الرماد التذكارية الخشبية والمعدنية والرخامية.",
            en: "Providing a wide range of zinc-lined caskets for international shipping, local burial caskets, and commemorative urns in wood, metal, and marble.",
            ru: "Широкий выбор цинковых гробов для международных авиаперевозок, гробов для местного захоронения и памятных урн из дерева, металла и мрамора.",
            fr: "Large gamme de cercueils doublés de zinc pour le transport international, cercueils d'inhumation locale et urnes cinéraires en bois, métal et marbre.",
            es: "Amplia gama de ataúdes con revestimiento de zinc para vuelos internacionales, ataúdes para entierro local y urnas conmemorativas de madera, metal y mármol."
        },
        detailContent: {
            introSubtitle: {
                ar: "توابيت معتمدة للشحن الجوي وتصاميم متنوعة للدفن وجرار الرماد",
                en: "Flight-certified caskets, local burial designs, and commemorative ash urns",
                ru: "Сертифицированные гробы для авиаперелетов, варианты для захоронения и урны для праха",
                fr: "Cercueils homologués pour le vol, modèles d'inhumation et urnes cinéraires",
                es: "Ataúdes certificados para vuelos, modelos de entierro y urnas conmemorativas"
            },
            fullDescription: {
                ar: "نوفر تشكيلة متكاملة من التوابيت المصممة خصيصاً للشحن الجوي الدولي والمبطنة بشرائح الزنك المعتمدة لحفظ الجثمان وإغلاقه حرارياً وفق شروط شركات الطيران. كما نوفر خيارات متعددة لتوابيت الدفن المحلي من الأخشاب الفاخرة والبسيطة لتناسب كافة التفضيلات والميزانيات، إلى جانب جرار الرماد التذكارية المصنوعة من الرخام، الخشب الفاخر، والمعادن المقاومة لنقل أو حفظ الرماد.",
                en: "We offer a complete collection of caskets engineered for international air transport, lined with certified zinc sheets and hermetically sealed as mandated by global airlines. Additionally, we provide diverse local burial caskets ranging from simple wood veneers to solid hardwoods, alongside memorial ash urns crafted from marble, fine wood, and metals.",
                ru: "Мы предлагаем ассортимент гробов, специально предназначенных для международных авиаперевозок, с цинковым вкладышем и герметичной запайкой. Также в наличии гробы для местного захоронения из различных пород дерева и памятные урны из мрамора, дерева и металла.",
                fr: "Nous proposons une gamme complète de cercueils conçus pour le transport aérien international, doublés de zinc étanche selon les exigences des compagnies aériennes. Nous offrons également un choix varié de cercueils d'inhumation locale et des urnes cinéraires en marbre, bois et métal.",
                es: "Ofrecemos una colección completa de ataúdes diseñados para el transporte aéreo internacional, revestidos de zinc y sellados herméticamente según exigencias de las aerolíneas. También disponemos de ataúdes para entierro local y urnas conmemorativas de mármol, madera y metal."
            },
            features: [
                {
                    title: {
                        ar: "توابيت بمواصفات الشحن الدولي",
                        en: "International Flight Caskets",
                        ru: "Цинковые гробы для авиаперелетов",
                        fr: "Cercueils pour transport international",
                        es: "Ataúdes para transporte internacional"
                    },
                    desc: {
                        ar: "توابيت مقواة ومبطنة بالزنك المحكم والمطابق لاشتراطات الطيران والجمارك.",
                        en: "Reinforced caskets lined with hermetically sealed zinc conforming to customs and airline mandates.",
                        ru: "Усиленные гробы с герметичным цинковым вкладышем по стандартам международной авиации.",
                        fr: "Cercueils renforcés doublés de zinc hermétique conforme aux règles douanières et aériennes.",
                        es: "Ataúdes reforzados sellados de zinc conforme a regulaciones aduaneras y de aviación."
                    }
                },
                {
                    title: {
                        ar: "توابيت للدفن المحلي",
                        en: "Local Burial Caskets",
                        ru: "Гробы для местного захоронения",
                        fr: "Cercueils d'inhumation locale",
                        es: "Ataúdes para entierro local"
                    },
                    desc: {
                        ar: "تصاميم وأحجام خشبية متنوعة تلبي كافة الأذواق والميزانيات للجنازات المحلية.",
                        en: "Various wooden designs and dimensions meeting all preferences and budgets for local services.",
                        ru: "Разнообразные деревянные модели различных размеров и ценовых категорий.",
                        fr: "Différents modèles en bois adaptées à tous les budgets pour cérémonies locales.",
                        es: "Diversos diseños en madera adaptados a todos los presupuestos para servicios locales."
                    }
                },
                {
                    title: {
                        ar: "جرار حفظ الرماد (Urns)",
                        en: "Commemorative Ash Urns",
                        ru: "Памятные урны для праха",
                        fr: "Urnes cinéraires commémoratives",
                        es: "Urnas conmemorativas para cenizas"
                    },
                    desc: {
                        ar: "جرار تذكارية راقية (رخام، خشب، معدن) لنقل أو حفظ الرماد بأمان ورقي.",
                        en: "Elegant memorial urns (marble, hardwood, metal) for safe transport or home preservation.",
                        ru: "Изящные урны из мрамора, дерева и металла для безопасного хранения праха.",
                        fr: "Urnes élégantes en marbre, bois massif et métal pour la conservation du souvenir.",
                        es: "Urnas elegantes de mármol, madera y metal para conservar el recuerdo de forma segura."
                    }
                }
            ]
        }
    },
    {
        id: "cremation-services",
        iconName: "Flame",
        title: {
            ar: "خدمات حرق الجثث",
            en: "Cremation Services",
            ru: "Услуги кремации",
            fr: "Services de crémation",
            es: "Servicios de cremación"
        },
        desc: {
            ar: "تنسيق كامل لعمليات حرق الجثث للأجانب وغير المقيمين بالتنسيق مع السفارات، استخراج تصاريح التكريم والحرق، وتسليم الرماد في جرار مختومة رسمياً للسفر.",
            en: "Complete arrangements for cremation for foreign nationals in coordination with embassies, issuing legal permits, and delivering sealed urns ready for flight.",
            ru: "Полная организация кремации для иностранных граждан во взаимодействии с посольствами, оформление разрешений и выдача опечатанной урны.",
            fr: "Organisation complète de la crémation pour les ressortissants étrangers en coordination avec les ambassades, obtention des permis et remise d'urnes scellées.",
            es: "Gestión integral de cremaciones para extranjeros coordinada con embajadas, obtención de permisos legales y entrega de urnas selladas para viajes."
        },
        detailContent: {
            introSubtitle: {
                ar: "تسهيل إجراءات حرق الجثث الرسمية والدولية واستخراج التصاريح القانونية",
                en: "Facilitating official international cremation procedures and legal documentations",
                ru: "Организация официальной кремации и получение всех юридических разрешений",
                fr: "Facilitation des procédures de crémation internationales et permis légaux",
                es: "Facilitación de trámites de cremación internacional y permisos legales"
            },
            fullDescription: {
                ar: "نقدم خدمة حرق الجثث وتسهيل كافة إجراءاتها الرسمية للأجانب والجاليات المقيمة في مصر وفقاً لرغبة المتوفى والعائلة، وذلك بالتنسيق الكامل مع السفارات والقنصليات المعنية داخل مصر. يتولى فريقنا استخراج جميع الشهادات والتصاريح القانونية والصحية المطلوبة لإجراء العملية وفق الأطر الرسمية، وتسليم الرماد للأهل أو مندوب السفارة داخل جرار مخصصة ومختومة رسمياً لتسهيل نقلها خارج البلاد.",
                en: "We manage cremation arrangements for foreign nationals and residents in Egypt in accordance with the deceased and family wishes, in full coordination with concerned embassies in Cairo. Our team handles all necessary legal and health permits required to complete the process officially, returning the ashes to the family or embassy representative in sealed certified urns for transport.",
                ru: "Мы организуем процедуру кремации для иностранных граждан и жителей Египта в соответствии с волей усопшего и семьи, при полном согласовании с посольствами. Наша команда оформляет все необходимые разрешения, а затем передает прах в опечатанной урне для перевозки за границу.",
                fr: "Nous gérons les formalités de crémation pour les ressortissants étrangers en Égypte, en coordination avec les ambassades. Notre équipe obtient l'ensemble des autorisations légales et sanitaires requises, puis remet les cendres à la famille ou à l'ambassade dans une urne scellée.",
                es: "Ofrecemos servicios de cremación para extranjeros y residentes en Egipto en coordinación con las embajadas correspondientes. Nuestro equipo tramita los permisos legales y sanitarios, entregando las cenizas a la familia en urnas selladas para su traslado internacional."
            },
            features: [
                {
                    title: {
                        ar: "تنفيذ الرغبات الرسمية والدولية",
                        en: "International & Embassy Liaison",
                        ru: "Согласование с посольствами",
                        fr: "Coordination consulaire et internationale",
                        es: "Coordinación consular e internacional"
                    },
                    desc: {
                        ar: "تسهيل إجراءات حرق الجثث للأجانب بالتنسيق الكامل مع القنصليات المعتمدة.",
                        en: "Facilitating cremation for foreign citizens with complete embassy approval.",
                        ru: "Проведение кремации для иностранных граждан с согласия консульств.",
                        fr: "Facilitation de la crémation pour les étrangers avec accord consulaire.",
                        es: "Facilitación de cremación para extranjeros con autorización consular."
                    }
                },
                {
                    title: {
                        ar: "استخراج شهادات التكريم والحرق",
                        en: "Legal Permit Procurement",
                        ru: "Получение юридических разрешений",
                        fr: "Obtention des permis légaux",
                        es: "Obtención de permisos legales"
                    },
                    desc: {
                        ar: "إنهاء كافة المستندات والتصاريح القانونية والصحية الرسمية المطلوبة.",
                        en: "Completing all mandatory official health and legal documentation.",
                        ru: "Оформление всех официальных медицинских и юридических справок.",
                        fr: "Obtention de tous les certificats légaux et sanitaires obligatoires.",
                        es: "Tramitación de todos los certificados legales y sanitarios obligatorios."
                    }
                },
                {
                    title: {
                        ar: "تسليم وتجهيز الرماد للسفر",
                        en: "Sealed Urn Handover for Transit",
                        ru: "Выдача праха в опечатанной урне",
                        fr: "Remise d'urne scellée pour le voyage",
                        es: "Entrega de urna sellada para viaje"
                    },
                    desc: {
                        ar: "تسليم الرماد في جرار مختومة رسمياً لتسهيل إنهاء إجراءات المطار والشحن.",
                        en: "Handing over ashes in officially sealed urns to ease airport customs clearance.",
                        ru: "Передача праха в опечатанных урнах для беспрепятственного прохождения таможни.",
                        fr: "Remise des cendres en urne scellée pour le dédouanement à l'aéroport.",
                        es: "Entrega de cenizas en urnas selladas para facilitar el despacho en aeropuertos."
                    }
                }
            ],
            requiredDocuments: {
                ar: [
                    "موافقة كتابية صريحة من السفارة أو القنصلية",
                    "جواز السفر الأصلي للمتوفى",
                    "وصية المتوفى أو توكيل رسمي من أقارب الدرجة الأولى",
                    "تصريح الصحة والنيابة العامة بالحرق"
                ],
                en: [
                    "Written Official Approval from Embassy/Consulate",
                    "Original Deceased Passport",
                    "Deceased Will or First-Degree Family Power of Attorney",
                    "Official Health & Prosecution Cremation Permit"
                ],
                ru: [
                    "Официальное письменное разрешение посольства",
                    "Оригинал паспорта усопшего",
                    "Завещание или доверенность от ближних родственников",
                    "Разрешение Минздрава и прокуратуры на кремацию"
                ],
                fr: [
                    "Accord écrit officiel de l'ambassade ou du consulat",
                    "Passeport original du défunt",
                    "Testament du défunt ou procuration familiale directe",
                    "Permis sanitaire et judiciaire de crémation"
                ],
                es: [
                    "Aprobación oficial por escrito de la embajada o consulado",
                    "Pasaporte original del fallecido",
                    "Testamento o poder notarial de familiares directos",
                    "Permiso sanitario y judicial para cremación"
                ]
            }
        }
    },
    {
        id: "funeral-arrangements",
        iconName: "Users",
        title: {
            ar: "ترتيبات الجنازة ومراسم التشييع",
            en: "Funeral Arrangements & Logistics",
            ru: "Организация похорон и логистика",
            fr: "Organisation de funérailles et logistique",
            es: "Arreglos y logística funeraria"
        },
        desc: {
            ar: "سيارات نقل موتى حديثة ومبردة بين المحافظات والمطارات على مدار 24 ساعة، تنظيم المراسم الدينية بالمسافر والمساجد والكنائس، ومرافقة شاملة للأسر ودبلوماسيي السفارات.",
            en: "Modern refrigerated hearse fleet available 24/7 across all Egyptian governorates and airports, coordination of religious ceremonies in mosques or churches, and personal guidance.",
            ru: "Современные автокатафалки с охлаждением 24/7 по всему Египту и аэропортам, организация религиозных обрядов в мечетях и церквях, сопровождение семей.",
            fr: "Flotte de corbillards modernes réfrigérés 24/7 dans toutes les gouvernorats et aéroports, organisation des cérémonies à la mosquée ou à l'église et accompagnement.",
            es: "Flota de coches fúnebres refrigerados 24/7 en todas las gobernaciones y aeropuertos, organización de ceremonias religiosas en mezquitas o iglesias y acompañamiento."
        },
        detailContent: {
            introSubtitle: {
                ar: "أسطول سيارات حديث ومبرد وتنظيم كامل للمراسم الدينية واللوجستية",
                en: "Modern refrigerated hearse fleet and complete coordination of religious ceremonies",
                ru: "Современный автопарк с охлаждением и полная организация религиозных обрядов",
                fr: "Flotte de corbillards réfrigérés et organisation complète des cérémonies religieuses",
                es: "Flota moderna de coches fúnebres y coordinación completa de ceremonias religiosas"
            },
            fullDescription: {
                ar: "يتولى مديرو الجنازات ذوو الخبرة في شركة رضوان المسؤولية الكاملة عن تنسيق جميع جوانب التشييع والجنازة. نوفر أسطولاً من السيارات الحديثة المبردة والمجهزة لنقل الجثامين بين جميع المحافظات المصرية وإلى المطارات على مدار 24 ساعة. كما نقوم بإدارة وتنظيم مراسم العزاء والجنازات كاملة بالتنسيق مع المساجد أو الكنائس، وتخصيص منسق متخصص لمرافقة أسر المتوفين أو مندوبي السفارات خطوة بخطوة حتى أداء المراسم.",
                en: "Radwan's experienced funeral directors take full charge of coordinating every logistical aspect of funerals. We operate a fleet of modern, refrigerated hearses available 24/7 for transportation between all Egyptian governorates and airports. We organize complete religious and civil ceremonies in coordination with mosques or churches, assigning a dedicated coordinator to accompany families and embassy diplomats step-by-step.",
                ru: "Опытные директора компании Радван берут на себя полную ответственность за организацию похорон. Мы располагаем автопарком современных катафалков с охлаждением, доступных 24/7 для перевозок по всем провинциям Египта и в аэропорты. Мы организуем обряды в мечетях и церквях с выделением персонального координатора.",
                fr: "Les directeurs de funérailles de la société Radwan prennent en charge l'organisation logistique des funérailles. Nous disposons d'une flotte de corbillards réfrigérés modernes disponibles 24/7 pour les transports vers les aéroports et gouvernorats. Nous organisons les cérémonies religieuses à la mosquée ou à l'église avec un accompagnateur dédié.",
                es: "Los directores funerarios de Radwan se encargan de coordinar cada aspecto logístico. Disponemos de una flota de coches fúnebres refrigerados 24/7 para traslados a aeropuertos y gobernaciones en Egipto. Organizamos ceremonias religiosas en mezquitas o iglesias, asignando un coordinador dedicado."
            },
            features: [
                {
                    title: {
                        ar: "سيارات نقل موتى حديثة ومجهزة",
                        en: "Modern Refrigerated Hearses",
                        ru: "Современные автокатафалки",
                        fr: "Corbillards modernes réfrigérés",
                        es: "Coches fúnebres refrigerados"
                    },
                    desc: {
                        ar: "أسطول سيارات حديث بتبريد متطور للنقل بين المحافظات والمطارات على مدار 24/7.",
                        en: "Fleet of temperature-controlled hearses for governorate and airport transfers 24/7.",
                        ru: "Автопарк катафалков с охлаждением для перевозки по Египту и в аэропорты 24/7.",
                        fr: "Flotte de corbillards régulés en température pour transports régionaux et aéroports 24/7.",
                        es: "Flota de coches fúnebres climatizados para traslados a aeropuertos y provincias 24/7."
                    }
                },
                {
                    title: {
                        ar: "تنظيم المراسم الدينية والمدنية",
                        en: "Religious & Civil Ceremony Management",
                        ru: "Организация религиозных и гражданских обрядов",
                        fr: "Organisation des cérémonies religieuses",
                        es: "Gestión de ceremonias religiosas y civiles"
                    },
                    desc: {
                        ar: "إدارة وتنسيق الجنازات والمراسم بالكامل بالتنسيق مع المساجد والكنائس.",
                        en: "Complete logistical management of funeral services in coordination with mosques or churches.",
                        ru: "Полное сопровождение похоронных обрядов в мечетях и церквях.",
                        fr: "Gestion logistique complète des cérémonies en liaison avec les mosquées ou églises.",
                        es: "Gestión logística completa de funerales en coordinación con mezquitas o iglesias."
                    }
                },
                {
                    title: {
                        ar: "المرافقة والتنسيق الشامل",
                        en: "Personalized Family & Embassy Escort",
                        ru: "Персональное сопровождение семей и дипломатов",
                        fr: "Accompagnement personnalisé des familles et ambassades",
                        es: "Acompañamiento personalizado a familias y embajadas"
                    },
                    desc: {
                        ar: "تخصيص منسق متخصص لمرافقة العائلات والدبلوماسيين خطوة بخطوة حتى نهاية المراسم.",
                        en: "Assigning dedicated coordinators to escort families and diplomats until ceremony completion.",
                        ru: "Выделение персонального менеджера для поддержки семей и представителей посольств.",
                        fr: "Attribution d'un coordinateur dédié pour accompagner les familles et diplomates.",
                        es: "Asignación de un coordinador dedicado para acompañar a familias y diplomáticos."
                    }
                }
            ]
        }
    },
    {
        id: "flowers-and-memorials",
        iconName: "Flower2",
        title: {
            ar: "الزهور والنصب التذكارية",
            en: "Flowers & Memorial Tributes",
            ru: "Цветы и мемориалы",
            fr: "Fleurs et mémoriaux",
            es: "Flores y monumentos conmemorativos"
        },
        desc: {
            ar: "أكاليل وباقات الزهور الجنائزية المصممة خصيصاً، تنفيذ شواهد القبور واللوحات التذكارية الرخامية بلغات متعددة، وخدمات النعي والتأبين للجاليات والمواطنين.",
            en: "Custom funeral wreaths and floral sprays, custom marble headstones and memorial plaques in multiple languages, and obituary coordination.",
            ru: "Траурные венки и композиции из цветов, изготовление надгробий и мраморных памятных досок на разных языках, организация некрологов.",
            fr: "Couronnes et compositions florales sur mesure, plaques commémoratives et pierres tombales en marbre multilingues, publication de nécrologies.",
            es: "Coronas y arreglos florales personalizados, lápidas de mármol y placas conmemorativas multilingües, y coordinación de esquelas."
        },
        detailContent: {
            introSubtitle: {
                ar: "تنسيقات زهور جنائزية راقية ونصب تذكارية رخامية مصممة حسب الطلب",
                en: "Elegant funeral floral arrangements and custom-designed marble memorials",
                ru: "Изысканные траурные флористические композиции и памятники из мрамора",
                fr: "Compositions florales funéraires élégantes et mémoriaux en marbre sur mesure",
                es: "Elegantes arreglos florales funerarios y monumentos de mármol a medida"
            },
            fullDescription: {
                ar: "لتكريم ذكرى المتوفى بأعلى درجات الرقي والوفاء، نوفر باقات وأكاليل زهور جنائزية مصممة خصيصاً لتزين السيارات والتوابيت وقاعات العزاء. كما نقدم خدمات تصميم وتنفيذ شواهد القبور واللوحات التذكارية الرخامية الدائمة باللغتين العربية والأجنبية وفق طلب العائلات، بالإضافة إلى تنظيم ونشر كتابات النعي والتأبين التذكارية المخصصة للجاليات الأجنبية والمواطنين.",
                en: "To honor a loved one with dignity and beauty, we supply custom funeral floral wreaths and sprays for hearses, caskets, and ceremony halls. We also design and craft durable marble headstones and memorial plaques in Arabic and foreign languages per family requests, as well as organizing custom obituaries and memorial tributes for foreign communities and citizens.",
                ru: "Чтобы почтить память усопшего, мы предоставляем траурные венки и цветы для катафалков, гробов и залов. Также мы изготавливаем надгробия и мраморные доски на арабском и иностранных языках, организуем некрологи.",
                fr: "Pour honorer la mémoire du défunt, nous fournissons des couronnes florales personnalisées pour corbillards, cercueils et salles de cérémonie. Nous concevons également des pierres tombales et plaques en marbre en arabe et langues étrangères, et gérons la publication de nécrologies.",
                es: "Para honrar la memoria del fallecido, suministramos coronas florales para coches fúnebres, ataúdes y salas. Diseñamos lápidas de mármol y placas conmemorativas en árabe e idiomas extranjeros, además de gestionar esquelas."
            },
            features: [
                {
                    title: {
                        ar: "تنسيقات الزهور الجنائزية",
                        en: "Funeral Floral Wreaths",
                        ru: "Траурная флористика",
                        fr: "Compositions florales funéraires",
                        es: "Coronas y arreglos florales"
                    },
                    desc: {
                        ar: "أكاليل زهور وباقات تعازي مصممة برقي للسيارات والتوابيت وقاعات العزاء.",
                        en: "Custom floral sprays and wreaths designed for hearses, caskets, and memorial halls.",
                        ru: "Траурные венки и букеты для украшения катафалков, гробов и залов прощания.",
                        fr: "Couronnes et gerbes de condoléances conçues pour les corbillards, cercueils et salles.",
                        es: "Coronas y ramos de condolencias diseñados para coches fúnebres, ataúdes y salas."
                    }
                },
                {
                    title: {
                        ar: "شواهد القبور والنصب التذكارية",
                        en: "Marble Headstones & Plaques",
                        ru: "Надгробия и мраморные мемориалы",
                        fr: "Pierres tombales et plaques en marbre",
                        es: "Lápidas y placas conmemorativas de mármol"
                    },
                    desc: {
                        ar: "تصميم وتنفيذ شواهد ولوحات تذكارية رخامية باللغات العربية والأجنبية.",
                        en: "Crafting durable marble headstones and memorial plaques in Arabic and international languages.",
                        ru: "Изготовление надгробий и мемориальных досок из мрамора на арабском и иностранных языках.",
                        fr: "Conception de pierres tombales et plaques en marbre gravées en arabe et langues étrangères.",
                        es: "Diseño y fabricación de lápidas y placas de mármol en árabe e idiomas internacionales."
                    }
                },
                {
                    title: {
                        ar: "خدمات نعي وتأبين الجاليات",
                        en: "Obituary & Community Tributes",
                        ru: "Организация некрологов",
                        fr: "Publication de nécrologies",
                        es: "Servicios de esquelas y homenajes"
                    },
                    desc: {
                        ar: "تنظيم وتنسيق النعي الرسمي والترتيبات التذكارية للجاليات الأجنبية والمواطنين.",
                        en: "Coordinating official obituaries and memorial arrangements for foreign expatriate communities.",
                        ru: "Публикация некрологов и организация памятных мероприятий для иностранных общин.",
                        fr: "Organisation des avis de décès et cérémonies commémoratives pour les communautés étrangères.",
                        es: "Coordinación de esquelas oficiales y homenajes para comunidades extranjeras y ciudadanos."
                    }
                }
            ]
        }
    },
    {
        id: "pre-planning-and-medical-support",
        iconName: "HeartPulse",
        title: {
            ar: "التخطيط المسبق والدعم الاستشاري",
            en: "Pre-Planning & Emergency Support",
            ru: "Предварительное планирование и поддержка",
            fr: "Pré-planification et soutien d'urgence",
            es: "Planificación previa y apoyo de emergencia"
        },
        desc: {
            ar: "دعم طوارئ على مدار 24/7 للاستجابة السريعة لبلاغات الوفاة، استشارات قانونية ولوجستية كاملة للشركات والسفارات والأفراد، وتعاقدات سنوية مسبقة للمؤسسات.",
            en: "24/7 emergency response team for immediate death notice dispatch, legal and logistical advice for embassies, corporations, and families, and institutional contracts.",
            ru: "Круглосуточная команда экстренного реагирования 24/7, юридические и логистические консультации для посольств и компаний, годовые контракты.",
            fr: "Équipe d'urgence 24/7 pour réponse immédiate, conseils juridiques et logistiques pour ambassades et entreprises, et contrats annuels.",
            es: "Equipo de respuesta de emergencia 24/7 para atención inmediata, asesoramiento legal y logístico para embajadas y empresas, y acuerdos anuales."
        },
        detailContent: {
            introSubtitle: {
                ar: "استجابة فورية 24/7 واستشارات لوجستية وتعاقدات سنوية للمؤسسات والسفارات",
                en: "24/7 immediate dispatch, logistical advisory, and annual coverage contracts for embassies",
                ru: "Круглосуточный выезд 24/7, консультации и годовое обслуживание организаций и посольств",
                fr: "Intervention immédiate 24/7, conseils logistiques et contrats annuels pour ambassades",
                es: "Respuesta inmediata 24/7, asesoramiento logístico y convenios anuales para embajadas"
            },
            fullDescription: {
                ar: "صُممت هذه الخدمة لتوفير راحة البال المطلقة والتأهب الكامل في حالات الوفاة الطارئة. يوفر فريق رضوان استجابة فورية ودعم طوارئ على مدار 24 ساعة طوال أيام الأسبوع بمجرد استلام البلاغ. نقدم استشارات قانونية ولوجستية شاملة للأسر، السفارات، والشركات الأجنبية في مصر حول الإجراءات والخطوات الرسمية، بالإضافة إلى إمكانية إبرام تعاقدات سنوية مسبقة للمؤسسات والهيئات الدبلوماسية لتغطية أي حالات وفاة بأعلى سرعة وأقل تكلفة.",
                en: "Designed to provide total peace of mind and emergency readiness. Radwan's team offers immediate 24/7 emergency response as soon as a notice is received. We provide legal and logistical advisory to families, embassies, and international companies in Egypt regarding official procedures, alongside annual pre-planning coverage contracts for diplomatic bodies and corporations to manage emergencies rapidly and cost-effectively.",
                ru: "Эта служба создана для обеспечения спокойствия и готовой помощи при экстренных случаях. Команда Радван выезжает 24/7 сразу после вызова. Мы предоставляем консультации семьям, посольствам и иностранным компаниям в Египте, а также заключаем годовые договоры с дипломатическими миссиями.",
                fr: "Ce service est conçu pour offrir une tranquillité d'esprit et une réactivité maximale. L'équipe Radwan intervient 24/7 dès réception de l'appel. Nous fournissons des conseils juridiques et logistiques aux familles, ambassades et sociétés étrangères en Égypte, avec des contrats annuels de pré-planification.",
                es: "Diseñado para ofrecer tranquilidad absoluta y preparación ante emergencias. El equipo de Radwan brinda respuesta inmediata 24/7. Ofrecemos asesoramiento legal y logístico a familias, embajadas y empresas extranjeras en Egipto, además de contratos anuales de cobertura previa."
            },
            features: [
                {
                    title: {
                        ar: "دعم طوارئ 24/7",
                        en: "24/7 Emergency Dispatch",
                        ru: "Круглосуточный выезд 24/7",
                        fr: "Assistance d'urgence 24/7",
                        es: "Atención de emergencia 24/7"
                    },
                    desc: {
                        ar: "فريق جاهز للتحرك الفوري والاستجابة لبلاغات الوفاة على مدار الساعة.",
                        en: "Dedicated team ready for immediate action and notice response around the clock.",
                        ru: "Готовая команда для мгновенного реагирования на вызовы в любое время суток.",
                        fr: "Équipe prête à intervenir immédiatement 24 heures sur 24 et 7 jours sur 7.",
                        es: "Equipo listo para actuar de inmediato las 24 horas del día, los 7 días de la semana."
                    }
                },
                {
                    title: {
                        ar: "استشارات قانونية ولوجستية",
                        en: "Legal & Logistical Advisory",
                        ru: "Юридические и логистические консультации",
                        fr: "Conseils juridiques et logistiques",
                        es: "Asesoramiento legal y logístico"
                    },
                    desc: {
                        ar: "مشورة كاملة للشركات والسفارات والأفراد حول الإجراءات والخطوات فور حدوث الوفاة.",
                        en: "Full guidance for corporations, embassies, and families on mandatory legal steps.",
                        ru: "Полные консультации для компаний, посольств и граждан по шагам при наступлении смерти.",
                        fr: "Conseils complets aux entreprises, ambassades et familles sur les démarches à suivre.",
                        es: "Orientación completa para empresas, embajadas y familias sobre los pasos legales."
                    }
                },
                {
                    title: {
                        ar: "تعاقدات مسبقة للمؤسسات والسفارات",
                        en: "Institutional & Embassy Contracts",
                        ru: "Годовые контракты для организаций",
                        fr: "Contrats annuels pour institutions",
                        es: "Convenios previos para instituciones"
                    },
                    desc: {
                        ar: "خطط وتعاقدات سنوية للسفارات والشركات لتغطية أي حالات وفاة طارئة لأعضائها.",
                        en: "Annual pre-planning coverage plans for embassies and foreign firms to handle emergencies.",
                        ru: "Годовые программы обслуживания для посольств и компаний для оперативной помощи.",
                        fr: "Contrats annuels de pré-planification pour ambassades et sociétés pour couvrir les urgences.",
                        es: "Planes anuales de cobertura previa para embajadas y empresas para atender emergencias."
                    }
                }
            ]
        }
    }
];
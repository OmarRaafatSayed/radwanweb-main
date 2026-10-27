export interface CasketColor {
    id: string;
    code: string;
    name: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
}

export interface CasketDimension {
    id: string;
    label: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
    value: string;
}

export interface CasketItem {
    id: string;
    slug: string;
    badge?: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
    title: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
    description: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
    fullDescription: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
    price?: number | null;
    currency?: string;
    hasPrice: boolean;
    mainImage: string;
    gallery: string[];
    woodType: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
    liningType: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
    weightCapacity: {
        ar: string;
        en: string;
        ru: string;
        fr: string;
        es: string;
    };
    iataCompliant: boolean;
    colors: CasketColor[];
    dimensions: CasketDimension[];
    specifications: {
        ar: string[];
        en: string[];
        ru: string[];
        fr: string[];
        es: string[];
    };
}

export const casketsData: CasketItem[] = [
    {
        id: "eton",
        slug: "eton-casket",
        title: {
            ar: "إيتون",
            en: "Eton",
            ru: "Итон",
            fr: "Eton",
            es: "Eton"
        },
        description: {
            ar: "نعش ذو قشرة خشبية بسيطة.",
            en: "Simple wood veneer casket.",
            ru: "Простой гроб из шпонированного дерева.",
            fr: "Cercueil simple en placage de bois.",
            es: "Ataúd sencillo con chapa de madera."
        },
        fullDescription: {
            ar: "تابوت فاخر من خشب الجوز الداكن، مصنوع من أجود أنواع الخشب الصلب بلمسة نهائية لامعة فاخرة. يتميز بغطاء منحني أنيق، ومقابض ذهبية اللون، وحرفية استثنائية تمنحه مظهرًا مميزًا.",
            en: "A luxurious dark walnut casket crafted from the finest hardwood with a glossy premium finish. Features an elegant curved lid, gold-toned handles, and exceptional craftsmanship giving it a distinctive appearance.",
            ru: "Роскошный гроб из темного ореха, изготовленный из отборной древесины твердых пород с глянцевой отделкой. Отличается изящной изогнутой крышкой, золотистыми ручками и исключительным мастерством исполнения.",
            fr: "Cercueil luxueux en noyer foncé, fabriqué à partir du meilleur bois massif avec une finition brillante haut de gamme. Doté d'un couvercle incurvé élégant, de poignées dorées et d'un savoir-faire exceptionnel.",
            es: "Un lujoso ataúd de nogal oscuro, elaborado con la mejor madera maciza y un acabado brillante de primera calidad. Cuenta con una elegante tapa curvada, asas doradas y una artesanía excepcional."
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/Eton.jpeg",
        gallery: [
            "/images/caskets/Eton.jpeg"
        ],
        woodType: {
            ar: "خشب صلب بقشرة جوز داكنة",
            en: "Hardwood with Dark Walnut Veneer",
            ru: "Твердые породы со шпоном темного ореха",
            fr: "Bois massif avec placage en noyer foncé",
            es: "Madera maciza con chapa de nogal oscuro"
        },
        liningType: {
            ar: "بطانة قماشية مبطنة ناعمة",
            en: "Soft Padded Fabric Lining",
            ru: "Мягкая ткань",
            fr: "Doublure en tissu rembourré",
            es: "Forro de tela acolchada suave"
        },
        weightCapacity: {
            ar: "حتى 150 كجم",
            en: "Up to 150 kg",
            ru: "До 150 кг",
            fr: "Jusqu'à 150 kg",
            es: "Hasta 150 kg"
        },
        iataCompliant: false,
        colors: [
            {
                id: "c1",
                code: "#5c3317",
                name: { ar: "بني كلاسيكي", en: "Classic Brown", ru: "Классический коричневый", fr: "Brun classique", es: "Marrón clásico" }
            }
        ],
        dimensions: [
            {
                id: "d1",
                label: { ar: "قياسي", en: "Standard", ru: "Стандартный", fr: "Standard", es: "Estándar" },
                value: "200cm x 65cm x 50cm"
            }
        ],
        specifications: {
            ar: ["صناعة من الخشب الصلب الممتاز", "لمسة نهائية لامعة فاخرة", "غطاء منحني أنيق", "مقابض معدنية ذهبية اللون"],
            en: ["Crafted from premium solid hardwood", "Glossy luxury finish", "Elegant curved lid design", "Gold-toned metal handles"],
            ru: ["Изготовлен из отборной твердой древесины", "Роскошная глянцевая отделка", "Элегантная изогнутая крышка", "Металлические ручки золотистого цвета"],
            fr: ["Fabriqué en bois massif de qualité supérieure", "Finition brillante haut de gamme", "Design de couvercle incurvé élégant", "Poignées métalliques dorées"],
            es: ["Fabricado en madera maciza de primera calidad", "Acabado brillante de lujo", "Elegante diseño de tapa curvada", "Asas metálicas de tono dorado"]
        }
    },
    {
        id: "exeter",
        slug: "exeter-casket",
        title: {
            ar: "إكستر",
            en: "Exeter",
            ru: "Эксетер",
            fr: "Exeter",
            es: "Exeter"
        },
        description: {
            ar: "نعش ذو قشرة خشبية من خشب الماهوجني.",
            en: "Mahogany wood veneer casket.",
            ru: "Гроб из шпона махагони.",
            fr: "Cercueil en placage d'acajou.",
            es: "Ataúd con chapa de madera de caoba."
        },
        fullDescription: {
            ar: "تابوت كلاسيكي من خشب البلوط الطبيعي، مصنوع من خشب صلب فاخر بلمسة نهائية ناعمة كالحرير. مصمم بخطوط أنيقة وأجزاء معدنية متينة، يجمع بين البساطة والأناقة الخالدة.",
            en: "A classic natural oak casket made from premium hardwood with a silky smooth finish. Designed with clean lines and durable metal fittings, combining simplicity with timeless elegance.",
            ru: "Классический гроб из натурального дуба, изготовленный из премиальной древесины с шелковисто-гладкой отделкой. Выполнен в строгих линиях с прочной фурнитурой.",
            fr: "Un cercueil classique en chêne naturel, fabriqué en bois massif de qualité supérieure avec une finition douce comme de la soie. Conçu avec des lignes épurées et des garnitures métalliques durables.",
            es: "Un ataúd clásico de roble natural, hecho de madera maciza de primera calidad con un acabado suave como la seda. Diseñado con líneas limpias y herrajes metálicos duraderos."
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/Exeter.jpeg",
        gallery: [
            "/images/caskets/Exeter.jpeg"
        ],
        woodType: {
            ar: "خشب بلوط طبيعي صلب",
            en: "Natural Solid Oak Hardwood",
            ru: "Натуральный массив дуба",
            fr: "Chêne naturel massif",
            es: "Roble natural macizo"
        },
        liningType: {
            ar: "بطانة ساتان فاخرة",
            en: "Premium Satin Lining",
            ru: "Премиальный сатин",
            fr: "Doublure en satin de qualité supérieure",
            es: "Forro de satén de alta calidad"
        },
        weightCapacity: {
            ar: "حتى 155 كجم",
            en: "Up to 155 kg",
            ru: "До 155 кг",
            fr: "Jusqu'à 155 kg",
            es: "Hasta 155 kg"
        },
        iataCompliant: false,
        colors: [
            {
                id: "c1",
                code: "#5c3317",
                name: { ar: "بني كلاسيكي", en: "Classic Brown", ru: "Классический коричневый", fr: "Brun classique", es: "Marrón clásico" }
            }
        ],
        dimensions: [
            {
                id: "d1",
                label: { ar: "قياسي", en: "Standard", ru: "Стандартный", fr: "Standard", es: "Estándار" },
                value: "200cm x 65cm x 52cm"
            }
        ],
        specifications: {
            ar: ["خشب صلب بلمسة ناعمة كالحرير", "خطوط تصميم أنيقة وكلاسيكية", "أجزاء معدنية متينة ومصقولة", "تركيب متين يضمن الجودة الخالدة"],
            en: ["Hardwood with a silky-smooth finish", "Clean classic design lines", "Durable polished metal fittings", "Solid construction offering timeless style"],
            ru: ["Твердая древесина с шелковистой отделкой", "Строгие классические линии", "Прочная полированная фурнитура", "Надежная конструкция"],
            fr: ["Bois massif avec finition douce", "Lignes de design classiques épurées", "Garnitures métalliques polies durables", "Construction solide à l'élégance intemporelle"],
            es: ["Madera maciza con acabado suave", "Líneas de diseño clásicas y limpias", "Herrajes metálicos pulidos duraderos", "Construcción sólida de elegancia atemporal"]
        }
    },
    {
        id: "oakley-simple",
        slug: "oakley-simple-casket",
        title: {
            ar: "أوكلي (بسيط)",
            en: "Oakley (Plain)",
            ru: "Окли (простой)",
            fr: "Oakley (Simple)",
            es: "Oakley (Sencillo)"
        },
        description: {
            ar: "نعش ذو جوانب بسيطة من خشب البلوط ذو قشرة خشبية.",
            en: "Oak wood veneer casket with plain sides.",
            ru: "Гроб из дубового шпона с простыми боковинами.",
            fr: "Cercueil en placage de chêne à côtés simples.",
            es: "Ataúd de chapa de roble con laterales sencillos."
        },
        fullDescription: {
            ar: "تابوت بني ملكي، يتميز بتصميم غطاء مرتفع، وهيكل من الخشب الصلب المصقول، وتفاصيل فاخرة. خيار مثالي لمن يبحث عن الحرفية الراقية.",
            en: "A royal brown casket featuring a raised lid structure, polished solid hardwood frame, and premium detailing. An ideal choice for those seeking refined craftsmanship.",
            ru: "Королевский коричневый гроб с приподнятой крышкой, каркасом из полированного массива и изысканными деталями. Идеальный выбор для ценителей высокого качества.",
            fr: "Un cercueil brun royal, doté d'une structure de couvercle rehaussée, d'un cadre en bois massif poli et de détails luxueux. Un choix idéal pour l'artisanat raffiné.",
            es: "Un ataúd marrón real con estructura de tapa elevada, marco de madera maciza pulida y detalles de primera calidad. Una opción ideal de fina artesanía."
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/Oakley (Plain).jpeg",
        gallery: [
            "/images/caskets/Oakley (Plain).jpeg"
        ],
        woodType: {
            ar: "خشب صلب ملكي مصقول",
            en: "Polished Royal Hardwood",
            ru: "Полированный королевский массив",
            fr: "Bois massif royal poli",
            es: "Madera maciza real pulida"
        },
        liningType: {
            ar: "تبطين قطني مبطن",
            en: "Padded Cotton Lining",
            ru: "Хлопчатобумажная обивка",
            fr: "Doublure en coton rembourré",
            es: "Forro de algodón acolchado"
        },
        weightCapacity: {
            ar: "حتى 160 كجم",
            en: "Up to 160 kg",
            ru: "До 160 кг",
            fr: "Jusqu'à 160 kg",
            es: "Hasta 160 kg"
        },
        iataCompliant: false,
        colors: [
            {
                id: "c1",
                code: "#5c3317",
                name: { ar: "بني كلاسيكي", en: "Classic Brown", ru: "Классический коричневый", fr: "Brun classique", es: "Marrón clásico" }
            }
        ],
        dimensions: [
            {
                id: "d1",
                label: { ar: "قياسي", en: "Standard", ru: "Стандартный", fr: "Standard", es: "Estándار" },
                value: "200cm x 65cm x 52cm"
            }
        ],
        specifications: {
            ar: ["تصميم غطاء مرتفع بارز", "خشب صلب مصقول بعناية", "تفاصيل وحواشي فاخرة", "بناء قوي ومتين"],
            en: ["Prominent raised lid design", "Carefully polished solid hardwood", "Luxurious accents and details", "Sturdy durable frame"],
            ru: ["Выразительная приподнятая крышка", "Тщательно полированный массив", "Роскошная отделка и детали", "Прочный надежный каркас"],
            fr: ["Design de couvercle rehaussé distinctif", "Bois massif soigneusement poli", "Accents et détails luxueux", "Cadre solide et durable"],
            es: ["Diseño de tapa elevada destacada", "Madera maciza cuidadosamente pulida", "Detalles y acabados de lujo", "Estructura sólida y duradera"]
        }
    },
    {
        id: "oakley-paneled",
        slug: "oakley-paneled-casket",
        title: {
            ar: "أوكلي (مُبطّن)",
            en: "Oakley (Paneled)",
            ru: "Окли (панельный)",
            fr: "Oakley (Panneauté)",
            es: "Oakley (Panelado)"
        },
        description: {
            ar: "نعش مُبطّن من خشب البلوط ذو قشرة خشبية.",
            en: "Paneled oak wood veneer casket.",
            ru: "Панельный гроб из дубового шпона.",
            fr: "Cercueil panneauté en placage de chêne.",
            es: "Ataúd panelado de chapa de roble."
        },
        fullDescription: {
            ar: "تابوت أنيق من خشب البلوط الفاتح، يتميز بتصميم منحني أنيق ولمسة نهائية من الخشب الطبيعي. مزود بمقابض معدنية مزخرفة وألواح جانبية مصنوعة بعناية.",
            en: "An elegant light oak casket featuring a graceful contoured design and natural wood finish. Equipped with ornate metal handles and meticulously crafted side panels.",
            ru: "Изящный гроб из светлого дуба с плавно изогнутым дизайном и натуральной отделкой. Оснащен декоративными металлическими ручками и филенчатыми боковинами.",
            fr: "Un élégant cercueil en chêne clair doté d'un design galbé et d'une finition en bois naturel. Équipé de poignées métalliques ornementées et de panneaux latéraux soignés.",
            es: "Un elegante ataúd de roble claro con un diseño curvo y acabado de madera natural. Equipado con asas metálicas decoradas y paneles laterales cuidadosamente elaborados."
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/Oakley (Paneled).jpeg",
        gallery: [
            "/images/caskets/Oakley (Paneled).jpeg"
        ],
        woodType: {
            ar: "خشب بلوط فاتح طبيعي",
            en: "Natural Light Oak Hardwood",
            ru: "Натуральный светлый дуб",
            fr: "Chêne clair naturel massif",
            es: "Roble claro natural macizo"
        },
        liningType: {
            ar: "بطانة حريرية مطرزة",
            en: "Embroidered Silk Interior",
            ru: "Вышитый шелк",
            fr: "Soie brodée intérieure",
            es: "Interior de seda bordada"
        },
        weightCapacity: {
            ar: "حتى 160 كجم",
            en: "Up to 160 kg",
            ru: "До 160 кг",
            fr: "Jusqu'à 160 kg",
            es: "Hasta 160 kg"
        },
        iataCompliant: false,
        colors: [
            {
                id: "c1",
                code: "#5c3317",
                name: { ar: "بني كلاسيكي", en: "Classic Brown", ru: "Классический коричневый", fr: "Brun classique", es: "Marrón clásico" }
            }
        ],
        dimensions: [
            {
                id: "d1",
                label: { ar: "قياسي", en: "Standard", ru: "Стандартный", fr: "Standard", es: "Estándار" },
                value: "200cm x 65cm x 54cm"
            }
        ],
        specifications: {
            ar: ["تصميم منحني انسيابي", "ألواح جانبية مصنوعة بدقة", "مقابض معدنية مزخرفة", "لمسة نهائية طبيعية فاتحة"],
            en: ["Smooth contoured design", "Meticulously crafted side panels", "Ornate decorative metal handles", "Natural light timber finish"],
            ru: ["Изогнутый плавный дизайн", "Тщательно обработанные боковые панели", "Декоративные металлические ручки", "Натуральная светлая отделка"],
            fr: ["Design galbé fluide", "Panneaux latéraux façonnés avec soin", "Poignées métalliques ornementées", "Finition en bois clair naturel"],
            es: ["Diseño curvo estilizado", "Paneles laterales elaborados con precisión", "Asas metálicas decorativas", "Acabado de madera clara natural"]
        }
    },
    {
        id: "stanley",
        slug: "stanley-casket",
        title: {
            ar: "ستانلي",
            en: "Stanley",
            ru: "Стэнли",
            fr: "Stanley",
            es: "Stanley"
        },
        description: {
            ar: "نعش مُبطّن من خشب البلوط ذو قشرة خشبية.",
            en: "Paneled oak wood veneer casket.",
            ru: "Панельный гроб из дубового шпона.",
            fr: "Cercueil panneauté en placage de chêne.",
            es: "Ataúd panelado de chapa de roble."
        },
        fullDescription: {
            ar: "تابوت تقليدي من الخشب الصلب، يعرض حبيبات خشبية فاخرة، وألواح جانبية بتفاصيل دقيقة، وأجزاء معدنية مصقولة بتأثير النحاس. مصمم ليدوم طويلًا ويتميز بتصميم كلاسيكي.",
            en: "A traditional solid hardwood casket showcasing rich natural wood grain, detailed side paneling, and polished brass-effect hardware. Built for lasting durability with a classic feel.",
            ru: "Традиционный гроб из массива с выразительной текстурой дерева, детализированными филенками и латунной фурнитурой. Создан для долговечности в классическом стиле.",
            fr: "Un cercueil traditionnel en bois massif mettant en valeur des grains de bois riches, des panneaux latéraux détaillés et des garnitures en laiton polies. Conçu pour durer.",
            es: "Un ataúd tradicional de madera maciza que exhibe ricas vetas naturales, paneles laterales detallados y herrajes pulidos de efecto latón. Diseñado para durar."
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/Stanley.jpeg",
        gallery: [
            "/images/caskets/Stanley.jpeg"
        ],
        woodType: {
            ar: "خشب صلب ذو حبيبات بارزة",
            en: "Grain-Rich Solid Hardwood",
            ru: "Массив с выраженной текстурой",
            fr: "Bois massif au grain riche",
            es: "Madera maciza de vetas marcadas"
        },
        liningType: {
            ar: "تبطين مخملي فاخر",
            en: "Luxurious Velvet Interior",
            ru: "Роскошный бархат",
            fr: "Intérieur en velours luxueux",
            es: "Interior de terciopelo de lujo"
        },
        weightCapacity: {
            ar: "حتى 165 كجم",
            en: "Up to 165 kg",
            ru: "До 165 кг",
            fr: "Jusqu'à 165 kg",
            es: "Hasta 165 kg"
        },
        iataCompliant: false,
        colors: [
            {
                id: "c1",
                code: "#5c3317",
                name: { ar: "بني كلاسيكي", en: "Classic Brown", ru: "Классический коричневый", fr: "Brun classique", es: "Marrón clásico" }
            }
        ],
        dimensions: [
            {
                id: "d1",
                label: { ar: "قياسي", en: "Standard", ru: "Стандартный", fr: "Standard", es: "Estándار" },
                value: "202cm x 66cm x 55cm"
            }
        ],
        specifications: {
            ar: ["حبيبات خشبية طبيعية فاخرة", "ألواح جانبية بتفاصيل دقيقة", "أجزاء معدنية بتأثير النحاس المصقول", "بناء متين يدوم طويلاً"],
            en: ["Rich natural timber wood grain", "Detailed side paneling architecture", "Polished brass-effect hardware", "Durable long-lasting frame"],
            ru: ["Выразительная текстура натуральной древесины", "Детализированные боковые филенки", "Полированная фурнитура под латунь", "Долговечная прочная конструкция"],
            fr: ["Grain de bois naturel riche", "Panneaux latéraux détaillés", "Garnitures métalliques effet laiton poli", "Structure durable à long terme"],
            es: ["Rica veta de madera natural", "Paneles laterales detallados", "Herrajes pulidos efecto latón", "Estructura duradera de gran resistencia"]
        }
    },
    {
        id: "chartwell",
        slug: "chartwell-casket",
        title: {
            ar: "تشارتويل",
            en: "Chartwell",
            ru: "Чартвелл",
            fr: "Chartwell",
            es: "Chartwell"
        },
        description: {
            ar: "نعش من خشب الماهوجني الصلب ذو جوانب بسيطة.",
            en: "Solid mahogany wood casket with plain sides.",
            ru: "Гроб из массива махагони с простыми боковинами.",
            fr: "Cercueil en acajou massif à côtés simples.",
            es: "Ataúd de madera de caoba maciza con laterales sencillos."
        },
        fullDescription: {
            ar: "تابوت خشبي كلاسيكي بلمسة نهائية دافئة من خشب الجوز، مزود بمقابض قوية على شكل حلقات وهيكل متين. توازن مثالي بين الجودة والأصالة.",
            en: "A classic wooden casket with a warm walnut finish, featuring sturdy ring-style handles and a robust frame. The perfect balance of quality and authenticity.",
            ru: "Классический деревянный гроб с теплой ореховой отделкой, надежными кольцевыми ручками и прочным корпусом. Идеальный баланс качества и подлинности.",
            fr: "Un cercueil en bois classique avec une finition chaleureuse en noyer, doté de poignées solides en anneau et d'un cadre robuste. Équilibre parfait entre qualité et authenticité.",
            es: "Un ataúd de madera clásico con un cálido acabado de nogal, con resistentes asas tipo anillo y un marco robusto. Un equilibrio perfecto entre calidad y autenticidad."
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/Chartwell.jpeg",
        gallery: [
            "/images/caskets/Chartwell.jpeg"
        ],
        woodType: {
            ar: "خشب جوز دافئ صلب",
            en: "Warm Walnut Hardwood",
            ru: "Теплый массив ореха",
            fr: "Bois massif de noyer chaud",
            es: "Madera maciza de nogal cálido"
        },
        liningType: {
            ar: "بطانة حرير ساتان أبيض",
            en: "White Satin Silk Lining",
            ru: "Белый шелковый сатин",
            fr: "Doublure en satin de soie blanc",
            es: "Forro de seda de satén blanco"
        },
        weightCapacity: {
            ar: "حتى 170 كجم",
            en: "Up to 170 kg",
            ru: "До 170 кг",
            fr: "Jusqu'à 170 kg",
            es: "Hasta 170 kg"
        },
        iataCompliant: false,
        colors: [
            {
                id: "c1",
                code: "#5c3317",
                name: { ar: "بني كلاسيكي", en: "Classic Brown", ru: "Классический коричневый", fr: "Brun classique", es: "Marrón clásico" }
            }
        ],
        dimensions: [
            {
                id: "d1",
                label: { ar: "قياسي", en: "Standard", ru: "Стандартный", fr: "Standard", es: "Estándار" },
                value: "205cm x 67cm x 56cm"
            }
        ],
        specifications: {
            ar: ["تشطيب جوز دافئ وأصيل", "مقابض حمل حلقية قوية", "هيكل خشبي متين للغاية", "توازن مثالي بين الجودة والجمال"],
            en: ["Warm authentic walnut finish", "Sturdy ring-style handles", "Highly robust wooden construction", "Perfect balance of strength and quality"],
            ru: ["Теплая аутентичная ореховая отделка", "Прочные кольцевые ручки", "Надежный деревянный корпус", "Идеальный баланс прочности и эстетики"],
            fr: ["Finition chaleureuse en noyer authentique", "Poignées solides en anneau", "Construction en bois très robuste", "Équilibre parfait entre force et qualité"],
            es: ["Cálido acabado de nogal auténtico", "Resistentes asas tipo anillo", "Construcción de madera highly robusta", "Equilibrio perfecto de fuerza y calidad"]
        }
    },
    {
        id: "export-zinc",
        slug: "export-zinc-lined-casket",
        badge: {
            ar: "معتمد للشحن الدولي",
            en: "Certified International Cargo",
            ru: "Сертифицирован для репатриации",
            fr: "Certifié pour le rapatriement",
            es: "Certificado para repatriación"
        },
        title: {
            ar: "تصدير - مُبطّن بالزنك",
            en: "Export - Zinc Lined",
            ru: "Экспортный - с цинковым вкладышем",
            fr: "Exportation - Doublé en Zinc",
            es: "Exportación - Con revestimiento de Zinc"
        },
        description: {
            ar: "نعش مُبطّن بالزنك محكم الإغلاق مخصص لتسهيل إجراءات الشحن الجوي والتصدير الدولي.",
            en: "Zinc-lined hermetically sealed casket specifically crafted for international air export.",
            ru: "Гроб с герметичным цинковым вкладышем для международных авиаперевозок.",
            fr: "Cercueil doublé en zinc hermétique conçu spécifiquement pour l'exportation aérienne.",
            es: "Ataúd con revestimiento de zinc hermético diseñado para exportación aérea."
        },
        fullDescription: {
            ar: "تابوت فاخر شديد اللمعان، مصنوع من خشب صلب مختار بلمسة نهائية مصقولة كالمرآة. تُضفي التجهيزات الزخرفية الفاخرة لمسةً من الأناقة والرقي على تصميمها.",
            en: "A high-gloss luxury casket crafted from selected hardwood with a mirror-like polished finish. Deluxe decorative fittings add a touch of refinement and elegance to its design.",
            ru: "Роскошный гроб с высокой степенью глянца, изготовленный из отборной древесины с зеркальной полировкой. Изысканная декоративная фурнитура придает вамповый стиль.",
            fr: "Un cercueil de luxe hautement brillant, fabriqué à partir de bois massif sélectionné avec une finition polie comme un miroir. Des garnitures décoratives haut de gamme ajoutent élégance.",
            es: "Un lujoso ataúd de alto brillo elaborado con madera maciza seleccionada con un acabado pulido a espejo. Los herrajes decorativos de lujo añaden elegancia."
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/Export - Zinc Lined.jpeg",
        gallery: [
            "/images/caskets/Export - Zinc Lined.jpeg"
        ],
        woodType: {
            ar: "خشب صلب مختار مصقول",
            en: "Selected Polished Hardwood",
            ru: "Отборный полированный массив",
            fr: "Bois massif sélectionné poli",
            es: "Madera maciza seleccionada pulida"
        },
        liningType: {
            ar: "بطانة زنك محكمة اللحام 100%",
            en: "100% Hermetically Sealed Zinc Lining",
            ru: "100% герметичный цинковый вкладыш",
            fr: "Doublure en zinc 100% hermétique",
            es: "Revestimiento de zinc 100% hermético"
        },
        weightCapacity: {
            ar: "حتى 175 كجم",
            en: "Up to 175 kg",
            ru: "До 175 кг",
            fr: "Jusqu'à 175 kg",
            es: "Hasta 175 kg"
        },
        iataCompliant: true,
        colors: [
            {
                id: "c1",
                code: "#5c3317",
                name: { ar: "بني كلاسيكي", en: "Classic Brown", ru: "Классический коричневый", fr: "Brun classique", es: "Marrón clásico" }
            }
        ],
        dimensions: [
            {
                id: "d1",
                label: { ar: "مقاس الشحن الجوي", en: "Flight Standard", ru: "Авиа стандарт", fr: "Standard Aérien", es: "Estándار Aéreo" },
                value: "205cm x 66cm x 55cm"
            }
        ],
        specifications: {
            ar: ["طلاء عالي اللمعان مصقول كالمرآة", "بطانة زنك معدنية معتمدة لـ IATA", "تجهيزات وزخارف فاخرة", "تبطين عازل ومحكم لمنع التسريب"],
            en: ["Mirror-like high gloss lacquer finish", "IATA-approved sealed zinc interior", "Deluxe decorative accent fittings", "Leak-proof hermetic seal construction"],
            ru: ["Зеркально-глянцевое лаковое покрытие", "Сертифицированный цинковый вкладыш IATA", "Изысканная декоративная фурнитура", "Полная герметичность от протечек"],
            fr: ["Finition laquée brillante effet miroir", "Intérieur en zinc scellé homologué IATA", "Garnitures métalliques décoratives de luxe", "Etanchéité hermétique anti-fuite"],
            es: ["Acabado de laca de alto brillo pulido a espejo", "Interior de zinc sellado aprobado por IATA", "Herrajes decorativos de lujo", "Sellado hermético a prueba de fugas"]
        }
    },
    {
        id: "oxford",
        slug: "oxford-casket",
        title: {
            ar: "أكسفورد",
            en: "Oxford",
            ru: "Оксфорд",
            fr: "Oxford",
            es: "Oxford"
        },
        description: {
            ar: "نعش من خشب البلوط الصلب ذو جوانب بسيطة.",
            en: "Solid oak wood casket with plain sides.",
            ru: "Гроб из массива дуба с простыми боковинами.",
            fr: "Cercueil en chêne massif à côtés simples.",
            es: "Ataúd de madera de roble macizo con laterales sencillos."
        },
        fullDescription: {
            ar: "تابوت خشبي بلمسة نهائية طبيعية، يتميز بتصميم بسيط وأنيق، وهيكل متين، وتجهيزات معدنية عالية الجودة. مناسب لمراسم الجنازة التقليدية.",
            en: "A wooden casket with a natural finish, featuring a simple and elegant design, solid build, and high-quality metal fittings. Suitable for traditional funeral ceremonies.",
            ru: "Деревянный гроб с натуральной отделкой, простым и элегантным дизайном, прочным корпусом и качественной металлической фурнитурой. Подходит для традиционных похорон.",
            fr: "Un cercueil en bois avec une finition naturelle, caractérisé par un design simple et élégant, une structure solide et des garnitures métalliques de haute qualité.",
            es: "Un ataúd de madera con acabado natural, diseño sencillo y elegante, estructura sólida y herrajes metálicos de alta calidad. Adecuado para ceremonias tradicionales."
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/Oxford.jpeg",
        gallery: [
            "/images/caskets/Oxford.jpeg"
        ],
        woodType: {
            ar: "خشب بلوط طبيعي صلب",
            en: "Natural Solid Oak Timber",
            ru: "Натуральный массив дуба",
            fr: "Chêne massif naturel",
            es: "Roble macizo natural"
        },
        liningType: {
            ar: "بطانة من الساتان الفاخر",
            en: "Deluxe Satin Interior",
            ru: "Роскошный сатиновый вкладыш",
            fr: "Intérieur en satin de luxe",
            es: "Interior de satén de lujo"
        },
        weightCapacity: {
            ar: "حتى 175 كجم",
            en: "Up to 175 kg",
            ru: "До 175 кг",
            fr: "Jusqu'à 175 kg",
            es: "Hasta 175 kg"
        },
        iataCompliant: false,
        colors: [
            {
                id: "c1",
                code: "#5c3317",
                name: { ar: "بني كلاسيكي", en: "Classic Brown", ru: "Классический коричневый", fr: "Brun classique", es: "Marrón clásico" }
            }
        ],
        dimensions: [
            {
                id: "d1",
                label: { ar: "قياسي", en: "Standard", ru: "Стандартный", fr: "Standard", es: "Estándار" },
                value: "205cm x 66cm x 55cm"
            }
        ],
        specifications: {
            ar: ["لمسة نهائية طبيعية هادئة", "تجهيزات معدنية عالية الجودة", "بناء من خشب البلوط الصلب", "مناسب تماماً للمراسم التقليدية"],
            en: ["Subtle natural timber finish", "High-quality metallic hardware", "Solid oak hardwood structure", "Perfect for traditional ceremonies"],
            ru: ["Естественная сдержанная отделка", "Высококачественная металлическая фурнитура", "Конструкция из массива дуба", "Идеально для традиционных церемоний"],
            fr: ["Finition en bois naturel sobre", "Garnitures métalliques de haute qualité", "Structure en chêne massif solide", "Adapté aux cérémonies traditionnelles"],
            es: ["Acabado discreto de madera natural", "Herrajes metálicos de alta calidad", "Estructura de roble macizo sólido", "Adecuado para ceremonias tradicionales"]
        }
    },
    {
        id: "elgin",
        slug: "elgin-casket",
        title: {
            ar: "إلجين",
            en: "Elgin",
            ru: "Элгин",
            fr: "Elgin",
            es: "Elgin"
        },
        description: {
            ar: "نعش من خشب الماهوجني الصلب ذو غطاء مرتفع.",
            en: "Solid mahogany wood casket with raised lid.",
            ru: "Гроб из массива махагони с приподнятой крышкой.",
            fr: "Cercueil en acajou massif à couvercle rehaussé.",
            es: "Ataúd de madera de caoba maciza con tapa elevada."
        },
        fullDescription: {
            ar: "تابوت فاخر مُبطّن، يتميز ببطانة داخلية ناعمة بلون كريمي، وبتانجة مبطنة، وتنجيد فاخر. مصمم لتقديم مظهر لائق وأنيق.",
            en: "A padded luxury casket featuring a soft cream-colored interior lining, tufted padding, and premium upholstery. Crafted to provide a respectful and elegant presentation.",
            ru: "Роскошный обитый гроб с мягкой кремовой внутренней отделкой, стеганым вкладышем и премиальной обивкой. Создан для достойного вида.",
            fr: "Un cercueil de luxe matelassé, doté d'une doublure intérieure douce couleur crème, d'un rembourrage capitonné et d'un capitonnage raffiné.",
            es: "Un lujoso ataúd acolchado con un suave forro interior de color crema, acolchado capitoné y tapicería de primera calidad."
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/Elgin.jpeg",
        gallery: [
            "/images/caskets/Elgin.jpeg"
        ],
        woodType: {
            ar: "خشب ماهوجني صلب ممتاز",
            en: "Premium Solid Mahogany",
            ru: "Отборный массив махагони",
            fr: "Acajou massif de qualité supérieure",
            es: "Caoba maciza de primera"
        },
        liningType: {
            ar: "بطانة كريمية ناعمة مع تنجيد مبطن",
            en: "Soft Cream Tufted Velvet Lining",
            ru: "Кремовый стеганый бархат",
            fr: "Doublure en velours crème capitonné",
            es: "Forro de terciopelo crema acolchado"
        },
        weightCapacity: {
            ar: "حتى 180 كجم",
            en: "Up to 180 kg",
            ru: "До 180 кг",
            fr: "Jusqu'à 180 kg",
            es: "Hasta 180 kg"
        },
        iataCompliant: false,
        colors: [
            {
                id: "c1",
                code: "#5c3317",
                name: { ar: "بني كلاسيكي", en: "Classic Brown", ru: "Классический коричневый", fr: "Brun classique", es: "Marrón clásico" }
            }
        ],
        dimensions: [
            {
                id: "d1",
                label: { ar: "قياسي", en: "Standard", ru: "Стандартный", fr: "Standard", es: "Estándار" },
                value: "206cm x 67cm x 58cm"
            }
        ],
        specifications: {
            ar: ["بطانة كريمية ناعمة فاخرة", "تنجيد داخلي مبطن ومصمّم بعناية", "غطاء مرتفع من خشب الماهوجني الصلب", "مظهر ملكي ولائق جداً"],
            en: ["Luxurious soft cream interior", "Meticulously tufted padded lining", "Solid mahogany raised lid frame", "Dignified royal appearance"],
            ru: ["Роскошная мягкая кремовая отделка", "Тщательно простеганная обивка", "Каркас из массива махагони", "Достойный королевский вид"],
            fr: ["Intérieur doux couleur crème luxueux", "Doublure capitonnée avec soin", "Cadre en acajou massif à couvercle rehaussé", "Apparence digne et royale"],
            es: ["Interior suave de color crema de lujo", "Acolchado capitoné cuidadosamente elaborado", "Marco de caoba maciza con tapa elevada", "Apariencia digna y real"]
        }
    },
    {
        id: "crowndale",
        slug: "crowndale-casket",
        title: {
            ar: "كراونديل",
            en: "Crowndale",
            ru: "Краудейл",
            fr: "Crowndale",
            es: "Crowndale"
        },
        description: {
            ar: "نعش من خشب البلوط الصلب ذو غطاء مرتفع.",
            en: "Solid oak wood casket with raised lid.",
            ru: "Гроб из массива дуба с приподнятой крышкой.",
            fr: "Cercueil en chêne massif à couvercle rehaussé.",
            es: "Ataúd de madera de roble macizo con tapa elevada."
        },
        fullDescription: {
            ar: "تابوت مزخرف من خشب الجوز، مصنوع من ألواح جانبية منحوتة، وخشب صلب مصقول، وتجهيزات ذهبية اللون أنيقة. يجمع بين المتانة والجمال الراقي.",
            en: "An ornate walnut casket featuring carved side panels, polished hardwood, and elegant gold-toned fittings. Combines structural durability with refined beauty.",
            ru: "Резной гроб из орехового дерева с резными боковыми панелями, полированным массивом и элегантной золотистой фурнитурой.",
            fr: "Un cercueil orné en noyer avec des panneaux latéraux sculptés, du bois massif poli et des garnitures dorées élégantes. Allie durabilité et beauté.",
            es: "Un elaborado ataúd de nogal con paneles laterales tallados, madera maciza pulida y elegantes herrajes dorados. Combina durabilidad y belleza."
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/Crowndale.jpeg",
        gallery: [
            "/images/caskets/Crowndale.jpeg"
        ],
        woodType: {
            ar: "خشب جوز مصمت مزخرف",
            en: "Ornate Solid Walnut Timber",
            ru: "Резной массив ореха",
            fr: "Bois de noyer massif sculpté",
            es: "Madera maciza de nogal tallada"
        },
        liningType: {
            ar: "تبطين حريري فاخر",
            en: "Luxurious Silk Lining",
            ru: "Шелковая обивка премиум",
            fr: "Doublure en soie de luxe",
            es: "Forro de seda de lujo"
        },
        weightCapacity: {
            ar: "حتى 180 كجم",
            en: "Up to 180 kg",
            ru: "До 180 кг",
            fr: "Jusqu'à 180 kg",
            es: "Hasta 180 kg"
        },
        iataCompliant: false,
        colors: [
            {
                id: "c1",
                code: "#5c3317",
                name: { ar: "بني كلاسيكي", en: "Classic Brown", ru: "Классический коричневый", fr: "Brun classique", es: "Marrón clásico" }
            }
        ],
        dimensions: [
            {
                id: "d1",
                label: { ar: "قياسي", en: "Standard", ru: "Стандартный", fr: "Standard", es: "Estándار" },
                value: "206cm x 67cm x 58cm"
            }
        ],
        specifications: {
            ar: ["ألواح جانبية منحوتة بدقة", "تجهيزات ذهبية اللون أنيقة", "خشب صلب مصقول عالي الجودة", "بناء قوي يجمع الجمال والمتانة"],
            en: ["Meticulously carved side panels", "Elegant gold-toned fittings", "Polished high-grade solid hardwood", "Robust build combining strength and beauty"],
            ru: ["Тщательно резные боковые панели", "Элегантная золотистая фурнитура", "Высококачественный полированный массив", "Прочная конструкция"],
            fr: ["Panneaux latéraux sculptés avec soin", "Garnitures dorées élégantes", "Bois massif poli de haute qualité", "Construction robuste alliant force et beauté"],
            es: ["Paneles laterales meticulosamente tallados", "Elegantes herrajes de tono dorado", "Madera maciza pulida de alta calidad", "Construcción robusta que une belleza y fuerza"]
        }
    },
    {
        id: "brocklebank-oak",
        slug: "brocklebank-oak-casket",
        title: {
            ar: "بروكليبانك (بلوط)",
            en: "Brocklebank (Oak)",
            ru: "Броклбанк (дуб)",
            fr: "Brocklebank (Chêne)",
            es: "Brocklebank (Roble)"
        },
        description: {
            ar: "تابوت من خشب البلوط الصلب بغطاء مرتفع.",
            en: "Solid oak wood casket with raised lid.",
            ru: "Гроб из массива дуба с приподнятой крышкой.",
            fr: "Cercueil en chêne massif à couvercle rehaussé.",
            es: "Ataúd de madera de roble macizo con tapa elevada."
        },
        fullDescription: {
            ar: "تابوت فاخر من خشب البلوط الفاتح، يتميز بلمسة نهائية طبيعية ناعمة، وأبعاد كلاسيكية، وهيكل مصنوع من خشب صلب مختار بعناية لضمان جودة تدوم طويلاً.",
            en: "A luxury light oak casket featuring a smooth natural finish, classic proportions, and a frame crafted from carefully selected hardwood to ensure long-lasting quality.",
            ru: "Роскошный гроб из светлого дуба с гладкой натуральной отделкой, классическими пропорциями и каркасом из отборного массива.",
            fr: "Un cercueil de luxe en chêne clair avec une finition naturelle douce, des proportions classiques et une structure en bois massif sélectionné.",
            es: "Un ataúd de lujo de roble claro con un suave acabado natural, proporciones clásicas y un marco elaborado con madera maciza seleccionada."
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/Brocklebank (Oak).jpeg",
        gallery: [
            "/images/caskets/Brocklebank (Oak).jpeg"
        ],
        woodType: {
            ar: "خشب بلوط فاتح مختار بعناية",
            en: "Hand-Selected Light Oak Hardwood",
            ru: "Отборный светлый дуб",
            fr: "Chêne clair massif sélectionné",
            es: "Roble claro macizo seleccionado"
        },
        liningType: {
            ar: "بطانة من الساتان الأبيض المبطن",
            en: "Padded White Satin Interior",
            ru: "Стеганый белый сатин",
            fr: "Intérieur en satin blanc rembourré",
            es: "Interior de satén blanco acolchado"
        },
        weightCapacity: {
            ar: "حتى 185 كجم",
            en: "Up to 185 kg",
            ru: "До 185 кг",
            fr: "Jusqu'à 185 kg",
            es: "Hasta 185 kg"
        },
        iataCompliant: false,
        colors: [
            {
                id: "c1",
                code: "#5c3317",
                name: { ar: "بني كلاسيكي", en: "Classic Brown", ru: "Классический коричневый", fr: "Brun classique", es: "Marrón clásico" }
            }
        ],
        dimensions: [
            {
                id: "d1",
                label: { ar: "قياسي", en: "Standard", ru: "Стандартный", fr: "Standard", es: "Estándار" },
                value: "208cm x 68cm x 60cm"
            }
        ],
        specifications: {
            ar: ["خشب صلب مختار بعناية لضمان الجودة", "أبعاد وهيكل كلاسيكي متناسق", "لمسة نهائية طبيعية ناعمة", "غطاء مرتفع بمظهر فخم"],
            en: ["Carefully selected timber for lasting quality", "Proportional classic dimensional frame", "Smooth natural-touch finish", "Royal raised lid structure"],
            ru: ["Тщательно отборная древесина", "Пропорциональный классический каркас", "Гладкая отделка", "Приподнятая крышка"],
            fr: ["Bois sélectionné avec soin", "Cadre aux proportions classiques", "Finition douce au toucher naturel", "Structure de couvercle rehaussée"],
            es: ["Madera cuidadosamente seleccionada", "Estructura de proporciones clásicas", "Acabado suave de tacto natural", "Estructura de tapa elevada"]
        }
    },
    {
        id: "brocklebank-mahogany",
        slug: "brocklebank-mahogany-casket",
        title: {
            ar: "بروكليبانك (ماهوجني)",
            en: "Brocklebank (Mahogany)",
            ru: "Броклбанк (махагони)",
            fr: "Brocklebank (Acajou)",
            es: "Brocklebank (Caoba)"
        },
        description: {
            ar: "تابوت من خشب الماهوجني الصلب بغطاء مرتفع.",
            en: "Solid mahogany wood casket with raised lid.",
            ru: "Гроб из массива махагони с приподнятой крышкой.",
            fr: "Cercueil en acajou massif à couvercle rehaussé.",
            es: "Ataúd de madera de caoba maciza con tapa elevada."
        },
        fullDescription: {
            ar: "مجموعة التوابيت الفاخرة، تعرض تشكيلة من نماذج التوابيت الخشبية عالية الجودة، متوفرة بتشطيبات وأنماط متنوعة تناسب أعلى معايير الجودة والهيبة.",
            en: "Part of our luxury casket collection, showcasing a range of high-quality wooden casket models available in various finishes and architectural styles.",
            ru: "Коллекция роскошных гробов, представляющая выбор высококачественных деревянных моделей в различных вариантах отделки.",
            fr: "Fait partie de notre collection de cercueils de luxe, présentant une gamme de modèles en bois de haute qualité disponibles dans diverses finitions.",
            es: "Parte de nuestra colección de ataúdes de lujo, que exhibe una gama de modelos de madera de alta calidad disponibles en varios acabados."
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/Brocklebank (Mahogany).jpeg",
        gallery: [
            "/images/caskets/Brocklebank (Mahogany).jpeg"
        ],
        woodType: {
            ar: "خشب ماهوجني صلب ممتاز",
            en: "Solid Mahogany Hardwood",
            ru: "Отборный массив махагони",
            fr: "Acajou massif de qualité",
            es: "Madera maciza de caoba"
        },
        liningType: {
            ar: "بطانة مخملية كلاسيكية",
            en: "Classic Velvet Lining",
            ru: "Классический бархат",
            fr: "Doublure en velours classique",
            es: "Forro de terciopelo clásico"
        },
        weightCapacity: {
            ar: "حتى 185 كجم",
            en: "Up to 185 kg",
            ru: "До 185 кг",
            fr: "Jusqu'à 185 kg",
            es: "Hasta 185 kg"
        },
        iataCompliant: false,
        colors: [
            {
                id: "c1",
                code: "#5c3317",
                name: { ar: "بني كلاسيكي", en: "Classic Brown", ru: "Классический коричневый", fr: "Brun classique", es: "Marrón clásico" }
            }
        ],
        dimensions: [
            {
                id: "d1",
                label: { ar: "قياسي", en: "Standard", ru: "Стандартный", fr: "Standard", es: "Estándار" },
                value: "208cm x 68cm x 60cm"
            }
        ],
        specifications: {
            ar: ["تشكيلة متنوعة من الأنماط والتشطيبات", "خشب ماهوجني مصمت عالي الجودة", "بناء قوي وحرفية عالية", "مقابض نحاسية فاخرة"],
            en: ["Diverse range of finishes and styles", "High-grade solid mahogany timber", "Robust construction and craftsmanship", "Luxurious brass hardware"],
            ru: ["Разнообразие отделок и стилей", "Высококачественный массив махагони", "Надежная сборка и мастерство", "Роскошная латунная фурнитура"],
            fr: ["Gamme variée de finitions et de styles", "Bois d'acajou massif de haute qualité", "Construction robuste et savoir-faire", "Garnitures en laiton luxueuses"],
            es: ["Gama variada de acabados y estilos", "Madera maciza de caoba de alta calidad", "Construcción robusta y gran artesanía", "Herrajes de latón de lujo"]
        }
    },
    {
        id: "garrett-jacobean",
        slug: "garrett-jacobean-casket",
        title: {
            ar: "غاريت (جاكوبيان)",
            en: "Garrett (Jacobean)",
            ru: "Гарретт (Якобианский)",
            fr: "Garrett (Jacobain)",
            es: "Garrett (Jacobino)"
        },
        description: {
            ar: "تابوت جاكوبي مصمت ذو ألواح خشبية وغطاء مرتفع.",
            en: "Solid Jacobean paneled casket with raised lid.",
            ru: "Гроб в якобианском стиле из массива с панелями и приподнятой крышкой.",
            fr: "Cercueil jacobain massif à panneaux et couvercle rehaussé.",
            es: "Ataúd jacobino macizo con paneles y tapa elevada."
        },
        fullDescription: {
            ar: "مجموعة التوابيت الخشبية، تقدم تصاميم وتشطيبات متعددة، وحرفية عالية الجودة لتناسب مختلف الأذواق والاحتياجات مع الالتزام بأعلى درجات المتانة.",
            en: "Our timber casket collection offering multiple designs and finishes, with high-quality craftsmanship tailored to suit various aesthetic preferences.",
            ru: "Коллекция деревянных гробов, предлагающая различные варианты дизайна и отделки, созданная с высоким качеством.",
            fr: "Collection de cercueils en bois offrant de multiples designs et finitions, façonnée avec un savoir-faire de qualité.",
            es: "Colección de ataúdes de madera que ofrece múltiples diseños y acabados, elaborada con artesanía de alta calidad."
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/Garrett (Jacobean).jpeg",
        gallery: [
            "/images/caskets/Garrett (Jacobean).jpeg"
        ],
        woodType: {
            ar: "خشب صلب بنمط جاكوبي كلاسيكي",
            en: "Solid Timber Jacobean Style",
            ru: "Массив дерева в якобианском стиле",
            fr: "Bois massif style jacobain",
            es: "Madera maciza estilo jacobino"
        },
        liningType: {
            ar: "بطانة مخملية فاخرة مطرزة",
            en: "Embroidered Premium Velvet Interior",
            ru: "Вышитый бархат премиум",
            fr: "Intérieur en velours brodé premium",
            es: "Interior de terciopelo bordado premium"
        },
        weightCapacity: {
            ar: "حتى 190 كجم",
            en: "Up to 190 kg",
            ru: "До 190 кг",
            fr: "Jusqu'à 190 kg",
            es: "Hasta 190 kg"
        },
        iataCompliant: false,
        colors: [
            {
                id: "c1",
                code: "#5c3317",
                name: { ar: "بني كلاسيكي", en: "Classic Brown", ru: "Классический коричневый", fr: "Brun classique", es: "Marrón clásico" }
            }
        ],
        dimensions: [
            {
                id: "d1",
                label: { ar: "قياسي", en: "Standard", ru: "Стандартный", fr: "Standard", es: "Estándار" },
                value: "210cm x 70cm x 60cm"
            }
        ],
        specifications: {
            ar: ["تصاميم وتشطيبات متعددة", "ألواح جدارية جاكوبية مزخرفة", "حرفية عالية الجودة", "غطاء مرتفع وهيكل متين"],
            en: ["Multiple design finishes", "Ornate Jacobean panel architecture", "Superior build craftsmanship", "Raised lid and robust frame"],
            ru: ["Множество вариантов отделки", "Детализированные якобианские панели", "Высокое качество сборки", "Приподнятая крышка и прочный корпус"],
            fr: ["Multiples finitions de design", "Panneaux jacobains sculptés", "Savoir-faire de fabrication supérieur", "Couvercle rehaussé et cadre robuste"],
            es: ["Múltiples acabados de diseño", "Paneles jacobinos detallados", "Artesanía de fabricación superior", "Tapa elevada y marco robusto"]
        }
    },
    {
        id: "garrett-oak",
        slug: "garrett-oak-casket",
        title: {
            ar: "غاريت (بلوط)",
            en: "Garrett (Oak)",
            ru: "Гарретт (дуб)",
            fr: "Garrett (Chêne)",
            es: "Garrett (Roble)"
        },
        description: {
            ar: "تابوت من خشب البلوط مصمت ذو ألواح خشبية وغطاء مرتفع.",
            en: "Solid oak paneled casket with raised lid.",
            ru: "Гроб из массива дуба с панелями и приподнятой крышкой.",
            fr: "Cercueil en chêne massif à panneaux et couvercle rehaussé.",
            es: "Ataúd de roble macizo con paneles y tapa elevada."
        },
        fullDescription: {
            ar: "تابوت تقليدي من خشب البلوط، مصنوع من خشب صلب مختار بعناية، بتفاصيل زخرفية في الألواح، ومقابض معدنية مصقولة لمظهر خالد. تابوت فاخر من خشب الماهوجني، مطليّ بلون عنابي داكن لامع، بغطاء أنيق منحنيّ وتجهيزات ذهبية فاخرة، يضفي عليه مظهراً راقياً وفخماً.",
            en: "A traditional oak casket crafted from carefully chosen hardwood, featuring ornate panel detailing and polished metal handles. Complemented by a burgundy glossy mahogany variant with a curved lid and luxury gold hardware.",
            ru: "Традиционный дубовый гроб из отборного массива с резными филенками и полированными ручками. Вариант из бордового глянцевого махагони с изогнутой крышкой.",
            fr: "Cercueil traditionnel en chêne fabriqué en bois massif sélectionné avec soin, avec des panneaux décoratifs et des poignées polies. Décliné en acajou brillant bordeaux.",
            es: "Ataúd tradicional de roble elaborado con madera maciza seleccionada, con detalles decorativos en los paneles y asas pulidas. Variante de caoba borgoña brillante."
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/Garrett (Oak).jpeg",
        gallery: [
            "/images/caskets/Garrett (Oak).jpeg"
        ],
        woodType: {
            ar: "خشب بلوط وماهوجني عنابي صلب",
            en: "Solid Oak & Burgundy Mahogany",
            ru: "Массив дуба и бордовый махагони",
            fr: "Chêne massif & acajou bordeaux",
            es: "Roble macizo y caoba borgoña"
        },
        liningType: {
            ar: "بطانة ساتان حريرية فاخرة",
            en: "Luxurious Satin Silk Interior",
            ru: "Шелково-сатиновая обивка премиум",
            fr: "Intérieur en satin de soie luxueux",
            es: "Interior de satén de seda de lujo"
        },
        weightCapacity: {
            ar: "حتى 190 كجم",
            en: "Up to 190 kg",
            ru: "До 190 кг",
            fr: "Jusqu'à 190 kg",
            es: "Hasta 190 kg"
        },
        iataCompliant: false,
        colors: [
            {
                id: "c1",
                code: "#5c3317",
                name: { ar: "بني كلاسيكي", en: "Classic Brown", ru: "Классический коричневый", fr: "Brun classique", es: "Marrón clásico" }
            }
        ],
        dimensions: [
            {
                id: "d1",
                label: { ar: "قياسي", en: "Standard", ru: "Стандартный", fr: "Standard", es: "Estándار" },
                value: "210cm x 70cm x 60cm"
            }
        ],
        specifications: {
            ar: ["خشب صلب مختار بعناية بتفاصيل زخرفية", "طلاء عنابي داكن لامع اختياري", "غطاء أنيق منحني ومقبض مصقول", "تجهيزات ذهبية فاخرة لمظهر خالد"],
            en: ["Carefully chosen hardwood with panel detailing", "Optional glossy dark burgundy lacquer", "Curved lid structure with polished handles", "Luxury gold hardware for a timeless look"],
            ru: ["Отборный массив с декоративными панелями", "Глянцевое покрытие цвета темного бордо", "Изогнутая крышка и полированные ручки", "Роскошная золотистая фурнитура"],
            fr: ["Bois massif sélectionné avec détails sculptés", "Laque bordeaux foncé brillante optionnelle", "Structure de couvercle incurvé avec poignées polies", "Garnitures dorées de luxe"],
            es: ["Madera maciza seleccionada con detalles en paneles", "Laca brillante de color borgoña oscuro opcional", "Tapa curvada con asas pulidas", "Herrajes dorados de lujo para un aspecto atemporal"]
        }
    },
    {
        id: "casket-1",
        slug: "casket-1",
        title: {
            ar: "تابوت",
            en: "Casket",
            ru: "Гроб",
            fr: "Cercueil",
            es: "Ataúd"
        },
        description: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        fullDescription: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/001.jpeg",
        gallery: [
            "/images/caskets/001.jpeg"
        ],
        woodType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        liningType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        weightCapacity: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        iataCompliant: false,
        colors: [],
        dimensions: [],
        specifications: {
            ar: [],
            en: [],
            ru: [],
            fr: [],
            es: []
        }
    },
    {
        id: "casket-2",
        slug: "casket-2",
        title: {
            ar: "تابوت",
            en: "Casket",
            ru: "Гроб",
            fr: "Cercueil",
            es: "Ataúd"
        },
        description: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        fullDescription: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/002.jpeg",
        gallery: [
            "/images/caskets/002.jpeg"
        ],
        woodType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        liningType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        weightCapacity: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        iataCompliant: false,
        colors: [],
        dimensions: [],
        specifications: {
            ar: [],
            en: [],
            ru: [],
            fr: [],
            es: []
        }
    },
    {
        id: "casket-3",
        slug: "casket-3",
        title: {
            ar: "تابوت",
            en: "Casket",
            ru: "Гроб",
            fr: "Cercueil",
            es: "Ataúd"
        },
        description: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        fullDescription: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/003.jpeg",
        gallery: [
            "/images/caskets/003.jpeg"
        ],
        woodType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        liningType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        weightCapacity: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        iataCompliant: false,
        colors: [],
        dimensions: [],
        specifications: {
            ar: [],
            en: [],
            ru: [],
            fr: [],
            es: []
        }
    },
    {
        id: "casket-4",
        slug: "casket-4",
        title: {
            ar: "تابوت",
            en: "Casket",
            ru: "Гроб",
            fr: "Cercueil",
            es: "Ataúd"
        },
        description: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        fullDescription: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/004.jpeg",
        gallery: [
            "/images/caskets/004.jpeg"
        ],
        woodType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        liningType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        weightCapacity: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        iataCompliant: false,
        colors: [],
        dimensions: [],
        specifications: {
            ar: [],
            en: [],
            ru: [],
            fr: [],
            es: []
        }
    },
    {
        id: "casket-5",
        slug: "casket-5",
        title: {
            ar: "تابوت",
            en: "Casket",
            ru: "Гроб",
            fr: "Cercueil",
            es: "Ataúd"
        },
        description: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        fullDescription: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/005.jpeg",
        gallery: [
            "/images/caskets/005.jpeg"
        ],
        woodType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        liningType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        weightCapacity: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        iataCompliant: false,
        colors: [],
        dimensions: [],
        specifications: {
            ar: [],
            en: [],
            ru: [],
            fr: [],
            es: []
        }
    },
    {
        id: "casket-6",
        slug: "casket-6",
        title: {
            ar: "تابوت",
            en: "Casket",
            ru: "Гроб",
            fr: "Cercueil",
            es: "Ataúd"
        },
        description: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        fullDescription: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/006.jpeg",
        gallery: [
            "/images/caskets/006.jpeg"
        ],
        woodType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        liningType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        weightCapacity: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        iataCompliant: false,
        colors: [],
        dimensions: [],
        specifications: {
            ar: [],
            en: [],
            ru: [],
            fr: [],
            es: []
        }
    },
    {
        id: "casket-7",
        slug: "casket-7",
        title: {
            ar: "تابوت",
            en: "Casket",
            ru: "Гроб",
            fr: "Cercueil",
            es: "Ataúd"
        },
        description: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        fullDescription: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/007.jpeg",
        gallery: [
            "/images/caskets/007.jpeg"
        ],
        woodType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        liningType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        weightCapacity: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        iataCompliant: false,
        colors: [],
        dimensions: [],
        specifications: {
            ar: [],
            en: [],
            ru: [],
            fr: [],
            es: []
        }
    },
    {
        id: "casket-8",
        slug: "casket-8",
        title: {
            ar: "تابوت",
            en: "Casket",
            ru: "Гроб",
            fr: "Cercueil",
            es: "Ataúd"
        },
        description: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        fullDescription: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/008.jpeg",
        gallery: [
            "/images/caskets/008.jpeg"
        ],
        woodType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        liningType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        weightCapacity: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        iataCompliant: false,
        colors: [],
        dimensions: [],
        specifications: {
            ar: [],
            en: [],
            ru: [],
            fr: [],
            es: []
        }
    },
    {
        id: "casket-9",
        slug: "casket-9",
        title: {
            ar: "تابوت",
            en: "Casket",
            ru: "Гроб",
            fr: "Cercueil",
            es: "Ataúd"
        },
        description: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        fullDescription: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/009.jpeg",
        gallery: [
            "/images/caskets/009.jpeg"
        ],
        woodType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        liningType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        weightCapacity: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        iataCompliant: false,
        colors: [],
        dimensions: [],
        specifications: {
            ar: [],
            en: [],
            ru: [],
            fr: [],
            es: []
        }
    },
    {
        id: "casket-10",
        slug: "casket-10",
        title: {
            ar: "تابوت",
            en: "Casket",
            ru: "Гроб",
            fr: "Cercueil",
            es: "Ataúd"
        },
        description: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        fullDescription: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/010.jpeg",
        gallery: [
            "/images/caskets/010.jpeg"
        ],
        woodType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        liningType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        weightCapacity: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        iataCompliant: false,
        colors: [],
        dimensions: [],
        specifications: {
            ar: [],
            en: [],
            ru: [],
            fr: [],
            es: []
        }
    },
    {
        id: "casket-11",
        slug: "casket-11",
        title: {
            ar: "تابوت",
            en: "Casket",
            ru: "Гроб",
            fr: "Cercueil",
            es: "Ataúd"
        },
        description: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        fullDescription: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/011.jpeg",
        gallery: [
            "/images/caskets/011.jpeg"
        ],
        woodType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        liningType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        weightCapacity: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        iataCompliant: false,
        colors: [],
        dimensions: [],
        specifications: {
            ar: [],
            en: [],
            ru: [],
            fr: [],
            es: []
        }
    },
    {
        id: "casket-12",
        slug: "casket-12",
        title: {
            ar: "تابوت",
            en: "Casket",
            ru: "Гроб",
            fr: "Cercueil",
            es: "Ataúd"
        },
        description: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        fullDescription: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/012.jpeg",
        gallery: [
            "/images/caskets/012.jpeg"
        ],
        woodType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        liningType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        weightCapacity: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        iataCompliant: false,
        colors: [],
        dimensions: [],
        specifications: {
            ar: [],
            en: [],
            ru: [],
            fr: [],
            es: []
        }
    },
    {
        id: "casket-13",
        slug: "casket-13",
        title: {
            ar: "تابوت",
            en: "Casket",
            ru: "Гроб",
            fr: "Cercueil",
            es: "Ataúd"
        },
        description: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        fullDescription: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/013.jpeg",
        gallery: [
            "/images/caskets/013.jpeg"
        ],
        woodType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        liningType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        weightCapacity: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        iataCompliant: false,
        colors: [],
        dimensions: [],
        specifications: {
            ar: [],
            en: [],
            ru: [],
            fr: [],
            es: []
        }
    },
    {
        id: "casket-14",
        slug: "casket-14",
        title: {
            ar: "تابوت",
            en: "Casket",
            ru: "Гроб",
            fr: "Cercueil",
            es: "Ataúd"
        },
        description: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        fullDescription: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        price: null,
        currency: "USD",
        hasPrice: false,
        mainImage: "/images/caskets/014.jpeg",
        gallery: [
            "/images/caskets/014.jpeg"
        ],
        woodType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        liningType: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        weightCapacity: {
            ar: "",
            en: "",
            ru: "",
            fr: "",
            es: ""
        },
        iataCompliant: false,
        colors: [],
        dimensions: [],
        specifications: {
            ar: [],
            en: [],
            ru: [],
            fr: [],
            es: []
        }
    }
];
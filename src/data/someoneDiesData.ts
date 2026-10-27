export interface LocalizedText {
    ar: string;
    en: string;
    ru: string;
    fr: string;
    es: string;
}

export interface RegistryOffice {
    id: string;
    name: LocalizedText;
    address: LocalizedText;
    phone: string;
    mapUrl: string;
    websiteUrl?: string;
}

export interface DetailSection {
    type?: "text" | "offices_grid";
    heading?: LocalizedText;
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
    offices?: RegistryOffice[];
}

export interface SomeoneDiesCaseItem {
    id: string;
    iconName: "Home" | "Building2" | "AlertCircle" | "Globe" | "FileText" | "Heart";
    title: LocalizedText;
    desc: LocalizedText;
    detailContent: {
        introSubtitle: LocalizedText;
        introText: LocalizedText;
        sections: DetailSection[];
    };
}

export const someoneDiesData: SomeoneDiesCaseItem[] = [
    {
        id: "death-at-home",
        iconName: "Home",
        title: {
            ar: "الموت في المنزل",
            en: "Death at Home",
            ru: "Смерть дома",
            fr: "Décès à domicile",
            es: "Muerte en casa"
        },
        desc: {
            ar: "الإجراءات والخطوات الفورية المطلوبة عند حدوث الوفاة داخل المنزل واستدعاء الطبيب المعالج.",
            en: "Immediate procedures required when a death occurs at home and calling the attending doctor.",
            ru: "Первоочередные действия при смерти дома и вызов лечащего врача.",
            fr: "Procédures immédiates requises lors d'un décès à domicile et appel du médecin traitant.",
            es: "Procedimientos inmediatos requeridos cuando ocurre un fallecimiento en el hogar."
        },
        detailContent: {
            introSubtitle: {
                ar: "ما يجب فعله عند وفاة شخص ما في المنزل",
                en: "What to do when someone dies at home",
                ru: "Что делать, если человек умер дома",
                fr: "Que faire lorsque quelqu'un meurt à la maison",
                es: "Qué hacer cuando alguien muere en casa"
            },
            introText: {
                ar: "إذا توفي عزيز لديكم في المنزل، إليكم ما يحدث عادةً بعد ذلك - وكيف يمكننا تقديم الدعم لكم.",
                en: "If your loved one has died at home, here is what usually happens next - and how we can support you.",
                ru: "Если ваш близкий умер дома, вот что обычно происходит дальше и как мы можем вам помочь.",
                fr: "Si votre proche est décédé à la maison, voici ce qui se passe généralement ensuite - et comment nous pouvons vous soutenir.",
                es: "Si su ser querido ha fallecido en casa, esto es lo que suele suceder a continuación y cómo podemos ayudarle."
            },
            sections: [
                {
                    heading: {
                        ar: "استدعاء الطبيب",
                        en: "Call the doctor",
                        ru: "Вызов врача",
                        fr: "Appeler le médecin",
                        es: "Llamar al médico"
                    },
                    paragraphs: {
                        ar: [
                            "سيتعين على الطبيب زيارة المنزل لتأكيد الوفاة. قد يكون هذا طبيب الأسرة أو طبيباً مناوباً. سيتشاور الطبيب للاتفاق على سبب الوفاة، ثم يقدم شهادة الوفاة الطبية (MCCD) إلى مكتب التسجيل المختص بالمنطقة التي حدثت فيها الوفاة. قد يستغرق ذلك بضعة أيام، لذا إذا كنتم ترغبون في إقامة الجنازة في أسرع وقت ممكن، يرجى إبلاغ الطبيب بذلك."
                        ],
                        en: [
                            "A doctor will need to visit to confirm the death. This may be your GP, or an on-call locum doctor. The doctor will consult the local Medical Examiner to agree on the cause of death, and then they'll send the Medical Certificate of the Cause of Death (MCCD) to the Registrar's Office that covers the area where the death happened.",
                            "This may take a couple of days, so if you want the funeral to take place as soon as possible, let the doctor know."
                        ],
                        ru: [
                            "Врач должен приехать для подтверждения факта смерти. Это может быть ваш участковый или дежурный врач. Врач проконсультируется с медицинским экспертом для согласования причины смерти, а затем направит медицинское свидетельство о смерти (MCCD) в орган регистрации.",
                            "Это может занять несколько дней, поэтому, если вы хотите провести похороны как можно скорее, сообщите об этом врачу."
                        ],
                        fr: [
                            "Un médecin devra se rendre sur place pour confirmer le décès. Il может s'agir de votre médecin généraliste ou d'un médecin de garde. Le médecin consultera le médecin examinateur pour convenir de la cause du décès, puis enverra le certificat médical de décès (MCCD) au bureau d'enregistrement.",
                            "Cela peut prendre deux jours, donc si vous souhaitez que les funérailles aient lieu dès que possible, informez-en le médecin."
                        ],
                        es: [
                            "Un médico deberá acudir para confirmar el fallecimiento. Puede ser su médico de cabecera o un médico de guardia. El médico consultará con el examinador médico para acordar la causa de la muerte y enviará el Certificado Médico de Defunción (MCCD) al Registro Civil.",
                            "Esto puede tardar unos días, por lo que si desea que el entierro se realice lo antes posible, hágaselo saber al médico."
                        ]
                    }
                },
                {
                    heading: {
                        ar: "التواصل معنا",
                        en: "Contact us",
                        ru: "Свяжитесь с нами",
                        fr: "Contactez-nous",
                        es: "Contáctenos"
                    },
                    paragraphs: {
                        ar: [
                            "بمجرد حضور الطبيب ومعاينته، يمكنك الاتصال بنا في أي وقت - ليلاً أو نهاراً. وسنتولى نقل فقيدكم ورعايته بكل احترام وكرامة.",
                            "إذا كنتم تفضلون بقاء المتوفى في المنزل لفترة قصيرة، فسنقدم لكم الإرشادات الكافية حول كيفية القيام بذلك بشكل آمن ومناسب."
                        ],
                        en: [
                            "Once the doctor has attended, you can call us any time - day or night. We'll bring your loved one into our care, with dignity and respect.",
                            "If you'd prefer for them to remain at home for a little while, we'll offer guidance on how to do this safely and appropriately."
                        ],
                        ru: [
                            "После осмотра врача вы можете позвонить нам в любое время суток. Мы бережно и с достоинством возьмем на себя заботу о вашем близком.",
                            "Если вы предпочитаете, чтобы усопший оставался дома какое-то время, мы дадим рекомендации, как сделать это безопасно."
                        ],
                        fr: [
                            "Une fois le médecin venu, vous pouvez nous appeler à tout moment, jour et nuit. Nous prendrons soin de votre proche avec dignité et respect.",
                            "Si vous préférez qu'il reste à la maison un moment, nous vous guiderons pour le faire en toute sécurité."
                        ],
                        es: [
                            "Una vez que el médico haya acudido, puede llamarnos a cualquier hora, día o noche. Nos encargaremos de su ser querido con dignidad y respeto.",
                            "Si prefiere que permanezca en casa un poco más de tiempo, le orientaremos sobre cómo hacerlo de forma segura."
                        ]
                    }
                },
                {
                    heading: {
                        ar: "ماذا يحدث بعد ذلك؟",
                        en: "What happens next",
                        ru: "Что происходит дальше",
                        fr: "Que se passe-t-il ensuite",
                        es: "Qué sucede después"
                    },
                    paragraphs: {
                        ar: [
                            "بمجرد اكتمال إعداد شهادة الوفاة الطبية (MCCD)، سيتم إرسالها عبر البريد الإلكتروني إلى مكتب التسجيل بواسطة الفاحص الطبي."
                        ],
                        en: [
                            "Once the MCCD is completed, it will be emailed to the Registrar's office by the Medical Examiner (ME)."
                        ],
                        ru: [
                            "Как только медицинское свидетельство (MCCD) будет оформлено, медэксперт отправит его по электронной почте в орган регистрации."
                        ],
                        fr: [
                            "Une fois le MCCD complété, il sera envoyé par e-mail au bureau d'enregistrement par le médecin examinateur."
                        ],
                        es: [
                            "Una vez completado el MCCD, el examinador médico lo enviará por correo electrónico al Registro Civil."
                        ]
                    },
                    bullets: {
                        ar: [
                            "بعد الوفاة، يقوم الفاحص الطبي بمراجعة سبب الوفاة للتأكد من دقتها.",
                            "يتواصل مكتب الفاحص الطبي معكم لشرح سبب الوفاة والإجابة على أي استفسارات.",
                            "سيتم تحديد موعد لتسجيل الوفاة رسمياً في مكتب التسجيل التابع للمنطقة.",
                            "يقوم أحد أقارب المتوفى بتسجيل الوفاة رسمياً، وفي حال عدم وجود أقارب، يمكن لمن حضر الوفاة التكفل بذلك."
                        ],
                        en: [
                            "After someone dies, a medical examiner has to check the cause of death to make sure that it's accurate.",
                            "The ME's office will then contact you to explain the cause of death and answer any questions.",
                            "You'll then have to make an appointment to register the death at the Registry Office.",
                            "A relative should register the death, but if there are no relatives, anyone present at the time of death can do so."
                        ],
                        ru: [
                            "После смерти медицинский эксперт должен проверить причину смерти для подтверждения точности.",
                            "Служба медэксперта свяжется с вами, чтобы объяснить причину смерти и ответить на вопросы.",
                            "Затем вам нужно будет записаться на прием для официальной регистрации смерти.",
                            "Зарегистрировать смерть должен родственник, а при их отсутствии — лицо, присутствовавшее при смерти."
                        ],
                        fr: [
                            "Après le décès, un médecin examinateur doit vérifier la cause du décès pour s'assurer de ее précision.",
                            "Le bureau du médecin examinateur vous contactera pour vous expliquer la cause du décès.",
                            "Vous devrez ensuite prendre rendez-vous pour enregistrer le décès au bureau d'état civil.",
                            "Un parent doit enregistrer le décès, ou à défaut, une personne présente lors du décès."
                        ],
                        es: [
                            "Tras el fallecimiento, un examinador médico debe verificar la causa de la muerte para garantizar su precisión.",
                            "La oficina del examinador médico se pondrá en contacto con usted para explicarle la causa.",
                            "Luego deberá solicitar una cita para registrar el fallecimiento en el Registro Civil.",
                            "Un familiar debe registrar el fallecimiento, أو en su defecto, alguien presente en el momento."
                        ]
                    }
                },
                {
                    heading: {
                        ar: "بعد التسجيل والتنسيق",
                        en: "After registration",
                        ru: "После регистрации",
                        fr: "Après l'enregistrement",
                        es: "Después del registro"
                    },
                    paragraphs: {
                        ar: [
                            "يمكننا البدء في إجراء الترتيبات اللازمة قبل تسجيل الوفاة رسمياً، أو الانتظار لحين الانتهاء من التسجيل حسب رغبتكم. لا داعي للعجلة، سنقوم بالترتيبات بالسرعة التي تناسبكم وتوفر لكم الراحة."
                        ],
                        en: [
                            "We can begin making arrangements before the death is registered, or we can wait until it's done if you prefer. There's no rush. We'll take things completely at your pace."
                        ],
                        ru: [
                            "Мы можем начать подготовку до официальной регистрации смерти или подождать, если вам так удобнее. Спешки нет, мы работаем в комфортном для вас темпе."
                        ],
                        fr: [
                            "Nous pouvons commencer les démarches avant l'enregistrement du décès, ou attendre que ce soit fait. Rien ne presse, nous avançons à votre rythme."
                        ],
                        es: [
                            "Podemos comenzar a hacer los arreglos antes de registrar el fallecimiento o esperar hasta que esté listo. No hay prisa, nos adaptamos a su ritmo."
                        ]
                    }
                },
                {
                    heading: {
                        ar: "إذا كانت الوفاة مفاجئة أو غير متوقعة",
                        en: "If the death was unexpected",
                        ru: "Если смерть была неожиданной",
                        fr: "Si le décès était inattendu",
                        es: "Si la muerte fue inesperada"
                    },
                    paragraphs: {
                        ar: [
                            "في بعض الحالات، إذا كانت الوفاة مفاجئة أو غير متوقعة، قد يحتاج الطبيب إلى إحالة الأمر إلى الطبيب الشرعي. سنشرح لكم هذه الإجراءات بوضوح في حال حدوثها ونقدم لكم كل الدعم الممكن."
                        ],
                        en: [
                            "In some cases, if the death was sudden or unexpected, the doctor may need to refer to a Coroner. We'll explain this process clearly if it happens and offer any support that we can."
                        ],
                        ru: [
                            "В некоторых случаях, если смерть была внезапной, врачу может потребоваться передать дело коронеру/судмедэксперту. Мы подробно объясним этот процесс."
                        ],
                        fr: [
                            "Dans certains cas de décès soudain, le médecin может devoir orienter le dossier vers le médecin légiste. Nous vous expliquerons clairement cette procédure."
                        ],
                        es: [
                            "En algunos casos de muerte súbita, el médico puede remitir el caso al forense. Le explicaremos este proceso claramente."
                        ]
                    }
                }
            ]
        }
    },
    {
        id: "death-in-care",
        iconName: "Building2",
        title: {
            ar: "الوفاة في الرعاية المهنية أو المستشفى",
            en: "Dying In Hospital or Hospice",
            ru: "Смерть в больнице или хосписе",
            fr: "Décès à l'hôpital ou en maison de soins",
            es: "Fallecimiento en hospital o centro de cuidados"
        },
        desc: {
            ar: "كيفية التعامل مع إدارة المستشفى أو دار الرعاية واستلام شهادة الوفاة وإجراءات نقل الجثمان.",
            en: "How to coordinate with hospital staff, obtain the death certificate, and arrange transport.",
            ru: "Взаимодействие с администрацией больницы, получение свидетельства и транспортировка.",
            fr: "Comment coordonner avec le personnel hospitalier, obtenir le certificat et organiser le transport.",
            es: "Cómo coordinar con el personal del hospital, obtener el certificado y organizar el traslado."
        },
        detailContent: {
            introSubtitle: {
                ar: "رعاية وإرشاد متفهم منذ اللحظة الأولى",
                en: "Compassionate care from the start",
                ru: "Заботливая поддержка с самого начала",
                fr: "Prise en charge compatissante dès le début",
                es: "Atención compasiva desde el primer momento"
            },
            introText: {
                ar: "عندما يتوفى عزيز لديكم في دار رعاية أو مستشفى أو دار مسكن للرعاية الطبية، سيكون فريق الدعم هناك أول من يستقبلكم. سيكونون معكم عاطفياً وعملياً لإرشادكم خلال الخطوات التالية.",
                en: "When your loved one passes away in a care setting - whether a hospital, hospice, or care home - the bereavement team there will be your first point of support. They'll be with you emotionally and practically, guiding you through what happens next.",
                ru: "Когда ваш близкий уходит из жизни в медучреждении — будь то больница, хоспис или дом престарелых — местная служба поддержки станет вашим первым контактом. Они окажут моральную и практическую помощь.",
                fr: "Lorsque votre proche décède dans un établissement de soins - hôpital, maison de soins ou d'accueil - l'équipe de soutien sera votre premier point de contact. Ils vous guideront avec compassion.",
                es: "Cuando su ser querido fallece en un entorno de cuidados, ya sea un hospital, hospicio o residencia, el equipo de apoyo será su primer contacto para guiarle práctica y emocionalmente."
            },
            sections: [
                {
                    heading: {
                        ar: "نحن جاهزون عندما تكونون مستعدين",
                        en: "We're ready when you are",
                        ru: "Мы готовы, когда вы будете готовы",
                        fr: "Nous sommes prêts quand vous l'êtes",
                        es: "Estamos listos cuando usted lo esté"
                    },
                    paragraphs: {
                        ar: [
                            "بمجرد شعوركم بالاستعداد، يمكنك التواصل معنا في أي وقت. سنتعامل مباشرة مع المستشفى أو دار الرعاية للتنسيق الكامل."
                        ],
                        en: [
                            "As soon as you feel ready, just reach out to us. We'll work directly with the facility to:"
                        ],
                        ru: [
                            "Как только вы почувствуете готовность, просто свяжитесь с нами. Мы свяжемся непосредственно с учреждением, чтобы:"
                        ],
                        fr: [
                            "Dès que vous vous sentez prêt, contactez-nous. Nous travaillerons directement avec l'établissement pour :"
                        ],
                        es: [
                            "Tan pronto como se sienta preparado, póngase en contacto con nosotros. Nos coordinaremos directamente con el centro para:"
                        ]
                    },
                    bullets: {
                        ar: [
                            "ترتيب عملية نقل الجثمان بكل احترام وفي الوقت المناسب لكم.",
                            "إدارة كافة البروتوكولات والوثائق المحلية الخاصة بالمستشفى.",
                            "نقل فقيدكم إلى مقرنا بأعلى درجات الرعاية والكرامة."
                        ],
                        en: [
                            "Arrange a respectful collection at a calm time.",
                            "Manage any local protocols or paperwork.",
                            "Transport your loved one to us with care and dignity."
                        ],
                        ru: [
                            "Организовать бережную транспортировку усопшего в спокойное время.",
                            "Оформить все необходимые внутренние документы и протоколы.",
                            "Перевезти вашего близкого к нам с заботой и уважением."
                        ],
                        fr: [
                            "Organiser le transport du défunt avec respect et sérénité.",
                            "Gérer tous les protocoles locaux et documents administratifs.",
                            "Transporter votre proche chez nous avec soin et dignité."
                        ],
                        es: [
                            "Organizar el traslado respetuoso en un momento de tranquilidad.",
                            "Gestionar cualquier protocolo local o papeleo.",
                            "Trasladar a su ser querido con nosotros con cuidado y dignidad."
                        ]
                    }
                },
                {
                    heading: {
                        ar: "التسجيل المعاملات والأوراق الرسمية",
                        en: "Registration and paperwork",
                        ru: "Регистрация и документы",
                        fr: "Enregistrement et formalités",
                        es: "Registro y papeleo"
                    },
                    paragraphs: {
                        ar: [
                            "داخل منشأة الرعاية وبالتنسيق مع الطبيب الفاحص، يتولى الطبيب المعالج عادةً إصدار شهادة الوفاة الطبية (MCCD). وبمجرد توقيعها تحول لمكتب التسجيل.",
                            "يسعدنا التواصل معكم قبل أو بعد التسجيل، فنحن هنا للإجابة على جميع استفساراتكم أو البدء في التخطيط لمراسم الجنازة."
                        ],
                        en: [
                            "Inside a care setting, in liaison with the Medical Examiner, a doctor will usually handle issuing the Medical Certificate of the Cause of Death (MCCD). Once it's signed and passed to the Registrar.",
                            "You're welcome to speak to us before or after registration - we're here to answer questions or to begin the funeral planning process."
                        ],
                        ru: [
                            "В медучреждении врач во взаимодействии с медэкспертом оформляет медицинское свидетельство о смерти (MCCD). После подписания оно передается в орган регистрации.",
                            "Вы можете связаться с нами до или после регистрации — мы готовы ответить на вопросы и начать организацию."
                        ],
                        fr: [
                            "En établissement de soins, le médecin délivre généralement le certificat médical de décès (MCCD) transmis ensuite à l'état civil.",
                            "Vous pouvez nous contacter avant ou après l'enregistrement - nous sommes là pour répondre à vos questions."
                        ],
                        es: [
                            "En un centro de salud, el médico emitirá el Certificado Médico de Defunción (MCCD) para enviarlo al Registro.",
                            "Puede hablar con nosotros antes o después del registro: estamos aquí para responder preguntas y comenzar los trámites."
                        ]
                    },
                    bullets: {
                        ar: [
                            "يجب التواصل مع مكتب التسجيل لحجز موعد رسمي.",
                            "عادة ما يتم التسجيل بواسطة أحد أفراد الأسرة المقربين.",
                            "تزويدنا بنسخة من تصاريح الدفن أو الحرق الرسمية.",
                            "توفير صورة من شهادة الوفاة الرسمية لإتمام الإجراءات."
                        ],
                        en: [
                            "You should contact the Registry Office to book an appointment.",
                            "This is usually done by a close family member.",
                            "Send to us the Certificate for Burial or Cremation.",
                            "Let us take a photocopy of the Death Certificate."
                        ],
                        ru: [
                            "Вам необходимо связаться с органом регистрации для записи на прием.",
                            "Обычно это делает ближний родственник.",
                            "Предоставить нам разрешение на погребение или кремацию.",
                            "Предоставить копию официального свидетельства о смерти."
                        ],
                        fr: [
                            "Vous devez contacter le bureau d'état civil pour prendre rendez-vous.",
                            "C'est généralement fait par un membre proche de la famille.",
                            "Nous transmettre le certificat d'inhumation ou de crémation.",
                            "Nous fournir une copie de l'acte de décès."
                        ],
                        es: [
                            "Debe ponerse en contacto con la Oficina del Registro para reservar una cita.",
                            "Suele hacerlo un familiar cercano.",
                            "Enviarnos el Certificado de Entierro o Cremación.",
                            "Proporcionarnos una copia del Certificado de Defunción."
                        ]
                    }
                },
                {
                    heading: {
                        ar: "خياراتكم هي محط اهتمامنا",
                        en: "What you choose matters",
                        ru: "Ваш выбор имеет значение",
                        fr: "Vos choix sont essentiels",
                        es: "Sus elecciones importan"
                    },
                    paragraphs: {
                        ar: [
                            "ظروف كل عائلة فريدة من نوعها، ونحن نحترم رغبتكم والوتيرة التي تناسبكم في اتخاذ القرارات، سواء اخترتم:"
                        ],
                        en: [
                            "Every family's situation is unique and we'll honour your pace and preferences, whether you decide on:"
                        ],
                        ru: [
                            "Ситуация каждой семьи уникальна, и мы уважительно отнесемся к вашему темпу и пожеланиям, выберете ли вы:"
                        ],
                        fr: [
                            "Chaque situation familiale est unique et nous respecterons votre rythme et vos préférences, que vous optiez pour :"
                        ],
                        es: [
                            "La situación de cada familia es única y respetaremos su ritmo y preferencias, ya sea que decida:"
                        ]
                    },
                    bullets: {
                        ar: [
                            "ترتيبات ونقل مباشر بعد الاستلام.",
                            "إلقاء نظرة الوداع الأخيرة في القاعة الخاصة.",
                            "مراسم جنازة خاصة أو عامة للعائلة والأصدقاء."
                        ],
                        en: [
                            "Direct arrangements after collection.",
                            "An extended viewing or chapel stay.",
                            "A private or family / public service."
                        ],
                        ru: [
                            "Прямую транспортировку и подготовку.",
                            "Прощание في ритуальном зале.",
                            "Частную или публичную церемонию."
                        ],
                        fr: [
                            "Des dispositions directes après la prise en charge.",
                            "Un temps de recueillement ou chapelle ardente.",
                            "Cérémonie privée, familiale ou publique."
                        ],
                        es: [
                            "Arreglos directos tras la recogida.",
                            "Permanencia en capilla ardiente o velatorio.",
                            "Servicio privado, familiar o público."
                        ]
                    }
                },
                {
                    heading: {
                        ar: "الظروف الاستثنائية وغير المتوقعة",
                        en: "Unexpected circumstances",
                        ru: "Непредвиденные обстоятельства",
                        fr: "Circonstances imprévues",
                        es: "Circunstancias inesperadas"
                    },
                    paragraphs: {
                        ar: [
                            "إذا كانت الوفاة مفاجئة أو كان سبب الوفاة غير واضح، فقد يتم تحويل الأمر إلى الطبيب الشرعي. وفي هذه الحالة سنقوم بالتالي:"
                        ],
                        en: [
                            "If the death is sudden, unexpected, or the cause is unclear, it may be referred to a Coroner. If this happens we will:"
                        ],
                        ru: [
                            "Если смерть была внезапной или причина неясна, дело может быть передано коронеру/судмедэксперту. В этом случае мы:"
                        ],
                        fr: [
                            "Si le décès est soudain ou la cause incertaine, le dossier peut être transmis au médecin légiste. Dans ce cas, nous allons :"
                        ],
                        es: [
                            "Si la muerte es súbita o la causa no está clara, puede remitirse al forense. Si esto ocurre, nosotros:"
                        ]
                    },
                    bullets: {
                        ar: [
                            "التواصل نيابة عنكم مع مكتب الطب الشرعي.",
                            "البدء في الخطط الأولية المؤقتة لحين انتهاء الإجراءات.",
                            "تقديم توجيهات وإرشادات واضحة حول الخطوات القادمة."
                        ],
                        en: [
                            "Contact the Coroner's Office for you.",
                            "Begin provisional plans where appropriate.",
                            "Provide clear guidance on the next steps."
                        ],
                        ru: [
                            "Свяжемся с канцелярией судмедэксперта от вашего имени.",
                            "Начнем предварительное планирование.",
                            "Предоставим четкие инструкции по следующим шагам."
                        ],
                        fr: [
                            "Contacter le bureau du médecin légiste pour vous.",
                            "Commencer les démarches préliminaires appropriées.",
                            "Fournir des directives claires sur les étapes suivantes."
                        ],
                        es: [
                            "Contactar con la oficina del forense en su nombre.",
                            "Iniciar planes provisionales según corresponda.",
                            "Proporcionar orientación clara sobre los siguientes pasos."
                        ]
                    }
                },
                {
                    heading: {
                        ar: "الدعم والمساعدة المستمرة",
                        en: "Ongoing help and support",
                        ru: "Постоянная помощь и поддержка",
                        fr: "Aide et soutien continus",
                        es: "Ayuda y apoyo continuo"
                    },
                    paragraphs: {
                        ar: [
                            "التزامنا معكم لا ينتهي بمجرد نقل الجثمان، بل سنواصل تقديم الدعم والإرشاد والمتابعة المباشرة مع مكاتب التسجيل والأطباء وتسهيل كافة الترتيبات الجنائزية."
                        ],
                        en: [
                            "Our dedication doesn't end at collection. We'll continue to liaise with Registry Offices and doctors, assist with funeral planning, and offer complete guidance and flexibility throughout."
                        ],
                        ru: [
                            "Наша забота не заканчивается на транспортировке. Мы продолжим взаимодействие с органами регистрации и врачами, помогая в организации."
                        ],
                        fr: [
                            "Notre engagement ne s'arrête pas à la prise en charge. Nous continuerons d'assurer la liaison administrative et le soutien complet."
                        ],
                        es: [
                            "Nuestra dedicación no termina en la recogida. Continuaremos en enlace con el Registro y los médicos para ofrecer orientación completa."
                        ]
                    }
                }
            ]
        }
    },
    {
        id: "sudden-death",
        iconName: "AlertCircle",
        title: {
            ar: "الموت المفاجئ أو غير المتوقع",
            en: "Sudden or Unexpected Death",
            ru: "Внезапная или неожиданная смерть",
            fr: "Décès soudain ou inattendu",
            es: "Muerte súbita o inesperada"
        },
        desc: {
            ar: "الإجراءات القانونية المتبعة والتنسيق مع مشرحة الطب الشرعي والشرطة لتحديد سبب الوفاة.",
            en: "Legal procedures, coroner/forensic involvement, and necessary steps to confirm cause of death.",
            ru: "Юридические процедуры, взаимодействие с судмедэкспертизой и полицией.",
            fr: "Procédures légales, intervention du médecin légiste et démarches nécessaires.",
            es: "Procedimientos legales, intervención forense y pasos necesarios."
        },
        detailContent: {
            introSubtitle: {
                ar: "ما يجب فعله عند حدوث وفاة مفاجئة أو غير متوقعة",
                en: "What to do if the death is sudden or unexpected",
                ru: "Что делать в случае внезапной или неожиданной смерти",
                fr: "Que faire en cas de décès soudain ou inattendu",
                es: "Qué hacer si el fallecimiento es súbito o inesperado"
            },
            introText: {
                ar: "قد تؤدي الخسارة المفاجئة إلى الشعور بالصدمة والضياع. نحن هنا لتقديم المساعدة والتوجيه عندما تصل الصدمة دون سابق إنذار. من الطوارئ إلى المتطلبات القانونية، سنقف إلى جانبكم خطوة بخطوة بكل وضوح وتعاطف.",
                en: "A sudden loss can leave you feeling lost and in shock and we're here to help when grief arrives unexpectedly. From emergency services to legal requirements, we'll stand with you, offering clarity and support through each step.",
                ru: "Внезапная утрата может вызвать шок и растерянность, и мы здесь, чтобы помочь. От экстренных служб до юридических требований — мы будем рядом на каждом этапе.",
                fr: "Une perte soudaine peut vous laisser sous le choc. Des services d'urgence aux exigences légales, nous serons à vos côtés لتوجيهكم بوضوح وعاطفة.",
                es: "Una pérdida repentina puede dejarle en shock. Desde los servicios de emergencia hasta los requisitos legales, estaremos a su lado con claridad y apoyo."
            },
            sections: [
                {
                    heading: {
                        ar: "الخطوات الفورية الأولى",
                        en: "Immediate steps",
                        ru: "Первоочередные шаги",
                        fr: "Étapes immédiates",
                        es: "Pasos inmediatos"
                    },
                    paragraphs: {
                        ar: [
                            "قد تبدو هذه اللحظات مربكة للغاية، ولكن هذه الخطوات الفورية أساسية وضرورية للغاية لتسيير الإجراءات الرسمية والصحية."
                        ],
                        en: [
                            "While this may feel overwhelming, these steps are essential."
                        ],
                        ru: [
                            "Хотя это может казаться ошеломляющим, эти шаги необходимы."
                        ],
                        fr: [
                            "Bien que cela puisse paraître éprouvant, ces étapes sont essentielles."
                        ],
                        es: [
                            "Aunque esto pueda resultar abrumador, estos pasos son esenciales."
                        ]
                    },
                    bullets: {
                        ar: [
                            "إذا كانت الوفاة في المنزل، اتصل بالطوارئ والإسعاف فوراً (إذا لم تكن قد قمت بذلك بالفعل).",
                            "إذا حدثت الوفاة في المستشفى، سيتولى الفريق الطبي المعالج الإجراءات المبدئية الأولية.",
                            "يقوم الطبيب الشرعي بترتيب نقل الجثمان إلى مشرحة الطب الشرعي المعتمدة.",
                            "قد يقرر الطبيب الشرعي إجراء فحص أو تشريح طبي للوقوف على أسباب الوفاة الدقيقة."
                        ],
                        en: [
                            "If you're at home, call emergency services if this hasn't already been done.",
                            "If the person dies in a hospital or hospice, the medical team will handle the next steps.",
                            "The Coroner will arrange for the person to be taken to the Coroner's mortuary.",
                            "The Coroner may decide to arrange a post-mortem examination."
                        ],
                        ru: [
                            "Если вы дома, вызовите экстренные службы, если это еще не сделано.",
                            "Если смерть наступила в больнице, медицинская команда возьмет на себя первые шаги.",
                            "Коронер/медэксперт организует доставку усопшего в морг судебной медицины.",
                            "Медэксперт может назначить вскрытие для установления точной причины смерти."
                        ],
                        fr: [
                            "Si vous êtes à la maison, appelez les services d'urgence.",
                            "Si le décès survient à l'hôpital, l'équipe médicale s'occupera des premières démarches.",
                            "Le médecin légiste organisera le transfert du défunt vers la morgue.",
                            "Le médecin légiste peut décider d'effectuer une autopsie."
                        ],
                        es: [
                            "Si está en casa, llame a los servicios de emergencia si no lo ha hecho.",
                            "Si la persona fallece en un hospital, el equipo médico gestionará los siguientes pasos.",
                            "El forense organizará el traslado del fallecido al depósito forense.",
                            "El forense puede decidir realizar una autopsia para determinar la causa."
                        ]
                    }
                },
                {
                    heading: {
                        ar: "التواصل معنا والتنسيق",
                        en: "Getting in touch with us",
                        ru: "Связь с нами",
                        fr: "Nous contacter",
                        es: "Ponerse en contacto con nosotros"
                    },
                    paragraphs: {
                        ar: [
                            "بمجرد شعوركم بالاستعداد، يمكنك الاتصال بنا في أي وقت نهاراً أو ليلاً. لا داعي للعجلة، وسنبدأ في ترتيبات الجنازة بمجرد انتهاء الطبيب الشرعي من تحقيقاته الرسمية. سنتولى التواصل المباشر مع مكتب الطب الشرعي والجهات المختصة نيابة عنكم."
                        ],
                        en: [
                            "As soon as you feel ready, call us - there's no hurry to do this, but we're available day or night. We'll begin making arrangements as soon as the Coroner has finished their enquiries. We'll liaise with the Coroner's Office so that you don't have to."
                        ],
                        ru: [
                            "Как только вы будете готовы, позвоните нам — мы доступны круглосуточно. Мы начнем подготовку, как только медэксперт завершит проверку, и сами свяжемся с его канцелярией."
                        ],
                        fr: [
                            "Dès que vous vous sentez prêt, appelez-nous - nous sommes disponibles jour et nuit. Nous commencerons les démarches dès que le médecin légiste aura terminé ses vérifications."
                        ],
                        es: [
                            "Tan pronto como se sienta preparado, llámenos; estamos disponibles día y noche. Comenzaremos los preparativos tan pronto como el forense concluya sus investigaciones."
                        ]
                    }
                },
                {
                    heading: {
                        ar: "فهم واستكمال إجراءات الطب الشرعي",
                        en: "Navigating the Coroner's process",
                        ru: "Прохождение процедур медэكسпертизы",
                        fr: "Comprendre la procédure du médecin légiste",
                        es: "Entender el proceso del forense"
                    },
                    paragraphs: {
                        ar: [
                            "قد يتضمن دور الطبيب الشرعي ومكتب التحقيق والطب الشرعي ما يلي:"
                        ],
                        en: [
                            "The Coroner may:"
                        ],
                        ru: [
                            "Коронер / медицинский эксперт может:"
                        ],
                        fr: [
                            "Le médecin légiste peut :"
                        ],
                        es: [
                            "El forense puede:"
                        ]
                    },
                    bullets: {
                        ar: [
                            "التحقيق والتحري في ملابسات وظروف الوفاة.",
                            "طلب إجراء التشريح الطبي (Autopsy) لتحديد السبب القانوني للوفاة.",
                            "إصدار تصريح الدفن أو الحرق الرسمي الذي يسمح بإقامة المراسم والجنازة."
                        ],
                        en: [
                            "Investigate the circumstances of the death.",
                            "Order a post-mortem (autopsy) to work out the cause of death.",
                            "Issue a Certificate for Burial or Cremation - which allows the funeral to take place."
                        ],
                        ru: [
                            "Расследовать обстоятельства наступления смерти.",
                            "Назначить судебно-медицинское вскрытие для установления причины.",
                            "Выдать официальное разрешение на погребение или кремацию."
                        ],
                        fr: [
                            "Enquêter sur les circonstances du décès.",
                            "Ordonner une autopsie pour déterminer la cause du décès.",
                            "Délivrer un certificat d'inhumation ou de crémation autorisant les funérailles."
                        ],
                        es: [
                            "Investigar las circunstancias del fallecimiento.",
                            "Ordenar una autopsia para determinar la causa de la muerte.",
                            "Emitir un Certificado de Entierro o Cremación que permita la celebración del funeral."
                        ]
                    }
                },
                {
                    heading: {
                        ar: "تواصلوا معنا عندما تكونون مستعدين",
                        en: "Reach out when you're ready",
                        ru: "Обращайтесь, когда будете готовы",
                        fr: "Contactez-nous lorsque vous serez prêt",
                        es: "Contáctenos cuando esté listo"
                    },
                    paragraphs: {
                        ar: [
                            "تثير الوفاة غير المتوقعة العديد من الأسئلة والاستفسارات المعقدة. نحن هنا لتخفيف هذه الأعباء عنكم والإجابة على كل استفسار."
                        ],
                        en: [
                            "Unexpected death brings many questions. We're here to help."
                        ],
                        ru: [
                            "Неожиданная смерть вызывает много вопросов. Мы здесь, чтобы помочь."
                        ],
                        fr: [
                            "Un décès inattendu soulève de nombreuses questions. Nous sommes là pour vous aider."
                        ],
                        es: [
                            "Un fallecimiento inesperado genera muchas preguntas. Estamos aquí para ayudarle."
                        ]
                    },
                    bullets: {
                        ar: [
                            "الاستماع إليكم وإرشادكم خلال التفاصيل العملية بعناية ورعاية كاملة.",
                            "التنسيق المباشر مع جميع الجهات المختصة (الخدمات الصحية، الشرطة، الطب الشرعي، مكاتب التسجيل).",
                            "توفير جدول زمني واضح حتى تكون على علم دائم بكل ما سيحدث تالياً."
                        ],
                        en: [
                            "Listen to you and guide you through practical details with genuine care.",
                            "Coordinate with professionals - health services, police, Coroner's officers, and registrars.",
                            "Provide clear timelines, so that you always know what happens next."
                        ],
                        ru: [
                            "Выслушать вас и бережно провести по всем практическим деталям.",
                            "Координировать работу со службами здравоохранения, полицией и медэكسпертами.",
                            "Предоставить четкий график действий, чтобы вы всегда знали, что будет дальше."
                        ],
                        fr: [
                            "Vous écouter et vous guider à travers les détails pratiques avec bienveillance.",
                            "Coordonner avec les professionnels (santé, police, état civil).",
                            "Fournir des délais clairs pour que vous sachiez toujours ce qui suit."
                        ],
                        es: [
                            "Escucharle y guiarle a través de los detalles prácticos con verdadera empatía.",
                            "Coordinar con profesionales (servicios de salud, policía, registro).",
                            "Proporcionar plazos claros para que siempre sepa qué sucede a continuación."
                        ]
                    }
                }
            ]
        }
    },
    {
        id: "death-abroad",
        iconName: "Globe",
        title: {
            ar: "الموت في الخارج والعودة إلى الوطن",
            en: "Dying Abroad and Repatriation",
            ru: "Смерть за границей и репатриация",
            fr: "Décès à l'étranger et rapatriement",
            es: "Fallecimiento en el extranjero y repatriación"
        },
        desc: {
            ar: "خدمات شحن الجثامين دولياً بالتنسيق مع السفارات والقنصليات وخطوط الطيران المعتمدة.",
            en: "Full international deceased repatriation services coordinated with embassies and airlines.",
            ru: "Услуги международной репатриации усопших во взаимодействии с посольствами.",
            fr: "Services complets de rapatriement international en coordination avec les ambassades.",
            es: "Servicios integrales de repatriación internacional coordinados con embajadas."
        },
        detailContent: {
            introSubtitle: {
                ar: "ما يجب فعله عند حدوث وفاة في الخارج",
                en: "What to do if someone dies abroad",
                ru: "Что делать в случае смерти за границей",
                fr: "Que faire en cas de décès à l'étranger",
                es: "Qué hacer si alguien fallece en el extranjero"
            },
            introText: {
                ar: "عندما يتوفى شخص ما في الخارج، قد تكون اللحظات مربكة بسبب الإجراءات الرسمية والمسافات الفاصلة. نحن هنا لتخفيف هذا العبء؛ سنعمل بالتنسيق المباشر معكم ومع السفارات والقنصليات ووكلاء الشحن الدولي لنقل فقيدكم إلى الوطن بكل احترام وكرامة.",
                en: "When someone dies abroad, it can be a bewildering time - from legal formalities to the physical distance. We're here to ease that burden, working closely with you, embassies, and overseas directors to bring your loved one home with dignity.",
                ru: "Смерть за границей — смутное время из-за юридических формальностей и расстояния. Мы здесь, чтобы облегчить это бремя, работая с вами, посольствами и партнерами, чтобы вернуть вашего близкого домой.",
                fr: "Lorsqu'un proche décède à l'étranger, les formalités et la distance peuvent être éprouvantes. Nous sommes là pour vous alléger cette charge en coordonnant le rapatriement avec respect et dignité.",
                es: "Cuando alguien muere en el extranjero, la distancia y los trámites pueden ser abrumadores. Estamos aquí para aliviar esa carga y coordinar el traslado de su ser querido a casa con dignidad."
            },
            sections: [
                {
                    heading: {
                        ar: "إذا كنت متواجداً مع المتوفى في الخارج",
                        en: "If you're with them abroad",
                        ru: "Если вы находитесь с ним за границей",
                        fr: "Si vous êtes avec lui à l'étranger",
                        es: "Si se encuentra con él en el extranjero"
                    },
                    paragraphs: {
                        ar: [
                            "هناك خطوات أولية فورية يجب إشهارها للجهات المختصة في بلد الوفاة:"
                        ],
                        en: [
                            "There are immediate steps to take with local authorities in the country of death:"
                        ],
                        ru: [
                            "Первоочередные шаги, которые необходимо предпринять с местными властями:"
                        ],
                        fr: [
                            "Étapes immédiates à suivre auprès des autorités locales :"
                        ],
                        es: [
                            "Pasos inmediatos a seguir con las autoridades locales:"
                        ]
                    },
                    bullets: {
                        ar: [
                            "التواصل مع السلطات المحلية أو إدارة المستشفى لإثبات الوفاة واستخراج الأوراق المبدئية.",
                            "إبلاغ سفارة أو قنصلية بلدك لمساعدتكم في إنهاء وثائق السفر والتنسيق مع السلطات المحلية.",
                            "التحقق من وثيقة التأمين على السفر (إن وجدت)، حيث قد تغطي تكاليف الشحن الدولي.",
                            "الاتصال بنا فوراً لنبدأ في ترتيبات واستلام الجثمان من مطار الوصول."
                        ],
                        en: [
                            "Contact local authorities or hospital staff to confirm death and issue preliminary paperwork.",
                            "Inform your Embassy or Consulate - they can help with documentation and official liaison.",
                            "Check the travel insurance policy - it may cover repatriation costs and support.",
                            "Contact us to begin coordinating the international transportation and flight booking."
                        ],
                        ru: [
                            "Свяжитесь с местными властями или персоналом больницы для оформления документов.",
                            "Сообщите в посольство или консульство своей страны для поддержки с документами.",
                            "Проверьте страховой полис — он может покрыть расходы на репатриацию.",
                            "Свяжитесь с нами, чтобы начать координацию международной перевозки."
                        ],
                        fr: [
                            "Contactez les autorités locales ou l'hôpital pour confirmer le décès et obtenir les actes.",
                            "Informez l'ambassade ou le consulat de votre pays pour obtenir de l'aide administrative.",
                            "Vérifiez l'assurance voyage qui peut couvrir les frais de rapatriement.",
                            "Contactez-nous pour commencer à organiser le rapatriement et le vol."
                        ],
                        es: [
                            "Contacte a las autoridades locales o al hospital para confirmar el fallecimiento.",
                            "Informe a la Embajada o Consulado para recibir asistencia con la documentación.",
                            "Revise la póliza de seguro de viaje, ya que puede cubrir los costos de repatriación.",
                            "Póngase en contacto con nosotros para iniciar la coordinación del vuelo y recepción."
                        ]
                    }
                },
                {
                    heading: {
                        ar: "فهم عملية إعادة الجثمان إلى الوطن (الشحن الدولي)",
                        en: "Understanding repatriation: bringing your loved one home",
                        ru: "Понимание репатриации: возвращение близкого домой",
                        fr: "Comprendre le rapatriement : ramener votre proche chez vous",
                        es: "Entender la repatriación: traer a su ser querido a casa"
                    },
                    paragraphs: {
                        ar: [
                            "إعادة الجثمان هي عملية نقل المتوفى دولياً من دولة الوفاة إلى وطنه الأم. تعتمد رحلة الشحن والتكاليف على عدة عوامل مثل دولة الوفاة، متطلبات خطوط الطيران، إجراءات التحنيط، والوثائق الرسمية المطلوبة.",
                            "سنتولى جميع الترتيبات بداية من استلام المتوفى فور وصوله إلى المطار المحلي، وتوفير كافة التصاريح الصحية والجمركية المعتمدة."
                        ],
                        en: [
                            "Repatriation is the process of bringing your loved one home across international borders. The journey and cost depend on factors like country of death, airline rules, required paperwork, and embalming.",
                            "We will deal with everything from collecting your loved one from the airport onwards, providing a clear itemised quotation from the start."
                        ],
                        ru: [
                            "Репатриация — это процесс перевозки усопшего через государственные границы. Маршрут и стоимость зависят от страны, правил авиакомпаний, бальзамирования и документов.",
                            "Мы берем на себя все заботы, начиная со встречи усопшего в аэропорту прибытия, предоставив четкую смету."
                        ],
                        fr: [
                            "Le rapatriement consiste à ramener le défunt dans son pays d'origine. Le trajet et les coûts dépendent du pays, des règles aériennes, de l'embaumement et des documents.",
                            "Nous nous occupons de tout dès la réception à l'aéroport, en fournissant un devis clair et détaillé."
                        ],
                        es: [
                            "La repatriación es el proceso de trasladar al fallecido a su país de origen. El viaje y el costo dependen del país de fallecimiento, normas aéreas y documentación.",
                            "Nos encargaremos de todo desde la recogida en el aeropuerto, ofreciendo un presupuesto claro."
                        ]
                    }
                },
                {
                    heading: {
                        ar: "ما يمكنك القيام به وما سنقوم به نحن",
                        en: "What you can do & What we'll do",
                        ru: "Что можете сделать вы и что сделаем мы",
                        fr: "Ce que vous pouvez faire et ce que nous ferons",
                        es: "Lo que usted puede hacer y lo que nosotros haremos"
                    },
                    paragraphs: {
                        ar: [
                            "لضمان أسرع استجابة وإتمام الإجراءات دون تعقيد، تتوزع أدوار الدعم بيننا كالتالي:"
                        ],
                        en: [
                            "To ensure smooth and quick arrangements, here is how we coordinate together:"
                        ],
                        ru: [
                            "Чтобы обеспечить быструю и слаженную работу, вот как мы взаимодействуем:"
                        ],
                        fr: [
                            "Pour garantir une organisation rapide et fluide, voici comment nous collaborons :"
                        ],
                        es: [
                            "Para garantizar una gestión rápida y fluida, así nos coordinamos:"
                        ]
                    },
                    bullets: {
                        ar: [
                            "ما تفعله أنت: ابلاغنا فوراً وتزويدنا ببيانات المتوفى وصورة جواز السفر وشهادة الوفاة المترجمة (إن وجدت).",
                            "ما نفعله نحن: التواصل مع السفارات والخارجية، حجز الطيران وتوفير التابوت المعتمد للشحن الجوي (Zinc-Lined Casket).",
                            "ما نفعله نحن: استخراج تصاريح الدفن الرسمية، ومتابعة تخليص الجثمان من المطار وحتى مكان الدفن أو الجنازة."
                        ],
                        en: [
                            "What you can do: Inform us immediately, send copies of passport, death certificate, and local permits.",
                            "What we'll do: Liaise with embassies, book flight cargo, and supply zinc-lined flight-certified caskets.",
                            "What we'll do: Handle airport clearance, local legal permissions, and transfer to final burial place."
                        ],
                        ru: [
                            "Что делаете вы: Связываетесь с нами, предоставляете копии паспорта и свидетельства о смерти.",
                            "Что делаем мы: Взаимодействуем с посольством, бронируем авиаперевозку и цинковый гроб.",
                            "Что делаем мы: Встречаем в аэропорту, оформляем таможенную очистку и доставляем к месту захоронения."
                        ],
                        fr: [
                            "Ce que vous faites : Nous informer, fournir le passeport, l'acte de décès et permis locaux.",
                            "Ce que nous faisons : Liaison avec les ambassades, réservation du vol cargo et cercueil en zinc.",
                            "Ce que nous faisons : Dédouanement à l'aéroport, autorisations et transfert vers le lieu de sépulture."
                        ],
                        es: [
                            "Lo que hace usted: Informarnos, enviar copia del pasaporte, certificado de defunción y permisos.",
                            "Lo que hacemos nosotros: Enlace con embajadas, reserva del vuelo y suministro del ataúd de zinc.",
                            "Lo que hacemos nosotros: Despacho aduanero en aeropuerto, permisos y traslado al lugar final."
                        ]
                    }
                },
                {
                    heading: {
                        ar: "عندما ترغب في شحن متوفى من داخل الدولة إلى الخارج",
                        en: "Sending someone abroad from inside the country",
                        ru: "Отправка усопшего из страны за рубеж",
                        fr: "Rapatriement d'un défunt vers l'étranger",
                        es: "Enviar a un fallecido al extranjero"
                    },
                    paragraphs: {
                        ar: [
                            "إذا حدثت الوفاة داخل الدولة ورغبت العائلة في نقل الجثمان ليدفن في موطنه الأصلي خارج البلاد، سنقود العملية بالكامل بدءاً من تجهيز الجثمان والتبطين بالزنك، واستخراج تصاريح الطيران والسفارة، وحتى إنهاء كافة إجراءات المطار والشحن الجوي."
                        ],
                        en: [
                            "If someone dies locally and you wish to repatriate them to another country for burial, we can arrange everything up to their flight departure, liaising with embassies and preparing the required zinc-lined caskets."
                        ],
                        ru: [
                            "Если смерть наступила здесь, и вы хотите перевезти усопшего в другую страну, мы полностью организуем процесс: от цинкового вкладыша и документов до погрузки на самолет."
                        ],
                        fr: [
                            "Si le décès survient ici et que vous souhaitez transporter le défunt vers un autre pays, nous organisons tout jusqu'à l'embarquement (cercueil en zinc, ambassade, douane)."
                        ],
                        es: [
                            "Si el fallecimiento ocurre aquí y desea trasladarlo a otro país, organizamos todo el proceso hasta el embarque del vuelo, incluyendo certificado y ataúd de zinc."
                        ]
                    }
                }
            ]
        }
    },
    {
        id: "register-office",
        iconName: "FileText",
        title: {
            ar: "مكاتب التسجيل والتوثيق الرسمية",
            en: "Register Offices & Legal Documentation",
            ru: "Регистрационные офисы и документы",
            fr: "Bureaux d'enregistrement et actes",
            es: "Oficinas de registro y documentación"
        },
        desc: {
            ar: "دليل استخراج أوراق الوفاة الرسمية، التصاريح الصحية، واستخراج تصاريح الدفن والدفن السريع.",
            en: "Guide to registering a death, obtaining official burial permits, and legal documentation.",
            ru: "Руководство по регистрации смерти, получению разрешения на погребение.",
            fr: "Guide pour enregistrer un décès, obtenir les permis d'inhumation et actes officiels.",
            es: "Guía para registrar un fallecimiento, obtener permisos de entierro y documentos."
        },
        detailContent: {
            introSubtitle: {
                ar: "مكاتب الصحة وتوثيق الوفاة الرسمية",
                en: "Registry Offices & Health Departments",
                ru: "Органы регистрации и бюро здравоохранения",
                fr: "Bureaux d'état civil et bureaux de santé",
                es: "Oficinas de registro y departamentos de salud"
            },
            introText: {
                ar: "قد يبدو تسجيل الوفاة أمراً شاقاً ومربكاً في الأوقات الصعبة. نحن هنا لمساعدتك وتوجيهك خلال كل مرحلة، لمساعدتك في معرفة الأوراق المطلوبة والوجهة المحددة لتسجيل الوفاة بسهولة ويسر.",
                en: "Registering a death can feel daunting. We're here to walk you through each stage - helping you to understand what's needed, when, and where, so that it's one less thing you have to manage alone.",
                ru: "Регистрация смерти может показаться сложной. Мы готовы помочь вам на каждом этапе, объяснив, что, когда и где требуется сделать.",
                fr: "L'enregistrement d'un décès peut paraître intimidant. Nous sommes là pour vous guider à chaque étape pour vous simplifier la tâche.",
                es: "Registrar un fallecimiento puede resultar abrumador. Estamos aquí para guiarle en cada etapa y facilitarle los trámites."
            },
            sections: [
                {
                    type: "text",
                    heading: {
                        ar: "العثور على مكتب الصحة المكتبي المناسب",
                        en: "Finding the right office",
                        ru: "Поиск нужного офиса",
                        fr: "Trouver le bon bureau",
                        es: "Encontrar la oficina adecuada"
                    },
                    paragraphs: {
                        ar: [
                            "يجب تسجيل الوفاة في مكتب الصحة أو مكتب التسجيل التابع للمنطقة التي حدثت فيها الوفاة فعلياً، وليس بناءً على محل إقامة المتوفى فقط."
                        ],
                        en: [
                            "You must register the death at the Registry Office / Health Office responsible for the area where the person died, NOT necessarily where they lived."
                        ],
                        ru: [
                            "Вы должны зарегистрировать смерть в отделе записи / бюро здравоохранения, ответственном за район, где наступила смерть."
                        ],
                        fr: [
                            "Vous devez enregistrer le décès au bureau de santé responsable de la zone où la personne est décédée."
                        ],
                        es: [
                            "Debe registrar el fallecimiento en la Oficina del Registro / Oficina de Salud responsable de la zona donde falleció la persona."
                        ]
                    }
                },
                {
                    type: "text",
                    heading: {
                        ar: "حجز موعد التسجيل وأخذ المستندات",
                        en: "Booking your appointment and what to bring",
                        ru: "Запись на прием и необходимые документы",
                        fr: "Rendez-vous et documents à apporter",
                        es: "Reserva de cita y documentos requeridos"
                    },
                    paragraphs: {
                        ar: [
                            "يقوم الطبيب بإصدار شهادة الوفاة الطبية وتحويلها لمكتب الصحة. لإتمام التسجيل بنجاح، يُفضل إحضار المستندات التالية:"
                        ],
                        en: [
                            "The doctor will issue the Medical Certificate of Cause of Death. To register successfully, you should bring:"
                        ],
                        ru: [
                            "Врач выдаст медицинское свидетельство о смерти. Для успешной регистрации вам понадобятся:"
                        ],
                        fr: [
                            "Le médecin délivrera le certificat médical. Pour enregistrer le décès, vous devez apporter :"
                        ],
                        es: [
                            "El médico emitirá el Certificado Médico de Defunción. Para registrarlo con éxito, debe llevar:"
                        ]
                    },
                    bullets: {
                        ar: [
                            "بطاقة الرقم القومي أو جواز سفر المتوفى (إن وجد).",
                            "شهادة الوفاة الطبية الصادرة من الطبيب المعالج أو المستشفى.",
                            "بطاقة الرقم القومي للشباب أو القريب القائم بإجراءات التسجيل.",
                            "وثيقة الزواج أو إثبات صلة القرابة إن تيسر."
                        ],
                        en: [
                            "The deceased's passport, national ID, or birth certificate.",
                            "The Medical Certificate of Cause of Death issued by the doctor.",
                            "National ID card of the relative or person registering.",
                            "Marriage certificate or proof of relationship if available."
                        ],
                        ru: [
                            "Паспорт или удостоверение личности усопшего.",
                            "Медицинское свидетельство о смерти, выданное врачом.",
                            "Удостоверение личности родственника, регистрирующего смерть.",
                            "Свидетельство о браке или подтверждение родства."
                        ],
                        fr: [
                            "Passeport ou pièce d'identité du défunt.",
                            "Certificat médical de cause de décès délivré par le médecin.",
                            "Pièce d'identité de la personne qui enregistre le décès.",
                            "Livret de famille ou certificat de mariage si disponible."
                        ],
                        es: [
                            "Pasaporte o documento de identidad del fallecido.",
                            "Certificado Médico de Causa de Defunción emitido por el médico.",
                            "Documento de identidad del familiar que realiza el registro.",
                            "Certificado de matrimonio o acreditación de parentesco."
                        ]
                    }
                },
                // {
                //     type: "offices_grid",
                //     heading: {
                //         ar: "أبرز مكاتب الصحة والتسجيل الرسمية",
                //         en: "Official Registry & Health Offices",
                //         ru: "Официальные офисы регистрации",
                //         fr: "Bureaux de santé et d'état civil",
                //         es: "Oficinas oficiales de registro"
                //     },
                //     paragraphs: {
                //         ar: [
                //             "نرغب في جعل هذه العملية سلسة قدر الإمكان بالنسبة لكم. فيما يلي أسماء وتفاصيل بعض مكاتب الصحة والتسجيل:"
                //         ],
                //         en: [
                //             "We want to help make this process as smooth as possible for you. Below are details of key Registry / Health Offices:"
                //         ],
                //         ru: [
                //             "Мы хотим сделать этот процесс максимально простым для вас. Ниже приведены адреса и контакты основных офисов:"
                //         ],
                //         fr: [
                //             "Nous souhaitons vous faciliter la tâche. Vous trouverez ci-dessous les coordonnées des principaux bureaux :"
                //         ],
                //         es: [
                //             "Queremos que este proceso sea lo más sencillo posible. A continuación se muestran los datos de las principales oficinas:"
                //         ]
                //     },
                //     offices: [
                //         {
                //             id: "office-1",
                //             name: {
                //                 ar: "مكتب صحة مصر الجديدة",
                //                 en: "Heliopolis Health Office",
                //                 ru: "Бюро здравоохранения Гелиополис",
                //                 fr: "Bureau de Santé d'Héliopolis",
                //                 es: "Oficina de Salud de Heliópolis"
                //             },
                //             address: {
                //                 ar: "شارع الحجاز، مصر الجديدة، القاهرة",
                //                 en: "El-Hegaz Street, Heliopolis, Cairo",
                //                 ru: "Улица Эль-Хегаз, Гелиополис, Каир",
                //                 fr: "Rue El-Hegaz, Héliopolis, Le Caire",
                //                 es: "Calle El-Hegaz, Heliópolis, El Cairo"
                //             },
                //             phone: "0226345890",
                //             mapUrl: "https://maps.google.com/?q=Heliopolis+Health+Office",
                //             websiteUrl: "https://mhp.gov.eg"
                //         },
                //         {
                //             id: "office-2",
                //             name: {
                //                 ar: "مكتب صحة السيدة زينب",
                //                 en: "Sayeda Zeinab Health Office",
                //                 ru: "Бюро здравоохранения Саида Зейнаб",
                //                 fr: "Bureau de Santé Sayeda Zeinab",
                //                 es: "Oficina de Salud Sayeda Zeinab"
                //             },
                //             address: {
                //                 ar: "بجوار مشرحة زينهم، السيدة زينب، القاهرة",
                //                 en: "Next to Zeinhom Morgue, Sayeda Zeinab, Cairo",
                //                 ru: "Рядом с моргом Зейнхом, Саида Зейнаб, Каир",
                //                 fr: "Près de la morgue Zeinhom, Sayeda Zeinab, Le Caire",
                //                 es: "Junto a la morgue Zeinhom, Sayeda Zeinab, El Cairo"
                //             },
                //             phone: "0223654120",
                //             mapUrl: "https://maps.google.com/?q=Sayeda+Zeinab+Health+Office",
                //             websiteUrl: "https://mhp.gov.eg"
                //         },
                //         {
                //             id: "office-3",
                //             name: {
                //                 ar: "مكتب صحة مدينة نصر أول",
                //                 en: "Nasr City 1st Health Office",
                //                 ru: "Бюро здравоохранения Наср Сити 1",
                //                 fr: "1er Bureau de Santé de Nasr City",
                //                 es: "1ª Oficina de Salud de Nasr City"
                //             },
                //             address: {
                //                 ar: "الحي السابع، مدينة نصر، القاهرة",
                //                 en: "7th District, Nasr City, Cairo",
                //                 ru: "7-й район, Наср Сити, Каир",
                //                 fr: "7ème district, Nasr City, Le Caire",
                //                 es: "Distrito 7, Nasr City, El Cairo"
                //             },
                //             phone: "0224012589",
                //             mapUrl: "https://maps.google.com/?q=Nasr+City+Health+Office",
                //             websiteUrl: "https://mhp.gov.eg"
                //         },
                //         {
                //             id: "office-4",
                //             name: {
                //                 ar: "مكتب صحة الدقي والفيوم",
                //                 en: "Dokki Health Office",
                //                 ru: "Бюро здравоохранения Докки",
                //                 fr: "Bureau de Santé de Dokki",
                //                 es: "Oficina de Salud de Dokki"
                //             },
                //             address: {
                //                 ar: "شارع التحرير، الدقي، الجيزة",
                //                 en: "Tahrir Street, Dokki, Giza",
                //                 ru: "Улица Тахрир, Докки, Гиза",
                //                 fr: "Rue Tahrir, Dokki, Gizeh",
                //                 es: "Calle Tahrir, Dokki, Guiza"
                //             },
                //             phone: "0233365892",
                //             mapUrl: "https://maps.google.com/?q=Dokki+Health+Office",
                //             websiteUrl: "https://mhp.gov.eg"
                //         },
                //         {
                //             id: "office-5",
                //             name: {
                //                 ar: "مكتب صحة العجوزة",
                //                 en: "Agouza Health Office",
                //                 ru: "Бюро здравоохранения Агуза",
                //                 fr: "Bureau de Santé d'Agouza",
                //                 es: "Oficina de Salud de Agouza"
                //             },
                //             address: {
                //                 ar: "شارع النيل، العجوزة، الجيزة",
                //                 en: "Nile Street, Agouza, Giza",
                //                 ru: "Улица Нила, Агуза, Гиза",
                //                 fr: "Rue du Nil, Agouza, Gizeh",
                //                 es: "Calle del Nilo, Agouza, Guiza"
                //             },
                //             phone: "0233025411",
                //             mapUrl: "https://maps.google.com/?q=Agouza+Health+Office",
                //             websiteUrl: "https://mhp.gov.eg"
                //         },
                //         {
                //             id: "office-6",
                //             name: {
                //                 ar: "مكتب صحة المعادي",
                //                 en: "Maadi Health Office",
                //                 ru: "Бюро здравоохранения Маади",
                //                 fr: "Bureau de Santé de Maadi",
                //                 es: "Oficina de Salud de Maadi"
                //             },
                //             address: {
                //                 ar: "شارع 9، المعادي، القاهرة",
                //                 en: "Street 9, Maadi, Cairo",
                //                 ru: "Улица 9, Маади, Каир",
                //                 fr: "Rue 9, Maadi, Le Caire",
                //                 es: "Calle 9, Maadi, El Cairo"
                //             },
                //             phone: "0223589641",
                //             mapUrl: "https://maps.google.com/?q=Maadi+Health+Office",
                //             websiteUrl: "https://mhp.gov.eg"
                //         }
                //     ]
                // }
            ]
        }
    },
    {
        id: "child-loss",
        iconName: "Heart",
        title: {
            ar: "عندما يموت طفل أو رضيع",
            en: "Loss of a Child or Infant",
            ru: "Утрата ребенка или младенца",
            fr: "Perte d'un enfant ou d'un nourrisson",
            es: "Pérdida de un niño o bebé"
        },
        desc: {
            ar: "دعم خاص وحساس جداً لترتيبات الجنازة والدعم النفسي والإجرائي للوالدين والعائلة.",
            en: "Sensitive specialized support and gentle funeral arrangements for grieving families.",
            ru: "Особая деликатная поддержка и организация похорон для скорбящих семей.",
            fr: "Soutien spécialisé sensible et organisation délicate pour les familles en deuil.",
            es: "Apoyo especializado sensible y arreglos delicados para las familias."
        },
        detailContent: {
            introSubtitle: {
                ar: "تنظيم جنازة لطفل أو رضيع برفق واحترام تام",
                en: "Organising a funeral for a child or baby",
                ru: "Организация похорон ребенка или младенца",
                fr: "Organiser des funérailles pour un enfant ou un bébé",
                es: "Organización del funeral de un niño o bebé"
            },
            introText: {
                ar: "إن فقدان طفل أو رضيع يحمل معه أعمق درجات الحزن والألم. نحن نتفهم تماماً حجم الصدمة والحرقة التي تعتصر القلوب في هذه اللحظات. أولويتنا المطلقة هي تقديم الدعم لكم برفق، احترام، وتعاطف لا يتزعزع.",
                en: "Losing a child or baby often brings the deepest grief. We understand the overwhelming grief, confusion, and heartache that follows. Our priority is to support you - softly, respectfully, and with unwavering compassion.",
                ru: "Потеря ребенка или младенца приносит самую глубокую боль. Мы понимаем весь шок и горечь этой утраты. Наш приоритет — поддержать вас с мягкостью, уважением и искренним состраданием.",
                fr: "La perte d'un enfant ou d'un bébé apporte souvent le chagrin le plus profond. Nous comprenons cette douleur immense. Notre priorité est de vous soutenir avec douceur, respect et compassion.",
                es: "La pérdida de un niño o bebé suele traer el dolor más profundo. Entendemos la inmensa tristeza y el pesar. Nuestra prioridad es apoyarle con delicadeza, respeto y compasión."
            },
            sections: [
                {
                    type: "text",
                    heading: {
                        ar: "مراسمكم بالطريقة التي تناسب عائلتكم",
                        en: "Your ceremony - your way",
                        ru: "Ваша церемония — по вашему желанию",
                        fr: "Votre cérémonie - à votre façon",
                        es: "Su ceremonia, a su manera"
                    },
                    paragraphs: {
                        ar: [
                            "إذا اخترتم ترتيب الخدمة بنفسكم، فنحن هنا لإرشادكم ومساعدتكم في كافة التفاصيل بأسلوب يراعي حرمة المناسبة وخياراتكم الخاصة."
                        ],
                        en: [
                            "If you choose to arrange the service yourself, we're here to guide you and help you with the details:"
                        ],
                        ru: [
                            "Если вы решите организовать службу самостоятельно, мы готовы направить вас и помочь с деталями:"
                        ],
                        fr: [
                            "Si vous choisissez d'organiser la cérémonie vous-même, nous sommes là pour vous guider et vous aider dans les détails :"
                        ],
                        es: [
                            "Si elige organizar el servicio usted mismo, estamos aquí para guiarle y ayudarle con los detalles:"
                        ]
                    },
                    bullets: {
                        ar: [
                            "سنقوم بإعداد خطة مخصصة تكرم ذكرى طفلكم، سواء اخترتم الدفن أو المراسم الخاصة.",
                            "اختيار تابوت صغير مخصص للأطفال والرضع بعناية فائقة تتناسب مع رغباتكم.",
                            "الاستماع إلى أفكاركم والعمل على الاستجابة لجميع طلباتكم الخاصة بشفافية ورعاية.",
                            "تقديم الخدمات والمستلزمات بأقل التكاليف الممكنة مراعاة للظروف الإنسانية."
                        ],
                        en: [
                            "We'll create a bespoke plan that honours your child - whether you choose burial or a unique ceremony.",
                            "Coffins for babies and children are carefully selected to suit your wishes and preferences.",
                            "We will listen to your ideas and keep all arrangements transparent and gentle.",
                            "Keeping costs as low as possible for grieving families with total compassion."
                        ],
                        ru: [
                            "Мы создадим индивидуальный план, чтобы почтить память вашего ребенка.",
                            "Гробы для младенцев и детей подбираются с особой заботой в соответствии с вашими пожеланиями.",
                            "Мы выслушаем ваши пожелания и сделаем всё с максимальной деликатностью.",
                            "Минимизация расходов с полным пониманием тяжести ситуации."
                        ],
                        fr: [
                            "Nous créerons un plan sur mesure qui honore la mémoire de votre enfant.",
                            "Les cercueils pour bébés et enfants sont soigneusement sélectionnés selon vos souhaits.",
                            "Nous écouterons vos idées et organiserons tout avec une extrême bienveillance.",
                            "Maintenir des coûts aussi bas que possible par soutien compassionnel."
                        ],
                        es: [
                            "Crearemos un plan personalizado que honre la memoria de su hijo.",
                            "Los ataúdes para bebés y niños se seleccionan cuidadosamente según sus deseos.",
                            "Escucharemos sus ideas y organizaremos todo con la máxima delicadeza.",
                            "Mantener los costos lo más bajos posible con total compasión."
                        ]
                    }
                },
                {
                    type: "text",
                    heading: {
                        ar: "شهادة ووثيقة تذكارية للطفل",
                        en: "Baby loss recognition & documentation",
                        ru: "Памятный документ и поддержка",
                        fr: "Certificat commémoratif",
                        es: "Certificado conmemorativo"
                    },
                    paragraphs: {
                        ar: [
                            "في حالات فقدان الحمل أو الأطفال في مراحل مبكرة، يمكن التنسيق مع الجهات المعتمدة لإصدار شهادات رسمية أو تذكارية تكريماً لذكرى طفلكم، ونحن هنا لمساعدتكم في استخراج كافة الوثائق المطلوبة دون أي أعباء إضافية."
                        ],
                        en: [
                            "You can obtain official or commemorative certification in memory of your baby. We will handle all documentation requests and help ease the process without adding any burdens."
                        ],
                        ru: [
                            "Вы можете получить памятный документ в память о вашем малыше. Мы поможем с оформлением всех необходимых бумаг, чтобы уберечь вас от лишних хлопот."
                        ],
                        fr: [
                            "Vous pouvez obtenir un certificat commémoratif en mémoire de votre bébé. Nous vous aiderons dans toutes les démarches administratives."
                        ],
                        es: [
                            "Puede obtener un certificado conmemorativo en memoria de su bebé. Le ayudaremos con toda la documentación para facilitarle el proceso."
                        ]
                    }
                },
                {
                    type: "text",
                    heading: {
                        ar: "كيف ندعمكم في شركة رضوان",
                        en: "How Radwan will support you",
                        ru: "Как мы поддержим вас",
                        fr: "Comment nous vous soutenons",
                        es: "Cómo le apoyaremos"
                    },
                    paragraphs: {
                        ar: [
                            "نعلم أنكم لستم مضطرين لخوض هذا الطريق بمفردكم. يتلخص التزامنا تجاهكم في:"
                        ],
                        en: [
                            "You don't have to walk this path alone. Here is how our team stands by you:"
                        ],
                        ru: [
                            "Вы не должны проходить этот путь в одиночку. Вот как наша команда поддержат вас:"
                        ],
                        fr: [
                            "Vous n'avez pas à traverser cela seul. Voici comment notre équipe vous accompagne :"
                        ],
                        es: [
                            "No tiene que recorrer este camino solo. Así le acompañará nuestro equipo:"
                        ]
                    },
                    bullets: {
                        ar: [
                            "الاستماع إليكم بعناية فائقة وتعاطف كامل في كل لحظة.",
                            "تنفيذ كل قرار تتخذونه بأعلى درجات الحرص، ومساعدتكم في اختيار المكان والترتيبات المناسبة.",
                            "الشفافية الكاملة في كل خطوة، مع الالتزام التام بالجانب الإنساني.",
                            "احترام الوتيرة التي تختارونها - سواء كنتم ترغبون في إنهاء الترتيبات سريعاً أو تأجيلها حسب راحتكم النفسية.",
                            "نحن هنا على مدار الساعة (24/7) - للتحدث، الإجابة على الاستفسارات، أو تقديم الدعم النفسي والإجرائي."
                        ],
                        en: [
                            "We'll listen carefully and with deep, genuine compassion.",
                            "Every decision you make will be carried out with the utmost care and respect.",
                            "Compassionate transparency about all arrangements with zero hidden pressures.",
                            "Respecting your pace - whether you want everything planned quickly or prefer time.",
                            "We're here around the clock (24/7) whenever you need to talk or ask questions."
                        ],
                        ru: [
                            "Мы внимательно выслушаем вас с искренним состраданием.",
                            "Каждое ваше решение будет выполнено с максимальной заботой и уважением.",
                            "Полная прозрачность и отсутствие скрытых сборов или давления.",
                            "Уважение к вашему темпу — планируем быстро или даем вам время.",
                            "Мы на связи круглосуточно (24/7) для помощи و вопросов."
                        ],
                        fr: [
                            "Nous vous écouterons attentivement et avec une profonde compassion.",
                            "Chaque décision que vous prendrez sera exécutée avec le plus grand soin.",
                            "Transparence totale et bienveillante sur toutes les dispositions.",
                            "Respect de votre rythme - que vous souhaitiez tout planifier rapidement ou prendre votre temps.",
                            "Nous sommes disponibles 24h/24 et 7j/7 pour vous écouter et répondre à vos questions."
                        ],
                        es: [
                            "Le escucharemos con atención y profunda compasión.",
                            "Cada decisión que tome se llevará a cabo con el máximo cuidado y respeto.",
                            "Transparencia compasiva en todos los arreglos sin presiones.",
                            "Respeto a su ritmo: ya sea que prefiera planificar todo rápidamente o tomarse su tiempo.",
                            "Estamos disponibles las 24 horas, los 7 días de la semana, para lo que necesite."
                        ]
                    }
                }
            ]
        }
    }
];
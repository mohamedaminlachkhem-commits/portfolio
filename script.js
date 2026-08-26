/* ==========================================================================
   PORTFOLIO SCRIPTS - MOHAMED AMIN LACHKHEM
   Multilingual System (Arabic / English / French), Filtering, Lightbox, Mobile
   ========================================================================== */

// Translations Dictionary
const translations = {
  ar: {
    lang_name: "العربية",
    download_pdf: "تحميل البورتفوليو",
    select_language: "اختر اللغة:",
    nav_home: "الرئيسية",
    nav_about: "عن المصمم",
    nav_services: "الخدمات",
    nav_portfolio: "المشاريع",
    nav_process: "منهجية العمل",
    nav_skills: "البرامج والأدوات",
    nav_contact: "تواصل معي",

    hero_badge: "تصميم داخلي • إظهار معماري ثلاثي الأبعاد • هوية بصرية",
    hero_title: "نُحوّل الرؤى المعمارية إلى <span class='highlight-text'>تجارب بصرية واقعية</span>",
    hero_subtitle: "أنا <strong>محمد أمين لشخم</strong>، مصمم داخلي وفنان إظهار معماري ثلاثي الأبعاد مقيم بالدار البيضاء، المغرب. أجمع بين الدقة الهندسية والجماليات البصرية المعاصرة لتقديم تصاميم متميزة تحاكي الواقع وتلهم الحواس.",
    btn_explore: "استعرض المشاريع",
    btn_start_project: "ابدأ مشروعك الآن",
    stat_exp: "سنوات شغف وخبرة",
    stat_quality: "دقة وإظهار واقعي (4K)",
    stat_vision: "رؤية بصرية ومعمارية",

    about_tag: "نبذة عني",
    about_title: "شغف بالتفاصيل، تناغم في الإضاءة، وإتقان للخامات",
    about_p1: "بصفتي مصمماً داخلياً ومتخصصاً في الإظهار المعماري ثلاثي الأبعاد والتصميم الجرافيكي، أركز على ابتكار فضاءات تعبر عن هوية أصحابها وتلبي أعلى معايير الراحة والوظيفة المعمارية.",
    about_p2: "أعمل على توظيف أحدث تقنيات النمذجة ثلاثية الأبعاد والإكساء الواقعي ومحاكاة الإضاءة الطبيعية والاصطناعية، لتمكين العملاء والمطورين من استكشاف مساحاتهم ومعاينتها بدقة فائقة قبل بدء التنفيذ على أرض الواقع.",
    about_badge_title: "تصميم وإخراج",
    about_badge_sub: "مستوى احترافي عالي",
    feat_1_title: "تخطيط ذكي للمساحات",
    feat_1_desc: "استغلال مثالي لكل متر مربع مع مراعاة مسارات الحركة والراحة.",
    feat_2_title: "ريندر واقعي Photorealistic",
    feat_2_desc: "محاكاة دقيقة لأدق تفاصيل الأنسجة، المواد، والانعكاسات الضوئية.",
    feat_3_title: "تناغم المواد والألوان",
    feat_3_desc: "دمج اللمسات المعاصرة مع عناصر الأصالة المغربية والعالمية.",
    feat_4_title: "هوية بصرية متكاملة",
    feat_4_desc: "ربط روح المكان بالهوية الجرافيكية للمشاريع التجارية والسكنية.",
    btn_download_cv: "تحميل ملف السيرة والأعمال (PDF)",

    services_tag: "مجالات التخصص",
    services_title: "حلول تصميمية شاملة من الفكرة إلى الإظهار النهائي",
    services_subtitle: "نقدم حزمة متكاملة من الخدمات الإبداعية لتلبية متطلبات المشاريع السكنية والتجارية بدقة واحترافية.",
    srv_1_title: "التصميم الداخلي والديكور",
    srv_1_desc: "تطوير المفاهيم الديكورية المتكاملة للمنازل، الفلل، والمكاتب. يشمل ذلك اختيار الأثاث، توزيع الإضاءة، تصميم الجدران والأسقف، ولوحات المواد (Moodboards).",
    srv_1_b1: "دراسة المخططات وتوزيع الأثاث (2D Space Planning)",
    srv_1_b2: "لوحات الألوان وتناسق الخامات والمفروشات",
    srv_1_b3: "تفاصيل ديكورية مخصصة (Custom Joinery)",
    srv_2_title: "الإظهار المعماري ثلاثي الأبعاد",
    srv_2_desc: "تحويل المخططات الهندسية إلى مناظر ثلاثية الأبعاد فائقة الواقعية للواجهات الخارجية، المساحات الداخلية، والمشاريع المعمارية بجودة رندر متميزة.",
    srv_2_b1: "ريندر داخلي وخارجي فائق الدقة (Day & Night Shots)",
    srv_2_b2: "لقطات معمارية وتفاصيل مادية قريبة (Close-up Details)",
    srv_2_b3: "مناظر للمحيط الخارجي واللاندسكيب (Landscape Viz)",
    srv_3_title: "الهوية البصرية والتصميم الجرافيكي",
    srv_3_desc: "بناء هويات تجارية احترافية، تصميم المطبوعات، قوائم الطعام، واللافتات التي تضفي طابعاً فريداً على المشاريع وتتناغم مع بيئتها المكانية.",
    srv_3_b1: "تصميم الشعارات ودليل الهوية البصرية (Brand Guidelines)",
    srv_3_b2: "تصميم المطبوعات الترويجية والكتالوجات (Brochures & Menus)",
    srv_3_b3: "مواد التسويق البصري والمعارض المعمارية",

    portfolio_tag: "معرض الأعمال",
    portfolio_title: "مختارات من أحدث المشاريع والتصاميم",
    portfolio_subtitle: "تصفح معرض المشاريع المصنفة. يمكنك استخدام أزرار التصفية أدناه أو النقر على أي عمل لتكبيره ومشاهدته بدقة كاملة.",
    filter_all: "جميع الأعمال",
    filter_interior: "تصميم داخلي",
    filter_exterior: "إظهار خارجي 3D",
    filter_graphic: "هوية وجرافيك",
    cat_interior: "تصميم داخلي",
    cat_exterior: "إظهار خارجي 3D",
    cat_graphic: "هوية وجرافيك",

    proj_1_title: "صالون معيشة معاصر فاخر",
    proj_1_desc: "تناغم دافئ بين الخامات الخشبية، الإضاءة الخفية، وقطع الأثاث المريحة ذات الطابع المودرن.",
    proj_2_title: "فيلا سكنية حديثة مع مسبح",
    proj_2_desc: "محاكاة معمارية واقعية لواجهة الفيلا وتفاصيل المسبح واللاندسكيب المحيط بدقة بصرية عالية.",
    proj_3_title: "غرفة نوم رئيسية بتصميم هادئ",
    proj_3_desc: "اعتماد ألوان ترابية مهدئة وإضاءة دافئة مع خلفية سرير مكسوة ببانوهات جدارية حديثة.",
    proj_4_title: "هوية بصرية وتغليف علامة تجارية",
    proj_4_desc: "تطوير شعار ونظام ألوان ومطبوعات متكاملة تعبر عن الأصالة والاحترافية.",
    proj_5_title: "مكتب تنفيذي بتصميم مريح",
    proj_5_desc: "بيئة عمل متوازنة تجمع بين الفخامة الوظيفية وتوزيع الإضاءة المريح لساعات العمل الطويلة.",
    proj_6_title: "واجهة معمارية بخامات حجرية وخشبية",
    proj_6_desc: "تأكيد الكتل المعمارية بإنارة موجهة واستخدام مواد طبيعية مقاومة للعوامل البيئية.",
    proj_7_title: "صالة استقبال واستراحة فاخرة",
    proj_7_desc: "تصميم رحب يبرز جمالية الأثاث والإنارة المعلقة مع تناغم أرضيات الرخام والمرايا.",
    proj_8_title: "عمارة مغربية برؤية حداثية",
    proj_8_desc: "استلهام الأقواس والزخارف المغربية وإعادة صياغتها بأسلوب معماري نيو-كلاسيكي معاصر.",
    proj_9_title: "تصميم مطبوعات وقوائم ضيافة",
    proj_9_desc: "إخراج طباعي متميز يجمع بين الجمالية البصرية وسهولة القراءة لقطاع المطاعم والضيافة.",
    proj_10_title: "تصميم درج داخلي معماري",
    proj_10_desc: "عنصر معماري منحوت يربط الطوابق بجمالية انسيابية وإضاءة مدمجة على درجات السلم.",

    process_tag: "منهجية العمل",
    process_title: "خطوات مدروسة تضمن أعلى درجات الدقة والجودة",
    process_subtitle: "نتبع مسار عمل منظم من أول جلسة استكشافية حتى تسليم الصور النهائية بدقة 4K.",
    step_1_title: "الاستكشاف وجمع المتطلبات",
    step_1_desc: "جلسة نقاش لفهم أهداف العميل، متطلبات المساحة، الميزانية، والاتجاه الفني المفضل (Moodboard).",
    step_2_title: "المخططات ثنائية الأبعاد (2D)",
    step_2_desc: "إعداد المخططات المعمارية وتوزيع الأثاث والممرات بما يضمن الراحة والاستغلال الأمثل للفراغ.",
    step_3_title: "النمذجة ثلاثية الأبعاد (3D)",
    step_3_desc: "بناء النموذج الهندسي ثلاثي الأبعاد بكل تفاصيله الدقيقة للأثاث والتشطيبات المعمارية.",
    step_4_title: "الإضاءة والإكساء الواقعي",
    step_4_desc: "تطبيق خامات عالية الجودة وضبط زوايا الإضاءة الطبيعية والاصطناعية لمنح المشهد واقعية فائقة.",
    step_5_title: "الريندر النهائي والمعالجة",
    step_5_desc: "استخراج الصور النهائية بجودة فائقة مع المعالجة اللونية الاحترافية (Post-Production) والتسليم.",

    skills_tag: "البرامج والأدوات",
    skills_title: "تقنيات وبرمجيات متطورة لتحقيق أعلى دقة",
    skills_subtitle: "نعتمد على أفضل البرمجيات الهندسية والإظهارية لضمان سرعة الإنجاز والواقعية المتناهية.",

    pdf_banner_title: "هل ترغب في استعراض ملف الأعمال الكامل بصيغة PDF؟",
    pdf_banner_desc: "الملف يحتوي على تفاصيل ومخططات المشاريع وريندرات بدقة عالية ومواصفات الخامات.",
    btn_download_portfolio: "تحميل البورتفوليو الكامل (PDF)",

    contact_tag: "تواصل معي",
    contact_title: "جاهز لبدء مشروعك المعماري أو الديكوري القادم؟",
    contact_subtitle: "يسعدني استقبال استفساراتك ومناقشة تفاصيل مشروعك لتقديم التصور الأنسب وعرض السعر.",
    info_loc_title: "الموقع الجغرافي",
    info_loc_desc: "الدار البيضاء (Casablanca)، المغرب",
    info_loc_sub: "متاح للعمل على المشاريع المحلية والدولية عن بعد",
    info_email_title: "البريد الإلكتروني",
    info_email_desc: "استقبال المخططات وطلبات عروض الأسعار",
    info_phone_title: "واتساب / اتصال مباشر",
    info_wa_link: "فتح محادثة واتساب فورا",
    social_title: "تابع أعمالي وتواصل عبر المنصات:",

    form_title: "أرسل تفاصيل مشروعك",
    form_name_label: "الاسم الكامل *",
    form_email_label: "البريد الإلكتروني *",
    form_phone_label: "رقم الهاتف / الواتساب",
    form_type_label: "نوع المشروع المطلوب *",
    opt_select: "اختر الخدمة المطلوبة",
    opt_interior: "تصميم داخلي وديكور سكني / تجاري",
    opt_exterior: "إظهار معماري ثلاثي الأبعاد (3D ArchViz)",
    opt_branding: "تصميم هوية بصرية وجرافيك",
    opt_full: "مشروع متكامل (تصميم داخلي + ريندر + هوية)",
    opt_other: "استشارة أو خدمة أخرى",
    form_msg_label: "نبذة عن المشروع والمتطلبات *",
    btn_send_msg: "إرسال الرسالة",

    footer_tagline: "تصاميم معمارية وداخلية استثنائية وإظهار بصري واقعي يرتقي برؤية مشاريعكم.",
    footer_links_title: "روابط سريعة",
    footer_contact_title: "معلومات الاتصال",
    footer_loc: "الدار البيضاء، المغرب",
    footer_copyright: "© 2026 جميع الحقوق محفوظة | محمد أمين لشخم (Mohamed Amin Lachkhem)"
  },

  en: {
    lang_name: "English",
    download_pdf: "Download Portfolio",
    select_language: "Select Language:",
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_process: "Process",
    nav_skills: "Software & Tools",
    nav_contact: "Contact",

    hero_badge: "Interior Design • 3D Architectural Visualization • Brand Identity",
    hero_title: "Transforming Spaces into <span class='highlight-text'>Photorealistic Visual Realities</span>",
    hero_subtitle: "I am <strong>Mohamed Amin Lachkhem</strong>, an Interior Designer and 3D Architectural Visualizer based in Casablanca, Morocco. I combine engineering precision with contemporary aesthetics to deliver stunning designs that simulate reality and inspire emotion.",
    btn_explore: "Explore Projects",
    btn_start_project: "Start Your Project",
    stat_exp: "Years of Passion & Craft",
    stat_quality: "Photorealistic 4K Quality",
    stat_vision: "360° Architectural Vision",

    about_tag: "About Me",
    about_title: "Passion for Detail, Lighting Harmony, and Material Mastery",
    about_p1: "As an Interior Designer specialized in 3D Architectural Visualization and Graphic Branding, I focus on creating spaces that reflect the identity of their occupants while ensuring maximum comfort and functional excellence.",
    about_p2: "I utilize state-of-the-art 3D modeling, physically-based materials, and realistic lighting simulations to allow clients and developers to experience their spaces with supreme accuracy prior to physical execution.",
    about_badge_title: "Design & 3D Render",
    about_badge_sub: "High-End Craftsmanship",
    feat_1_title: "Smart Spatial Layouts",
    feat_1_desc: "Optimal space utilization ensuring seamless movement flow and comfort.",
    feat_2_title: "Photorealistic Renders",
    feat_2_desc: "Accurate simulation of textures, PBR materials, and natural light bounces.",
    feat_3_title: "Material & Color Synergy",
    feat_3_desc: "Blending contemporary minimalist luxury with authentic Moroccan heritage.",
    feat_4_title: "Integrated Visual Branding",
    feat_4_desc: "Connecting architectural atmospheres with strong visual brand identities.",
    btn_download_cv: "Download Portfolio & CV (PDF)",

    services_tag: "Areas of Expertise",
    services_title: "Comprehensive Design Solutions from Concept to Final Delivery",
    services_subtitle: "Offering a complete suite of creative services tailored for high-end residential and commercial projects.",
    srv_1_title: "Interior Design & Decoration",
    srv_1_desc: "Developing complete interior concepts for villas, apartments, and corporate offices. Covering bespoke furniture, lighting plans, wall finishes, and curated material boards.",
    srv_1_b1: "2D Layouts & Space Planning",
    srv_1_b2: "Color Schemes, Fabric & Furniture Selection",
    srv_1_b3: "Custom Millwork & Joinery Details",
    srv_2_title: "3D Architectural Visualization",
    srv_2_desc: "Converting architectural blueprints into ultra-realistic 3D CGI renderings for exterior facades, interior environments, and master plans.",
    srv_2_b1: "Ultra-High Resolution Day & Night Renders",
    srv_2_b2: "Close-up Material & Architectural Details",
    srv_2_b3: "Exterior Environment & Landscape Renders",
    srv_3_title: "Visual Identity & Graphic Design",
    srv_3_desc: "Building memorable corporate identities, editorial publications, menus, and signage that harmoniously align with architectural spaces.",
    srv_3_b1: "Logo Design & Brand Identity Guidelines",
    srv_3_b2: "Brochures, Catalogues & Restaurant Menus",
    srv_3_b3: "Visual Marketing Assets for Architecture",

    portfolio_tag: "Portfolio Gallery",
    portfolio_title: "Featured Architectural & Interior Projects",
    portfolio_subtitle: "Browse through categorized projects. Use the filter buttons below or click on any project to view it in full screen.",
    filter_all: "All Projects",
    filter_interior: "Interior Design",
    filter_exterior: "Exterior 3D",
    filter_graphic: "Branding & Graphics",
    cat_interior: "Interior Design",
    cat_exterior: "Exterior 3D",
    cat_graphic: "Branding & Graphics",

    proj_1_title: "Contemporary Luxury Living Salon",
    proj_1_desc: "Warm harmony of natural wood claddings, concealed architectural lighting, and bespoke seating.",
    proj_2_title: "Modern Residence with Pool & Deck",
    proj_2_desc: "Photorealistic CGI visualization highlighting villa facade, swimming pool, and landscape integration.",
    proj_3_title: "Serene Master Bedroom Suite",
    proj_3_desc: "Earth-toned palette, soft ambient lighting, and bespoke upholstered wall paneling.",
    proj_4_title: "Brand Identity & Packaging",
    proj_4_desc: "Distinctive logo, sophisticated color system, and luxury packaging design.",
    proj_5_title: "Executive Modern Office Suite",
    proj_5_desc: "Ergonomic workspace blending corporate luxury with productive lighting design.",
    proj_6_title: "Contemporary Architectural Facade",
    proj_6_desc: "Sculptural masses accented with natural stone, warm timber accents, and outdoor lighting.",
    proj_7_title: "Luxury Hospitality Reception Lounge",
    proj_7_desc: "Expansive layout featuring statement chandeliers, polished marble, and bronze details.",
    proj_8_title: "Modern Moroccan Architecture",
    proj_8_desc: "Reinterpreting traditional arches and Islamic geometric patterns with clean modern minimalism.",
    proj_9_title: "Hospitality Menu & Editorial Design",
    proj_9_desc: "High-end typography and layout crafted for premier restaurant experiences.",
    proj_10_title: "Sculptural Interior Staircase",
    proj_10_desc: "Architectural focal point connecting levels with integrated step lighting.",

    process_tag: "Working Methodology",
    process_title: "A Rigorous Workflow Ensuring Accuracy & Excellence",
    process_subtitle: "Following a structured 5-step milestone process from initial brief to final 4K render delivery.",
    step_1_title: "Discovery & Concept Brief",
    step_1_desc: "In-depth consultation to understand space requirements, budget, style aspirations, and moodboards.",
    step_2_title: "2D Space Planning",
    step_2_desc: "Drafting detailed 2D architectural layouts ensuring optimal circulation and ergonomics.",
    step_3_title: "Detailed 3D Modeling",
    step_3_desc: "Building the digital 3D geometry with millimeter precision for custom millwork and architecture.",
    step_4_title: "Realistic Lighting & Textures",
    step_4_desc: "Applying physically-accurate PBR materials, shaders, and natural/artificial light staging.",
    step_5_title: "4K Render & Post-Production",
    step_5_desc: "High-resolution rendering with professional color grading and final client handover.",

    skills_tag: "Software & Tools",
    skills_title: "Advanced Technology for Photorealistic Precision",
    skills_subtitle: "Mastering industry-leading software suites to guarantee speed, realism, and engineering accuracy.",

    pdf_banner_title: "Looking for the Complete Offline PDF Portfolio?",
    pdf_banner_desc: "Contains full project breakdowns, floor plans, 4K CGI renders, and material specifications.",
    btn_download_portfolio: "Download Full Portfolio (PDF)",

    contact_tag: "Contact Me",
    contact_title: "Ready to Bring Your Next Project to Life?",
    contact_subtitle: "I would be thrilled to discuss your architectural or interior project and provide tailored estimates.",
    info_loc_title: "Location",
    info_loc_desc: "Casablanca, Morocco",
    info_loc_sub: "Available for worldwide remote collaboration",
    info_email_title: "Direct Email",
    info_email_desc: "Send drawings and project inquiries",
    info_phone_title: "WhatsApp / Direct Call",
    info_wa_link: "Open WhatsApp Chat",
    social_title: "Follow My Work & Connect:",

    form_title: "Send Your Project Details",
    form_name_label: "Full Name *",
    form_email_label: "Email Address *",
    form_phone_label: "Phone / WhatsApp",
    form_type_label: "Project Type *",
    opt_select: "Select requested service",
    opt_interior: "Residential / Commercial Interior Design",
    opt_exterior: "3D Architectural Visualization (Exterior)",
    opt_branding: "Branding & Graphic Design",
    opt_full: "Full Package (Interior + 3D Render + Branding)",
    opt_other: "Consultation / Other Services",
    form_msg_label: "Project Overview & Requirements *",
    btn_send_msg: "Send Message",

    footer_tagline: "Exceptional interior architecture, photorealistic CGI renders, and visual design elevating your project vision.",
    footer_links_title: "Quick Navigation",
    footer_contact_title: "Contact Details",
    footer_loc: "Casablanca, Morocco",
    footer_copyright: "© 2026 All Rights Reserved | Mohamed Amin Lachkhem"
  },

  fr: {
    lang_name: "Français",
    download_pdf: "Télécharger le Portfolio",
    select_language: "Choisir la langue :",
    nav_home: "Accueil",
    nav_about: "À Propos",
    nav_services: "Services",
    nav_portfolio: "Projets",
    nav_process: "Méthodologie",
    nav_skills: "Outils & Logiciels",
    nav_contact: "Contact",

    hero_badge: "Architecture d'Intérieur • Visualisation 3D • Identité Visuelle",
    hero_title: "Sublimer les espaces en <span class='highlight-text'>expériences visuelles réalistes</span>",
    hero_subtitle: "Je suis <strong>Mohamed Amin Lachkhem</strong>, designer d'intérieur et artiste en visualisation architecturale 3D basé à Casablanca, Maroc. J'allie rigueur technique et esthétique contemporaine pour concevoir des projets photoréalistes d'exception.",
    btn_explore: "Découvrir les Projets",
    btn_start_project: "Démarrer un Projet",
    stat_exp: "Années d'Expérience & Passion",
    stat_quality: "Rendu Photoréaliste 4K",
    stat_vision: "Vision Globale 360°",

    about_tag: "À Propos",
    about_title: "Passion du Détail, Harmonie de la Lumière et Maîtrise des Matières",
    about_p1: "En tant qu'architecte d'intérieur spécialisé en imagerie 3D et design graphique, je crée des espaces sur mesure qui allient confort absolu, élégance raffinée et fonctionnalité optimale.",
    about_p2: "Grâce aux technologies avancées de modélisation 3D et de simulation lumineuse, je permets à mes clients et promoteurs de prévisualiser leurs futurs espaces avec une fidélité photoréaliste avant travaux.",
    about_badge_title: "Design & Rendu 3D",
    about_badge_sub: "Finition Haut de Gamme",
    feat_1_title: "Agencement Intelligent",
    feat_1_desc: "Optimisation de chaque mètre carré pour une circulation fluide et harmonieuse.",
    feat_2_title: "Rendu Photoréaliste",
    feat_2_desc: "Simulation fidèle des matières, textures PBR et reflets de lumière naturelle.",
    feat_3_title: "Synergie des Matériaux",
    feat_3_desc: "Mariage élégant entre modernisme épuré et authenticité architecturale.",
    feat_4_title: "Identité Visuelle Globale",
    feat_4_desc: "Harmonisation entre l'espace architectural et l'image de marque du projet.",
    btn_download_cv: "Télécharger le Portfolio & CV (PDF)",

    services_tag: "Domaines d'Expertise",
    services_title: "Solutions Créatives Complètes du Concept à la Réalisation",
    services_subtitle: "Une gamme complète de prestations pour vos projets résidentiels et commerciaux haut de gamme.",
    srv_1_title: "Architecture d'Intérieur & Décoration",
    srv_1_desc: "Conception complète pour villas, appartements et bureaux : sélection de mobilier, plans d'éclairage, agencement sur mesure et planches d'ambiance (Moodboards).",
    srv_1_b1: "Plans 2D & Aménagement d'Espace",
    srv_1_b2: "Harmonie des Couleurs, Tissus & Mobilier",
    srv_1_b3: "Menuiserie et Détails Personnalisés",
    srv_2_title: "Visualisation Architecturale 3D",
    srv_2_desc: "Transformation de vos plans architecturaux en rendus 3D ultra-réalistes pour façades extérieures, aménagements intérieurs et paysagers.",
    srv_2_b1: "Rendus 3D Haute Résolution (Jour & Nuit)",
    srv_2_b2: "Vues Rapprochées & Détails des Textures",
    srv_2_b3: "Intégration Paysagère & Environnement Extérieur",
    srv_3_title: "Identité Visuelle & Design Graphique",
    srv_3_desc: "Création d'identités de marque fortes, supports imprimés, menus et signalétique en parfaite harmonie avec vos espaces.",
    srv_3_b1: "Création de Logos & Charte Graphique",
    srv_3_b2: "Catalogues, Brochures & Menus de Restaurant",
    srv_3_b3: "Supports Visuels Marketing pour l'Architecture",

    portfolio_tag: "Galerie de Projets",
    portfolio_title: "Sélection de Réalisations & Projets Récents",
    portfolio_subtitle: "Explorez mes projets par catégorie. Utilisez les filtres ou cliquez sur une image pour l'agrandir en haute définition.",
    filter_all: "Tous les Projets",
    filter_interior: "Design d'Intérieur",
    filter_exterior: "Extérieur 3D",
    filter_graphic: "Branding & Graphisme",
    cat_interior: "Design d'Intérieur",
    cat_exterior: "Extérieur 3D",
    cat_graphic: "Branding & Graphisme",

    proj_1_title: "Salon de Réception Contemporain",
    proj_1_desc: "Harmonie chaleureuse de boiseries, d'éclairage indirect et de mobilier design raffiné.",
    proj_2_title: "Villa Moderne avec Piscine & Terrasse",
    proj_2_desc: "Visualisation photoréaliste de façade contemporaine, piscine et intégration paysagère.",
    proj_3_title: "Suite Parentale Élégante & Épurée",
    proj_3_desc: "Tonalités douces, éclairage tamisé et tête de lit en panneaux muraux travaillés.",
    proj_4_title: "Identité de Marque & Packaging",
    proj_4_desc: "Création de logo, univers graphique élégant et packaging haut de gamme.",
    proj_5_title: "Bureau Exécutif Contemporain",
    proj_5_desc: "Espace de travail prestigieux alliant ergonomie, boiseries et éclairage d'ambiance.",
    proj_6_title: "Façade Architecturale Contemporaine",
    proj_6_desc: "Mise en valeur des volumes par la pierre naturelle, le bois et l'éclairage architectural.",
    proj_7_title: "Lounge & Salon d'Accueil Prestigieux",
    proj_7_desc: "Espace généreux sublimé par du marbre poli, des luminaires suspendus et des miroirs.",
    proj_8_title: "Architecture Marocaine Contemporaine",
    proj_8_desc: "Réinterprétation moderne des arches traditionnelles et des motifs géométriques.",
    proj_9_title: "Menu & Édition pour l'Hôtellerie",
    proj_9_desc: "Mise en page graphique soignée et typographie élégante pour la restauration.",
    proj_10_title: "Escalier Sculptural d'Intérieur",
    proj_10_desc: "Élément architectural reliant les niveaux avec un éclairage de marches intégré.",

    process_tag: "Méthodologie de Travail",
    process_title: "Un Processus Structuré pour un Résultat d'Excellence",
    process_subtitle: "Un parcours en 5 étapes garantissant précision, écoute et qualité 4K.",
    step_1_title: "Brief & Exploration du Concept",
    step_1_desc: "Échange approfondi pour définir les besoins, le budget, l'orientation artistique et le moodboard.",
    step_2_title: "Plans 2D & Aménagement",
    step_2_desc: "Élaboration des plans d'agencement pour une optimisation spatiale et fonctionnelle.",
    step_3_title: "Modélisation 3D Précise",
    step_3_desc: "Création géométrique 3D détaillée de l'espace, du mobilier sur mesure et des finitions.",
    step_4_title: "Matières & Éclairage Photoréaliste",
    step_4_desc: "Application des textures haute définition PBR et mise en scène lumineuse naturelle et artificielle.",
    step_5_title: "Rendu 4K & Post-Production",
    step_5_desc: "Calcul des images en très haute résolution, étalonnage chromatique et livraison finale.",

    skills_tag: "Logiciels & Outils",
    skills_title: "Outils de Pointe pour une Précision Photoréaliste",
    skills_subtitle: "Maîtrise des logiciels de référence pour garantir réalisme, rapidité et rigueur géométrique.",

    pdf_banner_title: "Vous souhaitez consulter le Portfolio complet en PDF ?",
    pdf_banner_desc: "Retrouvez les plans, détails techniques, spécifications matières et rendus 4K.",
    btn_download_portfolio: "Télécharger le Portfolio Complet (PDF)",

    contact_tag: "Contact",
    contact_title: "Prêt à Donner Vie à Votre Futur Projet ?",
    contact_subtitle: "Je suis à votre disposition pour étudier votre projet et vous proposer un devis personnalisé.",
    info_loc_title: "Localisation",
    info_loc_desc: "Casablanca, Maroc",
    info_loc_sub: "Disponible pour des projets locaux et internationaux à distance",
    info_email_title: "Email Direct",
    info_email_desc: "Envoi de plans et demandes d'estimations",
    info_phone_title: "WhatsApp / Appel Direct",
    info_wa_link: "Ouvrir la discussion WhatsApp",
    social_title: "Suivez mes réalisations :",

    form_title: "Envoyez les Détails de Votre Projet",
    form_name_label: "Nom Complet *",
    form_email_label: "Adresse Email *",
    form_phone_label: "Téléphone / WhatsApp",
    form_type_label: "Type de Projet *",
    opt_select: "Sélectionnez le service souhaité",
    opt_interior: "Design d'Intérieur Résidentiel / Commercial",
    opt_exterior: "Visualisation 3D Extérieure (ArchViz)",
    opt_branding: "Identité Visuelle & Graphisme",
    opt_full: "Projet Global (Intérieur + Rendu 3D + Branding)",
    opt_other: "Consultation / Autre prestation",
    form_msg_label: "Description du Projet & Attentes *",
    btn_send_msg: "Envoyer le Message",

    footer_tagline: "Architecture d'intérieur sur mesure, rendus 3D photoréalistes et création visuelle valorisant vos projets.",
    footer_links_title: "Navigation Rapide",
    footer_contact_title: "Coordonnées",
    footer_loc: "Casablanca, Maroc",
    footer_copyright: "© 2026 Tous droits réservés | Mohamed Amin Lachkhem"
  }
};

document.addEventListener('DOMContentLoaded', () => {

  // Current Language State (Default: 'ar' or from localStorage)
  let currentLang = localStorage.getItem('site_lang') || 'ar';

  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'ar';
    currentLang = lang;
    localStorage.setItem('site_lang', lang);

    const t = translations[lang];
    const isRtl = (lang === 'ar');

    // Update HTML attributes
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

    // Update active state in switcher dropdown
    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });
    document.querySelectorAll('.mobile-lang-pill').forEach(pill => {
      pill.classList.toggle('active', pill.getAttribute('data-lang') === lang);
    });

    const currentLabel = document.getElementById('currentLangLabel');
    if (currentLabel) {
      currentLabel.textContent = t.lang_name;
    }

    // Replace all text with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    // Update form placeholders
    const nameInput = document.getElementById('userName');
    const msgInput = document.getElementById('userMessage');
    if (nameInput) {
      if (lang === 'ar') nameInput.placeholder = "مثال: أحمد المنصوري";
      else if (lang === 'fr') nameInput.placeholder = "Ex : Jean Dupont";
      else nameInput.placeholder = "e.g. John Doe";
    }
    if (msgInput) {
      if (lang === 'ar') msgInput.placeholder = "اكتب وصفاً مختصراً للمساحة، الموقع، النمط المفضل، والجدول الزمني...";
      else if (lang === 'fr') msgInput.placeholder = "Décrivez brièvement votre projet, surface, localisation et délais...";
      else msgInput.placeholder = "Briefly describe the project, space size, location, preferred style, and timeline...";
    }
  }

  // Language Dropdown Toggle
  const langBtn = document.getElementById('langBtn');
  const langSwitcher = document.querySelector('.lang-switcher');
  if (langBtn) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langSwitcher.classList.toggle('active');
    });
  }

  // Language selection click
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      const selected = opt.getAttribute('data-lang');
      applyLanguage(selected);
      langSwitcher.classList.remove('active');
    });
  });

  // Mobile language pill click
  document.querySelectorAll('.mobile-lang-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const selected = pill.getAttribute('data-lang');
      applyLanguage(selected);
    });
  });

  // Close dropdown on outside click
  document.addEventListener('click', () => {
    if (langSwitcher) langSwitcher.classList.remove('active');
  });

  // Apply initial language
  applyLanguage(currentLang);

  // 1. Sticky Navbar on Scroll
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Active Nav Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', highlightNavOnScroll);

  // 3. Mobile Drawer Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const drawerClose = document.getElementById('drawerClose');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    mobileDrawer.classList.add('active');
    mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeDrawer);
  drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));

  // 4. Portfolio Filter System
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || filterValue === itemCategory) {
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    });
  });

  // 5. Lightbox Modal System
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCat = document.getElementById('lightboxCat');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  const viewButtons = Array.from(document.querySelectorAll('.view-btn'));
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    const btn = viewButtons[currentIndex];
    const imgSrc = btn.getAttribute('data-img');
    const title = btn.getAttribute('data-title');
    const category = btn.getAttribute('data-category');

    lightboxImg.src = imgSrc;
    lightboxImg.alt = title;
    lightboxTitle.textContent = title;
    lightboxCat.textContent = category;

    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function showNextImage() {
    currentIndex = (currentIndex + 1) % viewButtons.length;
    openLightbox(currentIndex);
  }

  function showPrevImage() {
    currentIndex = (currentIndex - 1 + viewButtons.length) % viewButtons.length;
    openLightbox(currentIndex);
  }

  viewButtons.forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openLightbox(idx);
    });
  });

  document.querySelectorAll('.portfolio-thumb').forEach((thumb, idx) => {
    thumb.addEventListener('click', () => openLightbox(idx));
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', showNextImage);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevImage);

  // Keyboard navigation for Lightbox
  document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') {
      if (document.documentElement.getAttribute('dir') === 'rtl') showNextImage();
      else showPrevImage();
    }
    if (e.key === 'ArrowRight') {
      if (document.documentElement.getAttribute('dir') === 'rtl') showPrevImage();
      else showNextImage();
    }
  });

  // 6. Scroll Reveal Animation
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
});

// 7. Contact Form Submission Handler
function handleFormSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitBtn');
  const name = document.getElementById('userName').value;
  const lang = document.documentElement.getAttribute('lang') || 'ar';

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> ...';

  setTimeout(() => {
    feedback.className = 'form-feedback success';
    if (lang === 'ar') {
      feedback.innerHTML = `<i class="fa-solid fa-circle-check"></i> شكراً لك أستاذ ${name}! تم استلام تفاصيل مشروعك بنجاح، وسأتواصل معك في أقرب وقت.`;
    } else if (lang === 'fr') {
      feedback.innerHTML = `<i class="fa-solid fa-circle-check"></i> Merci ${name} ! Votre demande a été reçue avec succès. Je vous contacterai très rapidement.`;
    } else {
      feedback.innerHTML = `<i class="fa-solid fa-circle-check"></i> Thank you ${name}! Your message has been received successfully. I will get in touch shortly.`;
    }
    form.reset();
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<span data-i18n="btn_send_msg">إرسال الرسالة</span> <i class="fa-solid fa-paper-plane"></i>';
  }, 1000);

  return false;
}
"""


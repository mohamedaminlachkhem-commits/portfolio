// ================= قاموس اللغات الشامل =================
const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_projects: "Projects",
    nav_workflow: "Workflow",
    nav_tools: "Tools & Software",
    nav_contact: "Contact Me",
    btn_portfolio: "Download Portfolio",
    banner_sub: "ARCHITECTURE INTÉRIEURE & 3D ARCHITECTURAL VISUALIZATION",
    hero_brand_sub: "LEDER DESIGN / ARCHITECTURE INTÉRIEURE / 3D",
    hero_badge: "Welcome to my Creative Space",
    hero_spec: "Interior Designer & 3D Architectural Visualizer",
    hero_bio: "Specialized in creating modern architectural spaces and turning blueprints into photorealistic 3D renders with exceptional visual fidelity, paying meticulous attention to lighting distribution, material harmony, and executive rendering quality.",
    btn_order_project: "Request a Design Project",
    badge_archviz: "Leder Design ArchViz",
    s1_title: "Residential & Commercial Interiors",
    s1_desc: "Refined spatial planning for villas, apartments, and retail blending elegance and functionality.",
    s2_title: "3D Architectural Visualization (ArchViz)",
    s2_desc: "High-end photorealistic 3D rendering for exteriors, interiors, and landscapes under various lighting conditions.",
    s3_title: "Executive & Working Drawings",
    s3_desc: "Detailed architectural drawings, material schedules, and lighting plans ready for site execution.",
    s4_title: "Brochures & Architectural Presentations",
    s4_desc: "Premium presentation design, catalogues, and visual identity for architectural developments.",
    title_projects: "Featured Projects",
    hint_click_zoom: "Click any image to enlarge and preview in full detail",
    p1_cat: "Interior Design",
    p1_title: "Luxury Contemporary Living Room",
    p1_desc: "Warm harmony of wood textures, ambient recessed lighting, and sleek modern furniture.",
    p2_cat: "3D ArchViz Exterior",
    p2_title: "Modern Residential Villa with Pool",
    p2_desc: "Photorealistic architectural simulation of villa facade, pool deck, and lush landscape.",
    p3_cat: "Interior Design",
    p3_title: "Serene Master Bedroom",
    p3_desc: "Earthy soothing tones, tailored bedhead wall paneling, and warm relaxed lighting.",
    p4_cat: "Branding & Graphics",
    p4_title: "Brand Identity & Packaging",
    p4_desc: "Complete visual identity, logo refinement, and luxury stationery packaging design.",
    p5_cat: "Interior Design",
    p5_title: "Executive Ergonomic Office",
    p5_desc: "Balanced professional atmosphere maximizing productivity and ergonomic elegance.",
    p6_cat: "3D ArchViz Exterior",
    p6_title: "Modern Architectural Facade Design",
    p6_desc: "Exterior architectural visualization highlighting massing, night illumination, and stone-glass harmony.",
    wf1_title: "Brief & Needs Analysis",
    wf1_desc: "Analyzing blueprints, understanding client vision, and establishing style and budget.",
    wf2_title: "Moodboard & Space Planning",
    wf2_desc: "Curating color palettes, material textures, and 2D/3D functional layout configurations.",
    wf3_title: "3D Modeling & Rendering",
    wf3_desc: "Detailed 3D modeling, physically-based lighting, and high-resolution realistic rendering.",
    wf4_title: "Review & Final Delivery",
    wf4_desc: "Fine-tuning client feedback and delivering final render packages and technical files.",
    tool_group_3d: "3D Modeling & Visualization Software",
    tool_group_graphics: "Graphic Design & Post-Production",
    tool_group_cad: "CAD & Architectural Drafting",
    form_heading: "Request a Project / Consultation",
    form_sub: "Have an upcoming villa, apartment, or commercial space? Fill in your details and I'll contact you promptly:",
    lbl_name: "Full Name",
    lbl_project_type: "Project Type",
    lbl_desc: "Project Details (Description)",
    btn_send_wa: "Send via WhatsApp",
    btn_send_mail: "Send via Email",
    direct_contact_title: "Direct Contact Information",
    c_email_lbl: "Email Address",
    c_phone_lbl: "Phone / WhatsApp",
    c_loc_lbl: "Location & Coverage",
    c_loc_val: "Morocco (Casablanca / Fes) & Worldwide",
    rights: "All rights reserved."
  },
  fr: {
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_services: "Services",
    nav_projects: "Projets",
    nav_workflow: "Méthodologie",
    nav_tools: "Logiciels & Outils",
    nav_contact: "Contactez-moi",
    btn_portfolio: "Télécharger Portfolio",
    banner_sub: "ARCHITECTURE INTÉRIEURE & 3D ARCHITECTURAL VISUALIZATION",
    hero_brand_sub: "LEDER DESIGN / ARCHITECTURE INTÉRIEURE / 3D",
    hero_badge: "Bienvenue dans mon espace créatif",
    hero_spec: "Architecte d'Intérieur & Expert Rendu 3D",
    hero_bio: "Spécialisé dans la création d'espaces modernes et la transformation de plans en visuels 3D photoréalistes d'une grande précision.",
    btn_order_project: "Commander un projet",
    badge_archviz: "Leder Design ArchViz",
    s1_title: "Architecture d'Intérieur Résidentielle & Commerciale",
    s1_desc: "Aménagement d'espace raffiné pour villas, appartements et boutiques alliant esthétique et fonctionnalité.",
    s2_title: "Visualisation Architecturale 3D (ArchViz)",
    s2_desc: "Rendus 3D photoréalistes pour façades, intérieurs et paysages selon diverses ambiances lumineuses.",
    s3_title: "Plans d'Exécution & Dossiers Techniques",
    s3_desc: "Élaboration de plans précis, calepinage des matériaux et plans d'éclairage prêts pour le chantier.",
    s4_title: "Brochures & Présentations Architecturales",
    s4_desc: "Conception de catalogues et supports de présentation haut de gamme pour projets immobiliers.",
    title_projects: "Galerie de Projets",
    hint_click_zoom: "Cliquez sur une image pour l'agrandir en haute définition",
    p1_cat: "Architecture d'Intérieur",
    p1_title: "Salon Contemporain de Luxe",
    p1_desc: "Harmonie chaleureuse de bois nobles, éclairage indirect et mobilier moderne et confortable.",
    p2_cat: "Rendu 3D Extérieur",
    p2_title: "Villa Moderne avec Piscine",
    p2_desc: "Visualisation photoréaliste de la façade de la villa, de l'espace piscine et du paysage.",
    p3_cat: "Architecture d'Intérieur",
    p3_title: "Chambre Parentale Épurée",
    p3_desc: "Palette apaisante de tons terreux, lumière douce et boiseries murales sur mesure.",
    p4_cat: "Branding & Graphisme",
    p4_title: "Identité Visuelle & Packaging",
    p4_desc: "Création de logo, charte graphique et emballages valorisant le raffinement.",
    p5_cat: "Architecture d'Intérieur",
    p5_title: "Bureau Exécutif Ergonomique",
    p5_desc: "Environnement de travail soigné alliant confort acoustique, ergonomie et clarté.",
    p6_cat: "Rendu 3D Extérieur",
    p6_title: "Conception de Façade Architecturale Moderne",
    p6_desc: "Visualisation extérieure mettant en valeur la volumétrie, l'éclairage nocturne et l'harmonie des matières.",
    wf1_title: "Analyse des Besoins",
    wf1_desc: "Étude des plans, compréhension des attentes et définition du style et du budget.",
    wf2_title: "Moodboard & Agencement",
    wf2_desc: "Sélection des matières, couleurs et aménagement fonctionnel 2D/3D.",
    wf3_title: "Modélisation & Rendu 3D",
    wf3_desc: "Création de la scène 3D, mise en lumière physique et calcul de rendus haute résolution.",
    wf4_title: "Révisions & Livraison",
    wf4_desc: "Ajustements selon vos retours et livraison des visuels finaux et plans techniques.",
    tool_group_3d: "Logiciels de Modélisation & Rendu 3D",
    tool_group_graphics: "Logiciels de Graphisme & Mise en page",
    tool_group_cad: "Plans Techniques & CAO",
    form_heading: "Demander un Projet / Consultation",
    form_sub: "Vous avez une idée pour une villa, appartement ou espace commercial ? Remplissez vos détails :",
    lbl_name: "Nom complet",
    lbl_project_type: "Type de projet",
    lbl_desc: "Détails du projet (Description)",
    btn_send_wa: "Envoyer par WhatsApp",
    btn_send_mail: "Envoyer par E-mail",
    direct_contact_title: "Coordonnées Directes",
    c_email_lbl: "Adresse E-mail",
    c_phone_lbl: "Téléphone / WhatsApp",
    c_loc_lbl: "Localisation",
    c_loc_val: "Maroc (Casablanca / Fès) et international",
    rights: "Tous droits réservés."
  },
  ar: {
    nav_home: "الرئيسية",
    nav_about: "عن المصمم",
    nav_services: "الخدمات",
    nav_projects: "المشاريع",
    nav_workflow: "منهجية العمل",
    nav_tools: "البرامج والأدوات",
    nav_contact: "تواصل معي",
    btn_portfolio: "تحميل البورتفوليو",
    banner_sub: "ARCHITECTURE INTÉRIEURE & 3D ARCHITECTURAL VISUALIZATION",
    hero_brand_sub: "LEDER DESIGN / ARCHITECTURE INTÉRIEURE / 3D",
    hero_badge: "مرحباً بك في مساحتي الإبداعية",
    hero_spec: "مصمم داخلي وخبير إظهار معماري ثلاثي الأبعاد",
    hero_bio: "متخصص في ابتكار وتصميم الفراغات المعمارية الحديثة، وتحويل المخططات الهندسية إلى مشاهد ثلاثية الأبعاد فائقة الواقعية والدقة البصرية، مع مراعاة أدق التفاصيل في توزيع الإضاءة، تناسق الخامات، وجودة الإخراج التنفيذي.",
    btn_order_project: "طلب تصميم مشروع",
    badge_archviz: "Leder Design ArchViz",
    s1_title: "التصميم الداخلي السكني والتجاري",
    s1_desc: "تصميم وتوزيع المساحات للفيلات والشقق والمحلات بأسلوب راقٍ يوازن بين الجمالية والاستغلال الوظيفي.",
    s2_title: "الإظهار المعماري ثلاثي الأبعاد (3D ArchViz)",
    s2_desc: "رندر احترافي فائق الواقعية للواجهات الخارجية والمساحات الداخلية واللاندسكيب بمختلف سيناريوهات الإضاءة.",
    s3_title: "المخططات التنفيذية واللوحات التقنية",
    s3_desc: "إعداد المخططات الدقيقة والمساقط الأفقية وتفاصيل الخامات والإضاءة الجاهزة للتنفيذ الميداني.",
    s4_title: "إخراج الكتالوجات والعروض الهندسية",
    s4_desc: "تصميم عروض تقديمية وملفات تعريفية (PDF/InDesign) متكاملة تعبر عن أصالة واحترافية المشاريع.",
    title_projects: "معرض المشاريع",
    hint_click_zoom: "اضغط على أي صورة لتكبيرها بدقة عالية",
    p1_cat: "تصميم داخلي",
    p1_title: "صالون معيشة معاصر فاخر",
    p1_desc: "تناغم دافئ بين الخامات الخشبية، الإضاءة المخفية، وقطع الأثاث المريحة ذات الطابع المودرن.",
    p2_cat: "إظهار خارجي 3D",
    p2_title: "فيلا سكنية حديثة مع مسبح",
    p2_desc: "محاكاة معمارية واقعية لواجهة الفيلا وتفاصيل المسبح واللاندسكيب المحيط بدقة بصرية عالية.",
    p3_cat: "تصميم داخلي",
    p3_title: "غرفة نوم رئيسية بتصميم هادئ",
    p3_desc: "اعتماد ألوان ترابية مهدئة وإضاءة دافئة مع خلفية سرير مكسوة ببانوهات جدارية حديثة.",
    p4_cat: "هوية وجرافيك",
    p4_title: "هوية بصرية وتغليف علامة تجارية",
    p4_desc: "تطوير شعار ونظام ألوان ومطبوعات متكاملة تعبر عن الأصالة والاحترافية.",
    p5_cat: "تصميم داخلي",
    p5_title: "مكتب تنفيذي بتصميم مريح",
    p5_desc: "بيئة عمل متوازنة تجمع بين الفخامة الوظيفية وتوزيع الإضاءة المريح لساعات العمل الطويلة.",
    p6_cat: "إظهار خارجي 3D",
    p6_title: "تصميم واجهة معمارية حديثة",
    p6_desc: "تصميم معماري خارجي يبرز كتل المبنى والإنارة الليلية وتناسق خامات الحجر والزجاج.",
    wf1_title: "دراسة الاحتياجات والمساحة",
    wf1_desc: "تحليل المخططات الهندسية، وفهم رغبة العميل وتحديد النمط والميزانية المتاحة.",
    wf2_title: "لوحة الإلهام والتوزيع (Moodboard)",
    wf2_desc: "اختيار باليت الألوان وتناسق الخامات وتوزيع عناصر الفرش المعماري 2D/3D.",
    wf3_title: "النمذجة والإظهار الواقعي 3D",
    wf3_desc: "بناء الكتل ثلاثية الأبعاد وضبط الإضاءات الواقعية وتوليد رندرات عالية الدقة.",
    wf4_title: "المراجعة والتسليم النهائي",
    wf4_desc: "إتمام التعديلات المطلوبة وتسليم الحزمة الكاملة من صور ورسومات تنفيذية.",
    tool_group_3d: "برامج التصميم والإظهار ثلاثي الأبعاد",
    tool_group_graphics: "برامج التصميم الجرافيكي والإخراج",
    tool_group_cad: "المخططات المعمارية والهندسية",
    form_heading: "طلب تصميم / استشارة مشروع",
    form_sub: "لديك فكرة فيلا، شقة، أو مشروع تجاري وتريد تجسيدها في الواقع؟ املأ التفاصيل وسأتواصل معك مباشرة:",
    lbl_name: "الاسم الكريم",
    lbl_project_type: "نوع المشروع",
    lbl_desc: "تفاصيل الفكرة أو المساحة (الوصف)",
    btn_send_wa: "إرسال الفكرة عبر واتساب",
    btn_send_mail: "إرسال عبر البريد الإلكتروني",
    direct_contact_title: "معلومات التواصل المباشرة",
    c_email_lbl: "البريد الإلكتروني",
    c_phone_lbl: "الهاتف / واتساب",
    c_loc_lbl: "المقر والخدمة",
    c_loc_val: "المغرب (الدار البيضاء / فاس) وكافة المدن",
    rights: "جميع الحقوق محفوظة."
  }
};

// ================= دالة تغيير اللغة =================
function changeLanguage(lang) {
  const isRTL = (lang === 'ar');
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem('preferred_lang', lang);
}

// ================= إرسال الفكرة عبر واتساب =================
function sendViaWhatsApp() {
  const name = document.getElementById('clientName').value.trim();
  const type = document.getElementById('projectType').value;
  const details = document.getElementById('projectDetails').value.trim();

  if (!name || !details) {
    alert(document.documentElement.lang === 'ar' ? 'يرجى كتابة اسمك وتفاصيل الفكرة أولاً.' : 'Please fill in your name and project details first.');
    return;
  }

  const phone = "212628993050";
  const message = `Hello Mohamed Amin,\n\n📌 *New Project Request*\n👤 *Client Name:* ${name}\n🏢 *Project Type:* ${type}\n📝 *Details:* ${details}`;
  
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// ================= إرسال الفكرة عبر البريد =================
function sendViaEmail() {
  const name = document.getElementById('clientName').value.trim();
  const type = document.getElementById('projectType').value;
  const details = document.getElementById('projectDetails').value.trim();

  if (!name || !details) {
    alert(document.documentElement.lang === 'ar' ? 'يرجى كتابة اسمك وتفاصيل الفكرة أولاً.' : 'Please fill in your name and project details first.');
    return;
  }

  const email = "lachkhemmohamedamin@gmail.com";
  const subject = `Project Request: ${type} - ${name}`;
  const body = `Hello Mohamed Amin,\n\nName: ${name}\nProject Type: ${type}\n\nProject Details:\n${details}\n\nBest regards.`;

  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// ================= ميزة تكبير الصور (Lightbox) =================
function openLightbox(src, title, cat, desc) {
  const modal = document.getElementById('imageLightbox');
  const img = document.getElementById('lightboxImg');
  const titleEl = document.getElementById('lightboxTitle');
  const catEl = document.getElementById('lightboxCat');
  const descEl = document.getElementById('lightboxDesc');

  img.src = src;
  titleEl.textContent = title;
  catEl.textContent = cat;
  descEl.textContent = desc;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
  if (event.target.classList.contains('lightbox-modal') || event.target.classList.contains('lightbox-close') || event.key === 'Escape') {
    const modal = document.getElementById('imageLightbox');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('imageLightbox');
    if (modal && modal.classList.contains('active')) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }
});

// ================= استعادة اللغة الإنجليزية كافتراضية =================
window.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('show'));
    });
  }

  // اللغة الإنجليزية هي الافتراضية
  const savedLang = localStorage.getItem('preferred_lang') || 'en';
  const langSelector = document.getElementById('langSelector');
  if (langSelector) {
    langSelector.value = savedLang;
  }
  changeLanguage(savedLang);
});

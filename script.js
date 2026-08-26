const translations = {
  ar: {
    nav_home: "الرئيسية",
    nav_about: "عن المصمم",
    nav_services: "الخدمات",
    nav_projects: "المشاريع",
    nav_workflow: "منهجية العمل",
    nav_tools: "البرامج والأدوات",
    nav_contact: "تواصل معي",
    btn_portfolio: "تحميل البورتفوليو",
    title_projects: "معرض المشاريع",
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
    c_email_lbl: "البريد الإلكتروني",
    c_phone_lbl: "الهاتف / واتساب",
    c_loc_lbl: "المقر",
    c_loc_val: "المغرب (الدار البيضاء / فاس)",
    rights: "جميع الحقوق محفوظة."
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_projects: "Projects",
    nav_workflow: "Workflow",
    nav_tools: "Tools & Software",
    nav_contact: "Contact Me",
    btn_portfolio: "Download Portfolio",
    title_projects: "Featured Projects",
    p1_cat: "Interior Design",
    p1_title: "Luxury Contemporary Living Room",
    p1_desc: "Harmonious blend of rich wood textures, recessed lighting, and comfortable modern furnishings.",
    p2_cat: "3D ArchViz Exterior",
    p2_title: "Modern Residential Villa with Pool",
    p2_desc: "Photorealistic architectural visualization of villa facade, pool details, and surrounding landscape.",
    p3_cat: "Interior Design",
    p3_title: "Serene Master Bedroom",
    p3_desc: "Calming earthy palette, ambient warm lighting, and tailored modern wall paneling.",
    p4_cat: "Branding & Graphics",
    p4_title: "Brand Identity & Premium Packaging",
    p4_desc: "Complete visual identity design, logo typography, and high-end collateral systems.",
    p5_cat: "Interior Design",
    p5_title: "Executive Ergonomic Office",
    p5_desc: "Balanced workspace pairing functional luxury with optimized lighting for productivity.",
    c_email_lbl: "Email Address",
    c_phone_lbl: "Phone / WhatsApp",
    c_loc_lbl: "Location",
    c_loc_val: "Morocco (Casablanca / Fes)",
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
    title_projects: "Galerie de Projets",
    p1_cat: "Architecture d'Intérieur",
    p1_title: "Salon Contemporain de Luxe",
    p1_desc: "Alliance chaleureuse de finitions en bois, d'éclairage indirect et de mobilier moderne et ergonomique.",
    p2_cat: "Rendu 3D Extérieur",
    p2_title: "Villa Moderne avec Piscine",
    p2_desc: "Visualisation architecturale photoréaliste de la façade, de l'espace piscine et du paysage.",
    p3_cat: "Architecture d'Intérieur",
    p3_title: "Chambre Parentale Épurée",
    p3_desc: "Palette de tons terreux, lumière d'ambiance feutrée et boiseries murales modernes.",
    p4_cat: "Identité Visuelle",
    p4_title: "Branding & Packaging Premium",
    p4_desc: "Création de logo, charte graphique et supports visuels de haute qualité.",
    p5_cat: "Architecture d'Intérieur",
    p5_title: "Bureau Exécutif Ergonomique",
    p5_desc: "Espace de travail associant élégance fonctionnelle et confort visuel optimal.",
    c_email_lbl: "Adresse E-mail",
    c_phone_lbl: "Téléphone / WhatsApp",
    c_loc_lbl: "Emplacement",
    c_loc_val: "Maroc (Casablanca / Fès)",
    rights: "Tous droits réservés."
  }
};

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

window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferred_lang') || 'ar';
  const langSelector = document.getElementById('langSelector');
  if (langSelector) {
    langSelector.value = savedLang;
  }
  changeLanguage(savedLang);
});


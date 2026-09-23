/**
 * Get your Green On - Main JavaScript File & Persistent i18n Engine
 */

const translations = {
    es: {
        nav_home: "Inicio",
        nav_about: "Sobre Nosotros",
        nav_solutions: "Servicios",
        nav_contact: "Contacto",
        nav_cta: "Agendar Conversación",
        card_cta: "Ver detalle",
        hero_title: "De compromisos de sostenibilidad a una estrategia de negocio resiliente.",
        hero_desc: "Ayudamos a las organizaciones a evaluar riesgos climáticos, definir estrategias prácticas, implementar acciones medibles y preparar revelaciones confiables.",
        hero_cta: "Agendar Conversación",
        stage_title: "Soporte en cada etapa de tu viaje de sostenibilidad.",
        st1_title: "Evaluar Impactos de Sostenibilidad",
        st1_desc: "Entendimiento profundo de impactos, riesgos, oportunidades, gobernanza, datos y exposición en la cadena de valor.",
        st2_title: "Construir Estrategia Resiliente",
        st2_desc: "Definición de prioridades, planes de resiliencia climática, estrategias de sostenibilidad, metas y hojas de ruta.",
        st3_title: "Impulsar Acciones Significativas",
        st3_desc: "Implementación de programas ambientales, iniciativas de descarbonización, participación de partes interesadas y certificaciones.",
        st4_title: "Preparar Revelaciones Confiables",
        st4_desc: "Mejora de datos de sostenibilidad, gobernanza, documentación, procesos de reporte y preparación para revelaciones confiables.",
        explore_solutions: "Explorar nuestros servicios &rarr;",
        frameworks_title: "De marcos complejos a una estrategia práctica",
        frameworks_p1: "Cruzamos la brecha entre los estándares de sostenibilidad complejos y la realidad de los negocios.",
        frameworks_p2: "Nuestro equipo combina experiencia técnica para ayudar a las organizaciones a aplicar GRI, ESRS, el Protocolo GEI, SBTi e IFRS S1 y S2 de una manera rigurosa, accionable y alineada con la resiliencia a largo plazo.",
        meet_title: "Te encontraremos donde estés y te ayudaremos a avanzar.",
        meet_desc: "Ya sea que necesites apoyo con una certificación específica, una evaluación estratégica definida o asesoría continua en sostenibilidad, Green On adapta el compromiso a las prioridades, capacidades y etapa de desarrollo de tu organización.",
        m1_title: "Soporte Enfocado",
        m1_desc: "Asistencia puntual para necesidades concretas como un inventario de gases de efecto invernadero (GEI), certificación ambiental, taller o evaluación.",
        m1_best: "Ideal para organizaciones con requisitos definidos u objetivos a corto plazo.",
        m2_title: "Proyectos Estratégicos",
        m2_desc: "Compromisos estructurados para preparación climática, doble materialidad, análisis de cadena de valor, preparación de reportes o ruta de descarbonización.",
        m2_best: "Ideal para organizaciones que necesitan evaluación clara, estrategia y plan.",
        m3_title: "Asesoría Continua",
        m3_desc: "Soporte recurrente en estrategia de sostenibilidad, ejecución, gestión de certificaciones, datos, preparación de reportes y mejora continua.",
        m3_best: "Ideal para organizaciones que buscan guía y apoyo de ejecución a largo plazo.",
        discuss_project: "Conversar sobre tu proyecto &rarr;",
        footer_rights: "© 2026 Green On. Todos los derechos reservados.",
        footer_cta_text: "¿Listo para construir un negocio más resiliente? Hablemos:",
        mission_title: "Nuestra misión es ayudar a las organizaciones a pasar de los compromisos de sostenibilidad a una estrategia de negocio resiliente.",
        mission_desc: "Proporcionamos la orientación técnica, la perspectiva estratégica y el soporte de implementación necesarios para transformar los retos climáticos y ambientales en prioridades claras, planes de acción prácticos y valor comercial a largo plazo.",
        team_title: "Nuestro Equipo Asesor",
        team_subtitle: "Green On es liderado por un equipo asesor multidisciplinario que combina estrategia de sostenibilidad, gestión ambiental, ejecución de proyectos y experiencia corporativa.",
        fab_role: "Cofundadora y Directora",
        fab_desc: "Fabiola es bióloga especializada en ecología y desarrollo sostenible, con más de 10 años de experiencia en consultoría, estrategia corporativa y gestión de proyectos ambientales.",
        arm_role: "Cofundador y Consultor Senior",
        arm_desc: "Armando es biólogo con más de 8 años de experiencia en gestión ambiental, biodiversidad y manejo de residuos. Lidera la implementación de programas ambientales prácticos.",
        diff_main_title: "Lo que hace diferente a Green On",
        diff_1_title: "Estrategia basada en la implementación",
        diff_1_desc: "No solo entregamos reportes; diseñamos estrategias que realmente se pueden ejecutar. Nuestra experiencia en gestión de proyectos y operaciones nos permite entender los retos internos de la gestión del cambio, la asignación de recursos y la viabilidad técnica.",
        diff_2_title: "Experiencia técnica con visión de negocios",
        diff_2_desc: "Cruzamos la brecha entre los datos ambientales complejos y la toma de decisiones empresariales. Traducimos factores de emisión, requerimientos regulatorios y estándares técnicos en prioridades claras y oportunidades comerciales.",
        diff_3_title: "Soporte flexible",
        diff_3_desc: "Cada organización se encuentra en una etapa diferente. Ofrecemos asesoría modular que se adapta a tus necesidades, ya sea que requieras una estrategia completa de carbono, apoyo para un reporte de divulgación o guía técnica para un programa ambiental.",
        about_cta_title: "¿Quieres conocer más sobre cómo trabajamos?",
        serv_main_title: "Nuestros Servicios Integrales",
        serv_main_desc: "Apoyamos a las organizaciones en cada etapa de su viaje de sostenibilidad con absoluto rigor técnico.",
        s1_title: "Evaluación de Sostenibilidad, Reportes y Preparación",
        s1_desc: "Entiende dónde se encuentra tu organización actualmente y qué necesita para avanzar. Evaluamos prácticas actuales, datos, documentación y capacidades internas para identificar brechas, riesgos y oportunidades.",
        s1_sum_label: "Servicios y entregables incluidos (+)",
        s1_list: `
            <li>• Evaluaciones de línea base de sostenibilidad.</li>
            <li>• Evaluaciones de preparación para huella de carbono e inventario de GEI.</li>
            <li>• Evaluaciones de materialidad y doble materialidad.</li>
            <li>• Evaluaciones de riesgos climáticos y resiliencia.</li>
            <li>• Evaluaciones de preparación para IFRS S1 e IFRS S2.</li>
            <li>• Evaluaciones de preparación para reportes de sostenibilidad.</li>
            <li>• Análisis de brechas en datos y documentación climática.</li>
            <li>• Evaluaciones de gobernanza, roles y capacidad interna.</li>
            <li>• Preparación para certificaciones y programas ambientales.</li>
            <li>• Diagnósticos de eficiencia en residuos, agua, energía y recursos.</li>
            <li>• Evaluaciones de compras sostenibles y cadena de valor.</li>
            <li>• Recomendaciones y planes de acción priorizados.</li>
        `,
        s2_title: "Estrategia de Sostenibilidad y Hoja de Ruta",
        s2_desc: "Transformamos los objetivos de sostenibilidad en un plan práctico y alcanzable. Ayudamos a definir prioridades, objetivos, responsabilidades, indicadores y cronogramas que conectan la sostenibilidad con las necesidades del negocio.",
        s2_sum_label: "Servicios y entregables incluidos (+)",
        s2_list: `
            <li>• Estrategias corporativas de sostenibilidad.</li>
            <li>• Estrategias de resiliencia y adaptación climática.</li>
            <li>• Estrategias de descarbonización y Planes de Gestión de Carbono.</li>
            <li>• Hojas de ruta de reducción de emisiones SBTi.</li>
            <li>• Estrategias de economía circular y reducción de residuos.</li>
            <li>• Estrategias de compras y movilidad sostenible.</li>
            <li>• Hojas de ruta de eficiencia hídrica y energética.</li>
            <li>• Planes de acción de biodiversidad y naturaleza.</li>
            <li>• Modelos de gobernanza y objetivos ESG.</li>
            <li>• Hojas de ruta de sostenibilidad a corto, mediano y largo plazo.</li>
        `,
        s3_title: "Reportes de Sostenibilidad y Divulgación",
        s3_desc: "Comunica tu desempeño con claridad, credibilidad y propósito. Apoyamos en la recopilación de información, definición de indicadores y desarrollo de reportes alineados a marcos reconocidos.",
        s3_sum_label: "Servicios y entregables incluidos (+)",
        s3_list: `
            <li>• Informes de sostenibilidad alineados con GRI y ESRS.</li>
            <li>• Apoyo en revelaciones de IFRS S1 e IFRS S2.</li>
            <li>• Informes de huella de carbono y emisiones.</li>
            <li>• Marcos de indicadores ESG y consolidación de datos.</li>
            <li>• Integración de información de materialidad y partes interesadas.</li>
            <li>• Desarrollo de contenidos y redacción técnica de reportes.</li>
            <li>• Reportes personalizados para clientes, inversores o equipos internos.</li>
        `,
        s4_title: "Certificaciones y Programas Ambientales",
        s4_desc: "Pasa de los compromisos a la implementación. Guiamos el desarrollo, documentación y gestión de certificaciones y reconocimientos ambientales.",
        s4_sum_label: "Programas y servicios incluidos (+)",
        s4_list: `
            <li>• Programa País Carbono Neutralidad 2.0 (PCCN).</li>
            <li>• Bandera Azul Ecológica (PBAE).</li>
            <li>• Esencial Costa Rica.</li>
            <li>• Inventarios de gases de efecto invernadero y reducción de emisiones.</li>
            <li>• Programas de eficiencia en agua, energía y manejo de residuos.</li>
            <li>• Iniciativas de conservación de biodiversidad y educación ambiental.</li>
            <li>• Preparación para auditorías, evaluaciones y procesos de verificación.</li>
        `,
        s5_title: "Capacitaciones y Talleres a la Medida",
        s5_desc: "Construye conocimiento y compromiso en tu organización con charlas, talleres y programas de capacitación personalizados según los roles de tu equipo.",
        s5_sum_label: "Temas de capacitación incluidos (+)",
        s5_list: `
            <li>• Talleres de doble materialidad.</li>
            <li>• Talleres de evaluación de cadena de valor.</li>
            <li>• Cómo desarrollar un reporte de sostenibilidad.</li>
            <li>• Fundamentos de huella de carbono y emisiones.</li>
            <li>• Compromiso de proveedores y compras sostenibles.</li>
        `,
        s6_title: "Herramientas y Recursos de Sostenibilidad",
        s6_desc: "Diseñamos herramientas, plantillas y recursos personalizados para ayudar a las organizaciones a recopilar información y gestionar datos de forma eficiente.",
        s6_sum_label: "Herramientas incluidas (+)",
        s6_list: `
            <li>• Guías para programas de manejo de residuos.</li>
            <li>• Plantillas de recopilación de datos de emisiones.</li>
            <li>• Plantillas de evaluación de sostenibilidad de proveedores.</li>
            <li>• Plantillas de apoyo para inventarios de GEI.</li>
            <li>• Listas de verificación para preparación de reportes.</li>
        `,
        star_tag: "Programa Estrella",
        star_title: "Sustainability Foundations Program",
        star_desc: "Construye una base sólida y creíble de sostenibilidad a través de un programa integrado. Combinamos la estrategia con la implementación de Carbono Neutralidad, Bandera Azul Ecológica y Esencial Costa Rica, conectando el desempeño ambiental, la gobernanza y las certificaciones en una visión de negocio a largo plazo.",
        serv_cta_title: "¿Necesitas un servicio a la medida de tu empresa?",
        serv_cta_desc: "Conversemos sobre tus necesidades técnicas y diseñemos la ruta adecuada.",
        contact_main_title: "Hablemos sobre el futuro de tu organización",
        contact_main_desc: "Estamos ubicados en Alajuela, Costa Rica. Contáctanos directamente o agenda una sesión estratégica.",
        email_label: "Correo Electrónico",
        phone_label: "Teléfono / WhatsApp"
    },
    en: {
        nav_home: "Home",
        nav_about: "About Us",
        nav_solutions: "Services",
        nav_contact: "Contact",
        nav_cta: "Schedule a Conversation",
        card_cta: "View details",
        hero_title: "From sustainability commitments to a resilient business strategy.",
        hero_desc: "We help organizations assess climate and sustainability risks, define practical strategies, implement measurable actions, and prepare reliable disclosures.",
        hero_cta: "Schedule a Conversation",
        stage_title: "Support at every stage of your sustainability journey.",
        st1_title: "Assess Sustainability Impacts",
        st1_desc: "Understand impacts, risks, opportunities, governance, data, and value chain exposure.",
        st2_title: "Build Resilient Strategy",
        st2_desc: "Define priorities, climate resilience plans, sustainability strategies, targets, and roadmaps.",
        st3_title: "Drive Meaningful Action",
        st3_desc: "Implement environmental programs, decarbonization initiatives, stakeholder engagement, and certifications.",
        st4_title: "Prepare Reliable Disclosures",
        st4_desc: "Improve sustainability data, governance, documentation, reporting processes, and readiness for reliable disclosures.",
        explore_solutions: "Explore our solutions &rarr;",
        frameworks_title: "From Complex Frameworks to Practical Strategy",
        frameworks_p1: "We bridge the gap between complex sustainability standards and business reality.",
        frameworks_p2: "Our team combines technical expertise to help organizations apply GRI, ESRS, the GHG Protocol, SBTi, and IFRS S1 and S2 in a way that is rigorous, actionable, and aligned with long-term business resilience.",
        meet_title: "We’ll Meet You Where You Are—and Help You Move Forward.",
        meet_desc: "Whether you need support with one specific certification, a defined strategic assessment, or ongoing sustainability advisory, Green On tailors the engagement to your organization’s priorities, capabilities, and stage of development.",
        m1_title: "Focused Support",
        m1_desc: "Targeted assistance for a specific need, such as a greenhouse gas inventory, environmental certification, workshop, assessment, or sustainability program.",
        m1_best: "Best for: Organizations with a clearly defined requirement.",
        m2_title: "Strategic Projects",
        m2_desc: "Structured engagements designed to address a specific business challenge, such as climate readiness, double materiality, or a decarbonization roadmap.",
        m2_best: "Best for: Organizations needing a clear assessment and strategy.",
        m3_title: "Ongoing Advisory",
        m3_desc: "Recurring support for sustainability strategy, implementation, certification management, data, reporting readiness, and continuous improvement.",
        m3_best: "Best for: Organizations seeking long-term guidance.",
        discuss_project: "Discuss your project &rarr;",
        footer_rights: "© 2026 Green On. All rights reserved.",
        footer_cta_text: "Ready to Build a More Resilient Business? Let's talk:",
        mission_title: "Our mission is to help organizations move from sustainability commitments to resilient business strategy.",
        mission_desc: "We provide the technical guidance, strategic perspective, and implementation support needed to transform climate and environmental challenges into clear priorities, practical action plans, and long-term business value.",
        team_title: "Our Advisory Team",
        team_subtitle: "Green On is led by a multidisciplinary advisory team that combines sustainability strategy, environmental management, project execution, and corporate experience.",
        fab_role: "Co-founder & Director",
        fab_desc: "Fabiola is a biologist specializing in ecology and sustainable development, with 10+ years of expertise in consulting, corporate strategy, and environmental project management.",
        arm_role: "Co-founder & Senior Consultant",
        arm_desc: "Armando is a biologist with 8+ years of experience in environmental management, biodiversity, and waste management. He leads the implementation of practical environmental programs.",
        diff_main_title: "What Makes Green On Different",
        diff_1_title: "Strategy grounded in implementation",
        diff_1_desc: "We don’t just deliver reports; we design strategies that can actually be executed. Our background in project management and operations means we understand the internal challenges of change management, resource allocation, and technical feasibility.",
        diff_2_title: "Technical expertise with business context",
        diff_2_desc: "We bridge the gap between complex environmental data and business decision-making. We translate emissions factors, regulatory requirements, and technical standards into clear priorities and business opportunities.",
        diff_3_title: "Flexible support",
        diff_3_desc: "Every organization is at a different stage. We offer modular advisory that adapts to your needs—whether you need a full carbon strategy, support for a specific disclosure report, or technical guidance for an environmental program.",
        about_cta_title: "Would you like to know more about how we work?",
        serv_main_title: "Our Comprehensive Services",
        serv_main_desc: "We support organizations at every stage of their sustainability journey with absolute technical rigor.",
        s1_title: "Sustainability, Reporting & Readiness Assessment",
        s1_desc: "Understand where your organization currently stands and what it needs to move forward. We assess your existing practices, data, documentation and internal capabilities to identify gaps, risks and opportunities across key sustainability areas.",
        s1_sum_label: "Services & Deliverables included (+)",
        s1_list: `
            <li>• Sustainability baseline assessments.</li>
            <li>• Carbon footprint and GHG inventory readiness assessments.</li>
            <li>• Materiality and double materiality assessments.</li>
            <li>• Climate risk and resilience assessments.</li>
            <li>• IFRS S1 and IFRS S2 readiness assessments.</li>
            <li>• Reporting readiness assessments.</li>
            <li>• Sustainability data and documentation gap analysis.</li>
            <li>• Governance, roles and internal capacity assessments.</li>
            <li>• Certification and environmental program readiness.</li>
            <li>• Waste, water, energy and resource efficiency diagnostics.</li>
            <li>• Sustainable procurement and supply chain assessments.</li>
            <li>• Recommendations and prioritized action plans.</li>
        `,
        s2_title: "Sustainability Strategy & Roadmap",
        s2_desc: "Transform sustainability goals into a practical and achievable plan. We help organizations define priorities, objectives, responsibilities, indicators and implementation timelines that connect sustainability initiatives with business needs.",
        s2_sum_label: "Services & Deliverables included (+)",
        s2_list: `
            <li>• Corporate sustainability strategies.</li>
            <li>• Climate resilience and adaptation strategies.</li>
            <li>• Decarbonization strategies and Carbon Management Plans.</li>
            <li>• SBTi emissions reduction roadmaps.</li>
            <li>• Circular economy strategies and waste reduction plans.</li>
            <li>• Sustainable procurement and mobility strategies.</li>
            <li>• Water and energy efficiency roadmaps.</li>
            <li>• Biodiversity and nature-related action plans.</li>
            <li>• Sustainability governance models and ESG objectives.</li>
            <li>• Short-, medium- and long-term sustainability roadmaps.</li>
        `,
        s3_title: "Sustainability Reporting & Disclosure",
        s3_desc: "Communicate your sustainability performance with clarity, credibility and purpose. We support organizations in collecting and organizing information, defining indicators and developing reports that respond to stakeholder expectations.",
        s3_sum_label: "Services & Deliverables included (+)",
        s3_list: `
            <li>• GRI-aligned and ESRS-aligned sustainability reports.</li>
            <li>• IFRS S1 and IFRS S2 disclosure support.</li>
            <li>• Carbon footprint and emissions reports.</li>
            <li>• ESG indicator frameworks and data consolidation.</li>
            <li>• Stakeholder and materiality information integration.</li>
            <li>• Report content development and technical writing.</li>
            <li>• Customized reports for clients, investors or internal teams.</li>
        `,
        s4_title: "Certifications & Environmental Programs",
        s4_desc: "Move from commitments to implementation. We guide organizations through the development, documentation and management of sustainability certifications and environmental recognitions.",
        s4_sum_label: "Programs & Recognitions included (+)",
        s4_list: `
            <li>• Programa País Carbono Neutralidad 2.0 (PCCN).</li>
            <li>• Bandera Azul Ecológica (PBAE).</li>
            <li>• Esencial Costa Rica.</li>
            <li>• Greenhouse gas inventories and reduction programs.</li>
            <li>• Water, energy and waste management efficiency programs.</li>
            <li>• Biodiversity conservation and environmental education.</li>
            <li>• Preparation for audits, evaluations and verification processes.</li>
        `,
        s5_title: "Custom Training & Workshops",
        s5_desc: "Build sustainability knowledge, engagement and practical capabilities across your organization. Delivered virtually or in person with practical business cases.",
        s5_sum_label: "Training topics included (+)",
        s5_list: `
            <li>• Double materiality workshops.</li>
            <li>• Value chain assessment workshops.</li>
            <li>• How to develop a sustainability report.</li>
            <li>• Carbon footprint and emissions basics.</li>
            <li>• Supplier engagement and sustainable procurement.</li>
        `,
        s6_title: "Custom Sustainability Tools & Resources",
        s6_desc: "Turn complex sustainability requirements into practical and easy-to-use solutions. We design customized tools, templates and resources that help organizations manage data efficiently.",
        s6_sum_label: "Tools included (+)",
        s6_list: `
            <li>• Waste management program guides.</li>
            <li>• Emissions data collection templates.</li>
            <li>• Supplier sustainability evaluation templates.</li>
            <li>• Greenhouse gas inventory support templates.</li>
            <li>• Reporting and disclosure preparation checklists.</li>
        `,
        star_tag: "Star Package",
        star_title: "Sustainability Foundations Program",
        star_desc: "Build a strong and credible sustainability foundation through one integrated program. We combine sustainability strategy with the implementation of Carbon Neutrality, Bandera Azul Ecológica and Esencial Costa Rica, ensuring a coherent business vision and long-term resilience.",
        serv_cta_title: "Need a tailored service for your company?",
        serv_cta_desc: "Let's discuss your technical needs and design the right pathway.",
        email_label: "Email Address",
        phone_label: "Phone / WhatsApp",
        contact_main_title: "Let's Discuss the Future of Your Organization",
        contact_main_desc: "We are based in Alajuela, Costa Rica. Get in touch directly or schedule a strategic session."
    }
};

function switchLanguage(lang) {
    localStorage.setItem('preferred_lang', lang);

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });

    const btnEs = document.getElementById('btn-es');
    const btnEn = document.getElementById('btn-en');

    if (lang === 'en') {
        if(btnEn) btnEn.className = "px-2.5 py-0.5 rounded-full bg-consulting-dark text-white transition";
        if(btnEs) btnEs.className = "px-2.5 py-0.5 rounded-full hover:text-consulting-dark transition";
        document.documentElement.setAttribute('lang', 'en');
    } else {
        if(btnEs) btnEs.className = "px-2.5 py-0.5 rounded-full bg-consulting-dark text-white transition";
        if(btnEn) btnEn.className = "px-2.5 py-0.5 rounded-full hover:text-consulting-dark transition";
        document.documentElement.setAttribute('lang', 'es');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred_lang') || 'en';
    switchLanguage(savedLang);
});
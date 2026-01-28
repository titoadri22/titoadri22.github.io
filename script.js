// DOM Elements
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Theme Toggle Logic
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
}

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

// Toggle Menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');

    // Accessibility
    const isExpanded = navToggle.classList.contains('active');
    navToggle.setAttribute('aria-expanded', isExpanded);
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Active link on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active-link');
        }
    });
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.skill-card, .project-card, .contact-item');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initial state for reveal elements
revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('scroll', revealOnScroll);

// Contact Form Handler
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulate form submission
    const btn = contactForm.querySelector('button');
    const originalText = btn.innerHTML;

    btn.innerHTML = 'Enviando...';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = `
            <span>¡Mensaje Enviado!</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
            </svg>
        `;
        btn.style.backgroundColor = '#10B981'; // Green for success

        contactForm.reset();

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
            btn.style.backgroundColor = '';
        }, 3000);
    }, 1500);
});

// Translations
const translations = {
    es: {
        'nav.home': 'Inicio',
        'nav.about': 'Sobre mí',
        'nav.skills': 'Habilidades',
        'nav.projects': 'Proyectos',
        'nav.contact': 'Contacto',
        'hero.greeting': 'Hola, soy',
        'hero.role': 'Desarrollador Web',
        'hero.desc': 'Estudiante de 2º DAM apasionado por crear experiencias web excepcionales. Transformo ideas en realidad digital.',
        'hero.projects': 'Ver Proyectos',
        'hero.cv': 'Descargar CV',
        'about.title': 'Sobre mí',
        'about.intro': 'Soy <strong>Adrian Revert Escutia</strong>, estudiante de 2º de Desarrollo de Aplicaciones Multiplataforma y creador de soluciones web.',
        'timeline.present.title': 'Desarrollo Web & Búsqueda Activa',
        'timeline.present.desc': 'Actualmente cursando DAM mientras desarrollo webs Freelance y sigo aprendiendo nuevas tecnologías en busca de oportunidades laborales.',
        'timeline.freelance.title': 'Proyectos Reales & Freelance',
        'timeline.freelance.desc': 'Desarrollo de webs corporativas para Martinca, Vitalsport y profesionales del sector.',
        'timeline.dam.title': '2º DAM + Formación Autodidacta',
        'timeline.dam.desc': 'Profundizando en Java, Bases de Datos y descubriendo mi pasión por el Desarrollo Frontend.',
        'stats.dam': 'DAM',
        'stats.projects': 'Proyectos',
        'stats.passion': 'Pasión',
        'skills.title': 'Habilidades Técnicas',
        'skills.subtitle': 'Tecnologías y herramientas que domino',
        'skills.html': 'Estructura semántica y accesible',
        'skills.css': 'Diseños modernos y responsive',
        'skills.js': 'Interactividad y funcionalidad',
        'skills.git': 'Control de versiones',
        'skills.responsive': 'Mobile-first approach',
        'skills.english': 'Nivel B2 Certificado - Comunicación fluida',
        'services.title': 'Mis Servicios',
        'services.subtitle': 'Soluciones profesionales adaptadas a tu negocio',
        'services.web.title': 'Desarrollo Web & Landing Pages',
        'services.web.desc': 'Diseño y codificación de sitios web modernos, rápidos y optimizados para dispositivos móviles (HTML5, CSS3, JS).',
        'services.maint.title': 'Mantenimiento Web',
        'services.maint.desc': 'Actualizaciones de contenido, copias de seguridad y pequeñas mejoras para que tu web esté siempre al día y segura.',
        'services.seo.title': 'Optimización & SEO',
        'services.seo.desc': 'Mejora de rendimiento para tiempos de carga rápidos y estructura optimizada para que Google ame tu web.',
        'projects.title': 'Proyectos Destacados',
        'projects.subtitle': 'Algunos de los trabajos que he realizado',
        'projects.view': 'Ver Proyecto',
        'contact.title': '¿Tienes una idea en mente?',
        'contact.subtitle': 'Ya sea una web corporativa, una landing page o un proyecto personal, estoy listo para hacerlo realidad. ¡Hablemos!',
        'contact.form.name': 'Nombre',
        'contact.form.email': 'Email',
        'contact.form.message': 'Mensaje',
        'contact.send': 'Enviar Mensaje',
        'contact.sent': '¡Mensaje Enviado!',
        'contact.sending': 'Enviando...',
        'footer.text': '&copy; 2026 Adrian Revert Escutia. Hecho con pasión y mucho café ☕',
        'footer.back': 'Volver arriba'
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About Me',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'hero.greeting': 'Hi, I am',
        'hero.role': 'Web Developer',
        'hero.desc': '2nd year DAM student passionate about creating exceptional web experiences. Turning ideas into digital reality.',
        'hero.projects': 'View Projects',
        'hero.cv': 'Download CV',
        'about.title': 'About Me',
        'about.intro': 'I am <strong>Adrian Revert Escutia</strong>, a Multiplatform App Development student and web solution creator.',
        'timeline.present.title': 'Web Development & Active Search',
        'timeline.present.desc': 'Currently studying DAM while developing Freelance websites and learning new technologies, looking for job opportunities.',
        'timeline.freelance.title': 'Real Projects & Freelance',
        'timeline.freelance.desc': 'Development of corporate websites for Martinca, Vitalsport, and industry professionals.',
        'timeline.dam.title': '2nd Year DAM + Self-taught',
        'timeline.dam.desc': 'Deepening knowledge in Java, Databases, and discovering my passion for Frontend Development.',
        'stats.dam': 'DAM',
        'stats.projects': 'Projects',
        'stats.passion': 'Passion',
        'skills.title': 'Technical Skills',
        'skills.subtitle': 'Technologies and tools I master',
        'skills.html': 'Semantic and accessible structure',
        'skills.css': 'Modern and responsive designs',
        'skills.js': 'Interactivity and functionality',
        'skills.git': 'Version control',
        'skills.responsive': 'Mobile-first approach',
        'skills.english': 'Certified B2 Level - Fluent communication',
        'services.title': 'My Services',
        'services.subtitle': 'Professional solutions adapted to your business',
        'services.web.title': 'Web Development & Landing Pages',
        'services.web.desc': 'Design and coding of modern, fast, and mobile-optimized websites (HTML5, CSS3, JS).',
        'services.maint.title': 'Web Maintenance',
        'services.maint.desc': 'Content updates, backups, and small improvements to keep your site always up to date and secure.',
        'services.seo.title': 'Optimization & SEO',
        'services.seo.desc': 'Performance improvement for fast load times and optimized structure so Google loves your site.',
        'projects.title': 'Featured Projects',
        'projects.subtitle': 'Some of the work I have done',
        'projects.view': 'View Project',
        'contact.title': 'Have an idea in mind?',
        'contact.subtitle': 'Whether it\'s a corporate website, a landing page, or a personal project, I\'m ready to make it happen. Let\'s talk!',
        'contact.form.name': 'Name',
        'contact.form.email': 'Email',
        'contact.form.message': 'Message',
        'contact.send': 'Send Message',
        'contact.sent': 'Message Sent!',
        'contact.sending': 'Sending...',
        'footer.text': '&copy; 2026 Adrian Revert Escutia. Made with passion and lots of coffee ☕',
        'footer.back': 'Back to top'
    }
};

// Language Toggle Logic
const langToggle = document.getElementById('langToggle');
const langText = langToggle.querySelector('.lang-text');
let currentLang = localStorage.getItem('lang') || 'es';

// Initialize Language
function updateLanguage(lang) {
    // Update button text
    langText.textContent = lang.toUpperCase();

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Check if element has child elements that need to be preserved (like <strong>)
            if (element.children.length > 0 && key === 'about.intro') {
                element.innerHTML = translations[lang][key];
            } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                // Should update placeholder? No, label is used for floating label effect
                // But let's check if we have specific placeholders or if we just update siblings content
                // For this design, we rely on labels
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Save preference
    localStorage.setItem('lang', lang);
    currentLang = lang;
}

langToggle.addEventListener('click', () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    updateLanguage(newLang);
});

// Initial call
updateLanguage(currentLang);



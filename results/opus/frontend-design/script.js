/* ============================================
   CONSCIENTIZAÇÃO EVANGELÍSTICA - Scripts
   Skill: frontend-design
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // === Mobile Menu ===
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('mobile-menu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('active');
            toggle.setAttribute('aria-expanded', isOpen);
            toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
        });

        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // === Navbar Scroll ===
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const check = () => navbar.classList.toggle('scrolled', window.scrollY > 50);
        window.addEventListener('scroll', check, { passive: true });
        check();
    }

    // === Scroll Reveal (staggered 80–120ms for editorial feel) ===
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const siblings = Array.from(entry.target.parentElement?.children || [])
                            .filter(el => el.classList.contains('reveal'));
                        const idx = siblings.indexOf(entry.target);
                        const delay = idx >= 0 ? idx * 100 : 0; // 100ms stagger (editorial)

                        setTimeout(() => entry.target.classList.add('visible'), delay);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
        );
        reveals.forEach(el => observer.observe(el));
    } else {
        reveals.forEach(el => el.classList.add('visible'));
    }

    // === FAQ Accordion ===
    document.querySelectorAll('.faq-item').forEach(item => {
        const btn = item.querySelector('.faq-q');
        if (!btn) return;

        btn.addEventListener('click', () => {
            const wasActive = item.classList.contains('active');

            document.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('active');
                const b = i.querySelector('.faq-q');
                if (b) b.setAttribute('aria-expanded', 'false');
            });

            if (!wasActive) {
                item.classList.add('active');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // === Smooth Scroll ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const id = anchor.getAttribute('href');
            if (!id || id === '#') return;
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

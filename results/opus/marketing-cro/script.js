/* ============================================
   CONSCIENTIZAÇÃO EVANGELÍSTICA - Scripts
   Skill: marketing-cro
   Focus: Conversion Rate Optimization
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

    // === CRO: Sticky CTA Bar + Navbar swap ===
    // Show sticky bar when user scrolls past hero, hide main navbar
    const stickyBar = document.getElementById('sticky-bar');
    const navbar = document.getElementById('navbar');
    const hero = document.querySelector('.hero');

    if (stickyBar && navbar && hero) {
        const heroEnd = () => hero.offsetTop + hero.offsetHeight - 100;

        const onScroll = () => {
            const scrolled = window.scrollY > heroEnd();
            stickyBar.classList.toggle('visible', scrolled);
            navbar.classList.toggle('hide', scrolled);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // === Scroll Reveal ===
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const siblings = Array.from(entry.target.parentElement?.children || [])
                            .filter(el => el.classList.contains('reveal'));
                        const idx = siblings.indexOf(entry.target);
                        const delay = idx >= 0 ? idx * 60 : 0;

                        setTimeout(() => entry.target.classList.add('visible'), delay);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
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

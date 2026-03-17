/* ============================================
   CONSCIENTIZAÇÃO EVANGELÍSTICA - Scripts
   Skill: ui-ux-pro-max
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const ATTRIBUTION_STORAGE_KEY = 'winner-site-attribution';

    const normalizeValue = (value) => {
        if (!value) return '';

        return value
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9_-]+/g, '-')
            .replace(/^-+|-+$/g, '')
            .slice(0, 64);
    };

    const getCurrentAttribution = () => {
        const url = new URL(window.location.href);
        const source = normalizeValue(url.searchParams.get('src'));
        const qrLabel = normalizeValue(url.searchParams.get('qr_label'));
        const utmSource = normalizeValue(url.searchParams.get('utm_source'));
        const utmMedium = normalizeValue(url.searchParams.get('utm_medium'));
        const utmCampaign = normalizeValue(url.searchParams.get('utm_campaign'));
        const utmContent = normalizeValue(url.searchParams.get('utm_content'));

        if (!source && !qrLabel && !utmSource && !utmMedium && !utmCampaign && !utmContent) {
            return null;
        }

        return {
            src: source || 'qrcode',
            qr_label: qrLabel || 'qrcode',
            utm_source: utmSource || 'qrcode',
            utm_medium: utmMedium || 'offline',
            utm_campaign: utmCampaign || 'conscientizacao_evangelistica_2026',
            utm_content: utmContent || qrLabel || 'qrcode'
        };
    };

    const readSavedAttribution = () => {
        try {
            const rawValue = window.localStorage.getItem(ATTRIBUTION_STORAGE_KEY);
            return rawValue ? JSON.parse(rawValue) : null;
        } catch (error) {
            return null;
        }
    };

    const saveAttribution = (attribution) => {
        if (!attribution) return;

        try {
            window.localStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(attribution));
        } catch (error) {
            // Ignore storage failures and keep navigation working.
        }
    };

    const attribution = getCurrentAttribution() || readSavedAttribution();
    saveAttribution(attribution);

    // === Mobile Menu Toggle ===
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('mobile-menu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('active');
            toggle.setAttribute('aria-expanded', isOpen);
            toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
        });

        // Close menu on link click
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
                toggle.setAttribute('aria-label', 'Abrir menu');
            });
        });
    }

    // === Navbar Scroll State ===
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const onScroll = () => {
            navbar.classList.toggle('scrolled', window.scrollY > 60);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // === Scroll Reveal (IntersectionObserver) ===
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length > 0 && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        // Stagger delay based on element index within batch
                        const siblings = Array.from(entry.target.parentElement?.children || [])
                            .filter(el => el.classList.contains('reveal'));
                        const siblingIndex = siblings.indexOf(entry.target);
                        const delay = siblingIndex >= 0 ? siblingIndex * 80 : 0;

                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, delay);

                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );

        reveals.forEach(el => observer.observe(el));
    } else {
        // Fallback: show all
        reveals.forEach(el => el.classList.add('visible'));
    }

    // === FAQ Toggle ===
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-item__question');
        if (!btn) return;

        btn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all
            faqItems.forEach(i => {
                i.classList.remove('active');
                const b = i.querySelector('.faq-item__question');
                if (b) b.setAttribute('aria-expanded', 'false');
            });

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // === Copy Pix Key ===
    const copyText = async (text) => {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return;
        }

        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.setAttribute('readonly', '');
        textArea.style.position = 'absolute';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();

        const copied = document.execCommand('copy');
        document.body.removeChild(textArea);

        if (!copied) {
            throw new Error('Clipboard indisponivel');
        }
    };

    document.querySelectorAll('[data-copy-pix]').forEach((button) => {
        const pixKey = button.getAttribute('data-copy-pix');
        const statusId = button.getAttribute('aria-describedby');
        const statusEl = statusId ? document.getElementById(statusId) : null;
        let resetTimer = null;

        button.addEventListener('click', async () => {
            if (!pixKey) return;

            try {
                await copyText(pixKey);
                button.classList.add('is-copied');

                if (statusEl) {
                    statusEl.textContent = 'Chave Pix copiada. Abra seu banco e cole a chave Pix.';
                }

                window.clearTimeout(resetTimer);
                resetTimer = window.setTimeout(() => {
                    button.classList.remove('is-copied');
                }, 2200);
            } catch (error) {
                if (statusEl) {
                    statusEl.textContent = 'Nao foi possivel copiar automaticamente. Copie manualmente: 21977336783.';
                }
            }
        });
    });

    // === Smooth scroll for anchor links ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                target.focus({ preventScroll: true });
            }
        });
    });
});

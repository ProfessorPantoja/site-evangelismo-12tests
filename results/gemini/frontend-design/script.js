// Frontend Design - Editorial Motion Script

document.addEventListener('DOMContentLoaded', () => {
    // Revelação Suave (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    // Seleciona elementos para animar
    const animateElements = document.querySelectorAll('.text-col, .hero-grid, .main-verse, .cta-block');
    animateElements.forEach(el => {
        el.classList.add('fade-up');
        observer.observe(el);
    });

    // Log de Estilo
    console.log('Skill: Frontend Design | Aesthetic: Editorial Magazine');
});

// Adiciona estilos de animação via JS para manter o CSS limpo
const style = document.createElement('style');
style.textContent = `
    .fade-up {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .fade-up.in-view {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Gemini Evolved - UI/UX Pro Max Script

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out-cubic',
        once: true,
        mirror: false
    });

    // Efeito Magnético sutil nos botões
    const buttons = document.querySelectorAll('.btn-main-evolved, .btn-primary, .btn-giant');
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const position = btn.getBoundingClientRect();
            const x = e.pageX - position.left - window.scrollX;
            const y = e.pageY - position.top - window.scrollY;

            btn.style.transform = `translate(${(x - position.width / 2) / 4}px, ${(y - position.height / 2) / 4}px)`;
        });

        btn.addEventListener('mouseout', () => {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });

    // Simulação de preenchimento da barra de vagas
    const barFill = document.querySelector('.bar-fill');
    if (barFill) {
        setTimeout(() => {
            barFill.style.width = '88%'; // Exemplo de preenchimento
        }, 1500);
    }

    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

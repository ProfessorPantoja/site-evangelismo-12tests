// Gemini Evolved - Dynamic Frontend Script

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa AOS
    AOS.init({
        duration: 800,
        easing: 'ease-out-quad',
        once: false
    });

    // Cursor Glow Effect
    const glow = document.querySelector('.cursor-glow');
    
    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });

    // Efeito de Parallax suave no Hero Image
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        const imgFrame = document.querySelector('.img-frame');
        
        if(imgFrame) {
            imgFrame.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });

    // Log de inicialização
    console.log('Skill: Frontend Design Evoluída | Tema: Dynamic Dark');
});

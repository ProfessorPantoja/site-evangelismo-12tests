// Gemini Evolved - Marketing & CRO V2 Script

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa AOS
    AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true
    });

    // Simulação de preenchimento de vagas dinâmico
    const scarcityDisplay = document.querySelector('.scarcity-hero');
    let currentVagas = 88;
    
    const updateVagas = () => {
        if (currentVagas < 98) {
            currentVagas += Math.floor(Math.random() * 2);
            if(scarcityDisplay) {
                scarcityDisplay.innerHTML = `⚠️ Apenas 100 vagas disponíveis (${currentVagas} preenchidas)`;
            }
        }
    };

    // Atualiza a cada 20 segundos para criar urgência real
    setInterval(updateVagas, 20000);

    // Efeito de pulso extra no botão principal ao rolar
    const mainBtn = document.querySelector('.btn-primary-cro-v2.giant');
    window.addEventListener('scroll', () => {
        const rect = mainBtn.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            mainBtn.classList.add('shake');
        } else {
            mainBtn.classList.remove('shake');
        }
    });

    console.log('Skill: Marketing & CRO Evoluída | Estratégia: Aggressive Urgency');
});

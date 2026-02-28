// Marketing & CRO - Scripts de Conversão

document.addEventListener('DOMContentLoaded', () => {
    // Simulação de contador de escassez
    const scarcityText = document.querySelector('.scarcity-text');
    if (scarcityText) {
        let count = 87; // Número inicial de inscritos (simulado)
        const updateScarcity = () => {
            if (count < 96) {
                count += Math.floor(Math.random() * 2);
                scarcityText.innerHTML = `⚠️ Restam apenas <strong>${100 - count}</strong> das 100 vagas disponíveis.`;
            }
        };
        setInterval(updateScarcity, 15000); // Atualiza a cada 15s
    }

    // Rastreamento de clique no CTA (Log)
    document.querySelectorAll('.btn-primary-cro, .btn-nav').forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('Evento de Conversão: Clique no botão de inscrição.');
        });
    });

    console.log('Skill: Marketing & CRO | Estratégia: Escassez e Proposta de Valor');
});

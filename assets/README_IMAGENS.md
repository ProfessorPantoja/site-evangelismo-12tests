# Briefing de Imagens - Gemini Evolved (Opções A e B)

Este documento descreve as imagens necessárias para testar duas variações visuais (V1 e V2) na estrutura **Gemini Evolved**. 

As dimensões abaixo são pensadas para o **Layout Assimétrico** e o **Grid Dinâmico** das versões evoluídas.

---

## 🛠 Especificações Técnicas (Válidas para V1 e V2)

Para que as imagens encaixem perfeitamente no layout, tente seguir estas dimensões:

1.  **hero.jpg** (1200x800px - Horizontal)
    *   Utilizada no cabeçalho assimétrico. 
    *   Dica: Imagens com o assunto principal levemente deslocado para a direita funcionam melhor.

2.  **pastor.jpg** (800x1200px - Vertical/Portrait)
    *   Utilizada na seção de Ministrante. 
    *   Dica: Um retrato vertical (estilo revista) dá o peso necessário ao layout.

3.  **detalhe.jpg** (600x600px - Quadrada)
    *   Utilizada na seção de Propósito (imagem flutuante).
    *   Dica: Fotos de detalhes (Bíblia, mãos, pessoas conversando).

4.  **mapa.jpg** (1000x500px - Panorâmica)
    *   Utilizada na seção de Localização como fundo ou placeholder do mapa.

---

## 📂 Pasta: `assets/v1/` (Opção "Clássica/Sóbria")
*Sugestão de Estilo: Cores naturais, luz suave, ambiente de reverência.*

- **hero_v1.jpg:** Campo de trigo ao entardecer ou interior da igreja com luz natural.
- **pastor_v1.jpg:** Foto posada, fundo neutro ou biblioteca.
- **detalhe_v1.jpg:** Mãos segurando Bíblia ou cruz de madeira.

---

## 📂 Pasta: `assets/v2/` (Opção "Moderna/Impactante")
*Sugestão de Estilo: Cores vibrantes, ângulos dinâmicos, luz de estúdio ou neon.*

- **hero_v2.jpg:** Globo terrestre digital ou silhueta de multidão com luzes de palco.
- **pastor_v2.jpg:** Foto em ação (pregando) ou com iluminação dramática.
- **detalhe_v2.jpg:** Grupo de jovens conversando ou close em um tablet com a Bíblia aberta.

---

## 🚀 Como testar:
Eu preparei o código para ler da pasta `assets/v1/` por padrão. Quando você quiser trocar para a "V2", eu farei uma alteração rápida nos caminhos para você comparar o impacto visual.

# Conscientização Evangelística — Landing Page (frontend-design)

## Skill Utilizada
**frontend-design** — Interfaces com alta qualidade de design, direção estética forte e gestual memorável.

## Arquivos
| Arquivo | Descrição |
|---------|-----------|
| `index.html` | Estrutura semântica editorial |
| `style.css` | Aesthetic Editorial/Magazine com paper-grain |
| `script.js` | Interações (menu, FAQ, scroll reveal) |
| `README.md` | Este arquivo |

## Decisões de Design e Conversão

### Direção Estética: Editorial / Magazine
- **Inspiração**: aesthetic-playbook.md → Editorial / Magazine
- **Gesture Signature**: Paper-grain texture + pull-quotes com borda dourada
- **Paleta**: Cream quente (#faf5ee) + terracota (#b8462b) + dourado (#c49a4e) — acolhedor e reverente
- **Tipografia**: Cormorant Garamond (serif display) + DM Sans (body) + DM Mono (labels) — layout editorial clássico

### Elementos Visuais
- Cards numerados no estilo magazine (01, 02, 03)
- Eyebrow labels com linha horizontal (—)
- Pull-quote com barra lateral dourada
- Sidebar vertical no hero (desktop) com metadados
- Hairline rules entre seções

### Conversão
- **3× CTA "Inscreva-se"**: hero, banner mid-page, seção de inscrição
- Preço em destaque no card de inscrição
- Badge de vagas com pulsação
- Hierarquia visual clara de ações (primary vs ghost)

### Acessibilidade
- Skip navigation, ARIA labels, focus visible
- `prefers-reduced-motion` respeitado
- Contraste AA+ (terracota escuro sobre cream)
- Landmarks, headings hierárquicos, um `<h1>`

## Como Abrir Localmente

```bash
cd results/opus/frontend-design/
python3 -m http.server 8002
# ou
npx -y serve results/opus/frontend-design/ -l 8002
```

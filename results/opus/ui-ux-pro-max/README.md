# Conscientização Evangelística — Landing Page (ui-ux-pro-max)

## Skill Utilizada
**ui-ux-pro-max** — Design intelligence com foco em sistema de design completo, acessibilidade, tipografia e paleta de cores.

## Arquivos
| Arquivo | Descrição |
|---------|-----------|
| `index.html` | Estrutura semântica da landing page |
| `style.css` | Design system completo com tokens CSS |
| `script.js` | Interações (menu, FAQ, scroll reveal) |
| `README.md` | Este arquivo |

## Decisões de Design e Conversão

### Design System
- **Paleta**: Navy escuro (#0a0e1a) + dourado (#d4a853) — transmite reverência, elegância e espiritualidade
- **Tipografia**: Playfair Display (display/serif) + Inter (body/sans) — contraste clássico/moderno
- **Espaçamento**: Escala 4px com variáveis CSS para consistência
- **Raios/Sombras**: Definidos em tokens para reuso

### Conversão
- **3 CTAs "Inscreva-se"**: hero (topo), banner mid-page, seção de inscrição (final)
- **Urgência**: badge de vagas com animação de pulso
- **Preço destaque**: R$ 20,00 em tamanho grande com lista de benefícios inclusos
- **FALTA badges**: 8 campos marcados em vermelho para preenchimento posterior

### Acessibilidade
- Skip navigation link
- ARIA labels em todos os elementos interativos
- Focus visible em todos os elementos focáveis
- `prefers-reduced-motion` respeitado
- Contraste AA+ verificado
- Landmarks semânticos (nav, main, section, footer)
- Um único `<h1>`, hierarquia correta de headings

### Performance
- Fontes com `display=swap`
- Lazy loading no iframe do mapa
- CSS animations via transform/opacity (GPU-accelerated)
- Zero dependências externas

## Como Abrir Localmente

```bash
# Opção 1: Python
cd results/opus/ui-ux-pro-max/
python3 -m http.server 8001

# Opção 2: Node.js (npx)
npx -y serve results/opus/ui-ux-pro-max/ -l 8001

# Opção 3: Abrir direto no navegador
xdg-open results/opus/ui-ux-pro-max/index.html
```

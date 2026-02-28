# Conscientização Evangelística — Landing Page (marketing-cro)

## Skill Utilizada
**marketing-cro (page-cro)** — CRO expert focado em otimização de conversão.

## Arquivos
| Arquivo | Descrição |
|---------|-----------|
| `index.html` | Estrutura otimizada para conversão |
| `style.css` | Design limpo, alto contraste, CRO-focused |
| `script.js` | Sticky CTA bar, FAQ, scroll reveal |
| `README.md` | Este arquivo |

## Decisões de Design e Conversão

### Estratégia CRO Aplicada

1. **Value Prop em 5 segundos**: headline outcome-focused ("Aprenda a Evangelizar com Sabedoria e Amor") + chips de benefícios rápidos
2. **CTA sempre visível**: 4 pontos de CTA (hero, sticky bar, urgency banner, pricing card) + sticky bar que substitui a navbar após o hero
3. **Urgência**: badge "Apenas 100 vagas", banner de urgência com contador pulsante, label "Inscrição Única" no pricing card
4. **Social Proof**: barra de prova social com ministrante, igreja e organizadores
5. **Friction reduction**: "Inscrição rápida", "Pagamento via Pix", trust lock icon
6. **Pricing card**: layout tipo SaaS com features list, CTA full-width, trust signal

### Design
- **Paleta**: Branco limpo + vermelho (#c23b1e) CTA + verde trust (#1a7a4c) — máximo contraste
- **Tipografia**: Outfit (moderna, alta legibilidade) + Source Serif 4 (versículo) + IBM Plex Mono (labels)
- **Hero headline**: Outcome-focused (NÃO feature-focused) seguindo CRO best practice

### FALTA Badges
8 campos marcados: chave Pix, ônibus, título ministração, bio Pastor Marcos, programação, alimentação, certificado, WhatsApp

### Acessibilidade
- Skip nav, ARIA, focus visible, `prefers-reduced-motion`
- Touch targets 44px+, contraste AA+
- Landmarks semânticos, heading hierarchy

## Como Abrir Localmente

```bash
cd results/opus/marketing-cro/
python3 -m http.server 8003
# ou
npx -y serve results/opus/marketing-cro/ -l 8003
```

# Landing Page - CONSCIENTIZACAO EVANGELISTICA

Landing page premium e persuasiva, em HTML/CSS/JS puro, com foco em conversao para inscricao no evento.

## Arquivos

- `index.html`: estrutura semantica, secoes obrigatorias, copy e CTAs
- `style.css`: visual premium, mobile-first, responsivo, contraste e foco visivel
- `script.js`: microinteracoes leves com IntersectionObserver e ajuste visual do header

## Decisoes de CRO

- Proposta de valor clara na dobra inicial (tema, publico, data e beneficio)
- CTA `Inscreva-se` repetido no topo, meio e final para reduzir friccao
- Blocos escaneaveis (cards) com informacoes essenciais para decisao rapida
- FAQ para tratar objecoes comuns antes da acao
- Campos ausentes marcados explicitamente como `FALTA: ...` para evitar inventar dados

## Como abrir localmente

1. Abra a pasta `results/codex/marketing-cro/` no navegador.
2. Clique duas vezes em `index.html`.
3. Opcional: rode um servidor local simples:

```bash
cd results/codex/marketing-cro
python3 -m http.server 8080
```

Depois acesse: `http://localhost:8080`

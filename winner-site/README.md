# Winner Site (OPUS + ui-ux-pro-max)

Esta pasta contém a landing vencedora, isolada e pronta para um repositório próprio.

## Estrutura

- `index.html`
- `style.css`
- `script.js`
- `prompts/notebooklm/`
- `assets/v1/hero.png`
- `assets/v1/biblia.png`
- `assets/Video/Cruz1.mp4`

## Rodar local

```bash
cd winner-site
python3 -m http.server 4301
```

Abrir: `http://localhost:4301`

## Otimizar midia em um clique

```bash
cd winner-site
./scripts/optimize-media.sh
```

O script gera:

- `assets/v1/hero.webp`
- `assets/v1/biblia.webp`
- `assets/v1/pastor.webp`
- `assets/Video/Cruz1-optimized.mp4`

## Rastreamento de QR Code

Link pronto para gerar o QR Code principal:

```text
https://admpf-evangelismo-2026.vercel.app/qr
```

Link com identificador de origem fisica:

```text
https://admpf-evangelismo-2026.vercel.app/qr?label=cartaz-a
```

Fluxo configurado:

- `qr` registra a visita no log da Vercel e redireciona para a landing com origem `qrcode`
- a landing preserva essa origem no navegador
- os CTAs principais levam para a secao `#inscricao`
- a inscricao acontece no proprio site via fluxo `Pix + WhatsApp`

Observacao:

- a chave Pix oficial exibida na landing e `21977336783`
- o comprovante deve ser enviado para o WhatsApp da Diaconisa Marcia: `(21) 97733-6783`
- a confirmacao da vaga acontece pelo WhatsApp, sem Google Forms

## Publicar em um novo repositório

```bash
cd winner-site
git init
git add .
git commit -m "feat: initial winner landing"
git branch -M main
git remote add origin <URL_DO_NOVO_REPO>
git push -u origin main
```

## Publicar no Vercel

```bash
cd winner-site
npx -y vercel --prod
```

## Biblioteca de prompts

Prompts reutilizaveis para o NotebookLM ficam em:

```text
winner-site/prompts/notebooklm/
```

Padrao adotado:

- `GUIA_*.md`: direcao criativa
- `FONTE_*.md`: conteudo bruto
- `TEMPLATE_*.md`: base para novas variacoes
- `CHECKLIST_*.md`: criterio para avaliar resultados aprovados

Versionamento sugerido:

- manter a base aprovada
- criar variantes como `V2`, `V3` quando houver melhoria real

Estrategia atual:

- `V2`: tema `O CAMPO E O MUNDO` mais dominante
- `V3`: fusao entre a atmosfera do hero do site e a estrutura limpa do infografico

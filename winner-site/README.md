# Winner Site (OPUS + ui-ux-pro-max)

Esta pasta contém a landing vencedora, isolada e pronta para um repositório próprio.

## Estrutura

- `index.html`
- `style.css`
- `script.js`
- `assets/v1/hero.png`
- `assets/v1/biblia.png`
- `assets/Video/Cruz1.mp4`

## Rodar local

```bash
cd winner-site
python3 -m http.server 4301
```

Abrir: `http://localhost:4301`

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

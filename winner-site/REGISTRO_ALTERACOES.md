# Registro de Alteracoes - Winner Site

## 2026-03-01

1. Inclusao da foto e resumo do curriculo pastoral do ministrante.
Arquivos alterados:
- `winner-site/index.html`
- `winner-site/style.css`
- `winner-site/assets/v1/pastor.png`
Resumo:
- Inserida foto do Pr. Marcus Silva e resumo ministerial baseado no curriculo enviado.
- Mantido como pendencia apenas o titulo da ministracao.

2. Mapa atualizado com embed oficial informado pelo usuario.
Arquivos alterados:
- `winner-site/index.html`
Resumo:
- Substituido o `src` do iframe em "Como Chegar" para o novo embed do Google Maps da AD Ministerio Palavra e Fe.

3. Topo desafogado com CTA menor no header fixo.
Arquivos alterados:
- `winner-site/style.css`
Resumo:
- Reduzido tamanho visual do botao de inscricao no topo (padding, fonte e icone), mantendo visibilidade continua.
- Ajuste adicional para telas pequenas com CTA mais compacto.

4. Botao "Inscreva-se" do topo mantido em uma unica linha.
Arquivos alterados:
- `winner-site/style.css`
Resumo:
- Aplicado `white-space: nowrap` e `flex-shrink: 0` no CTA fixo do header para evitar quebra do texto.

5. Reordenacao das secoes para exibir o ministrante antes de "Como Chegar".
Arquivos alterados:
- `winner-site/index.html`
Resumo:
- Secao "Ministrante" movida para cima da secao "Como Chegar", mantendo o restante da pagina.

6. Logo da igreja no topo alterada de formato circular para retangular com cantos arredondados.
Arquivos alterados:
- `winner-site/style.css`
Resumo:
- Ajustado o estilo da `navbar__brand-logo` para largura maior, altura menor e bordas arredondadas retangulares.

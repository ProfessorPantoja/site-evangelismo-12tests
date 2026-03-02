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

7. Correcao da logo do topo para formato quadrado com cantos arredondados.
Arquivos alterados:
- `winner-site/style.css`
Resumo:
- Ajustado `navbar__brand-logo` para largura e altura iguais (quadrada), mantendo cantos arredondados.

8. Ajuste manual do usuario no tamanho da logo quadrada do topo.
Arquivos alterados:
- `winner-site/style.css`
Resumo:
- Logo mantida quadrada com cantos arredondados e dimensoes ajustadas para 40x40 no desktop e 34x34 no mobile.

9. Correcao do botao "Inscreva-se" dentro do menu mobile.
Arquivos alterados:
- `winner-site/style.css`
Resumo:
- Regras de links do menu mobile passaram a ignorar elementos `.btn`.
- Botao do menu mobile recebeu estilo dedicado para manter contraste, alinhamento central e padding correto.

10. Ajuste fino da logo no mobile para melhorar legibilidade no topo.
Arquivos alterados:
- `winner-site/style.css`
Resumo:
- Tamanho da `navbar__brand-logo` em telas ate 520px aumentado de 34x34 para 36x36, mantendo formato quadrado com cantos arredondados.

11. Ajuste manual do usuario para ampliar mais a logo no mobile.
Arquivos alterados:
- `winner-site/style.css`
Resumo:
- Tamanho da `navbar__brand-logo` em telas ate 520px aumentado de 36x36 para 42x42.

12. Ajuste de destaque real da logo no mobile (sem travar no visual anterior).
Arquivos alterados:
- `winner-site/style.css`
Resumo:
- Em telas ate 520px, a logo passou de 42x42 para 46x46.
- Reduzido padding interno da logo de 3px para 1px no mobile para aumentar a area visivel da arte.
- Ajustado o `gap` da marca para manter respiro horizontal no topo.

13. Aumento forte da logo no mobile com rebalanceamento do header.
Arquivos alterados:
- `winner-site/style.css`
Resumo:
- Em telas ate 520px, a logo passou de 46x46 para 56x56 para ganho visual claro.
- Header mobile teve padding reduzido para acomodar melhor a nova logo sem apertar o topo.
- Texto da marca foi levemente reduzido no mobile para manter proporcao e legibilidade.

# Registro de Alteracoes - Winner Site

## 2026-03-09

1. Requisito adicional da inscricao destacado no bloco de investimento.
Arquivos alterados:
- `winner-site/index.html`
- `winner-site/style.css`
- `winner-site/REGISTRO_ALTERACOES.md`
Resumo:
- Adicionado aviso proprio na secao `Vagas e Pagamento` informando que, alem do valor de R$ 20,00, cada participante deve levar 1 kg de alimento nao perecivel no dia do evento.
- Mensagem reforcada tambem na FAQ, no ponto em que o usuario consulta valor e forma de pagamento.
- Requisito do alimento tambem promovido para o hero em formato de selo destacado com icone, para ficar visivel ja na primeira dobra.
- Requisito repetido tambem em `Informacoes do Evento` e no bloco `Garanta Sua Vaga`, com textos curtos para manter clareza ao longo da pagina.
- Texto da contribuicao ajustado para deixar explicito que o quilo deve ser entregue no dia do evento.
- Texto do pagamento em dinheiro refinado para orientar preferencia por Pix com fallback manual.
- Linha `Lider de evangelizacao: atualmente nao ha` movida do rodape inferior para a lista de `Lideranca`.
- Secao nova abaixo do ministrante passou a resumir, em linguagem curada para landing page, os principais eixos do treinamento de evangelizacao.
- Texto dessa secao foi reaproximado da voz pastoral original, preservando termos-chave como `amor pelas almas`, `batalha espiritual na evangelizacao`, `como sair de situacoes inusitadas`, `falso evangelho`, `sob a uncao do Espirito Santo` e `evangelizacao para toda a igreja`.
- Criada biblioteca local de prompts em `winner-site/prompts/notebooklm/`, separando `GUIA`, `FONTE` e `TEMPLATE` para reaproveitamento futuro das artes geradas no NotebookLM.
- Adicionado checklist de avaliacao para decidir o que realmente vale reaproveitar em futuras geracoes.
- Guia do infografico passou a reforcar explicitamente o tema `O CAMPO E O MUNDO` como eixo criativo e conceitual.
- Hero recebeu destaque proprio para o tema `O Campo e o Mundo`, deixando a mensagem visivel como tema oficial do evento e nao apenas dentro do versiculo.
- Removida a mencao ao Diacono Marcos dos trechos de idealizacao exibidos no site.

## 2026-03-06

1. Pipeline local de otimizacao de midia em um clique.
Arquivos alterados:
- `winner-site/scripts/optimize-media.sh`
- `winner-site/index.html`
- `winner-site/style.css`
- `winner-site/README.md`
Resumo:
- Criado script local baseado em `ffmpeg` para converter imagens fotograficas em `webp` e gerar um MP4 otimizado para mobile.
- Landing ajustada para usar `hero.webp`, `biblia.webp`, `pastor.webp` e `Cruz1-optimized.mp4`, com fallback em `png` para a foto do ministrante.
- Objetivo: reduzir o peso inicial da pagina sem depender de ferramentas externas.

2. Alerta sonoro local para conclusao de tarefas no ambiente de trabalho.
Arquivos alterados:
- `scripts/task-done.sh`
Resumo:
- Criado script raiz para tocar um som de conclusao mais perceptivel ao fim das tarefas.
- Prioridade para `~/sounds/done.wav` quando existir, com fallback para sons do Linux Mint via `paplay` ou `canberra-gtk-play`.

3. Rastreamento de origem para acessos e cliques vindos de QR Code.
Arquivos alterados:
- `winner-site/api/qr.mjs`
- `winner-site/api/track-qr.mjs`
- `winner-site/api/track-register.mjs`
- `winner-site/api/_lib/attribution.mjs`
- `winner-site/index.html`
- `winner-site/script.js`
- `winner-site/README.md`
Resumo:
- Criadas rotas serverless na Vercel para registrar visitas pelo QR Code e cliques em inscricao.
- Landing passa a preservar a origem (`src=qrcode`, `qr_label`, `utm_*`) e a encaminhar os CTAs pelo endpoint de rastreamento.
- Link publico do QR padronizado como `/qr`, com suporte a variacoes por etiqueta fisica via `?label=...`.

4. Mapa operacional do caminho do usuario na inscricao + ativacao real do `/qr`.
Arquivos alterados:
- `winner-site/MAPA_CAMINHO_USUARIO_INSCRICAO.md`
- `winner-site/vercel.json`
Resumo:
- Criado documento de decisao focado no caminho do usuario, gargalos do formulario e recomendacoes de ordem pratica.
- Adicionado rewrite para tornar `/qr` uma rota publica valida na Vercel, sem expor `/api/qr` na arte do cartaz.

5. Consolidacao em arquivo do conteudo atual do Google Forms.
Arquivos alterados:
- `winner-site/FORMULARIO_ATUAL.md`
Resumo:
- Conteudo do formulario transcrito a partir da captura em `assets`, para consulta rapida sem depender do login Google.

6. Padronizacao do nome dos arquivos de captura do formulario.
Arquivos alterados:
- `assets/formulario-inscricao-atual.png`
- `assets/formulario-inscricao-atual.pdf`
- `winner-site/FORMULARIO_ATUAL.md`
Resumo:
- Capturas do Google Forms renomeadas para nomes curtos e claros, facilitando consulta e manutencao.

7. Atualizacao do resumo do formulario com a versao textual mais recente.
Arquivos alterados:
- `winner-site/FORMULARIO_ATUAL.md`
Resumo:
- Documento do formulario ajustado com base na transcricao manual mais recente informada pelo usuario, refletindo os detalhes novos do fluxo e do texto de confirmacao.

8. Formulario marcado como pronto com decisoes operacionais definidas.
Arquivos alterados:
- `winner-site/FORMULARIO_ATUAL.md`
Resumo:
- Registrado que o formulario seguira com login Google por enquanto.
- Confirmacao da inscricao definida como `pagamento + contato manual`.
- Upload do comprovante mantido como opcional por causa da friccao em celulares.
- Valor mantido em destaque na etapa de pagamento para reduzir erro de usuarios desatentos.

9. Ajustes de conteudo no site solicitados diretamente pela Diaconisa Marcia por ligacao telefonica.
Arquivos alterados:
- `winner-site/index.html`
Resumo:
- Adicionado no site que o evento inclui cafe da manha, almoco, lanche da tarde e certificado.
- Inserido no bloco "Sobre" o tema de como resolver situacoes inusitadas ao evangelizar.
- Secao de informacoes atualizada para reforcar que o treinamento dura o dia inteiro, com intervalos.
- Bloco de mapa/localizacao reforcado com a referencia da Passarela Engenho da Rainha sentido Centro e o aviso de que nao ha estacionamento.

10. Transporte simplificado no site conforme alinhamento com a Diaconisa Marcia.
Arquivos alterados:
- `winner-site/index.html`
Resumo:
- Removidos os numeros de onibus e o alerta vermelho de lista pendente.
- Site passou a orientar em varios pontos que nao ha vagas de carro e que o publico deve vir de metro ou onibus.
- Botao do mapa ajustado para enfatizar consulta de rota no Google Maps.

11. Ajuste visual final no bloco de estacionamento.
Arquivos alterados:
- `winner-site/index.html`
Resumo:
- Removido o destaque vermelho do texto "NÃO TEM estacionamento no local", mantendo a mensagem com o mesmo peso do restante da informacao.

12. Organizacao da pasta raiz `assets`.
Arquivos alterados:
- `assets/favicons/favicon-16.png`
- `assets/favicons/favicon-32.png`
- `assets/favicons/favicon-48.png`
- `assets/favicons/favicon.ico`
- `assets/formularios/formulario-inscricao-atual.png`
- `assets/formularios/formulario-inscricao-atual.pdf`
- `winner-site/FORMULARIO_ATUAL.md`
Resumo:
- Favicons agrupados em `assets/favicons/`.
- Capturas do formulario agrupadas em `assets/formularios/`.
- Referencias documentais ajustadas para os novos caminhos.

13. Favicons e metadados de compartilhamento configurados na landing vencedora.
Arquivos alterados:
- `winner-site/index.html`
- `winner-site/assets/favicons/favicon-16.png`
- `winner-site/assets/favicons/favicon-32.png`
- `winner-site/assets/favicons/favicon-48.png`
- `winner-site/assets/og/og-evento.jpg`
Resumo:
- Favicons adicionados dentro da pasta publicada da `winner-site`.
- Metadados Open Graph e Twitter Card configurados para melhorar preview no WhatsApp e redes sociais.
- Usada como imagem principal de compartilhamento a arte hero do evento, em vez da logo isolada.

14. Pendencias de Pix e WhatsApp substituidas por informacoes finais no site.
Arquivos alterados:
- `winner-site/index.html`
Resumo:
- Bloco de pagamento atualizado para informar que a chave Pix esta no formulario de inscricao, com link sutil para o form.
- Placeholder do WhatsApp oficial removido e substituido pelo numero `(21) 97733-6783`.

15. FAQ atualizada para responder de forma direta sobre alimentacao inclusa.
Arquivos alterados:
- `winner-site/index.html`
Resumo:
- Adicionada pergunta especifica na FAQ informando que o investimento inclui cafe da manha, almoco, lanche da tarde e certificado.

16. Ajustes finos de clareza no site para mobile e localizacao.
Arquivos alterados:
- `winner-site/index.html`
- `winner-site/style.css`
Resumo:
- Removido o texto "Nao obrigatorio" do bloco de comprovante.
- CTA intermediaria de inscricao refinada para mobile, evitando quebra estranha do botao.
- Frase sobre ausencia de estacionamento destacada com mais espaco visual na secao "Como Chegar".

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

14. Enquadramento da logo no mobile para ocupar melhor a area marcada no topo.
Arquivos alterados:
- `winner-site/style.css`
Resumo:
- No mobile, `navbar__brand-logo` passou a usar `object-fit: cover` com `object-position: center 16%`.
- Mantido tamanho 56x56, com foco visual maior no simbolo da logo dentro do quadrado.

15. Reducao da logo no mobile para equilibrio visual do topo.
Arquivos alterados:
- `winner-site/style.css`
Resumo:
- Tamanho da `navbar__brand-logo` em telas ate 520px reduzido de 56x56 para 46x46.
- Mantido enquadramento com `object-fit: cover` e `object-position: center 16%`.

16. Ajuste final solicitado: reducao adicional de 6px na logo mobile.
Arquivos alterados:
- `winner-site/style.css`
Resumo:
- Tamanho da `navbar__brand-logo` em telas ate 520px reduzido de 46x46 para 40x40.
- Mantido enquadramento com `object-fit: cover` e `object-position: center 16%`.

17. Ajuste fino adicional para reduzir levemente a logo no mobile.
Arquivos alterados:
- `winner-site/style.css`
Resumo:
- Tamanho da `navbar__brand-logo` em telas ate 520px reduzido de 40x40 para 38x38.
- Mantido enquadramento com `object-fit: cover` e `object-position: center 16%`.

18. Aumento leve da barra superior no mobile para mais respiro visual.
Arquivos alterados:
- `winner-site/style.css`
Resumo:
- A `navbar` em telas ate 520px recebeu padding vertical maior (`space-3`) e `min-height: 64px`.
- Objetivo: dar mais altura para a barra da logo/CTA/menu sem perder proporcao.

19. Reducao adicional do botao fixo "Inscreva-se" na navbar mobile.
Arquivos alterados:
- `winner-site/style.css`
Resumo:
- Em telas ate 520px, o `navbar__cta` ficou mais discreto (padding e fonte menores).
- Novo ajuste: `padding: 0.26rem 0.56rem`, `font-size: 0.64rem`, `letter-spacing: 0.03em`.

20. Respiro interno da logo da igreja na navbar mobile.
Arquivos alterados:
- `winner-site/style.css`
Resumo:
- Aplicado `padding: 2px` na `navbar__brand-logo` em telas ate 520px para evitar que a arte encoste na borda do quadrado.

21. Reducao do espacamento do menu mobile da navbar.
Arquivos alterados:
- `winner-site/style.css`
Resumo:
- Menu mobile ficou mais compacto com menos espaco interno (`padding` menor) e menor `gap` entre itens.
- Links do menu receberam menor padding vertical e leve reducao de fonte.
- Botao "Inscreva-se" do menu mobile tambem foi compactado para acompanhar o novo ritmo visual.

22. Sincronizacao da ordem dos links com a ordem real das secoes da pagina.
Arquivos alterados:
- `winner-site/index.html`
Resumo:
- Navbar desktop e menu mobile ajustados para: Sobre, Informacoes, Ministrante, Como Chegar, Inscricao, FAQ.
- Bloco de links do rodape atualizado para refletir a mesma logica de navegacao.

23. Foto do ministrante alterada de circular para retangular vertical arredondada.
Arquivos alterados:
- `winner-site/style.css`
Resumo:
- Moldura da foto ajustada para proporcao retrato (3:4), com cantos arredondados.
- Imagem interna atualizada para acompanhar o novo formato e melhor enquadramento do rosto.

24. Relatorio completo de auditoria tecnica/UX/CRO/performance do site.
Arquivos alterados:
- `winner-site/ANALISE_FINAL_2026-03-01.md`
Resumo:
- Documento consolidado de fechamento do dia com scorecard Lighthouse, achados por prioridade, insights e plano de acao.

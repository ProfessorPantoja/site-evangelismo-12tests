# Mapa do Caminho do Usuario - Inscricao

Data de consolidacao: 2026-03-06
Escopo: landing `winner-site` + fluxo atual de inscricao

## Decisoes em aberto

### 1. Login no Google e estritamente necessario?

Estado atual: na verificacao tecnica em 2026-03-06, o formulario final retornou `401` para acesso sem sessao autenticada e o HTML recebido foi de tela de autenticacao do Google.

Evidencias:

- Auditoria anterior ja havia sinalizado risco de redirecionamento para `accounts.google.com`.
- Cadeia atual observada:
  - `https://admpf-evangelismo-2026.vercel.app/api/track-register?...`
  - `https://bit.ly/admpf-evento-evangelismo-2026?...`
  - `https://docs.google.com/forms/d/e/1FAIpQLSdJLjQ8vk9opE-63bY7BHtKdkne6OPQ8OK7372x9vPSVEcJPQ/viewform?usp=publish-editor`
  - resposta final `401`

Leitura pratica:

- Para decisao operacional, deve-se assumir hoje que o visitante pode sim enfrentar barreira de login.
- Em termos de conversao, isso equivale a "o formulario nao esta publico o suficiente".

Decisao recomendada:

- Confirmar e, se necessario, reconfigurar o Google Forms para aceitar respostas sem login.
- Nao divulgar em massa enquanto essa parte nao estiver validada em navegacao anonima real.

### 2. Permanecer no bit.ly?

Estado atual:

- O `bit.ly` nao e mais necessario para rastreamento principal, porque:
  - ja existe log tecnico na Vercel para QR e clique em inscricao
  - futuramente o GA4 pode cobrir aquisicao e trafego

Problema atual:

- O `bit.ly` adiciona uma camada a mais na jornada.
- Pode acionar tela intermediaria de confirmacao.
- Aumenta desconfiança e adiciona atrito antes do Google Forms.

Decisao recomendada:

- Remover o `bit.ly` assim que existir uma URL final de formulario publico e validado sem login.
- Manter o endpoint de rastreamento (`/qr` e `/api/track-register`) e trocar apenas o destino final.

## Caminho atual do usuario

### Fluxo principal hoje

1. Usuario pensa em participar depois de ver cartaz, divulgacao ou convite.
2. Usuario escaneia o QR Code ou abre o link.
3. Usuario cai na landing.
4. Usuario tenta entender:
   - o que e o evento
   - para quem e
   - quanto custa
   - como paga
   - se precisa comprovante
5. Usuario clica em inscricao.
6. Passa por:
   - endpoint de rastreamento
   - `bit.ly`
   - Google Forms
7. Se conseguir abrir o formulario:
   - preenche dados
   - opcionalmente envia comprovante
   - envia resposta
8. A partir dai, a confirmacao final depende do que o formulario e o processo operacional comunicam.

## Pontos de perda no fluxo atual

### Antes do clique

- Falta de chave Pix e favorecido.
- Falta de regra sobre certificado.
- Possivel duvida sobre comprovante e validacao final.
- Possivel duvida sobre "estou inscrito ao preencher" versus "estou inscrito apos pagar".

### No clique

- Redirecionamento adicional pelo `bit.ly`.
- Possivel percepcao de link encurtado como menos confiavel.

### No formulario

- Possivel exigencia de login Google.
- Possivel abandono se o usuario nao tiver conta logada no celular.
- Possivel abandono se o usuario nao estiver pronto para anexar comprovante.

### Depois do envio

- Risco de incerteza:
  - "ja estou inscrito?"
  - "falta pagar?"
  - "falta enviar comprovante?"
  - "vou receber confirmacao por WhatsApp?"

## Variantes mais provaveis

### Variante A - usuario motivado

1. Ve o cartaz.
2. Escaneia.
3. Entra no site.
4. Clica em inscricao quase sem ler.
5. Bate em login ou formulario.
6. Pode concluir rapido ou abandonar na hora.

### Variante B - usuario cauteloso

1. Ve o cartaz.
2. Entra no site.
3. Le FAQ e secao de inscricao.
4. Fica em duvida sobre Pix, comprovante, certificado ou confirmacao.
5. Adia a inscricao.

### Variante C - usuario de celular com pouco contexto

1. Escaneia o QR num momento corrido.
2. Entra na landing.
3. Clica em inscricao.
4. Encontra atrito tecnico.
5. Fecha e nao volta.

## Fluxo ideal desejado

1. Usuario ve o cartaz.
2. Escaneia `https://admpf-evangelismo-2026.vercel.app/qr`.
3. Cai na landing com rastreamento preservado.
4. Entende em segundos:
   - valor
   - forma de pagamento
   - comprovante
   - regra de confirmacao
5. Clica em inscricao.
6. Vai direto para um formulario publico, sem `bit.ly`, sem login obrigatorio.
7. Envia.
8. Ve uma mensagem final objetiva:
   - inscricao recebida
   - se falta pagar ou nao
   - se falta enviar comprovante ou nao
   - proximo canal oficial de contato

## Riscos operacionais que merecem decisao breve

1. Definir se a inscricao e confirmada:
   - no envio do formulario
   - ou somente apos pagamento

2. Definir se comprovante e:
   - opcional de verdade
   - opcional inicialmente, mas obrigatorio depois
   - obrigatorio para confirmar vaga

3. Definir como o usuario sabe que terminou:
   - mensagem no proprio Google Forms
   - WhatsApp oficial
   - email

## Recomendacao pratica de ordem

1. Validar formulario publico sem login em navegacao anonima.
2. Remover `bit.ly` assim que a URL final estiver pronta.
3. Preencher no site:
   - chave Pix
   - favorecido
   - regra do certificado
   - regra real de confirmacao da vaga
4. Revisar a mensagem final do processo para o usuario nao sair em duvida.

## Resposta curta para decisao

- Login Google: hoje deve ser tratado como risco real e possivel barreira.
- `bit.ly`: hoje atrapalha mais do que ajuda.
- Foco imediato: limpar o caminho do usuario ate "sua inscricao foi recebida/confirmada".

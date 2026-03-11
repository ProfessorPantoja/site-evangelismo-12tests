# Análise Final do Site (Fechamento do Dia)

Data da análise: 2026-03-01  
Ambiente auditado: https://admpf-evangelismo-2026.vercel.app

## Resumo executivo

O site está visualmente forte, com boa estrutura de landing page e identidade bem alinhada ao público do evento.  
O maior ponto agora não é design: é conversão operacional (link de inscrição sem fricção + preenchimento dos campos pendentes + ajustes pontuais de acessibilidade/performance).

## Scorecard atual (Lighthouse)

- Mobile: Performance 74 | Acessibilidade 96 | Best Practices 96 | SEO 100
- Desktop: Performance 79 | Acessibilidade 96 | Best Practices 96 | SEO 100

Métricas-chave:
- Mobile: FCP 1.69s | LCP 8.16s | TBT 82ms | CLS 0.000
- Desktop: FCP 1.06s | LCP 3.31s | TBT 0ms | CLS 0.004

## Pontos fortes

1. Estrutura da página está correta para conversão:
   - Hero claro, CTA acima da dobra, reforços ao longo da página, FAQ e fechamento com inscrição.
2. Direção visual premium bem consistente:
   - Paleta, tipografia e hierarquia bem definidas.
3. Mobile-first sólido:
   - Navegação fixa, conteúdo escaneável e boas decisões de espaçamento.
4. Semântica geral boa:
   - `lang`, `h1` único, seções por tema, `loading="lazy"` em imagem/iframe.
5. Processo de trabalho excelente:
   - Histórico em `REGISTRO_ALTERACOES.md` facilita manutenção, revisão e tomada de decisão.

## Achados críticos e de alto impacto

### 1) Link de inscrição com risco de fricção (Crítico)

Na checagem automatizada sem sessão autenticada, o fluxo de inscrição caiu em `accounts.google.com` (login), o que pode bloquear ou confundir novos visitantes.

Impacto:
- Pode reduzir conversão diretamente.

Recomendação:
- Confirmar um link de formulário público que abra direto sem exigir login.
- Se possível, usar URL final estável (não encurtada) para reduzir desconfiança.

### 2) Campos pendentes essenciais (Alto)

Ainda existem blocos `FALTA` de alto impacto para decisão:
- Chave Pix + favorecido
- WhatsApp oficial
- Certificado (sim/não + regra)
- Programação detalhada
- Alimentação
- Lista completa de ônibus
- Título da ministração

Impacto:
- Aumenta dúvida e abandono antes da inscrição.

### 3) Performance mobile limitada por mídia pesada (Alto)

Principais pesos:
- `assets/v1/biblia.png` ~1.5MB
- `assets/v1/hero.png` ~1.3MB
- `assets/v1/pastor.png` ~1.2MB
- `assets/Video/Cruz1.mp4` ~844KB

Transferência observada:
- Mobile ~3.5MB
- Desktop ~5.3MB

Impacto:
- LCP alto no mobile (8.16s), piorando experiência e conversão em rede móvel.

## Achados médios

### 4) Acessibilidade: contraste e nome acessível (Médio)

Problemas marcados:
- `color-contrast` no rodapé (tons `--fg-muted` em fundo escuro).
- `label-content-name-mismatch` no link da marca (`aria-label="Início"` sem refletir texto visível completo).

Impacto:
- Perda de acessibilidade e nota técnica.

### 5) Erro de console por favicon ausente (Médio)

Foi detectado `404` para `/favicon.ico`.

Impacto:
- Não quebra uso, mas reduz qualidade técnica percebida e nota de boas práticas.

### 6) Menu mobile pode evoluir em acessibilidade de interação (Médio)

Hoje:
- Tem `aria-expanded` dinâmico.

Pode melhorar:
- Adicionar `aria-controls` no botão.
- Fechar menu com `Esc` e clique fora.

## Achados baixos

### 7) Estilos inline no HTML (Baixo, mas gera dívida)

Existem 17 usos de `style=""` no `index.html`.

Impacto:
- Manutenção mais lenta e inconsistência visual no futuro.

### 8) Metadados sociais ausentes (Baixo para UX, alto para compartilhamento)

Faltam tags Open Graph/Twitter (`og:title`, `og:description`, `og:image`, etc.).

Impacto:
- Preview fraco ao compartilhar no WhatsApp/Telegram.

### 9) Texto de placeholder ainda presente em CSS desktop

Pseudo-elemento com `"PLACEHOLDER DE IMAGEM ESTRATEGICA"` ainda existe no CSS (embora esteja oculto em mobile).

Impacto:
- Risco de parecer rascunho em variações de viewport/contexto.

## Insights de produto/conversão

1. O design já está em nível alto para objetivo do projeto.
2. O próximo salto vem de confiabilidade:
   - inscrição sem barreiras,
   - dados práticos completos,
   - contato claro.
3. Para tráfego via WhatsApp, previsibilidade vence “efeitos”:
   - link direto,
   - confirmação de pagamento,
   - instruções logísticas claras.

## Plano recomendado (ordem)

### Etapa 1 (imediata - maior impacto)

1. Garantir URL de inscrição pública sem login.
2. Publicar favicon.
3. Ajustar `aria-label` da marca para incluir texto visível.

### Etapa 2 (curto prazo)

1. Preencher os itens `FALTA` mais críticos:
   - Pix/favorecido, WhatsApp, certificado, programação.
2. Revisar contraste do rodapé (`--fg-muted`) para AA.

### Etapa 3 (qualidade final)

1. Converter imagens para WebP/AVIF e reduzir dimensões.
2. Revisar vídeo de fundo (bitrate/codec e fallback).
3. Adicionar OG/Twitter cards para compartilhamento.
4. Remover estilos inline e consolidar classes no CSS.

## Conclusão

O site está muito bom para publicação e aprovação interna.  
Para fechar com padrão profissional alto de produção, os principais ganhos agora estão em:
- conversão sem fricção (inscrição),
- preenchimento de dados pendentes,
- performance mobile e acessibilidade fina.

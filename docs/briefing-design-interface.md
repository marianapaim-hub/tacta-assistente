# Briefing de design — Interface do Assistente Tacta

> Documento pronto pra colar em ferramentas de geração de UI (Lovable, v0, Claude, Figma AI, etc.). Cobre as 2 telas principais: Home/Audiodescrição e Chat. Login real fica pra uma fase futura — por enquanto, só um "perfil leve" (nome salvo localmente, sem conta de verdade).

## 1. Contexto do projeto

Este é o site de um **assistente por voz com IA** que complementa o **Tacta**: uma placa educacional em formato de cubo, baseada numa placa chamada Microshlaon (uma versão mais completa do Arduino, com LEDs, buzzer, servo-motores e botões já inclusos). O cubo físico foi adaptado para pessoas com deficiência visual — tem identificação em braile, diferenciação por cores e feedback por som/vibração.

O Tacta (hardware) é projeto de um grupo de 4 pessoas. Este site é um projeto individual complementar, que ajuda quem já tem o cubo em mãos a **aprender robótica de forma acessível**, através de:
1. **Audiodescrição por componente** — narração de verdade explicando cada peça/pino do cubo.
2. **Chat com IA** — a pessoa pergunta livremente e pede pra ser guiada na montagem de circuitos simples (ex: "me ensina a acender um LED").

## 2. Público-alvo — e por que isso muda tudo no design

Pessoas com **deficiência visual**, incluindo:
- **Cegueira total** — navegam por leitor de tela (NVDA) e teclado, não usam o visual do site de jeito nenhum. Pra esse grupo, a interface visual bonita não importa — o que importa é HTML semântico, labels corretos, ordem de foco lógica.
- **Baixa visão** — enxergam parcialmente, se beneficiam de zoom, alto contraste, texto grande, layout limpo sem poluição visual.

**Não-negociáveis de acessibilidade** (baseado em pesquisa já levantada pro projeto — ver `docs/referencias/ferramentas-e-acessibilidade/guia-high-contrast-low-vision.md` e `guia-cores-e-acessibilidade.md`):
- Contraste mínimo **4,5:1** para texto normal, **3:1** para texto grande e ícones/UI (padrão WCAG AA). Mirar em 7:1 quando der.
- Nunca usar **cor sozinha** pra passar informação (ex: erro em vermelho precisa também de ícone/texto, não só a cor).
- Suportar **zoom do navegador até 200%** sem quebrar o layout.
- Tipografia simples, sem serifas decorativas, tamanho de texto configurável.
- **Indicador de foco visível** (outline com contraste alto) em todo elemento clicável — essencial pra navegação por teclado.
- Layout limpo, bem espaçado — nada de poluição visual ou elementos piscando/se movendo sem controle (pode causar sobrecarga cognitiva ou, em casos de fotossensibilidade, mal-estar).
- Tudo com `aria-label` adequado e testável por leitor de tela.

## 3. Paleta de cores — e o porquê de cada uma

Paleta já definida e validada por contraste (roxo/verde, inspirada na Escola ORT):

| Cor | Hex | Uso | Contraste testado |
|---|---|---|---|
| Roxo (destaque) | `#4b1e78` | Texto, botões principais, títulos | ~12:1 sobre branco — excelente |
| Roxo hover | `#341455` | Estado de hover/pressed dos botões roxos | — |
| Verde (acento) | `#6fc02d` | Só como **fundo** (nunca como texto) | Texto escuro sobre verde: ~7,7:1 — ótimo. Verde sobre branco como texto: só ~2,3:1 — reprova, por isso nunca usar assim |
| Fundo | `#ffffff` | Fundo geral | — |
| Texto | `#1a1a1a` | Texto padrão | — |

Roxo sobre verde dá ~5,3:1 (passa AA) e os dois continuam distinguíveis em simulação de daltonismo, porque o roxo mantém o canal azul mesmo quando o verde "some" pra quem tem deuteranopia/protanopia.

**Regra pro design tool:** pode variar tons/gradientes de roxo e verde pra dar a sensação moderna, mas qualquer combinação nova de cor-sobre-cor precisa ser validada em um verificador de contraste (WebAIM) e num simulador de daltonismo (Coblis) antes de virar padrão — não assumir que "parece ok visualmente" é suficiente.

## 4. Vibe visual desejada: futurista, moderna, jovem — com acessibilidade

A pessoa que pediu esse projeto quer uma cara **futurista, moderna e jovem** — não uma interface "institucional"/datada. Isso é compatível com acessibilidade, mas com alguns cuidados:

- **Pode:** cantos arredondados, gradientes sutis de roxo→verde, ícones geométricos/tech, micro-interações discretas (hover, transições suaves de ~200-300ms), tipografia sans-serif moderna e com peso firme (nunca ultra-fina), espaçamento generoso tipo "produto de tech atual".
- **Cuidado:** fontes muito finas ou condensadas (baixo contraste percebido mesmo com contraste de cor correto), animações automáticas/infinitas (evitar — deixar tudo disparado por ação do usuário), texto sobre imagem/gradiente sem overlay sólido garantindo contraste, ícones sem label textual junto.
- **Modo escuro:** já que fotossensibilidade é comum em baixa visão, vale desenhar a interface pensando em oferecer um tema escuro alternável no futuro — não precisa ser no MVP, mas não desenhar nada que dependa só do tema claro.

## 5. Tela 1 — Home / Audiodescrição

**Objetivo:** pessoa explora os componentes do cubo Tacta um por um, ouvindo a narração de cada um.

**Layout (2 colunas em telas largas, empilhado em mobile):**
- **Coluna A — Ilustração 2D do cubo:**
  - Ilustração 2D simples e clara do cubo Tacta (não modelo 3D — decisão já tomada no projeto por acessibilidade, ver `docs/referencias/prompt-imagens-faces-tacta.md` pros prompts de geração dessa arte).
  - Controles de **zoom explícitos** (botões "+" e "−" grandes, ou slider), não só pinça/scroll — importante pra quem usa mouse/teclado e não touch.
  - A imagem é **apoio visual complementar**, nunca o mecanismo principal de interação (quem é cego não a usa).
- **Coluna B — Lista de botões nomeados:**
  - Um botão por componente/face do cubo (ex: "LED pino 13", "Buzzer", "Botão A"...).
  - Ao clicar/tocar, toca a narração (Web Speech API) e, se fizer sentido, destaca visualmente a peça correspondente na ilustração (reforço multicanal: cor + texto + destaque, nunca só cor).
  - Botões grandes, com bom espaçamento entre si (mínimo ~44px de altura, alvo de toque confortável).

**Header:** nome do projeto/logo, navegação simples entre "Audiodescrição" e "Chat", e o espaço reservado do perfil leve (ver seção 7).

## 6. Tela 2 — Chat com IA

**Objetivo:** conversar livremente com a IA sobre o Tacta e pedir pra montar circuitos passo a passo.

**Layout:**
- Histórico de mensagens em formato bolha, diferenciando claramente usuário (alinhado à direita, fundo roxo claro) de IA (alinhado à esquerda, com uma borda/acento verde lateral — já é o padrão atual do CSS, pode evoluir visualmente mas manter a lógica).
- Campo de texto fixo embaixo, com botão de enviar e botão de **microfone** (entrada por voz já existe) com estado visual claro de "gravando" (ex: pulsando ou mudando de cor) e `aria-pressed` correto.
- Sugestões rápidas no início da conversa (chips clicáveis, tipo "Me ensina a acender um LED", "O que é PWM?") pra reduzir a barreira de começar a digitar — bom tanto pra acessibilidade (menos digitação) quanto pra sensação "moderna".
- Indicador de "IA está digitando/pensando" acessível (não só visual — anunciar via `aria-live`).

## 7. Perfil leve (hoje) → login real (depois)

**Por enquanto (MVP):**
- Sem conta de verdade, sem senha, sem coleta de email/foto ainda.
- Um ícone de perfil no header abre um mini-formulário simples: "Como posso te chamar?" (nome/apelido), salvo só no navegador (localStorage). Usado pra personalizar saudações ("Oi, Maria!").
- Avatar pode ser um ícone genérico ou emoji escolhido pela pessoa (não upload de foto real ainda).

**Desenhar já pensando na evolução futura:**
- O mesmo espaço do header (ícone de perfil) deve comportar, depois, um fluxo de login de verdade com email — então já desenhar esse cantinho como um "menu de conta" (não só um avatar solto), pra trocar o conteúdo de dentro sem redesenhar o header inteiro.
- Quando o login real entrar, vai precisar de tela de cadastro/login e política de privacidade (por causa da LGPD, já que email é dado pessoal) — isso é decisão de escopo pra depois, não precisa aparecer no design agora.

## 8. Checklist final pra quem for gerar o design

- [ ] Todo texto passa 4,5:1 de contraste (3:1 pra texto grande/ícones)
- [ ] Nenhuma informação depende só de cor
- [ ] Zoom do navegador até 200% não quebra o layout
- [ ] Todo botão/link tem foco visível de alto contraste
- [ ] Nenhuma animação automática/contínua (só disparada por ação do usuário)
- [ ] Paleta roxo `#4b1e78` / verde `#6fc02d` como base, com verde nunca usado como cor de texto
- [ ] Visual "futurista/moderno/jovem" sem sacrificar nenhum item acima

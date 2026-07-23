# Assistente Tacta — README

## O que é este projeto

Este projeto é um **assistente por voz com IA**, desenvolvido como site (não aplicativo), pensado para complementar a experiência do **Tacta**.

O Tacta é uma placa educacional em formato de cubo, baseada em uma placa desenvolvida pela escola chamada **Microshlaon** (uma versão mais completa do Arduino, com LEDs, buzzer, servo-motores e botões já inclusos). O cubo foi adaptado para pessoas com deficiência visual, com identificação em braile, diferenciação por cores e recursos de feedback como buzzer e sensor de vibração.

O Tacta é um projeto em grupo, desenvolvido por 4 integrantes. Este site — o assistente por voz — é um **projeto individual**, criado para ampliar a experiência de quem usa o Tacta, sem alterar o hardware do cubo em si.

## Objetivo do assistente

Ajudar a pessoa que está usando o Tacta a aprender robótica de forma acessível, através de duas partes principais:

1. **Audiodescrição por componente** — uma lista de botões nomeados, um por face/componente do Tacta (acessível por toque/tab/leitor de tela). Ao selecionar um botão, toca uma narração de verdade explicando aquele componente/pinagem. Pode ter, como apoio visual complementar (não como mecanismo de interação), uma ilustração 2D simples do cubo — útil para baixa visão e para quem for apresentar/ensinar.
2. **Chat com IA** — a pessoa pode perguntar livremente sobre o Tacta e também pedir para ser guiada na montagem de circuitos simples (ex: "me ensina a acender um LED"), com a IA instruindo passo a passo. A ideia é começar com poucos circuitos simples no MVP e ir ampliando a dificuldade conforme o projeto evoluir com feedback de uso.

*(Decisão tomada durante a conversa de planejamento: cortamos a ideia de "minicursos" como trilha separada, e também descartamos um modelo 3D clicável — pouco acessível e mais complexo de construir. O ensino de robótica acontece todo pelo chat com IA, de forma interativa.)*

## Público-alvo

Pessoas com deficiência visual (incluindo baixa visão, não só cegueira total) interessadas em aprender robótica. A ideia já foi validada informalmente em conversas com pessoas desse público, com boa receptividade.

## Geração de áudio/narração

A narração (tanto da audiodescrição dos componentes quanto das respostas do chat, se fizer sentido) será gerada usando a **Web Speech API** (`SpeechSynthesis`), nativa dos navegadores modernos. Vantagens para o MVP: gratuita, simples de integrar, funciona sem depender de serviços externos ou chaves de API. A voz é menos natural do que uma API de IA de voz (tipo ElevenLabs), mas resolve o problema real do MVP — ter narração de verdade, sem depender do leitor de tela da pessoa. Se o projeto crescer depois do Future Lab, é possível trocar para uma voz mais natural sem precisar redesenhar a estrutura do site — basta trocar "quem fala" o mesmo texto.

## Organização de conteúdo

Conforme novos materiais forem sendo enviados (anotações, pesquisas, roteiros, referências), organize-os automaticamente nas subpastas de `/docs` que fizerem mais sentido, criando novas subpastas quando necessário.

## Estrutura de pastas

- `/docs` — materiais de apoio: anotações de conversas com usuários, roteiro de conteúdo/falas do assistente, referências de acessibilidade e informações técnicas relevantes do Tacta.
  - `/docs/pesquisa-usuarios` — feedback e anotações de conversas com pessoas com deficiência visual.
  - `/docs/roteiro-conteudo` — o que o assistente deve falar em cada modo (Guia do Tacta e Minicursos).
  - `/docs/referencias` — pesquisas sobre acessibilidade em robótica educacional.

## Observações importantes

- O nome "Tacta" pertence ao projeto do grupo (4 integrantes). Qualquer apresentação pública deste site deve deixar claro que o Tacta é um projeto coletivo, e que este assistente/site é um projeto individual complementar.

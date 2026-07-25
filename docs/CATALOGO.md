# Catálogo — onde encontrar cada informação

Índice rápido da pasta Tacta. Consulte aqui antes de vasculhar as pastas: cada linha diz o que tem no arquivo/pasta e quando usá-lo. Sempre que um documento novo for adicionado, atualize esta tabela.

## Site (código)

| Onde | O que é |
|---|---|
| `index.html` | Página inicial do site |
| `audiodescricao.html` + `js/audiodescricao.js` | Tela de audiodescrição por componente (botões nomeados, um por face/componente do Tacta) |
| `chat.html` | Tela de chat com IA |
| `css/style.css` | Estilos do site |
| `data/componentes.json` | Fonte única de dados dos componentes (narração), usada pela audiodescrição e futuramente pelo chat — ver `data/README.md` para status atual do que falta preencher |
| `scripts/dev-server.js` | Servidor local de desenvolvimento |
| `uShalom.pdf` | PDF original da documentação técnica da placa-base, enviado pela Mariana |

## docs/referencias — pesquisa e embasamento

| Onde | O que é |
|---|---|
| `docs/referencias/bibliografia.md` | Lista bruta de **todas** as fontes já enviadas (links), organizada por categoria |
| `docs/referencias/roteiro-referencias-artigo.md` | Curadoria: qual fonte usar em qual parte do **artigo** (intro, hardware, software), com justificativa e sugestão de estrutura |
| `docs/referencias/uShalom-especificacoes-tecnicas.md` | Especificações técnicas da placa-base do Tacta (uShalom/Microshlaon) — mapa de pinos, diferenças em relação ao Arduino UNO. Base da audiodescrição |
| `docs/referencias/materiais-hardware-tacta.md` | Lista de materiais e orçamento do cubo físico (hardware do grupo, não do site) |
| `docs/referencias/prompt-imagens-faces-tacta.md` | Prompts prontos (ChatGPT/DALL-E) para gerar as ilustrações 2D das 6 faces do cubo |
| `docs/referencias/artigos-academicos/README.md` | Índice com prioridade de leitura de cada artigo acadêmico da subpasta |
| `docs/referencias/artigos-academicos/*.md` | Resumos individuais de artigos acadêmicos (FEBRACE, SBC, Revista Geo, UFG, IEEE Lakshay, PNTA, etc.) |
| `docs/referencias/ferramentas-e-acessibilidade/README.md` | Índice separando o que é relevante pro **site** (NVDA, contraste, LBI, etc.) do que é sobre o **hardware/braile físico** |
| `docs/referencias/ferramentas-e-acessibilidade/*.md` | Resumos individuais de ferramentas, leis e guias de acessibilidade |

## docs/reunioes-mentoria — decisões e conversas

| Onde | O que é |
|---|---|
| `docs/reunioes-mentoria/2026-07-24-reuniao-gleisson.md` | Reunião com o mentor Gleisson: sugestão de o chat ensinar lógica de programação, e ideia de um "protocolo padrão" para os componentes do Tacta |
| `docs/reunioes-mentoria/2026-07-24-reuniao-pedro.md` | Reunião com o mentor Pedro T: conselho de construir a solução aos poucos, e de acompanhar de perto o processo (não confiar só na IA) por causa das nuances de acessibilidade para deficientes visuais |

## Outros

| Onde | O que é |
|---|---|
| `README.md` (raiz) | Visão geral do projeto, objetivo do assistente, público-alvo, decisão de usar Web Speech API, estrutura de pastas |
| `data/README.md` | O que já está pronto e o que falta em `componentes.json` |

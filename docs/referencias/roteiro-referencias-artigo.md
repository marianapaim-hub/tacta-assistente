# Roteiro de referências para o artigo sobre o Tacta (hardware + software)

Curadoria das fontes já lidas/organizadas em `/docs/referencias`, selecionadas e justificadas para uso na redação do artigo. Fontes marcadas com 📄 ainda não foram lidas na íntegra (só título/abstract) — baixe o PDF e envie se quiser detalhar a citação.

## 1. Fundamentação teórica geral (usar na introdução — vale tanto para hardware quanto software)

**Lei nº 13.146/2015 — Lei Brasileira de Inclusão (LBI)**
Link: http://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2015/Lei/L13146.htm
Justificativa: base legal brasileira para acessibilidade. Use para justificar formalmente *por que* o projeto existe — não é só uma escolha de design, é alinhado a uma lei federal que garante direito à acessibilidade tecnológica e educacional.

**Plano Nacional de Tecnologia Assistiva (PNTA) — MCTI**
Link: https://www.gov.br/mcti/pt-br/centrais-de-conteudo/publicacoes-mcti/plano-nacional-de-tecnologia-assistiva/pnta_-documento_web.pdf
Justificativa: mostra que o tema tem política pública federal dedicada. Traz a estatística mais citável pra abrir a introdução — 35 milhões de brasileiros (18,6% da população) têm deficiência visual, a maior prevalência entre os tipos de deficiência no Censo IBGE 2010 — e cita o fomento a "tecnologias de baixo custo" como prioridade do Eixo I, o que ajuda a posicionar o Tacta (Arduino, baixo custo) dentro de uma agenda nacional já estabelecida, não como iniciativa isolada. Resumo completo em `docs/referencias/artigos-academicos/pnta-mcti.md`.

**CONFORTO, D.; SANTAROSA, L. M. C. (2002)** — sobre Tecnologia Assistiva (TA)
Justificativa: definição conceitual de TA em diferentes níveis (hardware, software, interfaces). Use para abrir a seção teórica do artigo, definindo formalmente o que é "tecnologia assistiva" antes de posicionar o Tacta dentro dessa categoria.

## 2. Referências para a parte de HARDWARE (o cubo físico)

**FEBRACE 2025 — ENG-6724 — "Desenvolvimento de um dispositivo acessível para uso de Arduino por pessoas com deficiência visual"**
Link: https://virtual.febrace.org.br/2025/ENG/6724/
Justificativa: é o precedente mais próximo do hardware do Tacta — cápsulas táteis com braile para o Arduino UNO, validadas com uma associação de pessoas cegas (ADEVOSC). Use na seção de "trabalhos relacionados" para mostrar que a abordagem (adaptar hardware existente com camada tátil, sem alterar a nomenclatura original) já tem precedente validado academicamente.

**LAKSHAY, D. V. G. — "Talking Multimeter and LCR Meter: Accessible for Blind or Visually Impaired Persons (VIPs)" (ICRITO 2021)** 📄 (abstract lido)
Link: https://ieeexplore.ieee.org/document/9596400
Justificativa: exemplo de instrumento eletrônico tradicional (multímetro) adaptado para saída por voz. Use para embasar a escolha de dar feedback sonoro/falado sobre o estado do hardware, em vez de depender de leitura visual de displays/LEDs.

**Impressão 3D de placas em braile — Centro Tecnológico de Acessibilidade (CTA/IFRS), ferramenta Text2Braille3d**
Justificativa: relevante apenas se o artigo detalhar *como* as identificações em braile do cubo foram produzidas fisicamente. Use na seção de metodologia/fabricação, se aplicável.

**InBraille (UFRPE) — conversor de texto para braile com exportação em STL** 📄
Justificativa: mesma linha acima — cite se o artigo descrever o processo de fabricação das peças em braile do Tacta.

## 3. Referências para a parte de SOFTWARE (o site/assistente)

**"Recomendações para o Ensino de Programação de Computadores para Estudantes Cegos" (SBC/SBIE)** 📄
Link: https://sol.sbc.org.br/index.php/sbie/article/view/31374/31177
Justificativa: a fonte mais diretamente aplicável ao chat com IA. Use para embasar as escolhas de como o chat guia o ensino de lógica/circuitos passo a passo — idealmente citando recomendações específicas do artigo (peça o PDF pra extrair trechos exatos).

**"Tecnologia Educacional e Tecnologia Assistiva: Especificidades e Aplicações para a Inclusão de Estudantes com Deficiência Visual" (Revista Geo)** 📄
Link: https://revistageo.com.br/revista/article/view/696/511
Justificativa: conecta tecnologia educacional (o que o site faz — ensinar) com tecnologia assistiva (como o site faz — acessível). Use na seção teórica para justificar por que o Tacta trata essas duas dimensões juntas, não separadamente.

**"Promovendo Acessibilidade no Ensino Superior: Desenvolvimento de um Protótipo Assistivo para Estudantes com Deficiência Visual em Cursos de Engenharia" (UFG)** 📄
Link: https://revistas.ufg.br/interacao/article/view/79074/41382
Justificativa: precedente de protótipo assistivo em contexto de ensino técnico/engenharia — mesmo público-alvo conceitual do Tacta. Use como comparação de abordagem na seção de trabalhos relacionados.

**INDIA, G.; RAMAKRISHNA, G.; PAL, J.; SWAMINATHAN, M. (2020) — "Conceptual Learning through Accessible Play: Project Torino and Computational Thinking for Blind Children in India" (ICTD2020)**
Justificativa: a referência internacional mais forte do conjunto. Use para embasar a escolha de ensino "lúdico"/exploratório (sem tutorial rígido) e a decisão de dar feedback positivo incremental no chat — mostrando que essa abordagem já foi validada em estudo com crianças cegas.
Formato de citação (ABNT), pronto para usar:
```
INDIA, G.; RAMAKRISHNA, G.; PAL, J.; SWAMINATHAN, M. Conceptual Learning through
Accessible Play: Project Torino and Computational Thinking for Blind Children in India.
In: INTERNATIONAL CONFERENCE ON INFORMATION AND COMMUNICATION TECHNOLOGIES AND
DEVELOPMENT (ICTD2020), 2020, Nova York. Anais [...]. Nova York: Association for
Computing Machinery, 2020. Art. 6, p. 1-11.
```

**NVDA (NV Access)** — leitor de tela gratuito e open source
Link: https://www.nvaccess.org
Justificativa: use na metodologia, para explicar como o site foi testado (navegação por leitor de tela) e por que a acessibilidade não depende só da narração do próprio site, mas de ser compatível com ferramentas assistivas já usadas pelo público.

**"Como ensinar informática para deficientes visuais" (Dialogando)**
Justificativa: contexto de ferramentas/métodos já praticados no Brasil para ensinar tecnologia a pessoas cegas (ex: Dosvox). Use para situar o Tacta dentro de práticas educacionais já conhecidas, e não como algo sem nenhum ponto de partida.

**Guia de alto contraste / baixa visão + Guia sobre Cores e Acessibilidade**
Justificativa: não são para citação teórica — são referência prática para justificar decisões de design visual (cores, contraste) da ilustração 2D de apoio e da interface do site. Use na seção de metodologia/design.

## Como usar este roteiro

- Itens com 📄 exigem o PDF completo pra citação com página/trecho exato — priorize baixar e enviar esses antes de escrever a seção que os usa.
- Os outros já têm resumo suficiente em `/docs/referencias/artigos-academicos/` e `/docs/referencias/ferramentas-e-acessibilidade/` pra você citar com segurança.
- Sugestão de estrutura do artigo: Introdução (LBI + PNTA + Conforto/Santarosa) → Trabalhos relacionados (FEBRACE 6724, Lakshay, SBC, RevistaGeo, UFG, Torino) → Metodologia/Design (NVDA, guias de cor/contraste, braile 3D se for descrever fabricação) → Conclusão.

# NVDA (NonVisual Desktop Access) — NV Access

**Link:** https://www.nvaccess.org

## Resumo

NVDA é um leitor de tela gratuito e de código aberto, desenvolvido pela organização sem fins lucrativos NV Access, que converte informações visuais da tela do computador em áudio (síntese de voz) e saída em braile. Seu propósito declarado é garantir "acesso à tecnologia independentemente de idioma, localização ou situação financeira", priorizando "acesso em vez de lucro". É voltado a pessoas cegas e com baixa visão — um público estimado em 285 milhões de pessoas no mundo — permitindo o uso independente de computadores sem custo com softwares proprietários caros (como o JAWS). A organização afirma já ter ajudado mais de 250 mil pessoas a ganhar "liberdade, educação e emprego" por meio da ferramenta. O NVDA roda no Windows, é compatível com múltiplos idiomas e é mantido por uma comunidade de código aberto. A página institucional não detalha uso específico em programação/desenvolvimento de software, mas é amplamente citado em outras fontes desta pesquisa (ex.: Dialogando) como ferramenta padrão em cursos de informática para pessoas cegas.

## Relevante para o projeto Tacta

- NVDA é o leitor de tela de referência que muitos usuários cegos no Brasil já usam para navegar na web — o site do Tacta deve ser testado manualmente com NVDA (é gratuito, dá para instalar e testar navegação por teclado, leitura de labels, ARIA, formulários do chat etc.).
- Reforça a importância de não depender apenas da narração própria via Web Speech API: o site precisa também funcionar bem "por baixo" com leitores de tela de terceiros (HTML semântico, atributos ARIA corretos, foco de teclado visível), já que parte do público pode preferir seu próprio leitor de tela ao invés da audiodescrição embutida.
- O foco do NVDA em "acesso independente de situação financeira" é um bom paralelo de valores para o discurso do Tacta (tecnologia educacional acessível e de baixo custo).
- Vale incluir no site uma nota/FAQ de acessibilidade informando que o Tacta foi testado com NVDA, e possivelmente linkar o download do NVDA para visitantes que ainda não o usam.

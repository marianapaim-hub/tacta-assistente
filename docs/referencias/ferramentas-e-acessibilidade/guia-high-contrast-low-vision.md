# High Contrast and Low Vision — diretrizes de acessibilidade web

**Link:** https://afb.org/aw/winter2024/low-vision-accessibility (American Foundation for the Blind, AccessWorld — "Enhancing Digital Accessibility for Users with Low Vision"). Fontes complementares localizadas na mesma busca: https://accessibilityassistant.com/blog/web-accessibility-tips/design-for-low-vision-users/ e https://www.webability.io/blog/color-contrast-for-accessibility/

## Resumo

Guia sobre boas práticas de acessibilidade digital voltadas a pessoas com baixa visão. Recomenda contraste mínimo de 4,5:1 para texto normal e 3:1 para texto grande e elementos de interface não textuais (padrão WCAG nível AA), sugerindo mirar em 7:1 quando possível para melhor legibilidade. Enfatiza a importância de permitir personalização: redimensionamento de texto até 200% sem perda de conteúdo/funcionalidade, escolha de fontes simples e sem serifas elaboradas, espaçamento de linha ajustável e temas alternáveis (modo alto contraste, modo escuro/claro). Alerta contra layouts poluídos ou com pouco espaçamento, que causam sobrecarga visual e cognitiva para quem tem baixa visão, e recomenda suporte a zoom do navegador até 200% sem quebra de layout. Por fim, destaca a necessidade de indicadores de foco de teclado visíveis e com contraste suficiente, para que o usuário sempre saiba onde está navegando.

## Relevante para o projeto Tacta

- Definir desde já uma paleta de cores do site com contraste mínimo AA (4,5:1 texto normal / 3:1 texto grande e ícones/UI), validando com ferramenta de contraste (ex.: WebAIM Contrast Checker) antes de fechar o design visual.
- Evitar fontes decorativas; usar tipografia simples, com peso adequado (nem muito fina) e tamanho de texto configurável/responsivo a zoom do navegador até 200%.
- Implementar indicador de foco (outline) visível e de alto contraste em todos os elementos interativos do site — essencial tanto para baixa visão quanto para navegação só por teclado.
- Considerar oferecer um modo de alto contraste ou tema escuro alternável, já que fotofobia e sensibilidade à luz são comuns em baixa visão.
- Manter layout "limpo", com bom espaçamento entre seções e elementos — relevante tanto para a página de audiodescrição por componente quanto para a interface do chat.

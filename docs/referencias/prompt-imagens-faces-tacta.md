# Prompts para gerar as imagens das faces do Tacta (ChatGPT/DALL-E)

Layout sugerido (não confirmado com o grupo — ajustar se o cubo físico real for diferente). Distribui os componentes já documentados em `/docs/referencias/uShalom-especificacoes-tecnicas.md`, mais o buzzer e sensor de vibração citados no README como específicos do Tacta.

**Aviso sobre braile:** IA de imagem não gera braile real/confiável — os prompts abaixo pedem só uma textura de pontinhos indicando "aqui há braile", não o texto correto. Braile de verdade deve ser adicionado depois, com uma ferramenta de conversão apropriada.

## Preâmbulo de estilo (cole antes de cada prompt individual, pra manter consistência visual entre as 5 imagens)

```
Ilustração vetorial 2D simples e plana (flat design), vista frontal direta de uma única
face quadrada de um cubo educacional de robótica. Sem gradientes, sem sombra realista,
sem efeito 3D — só formas simples com contorno preto grosso, cores sólidas e chapadas,
alto contraste, fundo branco liso. Estilo limpo tipo ícone/diagrama técnico educacional,
adequado para pessoas com baixa visão. Cada componente desenhado como um ícone simples
e reconhecível (não fotorrealista), com um rótulo de texto curto abaixo dele em
letras grandes, e uma pequena textura de pontinhos em relevo abaixo do rótulo, sugerindo
(sem precisar ser braile tecnicamente correto) uma etiqueta tátil em braile.
```

## Face 1 — Topo: "Luzes"

```
[cole o preâmbulo de estilo acima] +

Nesta face, mostre 8 pequenos círculos vermelhos idênticos em fileira horizontal,
representando LEDs, numerados de D0 a D7 abaixo de cada um. No canto superior direito
da face, um nono círculo vermelho um pouco menor, com o rótulo "LED 13", levemente
separado dos outros oito para indicar que é diferente (é um LED de uso livre/programável,
não faz parte da fileira principal). Título da face no topo: "LUZES". Paleta: vermelho
para os LEDs, contorno preto, fundo branco.
```

## Face 2 — Frente: "Botões"

```
[cole o preâmbulo de estilo acima] +

Nesta face, mostre três botões físicos redondos em azul: dois maiores lado a lado,
rotulados "BOTÃO 1 (D8)" e "BOTÃO 2 (D9)", e um terceiro menor, um pouco afastado dos
outros dois, rotulado "RESET". Título da face no topo: "BOTÕES". Paleta: azul para os
botões, contorno preto, fundo branco.
```

## Face 3 — Lado A: "Alimentação"

```
[cole o preâmbulo de estilo acima] +

Nesta face, mostre três conectores em amarelo lado a lado: um conector USB tipo B
retangular rotulado "USB", um conector micro-USB menor rotulado "MICRO-USB", e um
conector jack redondo de energia rotulado "ENERGIA (DC)". Título da face no topo:
"ALIMENTAÇÃO". Paleta: amarelo para os conectores, contorno preto, fundo branco.
```

## Face 4 — Lado B: "Ação e Som"

```
[cole o preâmbulo de estilo acima] +

Nesta face, mostre quatro ícones em verde: dois círculos com uma seta circular dentro
representando motores, rotulados "SERVO 1 (D10)" e "SERVO 2 (D11)"; um ícone de
alto-falante/campainha simples rotulado "BUZZER"; e um ícone de ondas de vibração
(círculos concêntricos saindo de um ponto) rotulado "SENSOR DE VIBRAÇÃO". Título da
face no topo: "AÇÃO E SOM". Paleta: verde para os quatro ícones, contorno preto,
fundo branco.
```

## Face 5 — Trás: "O Cérebro"

```
[cole o preâmbulo de estilo acima] +

Nesta face, mostre um retângulo roxo centralizado representando um chip/circuito
integrado com pequenas linhas nas bordas simulando pinos, rotulado "MICROCONTROLADOR",
um pequeno conector retangular de 6 pinos ao lado rotulado "ICSP", e um pequeno círculo
roxo no canto rotulado "LED POWER" (sempre aceso quando ligado). Título da face no
topo: "O CÉREBRO". Paleta: roxo para os três elementos, contorno preto, fundo branco.
```

## Face 6 — Base

Não gerar imagem — é a face que fica apoiada na mesa, sem componentes visíveis.

## Depois de gerar

Se o resultado sair inconsistente entre as faces (cores diferentes do pedido, estilo variando), vale regenerar pedindo pro ChatGPT "gere as 5 faces juntas numa grade 2x3, mantendo o mesmo estilo visual em todas" — geração em lote costuma manter mais consistência do que gerar uma por vez.

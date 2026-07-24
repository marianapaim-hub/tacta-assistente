# Guia sobre Cores – Cores e Acessibilidade (Chief of Design)

**Link:** https://chiefofdesign.com.br/cores-e-acessibilidade/

## Resumo

Guia em português sobre uso acessível de cores em projetos digitais. Explica que a principal estratégia para transmitir e reforçar uma mensagem visual é o contraste, e que cores com matizes diferentes (ex.: vermelho e verde) não garantem acessibilidade se tiverem luminosidade semelhante — segundo normas do W3C citadas, a diferença de brilho entre cor de fundo e de texto deve exceder 125 e a diferença de cor deve superar 500. Detalha as três propriedades de uma cor — matiz (o que diferencia uma cor de outra), saturação (intensidade) e luminosidade (percepção de claro/escuro) — e destaca que cerca de 10% da população tem algum tipo de daltonismo, incluindo casos de monocromacia (visão só em tons de cinza), para quem apenas o contraste de luminosidade (não de matiz) é perceptível. Recomenda três práticas: teste de saturação (remover a cor do design e checar se ainda é legível em escala de cinza), uso do simulador de daltonismo Coblis, e uso de verificadores de contraste do W3C. Cita ainda o sistema ColorADD, símbolos que identificam cores para pessoas daltônicas.

## Relevante para o projeto Tacta

- Regra prática direta para o design do site: nunca usar cor isoladamente para transmitir informação (ex.: "vermelho = erro", "verde = certo") sem reforço adicional (ícone, texto, padrão) — importante para feedback do chat de IA (mensagens de erro/sucesso) e para qualquer indicação de status.
- Validar toda a paleta de cores do site com um simulador de daltonismo (ex. Coblis) antes de finalizar, já que ~10% do público pode ter alguma forma de daltonismo — relevante mesmo em um site voltado a usuários cegos, pois pais/professores/colegas videntes também vão navegar nele.
- Aplicar a regra de diferença de brilho (>125) e diferença de cor (>500) da W3C como checklist extra além do contraste AA (4,5:1), especialmente em textos sobre imagens/fundos coloridos do site.
- Interessante notar o paralelo conceitual com o próprio Tacta: assim como a placa física usa "cores diferenciadas" como camada adicional (e não única) de identificação junto ao braile, o site deve seguir a mesma lógica de reforço multicanal (cor + texto + ícone/forma), nunca cor sozinha.

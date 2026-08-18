# /data

`componentes.json` é a fonte única de dados usada tanto pela tela de audiodescrição quanto (futuramente) pelo chat com IA — a ideia do "protocolo padrão" discutida com o mentor (ver `/docs/reunioes-mentoria`).

**Status atual:** os textos de narração descrevem a função elétrica de cada componente, baseados na documentação técnica da placa uShalom/Microshlaon (`/docs/referencias/uShalom-especificacoes-tecnicas.md`). Cada item também tem um campo `especificacaoTecnica` com dados reais tirados da lista de materiais (BOM) do esquemático — valores de resistor, tipo de sinal (PWM, digital alto/baixo), tensão de operação — usado pelo chat para responder com mais precisão. Onde o BOM não deixa claro o mapeamento exato (ex: qual resistor específico vai em qual LED, se o buzzer é ativo ou passivo), o texto descreve de forma genérica em vez de inventar.

Ainda **não incluem** a identificação específica do Tacta (posição no cubo, cor, texto em braile) — isso precisa vir do grupo. Quando tiver essa informação, é só adicionar campos novos em cada item (ex: `"posicaoCubo"`, `"corIdentificacao"`, `"textoBraile"`) e ajustar a narração.

Ver também `data/fundamentos-eletronica.json`, com conceitos gerais de eletrônica (Lei de Ohm, PWM, sinal digital) que o chat usa para explicar o "porquê" por trás dos componentes.

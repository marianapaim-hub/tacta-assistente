# /data

`componentes.json` é a fonte única de dados usada tanto pela tela de audiodescrição quanto (futuramente) pelo chat com IA — a ideia do "protocolo padrão" discutida com o mentor (ver `/docs/reunioes-mentoria`).

**Status atual:** os textos de narração descrevem a função elétrica de cada componente, baseados na documentação técnica da placa uShalom/Microshlaon (`/docs/referencias/uShalom-especificacoes-tecnicas.md`). Ainda **não incluem** a identificação específica do Tacta (posição no cubo, cor, texto em braile) — isso precisa vir do grupo. Quando tiver essa informação, é só adicionar campos novos em cada item (ex: `"posicaoCubo"`, `"corIdentificacao"`, `"textoBraile"`) e ajustar a narração.

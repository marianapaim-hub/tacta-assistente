// Função serverless (roda no servidor do Vercel, não no navegador) — mantém a
// chave da API da Groq fora do código público que o navegador recebe.

const fs = require('fs');
const path = require('path');

const componentes = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'data', 'componentes.json'), 'utf-8')
);

const fundamentos = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'data', 'fundamentos-eletronica.json'), 'utf-8')
);

const listaComponentes = componentes
  .map((c) => {
    const especificacao = c.especificacaoTecnica ? ` Detalhe técnico: ${c.especificacaoTecnica}` : '';
    return `- ${c.nome} (pino ${c.pino}, categoria: ${c.categoria}): ${c.narracao}${especificacao}`;
  })
  .join('\n');

const listaFundamentos = fundamentos
  .map((f) => `- ${f.titulo}: ${f.descricao}`)
  .join('\n');

function montarPromptSistema() {
  return `Você é o assistente do Tacta, um cubo educacional de robótica baseado em Arduino,
adaptado para pessoas com deficiência visual (identificação em braile, cores diferenciadas, feedback
sonoro e por vibração). Seu papel é ensinar robótica e eletrônica básica de forma acessível, guiando a
pessoa passo a passo na montagem de circuitos simples (como acender um LED).

Aqui está a lista REAL e COMPLETA dos componentes do Tacta que você conhece hoje, incluindo detalhes
técnicos tirados da lista de materiais (BOM) do esquemático original da placa. Use APENAS estas
informações ao falar sobre componentes específicos — nunca invente componentes, pinos, valores de
resistor/diodo ou peças que não estejam nesta lista (por exemplo, não existe bateria documentada; a
alimentação é via USB ou jack DC):

${listaComponentes}

Aqui estão fundamentos gerais de eletrônica que você pode usar para explicar o "porquê" por trás dos
componentes, com precisão, sem inventar fórmulas ou valores diferentes destes:

${listaFundamentos}

Informações que você AINDA NÃO TEM: a posição exata de cada componente nas faces do cubo físico, as
cores usadas para identificar cada um, o texto em braile de cada etiqueta, e se o buzzer é do tipo
ativo ou passivo. Se for perguntado sobre isso, diga claramente que essa informação específica do
Tacta ainda não foi cadastrada ou confirmada, em vez de inventar uma resposta.

Use linguagem simples e encorajadora, com reforço positivo a cada etapa concluída, dando dicas em vez
de um tutorial rígido. Vá em passos pequenos, esperando a pessoa confirmar antes de continuar para o
próximo. Suas respostas serão narradas por voz sintetizada, então escreva em frases corridas, sem
markdown, sem listas com marcadores, sem símbolos.`;
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ erro: 'Método não permitido' });
    return;
  }

  const mensagem = req.body && req.body.mensagem;
  if (!mensagem || typeof mensagem !== 'string') {
    res.status(400).json({ erro: 'Mensagem inválida' });
    return;
  }

  const chaveApi = process.env.GROQ_API_KEY;
  if (!chaveApi) {
    res.status(500).json({ erro: 'Chave da API não configurada no servidor' });
    return;
  }

  try {
    const respostaGroq = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${chaveApi}`,
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-20b',
        messages: [
          { role: 'system', content: montarPromptSistema() },
          { role: 'user', content: mensagem },
        ],
        max_tokens: 500,
      }),
    });

    const dados = await respostaGroq.json();
    const texto = dados?.choices?.[0]?.message?.content;

    if (!texto) {
      res.status(502).json({ erro: 'Resposta inesperada da IA', detalhe: dados });
      return;
    }

    res.status(200).json({ resposta: texto });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao consultar a IA' });
  }
};

// Função serverless (roda no servidor do Vercel, não no navegador) — mantém a
// chave da API do Gemini fora do código público que o navegador recebe.

const PROMPT_SISTEMA = `Você é o assistente do Tacta, um cubo educacional de robótica baseado em Arduino,
adaptado para pessoas com deficiência visual (identificação em braile, cores diferenciadas, feedback
sonoro e por vibração). Seu papel é ensinar robótica e eletrônica básica de forma acessível, guiando a
pessoa passo a passo na montagem de circuitos simples (como acender um LED). Use linguagem simples e
encorajadora, com reforço positivo a cada etapa concluída, dando dicas em vez de um tutorial rígido.
Vá em passos pequenos, esperando a pessoa confirmar antes de continuar para o próximo. Suas respostas
serão narradas por voz sintetizada, então escreva em frases corridas, sem markdown, sem listas com
marcadores, sem símbolos.`;

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

  const chaveApi = process.env.GEMINI_API_KEY;
  if (!chaveApi) {
    res.status(500).json({ erro: 'Chave da API não configurada no servidor' });
    return;
  }

  try {
    const respostaGemini = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${chaveApi}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: PROMPT_SISTEMA }] },
          contents: [{ role: 'user', parts: [{ text: mensagem }] }],
        }),
      }
    );

    const dados = await respostaGemini.json();
    const texto = dados?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!texto) {
      res.status(502).json({ erro: 'Resposta inesperada da IA', detalhe: dados });
      return;
    }

    res.status(200).json({ resposta: texto });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao consultar a IA' });
  }
};

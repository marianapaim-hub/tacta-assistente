// Envia a mensagem digitada pra função serverless em /api/chat, mostra a
// resposta no histórico e narra ela usando a Web Speech API do navegador.

const formulario = document.getElementById('formulario-chat');
const campoMensagem = document.getElementById('campo-mensagem');
const historico = document.getElementById('historico-chat');
const status = document.getElementById('status-chat');
const botaoParar = document.getElementById('botao-parar');
const botaoMicrofone = document.getElementById('botao-microfone');

function narrar(texto) {
  window.speechSynthesis.cancel();
  const fala = new SpeechSynthesisUtterance(texto);
  fala.lang = 'pt-BR';
  window.speechSynthesis.speak(fala);
}

function adicionarMensagem(texto, autor) {
  const bloco = document.createElement('p');
  bloco.className = autor === 'usuario' ? 'mensagem-usuario' : 'mensagem-ia';
  bloco.textContent = `${autor === 'usuario' ? 'Você' : 'Tacta'}: ${texto}`;
  historico.appendChild(bloco);
}

botaoParar.addEventListener('click', () => {
  window.speechSynthesis.cancel();
  status.textContent = 'Narração interrompida.';
});

// Entrada por voz — nem todo navegador suporta (funciona em Chrome/Edge; não
// funciona no Firefox e é instável no Safari). Se não tiver suporte, avisa e
// deixa só o campo de texto disponível.
const ReconhecimentoDeFala = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!ReconhecimentoDeFala) {
  botaoMicrofone.disabled = true;
  botaoMicrofone.title = 'Entrada por voz não é compatível com este navegador. Use o campo de texto.';
} else {
  const reconhecimento = new ReconhecimentoDeFala();
  reconhecimento.lang = 'pt-BR';
  reconhecimento.interimResults = false;
  reconhecimento.maxAlternatives = 1;

  let ouvindo = false;

  botaoMicrofone.addEventListener('click', () => {
    if (ouvindo) {
      reconhecimento.stop();
      return;
    }
    reconhecimento.start();
  });

  reconhecimento.addEventListener('start', () => {
    ouvindo = true;
    botaoMicrofone.setAttribute('aria-pressed', 'true');
    botaoMicrofone.textContent = '🎤 Ouvindo...';
    status.textContent = 'Ouvindo... fale sua pergunta.';
  });

  reconhecimento.addEventListener('end', () => {
    ouvindo = false;
    botaoMicrofone.setAttribute('aria-pressed', 'false');
    botaoMicrofone.textContent = '🎤 Falar';
  });

  reconhecimento.addEventListener('result', (evento) => {
    const transcricao = evento.results[0][0].transcript;
    campoMensagem.value = transcricao;
    status.textContent = `Você disse: ${transcricao}`;
    formulario.requestSubmit();
  });

  reconhecimento.addEventListener('error', (evento) => {
    if (evento.error === 'not-allowed') {
      status.textContent = 'Permissão de microfone negada. Ative o microfone nas configurações do navegador para usar a entrada por voz.';
    } else if (evento.error === 'no-speech') {
      status.textContent = 'Não ouvi nada. Tente falar novamente.';
    } else {
      status.textContent = 'Não consegui entender pelo microfone. Tente de novo ou digite sua mensagem.';
    }
  });
}

formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault();
  const mensagem = campoMensagem.value.trim();
  if (!mensagem) return;

  adicionarMensagem(mensagem, 'usuario');
  campoMensagem.value = '';
  campoMensagem.disabled = true;
  status.textContent = 'Pensando...';

  try {
    const resposta = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mensagem }),
    });

    const dados = await resposta.json();

    if (!resposta.ok) {
      status.textContent = 'Não consegui obter uma resposta agora. Tente de novo.';
      return;
    }

    adicionarMensagem(dados.resposta, 'ia');
    status.textContent = '';
    narrar(dados.resposta);
  } catch (erro) {
    status.textContent = 'Erro de conexão. Verifique sua internet e tente de novo.';
  } finally {
    campoMensagem.disabled = false;
    campoMensagem.focus();
  }
});

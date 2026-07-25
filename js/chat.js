// Envia a mensagem digitada pra função serverless em /api/chat, mostra a
// resposta no histórico e narra ela usando a Web Speech API do navegador.

const formulario = document.getElementById('formulario-chat');
const campoMensagem = document.getElementById('campo-mensagem');
const historico = document.getElementById('historico-chat');
const status = document.getElementById('status-chat');
const botaoParar = document.getElementById('botao-parar');

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

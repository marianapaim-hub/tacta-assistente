// Lê a lista de componentes de data/componentes.json e monta um botão por
// componente. Ao clicar, narra o texto usando a Web Speech API do navegador.

const lista = document.getElementById('lista-componentes');
const status = document.getElementById('status-narracao');
const botaoParar = document.getElementById('botao-parar');

function narrar(texto) {
  window.speechSynthesis.cancel(); // interrompe qualquer narração em andamento antes de começar outra
  const fala = new SpeechSynthesisUtterance(texto);
  fala.lang = 'pt-BR';
  status.textContent = 'Narrando...';
  fala.onend = () => {
    status.textContent = 'Narração concluída.';
  };
  window.speechSynthesis.speak(fala);
}

botaoParar.addEventListener('click', () => {
  window.speechSynthesis.cancel();
  status.textContent = 'Narração interrompida.';
});

fetch('data/componentes.json')
  .then((resposta) => resposta.json())
  .then((componentes) => {
    componentes.forEach((componente) => {
      const item = document.createElement('li');
      const botao = document.createElement('button');
      botao.type = 'button';
      botao.className = 'botao-lista';
      botao.textContent = `${componente.nome} (pino ${componente.pino})`;
      botao.setAttribute('aria-label', `Ouvir descrição de ${componente.nome}, pino ${componente.pino}`);
      botao.addEventListener('click', () => narrar(componente.narracao));
      item.appendChild(botao);
      lista.appendChild(item);
    });
  })
  .catch(() => {
    status.textContent = 'Não foi possível carregar a lista de componentes.';
  });

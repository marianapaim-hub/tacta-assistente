// Lê a lista de componentes de data/componentes.json, monta a lista de botões e
// mantém o diagrama SVG da face do cubo em sincronia (destaque + zoom).

const lista = document.getElementById('lista-componentes');
const status = document.getElementById('status-narracao');
const cartaoStatus = document.getElementById('cartao-status');
const botaoParar = document.getElementById('botao-parar');
const narracaoTitulo = document.getElementById('narracao-titulo');
const narracaoTexto = document.getElementById('narracao-texto');
const marcaDestaque = document.getElementById('marca-destaque');
const diagramaEscala = document.getElementById('diagrama-escala');
const botaoZoomMais = document.getElementById('botao-zoom-mais');
const botaoZoomMenos = document.getElementById('botao-zoom-menos');
const zoomValor = document.getElementById('zoom-valor');

// Posição de cada componente no diagrama SVG (viewBox 400x400), pra desenhar o
// contorno de destaque em cima da peça que está sendo narrada.
const POSICAO_NO_DIAGRAMA = {
  'led-d0': { x: 38, y: 100, w: 36, h: 36 },
  'led-d1': { x: 79, y: 100, w: 36, h: 36 },
  'led-d2': { x: 120, y: 100, w: 36, h: 36 },
  'led-d3': { x: 161, y: 100, w: 36, h: 36 },
  'led-d4': { x: 202, y: 100, w: 36, h: 36 },
  'led-d5': { x: 243, y: 100, w: 36, h: 36 },
  'led-d6': { x: 284, y: 100, w: 36, h: 36 },
  'led-d7': { x: 325, y: 100, w: 36, h: 36 },
  'botao-d8': { x: 36, y: 182, w: 64, h: 64 },
  'botao-d9': { x: 104, y: 182, w: 64, h: 64 },
  'servo-d10': { x: 208, y: 182, w: 74, h: 64 },
  'servo-d11': { x: 288, y: 182, w: 74, h: 64 },
  'buzzer-d12': { x: 42, y: 286, w: 60, h: 60 },
  'led-13': { x: 278, y: 294, w: 44, h: 44 },
};

let zoom = 1;
const ZOOM_MIN = 0.75;
const ZOOM_MAX = 2;
const ZOOM_PASSO = 0.25;
const ouvidos = new Set();

function aplicarZoom() {
  diagramaEscala.style.transform = `scale(${zoom})`;
  zoomValor.textContent = Math.round(zoom * 100) + '%';
}

botaoZoomMais.addEventListener('click', () => {
  zoom = Math.min(ZOOM_MAX, +(zoom + ZOOM_PASSO).toFixed(2));
  aplicarZoom();
});

botaoZoomMenos.addEventListener('click', () => {
  zoom = Math.max(ZOOM_MIN, +(zoom - ZOOM_PASSO).toFixed(2));
  aplicarZoom();
});

function destacarNoDiagrama(id) {
  const posicao = POSICAO_NO_DIAGRAMA[id];
  if (!posicao) {
    marcaDestaque.setAttribute('opacity', '0');
    return;
  }
  marcaDestaque.setAttribute('x', posicao.x);
  marcaDestaque.setAttribute('y', posicao.y);
  marcaDestaque.setAttribute('width', posicao.w);
  marcaDestaque.setAttribute('height', posicao.h);
  marcaDestaque.setAttribute('opacity', '1');
}

function atualizarEstadoBotao(botao, estado) {
  botao.dataset.estado = estado;
  const rotuloEstado = botao.querySelector('.estado');
  rotuloEstado.textContent = estado === 'narrando' ? 'Narrando' : estado === 'ouvido' ? 'Ouvido' : 'Ouvir';
}

function narrarComponente(componente, botao) {
  document.querySelectorAll('.botao-lista').forEach((b) => {
    if (b !== botao) atualizarEstadoBotao(b, ouvidos.has(b.dataset.id) ? 'ouvido' : 'padrao');
  });

  cartaoStatus.dataset.narrando = 'true';
  status.textContent = `Narrando ${componente.nome}, pino ${componente.pino}.`;
  atualizarEstadoBotao(botao, 'narrando');
  destacarNoDiagrama(componente.id);
  narracaoTitulo.textContent = `${componente.nome} · pino ${componente.pino}`;
  narracaoTexto.textContent = componente.narracao;

  narrar(componente.narracao, () => {
    cartaoStatus.dataset.narrando = 'false';
    status.textContent = `Narração concluída: ${componente.nome}.`;
    ouvidos.add(componente.id);
    atualizarEstadoBotao(botao, 'ouvido');
  });
}

botaoParar.addEventListener('click', () => {
  window.speechSynthesis.cancel();
  cartaoStatus.dataset.narrando = 'false';
  status.textContent = 'Narração interrompida.';
  document.querySelectorAll('.botao-lista[data-estado="narrando"]').forEach((b) => {
    atualizarEstadoBotao(b, ouvidos.has(b.dataset.id) ? 'ouvido' : 'padrao');
  });
});

fetch('data/componentes.json')
  .then((resposta) => resposta.json())
  .then((componentes) => {
    componentes.forEach((componente) => {
      const item = document.createElement('li');
      const botao = document.createElement('button');
      botao.type = 'button';
      botao.className = 'botao-lista';
      botao.dataset.id = componente.id;
      botao.dataset.estado = 'padrao';
      botao.setAttribute('aria-label', `Ouvir descrição de ${componente.nome}, pino ${componente.pino}`);
      botao.innerHTML = `
        <span class="pino" aria-hidden="true">${componente.pino}</span>
        <span class="nome-componente">${componente.nome}</span>
        <span class="estado">Ouvir</span>
      `;
      botao.addEventListener('click', () => narrarComponente(componente, botao));
      item.appendChild(botao);
      lista.appendChild(item);
    });
  })
  .catch(() => {
    status.textContent = 'Não foi possível carregar a lista de componentes.';
  });

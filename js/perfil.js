// Perfil leve (compartilhado pelas 3 páginas): guarda só um nome/apelido no
// navegador (localStorage), sem senha nem e-mail — ver docs/briefing-design-interface.md.
// Também cuida do controle de tamanho de texto (A-/A+) e do menu de conta.

const CHAVE_NOME = 'tacta-nome';
const TAMANHO_MIN = 0.9;
const TAMANHO_MAX = 1.4;
const TAMANHO_PASSO = 0.1;

function obterNomeSalvo() {
  try {
    return window.localStorage.getItem(CHAVE_NOME) || '';
  } catch (e) {
    return '';
  }
}

function salvarNome(nome) {
  try {
    window.localStorage.setItem(CHAVE_NOME, nome);
  } catch (e) {
    // localStorage indisponível (modo privado, por exemplo) — segue sem salvar
  }
}

function aplicarNomeNaPagina(nome) {
  const nomeExibido = nome.trim() || 'visitante';
  const inicial = (nome.trim()[0] || 'T').toUpperCase();

  document.querySelectorAll('[data-perfil-nome]').forEach((el) => {
    el.textContent = nomeExibido;
  });
  document.querySelectorAll('[data-perfil-inicial]').forEach((el) => {
    el.textContent = inicial;
  });
  document.querySelectorAll('[data-perfil-rotulo]').forEach((el) => {
    el.textContent = nomeExibido;
  });
}

function iniciarPerfil() {
  const botaoPerfil = document.getElementById('botao-perfil');
  const painelPerfil = document.getElementById('painel-perfil');
  const campoNome = document.getElementById('campo-nome-perfil');
  const formPerfil = document.getElementById('form-perfil');

  const nomeAtual = obterNomeSalvo();
  aplicarNomeNaPagina(nomeAtual);
  if (campoNome) campoNome.value = nomeAtual;

  if (!botaoPerfil || !painelPerfil) return;

  function fecharPainel() {
    painelPerfil.hidden = true;
    botaoPerfil.setAttribute('aria-expanded', 'false');
  }

  function alternarPainel() {
    const aberto = !painelPerfil.hidden;
    painelPerfil.hidden = aberto;
    botaoPerfil.setAttribute('aria-expanded', String(!aberto));
    if (!aberto && campoNome) campoNome.focus();
  }

  botaoPerfil.addEventListener('click', alternarPainel);

  document.addEventListener('click', (evento) => {
    if (!painelPerfil.hidden && !painelPerfil.contains(evento.target) && !botaoPerfil.contains(evento.target)) {
      fecharPainel();
    }
  });

  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape' && !painelPerfil.hidden) {
      fecharPainel();
      botaoPerfil.focus();
    }
  });

  if (formPerfil) {
    formPerfil.addEventListener('submit', (evento) => {
      evento.preventDefault();
      const nome = campoNome ? campoNome.value : '';
      salvarNome(nome);
      aplicarNomeNaPagina(nome);
      fecharPainel();
      botaoPerfil.focus();
    });
  }
}

function iniciarControleDeTexto() {
  const botaoMenor = document.getElementById('botao-texto-menor');
  const botaoMaior = document.getElementById('botao-texto-maior');
  if (!botaoMenor || !botaoMaior) return;

  function tamanhoAtual() {
    return parseFloat(document.documentElement.style.fontSize || '100') / 100 || 1;
  }

  function ajustar(delta) {
    const novo = Math.min(TAMANHO_MAX, Math.max(TAMANHO_MIN, +(tamanhoAtual() + delta).toFixed(2)));
    document.documentElement.style.fontSize = novo * 100 + '%';
  }

  botaoMenor.addEventListener('click', () => ajustar(-TAMANHO_PASSO));
  botaoMaior.addEventListener('click', () => ajustar(TAMANHO_PASSO));
}

iniciarPerfil();
iniciarControleDeTexto();

// Narração compartilhada (chat e audiodescrição) via Web Speech API.
// A voz padrão que o navegador escolhe sozinho costuma ser a mais robótica
// disponível no sistema operacional — aqui procuramos ativamente por uma
// voz em português melhor entre as instaladas (ex.: vozes "Google" do Chrome
// são online/neurais e soam bem mais naturais que as vozes offline do Windows).

let vozEscolhida = null;

function escolherMelhorVoz() {
  const vozes = window.speechSynthesis.getVoices();
  const vozesPtBr = vozes.filter((v) => v.lang === 'pt-BR' || v.lang === 'pt_BR');

  vozEscolhida =
    vozesPtBr.find((v) => /google|natural|neural|online/i.test(v.name)) ||
    vozesPtBr[0] ||
    vozes.find((v) => v.lang.startsWith('pt')) ||
    null;
}

escolherMelhorVoz();
// getVoices() costuma vir vazia na primeira chamada — a lista carrega de
// forma assíncrona e este evento dispara quando ela está pronta.
if ('onvoiceschanged' in window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = escolherMelhorVoz;
}

function narrar(texto, aoTerminar) {
  window.speechSynthesis.cancel();
  const fala = new SpeechSynthesisUtterance(texto);
  fala.lang = 'pt-BR';
  fala.rate = 0.95;
  fala.pitch = 1;
  if (vozEscolhida) fala.voice = vozEscolhida;
  if (aoTerminar) fala.onend = aoTerminar;
  window.speechSynthesis.speak(fala);
}

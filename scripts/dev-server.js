// Servidor local simples só para desenvolvimento/testes — não faz parte do site em produção
// (em produção, o Vercel serve os arquivos estáticos automaticamente).
const http = require('http');
const fs = require('fs');
const path = require('path');

const raiz = path.join(__dirname, '..');
const porta = 5500;

const tiposMime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
};

http
  .createServer((req, res) => {
    let caminhoArquivo = path.join(raiz, decodeURIComponent(req.url.split('?')[0]));
    if (req.url === '/') caminhoArquivo = path.join(raiz, 'index.html');

    fs.readFile(caminhoArquivo, (erro, conteudo) => {
      if (erro) {
        res.writeHead(404);
        res.end('Não encontrado');
        return;
      }
      const ext = path.extname(caminhoArquivo);
      res.writeHead(200, { 'Content-Type': tiposMime[ext] || 'application/octet-stream' });
      res.end(conteudo);
    });
  })
  .listen(porta, () => console.log(`Servidor local rodando em http://localhost:${porta}`));

const http = require('http');

const app = http.createServer();

app.on('request', (req, res) => {
  res.writeHead(200, {
    'content-type': 'text/html;charset=utf8',
  });
});
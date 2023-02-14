const http = require('http');

const app = http.createServer();

const PORT = 2021;
app.on('request', (req, res) => {
  res.writeHead(200, {
    'content-type': 'text/html;charset=utf8',
  });
  res.end(`欢迎来到崭新的${PORT}。`);
});

app.listen(PORT);

const HOST = `localhost:${PORT}`;
console.log(`服务器已启动，监听${PORT}端口，请访问${HOST}`);
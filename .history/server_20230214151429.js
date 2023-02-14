/** 引入创建网站服务器的模块 */
const http = require('http');

/** 创建web服务器 */
const app = http.createServer();

/** 监听端口 */
const PORT = 2023;

/** 监听所有请求，客户端发送请求时执行 */
app.on('request', (req, res) => {
  res.writeHead(200, {
    'content-type': 'text/html;charset=utf',
  });
  res.end(`欢迎来到崭新的2023！`);
});

/** 启动监听端口 */
app.listen(PORT);

const HOST = `http://localhost:${PORT}`;
console.log(`服务器已启动，监听${PORT}端口，请访问：${HOST}`);
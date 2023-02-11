import http from 'http';

const host = '127.0.0.1';
const port = '8001';

const server = http.createServer((req, res) => {});

server.listen(port, host, () => {
  console.log(`Server is started on ${port} port`);
});

import http from 'http';
import { routes } from './routes.js';

const host = '127.0.0.1';
const port = '8001';

const server = http.createServer((req, res) => {
  const route = routes.find(
    (item) => item.url === req.url && item.method === req.method
  );
  if (!route) {
    res.statusCode = 404;
    return res.end('404 Not Found');
  }
  return route.action(req, res);
});

server.listen(port, host, () => {
  console.log(`Server is started on ${port} port`);
});

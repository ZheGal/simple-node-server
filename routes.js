const mainRoute = (_, res) => {
    res.write('test');
    res.end();
};

const helloRoute = (_, res) => {
    res.write('Hello World!');
    res.end();
}

export const routes = [
  {
    url: '/',
    method: 'GET',
    action: mainRoute,
  },
  {
    url: '/hello',
    method: 'GET',
    action: helloRoute,
  }
];

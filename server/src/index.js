const http = require('http');

const app = require('./app');
const sockets = require('./sockets');

const server = http.Server(app);
sockets.init(server);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});

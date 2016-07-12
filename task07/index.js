
const config = require('config');
const serverConfig = config.get('server');

const App = require('./app');
const app = new App();

app.use((req, res)  => {
  console.log(`url: ${req.url}`);
  console.log(`method: ${req.method}`);
});

app.use((req, res) => {
  console.log(req.headers);
  res.end('Hello world');
});

app.start(serverConfig.port, serverConfig.host, () => console.log(`listening on ${serverConfig.port}`));

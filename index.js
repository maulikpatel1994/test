// Environment variables
require('dotenv').config();

const app = require('express')();


// Body Parse
const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Express Settings
app.set('port', process.env.PORT);

// CORS
app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Request-Headers', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,Access-Control-Allow-Headers, Authorization, X-L10N-Locale');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
});

module.exports = app;

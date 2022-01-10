const app = require('express')();
const winston = require('winston');
const expressWinston = require('express-winston');
const PORT = 3000;

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
  ]
});

app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.json()
  ),
  responseField: null,
  requestWhitelist: [],
  responseWhitelist: ['body'],
  metaField: null,
  msg: 'ok',
  dynamicMeta: function (req, res) {
    return {
      method: req.method,
      path: req.originalUrl,
      status: res.statusCode,
      message: "pok",
    };
  },
}));

app.disable('etag');

app.listen(PORT, function () {
  logger.info(`application is running on port ${PORT}`);
});

app.get('/', function (req, res) {
  res.status(200).json({
    data: {
      message: "Hello World:)"
    }
  });
});

app.get('/test', function (req, res) {
  res.status(200).json({
    data: {
      message: "Test :)"
    }
  });
});

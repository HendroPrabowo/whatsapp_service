const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const messageRoutes = require('./route/route');
const logger = require('./config/logger');
const config = require('./config/config');
const { initDb } = require('./config/sequelize');
const Message = require('./model/message');

const app = express();
const PORT = config.port;
const NODE_ENV = config.env;

// Enable All CORS Requests
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Routing
app.use('/', messageRoutes);

async function startServer() {
  try {
    // init sqlite
    await initDb();

    app.listen(PORT, () => {
      logger.info(`app started at http://localhost:${PORT} in ${NODE_ENV} environment`);
    });
  } catch (error) {
    logger.error(error, 'failed to start server due to DB error');
    process.exit(1);
  }
}

startServer();

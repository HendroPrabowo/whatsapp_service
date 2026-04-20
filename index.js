const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // ✅ add this

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

// ✅ Serve static files (IMPORTANT)
app.use(express.static(path.join(__dirname, 'public')));

// Routing (API)
app.use('/', messageRoutes);

// ✅ Optional: force index.html on root (safe fallback)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

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

require('./scheduler/scheduler');
startServer();
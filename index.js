const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const messageRoutes = require('./route/route');
const logger = require('./config/logger');
const config = require('./config/config');

const app = express();
const PORT = config.port;
const NODE_ENV = config.env;

// Enable All CORS Requests
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Routing
app.use('/', messageRoutes);

// Start server
app.listen(PORT, () => {
    logger.info(`app start in http://localhost:${PORT} in ${NODE_ENV} environment`);
});

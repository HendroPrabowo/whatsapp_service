const express = require('express');
const bodyParser = require('body-parser');
const messageRoutes = require('./route/route');
const logger = require('./config/logger');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routing
app.use('/', messageRoutes);

// Start server
app.listen(port, () => {
    logger.info(`App start in http://localhost:${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const messageRoutes = require('./route/route');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routing
app.use('/', messageRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});

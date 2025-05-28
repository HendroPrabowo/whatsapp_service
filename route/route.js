const express = require('express');
const router = express.Router();
const { sendMessage } = require('../controller/controller');

router.post('/send-message', sendMessage);

module.exports = router;

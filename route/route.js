const express = require('express');
const router = express.Router();
const { sendMessage, scheduledSendMessage } = require('../controller/controller');

router.post('/send-message', sendMessage);
router.post('/send-message/scheduled', scheduledSendMessage);

module.exports = router;

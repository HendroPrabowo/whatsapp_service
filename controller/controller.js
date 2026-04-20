const { sendMessageToNumber, saveScheduledMessage } = require('../service/whatsapp_service');
const logger = require('../config/logger');

async function sendMessage(req, res) {
    const { number, message } = req.body;
    logger.info(`send message to ${number}`);
    if (!number || !message) {
        return res.status(400).json({ success: false, message: 'parameter number and message cannot empty' });
    }

    const result = await sendMessageToNumber(number, message);

    if (result.success) {
        res.json(result);
    } else {
        res.status(500).json(result);
    }
}

async function scheduledSendMessage(req, res) {
    const { number, message, send_time } = req.body;
    logger.info(`scheduled send message to ${number}, message : ${message}, send_time : ${send_time}`);
    if (!number || !message || !send_time) {
        return res.status(400).json({ success: false, message: 'parameter number, message or send_time cannot empty' });
    }

    const result = await saveScheduledMessage(number, message, send_time);

    if (result.success) {
        res.json(result);
    } else {
        res.status(500).json(result);
    }
}

module.exports = {
    sendMessage,
    scheduledSendMessage
};

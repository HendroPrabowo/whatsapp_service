const whatsapp_client = require('../config/whatsapp_client');
const logger = require('../config/logger');
const { saveMessage } = require('../repository/message')

async function sendMessageToNumber(number, message) {
    const chatId = number + '@c.us';
    try {
        await whatsapp_client.sendMessage(chatId, message);
        await saveMessage(number, message);
        return { success: true, message: `success send to ${number}` };
    } catch (error) {
        logger.error({ err: error }, 'something went wrong');
        return { success: false, message: `failed send to ${number}`, error };
    }
}

module.exports = {
    sendMessageToNumber,
};

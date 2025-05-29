const client = require('../config/config');
const logger = require('./config/logger');

async function sendMessageToNumber(number, message) {
    const chatId = number + '@c.us';

    try {
        await client.sendMessage(chatId, message);
        return { success: true, message: `success send to ${number}` };
    } catch (error) {
        logger.error({ err: error }, 'something went wrong');
        return { success: false, message: `failed send to ${number}`, error };
    }
}

module.exports = {
    sendMessageToNumber,
};

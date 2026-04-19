const {client} = require('../config/whatsapp_client');
const logger = require('../config/logger');
const { saveMessage } = require('../repository/message');
const { saveMessageQueue } = require('../repository/message_queue');

async function sendMessageToNumber(number, message) {
    let enhancedNumber = enhancePhoneNumber(number);
    const chatId = enhancedNumber + '@c.us';
    logger.info(`enhanced phone number : ${enhancedNumber}`)

    try {
        await client.sendMessage(chatId, message);
        await saveMessage(enhancedNumber, message);
        return { success: true, message: `success send to ${number}` };
    } catch (error) {
        logger.error(error, 'something went wrong when send message');
        return { success: false, message: `failed send to ${enhancedNumber}`, error };
    }
}

async function saveScheduledMessage(number, message, send_time) {
    try {
        await saveMessageQueue(number, message, send_time);
        return { success: true, message: `success scheduled message` };
    } catch (error) {
        logger.error(error, 'something went wrong');
        return { success: false, message: `failed save scheduled message`, error };
    }
}

function enhancePhoneNumber(number) {
    if (!number) return number;
    number = number.trim();

    if (number.startsWith('0')) {
        return '62' + number.slice(1);
    }
    return number;
}

module.exports = {
    sendMessageToNumber,
    saveScheduledMessage
};

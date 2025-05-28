const client = require('../config/config');

async function sendMessageToNumber(number, message) {
    const chatId = number + '@c.us';

    try {
        await client.sendMessage(chatId, message);
        return { success: true, message: `success send to ${number}` };
    } catch (error) {
        console.error('An error occurred:', {
            message: error.message,
            stack: error.stack,
            name: error.name,
        });
        return { success: false, message: `failed send to ${number}`, error };
    }
}

module.exports = {
    sendMessageToNumber,
};

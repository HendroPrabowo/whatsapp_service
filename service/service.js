const client = require('../config/config');

async function sendMessageToNumber(number, message) {
    const chatId = number + '@c.us';

    try {
        await client.sendMessage(chatId, message);
        return { success: true, message: `Pesan berhasil dikirim ke ${number}` };
    } catch (error) {
        return { success: false, message: `Gagal mengirim pesan ke ${number}`, error };
    }
}

module.exports = {
    sendMessageToNumber,
};

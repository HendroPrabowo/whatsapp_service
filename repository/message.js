const Message = require('../model/message');
const logger = require('../config/logger')

async function saveMessage(number, message) {
    const result = await Message.create({ number, message });
    return result;
}

module.exports = {
    saveMessage,
};

const Message = require('../model/message');
const MessageQueue = require('../model/message_queue');
const logger = require('../config/logger')

async function saveMessageQueue(number, message, send_time) {
    const message_queue = await MessageQueue.create({ number, message, send_time, is_sent: false });
    return message_queue;
}

module.exports = {
    saveMessageQueue,
};

const cron = require('node-cron');
const { Op } = require('sequelize');
const MessageQueue = require('../model/message_queue');
const logger = require('../config/logger');
const { sendMessageToNumber } = require('../service/whatsapp_service');
const { getIsWhatsappReady } = require('../config/whatsapp_client');

// Run every 10 seconds
cron.schedule('* * * * *', async () => {
    if (!getIsWhatsappReady()) {
        logger.info('whatsapp client still not ready');
        return;
    }

    try {
        const now = new Date();
        const messages = await MessageQueue.findAll({
            where: {
                is_sent: false,
                send_time: {
                    [Op.lte]: now
                }
            }
        });

        for (const msg of messages) {
            try {
                logger.info(`sending message to ${msg.number}`);
                await sendMessageToNumber(msg.number, msg.message);

                msg.is_sent = true;
                await msg.save();

                logger.info(`sent to ${msg.number}`);
            } catch (err) {
                logger.error(err, `failed sending to ${msg.number}`);
            }
        }

    } catch (err) {
        logger.console.error(err, 'scheduler error');
    }
});
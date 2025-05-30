const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const logger = require('../config/logger');

const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    logger.info('whatsapp client ready');
});

client.initialize();

module.exports = client;

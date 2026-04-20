const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const logger = require('../config/logger');

const client = new Client({
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

let isWhatsappReady = false;

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    logger.info('whatsapp client ready');
    isWhatsappReady = true;
});

client.initialize();

module.exports = {
    client,
    getIsWhatsappReady: () => isWhatsappReady
}

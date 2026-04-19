const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelize');

// Define a model
const MessageQueue = sequelize.define('message_queue', {
    number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    send_time: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    is_sent: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
});

module.exports = MessageQueue;
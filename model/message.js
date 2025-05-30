const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelize');

// Define a model
const Message = sequelize.define('Message', {
    number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Message;
const { Sequelize, DataTypes } = require('sequelize');
const logger = require('./logger');

// Initialize Sequelize to use SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './sqlite/db.sqlite',
  logging: false, // disable logging, optional
  define: {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

async function initDb() {
  try {
    await sequelize.authenticate();
    logger.info('connection to SQLite has been established successfully.');
    await sequelize.sync({ alter: true });
    logger.info('database synced successfully.');
  } catch (error) {
    logger.error(error, 'unable to connect to the database');
    process.exit(1); // optionally exit on failure
  }
}

module.exports = {
  sequelize,
  initDb,
};

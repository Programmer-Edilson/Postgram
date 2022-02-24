const Sequelize = require('sequelize');
const dbConnector = require('../connection');

const Like = dbConnector.define('likes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: new Date()
    }
});

module.exports = Like;

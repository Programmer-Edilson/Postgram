const Sequelize = require('sequelize');
const dbConnector = require('../connection');

const Comment = dbConnector.define('comments', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    commentText: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: new Date()
    }
});

module.exports = Comment;

const Sequelize = require('sequelize');
const dbConnector = require('../connection');

const Post = dbConnector.define('posts', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    postImage: {
        type: Sequelize.STRING,
        allowNull: false
    },
    postText: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date()
    },
});

module.exports = Post;

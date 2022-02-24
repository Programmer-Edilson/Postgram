const User = require('./user');
const Post = require('./post');
const Like = require('./like');
const Comment = require('./comment');


User.hasMany(Post, {
    onDelete: 'CASCADE',
    foreignKey: {
        allowNull: false
    }
});
Post.belongsTo(User);

Post.hasMany(Comment, {onDelete: 'CASCADE'});
Comment.belongsTo(Post);

Post.hasMany(Like, {onDelete: 'CASCADE'});
Like.belongsTo(Post);

User.hasMany(Like, {onDelete: 'CASCADE'});
Like.belongsTo(User);

User.hasMany(Comment, {onDelete: 'CASCADE'});
Comment.belongsTo(User);

module.exports = {User, Post, Like, Comment};

const Connection = require('./connection');

// Tables
const User = require('./models/associations').User;  
const Post = require('./models/associations').Post;  
const Like = require('./models/associations').Like;
const Comment = require('./models/associations').Comment;  

// Test database connection
(async () => {
    try {
        await Connection.sync()
            .then(() => console.log("DB connected"));
    } catch (error) {
        console.log(error);
        return false;
    }
})();

// Test database Tables
(async () => {
    try {
        await User.sync({force: true})
            .then(() => console.log("Users table connected"));
        await Post.sync({force: true})
            .then(() => console.log("Posts table connected"));
        await Like.sync({force: true})
            .then(() => console.log("Likes table connected"));
        await Comment.sync({force: true})
            .then(() => console.log("Comments table connected"));
    } catch (error) {
        console.log(error);
        return false;
    }
})();

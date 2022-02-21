var express = require('express');
var router = express.Router();

/* GET home page. */
const posts = [
    {
        postText:"Hi, welcome!",
        postImage: "pic11.jpg"
    },
    {
        postText: "Hi, welcome again!",
        postImage: "pic22.jpg"
    },
    {
        postText: "Hi, welcome again dev!",
        postImage: "pic33.jpg"
    },
    {
        postText: "Hi, welcome express dev!",
        postImage: "pic44.jpg"
    },
    {
        postText: "Hi, welcome and let's work!",
        postImage: "pic55.jpeg"
    },
]


router.get('/', function(req, res, next) {
  res.render('feed', { title: 'Postgram', posts: posts });
});

module.exports = router;

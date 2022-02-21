const express = require('express');
const multer = require('multer');
const path = require('path')
const fs = require('fs');

const router = express.Router();

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


router.get('/', (req, res, next) => {
    res.render('home-page', { title: "Postgram", posts: posts });
    next();
});

router.get('/publish', (req, res, next) => {
    res.render('create-post', {title: "Publish"});
});

const uploadImage = multer({
    dest: path.join(__dirname, "../public/images/uploads/")
});



router.post('/publish', uploadImage.single("file"), (req, res, next) => {

    let newPost = {};

    const postText = req.body.postText.toString();
    newPost.postText = postText;

    if (req.file) {
        const imageExtension = path.extname(req.file.originalname).toLowerCase();
        const randomImageName = `image.${Date.now()}.${imageExtension}`; 
        const tempPath = req.file.path;
        const targetPath = path.join(__dirname, `../public/images/uploads/${randomImageName}`);
        
        fs.rename(tempPath, targetPath, err => {
            if (err) {
                console.log(err);
                return res.send(err);
            }
            const postImage= randomImageName.toString();
            newPost.postImage = postImage;
        });
    }
    posts.push(newPost);
    res.redirect('/');
    next();
});





module.exports = router;

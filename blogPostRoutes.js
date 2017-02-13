const express = require('express');

const BlogPost = require('./app/models/blogpostModel');

const blogRoutes = module.exports = express();

blogRoutes.get('/data/posts/', (req, res) => {
    BlogPost.find({}, (err, posts) => {
        if (!err) {
            console.log(posts);
            console.log('fire');
            res.json(posts);
        } else {
            console.log(err);
        }

    });

});


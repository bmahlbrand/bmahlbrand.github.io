const express = require('express');

const BlogPost = require('./app/models/blogpostModel');

const blogRoutes = module.exports = express();

blogRoutes.get('/data/posts/', (req, res) => {
    BlogPost.find({}, (err, posts) => {
        if (!err) {
            res.json(posts);
        } else {
            console.log(err);
        }

    });

});


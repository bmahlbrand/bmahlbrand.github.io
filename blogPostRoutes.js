const express = require('express');

const BlogPost = require('./app/models/blogpostModel');

const blogRoutes = module.exports = express();

blogRoutes.get('*posts', (req, res, next) => {
	BlogPost.find({}, (err, docs) => {
		console.log(docs);
	});
	console.log('fire');
	next();
});

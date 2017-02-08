const express = require('express');

const BlogPost = require('./app/models/blogpostModel');

const blogRoutes = module.exports = express.Router();

blogRoutes.get('*posts', () => {
	BlogPost.find({}, (err, docs) => {
		console.log(docs);
	});
	console.log('fire');
});

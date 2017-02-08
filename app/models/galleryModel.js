const mongoose = require('mongoose');

const gallerySchema = mongoose.Schema({

	tags: [ { tag: String } ],
	link: [ { link: String } ]

}});

module.exports = mongoose.model('Gallery', gallerySchema, 'gallery');
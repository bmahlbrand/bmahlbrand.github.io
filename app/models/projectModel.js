const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({

	title: String,
	description: String,
	pix: [ { link: String } ],
	dates: { type: Date, default: Date.now },
	link: String,
	tags: [ { tag: String } ],

});

module.exports = mongoose.model('Project', projectSchema, 'projects');

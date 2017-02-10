const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({

	title: String,
	description: [ {section: String } ],
	pix: [ { link: String } ],
	dates: String,
	link: String,
	tags: [ { tag: String } ],

});

module.exports = mongoose.model('Project', projectSchema, 'projects');

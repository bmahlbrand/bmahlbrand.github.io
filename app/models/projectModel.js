const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({

	title: String,
	description: String,
	pix: [ { link: String } ],
	dates: { type: Date, default: Date.now },
	tags: [ { tag: String } ],

}});
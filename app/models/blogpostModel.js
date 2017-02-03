const mongoose = require('mongoose');

const blogpostSchema = mongoose.Schema({

	title: String,
	author: String,
	body: [{ section: String }],
	references: [{ link: String, author: String }],
	tags: [ { tag: String } ],
	pix: [ { link: String } ],
	comments: [{ body: String, date: Date }],
	date: { type: Date, default: Date.now },
	hidden: Boolean,
	meta: { votes: Number }

}});

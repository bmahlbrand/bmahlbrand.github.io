const mongoose = require('mongoose');

const visitorSchema = mongoose.Schema({
	agent: String,
	ip: String,
	referrer: String,
	screen: {
		width: String,
		height: String
	}
});

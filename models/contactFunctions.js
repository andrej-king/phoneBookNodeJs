const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const contactSchema = new Schema({
	cName: String,
	cSurname: String,
	cPhone: String
});

const Contact = mongoose.model('Contact', contactSchema, 'contacts');
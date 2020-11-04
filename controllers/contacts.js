const date      = require('../generateDate.js');
const mongoose  = require('mongoose');
const Contact   = mongoose.model('Contact');
let saveResult = false; // if success save contact - show it on home page

exports.getMainPage = (req, res) => {
	let day = date.getDate();

	Contact.find((error, contacts) => {
		if (!error) {
			res.render('index.ejs', {title: "Phone book", header:  day, saveInFile: saveResult, contactItems: contacts});
		} else {
			console.log("Failed to retireve data: ", error);
		}
	});
};

exports.addNewItem = (req, res) => {
	let day = date.getDate();
	res.render('add.ejs', {title: "Add contact", header: day});
}

exports.addItemInFile = (req, res) => {
	let contactName =  req.body.contactName.trim();
	let contactSurname =  req.body.contactSurname.trim();
	let contactPhone =  req.body.contactPhone.trim();

	if (contactName !== "" && contactSurname !== "" && contactPhone !== "") {
		let newContact = new Contact();
		newContact.cName = contactName;
		newContact.cSurname = contactSurname;
		newContact.cPhone = contactPhone;

		newContact.save((error, response) => {
			if (!error) {
				saveResult = true;
				res.redirect('/');
			} else {
				console.log("Save contact error msg: ", error);
			}
		});
	}
}

exports.deleteItem = (req, res) => {
	const checkItemId = req.body.removeContactBtn;

	Contact.findByIdAndRemove(checkItemId, function (error) {
		if (!error) {
			console.log("Successfully delete item: ", checkItemId);
			res.redirect('/');
		} else {
			console.log("Delete error msg: ", error);
		}
	});
}
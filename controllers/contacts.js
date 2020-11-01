const date = require('../generateDate.js');
const Contacts = require('../models/contactFunctions');
let saveResult = false;

exports.getMainPage = (req, res) => {
	Contacts.fetchContacts(items => {
		let day = date.getDate();

		res.render('index.ejs', {title: "Phone book", header:  day, saveInFile: saveResult, contactItems: items});
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
		const item = new Contacts(contactName, contactSurname, contactPhone);
		item.saveContact();
	}

	saveResult = true;
	res.redirect('/');
}

exports.deleteItem = (req, res) => {
	Contacts.deleteContact(req.body.removeContactBtn);

	res.redirect('/');
}
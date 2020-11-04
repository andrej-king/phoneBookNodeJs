const encoding              = 'utf8';
const fs                    = require('fs');
const path                  = require('path');
const folderWithData        = 'data';
const contactsFilename      = 'contacts.json';
const pathToContactsFile    = path.join(path.dirname(require.main.filename), folderWithData, contactsFilename);

module.exports = class Contacts {
	constructor(contactName, contactSurname, contactPhone) {
		this.cName      = contactName;
		this.cSurname   = contactSurname;
		this.cPhone     = contactPhone;
	}


	// save contacts data in file
	saveContact() {
		if (fs.existsSync(pathToContactsFile)) {
			fs.readFile(pathToContactsFile, encoding, ((err, data) => {
				let contacts = [];

				if (!err) {
					contacts = JSON.parse(data);
				} else {
					console.log(err);
				}

				contacts.push(this);

				fs.writeFile(pathToContactsFile, JSON.stringify(contacts), encoding, (err) => {
					console.log(err);
				})
			}));
		}
	}


	// show contacts from json file
	static fetchContacts(callBack) {
		if (fs.existsSync(pathToContactsFile)) {
			fs.readFile(pathToContactsFile, encoding, (err, data) => {
				if (err) {
					callBack([]);
				}

				callBack(JSON.parse(data));
			});
			return callBack;
		} else {
			this.createNewFileJson(pathToContactsFile, '[]');
		}
	}


	// delete contact from json file
	static deleteContact(description) {

		let contact = description.split(",");

		if (fs.existsSync(pathToContactsFile)) {
			fs.readFile(pathToContactsFile, encoding, (err, data) => {
				let contacts = [];
				if (!err) {
					contacts = JSON.parse(data);
				}

				for (let i = 0; i < contacts.length; i++) {
					if (contacts[i].cName === contact[0] && contacts[i].cSurname === contact[1] && contacts[i].cPhone === contact[2]) {
						console.log(contacts[i].cName + " " + contacts[i].cSurname + " " + contacts[i].cPhone + " deleted");
						contacts.splice(i, 1);
						break;
					}
				}

				fs.writeFile(pathToContactsFile, JSON.stringify(contacts), (err) => {
					console.log("Attempt to write deleted item failed: " + err);
				})


			});
		}
	}


	// create new json file with contacts
	static createNewFileJson(pathAndName, data) {
		fs.writeFileSync(pathAndName, data, encoding);
	}
}
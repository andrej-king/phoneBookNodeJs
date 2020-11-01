let name = $('#inputName');
let surname = $('#inputSurname');
let phone = $('#inputPhone');
let saveBtn = $('#saveContact');

saveBtn.on('click', function (e) {
	e.preventDefault();

	checkField(name);
	checkField(surname);
	checkField(phone, true);

	if (checkField(name) &&
		checkField(surname) &&
		checkField(phone, true)) {
		$('p#message').hide();
		$('#saveContactForm').submit();
	} else {
		$('p#message').show();
	}
});

function checkField(fieldId, phone = false) {
	let field = fieldId.val().trim();
	if (phone) {

		/*
		https://ihateregex.io/expr/phone/
		work phone examples
		+919367788755
		8989829304
		+16308520397
		786-307-3615
		*/

		let checkPhone = new RegExp('^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$');

		if (field !== '' && checkPhone.test(field)) {
			fieldId.addClass('is-valid');
			fieldId.removeClass('is-invalid');
			return true;
		} else {
			fieldId.removeClass('is-valid');
			fieldId.addClass('is-invalid');
			return false;
		}
	} else {
		if (field === '') {
			fieldId.removeClass('is-valid');
			fieldId.addClass('is-invalid');
			return false;
		} else {
			fieldId.addClass('is-valid');
			fieldId.removeClass('is-invalid');
			return true;
		}
	}
}
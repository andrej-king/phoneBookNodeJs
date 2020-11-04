exports.getDate = function () {
	let now = Date.now();
	let today = new Date(now);

	let options = {
		weekday: "long",
		day: "numeric",
		month: "long"
	}

	let minutes = "";
	let hours = "";
	if (today.getMinutes() < 10) {
		minutes = "0" + today.getMinutes();
	} else {
		minutes = today.getMinutes();
	}

	if (today.getHours() < 10) {
		hours = "0" + today.getHours();
	} else {
		hours = today.getHours();
	}


	let day = today.toLocaleDateString("en-GB", options) + ", " + hours + ":" + minutes;

	return day;
}

exports.getWeekDay = function () {
	let today = new Date();

	let options = {
		weekday: "long",
	}

	let day = today.toLocaleDateString("en-GB", options);

	return day;
}
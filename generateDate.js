exports.getDate = function () {
	let now = Date.now();
	let today = new Date(now);

	let options = {
		weekday: "long",
		day: "numeric",
		month: "long"
	}

	let day = today.toLocaleDateString("en-GB", options) + ", " + today.getHours() + ":" + today.getMinutes();

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

// exports.getTime = function() {
	// let now = Date.now();
	//
	// let date_ob = new Date(now);
	// let date = date_ob.getDate();
	// let month = date_ob.getMonth() + 1;
	// let year = date_ob.getFullYear();
	// // current hours
	// let hours = date_ob.getHours();
	//
	// // current minutes
	// let minutes = date_ob.getMinutes();
	// if (minutes < 10) {
	// 	minutes = "0" + minutes;
	// }
	//
	//
	// let today = new Date(now);
	//
    // let options = {
    //     weekday: "long",
    //     day: "numeric",
    //     month: "long"
    // }
	//
    // let day = today.toLocaleDateString("en-GB", options);
	//
    // return day;
// }
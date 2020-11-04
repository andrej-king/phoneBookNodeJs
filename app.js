const express       = require('express');
const bodyParser    = require('body-parser');
const ejs           = require('ejs');

// connect with db must be before routes
require('./models/db');

const app           = express();
const PORT          = process.env.PORT || 3000;
const getError      = require('./routes/404');
const mainPage      = require('./routes/main');

app.set("view engine", ejs);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// use
app.use(mainPage);
app.use(getError);


app.listen(PORT, () => {
	console.log(`${PORT} is running`);
})
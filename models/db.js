const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contactsDB', {useNewUrlParser: true, useUnifiedTopology: true});
require('./contactFunctions');
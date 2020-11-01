const express               = require('express');
const contactsController    = require('../controllers/contacts');
const router                = express.Router();

router.get('/', contactsController.getMainPage)

router.get('/add', contactsController.addNewItem);

router.post('/addInFile', contactsController.addItemInFile)

router.post('/delete', contactsController.deleteItem);

module.exports = router;
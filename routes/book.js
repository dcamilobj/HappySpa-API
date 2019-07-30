var express = require('express');
var router = express.Router();
var book_controller = require('../controllers/bookController')

/* POST services listing. */
router.post('/', book_controller.save_book);

module.exports = router;
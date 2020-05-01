const express = require('express');
const multer  = require('multer');
const upload = multer({ dest: './public/uploads/' });
const controller = require('../controllers/user.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/', upload.single('avatar'), controller.postUpload);

module.exports = router;
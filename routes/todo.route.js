const express = require('express');

const controller = require('../controllers/todo.controller');

var router = express.Router();

router.get('/', controller.index);

module.exports = router;
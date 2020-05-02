const express = require('express');

const controller = require('../controllers/todo.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/add', controller.postAddTask);
router.post('/remove', controller.postRemoveTask);

module.exports = router;
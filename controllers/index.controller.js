const controller = require('../controllers/service.controller');

module.exports.index = function(req, res) {
    const userId = req.session.userId;
    const user = controller.findUserById(userId);
    res.render('index', {title: 'Trang chủ', user});

};
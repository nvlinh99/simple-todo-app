const controller = require('../controllers/service.controller');
module.exports.index = function(req, res) {
    const userId = req.session.userId;
    const user = controller.findUserById(userId);
    if(!userId){
        res.redirect('/');
    }
    res.render('todo/index', {title: 'Todo app', user});
};

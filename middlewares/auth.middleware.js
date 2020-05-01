const controller = require('../controllers/service.controller');

module.exports.requiredAuth = function(req, res, next) {
    const userId = req.session.userId;
    const user = controller.findUserById(userId);
    if(!userId || !user) {
        res.redirect('/auth/login');
        return;
    }
    req.currentUser = user;
    res.locals.user = user;
    next();
}
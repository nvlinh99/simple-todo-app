const controller = require('../controllers/service.controller');

module.exports.index = function(req, res) {
    const userId = req.session.userId;
    const user = controller.findUserById(userId);
    if(!userId){
        res.redirect('/');
      }
    res.render('users/index', {title: 'Thông tin cá nhân', user});
};

module.exports.postUpload = function(req, res) {
    req.body.avatar = req.file.path.split('\\').slice(1).join('/');
    res.redirect('/user');
}
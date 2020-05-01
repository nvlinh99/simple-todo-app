const controller = require('./service.controller')

module.exports.login = function(req, res) {
    if(req.session.userId){
      res.redirect('/');
    }
    res.render('auth/login', {title: 'Đăng nhập'});
};

module.exports.postLogin = function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const user = controller.findUserByEmail(username);

    if (!user) {
        res.render('auth/login', {
          errors: [
            'User does not exist.'
          ],
          values: req.body
        });
        return;
    }

    if(controller.comparePassword(password, user.password)){
        req.session.userId = user.id;
        res.redirect('/user');
    }
    else {
        res.render('auth/login', {
            errors: [
              'Wrong password.'
            ],
            values: req.body
          });
        return;
    }
};

module.exports.logout = function(req, res) {
    delete req.session.userId;
    res.redirect('/');
}
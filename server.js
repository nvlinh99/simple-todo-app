const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');

//Routes Using
const indexRoute = require('./routes/index.route');
const authRoute = require('./routes/auth.route');
const userRoute = require('./routes/user.route');
const todoRoute = require('./routes/todo.route');

//Middleware Using
const authMiddleware = require('./middlewares/auth.middleware');

const app = express();
const port = process.env.PORT || 3000;

//For form
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieSession({
    name: 'session',
    keys: ['nvlinh99'],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

//Static
app.use(express.static('public'))

//Template engine
app.set('views', './views');
app.set('view engine', 'pug');

//Routes
app.use('/', indexRoute);
app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/todo', todoRoute);

//Middleware
app.use(authMiddleware.requiredAuth);


app.listen(port, function() {
    console.log(`Server is listening at http://localhost:${port}`);
});
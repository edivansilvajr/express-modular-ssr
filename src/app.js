const express = require('express');
const session = require('express-session');
const flash = require('connect-flash-now/lib/flash');
const methodOverride = require('method-override');
const path = require('path');

const app = express();

const router = require('./routes/index');

const errorMiddleware = require('./middlewares/error.middleware');
const flashMiddleware = require('./middlewares/flash.middleware');

const env = require('./config/env');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

app.use(session({
    secret: env.sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {secure: false}
}));

app.use(flash());

app.use(flashMiddleware);

app.use(router);

app.use(errorMiddleware);

module.exports = app;


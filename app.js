// app.js
var express = require('express');
var app = express();
var db = require('./db');
var bodyParser = require('body-parser');
var UserController = require('./user/UserController');
var BlogController = require('./content/BlogController');// cannot find module???

app.use('/users', UserController);
app.use('/blog', BlogController);
//router.use(body.Parser.urlencoded({extend: true}));

module.exports = app;

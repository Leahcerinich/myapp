// app.js
var express = require('express');
var app = express();
var db = require('./db');
var bodyParser = require('body-parser');
var UserController = require('./user/UserController');
var BlogController = require('./content/BlogController');

app.use('/users', UserController);
app.use('/blog', BlogController);


module.exports = app;

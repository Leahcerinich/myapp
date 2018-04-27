// app.js
var express = require('express');
var app = express();
var db = require('./db');
var bodyParser = require('body-parser');
var UserController = require('./user/UserController');
var BlogController = require('./blog/BlogController');


app.use('/users', UserController);
blog.use('/blog',BlogController);
router.use(bodyParser.urlencoded({ extended: true}));

module.exports = app;

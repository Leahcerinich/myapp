// app.js
var express = require('express');
var app = express();
var db = require('./db');
var bodyParser = require('body-parser');
var UserController = require('./user/UserController');
var BlogController = require('./content/BlogController');

app.use('/users', UserController);
app.use('/blog', BlogController);
//router.use(body.Parser.urlencoded({extend: true}));

module.exports = app;

//describe("Server",() => {
//var server;
//beforeALL(() => {
//server = require("../app.js");
//});
//  afterALL(() => {
//  server.close();
//});
//});

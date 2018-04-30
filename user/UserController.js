var express = require('express');
var router = express.Router();
var User = require('./user');
var bodyParser = require('body-parser');
// recieves all the necessary methods for interacting with the database the actions are posting and get

// creating a new user
router.post('/', function (req, res) {
  console.log('request goes through here first')
  User.create({
    name : req.body.name,
    email : req.body.email,
    password : req.body.password
  },
  function (err, user) {
    if (err, user) {
      if (err) return res.status(500). send("There was a problem adding the information to the database."); // 500 error value
      res.status(200).send(user); // call back function adding a new user // 200 success value
    }
  });
});

// returning all the users in the database
router.get('/', function (req, res) {

  User.find({}, function (err, users) {
    if (err) return res.status(500).send("The was a problem finding the users.");
    res.status(200).send(users);
  }); // returning values from the database 500 value is a problem and 200 send users
});

// gets a single user from the database
router.get('/:id', function (req, res) {
  // get request
  User.findById(req.params.id, function (err, user) {
    if (err) return res.status(500).send("There was a problem finding user.");
    if (!user) return res.status(404).send("No user found.");
    res.status(200).send(user);
  });
});

// delete a user from the database
router.delete('/:id', function (req, res) {
  User.findByIdAndRemove(req.params.id, function (err, user) {
    if (err) return res.status(500).send("There was a problem deleting user.");
    res.status(200).send("User "+ user.name +" was deleted.");
  });
});

// updates a single user in the database
router.put('/:id', function (req, res) {

  User.findByIdAndUpdate(req.params.id, req.body,{new:true},
    function (err, user) {
      if (err) return res.status(500).send("There is a problem updating the user");
      res.status(200).send(user);
    });
  });


  module.exports = router; // exporting the file as it's needed in app.js

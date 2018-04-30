var express = require('express');
var router = express.Router();
var Blog = require('./blog');
var bodyParser = require('body-parser');
// recieves all the necessary methods for interacting with the database the actions are posting and get

// creating new content // what the api consists of and what we are trying to do
router.post('/', function (req, res) {

  Blog.create({
    title : req.body.title,
    date : req.body.date,
    text : req.body.text
  },
  function (err, blog) {
    if (err, blog) {
      if (err) return res.status(500).send("There was a problem adding the content to the database"); // 500 error value
      res.status(200).send(blog);
      console.log("Blog was added successfully") // call back function adding a new user // 200 success value
    }
  });
});
router.get('/', function (req, res) {

  Blog.find({}, function (err, blog) {
  if (err) return res.status(500).send("The was a problem retrieveing the all content.");
  res.status(200).send(blog);
  console.log("Success you have retrieved all content")
  });
});
// returning values from the database 500 value is a problem and 200 send users
// retrieving content via ID

router.get('/:blog', function (req, res) {

  Blog.findById(req.params.blog, function (err, blog) {
  if (err) return res.status(500).send("There was a problem retrieving individual content.");
  res.status(200).send(blog);
  console.log("Single content retrieved using ID");
  });
});

//finding individual ID and update single piece of content in the database
router.post('/:blog', function (req, res) {

  Blog.findByIdAndUpdate(req.params.blog, function (err, blog) {
    if (err) return res.status(500).send("There is a problem updating the content");
    res.status(200).send(blog);
    console.log("Single user updating content");
    });
  });

module.exports = router;

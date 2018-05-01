var express = require('express');
var router = express.Router();
var Blog = require('./Blog');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true}));

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
            if (err) return res.status(500).send('There was a problem adding the content to the database'); // 500 error value
            res.status(200).send(blog);
        }     
    });
});
router.get('/', function (req, res) {

    Blog.find({}, function (err, blog) {
        if (err) return res.status(500).send('The was a problem retrieveing the all content.');
        res.status(200).send(blog);
    });
});
// returning values from the database 500 value is a problem and 200 send users
// retrieving content via ID

router.get('/:id', function (req, res) {

    Blog.findById(req.params.id, function (err, blog) {
        if (err) return res.status(500).send('There was a problem retrieving individual content.'+ req.params.id);
        res.status(200).send(blog);
    });
});

// deleting a piece of content using an id
router.delete('/:id', function (req, res) {

    Blog.findByIdAndRemove(req.params.id, function (err, blog) {
        if (err) return res.status(500).send('There was a problem deleting the content.');
        res.status(200).send('Blog '+ blog.name +' was deleted.');
    });
});

//update api to assign the current date to the date field when the content is created 

module.exports = router;

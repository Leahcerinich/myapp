

var jest = require('jest');
var request = require('request'); // setting up the environment - requesting to the server
var app = require('../server');
var body = require('../app.js');
var statusCode = require('');
var base_url = 'http://localhost:3000/blog';




// TODO:
// Test that creates piece of Content, returns a 200.

var expect = jest.expect;
describe('API tests', function () {
    // var content = {
    //     name: 'integration test',
    //     xxxx: 'xxxxx'
    // },

    describe('get all content', function () {
        it('should retrieve all content', function (done) {
            request(app).get('/content').end(function (err, res) {
                expect(res.statusCode).toBe(200);
                expect(res.body).toBe('array');
                //expect(res.body).to.be.empty;
                done();
            });
        });
    });

    // testing to check publish date is a valid date
    describe('get all dates of content', function () {
        it('should be date retrieve should be a valid date', function (done) {
            request(app).get('/date').end(function (err, res) {
                expect(statusCode).toBe(200);
                expect(res.body.date).toBe('valid date');
                done();
            });
        });
    });

    describe('POST a title', function() {
        it('title should be equal or less than 140 characters', function(done) {
            request(body).get('/title').end(function (err,res) {
                expect(statusCode).toBe(200);
                expect(res.body.title).toBe('title');
                done();
            });
        });
    });



    describe('POST a piece of content', function () {
        it('should create a single piece of content', function (done) {
            request(body).post('/content').end(function (err, res) {
                expect(res.statusCode).toBe(200);
                expect(res.body.title).toBe('New title created');
                content = res.body;
                done();
            });
        });
    });

    describe('GET a peice of content', function () {
        it('should retrieves a peice of content', function (done) {
            request(body).get('/content').end(function (err, res) {
                expect(res.statusCode).toBe(200);
                expect(res.body.title).toBe('retrieve title of content');
                content = res.body;
                done();
            });
        });
    });

    describe('DELETE a peice of content', function () {
        it('should remove a piece of content', function (done) {
            request(body).delete('/content').end(function (err, res) {
                expect(res.statusCode).toBe(200);
                expect(res.body.title).toBe('title deleted');
                content = res.body;
                done();
            });
        });
    });
});
//---------------------------------------------------------------

xdescribe('myapp', function () {
    describe('GET /blog', function () {
        xit('returns status code 200', function () {

            request.get(base_url, function (err, res, body) {
                expect(res.statusCode).toBe(200);
            });
        });
        xit('retrieving all content', function () { // blocking out code another way to comment out..
            request.get(base_url, function (err, res, body) {
                console.log('Content contains:title,text,date');
                console.log(body);
                console.log('-----------------------');
                parsed_body = JSON.parse(body);
                console.log('Title is' + parsed_body[1].title);
            });
        });
    });
});
//1.testing to to retrieve all blog content
//2.if successful it will retrieve all blog posts
//3.expect body to be all content and all blogs listed from the database


xdescribe('myapp', function () {
    xdescribe('POST /Blog', function () {
        xit('returns status of 200', function () {

            request.post(base_url, function (err, res, body) {
                expect(res.statusCode).toBe(200);
                console.log('new content created');
            });
        });

        xit('creating a new piece of content', function () {
            request.post(base_url, function (err, res, body) {
                expect(body).toBe('new piece of content');
                console.log('newly created piece of content');
            });
        });
    });
});

// 1. to see if the function of post is working
// 2. testing to see if the you can create a new blog / post
// 3.if successful it will show new blog created
// 4.expect the body to be title text and date


//. retrieveing content from a single id
//1. testing the feature of retriving the body of one blog from a single id
//3. want to test to see if the function of a new blog for single id

/*    xdescribe('myapp', function() {
        describe('GET /blog', function() {
            it('returns status code of 200', function() {

                request.post(base_url, function(err,res,body) {
                    expect(res.statusCode).toBe(200);
                    console.log('Success you have retrieved one single peice of content');
                });
            });

            xit('retrieving a new content from an ID', function() {
                request.post(base_url,function(err,res,body) {
                    expect(body).toBe('Title, date, text for one ID');
                    console.log('Body contains title, text and date of a signal ID');
                    console.log(body);
                });
            });
        });
    }); */

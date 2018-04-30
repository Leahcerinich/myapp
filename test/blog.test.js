var request = require("request"); // setting up the environment - requesting to the server
var user = require("../app.js");
var base_url = "http://localhost:3000/blog";

xdescribe("Server",() => {
  var server;
  beforeALL(() => {
    server = require("../app.js");
    });
    afterALL(() => {
      server.close();
  });
});

describe("myapp", function() {
  describe("GET /blog", function() {
    xit("returns status code 200", function() {

      request.get(base_url, function(err,res,body) {
        expect(res.statusCode).toBe(200)
    });
  });
it("retrieving all content", function() { // blocking out code another way to comment out..
    request.get(base_url, function(err, res, body) {
      console.log("Content contains:title,text,date");
      console.log(body);
      console.log("-----------------------");
      parsed_body = JSON.parse(body);
      console.log("Title is" + parsed_body[1].title);
      });
    });
  });
});
//1.testing to to retrieve all blog content
//2.if successful it will retrieve all blog posts
//3.expect body to be all content and all blogs listed from the database

xdescribe("myapp", function() {
  describe("GET /blog", function() {
    it("returns status code of 200", function() {

    request.post(base_url, function(err,res,body) {
      expect(res.statusCode).toBe(200);
      console.log('Success you have retrieved one single peice of content')
  });
});
xit("retrieving a new content of single user", function() {
  request.post(base_url,function(err,res,body) {
    expect(body).toBe('Title, date, text for one ID');
    console.log("Body contains title, text and date of a signal ID");
    console.log(body);
      });
    });
  });
});
  //1. testing the feature of retriving the body of one blog from a single id
  //2. if successful it loads a page up of success retrieved single blog
  //3. want to test to see if the function of a new blog for single id consists of
  //4. title, date and body

xdescribe("myapp", function() {
describe("POST /Blog" , function() {
  xit("returns status of 200", function() {

      request.put(base_url, function(err,res,body) {
      expect(response.statusCode).toBe(200);
      console.log("new content created")
    });
  });
xit("creating a new piece of content", function() {
  request.put(base_url, function(err,res,body) {
  expect(body).toBe('New title, date, text');
    console.log("new title, text and date created")
      });
    });
  });
});


    // 1. to see if the function of post is working
    // 2. testing to see if the you can create a new blog / post
    // 3.if successful it will show new blog created
    // 4.expect the body to be title text and date

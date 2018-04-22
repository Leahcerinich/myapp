var request = require("request"); // setting up the environment - requesting to the server
var user = require("../app.js");
var base_url = "http://localhost:3000/users";

describe("users", function() { // describing 2 parameters a string and a function
  describe("GET /users", function() { // describing the output to the client - GET, PUT etc
    it("returns status code 200", function(done) { // input contents on what we expect to be returned
      request.get(base_url, function(err, res, body) { // request url calling the function (error, respond, body)
        console.log('Magic is happening on port 3000');
        console.log(err);
        expect(res.statusCode).toBe(200); // if status code is 200 return magic is happening if not, Error.
        done();
      });
    });
    xit("returns users", function(done) { // blocking out code another way to comment out..
      request.get(base_url, function(err, res, body) {
        expect(res.statusCode).toBe(200);
        done();
      });
    });
  });
});

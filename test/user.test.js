var request = require("request"); // setting up the environment - requesting to the server
var user = require("../app.js");
var base_url = "http://localhost:3000/users";

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
  describe("GET /users", function() {
    xit("returns status code 200", function() {

      request.get(base_url, function(err,res,body) {
        expect(res.statusCode).toBe(200)
    });
  });
it("reading a users", function() { // blocking out code another way to comment out..
    request.get(base_url, function(err, res, body) {
      console.log("Body contains :");
      console.log(body);
      console.log("-----------------------");
      parsed_body = JSON.parse(body);
      console.log("Name is:" + parsed_body[0].name);
      //expect(body).toBe("viewing name, email, password");
      //1. Add users to the database
      //2. Store these users in a variable "usersInDb"
      //3. Retreive those users using the GET /users API
      //. View users using the GET /users API
      //4. Store it in variable called "usersFromAPI"
      //5. Compare usersFromAPI to usersInDb
      // expect(usersFromAPI).toBe(usersInDb);
      //. testing whether this API is retrieveing a user from the Database
      });
    });
  });
});

xdescribe("myapp", function() {
  describe("POST /users", function() {
    it("returns status code of 200", function() {

    request.post(base_url, function(err,res,body) {
      expect(res.statusCode).toBe(200);
      console.log('update')
    });
  });
xit("modify a user", function() {
  request.post(base_url,function(err,res,body) {
    expect(body).toBe('updated name,email,password');

    //1. changing or adding extra users to the database
    //2. store users in variable usersInDb
    //3. Modifying or updating user info using the /POST user API
    //4. store it in the variable called usersFromAPI
    //5. Compare - to see if they are a match
    //6. expect (reponse) to be a modified/ changed users
    //. expect (body) to be updated user info
    //7.expect(usersinAPI).toBe(usersinDb)
    //. testing whether this api is changing/ modifying a user

        });
      });
    });
  });


xdescribe("myapp", function() {
  describe("PUT /users" , function() {
    it("returns status of 200", function() {

      request.put(base_url, function(err,res,body) {
        expect(response.statusCode).toBe(200);
        console.log('new user created')
      });
    });
xit("create a new user", function() {
  request.put(base_url, function(err,res,body) {
    expect(body).toBe('a new name,email,password');
    //1. adding new user is in the database
    //2. store user in varaiable usersInDb
    //3. Creating a new user using the /PUT user API
    //4. Store it in a variable usersFromAPI
    //5. expect (response) tobr succussful new user added
    //. expect usersinAPI tobe usersInDb
    //. testing whether this API is creating a new user

      });
    });
  });
});


xdescribe("myapp", function() {
  describe("DELETE /users", function() {
    it("returns status of 200", function() {

      request.delete(base_url,function(err,res,body) {
        expect(response.statusCode).toBe(200);
        console.log('user deleted')
      });
    });
xit("delete a user", function() {
  request.delete(base_url,function(err,res,body) {
    expect(body).toBe('deleted name,email,password')
  //1. new user is already stored in the usersInDb
  //2. stored in variable usersinDb
  //3. delete a new user using the /DELETE API
  //4. delete from stored usersFromAPI
  //5. expect body to be a deleted user
  //.  expect response to be
  //. I want to test whether current users are deleted
      });
    });
  });
});

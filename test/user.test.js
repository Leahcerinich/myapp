

var request = require('request'); // setting up the environment - requesting to the server
var user = require('../app.js');
//var base_url = 'http://localhost:8080/users';
var base_url = 'http://localhost:8080/users/5ae7fe3d1f2e9a71a47c2d50';

// describe("Server",() => {
//     var server;
//     beforeALL(() => {
//         server = require("../app.js");
//     });
//     afterALL(() => {
//         server.close();
//     });
// });

// describe('Testing the API to GET retrieve all users', function() {
//     it('returns status code 200', function() {
//         request.get(base_url, function(err,res,body) {
//             expect(res.statusCode).toBe(200);
//         });
//     });
//     it('reading a users', function() { // blocking out code another way to comment out..
//         request.get(base_url, function(err, res, body) {
//             console.log('Body contains :');
//             console.log(body);
//             console.log('-----------------------');
//             parsed_body = JSON.parse(body);
//             console.log('Name is:' + parsed_body[0].name);
//         });
//     });
// });
//expect(body).toBe("viewing name, email, password");
//1. Add users to the database
//2. Store these users in a variable "usersInDb"
//3. Retreive those users using the GET /users API
//4. View users using the GET /users API
//5. Store it in variable called "usersFromAPI"
//6. Compare usersFromAPI to usersInDb
//7.expect(usersFromAPI).toBe(usersInDb);
//8.testing whether this API is retrieveing a user from the Database

// describe('Testing the API to POST / create a new user', function() {
//     it('returns status code of 200', function() {
//         request.post(base_url, function(err,res) {
//             var responseBody = [];
//             responseBody = JSON.parse(res.body);
//         });
//     });
//     for(var i=0; i < responseBody.length; i++) {
//         expect((responseBody[i]).id).toBeDefined();
//         console.log(responseBody[i]._id);
//         //console.log(responseBody[i]._email);
//         //console.log(responseBody[i]._password);
//     }
// });
//1. changing or adding extra users to the database
//2. store users in variable usersInDb
//3. Modifying or updating user info using the /POST user API
//4. store it in the variable called usersFromAPI
//5. Compare - to see if they are a match
//6. expect (reponse) to be a modified/ changed users
//7. expect (body) to be updated user info
//8. expect(usersinAPI).toBe(usersinDb)
//9. testing whether this api is changing/ modifying a user

       


// describe('Updating a user using a signal ID', function() {
//     it('returns status of 200', function() {

//         request.put(base_url, function(err,res,body) {
//             var responseBody = [];
//             responseBody = JSON.parse(res.body);

//             for(var i=0; i < responseBody.length; i++) {
//                 expect((responseBody[i]).id).toBeDefined();
//                 console.log(responseBody[i]._id);
//             }
//         });
//     });
    //1. adding new user is in the database
    //2. store user in varaiable usersInDb
    //3. Creating a new user using the /PUT user API
    //4. Store it in a variable usersFromAPI
    //5. expect (response) tobr succussful new user added
    //6. expect usersinAPI tobe usersInDb
    //7. testing whether this API is creating a new user

//     describe('Testing the API to Delete a user', function() {
//         it('returns status of 200', function() {

//             request.delete(base_url,function(err,res,body) {
//                 var responseBody = [];
//                 responseBody = JSON.parse(res.body);

//             });
//         });
//         for(var i=0; i < responseBody.length; i++) {
//             expect((responseBody[i]).id).toBeDefined();
//             console.log(responseBody[i]._id);
//         }
//     });
// });
 
//1. new user is already stored in the usersInDb
//2. stored in variable usersinDb
//3. delete a new user using the /DELETE API
//4. delete from stored usersFromAPI
//5. expect body to be a deleted user
//6.  expect response to be
//7. I want to test whether current users are deleted
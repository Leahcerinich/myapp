

var jest = require('jest');
var request = require('request'); // setting up the environment - requesting to the server
var app = require('../server');
var body = require('../app.js');
var base_url = 'http://localhost:8080/blog/';


// xdescribe("Server",() => {
//     var server;
//     beforeALL(() => {
//         server = require("../app.js");
//     });
//     afterALL(() => {
//         server.close();
//     });
// });


describe('Testing the API to GET retrieve all content', function () {
    it('returns status code 200', function () {
        request.get(base_url, function (err, res) {
            var responseBody = [];
            responseBody = JSON.parse(res.body);

            // Check the number of records returned
            // expect(responseBody.length).toEqual(1);
            
            for(var i=0; i < responseBody.length; i++) { // for loop
                expect((responseBody[i])._id).toBeDefined();
                console.log((responseBody[i])._id);
            }
        });
    });
});
var test_id = '5ae7ff61adf651720afc810a';

describe('testing the API can GET a signal piece of content', function() {
    it('checks the all the fields of a record are returned and valid', function() {

        //Call the api url with an id
        request.get(base_url + test_id, function(err,res){

            //Retrieve the json response and parse
            var responseBody = [];
            responseBody = JSON.parse(res.body);

            //Check the JSON object has a valid id
            expect(responseBody._id).toBeDefined();
            console.log(responseBody._id);
            //Check the JSON object returns has a title
            expect(responseBody.title).toBeDefined();
            console.log(responseBody.title);
            //Check the JSON object returns has a date
            expect(responseBody.date).toBeDefined();
            console.log(responseBody.date);
            //Check the JSON object returns has text
            expect(responseBody.text).toBeDefined();
            console.log(responseBody.text);     

            //Check that title is less than 140 characters
            //expect the character length of the title to be less than 140
            //var str = 'Character length of title';
            //var res = str.substr(0,140);

            // unit test?
            describe('character length', function() {
                it('test the character length of title to be <= 140', function() {
                    expect(x).toBe(x <= 140);

                });
            });

            //Loop?
            for(var i=0; i < 140; i++) { // for loop 
                expect(responseBody.title).toBeDefined();
                console.log(responsebody.title);

                for(var i=0; responseBody.length; i++) {
                    expect(responseBody.title).toBeDefined();
                    
            // else if statement

            if (responseBody.title === 'title of content') {
                if (title <= 140) {
                    console.log ('new title created');
                    else if (title > 140) {
                        console.log('cannot create new title more than 140 characters');

                    
                    }
                }
            }
                });
            });

            //Check that title is less than date is a valid date format (dd/mm/yyyy)
            //expect the date to be in a particullar format

            var d = new Date('dd/mm/yyyy');
            var n = d.getDate();
            expect(responseBody.date).toBeDefined();
            console.log('dd/mm/yyyy');
        }); 
    });
});

// testing to API to see if it can delete ind id 

var test_id = '5ae7ff61adf651720afc810a'

describe('testing the API to DELETE a peice of content', function() {
    it('returns a status code of 200', function() {
        request.delete(base_url + test_id, function(err,res) {
        function empty() {
            list.length = 0;
        }
        empty();
        responseBody = JSON.parse(res.body);
        console.log('Blog '+ blog.name +' was deleted.');
        // because the response body is a Json object which is an array - I though to use this method of deleting array - which is a test_id

 








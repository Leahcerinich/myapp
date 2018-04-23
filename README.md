Building NodeJS API - Firstly I had to download and install the latest version of NodeJS v - 8.11.1 and then I had to make an directory in the terminal using mkdir - there was no directory so I had to change to mkdir myapp.

I then installed npm within myapp directory v 5.6.0

When i installed npm it automatically installed node modules, JSON file.

I then used the terminal to npm init to the entry point of app.js

After that, I installed express framework so it works in my "myapp" directory then installed express -- save on the terminal

The app.js file is to run the app to actually run it on a local host I used local host3000

Next step is setting up the database - I used mlab which was quite easy to set up.

Once that was done, I then had to init npm install DB on the terminal express, mongoose body-parser

updated the code in AppJS to require db

I then created another file ServerJS that will make the app listen to the Server

once that was complete I then ran node server.js on the terminal.

I then created a db.js file database that includes mlab URI and requires mongoose

I then created a user folder where user.js file is located it's the communication between db and users.

I then created another file saying usercontroller.js this is where the code showing each action for an individual user. I will explain that in the meeting.

Next step is telling the app.js file that there is a usercontroller and user file.

<<<<<<< HEAD
After that, I've tested the code and it was successful - Again I will show you on my laptop - Testing uses the some of the CRUD methods. 
=======
After that, I've tested the code and it was successful - Again I will show you on my laptop.
>>>>>>> 0299cb158111fa8f617cfd283a1e36392383a552

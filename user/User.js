var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({ // defining the user on the database
  name: String,
  email: String,
  password: String
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');

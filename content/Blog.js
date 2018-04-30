var mongoose = require('mongoose');
var BlogSchema = new mongoose.Schema({ // defining the user on the database
  title: String,
  date: String,
  text: String
});
mongoose.model('Blog', BlogSchema);

module.exports = mongoose.model('Blog');

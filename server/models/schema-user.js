const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: String,
  userEmail: String,
  userPwd: String,
  userRol: Number
}); 

const User = mongoose.model('User', userSchema);

module.exports = User;
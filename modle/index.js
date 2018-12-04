const mongoose = require('mongoose')
const usersType =new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('Users',usersType)
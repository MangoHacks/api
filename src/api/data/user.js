const mongoose = require('mongoose');
const {hashSync, genSaltSync, compareSync} = require('bcrypt-nodejs');
mongoose.Promise = Promise;

const User = mongoose.Schema({
  first: String,
  last: String,
  email: {
    type: String
  },
  profile_img: String,
  instutution: String,
  major: String,
  status: String,
  local : {
      email : String,
      password : String,
  },
  github : {
      id : String,
      token: String,
      username : String
  }
});

User.methods.generateHash = (password) => {
  return hashSync(password, getSaltSync(8), null);
};

User.methods.validatePassword = (password) => {
  return compareSync(password, this.local.password);
};

const model = mongoose.model('User', User);

const controller = {
  get: (req, res) => {
    res.json({msg: 'Not yet implemented for user'});
  },
  confirm: (req, res) => {
    res.json({msg: 'Not yet implemented for user'});
  }
};

module.exports = {model, controller};

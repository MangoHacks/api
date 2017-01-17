import  mongoose from 'mongoose';
import  {hashSync, genSaltSync, compareSync} from 'bcrypt-nodejs';

mongoose.Promise = Promise;
const User = mongoose.Schema({
  first: String,
  last: String,
  email: {
    type: String,
    required: true
  },
  profile_img: {
    type: String,
    // default: 
  },
  instutution: String,
  major: String,
  status: {
    type: String,
    enum: ['registered', 'confirmed', 'attended'],
    default: 'registered'
  },
  local : {
      email : String,
      password : String,
  },
  github : {
      id : String,
      token: String,
      username : String,
      profileUrl: String
  }
});

User.methods.generateHash = (password) => {
  return hashSync(password, getSaltSync(8), null);
};

User.methods.validatePassword = (password) => {
  return compareSync(password, this.local.password);
};

export default mongoose.model('User', User);

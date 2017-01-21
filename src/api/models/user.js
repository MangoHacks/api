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
  password : String,
  instutution: String,
  major: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
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

User.pre('save', function(next) {
  const user = this;

  if (!user.isModified('password')) return next();
  genSalt(8, (err, salt) => {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, (err, hash) => {
          if (err) return next(err);
          user.password = hash;
          next();
      });
  });
});

User.methods.generateHash = (password) => {
  return hashSync(password, getSaltSync(8), null);
};

User.methods.validatePassword = function(password, valid) {
  console.log('validating ', password, this);
  return compareSync(password, this.local.password);
};

export default mongoose.model('User', User);

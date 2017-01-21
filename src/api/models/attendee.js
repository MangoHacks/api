import  mongoose from 'mongoose';
import  {hashSync, genSaltSync, compareSync} from 'bcrypt-nodejs';

mongoose.Promise = Promise;
const Attendee = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  age: String,
  gender: {type:String },
  ethnicity: {type:String },
  origin: {type:String },
  school: {type:String },
  year: {type:String },
  major: String,
  hackathons: String,
  heard_source: String,
  shirt_size: String,
  linkedin_url: String,
  github_url: String,
  website_url: String,
  resume_url: String,
  alergies: String,
  food_special: String,
  gif: String,
  rsvp: String,
  checked_in: Date,
  confirmations_sent: Boolean,
  registration_date: Date
});



export default mongoose.model('Attendee', Attendee);

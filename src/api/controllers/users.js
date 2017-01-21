import User from '../models/user';

const login = (req, res) => {
  const {email, password} = req.body;
  User.findOne({ email }, (err, user) => {
    if (err)
      return res.status(500);
    if (!user)
      return res.status(404);
    if (!user.validatePassword(password, user.local.password))
      return res.status(401).json({message:'Oops! Wrong password.'}); 

    return res.json(user);
  });
};

const list =  (req, res) => {
  User.find((err, users) => {
    return err && res.json({err}) || res.json(users);
  });
};

const create = (req, res) => {
  const {email} = req.body;
  User.findOne({email}, (err, user) => {
    if (err) {return res.status(500).json({err});}
    if (user) { return res.status(402).json({msg:'That email is already taken.'}); } 

    const usr = new User(req.body);
    usr.local = {email, password: usr.generateHash(password)};
    usr.save((err) => res.json(err || usr));
  });
};

const update = (req, res) => {
  const {id} = req.body;

  User.findByIdAndUpdate(id, req.body, (err, user) =>  {
    if(err) return res.status(404).json({msg: 'User id is missins'});
    if(!user) {
      return res.status(404).json({message: `Course with id ${id} can not be found.`});
    }

    res.json(user);
  });
};

const findById = (req, res) => {
  const {id} = req.parmas;
  User.findOne({id}, (err, user) => {
    return err && res.json({err}) || res.json({users});
  });
};

const changeStatus = (req, res) => {
  const {id, status} = req.parmas
  User.findOne({id}, (err, user) => {
    if (err)
      return res.json({err})

    user.status = status;
    user.save(err => {
      //trigger email
      return err && res.json({err}) || res.json({users});
    });
  });
};

export default function(api){
  api.post('/login', login);
  api.route('/users')
    .get(list)
    .post(create);
  api.route('/user/:id')
    .get(findById)
    .put(update);
  api.get('/user/:id/:status', changeStatus);
}
//export {list, login, create, update, findById, changeStatus};
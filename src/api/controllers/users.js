import User from '../models/user';

const list =  (req, res) => {
  User.find((err, users) => {
    return err && res.json({err}) || res.json(users);
  });
};

const create = (req, res) => {
  const {email} = req.body;
  User.findOne({email}, (err, user) => {
    if (err) {return done(err);}
    if (user) { return res.json({msg:'That email is already taken.'}); } 

    const usr = new User(req.body);
    usr.local = {email, password: usr.generateHash(password)};
    usr.save((err) => done(err, usr));
  });
};

const update = (req, res) => {
  const {id} = req.parmas
  User.findOne({id}, (err, user) => {
    if (err)
      return res.json({err})
    //perform update logic
    user.save(err => {
      return err && res.json({err}) || res.json({users});
    });
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

export {list, create, update, findById, changeStatus};
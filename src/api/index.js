import express from 'express';
import {local, github} from './auth';
import {list, create, update, findById, changeStatus} from './controllers/users';
const api = express.Router();

api.post('signup', create);
api.post('/login', local.login, (err, req, res) => {
	res.json(403, {err: 'Login failed'});
});
api.get('/auth/github', github.login);
api.get('/auth/callback', github.callback, (req, res) => res.json({user: req.user}));

api.route('/users')
	.get(list);

api.route('/user/:id')
	.get(findById)
	.post(update)

api.get('/user/:id/:status', changeStatus)



export default api;

const express = require('express');
const api = express.Router();

const {local, github} = require('./middleware/auth');


api.post('/signup', local.signup);
api.get('/auth/github', github.login);
api.get('/auth/callback', github.callback, (req, res) => {
	res.json({user: req.user});
});

module.exports = api;

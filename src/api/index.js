const express = require('express');
const api = express.Router();
const {login, callback} = require('./middleware/github');

api.get('/auth/github', login);
api.get('/auth/callback', callback, (req, res) => res.json({msg: 'login callback'}));

module.exports = api;

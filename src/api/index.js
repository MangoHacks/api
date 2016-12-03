const express = require('express');
const api = express.Router();
const bot = require('./bot');
const messages = require('./data/messages');

api.route('/bot')
	.get(bot)
	.post(bot);

api.get('/messages', (req, res) => res.json(messages));


module.exports = api;

const express = require('express');
const api = express.Router();
const bot = require('./bot');
const messages = require('./data/messages');
const rescue = require('./integrations/rescuetime');

api.route('/bot')
	.get(bot)
	.post(bot);

api.get('/messages', (req, res) => res.json(messages));
api.get('/integration/rescuetime', rescue);

module.exports = api;

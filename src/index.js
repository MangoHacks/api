// import express from 'express';
// import bodyParser from 'body-parser';
// import messages from './data/messages'

const express = require('express');
const bodyParser = require('body-parser');
const message = require('./data/messages');

const PORT = process.env.PORT || 5000;
const app = express();

// app.use(bodyParser({urlextended: false}));
app.set('port', PORT);
app.get('/', (req, res) => res.send('Welcome to Abelian'));
app.get('/messages', (req, res) => res.json(messages));

app.listen(PORT, () => console.log(`Parallel API running on port ${PORT}`));
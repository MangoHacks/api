const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const config = require('config');

// const configs = config.get('default');
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/mango'; //configs.mongUrl
const app = express();

mongoose.connect(MONGO_URL)

app.use(session({ secret: 'my super secret key to protect my session', cookie: { maxAge: 60000 }}));
app.use(bodyParser({urlextended: false}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => res.send('Welcome to Mangohacks'));
app.use('/api', require('./api'));

app.listen(PORT, () => console.log(`Mango API running on port ${PORT}`));
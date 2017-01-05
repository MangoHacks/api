const express = require('express');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(session({ secret: 'my super secret key to protect my session', cookie: { maxAge: 60000 }}));
app.use(bodyParser({urlextended: false}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => res.send('Welcome to Mangohacks'));
app.use('/api', require('./api'));
app.use('/graphql', require('./graphql'));

app.listen(PORT, () => console.log(`Mango API running on port ${PORT}`));
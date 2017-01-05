const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const app = express();

//express-session
// app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}));
app.use(bodyParser({urlextended: false}));

app.get('/', (req, res) => res.send('Welcome to Mangohacks'));
app.use('/api', require('./api'));
app.use('/graphql', require('./graphql'));

app.listen(PORT, () => console.log(`Mango API running on port ${PORT}`));
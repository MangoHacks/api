import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import config from 'config';
import api from './api';
mongoose.set('debug', true);
// const configs = config.get('default');
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/mango'; //configs.mongUrl

const app = express();
mongoose.connect(MONGO_URL)

app.use(helmet());
app.use(morgan());
app.use(session({ secret: 'my super secret key to protect my session', cookie: { maxAge: 60000 }}));
app.use(bodyParser({urlextended: false}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => res.send('Welcome to Mangohacks'));
app.use('/api', api);

app.listen(PORT, () => console.log(`Mango API running on port ${PORT}`));
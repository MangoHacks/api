import express from 'express';
import {local, github} from './auth';
import user from './controllers/users';
import attendee from './controllers/attendee'; 
const api = express.Router();

[user, attendee]
	.forEach(ctrl => ctrl(api));

export default api;

import mailgun from 'mailgun-js';
import {mjml2html} from 'mjml';
import templates from './templates';

const apiKey = 'key-598498a1721fb90622e2ab74a9e98673';
const sender = 'MangoHacks <help@Mangohacks.com>'; 
const mailer = mailgun({apiKey: apiKey});
 
export default function({type, subject, user}){
	const {email} = user;
	const data = {
	  from: sender,
	  to: email,
	  subject,
	  text: mjml2html(templates[type](user)) // default to text?
	};
	 
	mailer.messages()
		.send(data, (err, body) => console.log(err || body));
}
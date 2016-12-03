const apiai = require('apiai');
const app = apiai('50a46932a4a542ba91f3e51e036ed486');

const bot = (req, res) => {
	const request = app.textRequest(req.body.message || req.query.message || '', {
	  sessionId: 'unique-session'
	});
	
	//might need to process response through 
	request.on('response', response => res.json(response));
	request.on('error', error => res.json(error));
	request.end();
};

module.exports = bot
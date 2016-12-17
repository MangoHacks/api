const rescuetime = require('node-rescuetime');
const rescue = rescuetime('B63A6Z9UdENcLLYpA_qRpETJgZxO_s8vOpF1bOXp');

function jsonify(headers, rows){
	return rows.map((r) => {
		let row = {}
		headers.forEach((h, i) => { row[h] = r[i] });
		return row;
	});
}

module.exports = (req, res) => {
	rescue.summary({})
		.then(d => d.data)
		.then(d => jsonify(d.row_headers, d.rows))
		.then(d => res.json(d))
		.catch(err => res.json({err}))
};
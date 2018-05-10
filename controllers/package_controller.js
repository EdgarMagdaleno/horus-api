const db = require('./../database/connection');

const create = async function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	let connection = await db();

	const [err, rows, fields] = await to(connection.execute('SELECT * FROM packages'));
	if(err) res_error(res, err, 500);
	return res.json({success: true, response: rows});
}
module.exports.create = create;

const read = async function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	let connection = await db();

	if(req.params.id) {
		const [err, rows, fields] = await to(connection.execute('SELECT * FROM packages WHERE id = ?', [req.params.id]));
		if(err) res_error(res, err, 500);
		return res.json({success: true, response: rows[0]});
	}

	const [rows, fields] = await to(connection.execute('SELECT * FROM packages'));
	if(err) res_error(res, err, 500);
	return res.json({success: true, response: rows});
}
module.exports.read = read;

const update = async function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	let connection = await db();

	return res.json({success: true});
}
module.exports.update = update;

const del = async function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	let connection = await db();

	return res.json({success: true});
}
module.exports.del = del;

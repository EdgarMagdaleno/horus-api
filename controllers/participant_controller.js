const db = require('./../database/connection');

const create = async function(req, res) {
	let connection = await db();

	let [err, rows] = await to(connection.execute('INSERT INTO participants SET ?', [req.body]));
	if(err) return res_error(res, err);

	return res_success(res, rows);
}
module.exports.create = create;

const read_one = async function(req, res) {
	if(!req.params.id || isNaN(req.params.id)) return bad_request(res);
	let connection = await db();

	let [err, rows] = await to_one(connection.query('SELECT * FROM participants WHERE id = ?', [req.params.id]));
	if(err) return res_error(res, err);

	return res_success(res, rows);
}
module.exports.read_one = read_one;

const read_many = async function(req, res) {
	let connection = await db();

	let [err, rows] = await to_many(connection.execute('SELECT * FROM participants'));
	if(err) return res_error(res, err);

	return res_success(res, rows);
}
module.exports.read_many = read_many;

const update = async function(req, res) {
	if(!req.params.id || isNaN(req.params.id)) return bad_request(res);
	let connection = await db();

	let [err, rows] = await to(connection.query('UPDATE participants SET ? WHERE id = ?', [req.body, req.params.id]));
	if(err) return res_error(res, err);

	return res_success(res, rows);
}
module.exports.update = update;

const del = async function(req, res) {
	if(!req.params.id || isNaN(req.params.id)) return bad_request(res);
	let connection = await db();

	let [err, rows] = await to(connection.execute('DELETE FROM participants WHERE id = ?', [req.params.id]));
	if(err) return res_error(res, err);

	return res_success(res, rows);
}
module.exports.del = del;

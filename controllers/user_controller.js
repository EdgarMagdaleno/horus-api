const db			= require('./../database/connection');
const bcrypt	= require('bcrypt') ;

const create = async function(req, res) {
	let connection = await db();

	let [err, rows] = await to(connection.query('INSERT INTO users SET ?', req.body));
	if(err) return res_error(res, err);

	return res_success(res, rows);
}
module.exports.create = create;

const read_one = async function(req, res) {
	if(!req.params.id || isNaN(req.params.id)) return bad_request(res);
	let connection = await db();

	let [err, rows] = await to_one(connection.query('SELECT * FROM users WHERE id = ?', req.params.id));
	if(err) return res_error(res, err);

	return res_success(res, rows);
}
module.exports.read_one = read_one;

const read_many = async function(req, res) {
	let connection = await db();

	let [err, rows] = await to_many(connection.query('SELECT * FROM users'));
	if(err) return res_error(res, err);

	return res_success(res, rows);
}
module.exports.read_many = read_many;

const update = async function(req, res) {
	if(!req.params.id || isNaN(req.params.id)) return bad_request(res);
	let connection = await db();

	let [err, rows] = await to(connection.query('UPDATE users SET ? WHERE id = ?', [req.body, req.params.id]));
	if(err) return res_error(res, err);

	return res_success(res, rows);
}
module.exports.update = update;

const del = async function(req, res) {
	if(!req.params.id || isNaN(req.params.id)) return bad_request(res);
	let connection = await db();

	let [err, rows] = await to(connection.query('DELETE FROM users WHERE id = ?', req.params.id));
	if(err) return res_error(res, err);

	return res_success(res, rows);
}
module.exports.del = del;

const login = async function(req, res) {
	let connection = await db();

	
}
module.exports.login = login;
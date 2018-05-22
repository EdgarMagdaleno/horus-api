const db = require('./../database/connection');

const create = async function(req, res) {
	let connection = await db();

	[err] = await to(connection.check_structure(req.params.table, req.body));
	if(err) return res_error(res, err);

	console.log(req.body);
	[err] = await to_do(connection.query(`INSERT INTO ${req.params.table} SET ?`, req.body));
	if(err) return res_error(res, err);

	return res_success(res, null);
}
module.exports.create = create;

const read_one = async function(req, res) {
	if(isNaN(req.params.id)) return bad_request(res);
	let connection = await db();

	[err, rows] = await to_one(connection.query(`SELECT * FROM ${req.params.table} WHERE id = ?`, req.params.id));
	if(err) return res_error(res, err);

	return res_success(res, rows);
}
module.exports.read_one = read_one;

const read_many = async function(req, res) {
	let connection = await db();

	[err, rows] = await to_many(connection.query(`SELECT * FROM ${req.params.table}`));
	if(err) return res_error(res, err);

	return res_success(res, rows);
}
module.exports.read_many = read_many;

const update = async function(req, res) {
	if(isNaN(req.params.id)) return bad_request(res);
	let connection = await db();

	[err] = await to(connection.check_structure(req.params.table, req.body));
	if(err) return res_error(res, err);

	[err, rows] = await to_do(connection.query(`UPDATE ${req.params.table} SET ? WHERE id = ?`, [req.body, req.params.id]));
	if(err) return res_error(res, err);

	return res_success(res, null);
}
module.exports.update = update;

const del = async function(req, res) {
	if(isNaN(req.params.id)) return bad_request(res);
	let connection = await db();

	[err, rows] = await to_do(connection.query(`DELETE FROM ${req.params.table} WHERE id = ?`, req.params.id));
	if(err) return res_error(res, err);

	return res_success(res, null);
}
module.exports.del = del;

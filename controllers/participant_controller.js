const db = require('./../database/connection');

const list = async function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	let connection = await db();

	let [err, output, fields] = await to(connection.execute('select * from participants'));
	if(err) return res_errror(res, err, 422);

	return res_success(res, output);
}
module.exports.list = list;

const get = async function(req, res) {
	res.setHeader('Content-Type', 'application/json');

	return res.send({success: true, response: {name: 'edgar', age: 21}});
}
module.exports.get = get;

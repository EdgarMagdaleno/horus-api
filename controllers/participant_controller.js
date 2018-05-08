(async () => {
	const db = require('./../database/connection').get();
})();

const list = async function(req, res) {
	res.setHeader('Content-Type', 'application/json');

	console.log(db);
  let [rows, fields] = await db.execute('select * from participants');
  console.log(rows);
	return res.send({success: true, response: {name: 'edgar', age: 21}});
}
module.exports.list = list;

const get = async function(req, res) {
	res.setHeader('Content-Type', 'application/json');

	return res.send({success: true, response: {name: 'edgar', age: 21}});
}
module.exports.get = get;

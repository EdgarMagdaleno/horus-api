const mysql = require('mysql2/promise');
let connection;

module.exports = async function() {
	return new Promise(async resolve => {
		if(!connection) {
			connection = await mysql.createConnection({
			  host: CONFIG.db_host,
			  user: CONFIG.db_user,
			  password: CONFIG.db_password,
			  database: CONFIG.db_name
			});
		}

		resolve(connection);
	});
}
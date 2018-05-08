const mysql = require('mysql2');
let connection;

module.exports = {
	initialize: async function() {
		connection = await mysql.createConnection({
		  host: CONFIG.db_host,
		  user: CONFIG.db_user,
		  password: CONFIG.db_password,
		  database: CONFIG.db_name
		});

		console.log('Database initialized correctly');
	},
	get: function() {
		if(!connection) {
			console.error('Database not initialized');
		}
		else {
			console.log('Returned database instance correctly');
		}

		console.log('Returned database instance correctly');
		return connection;
	}
};
const mysql = require('mysql2/promise');
let connection;

create_structure = async () => {
	let structure = {};

	[err, tables] = await to(connection.query('SHOW TABLES'));
	if(err) throw err;

	for(let i = 0; i < tables[0].length; i++) {
		let table_name = tables[0][i]['Tables_in_' + CONFIG.db_name];
		structure[table_name] = {};

		[err, fields] = await to(connection.query('DESCRIBE ' + table_name));
		if(err) throw err;

		fields[0].forEach(field => {
			structure[table_name][field.Field] = null;
		});
	};

	return structure;
}

module.exports = async function() {
	return new Promise(async resolve => {
		if(!connection) {
			connection = await mysql.createConnection({
			  host: CONFIG.db_host,
			  user: CONFIG.db_user,
			  password: CONFIG.db_password,
			  database: CONFIG.db_name,
			  port: CONFIG.db_port
			});
		}

		let structure = await create_structure();
		connection.check_structure = function(table, body) {
			return new Promise((resolve, reject) => {
				Object.keys(body).forEach(key => {
					if(structure[table][key] === undefined) {	
						reject({code: 500, message: "Field \'" + key + "\' is not a part of the table \'" + table + '\''});
					}
				});

				resolve();
			});
		}

		console.log(structure);
		resolve(connection);
	});
}
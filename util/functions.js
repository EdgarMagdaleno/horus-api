to_create = function(promise) {
	return promise
	.then(data => {
		console.log("data: ", data)
	})
	.catch(err => {
		console.error("error: ", err);
		return [{code: 500, message: err}]
	});
}

to_one = function(promise) {
	return promise
	.then(data => {
		if(data[0].length == 0) return [{code: 404, message: 'Not found'}];
		return [null, data[0][0]];
	}).catch(err => {
		console.log(err);
		return [{code: 500, message: err}]
	});
}

to_many = function(promise) {
	return promise
	.then(data => {
		if(data[0].length == 0) return [{code: 404, message: 'Not found'}];
		return [null, data[0]];
	}).catch(err => {
		return [{code: 500, message: err}]
	});
}

res_error = function(res, err) {
	return res.status(err.code).json({error: err});
}

res_success = function(res, data) {
  return res.status(200).json({data: data});
};

bad_request = function(res) {
	return res.status(400).json({error: {code: 400, message: 'Bad request'}});
}

parse_error = function(err) {
	try {
		
	}
}
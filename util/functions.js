to = function(promise) {
	return promise.then(data => {
		return [null, data];
	}).catch(err => {
		return [err];
	});
}

to_do = function(promise) {
	return promise
	.then(data => {
		if(data[0].affectedRows == 0) return [{code: 404, message: 'Not found'}];
		return [null, data[0]];
	})
	.catch(err => {
		return [{code: 500, message: err.message}];
	});
}

to_one = function(promise) {
	return promise
	.then(data => {
		if(data[0].length == 0) return [{code: 404, message: 'Not found'}];
		return [null, data[0][0]];
	}).catch(err => {
		return [{code: 500, message: err.message}]
	});
}

to_many = function(promise) {
	return promise
	.then(data => {
		if(data[0].length == 0) return [{code: 404, message: 'Not found'}];
		return [null, data[0]];
	}).catch(err => {
		return [{code: 500, message: err.message}]
	});
}

res_error = function(res, err) {
	return res.status(err.code).json({error: err});
}

res_success = function(res, data) {
	if(!data) return res.status(200).send();
	return res.status(200).json({data: data});
};

bad_request = function(res) {
	return res.status(400).json({error: {code: 400, message: 'Bad request'}});
}

pe = require('parse-error');//parses error so you can read error message and handle them accordingly

to = function(promise) {//global function that will help use handle promise rejections, this article talks about it http://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/
	return promise
	.then(data => {
		return [null, data];
	}).catch(err =>
		[pe(err)]
	);
}

res_error = function(res, err, code){ // Error Web Response
	if(typeof err == 'object' && typeof err.message != 'undefined'){
		err = err.message;
	}

	if(typeof code !== 'undefined') res.statusCode = code;

	return res.json({success:false, error: err});
}

res_success = function(res, output) {
  return res.json(Object.assign({ success: true }, output));
};
const express = require('express');
const router = express.Router();

// 200 OK
// 400 Bad Request
// 404 Not Found
// 500 Internal Server Error

const participant_controller	=	require('./../controllers/participant_controller');
const package_controller			= require('./../controllers/package_controller');

router	.post(		'/participants',				participant_controller.create)
				.get(			'/participants/:id',		participant_controller.read_one)
				.get(			'/participants/',				participant_controller.read_many)
				.put(			'/participants/:id',		participant_controller.update)
				.delete(	'/participants/:id',		participant_controller.del);

router	.post(		'/packages',				package_controller.create)
				.get(			'/packages/:id?',		package_controller.read)
				.put(			'/packages',				package_controller.update)
				.delete(	'/packages',				package_controller.del);

//router.get('/participants/:id', participant_controller.get);

/*
const UserController 	= require('./../controllers/UserController');
const CompanyController = require('./../controllers/CompanyController');
const HomeController 	= require('./../controllers/HomeController');

const custom 	        = require('./../middleware/custom');

const passport      	= require('passport');
const path              = require('path');


require('./../middleware/passport')(passport)

router.get('/', function(req, res, next) {
  res.json({status:"success", message:"Parcel Pending API", data:{"version_number":"v1.0.0"}})
});


router.post(    '/users',           UserController.create);                                                   
router.get(     '/users',           passport.authenticate('jwt', {session:false}), UserController.get);        
router.put(     '/users',           passport.authenticate('jwt', {session:false}), UserController.update);    
router.delete(  '/users',           passport.authenticate('jwt', {session:false}), UserController.remove);     
router.post(    '/users/login',     UserController.login);

router.post(    '/companies',             passport.authenticate('jwt', {session:false}), CompanyController.create);                  
router.get(     '/companies',             passport.authenticate('jwt', {session:false}), CompanyController.getAll);       

router.get(     '/companies/:company_id', passport.authenticate('jwt', {session:false}), custom.company, CompanyController.get);
router.put(     '/companies/:company_id', passport.authenticate('jwt', {session:false}), custom.company, CompanyController.update); 
router.delete(  '/companies/:company_id', passport.authenticate('jwt', {session:false}), custom.company, CompanyController.remove); 

router.get('/dash', passport.authenticate('jwt', {session:false}),HomeController.Dashboard)


//********* API DOCUMENTATION **********
router.use('/docs/api.json',            express.static(path.join(__dirname, '/../public/v1/documentation/api.json')));
router.use('/docs',                     express.static(path.join(__dirname, '/../public/v1/documentation/dist')));
*/
module.exports = router;

var express = require('express');
var router = express.Router();

var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

router.get('/', function(req, res, next) {
	res.render('login', {
		match: true,
		username: '',
		redirect: req.query.redirect
	});
});

router.post('/', function(req, res, next) {
	var db = req.app.locals.db;
	const Collection = db.collection('Users');
	Collection.find({'username': req.body.username}).toArray(function(err, result) {
		if(result.length != 0) {
			bcrypt.compare(req.body.password, result[0].password, function(error, match) {
					if(match == true) {
						let payload = {
							"exp": Math.round((new Date().getTime() +2*60*60 * 1000)/1000 ) ,
							"usr": req.body.username
						};
						var token = jwt.sign(payload, 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c', {header: {
						  "alg": "HS256",
						  "typ": "JWT"
							}});
						res.cookie('jwt', token, {expires: 0});
						res.redirect(req.body.redirect);
					} else {
						res.render('login', {
							match: false,
							username: req.body.username,
							redirect: req.body.redirect
						});
					}
			});
		} else {
			res.render('login', {
				match: true,
				username: req.body.username,
				redirect: req.body.redirect
			});
		}
	});
});

module.exports = router;
var express = require('express');
var commonmark = require('commonmark');
var router = express.Router();
var reader = new commonmark.Parser();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

router.get('/:username', function(req, res, next) {
	var db = req.app.locals.db;
	const Collection = db.collection('Posts');

	var token = req.cookies.jwt;
	if (token == null)
		return res.status(401).send('Unauthorized! Cookies not found.');

	try {
		var decoded = jwt.verify(token, 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c');
	} catch (e) {
		return res.status(401).send('JWT Expired!');
	}
	
	if (decoded.usr == null || decoded.user == '') {
		return res.status(404).send('Username cannot be Null!');
	}

	if (decoded.usr != req.params.username || decoded.exp * 1000 < Date.now()) {
		return res.status(401).send('Unauthorized!');
	}

	Collection.find({"username": req.params.username}).toArray(function(err, result) {
		return res.status(200).json(result);
	});
});

router.get('/:username/:postid', function(req, res, next) {
	var db = req.app.locals.db;
	const Collection = db.collection('Posts');

	var token = req.cookies.jwt;
	if (token == null)
		return res.status(401).send('Unauthorized! Cookies not found.');

	try {
		var decoded = jwt.verify(token, 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c');
	} catch (e) {
		return res.status(401).send('JWT Expired!');
	}

	if (decoded.usr == null || decoded.user == '') {
		return res.status(404).send('Username cannot be Null!');
	}

	if (decoded.usr != req.params.username || decoded.exp * 1000 < Date.now()) {
		return res.status(401).send('Unauthorized!');
	}

	Collection.find({$and: [{"username": req.params.username}, {postid: parseInt(req.params.postid)}]}).toArray(function(err, result) {
		if (result.length > 0) {
			return res.status(200).json(result);
		}
		else {
			return res.status(404).send('Nothing found!');
		}
	});
});

router.post('/:username/:postid', function(req, res, next) {
	var db = req.app.locals.db;
	const Collection = db.collection('Posts');

	var token = req.cookies.jwt;
	if (token == null)
		return res.status(401).send('Unauthorized! Cookies not found.');

	try {
		var decoded = jwt.verify(token, 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c');
	} catch (e) {
		return res.status(401).send('JWT Expired!');
	}
	
	if (decoded.usr == null || decoded.user == '') {
		return res.status(404).send('Username cannot be Null!');
	}

	if (decoded.usr != req.params.username || decoded.exp * 1000 < Date.now()) {
		return res.status(401).send('Unauthorized!');
	}

	Collection.find({$and: [{"username": req.params.username}, {postid: parseInt(req.params.postid)}]}).toArray(function(err, result) {
			if (result.length > 0) {
				return res.status(400).send('Post is already exist!');
			}
			else {
				var newTitle = null;
				var newBody = null;
				try {
					newTitle = req.body['title'];
					newBody = req.body['body'];
					if (newTitle == null || newBody == null) {
						return res.status(400).send('Title and body cannot be empty!');
					}
				} catch(e) {
					return res.status(400).send('Title and body MUST in Json type!');
				}
				Collection.insertOne({postid: parseInt(req.params.postid), username: req.params.username, 
					created: Date.now(), modified: Date.now(), title: newTitle, body: newBody}, function(err, obj){
						if (err)
							throw err;
						return res.status(201).send('Insert success!');
					});
			}
		});
});

router.put('/:username/:postid', function(req, res, next) {
	var db = req.app.locals.db;
	const Collection = db.collection('Posts');

	var token = req.cookies.jwt;
	if (token == null)
		return res.status(401).send('Unauthorized! Cookies not found.');

	try {
		var decoded = jwt.verify(token, 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c');
	} catch (e) {
		return res.status(401).send('JWT Expired!');
	}
	
	if (decoded.usr == null || decoded.user == '') {
		return res.status(404).send('Username cannot be Null!');
	}

	if (decoded.usr != req.params.username || decoded.exp * 1000 < Date.now()) {
		return res.status(401).send('Unauthorized!');
	}

	Collection.find({$and: [{"username": req.params.username}, {postid: parseInt(req.params.postid)}]}).toArray(function(err, result) {
			if (result.length <= 0) {
				return res.status(400).send('Post does not exist!');
			}
			else {
				var newTitle = null;
				var newBody = null;
				try {
					newTitle = req.body['title'];
					newBody = req.body['body'];
					if (newTitle == null || newBody == null) {
						return res.status(400).send('Title and body cannot be empty!');
					}
				} catch(e) {
					return res.status(400).send('Title and body MUST in Json type!');
				}

				Collection.update({$and: [{postid: parseInt(req.params.postid)}, {username: req.params.username}]}, 
					{postid: parseInt(req.params.postid), username: req.params.username, 
					created: result[0].created, modified: Date.now(), title: newTitle, body: newBody}, function(err, obj){
						if (err)
							throw err;
						return res.status(200).send('Update success!');
					});
			}
		});
});

router.delete('/:username/:postid', function(req, res, next) {
	var db = req.app.locals.db;
	const Collection = db.collection('Posts');

	var token = req.cookies.jwt;
	if (token == null)
		return res.status(401).send('Unauthorized! Cookies not found.');

	try {
		var decoded = jwt.verify(token, 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c');
	} catch (e) {
		return res.status(401).send('JWT Expired!');
	}
	
	if (decoded.usr == null || decoded.user == '') {
		return res.status(404).send('Username cannot be Null!');
	}

	if (decoded.usr != req.params.username || decoded.exp * 1000 < Date.now()) {
		return res.status(401).send('Unauthorized!');
	}

	Collection.find({$and: [{"username": req.params.username}, {postid: parseInt(req.params.postid)}]}).toArray(function(err, result) {
			if (result.length <= 0) {
				return res.status(400).send('Post does not exist!');
			}
			else {
				Collection.deleteOne({$and: [{postid: parseInt(req.params.postid)}, {username: req.params.username}]},
					function(err, obj){
						if (err)
							throw err;
						return res.status(204).send('Delete success!');
					});
			}
		});
});

module.exports = router;

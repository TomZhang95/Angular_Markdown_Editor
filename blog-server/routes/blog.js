var express = require('express');
var commonmark = require('commonmark');
var router = express.Router();
var reader = new commonmark.Parser();
var writer = new commonmark.HtmlRenderer();

router.get('/:username', function(req, res, next) {
	var db = req.app.locals.db;
	const Collection = db.collection('Posts');

	// For pagination only, with start para
	if(req.query.start != null) {
		Collection.find({$and :[{"username": req.params.username}, {"postid": {$gte: parseInt(req.query.start)}}]}).toArray(function(err, result) {
				var next = null;
				if(result.length > 5) {
					next = result[5].postid;
					result = result.slice(0, 5);
				}
				for(i = 0; i < result.length; i++) {
					var parsedTitle = reader.parse(result[i].title);
					result[i].title = writer.render(parsedTitle);
					var parsedBody = reader.parse(result[i].body);
					result[i].body = writer.render(parsedBody);
				}
				
				Collection.find({$and :[{"username": req.params.username}, {"postid": {$lt: parseInt(req.query.start)}}]}).toArray(function(err, preResult) {
					var prev = null;
					if(preResult.length > 5) {
						prev = preResult[preResult.length - 5].postid;
					} else if(preResult.length <= 0) {
						prev = -1;
					} else {
						prev = preResult[0].postid;
					}
					res.render('blog', {username: req.params.username, posts: result, prev: prev, next: next});
				});
		});
	} else {
		Collection.find({"username": req.params.username}).toArray(function(err, result) {
				var prev = -1;
				var next = null;
				if(result.length > 5) {
					next = result[5].postid;
					result = result.slice(0, 5);
				}
				for(i = 0; i < result.length; i++) {
					var parsedTitle = reader.parse(result[i].title);
					result[i].title = writer.render(parsedTitle);
					var parsedBody = reader.parse(result[i].body);
					result[i].body = writer.render(parsedBody);
				}
				res.render('blog', {username: req.params.username, posts: result, prev: prev, next: next});
		});
	}
});

router.get('/:username/:postid', function(req, res, next) {
	var db = req.app.locals.db;
	const Collection = db.collection('Posts');

	Collection.find({$and: [{"username": req.params.username}, {"postid": parseInt(req.params.postid)}]}).toArray(function(err, result) {
			var prev = null;
			var next = null;
			for(i = 0; i < result.length; i++) {
				var parsedTitle = reader.parse(result[i].title);
				result[i].title = writer.render(parsedTitle);
				var parsedBody = reader.parse(result[i].body);
				result[i].body = writer.render(parsedBody);
			}
			res.render('blog', {username: req.params.username, posts: result, prev: prev, next: next})
	});
});

module.exports = router;









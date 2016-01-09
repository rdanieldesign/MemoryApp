var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/all', function(req, res) {
	var db = req.db;
	var users = db.get('users');
	users.find({}, {}, function(e, data){
		res.json(data);
	});
});

module.exports = router;

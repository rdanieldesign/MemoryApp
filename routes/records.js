var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/all', function(req, res) {
	var db = req.db;
	var records = db.get('records');
	records.find({}, {}, function(e, data){
		res.json(data);
	});
});

module.exports = router;

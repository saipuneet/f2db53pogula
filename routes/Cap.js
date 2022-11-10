var express = require('express');

var router = express.Router();



/* GET home page. */

router.get('/', function(req, res, next) {

  res.render('Cap', { title: 'Search Results Cap' });

});

var express = require('express');

const Cap_controllers= require('../controllers/Cap');

var router = express.Router();

/* GET costumes */

router.get('/', Cap_controllers.Cap_view_all_Page );

module.exports = router;

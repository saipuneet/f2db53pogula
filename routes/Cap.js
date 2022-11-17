var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Cap', { title: 'Search Results Cap' });
});

var express = require('express');
const Cap_controllers= require('../controllers/Cap');
var router = express.Router();

/* GET Caps */
router.get('/', Cap_controllers.Cap_view_all_Page );
module.exports = router;

/* GET detail Cap page */
router.get('/detail', Cap_controllers.Cap_view_one_Page);

/* GET create Cap page */
router.get('/create', Cap_controllers.Cap_create_Page);

/* GET create update page */
router.get('/update', Cap_controllers.Cap_update_Page);

/* GET delete Cap page */
router.get('/delete', Cap_controllers.Cap_delete_Page);


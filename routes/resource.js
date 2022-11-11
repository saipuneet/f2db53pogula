var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Cap_controller = require('../controllers/Cap');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Cap ROUTES ///
// POST request for creating a Cap.
router.post('/Cap', Cap_controller.Cap_create_post);
// DELETE request to delete Cap.
router.delete('/Cap/:id', Cap_controller.Cap_delete);
// PUT request to update Cap.
router.put('/Cap/:id', Cap_controller.Cap_update_put);
// GET request for one Cap.
router.get('/Cap/:id', Cap_controller.Cap_detail);
// GET request for list of all Cap items.
router.get('/Cap', Cap_controller.Cap_list);
module.exports = router;
// GET request for one water.
router.get('/Cap/:id', Cap_controller.Cap_detail);
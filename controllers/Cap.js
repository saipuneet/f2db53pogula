var Cap = require('../models/Cap');
// List of all Cap
exports.Cap_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Cap list');
};
// for a specific Cap.
exports.Cap_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await Cap.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }

};
// Handle Cap create on POST.
exports.Cap_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Cap create POST');
};
// Handle Cap delete form on DELETE.
exports.Cap_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Cap delete DELETE ' + req.params.id);
};
// Handle Cap update form on PUT.
exports.Cap_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Cap update PUT' + req.params.id);
};
// Handle Cap update form on PUT.
exports.Cap_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Cap.findById( req.params.id)
        // Do updates of properties
        if(req.body.Cap_Name)
               toUpdate.Cap_Name = req.body.Cap_Name;
        if(req.body.Cap_Company) toUpdate.Cap_Company = req.body.Cap_Company;
        if(req.body.Cap_Size) toUpdate.Cap_Size = req.body.Cap_Size;
        if(req.body.Cap_Rating) toUpdate.Cap_Rating = req.body.Cap_Rating;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};


// VIEWS

   // List of all Cap
exports.Cap_list = async function(req, res) {
    try{
    theCap = await Cap.find();
    res.send(theCap);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle a show all view
exports.Cap_view_all_Page = async function(req, res) {
    try{
    theCap = await Cap.find();
    res.render('Cap', { title: 'Cap Search Results', results: theCap });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Cap create on POST.
exports.Cap_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Cap();
    document.Cap_Name = req.body.Cap_Name;
    document.Cap_Company = req.body.Cap_Company;
    document.Cap_Size = req.body.Cap_Size;
    document.Cap_Rating = req.body.Cap_Rating;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};

// Handle Cap delete on DELETE.
exports.Cap_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Cap.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

   // Handle a show one view with id specified by query
exports.Cap_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Cap.findById( req.query.id)
    res.render('Capdetail',
   { title: 'Cap Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a Cap.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Cap_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Capcreate', { title: 'Cap Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for updating a Cap.
// query provides the id
exports.Cap_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Cap.findById(req.query.id)
    res.render('Capupdate', { title: 'Cap Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle a delete one view with id from query
exports.Cap_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Cap.findById(req.query.id)
    res.render('Capdelete', { title: 'Cap Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
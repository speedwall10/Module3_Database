const db = require('./config/db.manager.customers'); 
//const db2 = require('../config/db.managercustomer'); 
//const db3 = require('../config/db.manager.sales'); 

exports.getCustomerid = function (req, res) { 
 const CustomerAll = db.getCustomerid().then(results=>{ 
 console.log(results); 
 res.status(200).json({ 
 status: 'successfull', 
 data: results.recordsets[0] 
 }); // send all the data 
 }); 
} 
exports.getSalesByID = function( req, res){ 
 const {id} = req.params; // get id 
 res.status(200).json({ 
 status: 'no implemented' 
 }); 
} 
exports.postCustomerid = function( req, res){ // must select the body to be raw->JSON in Postman 
 const {body} = req;// req.body (attribute) 
 const {id} = req.params;// get (attribute) 
 res.status(200).json({ 
    status: 'successfull', 
    data: results.recordsets[0]  
 }); 
} 
exports.patchSalesById = function( req, res){ // must select the body to be raw->JSON in Postman 
 const {body} = req;// req.body (attribute) 
 const {id} = req.params;// get id (attribute) 
 res.status(200).json({ 
 status: 'no implemented' 
 }); 
} 
exports.deleteSalesByID = function( req, res){ // must select the body to be raw->JSON in Postman 
 const {body} = req;// req.body (attribute) 
 const {id} = req.params;// get id 
 res.status(200).json({ 
 status: 'no implemented' 
 }); 
}
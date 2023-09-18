const express = require('express'); 
const router = express.Router(); 
const customersController = require('../customersController'); 
router 
 .route('/') 
 .get(customersController.getCustomerid) 
 .post(customersController.postCustomerid); 

router 
 .route('/:id') 
 .get(customersController.getSalesByID) 
 .patch(customersController.patchSalesById) 
 .delete(customersController.deleteSalesByID); 
module.exports = router;
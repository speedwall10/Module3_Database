const sql = require('mssql'); 
const dbConnection = require('./db.config'); 
console.log(dbConnection); 
async function postCustomerid(){ 
 console.log(' Connecting to SQL....... Cloud Server'); 
 let dbContext = await sql.connect(dbConnection); 
 console.log('The Databse connection was Successful'); 
 console.log('Getting data'); 
 let results = await dbContext.request() 
 .query(` INSERT INTO  SalesLT.Customer (Title, FirstName, CustomerID, Phone)
 VALUES (Mr, Jimmy, 10240, 972-555-0159);
 `); 
 console.log(`Insert SQL results`); 
 return results; 
} 
//Export 
module.exports = {postCustomerid :postCustomerid};
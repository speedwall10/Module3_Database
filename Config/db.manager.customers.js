const sql = require('mssql'); 
const dbConnection = require('./db.config'); 
console.log(dbConnection); 
async function getCustomerid(){ 
 console.log(' Connecting to SQL....... Cloud Server'); 
 let dbContext = await sql.connect(dbConnection); 
 console.log('The Databse connection was Successful'); 
 console.log('Getting data'); 
 let results = await dbContext.request() 
 .query(` 
 SELECT TOP(20) 
 CustomerID, 
 FirstName, 
 EmailAddress, 
 Phone  
 FROM 
 SalesLT.Customer
 `); 
 console.log(`Returned SQL results`); 
 return results; 
} 
//Export 
module.exports = {getCustomerid :getCustomerid};
var readlineSync = require('readline-sync');
let userReg = require('./userRegistration');
 
var uFname = readlineSync.question('Enter the first name : ');
if (userReg.firstName(uFname))
	console.log("Valid");	
else
	console.log("Invalid");

var uLname = readlineSync.question('Enter the last name : ');
if(userReg.lastName(uLname))
	console.log("Valid");	
else
	console.log("Invalid");

var uEmail = readlineSync.question('Enter the email : ');
if (userReg.checkvalidEmail(uEmail))
	console.log("Valid");	
else
	console.log("Invalid");



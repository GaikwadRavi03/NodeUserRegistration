var readlineSync = require('readline-sync');
let userReg = require('./userRegistration');
 
var uFname = readlineSync.question('Enter the first name : ');
if (userReg.firstName(uFname))
	console.log("Valid first name");	
else
	console.log("Invalid first name");

var uLname = readlineSync.question('Enter the last name : ');
if(userReg.lastName(uLname))
	console.log("Valid last name");	
else
	console.log("Invalid last name");

var uEmail = readlineSync.question('Enter the email : ');
if (userReg.checkvalidEmail(uEmail))
	console.log("Valid email");	
else
	console.log("Invalid email");

var mobNo = readlineSync.question('Enter the Mobile Number : ');
if (userReg.checkMobNumber(mobNo))
	console.log("Valid mobile number");	
else
	console.log("Invalid mobile number");

var password = readlineSync.question('Enter the password : ');
if (userReg.checkPassword(password))
	console.log("Valid password");	
else
	console.log("Invalid password");

let userReg = require('./userRegistration');

let good1 = userReg.firstName("Ravi");
console.log(good1);
let err1 = userReg.firstName("ravi");
console.log(err1);
let err2 = userReg.firstName("Ravi1");
console.log(err2);
let err3 = userReg.firstName("1Ravi");
console.log(err3);
let err4 = userReg.firstName("Ravi@");
console.log(err4);
console.log("\n");
let good2 = userReg.lastName("Gaikwad");
console.log(good2);
let err5 = userReg.lastName("Gaikwad1");
console.log(err5);
let err6 = userReg.lastName("1Gaikwad");
console.log(err6);
let err7 = userReg.lastName("gaikwad");
console.log(err7);
let err8 = userReg.lastName("Gaikwad@");
console.log(err8);


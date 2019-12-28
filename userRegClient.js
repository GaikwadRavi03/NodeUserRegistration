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

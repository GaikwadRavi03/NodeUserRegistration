var assert = require('assert');
var validator = require('./userRegistration');

describe('User Registration Test for FirstName validity', function(){
	it('should return true when user firstName valid.', function(){
	assert.equal(validator.firstName("Ravi"),true);
});
	it('should return false when user firstName word size less than 3.', function(){
	assert.equal(validator.firstName("Rav"),false);
});
	it('should return false when user firstName in capital letters only.', function(){
	assert.equal(validator.firstName("RAVI"),false);
});
	it('should return false when user firstName in small letters only.', function(){
	assert.equal(validator.firstName("ravi"),false);
});
	it('should return false when user firstName with numeric.', function(){
	assert.equal(validator.firstName("Ravi03"),false);
});
	it('should return false when user firstName with any symbol.', function(){
	assert.equal(validator.firstName("Ravi@"),false);
});
});

describe('User Registration Test for LastName validity', function(){
	it('should return true when user lastName valid.', function(){
	assert.equal(validator.lastName("Gaikwad"),true);
});
	it('should return false when user lastName word size less than 3.', function(){
	assert.equal(validator.lastName("Gai"),false);
});
	it('should return false when user lastName in capital letters only.', function(){
	assert.equal(validator.lastName("GAIKWAD"),false);
});
	it('should return false when user lastName in capital small only.', function(){
	assert.equal(validator.lastName("gaikwad"),false);
});
	it('should return false when user lastName with numbers.', function(){
	assert.equal(validator.lastName("Gaikwad21"),false);
});
	it('should return false when user lastName with symbol.', function(){
	assert.equal(validator.lastName("gaikwad$"),false);
});
});
describe('User Registration Test for email validity', function(){
	it('should return true when user email valid.', function(){
	assert.equal(validator.checkvalidEmail("gaikwadr576@gmail.com"),true);
});
	it('should return true when user email valid.', function(){
	assert.equal(validator.checkvalidEmail("abc@yahoo.com"),true);
});
	it('should return true when user email valid.', function(){
	assert.equal(validator.checkvalidEmail("abc-100@yahoo.com"),true);
});
	it('should return true when user email valid.', function(){
	assert.equal(validator.checkvalidEmail("abc.100@abc.com.au"),true);
});
	it('should return true when user email valid.', function(){
	assert.equal(validator.checkvalidEmail("abc111@abc.com"),true);
});
	it('should return true when user email valid.', function(){
	assert.equal(validator.checkvalidEmail("abc-100@abc.net"),true);
});
	it('should return true when user email valid.', function(){
	assert.equal(validator.checkvalidEmail("abc.100@abc.com.au"),true);
});
	it('should return true when user email valid.', function(){
	assert.equal(validator.checkvalidEmail("abc@1.com"),true);
});
	it('should return true when user email valid.', function(){
	assert.equal(validator.checkvalidEmail("abc@gmail.com.com"),true);
});
	it('should return true when user email valid.', function(){
	assert.equal(validator.checkvalidEmail("abc+100@gmail.com"),true);
});

	it('should return false when user email Invalid.', function(){
	assert.equal(validator.checkvalidEmail("abc"),false);
});
	it('should return false when user email Invalid.', function(){
	assert.equal(validator.checkvalidEmail("abc@.com.my"),false);
});
	it('should return false when user email Invalid.', function(){
	assert.equal(validator.checkvalidEmail("abc123@gmail.a"),false);
});
	it('should return false when user email Invalid.', function(){
	assert.equal(validator.checkvalidEmail("abc123@.com"),false);
});
	it('should return false when user email Invalid.', function(){
	assert.equal(validator.checkvalidEmail("abc123@.com.com"),false);
});
	it('should return false when user email Invalid.', function(){
	assert.equal(validator.checkvalidEmail(".abc@abc.com"),false);
});
	it('should return false when user email Invalid.', function(){
	assert.equal(validator.checkvalidEmail("abc@%*.com"),false);
});
	it('should return false when user email Invalid.', function(){
	assert.equal(validator.checkvalidEmail("abc..2002@gmail.com"),false);
});
	it('should return false when user email Invalid.', function(){
	assert.equal(validator.checkvalidEmail("abc.@gmail.com"),false);
});
	it('should return false when user email Invalid.', function(){
	assert.equal(validator.checkvalidEmail("abc@abc@gmail.com"),false);
});
	it('should return false when user email Invalid.', function(){
	assert.equal(validator.checkvalidEmail("abc@gmail.com.1a"),false);
});
	it('should return false when user email Invalid.', function(){
	assert.equal(validator.checkvalidEmail("abc@gmail.com.aa.au"),false);
});
});
describe('User Registration Test for mobile number validity', function(){
	it('should return true when user mobile number valid.', function(){
	assert.equal(validator.checkMobNumber("91 9876543210"),true);
});
	it('should return false when user mobile number without state code.', function(){
	assert.equal(validator.checkMobNumber("9876543210"),false);
});
	it('should return false when user mobile number not exact 10 digits.', function(){
	assert.equal(validator.checkMobNumber("91 987654321"),false);
});
	it('should return false when user mobile number null.', function(){
	assert.equal(validator.checkMobNumber(""),false);
});
});
describe('User Registration Test for Password validity', function(){
	it('should return true when user Password valid.', function(){
	assert.equal(validator.checkPassword("Password@1234"),true);
});
	it('should return false when user Password without capital letter.', function(){
	assert.equal(validator.checkPassword("password@1234"),false);
});
	it('should return false when user Password without any special symbol.', function(){
	assert.equal(validator.checkPassword("Password1234"),false);
});
	it('should return false when user Password without any number.', function(){
	assert.equal(validator.checkPassword("Password@"),false);
});
});

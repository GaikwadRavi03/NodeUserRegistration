var assert = require('assert');
var validator = require('/home/slot1/Desktop/Ravi/UserRegistration/userRegistration.js');



describe('User Registration Test for FirstName validity', function(){
	it('should return true when user firstName valid.', function(){
	assert.equal(validator.firstName("Ravi"),true);
});
});
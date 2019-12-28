class userRegistration{

	firstName(name){
	let pat = RegExp('^[A-Z]{1}[a-z]{3,}$');
	return pat.test(name);
	}
}
module.exports = new userRegistration;

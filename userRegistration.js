class userRegistration{

	firstName(name){
	let pat = RegExp('^[A-Z]{1}[a-z]{3,}$');
	return pat.test(name);
	}

	lastName(name){
	let pat = RegExp('^[A-Z]{1}[a-z]{3,}$');
	return pat.test(name);
	}

	checkvalidEmail(email){
	let pat = RegExp('^[a-zA-Z0-9]([._+-]{0,1}[a-zA-Z0-9])*[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-zA-Z]{2,3}([.]{1}[a-zA-Z]{2,3}){0,1}$');
	return pat.test(email);
	}
}
module.exports = new userRegistration;

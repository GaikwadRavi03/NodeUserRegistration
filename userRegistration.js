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

	checkMobNumber(mobNo){
	let pat = RegExp('^[0-9]{2}\\s[0-9]{10}$');
	return pat.test(mobNo);
	}

	checkPassword(password){
	let pat = RegExp('^[a-zA-Z]{8,}$');
	return pat.test(password);
	}
}
module.exports = new userRegistration;

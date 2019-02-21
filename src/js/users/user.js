import {RequestMethod} from '../request/index';


export class User {
	constructor() {

	}

	login(username, password, options) {
		console.log(username, password);

		fetch('/login', {
			method: RequestMethod.POST ,
			body: "frewfe"
		})
		.then(res => res)
		.then(response => console.log('Success:', JSON.stringify(response)))
		.catch(error => {
			console.log('Error:', error);

			return error;
		})
	}

	static login(username, password, options) {
		var user = new User();
		return user.login(username, password, options);
	}


	signup(data) {
		fetch('/signup', {
			method: RequestMethod.POST ,
			body: data
		})
		.then(res => res)
		.then(response => console.log('Success:', JSON.stringify(response)))
		.catch(error => {
			console.log('Error:', error);
			return error;
		})
	}

	static signup(data) {
		var user = new User();
		return user.signup(data);
	}


	
}
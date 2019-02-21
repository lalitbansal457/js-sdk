import {RequestMethod} from '../request/index';

export class CustomEndpoint {
	constructor() {

	}


	execute(BlName, data) {
		
		fetch('/custom/'+BlName, {
			method: RequestMethod.POST ,
			body: { "data": data}
		})
		.then(res => res)
		.then(response => console.log('Success:', JSON.stringify(response)))
		.catch(error => {
			console.log('Error:', error);

			return error;
		})
	}
}
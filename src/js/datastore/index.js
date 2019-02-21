import {RequestMethod} from '../request/index';

export class DataStore {
	constructor() {}

	// Save data 
	save(collection, data) {

		fetch('/save', {
			method: RequestMethod.POST ,
			body: {"collection":collection, "data": data}
		})
		.then(res => res)
		.then(response => console.log('Success:', JSON.stringify(response)))
		.catch(error => {
			console.log('Error:', error);

			return error;
		})

	}

	static save(collection, data) {
		var datastore = new DataStore();
		return datastore.save(collection, data);
	}



	// Get data
	get(collection, query, fields) {
		fetch('/get', {
			method: RequestMethod.POST ,
			body: {"collection":collection, "query": query}
		})
		.then(res => res)
		.then(response => console.log('Success:', JSON.stringify(response)))
		.catch(error => {
			return error;
		})
	}

	static get(collection, query, fields) {
		var datastore = new DataStore();
		return datastore.get(collection, query, fields);
	}	


	// Update data
	update(collection, query, data) {
		fetch('/update', {
			method: RequestMethod.POST ,
			body: {"collection":collection, "query": query, "data": data}
		})
		.then(res => res)
		.then(response => console.log('Success:', JSON.stringify(response)))
		.catch(error => {
			return error;
		})
	}

	static update(collection, query, data) {
		var datastore = new DataStore();
		return datastore.update(collection, query, data);
	}

	// Remove data
	remove(collection, query) {
		fetch('/remove', {
			method: RequestMethod.POST ,
			body: {"collection":collection, "query": query}
		})
		.then(res => res)
		.then(response => console.log('Success:', JSON.stringify(response)))
		.catch(error => {
			return error;
		})
	}

	static remove(collection, query) {
		var datastore = new DataStore();
		return datastore.remove(collection, query);
	}


}
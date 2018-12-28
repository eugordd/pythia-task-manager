import axios from 'axios';

const api = 'https://tangalun.ga/api/v1/'

export default {
	login(data) {
		return axios.post(api + 'auth/login', data)
            .then(response => response.data)
			.catch(error => Promise.reject(error.response));
	},
	getProfile() {
		return axios.get(api + 'profile')
			.then(response => response.data)
			.catch(error => Promise.reject(error.response))
	},
	getTasks() {
		return axios.get(api + 'tasks')
			.then(response => response.data)
			.catch(error => Promise.reject(error.response))
	},
	changeTaskStatus(data) {
		console.log(data)
		return axios.post(
			api + 'tasks/' + data.uid + '/next', 
			data.tags ? { tags: data.tags.map(val => val.uid) } : { hours: data.hours })
			.then(response => response.data)
			.catch(error => Promise.reject(error.response))
	},
	startTask(data) {
		return axios.post(api + 'tasks/' + data.uid + '/start')
			.then(response => response.data)
			.catch(error => Promise.reject(error.response))
	},
	taskAddEstimation(data) {
		return axios.post(api + 'tasks/' + data.uid + '/estimate', { estimation: data.estimation })
			.then(response => response.data)
			.catch(error => Promise.reject(error.response))
	},
	getHardTags() {
		return axios.get(api + 'tags/hard')
			.then(response => response.data)
			.catch(error => Promise.reject(error.response))
	},
	getSoftTags() {
		return axios.get(api + 'tags/soft')
			.then(response => response.data)
			.catch(error => Promise.reject(error.response))
	},
	addTask(data) {
		return axios.post(api + 'tasks', data)
			.then(response => response.data)
			.catch(error => Promise.reject(error.response))		
	},
	attachTagToProfile(tagId) {
		return axios.post(api + 'profile/tags/' + tagId)
			.then(response => response.data)
			.catch(error => Promise.reject(error.response))	
	}
}
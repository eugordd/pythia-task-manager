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
	}
}
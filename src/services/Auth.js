import axios from 'axios';

export default {
	login(data) {
		return axios.post(`https://tangalun.ga/api/v1/auth/login`, data)
            .then(response => response.data)
			.catch(error => Promise.reject(error.response));
	},
	getProfile() {
		return axios.get('https://tangalun.ga/api/v1/profile')
			.then(response => response.data)
			.catch(error => Promise.reject(error.response))
	}
}
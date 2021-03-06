import store from '../store'
import router from '../router'

const onSuccess = response => {
  const newToken = response.config.headers.Authorization
  store.commit('setToken', newToken)

  return response
}

const onError = error => {
  if (error.response.status === 403 && error.response.data === 'Access denied') {
    store.dispatch('logout');
    router.push({ path: '/login' })
  }
  return Promise.reject(error); 
}

const beforeRequestSuccess = (config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token;

  return config;
}

const beforeRequestError = (error) => {
  return Promise.reject(error);
}

export { onSuccess, onError, beforeRequestSuccess, beforeRequestError }
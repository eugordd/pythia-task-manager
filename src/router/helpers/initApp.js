import store from '../../store';

export default (to, from, next) => {
    const token = localStorage.getItem('token');
    
    if (token) store.commit('setLoggedIn', true)

	return next();
}
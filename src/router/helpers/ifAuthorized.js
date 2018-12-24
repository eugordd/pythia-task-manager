import store from '../../store';

export default (to, from, next) => {
	if (store.getters['isLoggedIn']) {
		return next('app');
	}

	return next()
}
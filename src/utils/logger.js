import store from '../store';

export const logger = function (type, msg) {
	const isDebug = store.get('config').debug;
	if (isDebug) {
		console.log(`${type}:`, msg);
	}
};

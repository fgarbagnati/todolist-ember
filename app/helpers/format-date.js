import Ember from 'ember';

export function formatDate(params) {
	return moment(params[0]).fromNow();
	// .format('YYYY-MM-DD'), etc. -- Momentjs website will show other options
}

export default Ember.Helper.helper(formatDate);
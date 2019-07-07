import Axios from 'axios';

let response = '';
const requestParams = {
	url: 'https://api.meetup.com/2',
	group: 'VueJS-Manchester',
	isSigned: 'true',
	photoHost: 'public',
	status: 'past'
};
const {url, group, isSigned, photoHost, status} = requestParams;

export const state = () => ({
	pastEvents: [],
	futureEvents: []
});

export const mutations = {
	storePastEvents(state, data) {
		state.pastEvents.push(...data);
		state.pastEvents.reverse();
	},
	storeFutureEvents(state, data) {
		state.futureEvents.push(...data);
	}
};

export const actions = {
	async getPastEvents(store) {
		response = await Axios.get(url +	'/events?&sign=' + isSigned + '&photo-host=' + photoHost + '&group_urlname=' + group + '&status=' +	status);
		store.commit('storePastEvents', response.data.results);
	},
	async getFutureEvents(store) {
		response = await Axios.get(url + '/events?&sign=' +	isSigned + '&photo-host=' +	photoHost + '&group_urlname=' + group);
		store.commit('storeFutureEvents', response.data.results);
	}
};

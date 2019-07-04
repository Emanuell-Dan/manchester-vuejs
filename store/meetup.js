import Axios from 'axios';

let response = '';
let requestParams = {
	url: 'https://api.meetup.com/2',
	group: 'VueJS-Manchester',
	isSigned: 'true',
	photoHost: 'public',
	status: 'past'
};
let {url, group} = requestParams;
const {isSigned, photoHost, status} = requestParams;

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
		requestParams = {...requestParams, group: 'McrFRED'}
		response = await Axios.get(url + '/events?&sign=' +	isSigned + '&photo-host=' +	photoHost + '&group_urlname=' + requestParams.group);
		store.commit('storeFutureEvents', response.data.results);
	}
};

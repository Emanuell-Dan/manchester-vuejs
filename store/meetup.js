import Axios from 'axios';

let response = '';
const requestParams = {
	url: 'https://api.meetup.com/',
	group: 'VueJS-Manchester'
};
const {url, group} = requestParams;

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
		response = await Axios.get(`${url}/${group}/events?status=past`, {
			headers: {
				'Content-Type': 'application/jsonp'
			}
		});
		store.commit('storePastEvents', response.data);
	},
	async getFutureEvents(store) {
		response = await Axios.get(`${url}/${group}/events`, {
			headers: {
				'Content-Type': 'application/jsonp'
			}
		});
		store.commit('storeFutureEvents', response.data);
	}
};

import Axios from 'axios';

const url = 'https://api.meetup.com/';
const group = 'VueJS-Manchester';
const isSigned = 'true';
const photoHost = 'public';
const status = 'past';

export const state = () => ({
	pastEvents: [],
	futureEvents: []
});

export const getters = {
	
}

export const mutations = {
	storePastEvents(state, data) {
		state.pastEvents.push(...data);
		console.log(state.pastEvents);
	},
	storeFutureEvents(state, data) {
		state.futureEvents.push(...data);
		console.log(state.futureEvents);
	}
};

export const actions = {
	async getPastEvents(store) {
		const response = await Axios.get(url + group +	'/events?&sign=' + isSigned + '&photo-host=' + photoHost + '&status=' +	status);
		store.commit('storePastEvents', response.data);
	},
	async getFutureEvents(store) {
		const response = await Axios.get(url + 'CoinFestUK' + '/events?&sign=' +	isSigned + '&photo-host=' +	photoHost);
		store.commit('storeFutureEvents', response.data);
	}
};

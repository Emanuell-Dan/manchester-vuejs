import Axios from 'axios';

const url = 'https://api.meetup.com/2';
const group = 'VueJS-Manchester';
const isSigned = 'true';
const photoHost = 'public';
const status = 'past';

export const state = () => ({
	pastEvents: [],
	futureEvents: [],
	eventAlbum: []
});

export const getters = {}

export const mutations = {
	storePastEvents(state, data) {
		state.pastEvents.push(...data);
	},
	storeFutureEvents(state, data) {
		state.futureEvents.push(...data);
	},
	storeEventAlbum(state, data) {
		state.eventAlbum.push(...data);
	}
};

export const actions = {
	async getPastEvents(store) {
		const response = await Axios.get(url +	'/events?&sign=' + isSigned + '&photo-host=' + photoHost + '&group_urlname=' + group + '&status=' +	status);
		store.commit('storePastEvents', response.data.results);
	},
	async getFutureEvents(store) {
		const response = await Axios.get(url + '/events?&sign=' +	isSigned + '&photo-host=' +	photoHost + '&group_urlname=CoinFestUK');
		store.commit('storeFutureEvents', response.data.results);
	},
	async getEventAlbum(store) {
		const response = await Axios.get(url + '/photos?&sign=' +	isSigned + '&photo-host=' +	photoHost + '&event_id=246262469');
		store.commit('storeEventAlbum', response.data.results);
	}
};

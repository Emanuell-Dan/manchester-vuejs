import Axios from 'axios';

let response = '';
let requestParams = {
	url: 'https://api.meetup.com/2',
	group: 'VueJS-Manchester',
	isSigned: 'true',
	photoHost: 'public',
	status: 'past'
}
let {url, group} = requestParams;
const {isSigned, photoHost, status} = requestParams;

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
		console.log(state.eventAlbum);
	}
};

export const actions = {
	async getPastEvents(store) {
		response = await Axios.get(url +	'/events?&sign=' + isSigned + '&photo-host=' + photoHost + '&group_urlname=' + group + '&status=' +	status);
		store.commit('storePastEvents', response.data.results);
	},
	async getFutureEvents(store) {
		requestParams = {...requestParams, group: 'BlockchainManchesterMeetup'}
		response = await Axios.get(url + '/events?&sign=' +	isSigned + '&photo-host=' +	photoHost + '&group_urlname=' + requestParams.group);
		store.commit('storeFutureEvents', response.data.results);
	},
	async getEventAlbum(store, eventID) {
		requestParams = {...requestParams, url: '/api'}
		response = await Axios.get(requestParams.url + '/photos?&sign=' +	isSigned + '&photo-host=' +	photoHost + '&event_id=' + eventID);
		store.commit('storeEventAlbum', response.data.results);
	}
};

import { getPastEvents, getFutureEvents } from '~/services/MeetupService';

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
		await getPastEvents().then(result => store.commit('storePastEvents', result.data.results));
	},
	async getFutureEvents(store) {
		await getFutureEvents().then(result => store.commit('storeFutureEvents', result.data.results));
	}
};

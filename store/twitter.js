import Axios from 'axios';

export const state = () => ({
	timeline: []
});

export const mutations = {
	buildTimeline(state, data) {
		state.timeline.push(...data);
	}
};

export const actions = {
	async getTimeline(store) {
		response = await Axios.get('https://api.twitter.com/vuejsmcr/statuses/');
		console.log(response);
		store.commit('buildTimeline', response);
	}
};

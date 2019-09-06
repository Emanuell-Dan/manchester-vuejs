import getTimeline from '~twitterTimeline';

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
		await getTimeline().then(result => store.commit('buildTimeline', result.data));
	}
};

export const state = () => ({});
export const getters = {};
export const actions = {
	async nuxtServerInit({ dispatch }) {
		await dispatch('twitter/getTimeline');
		await dispatch('meetup/getFutureEvents');
		// await dispatch('meetup/getPastEvents');
	}
};

export const state = () => ({});
export const getters = {};
export const actions = {
	async nuxtServerInit({ dispatch }) {
		await dispatch('meetup/getFutureEvents');
		await dispatch('meetup/getPastEvents');
	}
};

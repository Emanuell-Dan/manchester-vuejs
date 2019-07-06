import Twit from 'twit';

const T = new Twit({
  consumer_key:         process.env.NODE_ENV !== 'production' ? process.env.LOCAL_CONSUMER_KEY : process.env.CONSUMER_KEY,
  consumer_secret:      process.env.NODE_ENV !== 'production' ? process.env.LOCAL_CONSUMER_SECRET : process.env.CONSUMER_KEY_SECRET,
  access_token:         process.env.NODE_ENV !== 'production' ? process.env.LOCAL_ACCESS_TOKEN : process.env.ACCESS_TOKEN_SECRET,
	access_token_secret:  process.env.NODE_ENV !== 'production' ? process.env.LOCAL_ACCESS_TOKEN_SECRET : process.env.ACCESS_TOKEN_SECRET,
	timeout_ms:           60 * 1000
});

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
		T.get('statuses/user_timeline', { screen_name: 'vuejsmcr', count: 2 }).then(result =>	store.commit('buildTimeline', result.data));
	}
};

import Twit from 'twit';

const T = new Twit({
  consumer_key:         process.env.consumerKey,
  consumer_secret:      process.env.consumerSecret,
  access_token:         process.env.accessToken,
	access_token_secret:  process.env.accessTokenSecret,
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
		T.get('statuses/user_timeline', { screen_name: 'vuejsmcr', count: 9 }).then(result =>	store.commit('buildTimeline', result.data));
	}
};

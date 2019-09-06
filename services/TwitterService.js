import Twit from 'twit';

const T = new Twit({
	consumer_key: process.env.consumerKey,
	consumer_secret: process.env.consumerSecret,
	access_token: process.env.accessToken,
	access_token_secret: process.env.accessTokenSecret,
	timeout_ms: 60 * 1000
});

export default () => T.get('statuses/user_timeline', { screen_name: 'vuejsmcr', count: 9 });

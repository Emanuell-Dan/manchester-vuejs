import TweetCard from '@/components/TweetCard.vue';
import { mount } from '@vue/test-utils';

describe('TweetCard.vue', () => {
	let cmp;

	beforeEach(() => {
		cmp = mount(TweetCard, {
			propsData: {
				tweets: [
					{
						user: {
							screen_name: 'Gill2929',
							name: 'Harry Hill',
						},
						text: 'twitter text here',
						retweet_count: 5,
						favorite_count: 15
					}
				]
			}
		});
	});

	it('should render with expected html structure', () => {
		expect(cmp.element).toMatchSnapshot();
	});

	describe('twitter card', () => {
		it('renders user name', () => {
			expect(cmp.find('.tweet-card__profile-name').text()).toBe('Harry Hill');
		});

		it('renders tweet text', () => {
			expect(cmp.find('.tweet-card__text').text()).toBe('twitter text here');
		});

		it('renders retweet count', () => {
			expect(cmp.find('.tweet-card__count').text()).toBe('5');
		});

		it('renders likes count', () => {
			expect(cmp.find('.tweet-card__likes').text()).toBe('15');
		});
	});
});

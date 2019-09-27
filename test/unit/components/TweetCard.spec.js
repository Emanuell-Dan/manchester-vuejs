import TweetCard from '@/components/TweetCard.vue';
import { mount } from '@vue/test-utils';

describe('TweetCard.vue', () => {
	let cmp;

	beforeEach(() => {
		cmp = mount(TweetCard, {
			propsData: {
				gridPosition: 'left'
			}
		});
	});

	it('should render with expected html structure', () => {
		expect(cmp.element).toMatchSnapshot();
	});

	describe('grid position', () => {
		describe('left', () => {
			it('renders with correct modifier', () => {
				expect(cmp.find('.tweet-card--left').classes()).toContain('md:mt-16');
				expect(cmp.find('.tweet-card--left').classes()).not.toContain('md:mt-32');
			});
		});

		describe('right', () => {
			it('renders with correct modifier', () => {
				cmp.setProps({gridPosition: 'right'});
				expect(cmp.find('.tweet-card--right').classes()).toContain('md:mt-32');
				expect(cmp.find('.tweet-card--right').classes()).not.toContain('md:mt-16');
			});
		});

		describe('center', () => {
			it('renders with correct modifier', () => {
				cmp.setProps({gridPosition: 'center'});
				expect(cmp.find('.tweet-card--center').classes()).not.toContain('md:mt-32');
				expect(cmp.find('.tweet-card--center').classes()).not.toContain('md:mt-16');
			});
		});
	});

	describe('twitter card', () => {
		beforeEach(() => {
			cmp.setProps({
				tweets: [
					{
						user: {
							screen_name: 'Gill2929',
							name: 'Harry Hill',
							profile_image_url_https: "https://pbs.twimg.com/profile_images/968837920688869376/KKtiQ1hY_normal.jpg"
						},
						id_str: 'uuid1',
						text: 'twitter text here',
						retweet_count: 5,
						favorite_count: 15
					}
				]
			});
		});

		it('screen name and userId are added to the url for href', () => {
			expect(cmp.find('.block').element.href).toEqual('https://twitter.com/Gill2929/status/uuid1');
		});

		it('renders profile Image', () => {
			expect(cmp.find('.tweet-card__profile-logo').attributes().src).toBe('https://pbs.twimg.com/profile_images/968837920688869376/KKtiQ1hY_normal.jpg');
		});

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

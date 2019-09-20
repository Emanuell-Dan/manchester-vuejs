import News from '@/components/News.vue';
import TweetCard from '@/components/TweetCard.vue';
import { mount } from '@vue/test-utils';
import twitterData from '@/data/twitter.json';

describe('News.vue', () => {
	let cmp;

	beforeEach(() => {
		cmp = mount(News);
	});

	it('should render with expected html structure', () => {
		expect(cmp.element).toMatchSnapshot();
	});

	describe('tweet card', () => {
		it('does not render when there are no tweets', () => {
			expect(cmp.find(TweetCard).exists()).toBeFalsy();
		});

		it('renders with tweets', () => {
			cmp.setProps({tweets: twitterData});
			expect(cmp.find(TweetCard).exists()).toBeTruthy();
		});
	});
});

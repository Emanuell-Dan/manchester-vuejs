import News from '@/components/News.vue';
import TweetCard from '@/components/TweetCard.vue';
import { mount } from '@vue/test-utils';

describe('News.vue', () => {
	let cmp;

	beforeEach(() => {
		cmp = mount(News);
	});

	it('should render with expected html structure', () => {
		expect(cmp.element).toMatchSnapshot();
	});

	describe('tweet card', () => {
		it('renders', () => {
			expect(cmp.find(TweetCard).exists()).toBeTruthy();
		});
	});
});

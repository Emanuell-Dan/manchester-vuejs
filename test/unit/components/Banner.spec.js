import Banner from '@/components/Banner.vue';
import { mount } from 'vue-test-utils';

describe('Banner.vue', () => {
	let cmp;

	beforeEach(() => {
		cmp = mount(Banner);
	});

	it('should render with expected html structure', () => {
		expect(cmp.element).toMatchSnapshot();
	});
});

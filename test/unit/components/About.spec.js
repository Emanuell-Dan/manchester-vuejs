import About from '@/components/About.vue';
import { mount } from '@vue/test-utils';

describe('About.vue', () => {
	let cmp;

	beforeEach(() => {
		cmp = mount(About);
	});

	it('should render with expected html structure', () => {
		expect(cmp.element).toMatchSnapshot();
	});
});

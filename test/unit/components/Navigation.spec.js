import Navigation from '@/components/Navigation.vue';
import { mount } from '@vue/test-utils';

describe('Navigation.vue', () => {
	let cmp;

	beforeEach(() => {
		cmp = mount(Navigation);
	});

	it('should render with expected html structure', () => {
		expect(cmp.element).toMatchSnapshot();
	});

	describe('desktop', () => {
		it('nav is displayed ', () => {
			expect(cmp.find('.nav__desktop').exists()).toBeTruthy();
		});

		it('emits scrollToSection event when an item is clicked', () => {
			cmp.find('.nav__item:first-child').trigger('click');
			expect(cmp.emitted().scrollToSection).toBeTruthy();
			expect(cmp.vm.isNavOpen).toBeFalsy();
		});
	});


	describe('mobile', () => {
		window.innerWidth = 700; // < 768px

		it('mobile nav is displayed', () => {
			expect(cmp.find('.nav__mobile').exists()).toBeTruthy();
		});

		it('nav items are displayed open', () => {
			expect(cmp.find('.nav__mobile-burger').exists()).toBeTruthy();
		});

		it('nav items are closed', () => {
			cmp.find('.nav__mobile').trigger('click');
			expect(cmp.find('.nav__mobile-burger').classes()).toContain('nav__mobile-burger--open');
		});
	});
});

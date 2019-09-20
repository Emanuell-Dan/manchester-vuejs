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
			expect(cmp.find('.nav__desktop').isVisible()).toBeTruthy();
		});

		it('emits scrollToSection event when an item is clicked', () => {
			cmp.find('.nav__item:first-child').trigger('click');
			expect(cmp.emitted().scrollToSection).toBeTruthy();
		});
	});

	describe('mobile', () => {
		window.innerWidth = 700; // < 768px

		it('mobile nav is displayed', () => {
			expect(cmp.find('.nav__mobile').isVisible()).toBeTruthy();
		});

		describe('burger menu', () => {
			it('is closed', () => {
				expect(cmp.vm.isNavOpen).toBeFalsy();
				expect(cmp.find('.nav__mobile-burger').classes()).not.toContain('nav__mobile-burger--open');
			});

			describe('is open', () => {
				beforeEach(() => {
					cmp.find('.nav__mobile').trigger('click');
				});

				it('displays nav items', () => {
					expect(cmp.vm.isNavOpen).toBeTruthy();
					expect(cmp.find('.nav__mobile-burger').classes()).toContain('nav__mobile-burger--open');
				});

				describe('scrolls to section', () => {
					beforeEach(() => {
						cmp.find('.nav__item:first-child').trigger('click');
					});

					it('emits scrollToSection event when an item is clicked', () => {
						expect(cmp.emitted().scrollToSection).toBeTruthy();
					});

					it('hides nav items', () => {
						expect(cmp.vm.isNavOpen).toBeFalsy();
					});
				});
			});
		});
	});

	it('renders link with correct href', () => {
		expect(cmp.find('.nav__link').element.href).toEqual('https://github.com/Emanuell-Dan/manchester-vuejs');
	});
});

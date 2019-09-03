import FutureEvents from '@/components/FutureEvents.vue';
import { mount } from 'vue-test-utils';

describe('FutureEvents.vue', () => {
	let cmp;

	beforeEach(() => {
		cmp = mount(FutureEvents, {
			propsData: {
				event: {
					name: 'vue.js meetup',
					rsvp_limit: 10,
					yes_rsvp_count: 2,
					time: 1530811800000,
					venue: {
						name: 'Spaces',
						address_1: '57 Spring Gardens',
						address_2: 'Manchester'
					}
				}
			}
		});
	});

	it('should render with expected html structure', () => {
		expect(cmp.element).toMatchSnapshot();
	});

	describe('No event', () => {
		beforeEach(() => {
			cmp.setProps({ event: null});
		});
		it('does not render future event card', () => {
			expect(cmp.find('.future-events__card').exists()).toBeFalsy();
		});

		it('displays correct text', () => {
			expect(cmp.find('.future-events__tba').text()).toBe('Watch this space...');
		});
	});

	describe('has event', () => {
		it('renders future event card', () => {
			expect(cmp.find('.future-events__card').exists()).toBeTruthy();
		});

		it('displays event name', () => {
			expect(cmp.find('.future-events__event-name').exists()).toBeTruthy();
			expect(cmp.find('.future-events__event-name').text()).toBe('vue.js meetup');
		});

		describe('number of attendees', () => {
			it('displays number of attendees with limit', () => {
				expect(cmp.find('.future-events__event-attendees').text()).toBe('2 / 10 attendees');
			});

			it('does not display limit', () => {
				cmp.setProps({ event: { ...cmp.vm.event, rsvp_limit: null }});
				expect(cmp.find('.future-events__event-attendees').text()).toBe('2  attendees');
			});
		});

		describe('displays correct event logistics', () => {
			it('renders venue name', () => {
				expect(cmp.find('.future-events__event-venue').text()).toBe('Spaces');
			});

			it('renders event time', () => {
				expect(cmp.find('.future-events__event-date').text()).toBe('Jul 05 2018 at 18:30');
			});

			it('renders address line 1', () => {
				expect(cmp.find('.future-events__event-address').text()).toBe('57 Spring Gardens');
			});

			it('renders address line 2', () => {
				expect(cmp.find('.future-events__event-address:last-child').text()).toBe('Manchester');
			});
		});
	});
});

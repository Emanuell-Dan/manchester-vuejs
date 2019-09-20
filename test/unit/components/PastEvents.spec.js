import PastEvents from '@/components/PastEvents.vue';
import { mount } from '@vue/test-utils';
import dateAndTime from '@/mixins/dateAndTime.js';

describe('PastEvents.vue', () => {
	let cmp;

	beforeEach(() => {
		cmp = mount(PastEvents, {
			mixins: [dateAndTime]
		});
	});

	it('should render with expected html structure', () => {
		expect(cmp.element).toMatchSnapshot();
	});

	describe('No past events', () => {
		it('does not render future event card', () => {
			expect(cmp.find('.past-events__list').exists()).toBeFalsy();
		});
	});

	describe('has past events', () => {
		beforeEach(() => {
			cmp.setProps({
				events: [
					{
						id: '001',
						time: 1551983400000,
						name: 'Next Meetup',
						yes_rsvp_count: 5
					},
					{
						id: '002',
						time: 1551983400000,
						name: 'Java Meetup',
						yes_rsvp_count: 9
					}
				]
			});
		});

		it('renders past event card', () => {
			expect(cmp.find('.past-events__list').exists()).toBeTruthy();
		});

		describe('displays correct past event information', () => {
			it('renders past event time', () => {
				expect(cmp.find('.past-events__event-date').text()).toBe('Mar 07 2019 at 18:30');
			});

			it('renders event name', () => {
				expect(cmp.find('.past-events__event-name').text()).toBe('Next Meetup');
			});

			it('renders amount of attendees', () => {
				expect(cmp.find('.past-events__event-attendees').text()).toBe('5 attendees');
			});
		});
	});
});

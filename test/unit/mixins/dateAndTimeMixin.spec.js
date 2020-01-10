import DateAndTimeMixin from '@/mixins/dateAndTime.js';

describe('DateAndTimeMixin', () => {
	it('returns date and time in correct format', () => {
		expect(DateAndTimeMixin.methods.getDateAndTime(1530811800000)).toEqual('Jul 05 2018 at 6:30:00');
	});
});

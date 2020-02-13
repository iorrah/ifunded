import {
  months,
  formatDate,
} from '../../src/utils/date-formatter';

describe('months', () => {
  test('should have 12 months', () => {
    expect(months.length).toBe(12);
  });
});

describe('formatDate', () => {
  test('should return valid date format', () => {
    const date = formatDate(new Date('2020-02-13'));
    expect(date).toBe('13 February 2020');
  });
});

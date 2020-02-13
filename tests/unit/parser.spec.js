import {
  getRandomBetween,
  getRandomDate,
  getRandomUserId,
  parse,
} from '../../src/utils/parser';

const users = [
  {
    id: 1,
    first_name: 'Jane',
    last_name: 'Doe',
    email: 'jane.doeemail.com',
    created_date: new Date('2019-02-12'), // Feb
    creator_id: 1,
  },
  {
    id: 2,
    first_name: 'Bob',
    last_name: 'Aly',
    email: 'bob.aly@email.com',
    created_date: new Date('2019-12-02'), // Dec
    creator_id: 1,
  },
  {
    id: 3,
    first_name: 'Mary',
    last_name: 'Lee',
    email: 'mary.lee@email.com',
    created_date: new Date('2020-06-13'), // Jun
    creator_id: 1,
  },
];

describe('getRandomBetween', () => {
  test('number should be inside the range', () => {
    const random = getRandomBetween(3, 6);
    expect(typeof random).toBe('number');
    expect(random).toBeGreaterThanOrEqual(3);
    expect(random).toBeLessThanOrEqual(6);
  });
});

describe('getRandomDate', () => {
  test('date should be after past date', () => {
    const random = getRandomDate(2020);
    const dateBefore = new Date('2019-12-31');
    const yearBefore = dateBefore.getFullYear();
    expect(typeof yearBefore).toBe('number');
    expect(random.getFullYear()).toBeGreaterThanOrEqual(yearBefore);
  });

  test('date should be before future date', () => {
    const random = getRandomDate(2020);
    const dateAfter = new Date('2021-01-1');
    const yearAfter = dateAfter.getFullYear();
    expect(typeof yearAfter).toBe('number');
    expect(random.getFullYear()).toBeLessThanOrEqual(yearAfter);
  });
});

describe('getRandomUserId', () => {
  test('user id should be random and inside range', () => {
    const id = getRandomUserId(users);
    expect(typeof id).toBe('number');
    expect(id).toBeGreaterThanOrEqual(1);
    expect(id).toBeLessThanOrEqual(3);
  });
});

describe('parse', () => {
  test('does not change the amount of objects', () => {
    const parsed = parse(users);
    expect(parsed.length).toBe(3);
  });

  test('returns an array of objects', () => {
    const parsed = parse(users);
    expect(Array.isArray(parsed)).toBeTruthy();
    expect(typeof parsed[0]).toBe('object');
  });

  test('builds the requred structure', () => {
    const parsed = parse(users);
    expect(parsed[0].id).toBeDefined();
    expect(parsed[0].first_name).toBeDefined();
    expect(parsed[0].last_name).toBeDefined();
    expect(parsed[0].email).toBeDefined();
    expect(parsed[0].creator_id).toBeDefined();
    expect(parsed[0].created_date).toBeDefined();
  });

  test('new attributes have valid types', () => {
    const parsed = parse(users);
    expect(typeof parsed[0].creator_id).toBe('number');
    expect(typeof parsed[0].created_date).toBe('object');
    expect(typeof parsed[0].created_date.getMonth).toBe('function');
  });
});

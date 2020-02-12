import {
  sortAsc,
  sortDesc,
} from '../../src/utils/sorting';

const strArray = [
  {
    attr: 'b second',
  },
  {
    attr: 'c third',
  },
  {
    attr: 'a first',
  },
];

const numArray = [
  {
    attr: 2,
  },
  {
    attr: 3,
  },
  {
    attr: 1,
  },
];

const date1 = new Date('2020-01-01');
const date2 = new Date('2020-01-02');
const date3 = new Date('2020-01-03');

const dateArray = [
  {
    attr: date2,
  },
  {
    attr: date3,
  },
  {
    attr: date1,
  },
];

describe('sortAsc', () => {
  test('ascending sort an array of strings', () => {
    const sorted = strArray.sort((a, b) => sortAsc(a, b, 'attr'));
    expect(sorted[0]).toMatchObject({ attr: 'a first' });
    expect(sorted[1]).toMatchObject({ attr: 'b second' });
    expect(sorted[2]).toMatchObject({ attr: 'c third' });
  });

  test('ascending sort an array of numbers', () => {
    const sorted = numArray.sort((a, b) => sortAsc(a, b, 'attr'));
    expect(sorted[0]).toMatchObject({ attr: 1 });
    expect(sorted[1]).toMatchObject({ attr: 2 });
    expect(sorted[2]).toMatchObject({ attr: 3 });
  });

  test('ascending sort an array of dates', () => {
    const sorted = dateArray.sort((a, b) => sortAsc(a, b, 'attr'));
    expect(sorted[0]).toMatchObject({ attr: date1 });
    expect(sorted[1]).toMatchObject({ attr: date2 });
    expect(sorted[2]).toMatchObject({ attr: date3 });
  });
});

describe('sortDesc', () => {
  test('descending sort an array of strings', () => {
    const sorted = strArray.sort((a, b) => sortDesc(a, b, 'attr'));
    expect(sorted[0]).toMatchObject({ attr: 'c third' });
    expect(sorted[1]).toMatchObject({ attr: 'b second' });
    expect(sorted[2]).toMatchObject({ attr: 'a first' });
  });

  test('descending sort an array of numbers', () => {
    const sorted = numArray.sort((a, b) => sortDesc(a, b, 'attr'));
    expect(sorted[0]).toMatchObject({ attr: 3 });
    expect(sorted[1]).toMatchObject({ attr: 2 });
    expect(sorted[2]).toMatchObject({ attr: 1 });
  });

  test('descending sort an array of dates', () => {
    const sorted = dateArray.sort((a, b) => sortDesc(a, b, 'attr'));
    expect(sorted[0]).toMatchObject({ attr: date3 });
    expect(sorted[1]).toMatchObject({ attr: date2 });
    expect(sorted[2]).toMatchObject({ attr: date1 });
  });
});

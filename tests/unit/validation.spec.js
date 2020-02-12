import {
  isValidString,
  isValidName,
  isValidEmail,
  isInvalidNumber,
} from '../../src/utils/validation';

describe('isValidString', () => {
  test('valid string "Joe"', () => {
    const string = 'Joe';
    expect(isValidString(string)).toBe(true);
  });

  test('valid string "joe.doe@email.com"', () => {
    const string = 'joe.doe@email.com';
    expect(isValidString(string)).toBe(true);
  });

  test('invalid string "123"', () => {
    const string = '123';
    expect(isValidString(string)).toBe(false);
  });

  test('invalid string 321', () => {
    const string = 321;
    expect(isValidString(string)).toBe(false);
  });
});

describe('isValidName', () => {
  test('valid name "Joe"', () => {
    const name = 'Joe';
    expect(isValidName(name)).toBe(true);
  });

  test('invalid name "Do"', () => {
    const name = 'Do';
    expect(isValidName(name)).toBe(false);
  });

  test('invalid name "John-Doe"', () => {
    const name = 'John-Doe';
    expect(isValidName(name)).toBe(false);
  });

  test('invalid name "joe.doe@email.com"', () => {
    const name = 'joe.doe@email.com';
    expect(isValidName(name)).toBe(false);
  });

  test('invalid name "#"', () => {
    const name = '#';
    expect(isValidName(name)).toBe(false);
  });

  test('invalid name "123"', () => {
    const name = '123';
    expect(isValidName(name)).toBe(false);
  });

  test('invalid name 321', () => {
    const name = 321;
    expect(isValidName(name)).toBe(false);
  });
});

describe('isValidEmail', () => {
  test('valid email "joe.doe@email.com"', () => {
    const email = 'joe.doe@email.com';
    expect(isValidEmail(email)).toBe(true);
  });

  test('valid email "a@b.c"', () => {
    const email = 'a@b.c';
    expect(isValidEmail(email)).toBe(true);
  });

  test('invalid email "123"', () => {
    const email = '123';
    expect(isValidEmail(email)).toBe(false);
  });

  test('invalid email "joe@"', () => {
    const email = 'joe@';
    expect(isValidEmail(email)).toBe(false);
  });

  test('invalid email "@joe"', () => {
    const email = '@joe';
    expect(isValidEmail(email)).toBe(false);
  });

  test('invalid email "joe@doe@email.com"', () => {
    const email = 'joe@doe@email.com';
    expect(isValidEmail(email)).toBe(false);
  });

  test('invalid email "joe.doeemail.com"', () => {
    const email = 'joe.doeemail.com';
    expect(isValidEmail(email)).toBe(false);
  });
});

describe('isInvalidNumber', () => {
  test('valid not-a-number "joe"', () => {
    const number = 'joe';
    expect(isInvalidNumber(number)).toBe(true);
  });

  test('valid not-a-number "@"', () => {
    const number = '@';
    expect(isInvalidNumber(number)).toBe(true);
  });

  test('valid not-a-number " "', () => {
    const number = ' ';
    expect(isInvalidNumber(number)).toBe(true);
  });

  test('invalid not-a-number -1', () => {
    const number = -1;
    expect(isInvalidNumber(number)).toBe(false);
  });

  test('invalid not-a-number 0', () => {
    const number = 0;
    expect(isInvalidNumber(number)).toBe(false);
  });

  test('invalid not-a-number 0.99999', () => {
    const number = 0.99999;
    expect(isInvalidNumber(number)).toBe(false);
  });

  test('invalid not-a-number 1', () => {
    const number = 1;
    expect(isInvalidNumber(number)).toBe(false);
  });
});

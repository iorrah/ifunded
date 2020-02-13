import {
  internalError,
  serverError,
  handleInternalError,
  handleServerError,
} from '../../src/utils/handle-error';

const undefinedError = "Can't read property 'id' of undefined";

describe('handleInternalError', () => {
  test('should return internal error', () => {
    const error = handleInternalError(undefinedError, jest.fn());
    expect(error).toBe(`${internalError.header} (${undefinedError}): ${internalError.body}`);
  });

  test('should call function that prints internal error', () => {
    const printError = jest.fn();
    handleInternalError(undefinedError, printError);
    expect(printError).toBeCalled();
  });
});

describe('handleServerError', () => {
  test('should return external error', () => {
    const error = handleServerError(500, jest.fn());
    expect(error).toBe(`${serverError.header} (500): ${serverError.body}`);
  });

  test('should call function that prints external error', () => {
    const printError = jest.fn();
    handleServerError(500, printError);
    expect(printError).toBeCalled();
  });
});

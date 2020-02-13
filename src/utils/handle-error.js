const internalError = {
  header: 'Internal Error',
  body: 'the client could not complete the transaction',
};

const serverError = {
  header: 'Server Error',
  body: 'the REST API could not complete the transaction',
};

// eslint-disable-next-line arrow-body-style
const constructError = (structure, error) => {
  return `${structure.header} (${error}): ${structure.body}`;
};

const handleInternalError = (error, fn) => {
  const string = constructError(internalError, error);

  if (fn && typeof fn === 'function') {
    fn(string);
  } else {
    // eslint-disable-next-line no-console
    console.error(string);
  }

  return string;
};

const handleServerError = (error, fn) => {
  const string = constructError(serverError, error);

  if (fn && typeof fn === 'function') {
    fn(string);
  } else {
    // eslint-disable-next-line no-console
    console.error(string);
  }

  return string;
};

export {
  internalError,
  serverError,
  handleInternalError,
  handleServerError,
};

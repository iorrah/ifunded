const internalError = {
  header: 'Internal Error',
  body: 'the client could not complete the transaction',
};

const serverError = {
  header: 'Server Error',
  body: 'the REST API could not complete the transaction',
};

const handleInternalError = (error) => {
  const string = `${internalError.header} (${error}): ${internalError.body}`;
  // eslint-disable-next-line no-console
  console.error(string);
  return string;
};

const handleServerError = (error) => {
  const string = `${serverError.header} ${error}: ${serverError.body}`;
  // eslint-disable-next-line no-console
  console.error(string);
  return string;
};

export {
  internalError,
  serverError,
  handleInternalError,
  handleServerError,
};

const handleInternalError = (error) => {
  const string = `Internal Error (${error}): the client could not complete the transaction`;
  // eslint-disable-next-line no-console
  console.error(string);
};

const handleServerError = (error) => {
  const string = `Server Error ${error}: the REST API could not complete the transaction`;
  // eslint-disable-next-line no-console
  console.error(string);
};

export { handleInternalError, handleServerError };

const handleInternalError = (error) => {
  const string = `Internal Error (${error}): the client could not create the new user`;
  console.error(string);
};

const handleServerError = (error) => {
  const string = `Server Error ${error}: the REST API could not create the new user`;
  console.error(string);
};

export { handleInternalError, handleServerError };

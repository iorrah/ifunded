const isValidString = (name) => {
  if (name.trim() === '') {
    return false;
  }

  if (name === null) {
    return false;
  }

  if (name === undefined) {
    return false;
  }

  if (!Number.isNaN(parseInt(name, 10))) {
    return false;
  }

  if (name.length < 3) {
    return false;
  }

  return true;
};

const isValidName = (name) => {
  if (isValidString(name) === false) {
    return false;
  }

  if (name.indexOf('#') >= 0) {
    return false;
  }

  if (name.indexOf('%') >= 0) {
    return false;
  }

  if (name.indexOf('&') >= 0) {
    return false;
  }

  if (name.indexOf('.') >= 0) {
    return false;
  }

  if (name.indexOf(';') >= 0) {
    return false;
  }

  if (name.indexOf(';') >= 0) {
    return false;
  }

  if (name.indexOf('$') >= 0) {
    return false;
  }

  if (name.indexOf('€') >= 0) {
    return false;
  }

  if (name.indexOf('"') >= 0) {
    return false;
  }

  if (name.indexOf('/') >= 0) {
    return false;
  }

  if (name.indexOf('!') >= 0) {
    return false;
  }

  if (name.indexOf('?') > 0) {
    return false;
  }

  return true;
};

const isValidEmail = (email) => {
  if (isValidString(email) === false) {
    return false;
  }

  if (email.indexOf('@') === -1) {
    return false;
  }

  if (email.indexOf('@') === 0) {
    return false;
  }

  if (email.indexOf('@') === (email.length - 1)) {
    return false;
  }

  return true;
};

export { isValidName, isValidEmail };

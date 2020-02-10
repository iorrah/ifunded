const sortAsc = (a, b, prop) => {
  if (a[prop] < b[prop]) {
    return -1;
  }

  if (a[prop] > b[prop]) {
    return 1;
  }

  return 0;
};

const sortDesc = (a, b, prop) => {
  if (a[prop] > b[prop]) {
    return -1;
  }

  if (a[prop] < b[prop]) {
    return 1;
  }

  return 0;
};

export { sortAsc, sortDesc };

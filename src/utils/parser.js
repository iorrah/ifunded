// eslint-disable-next-line
const getRandomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// eslint-disable-next-line
const getRandomDate = (year) => {
  return `${getRandomBetween(1, 28)}/${getRandomBetween(1, 12)}/${year}`;
};

// eslint-disable-next-line
const getRandomUserId = (users) => {
  return users[getRandomBetween(0, users.length - 1)].id;
};

// eslint-disable-next-line
const parse = (users) => {
  // eslint-disable-next-line
  return users.map((e) => {
    return {
      id: e.id,
      first_name: e.first_name,
      last_name: e.last_name,
      email: e.email,
      creator_id: getRandomUserId(users),
      created_date: getRandomDate('2019'),
    };
  });
};

// eslint-disable-next-line
export { parse };

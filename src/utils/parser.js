/*
 * I'm adding new attributes (creator_id and created_date)
 * and random values to the data because I want to build
 * filtering and sorting features and unfortunately the users
 * payload that is coming from Reqres has few attributes:
 * id, first_name, last_name, email, avatar
 */

// eslint-disable-next-line
const getRandomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// eslint-disable-next-line
const getRandomDate = (year) => {
  const date = `${year}-${getRandomBetween(1, 12)}-${getRandomBetween(1, 28)}`;
  return new Date(date);
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

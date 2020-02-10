import Axios from 'axios';

export const ACTION_APP_GET_USERS = 'ActionAppGetUsers';
export const ACTION_APP_ADD_USER = 'ActionAppAddUser';

const GET_USERS_VALUE = 'GetUsersValue';
const ADD_USER_VALUE = 'AddUserValue';

// eslint-disable-next-line no-unused-vars
const state = {
  users: [],
};

// eslint-disable-next-line no-unused-vars
const getters = {
  // eslint-disable-next-line no-shadow, arrow-body-style
  getUsers: (state) => {
    return state.users;
  },
};

// eslint-disable-next-line no-unused-vars
const mutations = {
  // eslint-disable-next-line no-shadow
  [GET_USERS_VALUE]: (state, payload) => {
    // eslint-disable-next-line no-param-reassign
    state.users = payload.data;
  },
  // eslint-disable-next-line no-shadow
  [ADD_USER_VALUE]: (state, payload) => {
    state.users.push(payload);
  },
};

// eslint-disable-next-line no-unused-vars
const actions = {
  [ACTION_APP_GET_USERS]: async (context /* , payload */) => {
    const { data } = await Axios.get('https://reqres.in/api/users?total=16&per_page=16&page=1&total_pages=1');
    context.commit(GET_USERS_VALUE, data);
  },
  [ACTION_APP_ADD_USER]: async (context, payload) => {
    // eslint-disable-next-line no-unused-vars
    const { data } = await Axios.post('https://reqres.in/api/users', { first_name: 'Jane', last_name: 'Doe', email: 'jane.doe@email.com' });
    context.commit(ADD_USER_VALUE, payload);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};

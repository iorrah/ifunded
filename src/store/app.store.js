import Axios from 'axios';
import { parse } from '../utils/parser';

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
    state.users = parse(payload.data);
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
    try {
      const response = await Axios.post('https://reqres.in/api/users', payload);

      if (response.status === 201) {
        context.commit(ADD_USER_VALUE, response.data);
      } else {
        console.error(`Server Error ${response.status}: the REST API could not create the new user`);
      }
    } catch (e) {
      console.error(`Internal Error (${e.response}): the client could not create the new user`);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};

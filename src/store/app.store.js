import Axios from 'axios';
import { parse } from '../utils/parser';
import { handleInternalError, handleServerError } from '../utils/handle-error';

export const ACTION_APP_GET_USERS = 'ActionAppGetUsers';
export const ACTION_APP_ADD_USER = 'ActionAppAddUser';
export const ACTION_APP_EDIT_USER = 'ActionAppEditUser';

const GET_USERS_VALUE = 'GetUsersValue';
const ADD_USER_VALUE = 'AddUserValue';
const EDIT_USER_VALUE = 'EditUserValue';

const API_HOST = 'https://reqres.in/api';
const API_USERS_URI = 'users';
const API_USERS_URL = `${API_HOST}/${API_USERS_URI}`;

const API_PARAMS = {
  total: 16,
  per_page: 16,
  page: 1,
  total_pages: 1,
};

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
    state.users.push({
      ...payload,
      created_date: new Date(payload.created_date),
    });
  },
  // eslint-disable-next-line no-shadow
  [EDIT_USER_VALUE]: (state, payload) => {
    const editedUser = {
      ...payload,
      created_date: new Date(payload.created_date),
    };

    const users = state.users.map((user) => {
      if (user.id === editedUser.id) {
        return editedUser;
      }

      return user;
    });

    state.users = users;
  },
};

// eslint-disable-next-line no-unused-vars
const actions = {
  [ACTION_APP_GET_USERS]: async (context) => {
    const { data } = await Axios.get(API_USERS_URL, { params: API_PARAMS });
    context.commit(GET_USERS_VALUE, data);
  },
  [ACTION_APP_ADD_USER]: async (context, payload) => {
    try {
      const response = await Axios.post(API_USERS_URL, payload);

      if (response.status === 201) {
        context.commit(ADD_USER_VALUE, response.data);
      } else {
        handleServerError(response.status);
      }
    } catch (e) {
      handleInternalError(e.response);
    }
  },
  [ACTION_APP_EDIT_USER]: async (context, payload) => {
    try {
      const response = await Axios.put(API_USERS_URL, payload);

      if (response.status === 200) {
        context.commit(EDIT_USER_VALUE, response.data);
      } else {
        handleServerError(response.status);
      }
    } catch (e) {
      handleInternalError(e.response);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};

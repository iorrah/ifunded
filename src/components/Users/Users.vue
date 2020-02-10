<template>
  <div class="users container">
    <Filters :search.sync="search"  />

    <div class="users__header flex__space-between">
      <h3 class="users__title">
        Users

        <small class="users__title-small">
          ({{ filteredUsers.length }})
        </small>
      </h3>

      <div>
        <button type="button" class="button button--primary">Add User</button>
      </div>
    </div>

    <table class="users__table">
      <thead class="users__table-header">
        <tr>
          <th
            class="users__table-cell users__table-cell--name"
            @click="sortUsers('last_name')"
            title="Sort column by Last Name"
          >
            Name

            <img
              src="../../assets/select-arrows.svg"
              class="users__table-header-arrow"
            />
          </th>

          <th
            class="users__table-cell users__table-cell--email"
            @click="sortUsers('email')"
            title="Sort column by Email"
          >
            Email

            <img
              src="../../assets/select-arrows.svg"
              class="users__table-header-arrow"
            />
          </th>

          <th class="users__table-cell users__table-cell--action">
            &nbsp;
          </th>
        </tr>
      </thead>

      <tbody class="users__table-body">
        <tr class="users__table_row" v-for="user in filteredUsers" v-bind:key="user.id">
          <td class="users__table-cell">{{ user.first_name }} {{ user.last_name }}</td>
          <td class="users__table-cell">{{ user.email }}</td>

          <td class="users__table-cell">
            <img
              src="../../assets/action-icon.svg"
              class="users__table-row-action"
            />
          </td>
        </tr>
      </tbody>
    </table>

    <div class="users__pagination">
      <img
        src="../../assets/arrow-left-circle.svg"
        class="users__pagination__arrow"
      />

      <span class="users__pagination-label">
        1-{{ filteredUsers.length }} of {{ filteredUsers.length }}
      </span>

      <img
        src="../../assets/arrow-right-circle.svg"
        class="users__pagination__arrow"
      />
    </div>
  </div>
</template>

<script>
import Filters from '../Filters/index';

import {
  ACTION_APP_GET_USERS,
  ACTION_APP_ADD_USER,
} from '../../store/app.store';

import { sortAsc, sortDesc } from '../../utils/sorting';

export default {
  name: 'Users',
  props: [],
  computed: {
    appUsers() {
      return this.$store.getters.getUsers;
    },
    filteredUsers() {
      return this.getFilteredBySearch(this.appUsers, this.search);
    },
  },
  data() {
    return {
      sort: 'asc',
      search: '',
    };
  },
  methods: {
    getUsers() {
      this.$store.dispatch(ACTION_APP_GET_USERS);
    },
    addUser() {
      this.$store.dispatch(ACTION_APP_ADD_USER);
    },
    sortUsers(prop) {
      if (this.sort === 'asc') {
        this.sort = 'desc';
        return this.appUsers.sort((a, b) => sortAsc(a, b, prop));
      }

      this.sort = 'asc';
      return this.appUsers.sort((a, b) => sortDesc(a, b, prop));
    },
    getFilteredBySearch(users, search) {
      return users.filter((user) => {
        const userString = `${user.first_name} ${user.last_name} ${user.email}`;
        return userString.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
    },
  },
  mounted() {
    this.getUsers();
  },
  components: {
    Filters,
  },
};
</script>

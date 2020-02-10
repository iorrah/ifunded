<template>
  <div class="users container" v-if="appUsers.length > 0">
    <Filters
      :search.sync="search"
      :creatorId.sync="creatorId"
      :month.sync="month"
      :appUsers="appUsers"
    />

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

          <th
            class="users__table-cell users__table-cell--date"
            @click="sortUsers('created_date')"
            title="Sort column by creation date"
          >
            Created at

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
          <td class="users__table-cell">{{ formatDate(user.created_date) }}</td>

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
import { formatDate } from '../../utils/date-formatter';

export default {
  name: 'Users',
  props: [],
  computed: {
    appUsers() {
      return this.$store.getters.getUsers;
    },
    filteredUsers() {
      let users = this.appUsers;

      if (this.search !== '') {
        users = this.getFilteredBySearch(users, this.search);
      }

      if (this.creatorId !== null) {
        users = this.getFilteredByCreator(users, this.creatorId);
      }

      if (this.month !== null) {
        users = this.getFilteredByMonth(users, this.month);
      }

      return users;
    },
  },
  data() {
    return {
      sort: 'asc',
      search: '',
      creatorId: null,
      month: null,
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
    getFilteredByCreator(users, creatorId) {
      return users.filter((user) => user.creator_id === creatorId, 10);
    },
    getFilteredByMonth(users, month) {
      return users.filter((user) => {
        const creationMonth = new Date(user.created_date).getMonth() + 1;
        return creationMonth === month;
      });
    },
    formatDate(date) {
      return formatDate(date);
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

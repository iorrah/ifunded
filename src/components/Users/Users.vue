<template>
  <div class="users container">
    <div class="users__header flex__space-between">
      <h3 class="users__title">
        Users

        <small class="users__title-small">
          ({{ appUsers.length }})
        </small>
      </h3>

      <div>
        <button type="button" class="button button--primary">Add User</button>
      </div>
    </div>

    <table class="users__table">
      <thead class="users__table-header">
        <tr>
          <th class="users__table-cell users__table-cell--name" @click="sortUsers('first_name')">
            Name

            <img
              src="../../assets/select-arrows.svg"
              class="users__table-header-arrow"
            />
          </th>

          <th class="users__table-cell users__table-cell--email" @click="sortUsers('email')">
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
        <tr class="users__table_row" v-for="user in appUsers" v-bind:key="user.id">
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
        1-{{ appUsers.length }} of {{ appUsers.length }}
      </span>

      <img
        src="../../assets/arrow-right-circle.svg"
        class="users__pagination__arrow"
      />
    </div>
  </div>
</template>

<script>
import {
  ACTION_APP_GET_USERS,
  ACTION_APP_ADD_USER,
} from '../../store/app.store';

export default {
  name: 'Users',
  props: {
  },
  computed: {
    appUsers() {
      return this.$store.getters.getUsers;
    },
  },
  data() {
    return {
      sort: 'asc',
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
      const sortAsc = (a, b) => {
        if (a[prop] < b[prop]) {
          return -1;
        }

        if (a[prop] > b[prop]) {
          return 1;
        }

        return 0;
      };

      const sortDesc = (a, b) => {
        if (a[prop] > b[prop]) {
          return -1;
        }

        if (a[prop] < b[prop]) {
          return 1;
        }

        return 0;
      };

      if (this.sort === 'asc') {
        this.sort = 'desc';
        return this.appUsers.sort(sortAsc);
      }

      this.sort = 'asc';
      return this.appUsers.sort(sortDesc);
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>

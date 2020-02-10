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
          <th class="users__table-cell users__table-cell--name">
            Name

            <img
              src="../../assets/select-arrows.svg"
              class="users__table-header-arrow"
            />
          </th>

          <th class="users__table-cell users__table-cell--email">
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
  methods: {
    getUsers() {
      this.$store.dispatch(ACTION_APP_GET_USERS);
    },
    addUser() {
      this.$store.dispatch(ACTION_APP_ADD_USER);
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>

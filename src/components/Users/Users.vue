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

    <table class="table">
      <tr v-for="user in appUsers" v-bind:key="user.id">
        <td>{{ user.first_name }}</td>
        <td>{{ user.last_name }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import {
  ACTION_APP_GET_USERS,
  ACTION_APP_ADD_USER,
} from '../../store/app.store';

import './style.scss';

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

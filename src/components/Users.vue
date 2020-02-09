<template>
  <div class="users">
    <h3>Users</h3>

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
} from '../store/app.store';

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 20px;
}
table {
  margin: 0 auto;
}
</style>
